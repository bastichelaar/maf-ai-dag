# Demo-draaiboek: Marketing en Digital Innovation

Live demo voor de cluster Marketing en Digital Innovation. Geschatte tijd: 25 tot 30 minuten. Stap 6 (publicatie-pakket via maf-design skill) is optioneel en valt als eerste weg bij tijdsdruk. Volgt op de mining-fase, gaat vooraf aan workflow-canvas.

## Vooraf: setup-check (5 min voor de sessie)

```bash
cd /home/bas/dev/maf-ai-dag/demos/01-marketing-di
echo $GEMINI_API_KEY   # moet waarde geven
python scripts/generate_image.py --brand maf --subject "test" --format social --output output/images/check.png --prompt-only   # moet prompt tonen, niet falen
ls input/                # zorg dat donateurverhaal-1.md en -2.md er staan
ls output/               # leeg of alleen .gitkeep
```

Als `GEMINI_API_KEY` ontbreekt: zet 'm in shell, of accepteer dat de afbeeldings-stap een placeholder wordt. Geef dat eerlijk aan tijdens de demo.

## Stap 1: workflow tonen (3 min)

Open `WORKFLOW.md` in VSCode of Obsidian met Mermaid-preview. Toon eerst de huidige situatie. Vraag het team:

> "Herkennen jullie dit? Wie doet hier wat, en hoe lang ben je gemiddeld bezig met één donateurverhaal naar publicatie?"

Schrijf de tijdsindicatie op het bord. Laat dan de met-agent situatie zien.

> "Wat verandert er, denken jullie? Wat blijft mens, wat verschuift?"

Korte discussie. Niet te lang doorpraten, het bewijs komt in de demo.

## Stap 2: input tonen (2 min)

Open de input-folder zichtbaar (in VSCode of bestandsbeheerder):

```
input/
  brand-voice.md          (toon kort: wat staat erin)
  donateurverhaal-1.md    (medische evacuatie Tagamembo)
  donateurverhaal-2.md    (schoolboeken Lake Murray)
  eerdere/                (drie eerdere posts als toon-referentie)
```

Open `donateurverhaal-1.md` kort. "Dit is wat marketing krijgt van iemand op de basis: een gestructureerd verhaal met cijfers, soms een audio-opname. Drie kanalen ervan maken kost normaal twee uur. Kijk wat er nu gebeurt."

## Stap 3: agent live aanroepen (5 min)

Start Claude Code in deze folder. Geef de instructie:

> "Lees AGENT-content-pipeline.md en gedraag je als die agent. Verwerk donateurverhaal-1.md en maak de volledige multichannel-publicatie inclusief een MAF-stijl social-afbeelding."

Wat je verwacht te zien:
- Claude logt: "lees input/donateurverhaal-1.md"
- Claude logt: "lees input/brand-voice.md"
- Claude logt: "lees input/eerdere/post-campagne-2025-q1.md" (en q2, q3)
- Claude schrijft `output/linkedin-post.md`
- Claude schrijft `output/nieuwsbrief-intro.md`
- Claude schrijft `output/instagram-caption.md`
- Claude roept `python scripts/generate_image.py --brand maf --subject "..." --format social --output output/images/...` aan
- Afbeelding verschijnt in `output/images/`

Tijdens het draaien: niet stilvallen. Vertel wat er gebeurt en waarom. "De agent leest niet alleen mijn verhaal maar ook drie eerdere posts om de toon te kalibreren. Dat is meer dan een ChatGPT-prompt."

## Stap 4: output op groot scherm (5 min)

Open elke output-file en lees voor:

1. `output/linkedin-post.md`: lees de openingsregel, vraag het team of het klinkt als MAF.
2. `output/nieuwsbrief-intro.md`: lees de eerste alinea.
3. `output/instagram-caption.md`: lees voor, met de hashtags.
4. `output/images/[slug].png`: open op groot scherm. Vraag: "herken je MAF hierin? Wat klopt, wat schuurt?"

Hier komt vaak een goed gesprek over toon en beeldkeuze. Laat het lopen, dat is precies waar je naartoe wilt.

## Stap 5: brand-voice-check als bonus (3 min)

Pak de gegenereerde LinkedIn-post. Geef Claude de instructie:

> "Lees nu AGENT-brand-voice-check.md en gedraag je als die agent. Review output/linkedin-post.md en schrijf feedback naar output/brand-voice-feedback.md."

Toon de feedback. Niet alle feedback hoeft correct te zijn, dat is juist nuttig: laat zien dat een agent kritisch kan zijn op zichzelf en dat mens het oordeel houdt.

## Stap 6: van content naar publicatie-pakket (5 min, optioneel)

Als de groep aanhaakt en de tijd het toelaat, laat zien dat dezelfde output zonder extra werk doorgezet kan worden naar concrete publicaties. Geef Claude de instructie:

> "Lees AGENT-publicatie-pakket.md en gedraag je als die agent. Gebruik de maf-design skill om uit de output-folder drie HTML-artefacten te maken: landingspagina, e-mail-nieuwsbrief, social card."

Wat u verwacht te zien:
- Claude logt: "lees output/linkedin-post.md, nieuwsbrief-intro.md, instagram-caption.md"
- Claude logt: "roep maf-design skill aan"
- Claude schrijft `output/site/index.html`, `output/email/nieuwsbrief.html`, `output/social/card.html`
- Claude kopieert `colors_and_type.css` en `logo-maf-official.png` naar `output/site/`

Open de drie bestanden in de browser (gebruik `file://` of de Live Server-extensie). Zeg:

> "Een verhaal, een agent, een skill. Drie publicatie-klare kanalen in MAF-huisstijl. Wat marketing nu nog handmatig in een CMS, een mailprogramma en een tool als Canva moet maken, ligt hier in een keer klaar voor review."

Vraag het team: "Welk van deze drie zou voor jullie de meeste tijd besparen om in productie zo te krijgen?"

Strikte abort-regel: als de agent na 90 seconden nog niets heeft geschreven, abort en open in plaats daarvan `output/voorbeeld-publicatiepakket/site/index.html` direct in de browser. Beter een soepele fallback dan een dood moment voor het publiek.

## Stap 7: brug naar productie (2 min)

Open de "brug-naar-productie" diagram in `WORKFLOW.md`. Zeg:

> "Wat we hier deden, draaide op een fictief verhaal in een lokale folder. In productie staat dit verhaal in jullie SharePoint, en wordt de output direct als concept in jullie publishing-tool of in Outlook geplaatst. Dezelfde agent, andere aansluiting. Dat is pakket B uit ons vervolg-aanbod."

## Stap 8: quick win committeren (5 min)

Vraag het team: "Welk verhaal of welk type post zou jullie kiezen om volgende week mee te testen?" Schrijf op het bord. Vraag Digital Innovation: "Wie wil hier de komende twee weken iets in helpen bouwen?"

Niet pushen op de vervolgpakketten. Het verhaal staat, MAF doet de keus.

## Wat als het misgaat

- **Claude vraagt om bevestiging in plaats van direct te werken:** geef expliciet "ga je gang, schrijf de bestanden". Soms is hij voorzichtig met file-writes.
- **GEMINI_API_KEY werkt niet:** gebruik `--prompt-only` om alleen de prompt te tonen. Zeg eerlijk dat de echte afbeelding zou volgen. Laat een eerder gegenereerde afbeelding zien als alternatief (bewaar er een in `output/images/voorbeeld.png` als backup).
- **Toon van de output is matig:** dat is niet erg. Laat het zien, vraag het team waar het schuurt, en gebruik dat als bewijs dat menselijk oordeel onmisbaar blijft. Demo wordt sterker, niet zwakker.
- **Afbeelding is niet MAF-genoeg:** een leerpunt. Toon de prompt die naar Imagen ging, laat zien dat brand-spec verfijnen is wat je in pakket A zou doen.
- **Publicatie-pakket genereert niet of duurt te lang:** open `output/voorbeeld-publicatiepakket/site/index.html` direct in de browser, en eventueel ook de bijbehorende `email/nieuwsbrief.html` en `social/card.html`. Eerlijk benoemen dat dit een eerder gegenereerd voorbeeld is, en laten zien dat de agent live hetzelfde produceert.

## Voorbereiding voor brand-voice-check fallback

Mocht stap 5 te lang duren of de agent gek doen: een handmatige feedback-versie bewaren in `output/brand-voice-feedback-voorbeeld.md` voor het geval je hem nodig hebt. Niet creeren tenzij nodig.

## Voorbereiding voor publicatie-pakket fallback

In `output/voorbeeld-publicatiepakket/` staat een vooraf gegenereerde set: `site/index.html` (landingspagina met logo en colors_and_type.css zelfdragend ernaast), `email/nieuwsbrief.html` (Outlook-vriendelijk) en `social/card.html` (1080x1080). Open een keer in de browser voor de demo zodat u weet hoe de tabs werken op de beamer. Niet aanraken tijdens de live demo, alleen openen als de agent uitvalt.
