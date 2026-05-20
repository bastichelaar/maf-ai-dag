# Demo-draaiboek: HR en Financien

Live demo voor cluster HR en Financien. Geschatte tijd: 25 minuten.

Sessie-context: conservatief team, nuchter, vraagt vertrouwen. Niet showy. Cijfers en betrouwbaarheid wegen zwaarder dan creativiteit. Drie demo-opties beschikbaar, kies live op basis van groep-dynamiek. Optie C (mail-reactie) is de primaire keuze vandaag, op basis van de intake van Thamar.

## Intake Thamar (Hoofd HR)

Thamar heeft vooraf gemaild over haar team van vijf:

- **Mirjam:** HR kantoor plus salarisadministratie. Pijn: urenregistratie en voorgestelde reacties op sollicitaties.
- **Arjen en Martine:** contact met thuisfrontteams. Pijn: plannen van afspraken en belletjes.
- **Erna:** administratieve en secretariele ondersteuning. Pijn: voorgestelde reactiemails.
- **Marlies:** contact met veldmedewerkers. Veel adhoc werk.
- **Rapportage:** zit goed via Salesforce. Niet aanraken.
- **Wat ze meer zouden doen met tijd:** relatie-onderhoud.

Primaire demo vandaag is daarom **mail-reactie (optie C)**, omdat die drie van vier teamleden raakt: Mirjam (sollicitaties), Erna (reactiemails) en Arjen plus Martine (thuisfront-correspondentie). Urenregistratie en planning komen terug als gespreksstof in het canvas-deel.

Open met:

> "Thamar, dank voor je intake-mail. Ik heb je drie signalen meegenomen: urenregistratie, planning en mail-reacties. Vandaag laten we vooral het mail-reactie-stuk werken, omdat dat het meeste van het team in een keer raakt. Urenregistratie en planning bespreken we straks in het canvas. Salesforce blijft buiten scope, dat zit bij jullie goed."

## Vooraf: setup-check

```bash
cd /home/bas/dev/maf-ai-dag/demos/03-hr-finance
ls input/
# Verwacht:
# - functieprofiel-fictief.md
# - maf-handboek-fragment.md
# - maandcijfers-fictief.csv
ls output/
# Leeg of alleen .gitkeep
```

## Stap 1: workflow tonen (3 min)

Open `WORKFLOW.md`. Toon de drie huidige-situatie diagrammen: HR-mail-stroom, HR-onboarding, Finance-rapport. Vraag:

> "Herken je deze stromen? Welke kost het meeste tijd op een gemiddelde week?"

Op basis van het antwoord kies je primair demo-optie C (mail-reactie) en gebruik je optie A of B als secundaire schets in stap 5. Toon daarna de met-agent situatie van mail-reactie.

## Demo-optie C: mail-reactie (HR, primair)

### Stap 2C: intake-mail tonen (1 min)

Open de input-folder zichtbaar:

```
input/
  hr-toon.md                       (MAF-HR-toon, leest de agent als referentie)
  maf-handboek-fragment.md         (handboek voor regelvragen)
  mail-sollicitatie-fictief.md     (kandidaat Coordinator Donateurrelaties)
  mail-thuisfront-fictief.md       (thuisfrontteam-coordinator vanuit Barneveld)
  mail-veld-fictief.md             (vliegtuig-monteur in Juba)
```

Laat de groep kiezen welke mail je live verwerkt. Bij twijfel: kies de thuisfront-mail, omdat die het meest MAF-specifiek is en goed laat zien dat de agent toon kalibreert.

> "Dit zijn drie typen mail die jullie krijgen. Verschillende afzenders, verschillende toon, verschillende vertrouwelijkheid. De agent gaat zelf bepalen welk type dit is en daar het concept op afstemmen."

### Stap 3C: agent live aanroepen (4 min)

```
Lees AGENT-mail-reactie.md en gedraag je als die agent. Verwerk input/mail-[gekozen-type]-fictief.md en schrijf het concept plus de notitie naar output/.
```

Wat te verwachten:
- Claude logt: "lees inkomende mail"
- Claude logt: "lees hr-toon.md"
- Claude logt: "detecteer type: [type]"
- Bij veld of vraag over regeling: "lees maf-handboek-fragment.md"
- Claude schrijft `output/concept-antwoord.md`
- Claude schrijft `output/concept-antwoord-notitie.md`

Vertel ondertussen wat er gebeurt en waarom de agent eerst de toon-richtlijn leest. "Een ChatGPT-prompt zou hier een generiek antwoord maken. Deze agent kalibreert eerst de toon op MAF-HR voordat hij begint te schrijven."

### Stap 4C: concept doorlopen op groot scherm (4 min)

Open beide bestanden naast elkaar:

1. **`output/concept-antwoord.md`:** lees de aanhef hardop. Vraag: "klinkt dit als jullie?" Lees daarna de eerste alinea. Bij thuisfront en veld: let op de toon-verschuiving. Bij sollicitatie: let op formaliteit en concrete vervolgstap.
2. **`output/concept-antwoord-notitie.md`:** dit is het inzicht-moment. De agent vertelt zelf welk type hij herkende, waarom, en wat de medewerker nog moet checken. Lees de check-punten voor.

Vraag de groep: "Wat zou je zelf nog aanpassen voor je dit verstuurt? Wat klopt, wat schuurt?"

> "De agent doet het werk dat herhaling is: type herkennen, toon kiezen, structureren. Het oordeel over wat persoonlijk of vertrouwelijk moet, blijft bij de mens. De notitie is daar bewust voor."

### Stap 5C: tweede mail draaien als de tijd het toelaat (3 min)

Kies een tweede mail van een ander type en draai de agent opnieuw. Wijs aan hoe de toon kantelt zonder dat de agent-definitie verandert.

> "Zelfde agent, zelfde MAF-toon, andere lezer. Dat is geen prompt-truc, dat is de hr-toon.md die de agent elke keer raadpleegt."

## Demo-optie A: onboarding-pakket (HR)

### Stap 2A: input tonen (2 min)

Open `input/functieprofiel-fictief.md`. Zeg:

> "Dit is een echt functieprofiel zoals MAF dat zou maken. Coordinator Donateurrelaties, start 1 juli, vervanger voor een vertrekkende medewerker. Wat HR normaal doet: welkomstmail, week-1-plan, gesprekvragen, een leeslijst. Allemaal vanuit oude sjablonen, vaak een dagdeel werk per nieuwe medewerker."

Open kort `input/maf-handboek-fragment.md` om te tonen dat de agent ook naar het handboek kijkt.

### Stap 3A: agent live aanroepen (5 min)

```
Lees AGENT-onboarding-pakket.md en gedraag je als die agent. Maak het volledige onboarding-pakket voor Jorrit van der Werf op basis van het functieprofiel.
```

Wat te verwachten:
- Claude leest functieprofiel
- Claude leest handboek-fragment
- Schrijft 4 bestanden in output/:
  - welkomstmail.md
  - week-1-checklist.md
  - gespreksvragen-90-dagen.md
  - documenten-leeslijst.md

### Stap 4A: outputs doornemen (5 min)

Open elk bestand. Lees de hoogtepunten voor:

- **Welkomstmail:** voel je MAF hierin? Komt het persoonlijk over of generiek?
- **Week-1-checklist:** is dit haalbaar voor een nieuwe medewerker? Wat zou je toevoegen of weglaten?
- **Gespreksvragen:** zijn dit reflectievragen of evaluatievragen?
- **Documenten-leeslijst:** noemt de agent de juiste hoofdstukken uit het handboek?

Vraag bij elk bestand even reactie van de groep. HR-mensen hebben hier oordeel over en willen het delen.

## Demo-optie B: rapport-helper (Finance)

### Stap 2B: input tonen (2 min)

Open `input/maandcijfers-fictief.csv`. Zeg:

> "Dit zijn fictieve maandcijfers van MAF over drie maanden. Wat finance normaal doet: drie kolommen vergelijken, met de hand de afwijkingen zoeken, een alinea schrijven voor in het rapport, dan kopieren naar Word. Twee tot drie uur werk elke maand."

Wijs één post aan met duidelijke afwijking (bv. ICT en software van 4500 naar 7800, of Marketing van 11800 naar 18600).

### Stap 3B: agent live aanroepen (5 min)

```
Lees AGENT-rapport-helper.md en gedraag je als die agent. Analyseer input/maandcijfers-fictief.csv, vergelijk mei 2026 met april 2026, en lever de top-3 afwijkingen, een samenvattende alinea, en mogelijke verklaringen.
```

Wat te verwachten:
- Claude leest CSV
- Berekent verschillen
- Identificeert top 3
- Schrijft 3 bestanden in output/:
  - afwijkingen.md
  - samenvattende-alinea.md
  - mogelijke-verklaringen.md

### Stap 4B: outputs doornemen (5 min)

Open elk bestand:

- **Afwijkingen:** kloppen de berekeningen? Toon dat finance dit zou hercontroleren maar niet zelf hoeft te berekenen.
- **Samenvattende alinea:** klaar voor in het rapport, in finance-toon. Kopieer-knip-niveau.
- **Mogelijke verklaringen:** hypothesen, niet conclusies. Finance kan deze verifieren bij de juiste collega.

> "De agent doet hier het werk dat denken kost maar geen oordeel vraagt: rekenen en samenvatten. Het oordeel over wat de oorzaak van een afwijking is, blijft bij jullie."

## Stap 5: kort over de andere opties en Thamar's andere signalen (3 min)

Schets kort de twee andere demo-opties:

> "Voor onboarding hebben we de onboarding-pakket agent die uit een functieprofiel een welkomstmail, week-1-checklist, gespreksvragen en leeslijst maakt. Voor finance is er de rapport-helper die maandcijfers vergelijkt en de top-3 afwijkingen samenvat. Beide klaar om na de dag mee te werken."

Refereer dan terug aan Thamar's twee andere pijnpunten zonder demo te draaien:

> "Twee punten waar we vandaag geen demo voor draaien maar die wel in het canvas-gesprek terugkomen: urenregistratie en planning. Voor urenregistratie zou een agent vrije tekst (bv. wat je deze week deed, dictee of korte notitie) omzetten naar gestructureerde regels per project. Voor planning zou een agent een mailthread plus agenda-informatie inlezen en een belrondje voorstellen. Dat zijn directe pakket-A-kandidaten voor een Quick Wins Sprint. Wie wil daar straks aan het canvas op doorpraten?"

## Stap 6: brug naar productie (2 min)

Open de brug-naar-productie diagram. Zeg:

> "Vandaag draaide dit op een lokale mail-file. In productie zit deze agent rechtstreeks op jullie Outlook via MCP. Een inkomende mail van een sollicitant of een thuisfrontteam triggert de agent, het concept verschijnt automatisch in de Drafts-folder van de juiste medewerker. Jullie reviewen, personaliseren, versturen. Hetzelfde geldt voor onboarding (op AFAS) en voor het maandrapport (op Exact of jullie Word-template). Dat is pakket B."

## Voorzichtigheidsregels

- **Geen oordeel over MAF-cijfers**: dit is fictie. Benoem dat expliciet. Geen suggesties over MAF's echte financien.
- **Nuchter blijven**: geen "AI gaat HR vervangen". Wel: "AI kan de eerste versie maken, mens reviewt en publiceert".
- **AVG en personeelsdata**: als HR vraagt naar privacy van personeelsdata, antwoord dat dit een legitieme zorg is en dat een AI-beleid en juiste afsluiting van de agent (geen training op data, lokale verwerking, MCP via beveiligde connectie) noodzakelijk zijn voor productie.
- **Sollicitatie-gegevens zijn extra gevoelig**: noem expliciet dat sollicitatie-data niet in trainings-data van een model belandt en dat productie-deployment voor dit type werk vraagt om een EU-gehoste of lokale runtime.
- **Pastorale informatie over uitgezonden medewerkers**: nooit citeren of doorspelen aan een thuisfrontteam zonder toestemming van de uitgezondene zelf. De agent benoemt dit expliciet in de notitie, niet doorzetten in productie.

## Wat als het misgaat

- **Mail-reactie agent valt uit of duurt te lang**: open `output/voorbeeld-mailreactie/[type]/concept-antwoord.md` en `concept-antwoord-notitie.md` direct in een markdown-viewer. Drie types vooraf gegenereerd: sollicitatie, thuisfront, veld. Eerlijk benoemen dat dit een eerder voorbeeld is.
- **Agent kiest verkeerd type**: niet zelf overrulen, vraag Claude om uitleg ("waarom dit type?"). Toon dat de agent zelf kan beargumenteren en bijsturen.
- **Concept klinkt te formeel of te informeel**: vraag in een vervolgprompt "maak dit warmer" of "maak dit zakelijker, korter". Snelle iteratie is onderdeel van de kracht.
- **Rapport-helper rekenfouten**: vraag claude expliciet "verifieer je berekening voor [post]". Zelfcorrectie is acceptabel en toont dat de agent niet feilloos is maar wel verifieerbaar.
- **Onboarding-pakket te generiek**: vraag "maak het persoonlijker op basis van het feit dat Jorrit vanuit een vergelijkbare functie komt". Toon hoe je de agent kan bijsturen.
- **Output is te lang**: vraag korter. "Maak de welkomstmail max 6 zinnen". Mensen vinden korte output prettiger.

## Voorbereiding voor mail-reactie fallback

In `output/voorbeeld-mailreactie/` staan drie vooraf gegenereerde sets, een per mail-type. Elk pakketje bevat `concept-antwoord.md` en `concept-antwoord-notitie.md`. Open een keer voor de demo zodat u weet hoe ze er in de markdown-viewer uitzien. Niet aanraken tijdens de live demo, alleen openen als de agent uitvalt of te lang duurt.
