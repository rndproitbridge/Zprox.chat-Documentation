// @ts-check

// Builds a search index from the docs' Markdown, split into one record per
// heading so results can link straight to the matching section. The index is
// written to .docusaurus/docs-search/default/search-index.json and loaded by
// src/theme/SearchBar only when someone opens the search box.

import fs from 'fs/promises';
import path from 'path';
import {createSlugger} from '@docusaurus/utils';

/** Inline Markdown to plain text, the way Docusaurus reads heading text for ids. */
function stripInline(text) {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links keep their text
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\*+/g, '')
    .replace(/\\([\\`*_{}[\]()#+\-.!|])/g, '$1');
}

/** Block-level Markdown lines to plain text. */
function toPlainText(lines) {
  return stripInline(
    lines
      .filter((line) => !/^\s*\|?\s*:?-{3,}/.test(line)) // table separator rows
      .map((line) =>
        line
          .replace(/^\s*:::\w*/, '') // admonition fences
          .replace(/^\s*>\s?/, '') // blockquotes
          .replace(/^\s*([-*+]|\d+\.)\s+/, '') // list markers
          .replace(/\|/g, ' '), // table cells
      )
      .join(' '),
  )
    .replace(/\s+/g, ' ')
    .trim();
}

function splitIntoSections(source, doc) {
  const body = source
    .replace(/^---[\s\S]*?\n---\s*\n/, '') // front matter
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ') // MDX comments
    .replace(/<!--[\s\S]*?-->/g, ' ') // HTML comments
    .replace(/^\s*(import|export)\s.*$/gm, '') // MDX imports/exports
    .replace(/<\/?[A-Za-z][^>]*>/g, ' '); // HTML/JSX tags (keeps their text)

  const slugger = createSlugger();
  const sections = [];
  let current = {heading: '', anchor: '', lines: []};
  let inFence = false;

  for (const line of body.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    const match = !inFence && /^(#{1,6})\s+(.*?)\s*#*\s*$/.exec(line);
    if (!match) {
      current.lines.push(line);
      continue;
    }
    // Every heading takes a slug, including h1, so duplicate ids get the same
    // -1, -2 suffixes Docusaurus gives them.
    const explicitId = /\{#([^}]+)\}\s*$/.exec(match[2]);
    const heading = stripInline(match[2].replace(/\{#[^}]+\}\s*$/, '')).trim();
    const anchor = explicitId ? explicitId[1] : slugger.slug(heading);
    if (match[1].length === 1) {
      continue; // the h1 is the page title, its text stays with the intro
    }
    sections.push(current);
    current = {heading, anchor, lines: []};
  }
  sections.push(current);

  return sections
    .map(({heading, anchor, lines}) => ({
      p: doc.title,
      h: heading,
      u: anchor ? `${doc.permalink}#${anchor}` : doc.permalink,
      t: toPlainText(lines),
    }))
    .filter((record) => record.h || record.t);
}

/** @type {import('@docusaurus/types').PluginModule} */
export default function docsSearchPlugin(context) {
  return {
    name: 'docs-search',

    async allContentLoaded({allContent, actions}) {
      const docsPlugin = allContent['docusaurus-plugin-content-docs'] ?? {};
      const records = [];

      for (const content of Object.values(docsPlugin)) {
        for (const version of content.loadedVersions) {
          for (const doc of version.docs) {
            if (doc.unlisted) continue;
            const filePath = path.resolve(
              context.siteDir,
              doc.source.replace(/^@site[\\/]/, ''),
            );
            const source = await fs.readFile(filePath, 'utf8');
            records.push(...splitIntoSections(source, doc));
          }
        }
      }

      await actions.createData('search-index.json', JSON.stringify(records));
    },
  };
}
