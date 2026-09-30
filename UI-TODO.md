# Docs UI overhaul — to-do

Status key: `[ ]` to do · `[~]` in progress · `[x]` done and verified

## Checkpoint 0 — Safety
- [x] 0.1 Back up `docusaurus.config.js`, `sidebars.js`, `src/`, `static/img/`, `docs/`

## Checkpoint 1 — Structure
- [x] 1.1 Remove the home page — `/` opens the docs directly (docs-only mode, Overview at `/`)
- [x] 1.2 Move template leftovers out of the site (`src/pages/*`, `src/components/HomepageFeatures`)
- [x] 1.3 Turn off the template blog (sample Docusaurus posts); files kept on disk
- [x] 1.4 Rename "Tutorial" to "Docs" (navbar label and sidebar id)
- [x] 1.5 Remove "Edit this page" links (they point to the Docusaurus GitHub repo)
- [x] 1.6 Sidebar labels match the product navigation (Engage, Automate, Manage, Channels…)

## Checkpoint 2 — Brand
- [x] 2.1 Navbar uses `static/img/Assets/Z-Chat Logo.png`
- [x] 2.2 Remove GitHub (and Blog) from the top bar
- [x] 2.3 Favicon made from the logo's "Z" mark
- [x] 2.4 Site title, tagline, and social-card image set to Zprox.Chat

## Checkpoint 3 — Fonts and colours (sampled from the product screenshots)
- [x] 3.1 Font: Plus Jakarta Sans (body and headings); code: system monospace (as in the product)
- [x] 3.2 Brand red `#E22635` with generated shades
- [x] 3.3 Text colours: headings `#17181B`, body `#50545B`, muted `#747983`
- [x] 3.4 Surfaces: page `#F6F7F9`, cards `#FFFFFF`, borders `#DFE2E7`, active tint `#FDE8EA`
- [x] 3.5 Matching dark mode palette

## Checkpoint 4 — UI polish (match the product look)
- [x] 4.1 Navbar: white, bordered, logo-led; only the current section is highlighted
- [x] 4.2 Sidebar: product-style active item (tint + red bar), rounded items, "Documentation" label
- [x] 4.3 Content: white card on a grey page, product-style headings
- [x] 4.4 Tables, code, links, breadcrumbs, pagination, TOC restyled
- [x] 4.5 Figures: centred, bordered, caption underneath
- [x] 4.6 Mobile layout checked at 400px

## Checkpoint 5 — Footer
- [x] 5.1 Footer built from the docs (doc links, WhatsApp help centre, logo, copyright)
- [ ] 5.2 Waiting on the details below

## Checkpoint 6 — Verification
- [x] 6.1 `npm run build` passes with no errors
- [x] 6.2 Screenshots of desktop, mobile and dark mode checked
- [x] 6.3 All 9 pages return 200; old `/blog` and `/docs/intro` are gone

## Details needed from you
1. **Copyright holder** — the footer says "© PROITBRIDGE". Is that right?
2. **Support contact** — email and/or phone for the footer "Help" column.
3. **Company website** — for a "PROITBRIDGE" link in the footer.
4. **Zprox.Chat app address** — to add an "Open Zprox.Chat" button in the top bar.
5. **Social links** (optional) — LinkedIn, Instagram, YouTube, X…
6. **Live docs address** — `url` in `docusaurus.config.js` is still the template placeholder.
7. **Screenshots** — Figure 27 (Connect a Shopify store), 30 (Plans and billing), 31 (Usage and costs).
8. **Troubleshooting page** — it's empty; send its content, or I can hide it.
