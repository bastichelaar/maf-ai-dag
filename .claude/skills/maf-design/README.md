# MAF Nederland Design System

> *Vliegen voor Leven* — Flying for Life

A design system for **MAF Nederland** (Stichting MAF Nederland), the Dutch chapter of Mission Aviation Fellowship — a Christian aviation NGO that uses small aircraft to bring help, hope, and the Gospel to isolated communities in the world's most remote places.

---

## About MAF Nederland

- **Founded**: 1945 globally; MAF Nederland is part of MAF International
- **Mission**: *"Samen dienen om hulp, hoop en herstel te brengen door middel van luchtvaart."* — Together serve to bring help, hope, and healing through aviation.
- **Vision**: To see people in isolation transformed by the love of Christ.
- **Tagline**: *"Vliegen voor Leven"* (Flying for Life)
- **Scale**: ~130 aircraft, 30+ countries, 1,500+ partner organizations (churches, aid agencies like UNICEF, World Food Program, Red Cross, ZOA, Wycliffe, Open Doors, Tearfund).
- **Audience**: Dutch Christian donors, churches, supporters, prospective staff (pilots/mechanics), partner organizations.
- **Governance**: CBF-erkend goed doel (Dutch charity certification), ANBI status.

## Source materials referenced

| Source | URL / path | Notes |
|---|---|---|
| Public website | https://maf.nl | Primary brand surface. Built on WordPress (gopublic-motor-theme-child). |
| International parent | https://maf.org, https://maf-international.org | Shared brand DNA |
| Sister chapter (Oeganda) | https://vliegenvoorleven.nl | Field-staff microsite |
| Logo source | https://www.maf.nl/app/uploads/2021/03/Middel-16@4x-superklein.png | Referenced; not directly downloadable in this environment |
| Brandfetch profile | https://brandfetch.com/maf.org | Logo and color reference |

> ⚠️ **Asset access caveat**: I was unable to directly download images, fonts, or stylesheets from maf.nl in this environment (cross-origin restrictions). The colors, typography, and logos in this system are reconstructed from public references and MAF's international visual identity. **The user should re-attach real assets (logo SVGs/PNGs, brand fonts, photography, the WordPress theme CSS) via the Import menu** so this system can be tightened.

---

## Index — what's in this folder

| Path | What it is |
|---|---|
| `README.md` | This file — brand overview, content + visual foundations, iconography |
| `SKILL.md` | Agent Skill manifest (cross-compatible with Claude Code) |
| `colors_and_type.css` | Design tokens — colors, type scale, spacing, radius, shadows |
| `assets/` | Logos, icons, brand illustrations, photography placeholders |
| `fonts/` | Webfonts (or substitute links to Google Fonts) |
| `preview/` | Cards rendered in the Design System tab — type, color, components, etc. |
| `ui_kits/website/` | Marketing site UI kit — header, hero, story cards, donation modules, footer |

---

## CONTENT FUNDAMENTALS

### Voice & tone

MAF's voice is **warm, dignified, mission-driven, and quietly confident**. It blends humanitarian seriousness with Christian hopefulness — never preachy, never flashy. Stories of real people doing concrete work in concrete places. Pilots, patients, pastors. Aircraft as a *means*, never the hero.

- **Pace**: Calm, story-led. Long-form storytelling sits comfortably next to short donation CTAs.
- **Emotional register**: Hopeful gravity. The work is life-or-death — bush airstrips, medical evacuations, "45 minuten vliegen bespaart een autorit van 9 uur" — but the tone is not sensational. It's a competent, faithful crew at work.
- **Faith expression**: Direct but not performative. Words like *"Evangelie", "Gods Liefde", "Christus", "gebed", "roeping"* appear naturally in copy. References to scripture are quoted, not paraphrased. Faith is the *why*; service is the *what*.

### Language

- **Dutch first**, with occasional English brand phrases (*"Flying for Life | Vliegen voor Leven"*).
- **Formal address mostly**: *"u"* in donor- and supporter-facing copy ("Wilt u doneren?", "Uw bijdrage…"). *"je/jij"* appears in younger-audience contexts (careers, youth, social).
- **Christian register, capitalized reverently**: *Hem, Zijn, Heere, Christus, Evangelie, Gods Woord, Gods Liefde* (initial caps on divine references).
- **Numbers are concrete and proud**: "120 vliegtuigen", "1.500+ organisaties", "189.000 passagiers", "7 miljoen kg vracht per jaar". Use dots as thousand separators (Dutch convention).

### Casing & punctuation

- **Headlines**: Sentence case mostly, occasionally Title Case for short phrases. *Never ALL CAPS for body copy.* Tagline "Vliegen voor Leven" capitalizes Leven.
- **Sentence rhythm**: Short, declarative. Lots of *"Wij vliegen waar wegen eindigen."*
- **Quotation marks**: Curly Dutch style — `„opening" — "sluiting"` is acceptable, though curly `"…"` is dominant on the site.
- **Em-dashes**: Used for emphasis and asides; spaced.

### Vocabulary samples (lift these directly)

- *"Wij vliegen waar wegen eindigen of onbegaanbaar zijn."*
- *"Hulp, hoop en herstel."*
- *"De meest afgelegen plekken op aarde."*
- *"Geen weg te moeilijk, geen afstand te groot."*
- *"Samen dienen."*
- *"Vleugels voor hoop en leven."*
- *"Vliegen tegen de wind in."*

### What to avoid

- **No emoji**. Period. Tone is too serious for them.
- **No corporate-speak**. Never "ecosystem", "stakeholders", "leverage".
- **No urgency-marketing tropes** ("ACT NOW", "LAST CHANCE", giant red countdown). Generosity is invited, never extracted.
- **No abstract Christian jargon without grounding** — pair every "Evangelie" with a concrete scene.
- **No drone-style military aesthetic** — MAF is a *help* organization, not an aviation showcase.

---

## VISUAL FOUNDATIONS

### Palette

MAF's visual identity is grounded in **deep brand blue** `#004073` (the primary wordmark color) with **deep burgundy red** `#450003` as the accent and **cool gray** for supporting elements. The official logo carries a stylized bird-in-flight in red and a parallel gray flight-path swoosh. Clean white/cream surfaces, with **dark ink-navy** as the typographic anchor and warm earth tones from field photography.

| Role | Token | Hex | Notes |
|---|---|---|---|
| Brand blue (primary) | `--maf-blue` | `#004073` | Wordmark color; primary surfaces, trust/authority |
| Brand red (accent) | `--maf-red` | `#450003` | Deep burgundy; CTAs, eyebrows, accents |
| Brand gray | `--maf-gray` | `#5B6770` | Flight-path swoosh; supporting UI, meta |
| Ink (text) | `--maf-ink` | `#1F2A3A` | Primary text; navy-charcoal, never pure black |
| Cream | `--maf-cream` | `#FAF7F2` | Section tint |
| Sand | `--maf-sand` | `#F4EDE2` | Warm surface |
| White | `--maf-white` | `#FFFFFF` | Default |

Secondary photography accents: `--maf-sky` `#5BA4D1`, `--maf-leaf` `#6A8F3D`.

See `colors_and_type.css` for the full scale (50–900 ramps + semantic tokens).

### Typography

- **Display, headings, body**: **Tisa Sans Pro** — a humanist sans by Mitja Miklavčič (FontFont/Lucas de Groot). Friendly but authoritative, slightly compact proportions, strong personality in heavier weights. Used across the MAF website.
- Weights in use: 400 (regular body), 600/700 (headings, CTAs), 800 (display).
- **Body** at 400 with generous line-height (1.5–1.65).
- **Numerals**: Lining figures for stats; tabular for tables.
- **No serif** in core UI. Pull-quotes use italic Tisa Sans Pro.

> ⚠️ **Font caveat**: Tisa Sans Pro is a **commercial** webfont — license required. **Mulish** (Google Fonts) is loaded as a humanist substitute by default in `colors_and_type.css`. Drop the licensed Tisa Sans Pro WOFF2 files into `fonts/` and uncomment the `@font-face` block in `colors_and_type.css` to switch over.

### Spacing & layout

- **8-pt rhythm**, with a 4-pt half-step for tight UI components.
- Page gutter on desktop: **64–96 px**, content max-width **1200 px**, narrow text columns **640 px**.
- **Generous vertical rhythm** — section padding is usually `--space-16` to `--space-24` (96–144 px). Don't crowd.

### Backgrounds & imagery

- **Photography dominates.** Full-bleed photos of pilots, patients, aircraft on grass airstrips, mountains, villages. Warm, natural light. Slight earthy grade — no Instagram filters.
- **Documentary tone**: real people, eye contact, real environments. No staged stock.
- **Image overlays**: Dark gradient from bottom (`linear-gradient(to top, rgba(31,42,58,.7), transparent 60%)`) to land white headline copy. Sometimes a brand-red overlay corner for hero sections.
- **Patterns / textures**: None heavy. Occasionally a subtle topographic line motif or aircraft silhouette as an accent.
- **No hand-drawn illustration**. The brand is photographic.
- **Cream/sand sections** alternate with white to create rhythm; rarely fully dark sections.

### Animation

- **Quiet motion.** Soft fades on scroll-in (250–400 ms, ease-out). No parallax bounces. No spring physics.
- **No looping animations** in the marketing layer — would feel undignified given the subject matter.
- **Hover transitions**: 150–200 ms, ease-out.
- **Easing**: `cubic-bezier(0.2, 0.8, 0.2, 1)` (a gentle ease-out) is the house curve.

### Hover & press states

- **Buttons**: Hover darkens the fill (`--maf-red` → `--maf-red-deep`); no scale.
- **Cards / image tiles**: Hover lifts slightly (`translateY(-2px)`) and image scales (`1.03`) inside a fixed frame. Subtle shadow gain.
- **Links**: Underline appears on hover; color stays brand red.
- **Press**: Slight inset feel — drop shadow softens, button shifts down 1 px.
- **Focus**: 2 px solid `--maf-red` outline with 2 px offset. Visible, accessible.

### Borders, radii & shadows

- **Radius scale**: 4 / 6 / 8 / 12 / 16 / 9999 (pill). Buttons and inputs at 6 px. Cards at 12 px. No giant rounded blobs.
- **Borders**: 1 px hairlines in `--maf-ink-10` for separators; cards favor *shadows over borders*.
- **Shadows**: Soft, narrow, single-direction — never neon glows.
  - `--shadow-1`: `0 1px 2px rgba(31,42,58,.06), 0 1px 1px rgba(31,42,58,.04)` (subtle lift)
  - `--shadow-2`: `0 4px 12px rgba(31,42,58,.08)` (default card)
  - `--shadow-3`: `0 10px 30px rgba(31,42,58,.12)` (hover, modal)
- **No inner shadows** by default. No "neumorphism".

### Cards

White surface, 12 px radius, `--shadow-2` resting, `--shadow-3` on hover, no border. Image at the top, full-bleed inside the radius. Headline + short body + a "Lees meer →" link. The arrow is a literal right arrow, not an icon.

### Transparency & blur

- Used sparingly. Mainly:
  - Image overlays (gradient, no blur)
  - Sticky transparent header with a subtle `backdrop-filter: blur(8px)` on scroll
  - Modal backdrop: `rgba(31,42,58,.55)` solid, no blur

### Layout primitives

- **Sticky top nav** with logo left, primary nav center/right, prominent red **"Doneer"** CTA.
- **Hero**: Full-bleed photo + overlay + headline + 1–2 CTAs. ~80vh on landing pages.
- **Story grid**: 3-column on desktop, stack on mobile.
- **Donation strip**: Recurring band with brand red BG, white headline, white outlined CTA.

---

## ICONOGRAPHY

MAF's actual website uses a small set of bespoke SVG icons (e.g. `icon-menu.svg`, `icon-menu-white.svg`) inside a WordPress theme. **No public icon font** is exposed.

### Approach in this system

- **Primary icon set: Lucide** (lucide.dev) via CDN — clean, geometric, 24×24, 1.5 px stroke. Matches MAF's understated, modern feel.
  - CDN: `https://unpkg.com/lucide-static@latest/icons/<name>.svg`
- Use icons **functionally, not decoratively** — small UI affordances (menu, close, arrow, search, share, mail, phone).
- **No emoji**. No unicode symbols as icons (no ✈ or ❤ — use a proper SVG plane or heart).
- Stroke style preferred over filled. 1.5 px stroke, round joins, round caps.
- Icon-on-button: 16 px or 20 px, with 8 px gap to the label.

> ⚠️ **Icon caveat**: Lucide is a substitute. If MAF has a custom icon set in their codebase / Figma, drop the SVGs into `assets/icons/` and update `colors_and_type.css` / docs accordingly.

### Logo

- **Wordmark**: "MAF" set in a heavy bold italic sans, dynamic and forward-leaning, in deep brand blue `#004073`.
- **Mark**: A stylized **bird in flight** integrated into the wordmark — a red curving wing/silhouette emerging from the "F", with a parallel gray flight-path swoosh beneath. Together the elements suggest motion, aviation, and ascent.
- Asset files in `assets/`:
  - `logo-maf-official.png` — full-color, transparent background (1920×823)
  - `logo-maf-official-reverse.png` — for dark surfaces; MAF letters knocked out to white, red bird and gray swoosh preserved
  - `logo-maf-official-white.png` — pure white silhouette knockout (single-tone use)
  - `logo-maf-square.jpg` — square crop (avatar/profile use)

> ⚠️ **Note**: The logo file uses a *brighter* red than the brand-red surface token `#450003`. The token is for UI surfaces (CTAs, accents, headings); the logo art is preserved as-is.

### Photography as iconography

In MAF's brand, **photography is the primary visual language**, not iconography. Icons are functional UI. Heroes, story cards, and section dividers should reach for a photograph first.

---

## What to ask the user

To tighten this system, I need:

1. **Official logo files** (SVG + PNG, color + white + black variants).
2. **MAF brand guidelines PDF** if one exists.
3. **Brand font files** (WOFF2 / TTF) — what does MAF actually use?
4. **Real exact brand color hex values** — confirm the red and the navy.
5. **A few hero photographs** for the UI kit hero / story cards (or permission to leave photo slots for the user to fill).
6. **Access to the WordPress theme** (`gopublic-motor-theme-child`) — would unlock exact CSS values.
