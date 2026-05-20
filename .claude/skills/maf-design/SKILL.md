---
name: maf-design
description: Use this skill to generate well-branded interfaces and assets for MAF Nederland (Mission Aviation Fellowship / "Vliegen voor Leven"), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `ui_kits/website/`, `preview/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. The UI kit components in `ui_kits/website/` are React (JSX with Babel standalone) — copy them and their `styles.css` if you need them; otherwise lift only the bits you need and re-style with the tokens in `colors_and_type.css`.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Tone**: warm, dignified, mission-driven; Dutch with formal `u`; Christian register (`Evangelie`, `Gods Liefde` — capitalized reverently). No emoji.
- **Palette**: deep brand blue `#004073` (primary, wordmark), deep burgundy red `#450003` (accent, CTAs), cool gray `#5B6770`, on white/cream. Ink `#1F2A3A` for body text. See `colors_and_type.css`.
- **Type**: Tisa Sans Pro (commercial — Mulish loaded as substitute). Confirm license with user before production.
- **Imagery**: documentary photography first — pilots, patients, aircraft on dirt airstrips. No illustrations, no emoji.
- **Motion**: quiet, ease-out, fast (150–400ms).

## Known caveats (flag to user when relevant)

1. The official MAF logo (`assets/logo-maf-official.png` + white knockout) is the real mark; do not redraw it.
2. Mulish substitutes for Tisa Sans Pro (commercial license required for the real font).
3. Lucide icons substitute for the bespoke MAF icon set.
4. No real field photography included — use `<image-slot>` placeholders or ask the user to provide photos.
