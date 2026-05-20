# MAF Nederland — Website UI Kit

A high-fidelity React recreation of a typical view of **maf.nl**. Designed as a click-thru, not a production app.

## What's here

| File | What it is |
|---|---|
| `index.html` | Entry — loads tokens, styles, and assembles `App` |
| `styles.css` | Component-level CSS, built on `colors_and_type.css` tokens |
| `App.jsx` | Top-level composition + modal state |
| `Header.jsx` | Sticky top nav with logo, links, search, Doneer CTA |
| `Hero.jsx` | Full-bleed photo hero with overlay headline |
| `StoriesSection.jsx` | 3-up story-card grid with photo + eyebrow + title |
| `StatsSection.jsx` | Big-number stat block on cream tint |
| `DonationStrip.jsx` | Recurring red CTA band |
| `Footer.jsx` | Multi-column footer with CBF / ANBI marks |
| `DonateModal.jsx` | Interactive donation flow (frequency, amount, fake submit) |
| `Icon.jsx` | Lucide-style shared icon set |
| `image-slot.js` | Web-component for user-fillable photo slots |

## Interactivity

- Click **Doneer** (header / hero / donation strip) → modal opens
- Choose frequency (eenmalig / maandelijks)
- Pick amount or type a custom value
- Submit → fake thank-you state
- Drop a photo onto any `<image-slot>` to set the hero / story photos (persists in localStorage)

## Caveats

- **Photography**: the hero and story-card backgrounds are gradient placeholders. Drop in real MAF field photography via the image slots.
- **Logo**: a reconstructed SVG. Replace `assets/logo-maf-official.png` with the official mark.
- **Typography**: Mulish substitutes for Tisa Sans Pro (the real MAF site font — commercial license required).
- **Iconography**: Lucide stroke style substitutes for MAF's bespoke icon SVGs.
