# MapToc website

Serve this folder with a static web server. Upload the contents of this folder to GitHub Pages, keeping assets and subdirectories together. The interactive demo needs HTTP hosting; opening index.html directly from a file browser is insufficient for the demo.

## This revision
- Rewrote the homepage hero around an AI evidence engine and “A new standard for evidence-led development funding.”
- Replaced the problem and solution paragraphs with short, unboxed evidence phrases and added consistent spacing before major product headings.
- Moved the interactive demo directly after Evidence Capture. The beta now uses sample lookup mode; live-AI and upload controls are hidden in the static demonstration.
- On the homepage, phones show a current application screenshot and a full-screen demo link without loading the embedded app. Vision retains its embedded mobile demo.
- Restored Outcome Trail as a clean MapToc evidence web, with the reported result in the center, eight connected records and an interactive explanation panel.
- Compacted Why MapToc to category labels and key headlines on desktop and phones.
- Replaced the top-right contact link with a boxed Demo action and added a dedicated Demo page.
- Directly opening Vision from a local folder now shows preview instructions instead of a demo directory listing. On a hosted website, the interactive demo loads normally.
- Added `Preview-MapToc.command` for Mac local preview, using installed Node.js 18+ or Python 3 and an available local port.
- Matched “Accountability for both sides” to the main Why MapToc heading size on desktop and phones. Added matching numbered category labels to all four benefits.
- Embedded the supplied interactive MapToc demo in Vision, with a full-screen link and return-to-Vision navigation.
- Applied the website font, symbol and wordmark treatment to the demo. Embedded dialogs scroll into view; the app uses the full phone width on small screens.
- Based on the newly supplied MapToc_refined_website(1).zip.
- Added “Accountability for both sides” beneath the three existing Why MapToc columns. The four benefits use a single desktop row and a compact 2×2 phone layout.
- Simplified the accountability row to match the open Why MapToc columns: thin dividers, numbered labels and bold navy headings, with no surrounding panel or card fills. All benefit wording is retained.
- Tightened repeated wording in the original benefits and linked the new row to the White Paper.
- Replaced the repeated Vision benefits with “A record that outlasts the grant”: an illustrative award-to-closure record, staff handover and future funding uses.
- Updated the Vision introduction and hero labels to emphasize continuity and institutional learning.
- Preserved the uploaded version’s app concept visuals, product interactions, navigation and other pages.

## Previous revisions carried forward
- Problem section reduced to key phrases and a direct White Paper link; removed the requested reconstruction and compliance sentences.
- Hero actions use clean SVG arrows, and the mobile funding headline has explicit word spacing.
- Further reduced mobile section padding and comparison-card height while keeping app panels and diagrams visible.
- Compact phone layouts for the Problem, Product, Outcome trail and How it works sections. The Without/With comparison remains side by side on phones.
- Mobile copy removes repetition while desktop wording and app visuals are preserved. Outcome nodes, workflow stages and source inspection remain interactive.
- Mobile evidence-gap section now uses a compact 2×2 card grid and fits within a typical phone viewport at both 320px and 390px widths.
- Preserved all four percentages, denominators, the audit-method link and a concise source citation.
- White Paper aligned with the current outcome-focused AI engine, institutional buyer and living-record positioning.
- Reframed the core problem as lost institutional memory and disconnected accountability during implementation.
- Added automated accountability, frictionless oversight, live program integrity and real-time visibility to the institutional case.
- Clarified the SaaS model, implementer access, funding-requirement ambition and audit-readiness boundary.
- Renamed the White Paper chapter “Investors and partners” to “Institutional case.”
- Larger hero headline, preview aligned with the Program Intelligence label, and buttons aligned to the bottom of the desktop preview.
- Tighter funding, outcome-trail and workflow panels with preserved diagram text sizes.
- Refined benefit cards, institutional panel and resource links with subtle borders, depth and color accents.
- Investors is now Vision throughout navigation; investors.html redirects to vision.html and preserves fragment links.
- Hero captions share an aligned row, and the app begins below the Program Intelligence label. Traceable evidence has been removed from the hero pillars.
- Product anchor spacing and the evidence-capture interface are compact enough for a laptop viewport, without reducing finding text sizes.
- Vision presents the SaaS model without claiming that implementer access is included. Related homepage and White Paper copy is consistent.
- Every Vision section links to its relevant White Paper chapter.

## Retained design and features
- Header logo reduced by a further 1 mm (approximately 3.78 CSS pixels); navigation remains 13.5px.
- Refined hero with a larger headline and links, Explained Outcomes, a shorter app preview and an outlined investment link.
- Evidence Capture matches the reference: source document, connecting arrow and four stacked findings. Click a finding to reveal its original passage.
- Branded comparison panels and a redesigned Investors opportunity section. Product section renamed What MapToc does.
- Problem copy focuses on scattered and lost records as programs unfold.
- Investors now includes four institutional value outcomes: Automated Accountability, Frictionless Oversight, Live Program Integrity and Real-Time Visibility.
- The Investors page separates value for funders, donors and governments from value for implementers and program teams.
- Research now opens with “Three findings worth investigating” before the evidence-gap dashboard.
- The Investors opportunity section now explains the institutional buying case: late oversight, unlinked spending and missing context versus one record that grows with the work.
- Hero preview width reduced by approximately 1.5 cm at desktop and the headline enlarged by 2px.
- Compact evidence cards and comparison panels; green emphasis for the problem headline and outcome-map keywords.
- Hero label aligned with the preview, revised AI-engine positioning and funding-requirement line.
- Institutional problem reframed as fragmented accountability; evidence section tightened.
- All eight outcome-map blocks show explanations, support keyboard selection and retain centered labels.
- Native MapToc wordmark and vector symbol, with no image background.
- Consistent section labels, title sizes and compact problem/evidence content.
- Balanced hero layout with aligned, smaller links and preserved app previews.
- Restored the Without / With comparison panels and evidence coverage cards.
- Evidence capture, funding context, outcome trail and workflow are all visible on the homepage.
- Preserved the app concept interface and interactive evidence diagrams.
- Restored the Research publication layout and kept its articles, filters and search.
- Unified navigation across the homepage, Research, Investors and White Paper, including subpages.
- Shortened the investor pitch and added product, adoption and subscription visuals.

## Styles
`site-system.css` holds shared typography, navigation, branding and layout tokens. `landing-page.css`, `research-panels.css` and `investor-page.css` contain page-specific presentation. `app-preview.css` preserves the detailed concept interface. Document and research-reading styles remain separate.

## Running and uploading the demo
On a Mac, open `Preview-MapToc.command` in the extracted website folder. Keep its Terminal window open while using the demo; close it or press Control+C to stop. The launcher uses installed Node.js 18+ or Python 3, chooses an available local port, and opens Vision in your browser. If double-clicking does not launch it, open Terminal, type `bash `, drag `Preview-MapToc.command` into the window and press Return. No dependencies need to be installed when either runtime is already available.

Alternatively, run `npm run dev` in this folder, then open `http://127.0.0.1:4173/demo.html#app-demo`. This option requires Node.js 18 or later.

For GitHub Pages, upload the extracted website contents, including the complete `demo/` directory, `assets/`, and `.nojekyll`. The compiled demo uses `/demo/` paths and is packaged for the root of the custom domain, such as `maptheoutcome.org`. A GitHub project subpath without that custom domain requires a different base-path build.

Demo scripts and styles are under `demo/app-assets/`; references were updated to avoid GitHub Pages skipping an underscore-prefixed asset directory. Preserve all nested directories, JavaScript, stylesheets and text payloads. Replace the website HTML and CSS together, then refresh after deployment.

## Demo scope
The demo contains illustrative records and supports page navigation, evidence inspection and local browser interactions. Live AI is disabled in this static export and requires the server application. Uploaded demo files are stored in the browser, not a shared institutional backend. No API keys are included.

## Verification
All 85 HTML pages checked for local links, anchor targets, duplicate IDs and spelling. Main website navigation is consistent across its 49 navigation-bearing pages. Key homepage sections fit within a typical 390×844 phone viewport; the Product section remains intentionally multi-screen. The embedded and full-screen demo are checked for navigation, mobile behavior, branding, asset loading and horizontal overflow. Live AI remains disabled. Research, White Paper and existing app concept visuals are preserved. No deployment performed.

Concept demonstrations use illustrative records. Proposed capabilities are not a live service.

## Editorial review before launch
- The evidence percentages remain labeled preliminary. Publish the audit exports and coding rules to make the findings independently reproducible.

The interactive demo is available on the dedicated Demo page, the homepage Product section and the Vision page. All three use shared interactive-demo.css styling and the same local-preview guidance.
