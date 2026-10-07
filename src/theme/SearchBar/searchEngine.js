// Ranking and snippet helpers for the docs search. Records come from
// plugins/docs-search: {p: page title, h: heading, u: url, t: section text}.

const STOP_WORDS = new Set(
  ('a an and are as at be by can could do does for from get how i if in into is it ' +
    'me my of on or our should the their there this to use using was we what when ' +
    'where which who why will with you your').split(' '),
);

const MAX_RESULTS = 20;

export function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

function tokenize(query) {
  const words = normalize(query).split(/[^a-z0-9]+/).filter(Boolean);
  const meaningful = words.filter((word) => !STOP_WORDS.has(word));
  // A query made only of stop words ("how to") is still searched as typed.
  return [...new Set(meaningful.length ? meaningful : words)];
}

export function prepareIndex(records) {
  const vocabulary = new Set();
  const prepared = records.map((record) => {
    const entry = {
      ...record,
      _p: normalize(record.p),
      _h: normalize(record.h),
      _t: normalize(record.t),
    };
    for (const word of `${entry._p} ${entry._h} ${entry._t}`.split(/[^a-z0-9]+/)) {
      if (word.length >= 3) vocabulary.add(word);
    }
    return entry;
  });
  return {records: prepared, vocabulary: [...vocabulary]};
}

const isWordChar = (ch) => ch !== undefined && /[a-z0-9]/.test(ch);

/** Score one term against one field: 0 when absent, more at word starts and for whole words. */
function fieldScore(field, term, weight) {
  let best = 0;
  let count = 0;
  for (let i = field.indexOf(term); i !== -1; i = field.indexOf(term, i + 1)) {
    const wordStart = !isWordChar(field[i - 1]);
    // One- and two-letter terms only count at the start of a word.
    if (term.length < 3 && !wordStart) continue;
    const wholeWord = wordStart && !isWordChar(field[i + term.length]);
    best = Math.max(best, weight * (1 + (wordStart ? 1 : 0) + (wholeWord ? 0.5 : 0)));
    if (++count >= 5) break;
  }
  return count ? best + (count - 1) * weight * 0.1 : 0;
}

function scoreRecord(record, terms, phrase) {
  let total = 0;
  for (const term of terms) {
    const score =
      fieldScore(record._h, term, 10) +
      fieldScore(record._p, term, 6) +
      fieldScore(record._t, term, 2);
    if (score === 0) return 0; // every term must appear somewhere in the section
    total += score;
  }
  if (phrase) {
    if (record._h.includes(phrase)) total += 25;
    else if (record._t.includes(phrase)) total += 10;
  }
  // Page intros (no heading) rank slightly above sections on ties.
  return record.h ? total : total + 1;
}

function runSearch(index, terms, phrase) {
  return index.records
    .map((record) => ({record, score: scoreRecord(record, terms, phrase)}))
    .filter((hit) => hit.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RESULTS)
    .map((hit) => hit.record);
}

function editDistance(a, b, limit) {
  if (Math.abs(a.length - b.length) > limit) return limit + 1;
  let prev = Array.from({length: b.length + 1}, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const row = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      row[j] = Math.min(
        prev[j] + 1,
        row[j - 1] + 1,
        prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
      rowMin = Math.min(rowMin, row[j]);
    }
    if (rowMin > limit) return limit + 1;
    prev = row;
  }
  return prev[b.length];
}

/** Swap misspelt terms for the closest word that appears in the docs. */
function correctTerms(index, terms) {
  let changed = false;
  const corrected = terms.map((term) => {
    if (term.length < 4 || index.vocabulary.some((word) => word.includes(term))) {
      return term;
    }
    const limit = term.length >= 7 ? 2 : 1;
    let best = null;
    let bestDistance = limit + 1;
    for (const word of index.vocabulary) {
      const distance = editDistance(term, word, limit);
      if (distance < bestDistance) {
        best = word;
        bestDistance = distance;
      }
    }
    if (!best) return term;
    changed = true;
    return best;
  });
  return changed ? corrected : null;
}

/**
 * @returns {{results: object[], terms: string[], correctedQuery: string | null}}
 */
export function search(index, query) {
  const terms = tokenize(query);
  if (!index || terms.length === 0) {
    return {results: [], terms, correctedQuery: null};
  }
  const phrase = terms.length > 1 ? normalize(query).trim().replace(/\s+/g, ' ') : '';
  const results = runSearch(index, terms, phrase);
  if (results.length) {
    return {results, terms, correctedQuery: null};
  }
  const corrected = correctTerms(index, terms);
  if (corrected) {
    const retry = runSearch(index, corrected, '');
    if (retry.length) {
      return {results: retry, terms: corrected, correctedQuery: corrected.join(' ')};
    }
  }
  return {results: [], terms, correctedQuery: null};
}

const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Split text into [{text, hit}] parts so matches can be wrapped in <mark>. */
export function highlight(text, terms) {
  if (!terms.length) return [{text, hit: false}];
  const pattern = new RegExp(
    `(${[...terms].sort((a, b) => b.length - a.length).map(escapeRegExp).join('|')})`,
    'gi',
  );
  // With a capturing group, split() puts the matches at the odd indexes.
  return text
    .split(pattern)
    .map((part, i) => ({text: part, hit: i % 2 === 1}))
    .filter((part) => part.text);
}

/** A short excerpt of the section text around the first match. */
export function snippet(text, terms, length = 170) {
  if (text.length <= length) return text;
  const lower = text.toLowerCase();
  const first = Math.min(
    ...terms.map((term) => lower.indexOf(term)).filter((i) => i !== -1),
  );
  if (!Number.isFinite(first) || first < 60) {
    return `${text.slice(0, length).replace(/\s+\S*$/, '')} …`;
  }
  let start = text.lastIndexOf(' ', first - 50);
  start = start === -1 ? 0 : start + 1;
  const excerpt = text.slice(start, start + length).replace(/\s+\S*$/, '');
  return `… ${excerpt}${start + length < text.length ? ' …' : ''}`;
}
