# Visuele Stijl: MAF Nederland

> Gebruikt door de `genereer-afbeelding` skill voor brand-consistente beeldgeneratie.
> Kleuren en typografie afgeleid van www.maf.nl (mei 2026). Visuele richtlijnen op basis van publiek beeldmateriaal.

## Kleurpalet

- **Primaire kleur:** Navy blauw `#002f5f`
- **Accent/secundair:** Rood `#d01d20`
- **Tertiair:** Warm grijs `#747678`
- **Tekstkleur:** Donkergrijs `#393535`
- **Achtergrond:** Wit `#ffffff` of zeer licht grijs `#dcdcdc`

Het palet is rustig en serieus. Navy blauw geeft betrouwbaarheid en luchtvaart-associatie (hemel, ruimte, missie). Rood is sparzaam ingezet voor accenten, call-to-actions of urgente momenten. Niet meer dan één procent rood op een afbeelding.

## Typografie sfeer (voor afbeeldingen)

- **Font karakter:** Modern humanistic sans-serif (Tisa Sans Pro). Strak maar warm, slightly rounded character.
- **Gevoel:** Toegankelijk, deskundig, betrouwbaar. Niet zakelijk-koud, niet activistisch-luid.
- **Belangrijk voor beeldgeneratie:** geen tekst in de gegenereerde afbeelding (tekst hoort op de post, niet in het beeld zelf).

## Visuele stijl

- **Algemene stijl:** Fotorealistisch, documentaire fotografie. Geen illustraties, geen abstracte composities.
- **Sfeer:** Hoopvol, gemeenschap-georienteerd, doelgericht. Warm licht (ochtend of late middag is ideaal).
- **Vaste beeldelementen:**
  - Kleine vliegtuigen (Cessna 206, 208 Caravan, Pilatus PC-12 of vergelijkbaar) in omgeving die laat zien waarom je vliegt
  - Afgelegen gemeenschappen: bergachtige gebieden, regenwouden, woestijnen, eilanden
  - Mensen in interactie: piloot met dorpsbewoners, hulpgoederen overhandigen, medische evacuaties, gezinnen begroet bij landing
  - Landschappen die ruimte en afstand tonen: rivierdelta's, bergketens, ongeplaveide landingsbanen
- **Wat we vermijden:**
  - Stockfoto-achtige composities (groep mensen poseert met thumbs up)
  - Drukke achtergronden met te veel elementen
  - Religieuze symboliek prominent in beeld (geen kruisen, geen bidhoudingen). MAF is een christelijke organisatie maar het beeld toont missie, niet ritueel.
  - Saturatie-overdosis (geen filter dat hyper-realistisch oogt)
  - Westers-stedelijke settings (kantoor, vergaderzaal). De missie zit elders.

## Nano Banana Basis Prompt

```
Photorealistic documentary-style photograph in MAF brand aesthetic. Warm natural
lighting (golden hour or soft overcast). Deep navy blue (#002f5f) as dominant
atmospheric tone in skies or shadows; sparing red (#d01d20) only for small
accents like flight markings or distant fabric. Composition emphasizes scale and
remoteness: small aircraft, wilderness landscapes, or human connection in
underserved regions. Authentic and hopeful mood, never staged. No text or
logos visible in the image. Sharp focus, medium depth of field, slight film
grain for documentary feel. Avoid stock-photo aesthetics, avoid overt religious
symbolism, avoid Western urban settings.
Subject: [ONDERWERP]
```

Het blok hierboven wordt door `scripts/generate_image.py` automatisch geladen. Vervang `[ONDERWERP]` niet zelf; het script doet dat met de waarde van `--subject`.

## Afbeelding-formaten

| Format arg | Gebruik | Afmeting | Aspect ratio |
|------------|---------|----------|--------------|
| `blog` | Blog header, nieuwsbericht | 1200x630px | 16:9 |
| `og` | OG/social preview link | 1200x630px | 16:9 |
| `social` | Instagram/Facebook vierkant | 1080x1080px | 1:1 |
| `banner` | LinkedIn-banner | 1584x396px | 4:1 |

## Onderwerp-suggesties per donateurverhaal-type

- **Medische evacuatie:** Single-engine aircraft on remote dirt airstrip with stretcher being loaded; medical staff in casual field clothing; concerned community members in background; soft morning light
- **Bijbel-vertaling/onderwijs:** Children gathered around a teacher under a tree near a small aircraft visible in background; warm afternoon light; mountainous terrain in distance
- **Hulpgoederen-vlucht:** Aircraft on jungle airstrip with locals unloading boxes; lush green vegetation; misty mountains
- **Piloot-verhaal:** Pilot doing pre-flight check on Cessna in early morning; remote airstrip; expansive landscape behind; thoughtful expression
- **Algemene MAF-missie:** Aerial view of small white aircraft over remote mountain range or river delta at sunrise; sense of distance and purpose

## Referentie-afbeeldingen

Gegenereerde beelden moeten qua sfeer aansluiten op de fotografie op www.maf.nl en mafint.org. Twee dingen die de stijl meteen herkenbaar maken:

1. Het kleine vliegtuig is bijna altijd in beeld, maar nooit als hero-object. Het staat in context: omgeving, mensen, doel.
2. De compositie laat ruimte zien (lucht, landschap). MAF gaat over afstand overbruggen, dus de afbeelding mag de schaal van die afstand suggereren.
