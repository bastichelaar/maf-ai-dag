# Demo-draaiboek: Evenementen

Live demo voor cluster Evenementen. Geschatte tijd: 25 minuten.

Sessie-context: klein team, druk, vermoeid. Focus op tijdwinst, niet op innovatie. Veel herhaalwerk dat herbruikbaar gemaakt kan worden.

## Vooraf: setup-check

```bash
cd /home/bas/dev/maf-ai-dag/demos/04-evenementen
ls input/
# Verwacht:
# - evenement-basis.md
# - oud-draaiboek-2025.md
# - evaluaties/ (15 bestanden)
ls output/
# Leeg of alleen .gitkeep
```

## Stap 1: workflow tonen (3 min)

Open `WORKFLOW.md`. Toon eerst de huidige situatie:

> "Herken je dit? Elke keer een nieuw evenement, zelfde stappen opnieuw, en na afloop een stapel evaluaties die soms gelezen wordt, soms blijft liggen."

Toon de met-agent situatie. Twee aparte momenten: voor het evenement (pakket-maker), na het evenement (evaluaties-verwerker).

## Stap 2: input tonen (2 min)

Open `input/evenement-basis.md`. Zeg:

> "Dit is een korte evenement-basis: titel, datum, doelgroep, programma in 3 regels. Maximaal 10 minuten werk. Daarna verwachten we normaal: uitnodiging, herinnering, bedankmail, draaiboek, evaluatieformulier. Allemaal vanaf scratch of gerommel in oude bestanden."

Open kort `input/oud-draaiboek-2025.md` om te tonen dat de agent ook van eerdere edities leert.

## Stap 3: evenement-pakket agent live aanroepen (5 min)

```
Lees AGENT-evenement-pakket.md en gedraag je als die agent. Maak het volledige communicatiepakket voor de Donateursdag 2026 op basis van input/evenement-basis.md en input/oud-draaiboek-2025.md.
```

Wat te verwachten:
- Claude leest evenement-basis
- Claude leest oud-draaiboek (let op de [ ] items en lessen-geleerd-sectie)
- Schrijft 5 bestanden in output/:
  - uitnodiging-mail.md
  - herinnering-mail.md
  - bedank-mail.md
  - draaiboek-template.md
  - evaluatieformulier.md

## Stap 4: outputs op groot scherm (5 min)

Open elk bestand:

1. **Uitnodiging-mail:** klinkt het als MAF? Roept het op om te komen?
2. **Herinnering-mail:** is dit praktisch genoeg, niet te lang?
3. **Bedank-mail:** verwijst het naar specifieke programma-onderdelen?
4. **Draaiboek-template:** zijn de fases logisch? Wat zou je toevoegen?
5. **Evaluatieformulier:** is dit een goede mix open/gesloten?

Hier ontstaat vaak een goed gesprek. Het team heeft hier oordeel over.

## Stap 5: evaluaties-verwerker als tweede demo (5 min)

Wissel naar de andere agent.

> "Nu een ander moment in de cyclus. Stel: het evenement is geweest, jullie hebben 15 ingevulde evaluaties. Wat doen jullie er normaal mee?"

(Vaak: "lezen als er tijd is".)

> "Lees AGENT-evaluaties-verwerker.md en gedraag je als die agent. Analyseer input/evaluaties/ en lever wat-ging-goed, wat-kan-beter, en lessen voor volgend jaar."

Wat te verwachten:
- Claude leest 15 bestanden
- Identificeert patronen (zoals: podcast-akoestiek wordt door meerdere mensen genoemd, programmadruk in middag idem)
- Schrijft 3 bestanden in output/:
  - wat-ging-goed.md
  - wat-kan-beter.md
  - lessen-voor-volgend-jaar.md

## Stap 6: bespreking patronen (3 min)

Open `wat-ging-goed.md` en `wat-kan-beter.md`. Lees de top-3 voor. Verwacht dingen als:

**Goed:** piloten-getuigenissen, hangar-rondleiding, persoonlijke ontmoeting directie
**Beter:** podcast-akoestiek, programma-tijdsbeheer (uitloop), garderobe/binnenkomst-chaos

> "Kijk, de agent ziet patronen die jullie ook zouden zien als jullie alle 15 evaluaties zouden lezen. Maar dat lezen kost 30 minuten en wordt vaak niet gedaan. Hier zit het in 30 seconden."

Open `lessen-voor-volgend-jaar.md`. Wijs aan dat dit direct in een draaiboek voor 2026 kan.

## Stap 7: brug naar productie (2 min)

> "Wat we vandaag deden, draaide op fictieve data. In productie: jullie aanmeldsysteem geeft een trigger als een nieuw evenement in de agenda komt, de agent maakt het volledige pakket. En na afloop scant hij automatisch ingevulde evaluatieformulieren en stuurt de patronen naar het team. Dat is pakket B."

## Voorzichtigheidsregels

- **Praktisch blijven**: evenementen-mensen willen tijdwinst, geen technische verhalen. Houd elke demo-stap concreet en zichtbaar.
- **Niet pushen op te veel verandering**: drie agent-output is veel om in een keer op te nemen. Quick win: één onderdeel kiezen.

## Wat als het misgaat

- **Bedank-mail is te generiek**: vraag claude expliciet "refereer aan een specifiek programma-onderdeel uit evenement-basis". Toon hoe sturing helpt.
- **Patronen in evaluaties zijn oppervlakkig**: vraag "tel hoe vaak het podcast-geluid wordt genoemd". Agent kan dan concreter worden.
- **Draaiboek-template lijkt niet op MAF-werkwijze**: dat is een leerpunt. Toon dat het draaiboek-2025 als input al een patroon meegeeft, en dat verfijning in pakket A zou gebeuren.
