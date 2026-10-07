import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {highlight, prepareIndex, search, snippet} from './searchEngine';
import styles from './styles.module.css';

const EXAMPLES = ['Broadcast', 'Message templates', 'Connect Shopify', '24-hour window'];

let indexPromise = null;

// The index is fetched the first time the search box opens, not on page load.
function loadIndex() {
  if (!indexPromise) {
    indexPromise = import('@generated/docs-search/default/search-index.json')
      .then((module) => prepareIndex(module.default))
      .catch((error) => {
        indexPromise = null;
        throw error;
      });
  }
  return indexPromise;
}

function SearchIcon({className}) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm5-2 4.5 4.5"
      />
    </svg>
  );
}

function Highlighted({text, terms}) {
  return highlight(text, terms).map((part, i) =>
    part.hit ? <mark key={i}>{part.text}</mark> : <React.Fragment key={i}>{part.text}</React.Fragment>,
  );
}

function ContactPanel({query, support}) {
  const subject = query ? `Docs help: ${query}` : 'Docs help';
  const message = query
    ? `Hi, I couldn't find "${query}" in the Zprox.Chat docs.`
    : "Hi, I need help with Zprox.Chat.";
  const whatsappNumber = support.whatsapp?.replace(/\D/g, '');
  const hasDirectContact = support.email || whatsappNumber;

  return (
    <div className={styles.contact}>
      <p className={styles.contactTitle}>Can’t find what you’re looking for?</p>
      <p className={styles.contactText}>
        {hasDirectContact
          ? 'Our support team can help. Tell us what you searched for and we’ll point you in the right direction.'
          : 'Contact PROITBRIDGE support and tell us what you searched for.'}
      </p>
      <div className={styles.contactActions}>
        {support.email && (
          <a
            className={styles.contactPrimary}
            href={`mailto:${support.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}>
            Email {support.email}
          </a>
        )}
        {whatsappNumber && (
          <a
            className={support.email ? styles.contactSecondary : styles.contactPrimary}
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer">
            Chat on WhatsApp
          </a>
        )}
        <Link className={styles.contactSecondary} to="/faq">
          Browse the FAQ
        </Link>
        <Link className={styles.contactSecondary} to="/Troubleshooting">
          Troubleshooting
        </Link>
      </div>
    </div>
  );
}

function SearchModal({onClose, support}) {
  const history = useHistory();
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [active, setActive] = useState(0);
  // The contact panel is shown on its own when nothing matches, and on request
  // ("Contact us" in the footer) when the results aren't what was wanted.
  const [showContact, setShowContact] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    if (showContact) contactRef.current?.scrollIntoView({block: 'nearest', behavior: 'smooth'});
  }, [showContact]);

  useEffect(() => {
    let cancelled = false;
    loadIndex().then(
      (loaded) => !cancelled && setIndex(loaded),
      () => !cancelled && setLoadFailed(true),
    );
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
    const {overflow} = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  const {results, terms, correctedQuery} = useMemo(() => search(index, query), [index, query]);
  const trimmed = query.trim();

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${active}"]`)
      ?.scrollIntoView({block: 'nearest'});
  }, [active]);

  const open = useCallback(
    (result) => {
      onClose();
      history.push(result.u);
    },
    [history, onClose],
  );

  const onKeyDown = (event) => {
    if (event.key === 'ArrowDown' && results.length) {
      event.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (event.key === 'ArrowUp' && results.length) {
      event.preventDefault();
      setActive((i) => (i - 1 + results.length) % results.length);
    } else if (event.key === 'Enter' && results[active]) {
      event.preventDefault();
      open(results[active]);
    }
  };

  let body;
  if (loadFailed) {
    body = (
      <>
        <p className={styles.message}>Search couldn’t load. Check your connection and try again.</p>
        <ContactPanel query={trimmed} support={support} />
      </>
    );
  } else if (!trimmed) {
    body = (
      <div className={styles.empty}>
        <p className={styles.message}>Search every page of the Zprox.Chat docs. Try:</p>
        <div className={styles.examples}>
          {EXAMPLES.map((example) => (
            <button
              key={example}
              type="button"
              className={styles.example}
              onClick={() => {
                setQuery(example);
                setActive(0);
                inputRef.current?.focus();
              }}>
              {example}
            </button>
          ))}
        </div>
      </div>
    );
  } else if (!index) {
    body = <p className={styles.message}>Loading search…</p>;
  } else if (!results.length) {
    body = (
      <>
        <p className={styles.message}>
          No results for <strong>“{trimmed}”</strong>.
        </p>
        <ContactPanel query={trimmed} support={support} />
      </>
    );
  } else {
    body = (
      <>
        {correctedQuery && (
          <p className={styles.correction}>
            No exact matches for “{trimmed}”. Showing results for <strong>{correctedQuery}</strong>.
          </p>
        )}
        <ul className={styles.results} id="docs-search-results" role="listbox" ref={listRef}>
          {results.map((result, i) => (
            <li
              key={result.u}
              id={`docs-search-result-${i}`}
              role="option"
              aria-selected={i === active}
              data-index={i}>
              <Link
                to={result.u}
                className={i === active ? `${styles.result} ${styles.resultActive}` : styles.result}
                tabIndex={-1}
                onMouseMove={() => setActive(i)}
                onClick={onClose}>
                <span className={styles.resultPage}>{result.p}</span>
                <span className={styles.resultHeading}>
                  <Highlighted text={result.h || result.p} terms={terms} />
                </span>
                {result.t && (
                  <span className={styles.resultText}>
                    <Highlighted text={snippet(result.t, terms)} terms={terms} />
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        {showContact && (
          <div ref={contactRef}>
            <ContactPanel query={trimmed} support={support} />
          </div>
        )}
      </>
    );
  }

  return (
    <div className={styles.overlay} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-label="Search the docs">
        <div className={styles.inputRow}>
          <SearchIcon className={styles.inputIcon} />
          <input
            ref={inputRef}
            className={styles.input}
            type="search"
            placeholder="Search the docs"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
              setShowContact(false);
            }}
            onKeyDown={onKeyDown}
            role="combobox"
            aria-expanded={results.length > 0}
            aria-controls="docs-search-results"
            aria-activedescendant={results.length ? `docs-search-result-${active}` : undefined}
            aria-autocomplete="list"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="go"
          />
          <button type="button" className={styles.close} onClick={onClose}>
            <span className={styles.closeKey}>Esc</span>
            <span className={styles.closeText}>Cancel</span>
          </button>
        </div>
        <div className={styles.body}>{body}</div>
        {results.length > 0 && (
          <div className={styles.footer}>
            <span className={styles.footerKeys}>
              <kbd>↑</kbd>
              <kbd>↓</kbd> to move <kbd>↵</kbd> to open
            </span>
            <span>
              Not what you need?{' '}
              <button type="button" className={styles.footerLink} onClick={() => setShowContact(true)}>
                Contact us
              </button>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchBar() {
  const {siteConfig} = useDocusaurusContext();
  const support = siteConfig.customFields?.support ?? {};
  const [open, setOpen] = useState(false);
  const [shortcut, setShortcut] = useState('Ctrl K');
  const buttonRef = useRef(null);
  const openRef = useRef(open);
  openRef.current = open;

  const close = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (/Mac|iPhone|iPad/.test(navigator.platform)) setShortcut('⌘ K');

    const onKeyDown = (event) => {
      const typing = event.target.closest?.('input, textarea, select, [contenteditable="true"]');
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (openRef.current) close();
        else setOpen(true);
      } else if (event.key === '/' && !typing && !openRef.current) {
        event.preventDefault();
        setOpen(true);
      } else if (event.key === 'Escape' && openRef.current) {
        close();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className={styles.trigger}
        onClick={() => setOpen(true)}
        onMouseEnter={() => loadIndex().catch(() => {})}
        aria-label="Search the docs"
        aria-haspopup="dialog">
        <SearchIcon className={styles.triggerIcon} />
        <span className={styles.triggerText}>Search docs</span>
        <kbd className={styles.triggerKey}>{shortcut}</kbd>
      </button>
      {open && createPortal(<SearchModal onClose={close} support={support} />, document.body)}
    </>
  );
}
