---
name: genereer-afbeelding
description: Genereer een MAF-brand afbeelding via Google Gemini (Imagen 4). Activeer wanneer in een content-pipeline een visueel element bij een post hoort, of wanneer er expliciet om een MAF-stijl beeld wordt gevraagd.
version: 1.0.0
---

# Genereer-afbeelding (MAF-brand)

Skill om brand-consistente MAF-afbeeldingen te maken via de Google Gemini API. Geleend en aangepast van de `nano-banana` skill uit `marketing-director`. Gebruikt het MAF-kleurpalet (navy #002f5f, rood #d01d20), de documentaire fotografische stijl, en de Nano Banana Basis Prompt uit `brands/maf/visual-style.md`.

## Wanneer gebruiken

- Een content-pipeline agent maakt een set posts en heeft daar een passende afbeelding bij nodig
- Een marketeer wil een nieuwe campagne-afbeelding in MAF-stijl
- Een blog-post heeft een header nodig
- Bij vraag als "maak hier ook een plaatje bij" of "genereer een social-image"

## Vereisten

```bash
export GEMINI_API_KEY="..."
pip install google-genai pillow
```

Zonder API-key: skill faalt expliciet met een nette foutmelding. Niet doormodderen met placeholders.

## Workflow

### Stap 1: brand-context laden

De skill leest `brands/maf/visual-style.md` en haalt automatisch het Nano Banana Basis Prompt-blok eruit. Geen extra werk nodig voor de aanroeper.

### Stap 2: onderwerp bepalen

Vorm een Engels onderwerp van 5-15 woorden. Engels werkt beter voor Imagen 4. Voorbeelden:
- "small Cessna aircraft on remote dirt airstrip at sunrise"
- "pilot helping load medical supplies into single-engine plane in jungle setting"
- "children waving as aircraft takes off from mountain village"

Vermijd: namen van personen, specifieke locaties die niet beeldbaar zijn (bv. "Papua-Nieuw-Guinea" is wel te beelden, "kwartaalrapport-cijfers" niet), abstracte concepten.

### Stap 3: formaat kiezen

- `social` (1080x1080, 1:1): Instagram, Facebook, LinkedIn-post
- `blog` (1200x630, 16:9): blog-header, nieuwsbericht
- `og` (1200x630, 16:9): OpenGraph link-preview
- `banner` (1584x396, 4:1): LinkedIn-banner

### Stap 4: aanroepen

```bash
python scripts/generate_image.py \
  --brand maf \
  --subject "small aircraft on remote dirt airstrip at golden hour" \
  --format social \
  --output output/images/2026-05-20-medische-evacuatie.png
```

Het script combineert automatisch de basis-prompt uit `visual-style.md` met het onderwerp en roept Imagen 4 aan.

### Stap 5: resultaat verwerken

- Het PNG-bestand staat in het opgegeven output-pad
- Voor een content-pipeline: voeg het pad toe aan de gegenereerde post-markdown als frontmatter:
  ```markdown
  ---
  image: output/images/2026-05-20-medische-evacuatie.png
  ---
  ```
- Beoordeel het beeld kritisch: voldoet het aan de MAF-stijl (geen stockfoto-gevoel, geen religieuze symboliek prominent, vliegtuig in context)?

## Drie modi

Het onderliggende script ondersteunt drie modi (zie `scripts/generate_image.py`):

1. **Genereren (default)**: alleen tekst -> nieuwe afbeelding via Imagen 4. Snel, goed voor MAF-stijl scenes.
2. **Combineren (`--combine`)**: voeg een bestaande foto (bv. echte donateurfoto) samen met de MAF-stijl via Gemini. Gebruik voor "deze foto in MAF-frame plaatsen".
3. **Stijl wijzigen (`--input`)**: pas een bestaande AI-afbeelding aan in nieuwe stijl. Niet gebruikt in de demo.

Voor de demo van 20 mei: alleen modus 1 (genereren). Modi 2 en 3 zijn beschikbaar voor wie later wil experimenteren.

## Veelgemaakte fouten

- **Te lang onderwerp**: Imagen verliest focus. Houd het op 5-15 woorden.
- **Nederlands**: Imagen werkt beter in Engels. Vertaal het onderwerp.
- **Tekst in beeld vragen**: werkt vaak slecht. Tekst hoort in de post, niet in de afbeelding.
- **Mensen in close-up vragen**: gezichten worden vaak vreemd. Houd mensen op afstand of in zijdelings perspectief.

## Voor de demo van 20 mei

Tijdens de live sessie: roep deze skill aan vanuit de `content-pipeline` agent (zie `AGENT-content-pipeline.md`). De agent maakt eerst de drie tekstposts, dan roept hij het script aan voor een social-square in MAF-stijl, en zet het pad in de post-frontmatter. Output verschijnt visueel in `output/images/` en wordt op groot scherm getoond.

Test vooraf:
```bash
cd demos/01-marketing-di
python scripts/generate_image.py --brand maf --subject "small Cessna aircraft over remote mountain village in early morning light" --format social --output output/images/test.png --prompt-only
```

Met `--prompt-only` zie je alleen de samengestelde prompt zonder de API aan te roepen. Goed voor verificatie van de visual-style.md.
