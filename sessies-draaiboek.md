# Sessies-draaiboek 20 mei

Werkdocument voor in de hand. Vier sessies van 90 min. Aanname: intake-antwoorden zijn beperkt, dus elke sessie heeft een opener en mining-vragen die het zonder voorwerk doen.

**Nieuwe clustering (let op, anders dan in `vragen-per-cluster.md`):**
1. Marketing en Digital Innovation
2. Relatiebeheer (donateurs zit hierin)
3. HR en Financien
4. Evenementen

**Werkende demo's:** voor elk cluster is een werkende agent-demo voorbereid in [`demos/`](demos/). Per cluster: agent-definities, Mermaid-workflows, voorbeelddata, en een eigen `DEMO-DRAAIBOEK.md` met exacte commando's. Tijdens de demo-fase volg je het cluster-draaiboek (zie verwijzing bij elk cluster hieronder), niet de demo-opties in dit document. Die demo-opties blijven staan als achtergrond.

| Cluster | Werkende demo |
|---------|---------------|
| 1. Marketing en Digital Innovation | [`demos/01-marketing-di/`](demos/01-marketing-di/) (content-pipeline + brand-voice-check + afbeeldings-skill) |
| 2. Relatiebeheer | [`demos/02-relatiebeheer/`](demos/02-relatiebeheer/) (gesprek-naar-flow + aandachts-radar) |
| 3. HR en Financien | [`demos/03-hr-finance/`](demos/03-hr-finance/) (onboarding-pakket + rapport-helper) |
| 4. Evenementen | [`demos/04-evenementen/`](demos/04-evenementen/) (evenement-pakket + evaluaties-verwerker) |

Lees voor elke sessie: het cluster-DEMO-DRAAIBOEK, de WORKFLOW.md (voor de Mermaid-visualisatie op groot scherm), en de [`demos/00-overzicht-concepten.md`](demos/00-overzicht-concepten.md) als opener over chat/skill/workflow/agent/MCP.

---

## Standaard-flow per cluster (90 min)

| Blok | Tijd | Wat |
|------|------|-----|
| Opener | 0-10 | Kennismaking, verwachtingen, één concreet voorbeeld uit deze week |
| Mining | 10-30 | Vragen stellen, pijnpunten oogsten, op flip-over of in Word |
| Demo | 30-55 | Live een van de drie demo-opties doen, gekozen op basis van mining |
| Workflow-canvas | 55-80 | Samen een proces tekenen, AI-stappen aanwijzen |
| Quick win en brug | 80-90 | Eén ding dat ze maandag oppakken, optie voor vervolg noemen |

**Vaste regels voor de sessies:**
- Geen slides. Werk met flip-over of een Word-document op groot scherm.
- Demo's draaien live, niet vooraf opgenomen. Falen is leerzaam.
- Tijdens mining: pas op met te snel oplossingen aanbieden. Eerst goed luisteren.
- Bij elk pijnpunt: vraag door naar hoe vaak en hoe lang. Dat geeft tijdwinst-cijfers voor het einde.

---

## Cluster 1: Marketing en Digital Innovation (90 min)

### Wat maakt deze combinatie bijzonder

Marketing wil creatieve output van hoge kwaliteit en zit waarschijnlijk al op ChatGPT Plus. DI is technisch sterker, denkt in systemen, kan bouwen. Het risico is twee parallelle gesprekken. De kans is dat marketing levert de use case en DI maakt het werkbaar. Behandel ze als toekomstige partners in een workflow, niet als twee aparte aandachtsvelden.

### Opener (10 min)

> "Voordat we beginnen: één rondje. Wat heb je deze week gemaakt of gefaciliteerd waar AI bij gebruikt is, of waar je dacht 'dit zou met AI sneller moeten'?"

Schrijf antwoorden zichtbaar op. Dit geeft echte data om mee te werken.

Daarna kort de groepsdynamiek benoemen: "Marketing en Digital Innovation zitten samen omdat marketing dagelijks de use cases tegenkomt en DI vaak degene is die kan helpen ze door te zetten. We gaan vandaag op zoek naar plekken waar jullie samenwerking concreet wordt."

### Mining-vragen (20 min)

**Voor marketing:**
- Hoeveel verschillende stukken content of communicatie maken jullie per week?
- Welke ChatGPT-prompts of Custom GPTs gebruik je vaak? Wat werkt en wat niet?
- Wanneer kies je ChatGPT en wanneer Copilot? Wat mis je in beide?
- Welke MAF-toon of stijlregels zitten alleen in jullie hoofden, niet op papier?

**Voor Digital Innovation:**
- Welke AI-experimenten lopen of liepen er bij MAF? Waar zat het succes of waar liepen ze vast?
- Welk team komt het vaakst bij jullie met een AI-vraag?
- Hoe zorgen jullie nu voor governance rond AI-gebruik (data, accounts, beleid)?
- Wat zou je willen kunnen wat Copilot je nu niet biedt?

**Voor beide:**
- Hoe goed kennen jullie elkaars werk? Wanneer hebben jullie laatst samen iets gemaakt?

### Demo-opties (25 min, kies één live)

**Optie A: Eén nieuwsbericht naar drie kanalen, drie tools naast elkaar**
Pak een echt MAF-nieuwsbericht of donateurverhaal. Zet het om naar LinkedIn-post, nieuwsbrief-intro en Instagram-caption. Doe dit drie keer kort:
1. In Copilot (M365 Copilot Chat): laat zien dat het werkt maar de output redelijk vlak is.
2. In ChatGPT met een Custom GPT die MAF-toon kent: betere output, meer creativiteit.
3. In Claude Project met dezelfde MAF-toon en drie voorbeeldstukken als kennisbron: het meest fluence.

Doe dit echt naast elkaar. Vraag de groep welke ze beste vinden en waarom. Dat is goud voor het toonbesef.

**Optie B: Brand-voice GPT live bouwen in 15 minuten**
Open ChatGPT. Maak een Custom GPT met:
- Naam: MAF-schrijfassistent
- Instructies: drie pagina's MAF-toon en drie voorbeeldteksten plakken
- Voorbeelden: "schrijf een LinkedIn-post over X", "schrijf een nieuwsbrief-intro over Y"

Test live met een echt onderwerp. Dit toont dat een Custom GPT meer is dan een prompt: het is een persistente schrijfpartner die je toon kent.

**Optie C (alleen als DI-zwaar): Claude Code met MCP op SharePoint**
Open Claude Code. Verbind via MCP met een SharePoint-folder (of een lokale map die SharePoint imiteert). Vraag: "lees de laatste 5 donateurbrieven en stel een nieuwe op in dezelfde stijl voor donateur X die net €10.000 heeft gegeven."

Belangrijk: niet als showcase, maar als verschil-maker. Benoem expliciet: "Dit is wat Copilot niet kan. Niet omdat Copilot slecht is, maar omdat de architectuur anders is."

### Workflow-canvas (25 min)

Startvraag: "Stel: er moet een nieuwe campagne komen rond een MAF-thema. Welke stappen doorloop je van eerste idee tot het bericht de donateur of volger leest?"

Teken op flip-over: idee → research → conceptteksten → review/akkoord → publicatie → meten → opvolging. Zet bij elke stap stickies met: hoe lang nu, wat zou AI kunnen schelen, wat moet handmatig blijven (toon, gevoel, oordeel).

Bij twee specifieke stappen even doorboren met DI erbij: "stel we maken een agent die dit stuk doet, hoe ziet die er dan uit, en wat heb je nodig om hem te bouwen?"

### Quick win en brug (10 min)

Vraag marketing: "Welke ene workflow gaan jullie maandag testen?" Schrijf het op.
Vraag DI: "Welk experiment van marketing kunnen jullie de komende twee weken faciliteren?" Schrijf op.

Brug: "Wat we vandaag deden is het oppervlak. Een Brand-voice GPT is een prompt-laag. Een agent met MCP die zelf in SharePoint kijkt is een infrastructuurlaag. Voor die tweede stap is samenwerken met DI nodig en is een paar weken bouwwerk realistisch. Daar willen we graag over doorpraten."

### Inspiratiecases (voorbij Copilot-chat)

1. **Content-pipeline-agent.** Nieuw donateurverhaal verschijnt in een SharePoint-folder. Agent leest, herkent het type verhaal, maakt drie conceptposts in MAF-toon, plaatst ze als concept klaar voor review. Tijdwinst per verhaal: 2 uur naar 15 minuten.
2. **Brand-voice-bewaker.** Agent leest alle uitgaande content voor publicatie, checkt op toon-afwijking, geeft tip waar het van de huisstijl afwijkt. Niet als poortwachter, als tweede paar ogen.
3. **Persoonlijke video-snippets.** Voor grote donateurs of jubilea een korte video genereren (HeyGen of D-ID + script van Claude). Schaal: persoonlijke aandacht zonder dat het uren per stuk kost.

### Prompt-kaart om mee te geven

```
Maak van [tekst] drie versies:
1. LinkedIn-post (max 1300 tekens, professioneel, met haak in eerste zin)
2. Nieuwsbrief-intro (3 alinea's, persoonlijk, eindigend op een call-to-action)
3. Instagram-caption (max 220 tekens, beeldend, één emoji toegestaan)

Houd de toon: warm, deskundig, geen overdrijving, geen jargon. Schrijf zoals een
ervaren MAF-medewerker schrijft.
```

---

## Cluster 2: Relatiebeheer (90 min)

### Wat je over deze sessie moet weten

Donateurs zit verstopt in dit cluster. Relatiebeheer en donateurrelaties hebben grote overlap: persoonlijke communicatie, gesprekken voorbereiden en opvolgen, segmenteren, op tijd contact opnemen. Pijnpunt is altijd: persoonlijk willen zijn op schaal, en tijd om gesprekken goed na te bewerken.

Wees voorzichtig met gevoeligheid: gegevens over gevers en relaties zijn vaak vertrouwelijk en soms emotioneel. Hier geen voorbeelden gebruiken met echte namen of bedragen tenzij ze die zelf aanbieden.

### Opener (10 min)

> "Vertel eens over je beste gesprek of contact van de afgelopen maand. Niet zakelijk: wat maakte het goed?"

Dit zet de toon: relaties gaan over kwaliteit, niet hoeveelheid. AI gaat hier nooit het kwalitatieve werk vervangen, alleen het omringende handwerk verminderen.

### Mining-vragen (20 min)

- Hoeveel relatie- of donateurgesprekken voer jij per week of maand?
- Wat doe je nu na een gesprek? Verslag maken, in CRM zetten, opvolgen?
- Hoe segmenteren jullie donateurs of relaties? Krijgt iedereen hetzelfde?
- Welke communicatie naar donateurs voelt te onpersoonlijk, maar je krijgt het niet anders rond?
- Welke vragen krijg je vaak van donateurs die je telkens opnieuw beantwoordt?
- Welk CRM gebruiken jullie en hoe makkelijk vinden mensen er info in?
- Wat is voor jullie de grens: waar mag AI zelfstandig iets doen en waar absoluut niet?

### Demo-opties (25 min, kies één live)

**Optie A: Gespreksverslag in één run naar vier dingen**
Plak een fictief gespreksverslag (15 regels tekst) in Claude of ChatGPT. Vraag:
1. Drie actiepunten met deadline
2. Een korte CRM-notitie (5 regels)
3. Een concept-bedankmail in MAF-toon
4. Drie openstaande vragen om bij volgend gesprek mee te beginnen

Laat zien hoe je dit eenmalig maakt en daarna gewoon opnieuw gebruikt. Output in 30 seconden.

**Optie B: Persoonlijke bedankbrieven uit Excel**
Maak vooraf een Excel met 5 fictieve donateurs: naam, geefhistorie (eerste gift / trouwe gever / grote gift / langdurige stop / nieuwe terugkeerder), opmerking. Plak deze in Copilot of Claude en vraag: "schrijf voor elk een korte bedankmail die past bij hun geschiedenis."

Vergelijk de uitvoer voor de vijf typen. Discussie: waar voelt het persoonlijk, waar nog generiek?

**Optie C: Donateurprofiel verrijken voor gesprek**
Gegeven naam en organisatie, vraag de AI publieke informatie samen te vatten ter voorbereiding op een gesprek (LinkedIn-bio, organisatie-info, recent nieuws). Doe dit met een fictief MAF-relatiebeheer-persoon.

Direct na de demo: bespreek de AVG-grens. Wat publiek is mag, persoonsgegevens uit eigen systemen koppelen vraagt zorgvuldigheid en geen privé-account.

### Workflow-canvas (25 min)

Startvraag: "Een nieuwe donateur heeft net voor het eerst gegeven. Wat gebeurt er in de 30 dagen daarna? Teken het uit. Wat is automatisch, wat is handmatig, en wat blijft nu liggen?"

Doe dit ook voor: "Een trouwe donateur die al 5 jaar maandelijks geeft, hoe houden we contact?" Het verschil tussen die twee processen is vaak waar de winst zit.

### Quick win en brug (10 min)

Quick win: één type contact kiezen (bedanken, follow-up na gesprek, of vraag-beantwoording) en daar maandag de gesprekverslag-naar-mail-flow op proberen.

Brug: "Wat we hier doen blijft chat. De volgende stap is een agent die wekelijks jouw relaties doorloopt en aanwijst wie aandacht verdient. Dat vraagt een koppeling met jullie CRM. Daar willen we graag over verder praten als jullie er klaar voor zijn."

### Inspiratiecases (voorbij Copilot-chat)

1. **Wekelijkse aandachts-radar.** Agent kijkt elke maandag in het CRM, vergelijkt laatste contactmoment per relatie, en oppert wie deze week een bericht of belletje verdient. Geen automatische actie, alleen voorstel.
2. **Levend donateurprofiel.** Elk contactmoment wordt automatisch verwerkt: gespreksverslag of mailwisseling komt erin, samenvatting blijft up-to-date. Bij volgend gesprek begin je niet vanaf nul.
3. **Slimme felicitatie-agent.** Als een relatie een verandering deelt (nieuwe baan, jubileum, organisatorische mijlpaal), agent stelt persoonlijk bericht voor. Mens drukt op verzenden.

### Prompt-kaart om mee te geven

```
Hier is een gespreksverslag: [plak hier].
Maak vier dingen, in deze volgorde:

1. ACTIEPUNTEN: maximaal drie, elk met deadline-suggestie.
2. CRM-NOTITIE: vijf regels, zakelijk, alleen wat relevant is voor volgend contact.
3. CONCEPT-FOLLOWUPMAIL: warm, niet langer dan 8 zinnen, sluit aan op iets dat
   in het gesprek besproken is.
4. OPEN VRAGEN: drie dingen die in dit gesprek niet beantwoord zijn en bij
   volgend contact terug kunnen komen.

Houd de toon: oprecht, respectvol, geen overdrijving.
```

---

## Cluster 3: HR en Financien (90 min)

### Wat je over deze sessie moet weten

Dit team is conservatiever en nuchterder. Pas op voor te veel show. Pijnpunten zijn vaak heel concreet: maandelijkse rapportages met veel kopieerwerk, onboarding van nieuwe medewerkers, beleid en regelingen die niemand terugvindt, repetitieve vragen.

Goed nieuws: dit cluster heeft vaak de hoogste tijdwinst per workflow omdat het zo procesmatig is. Slecht nieuws: de drempel voor vertrouwen is hoger.

Houd de demo zakelijk, zonder hype. Cijfers en betrouwbaarheid wegen zwaarder dan creativiteit.

### Opener (10 min)

> "Vertel eens: wat heb je afgelopen week gedaan dat je het gevoel gaf 'dit doe ik elke maand of week opnieuw'?"

Concreet en kort. Laat het rondje doen, schrijf op het bord.

### Mining-vragen (20 min)

**Finance:**
- Welke rapportages maak je elke maand of elk kwartaal? Hoeveel tijd zit erin?
- Waar zit het meeste kopieer- en plakwerk in jouw werk?
- Welke vragen krijg je van budgethouders die altijd hetzelfde zijn?
- Wat doen jullie nu om afwijkingen in cijfers op te merken?

**HR:**
- Hoe verloopt onboarding nu? Welke documenten en mails gaan altijd dezelfde kant op?
- Welke regelingen, handboeken of procedures bestaan er, en hoe vinden medewerkers daar iets in?
- Hoe bereiden jullie functioneringsgesprekken voor? Waar gaat tijd in zitten?
- Welke vragen van medewerkers komen het vaakst voorbij?

**Voor beide:**
- Zijn er documenten waar mensen geregeld vragen over stellen omdat ze zelf het antwoord niet vinden?

### Demo-opties (25 min, kies één live)

**Optie A (finance, gebruik Excel met Copilot):**
Open een Excel-blad met maandcijfers (fictief, één of twee tabbladen). Gebruik Copilot in Excel (of Claude met geüploade Excel) en vraag:
1. "Welke posten zijn meer dan 10% afgeweken van vorige maand?"
2. "Schrijf een samenvattende alinea voor de managementrapportage."
3. "Wat zou de oorzaak van die afwijking kunnen zijn op basis van wat je ziet?"

Belangrijke nuance: Excel Agent Mode draait nu op Claude. Dus als je Copilot in Excel laat zien, laat je impliciet ook Claude zien. Benoem het niet als marketing-praatje, gewoon als feit.

**Optie B (HR, FAQ-agent op handboek):**
Pak een fictief HR-handboek of een MAF-regeling (vakantieregeling, thuiswerk, declaratie). Bouw een Custom GPT of Copilot Studio-agent in 15 minuten die alleen op die bron antwoordt.

Test live met drie vragen die echte medewerkers stellen: "hoeveel verlofdagen krijg ik bij parttime?", "mag ik vanuit het buitenland werken?", "hoe declareer ik OV?".

**Optie C (HR, onboarding-pakket):**
Geef de AI een functieprofiel en startdatum. Vraag om:
1. Een welkomstmail
2. Een checklist voor week 1 (accounts, kennismaking, eerste training)
3. Drie gespreksvragen voor de eerste functioneringsgesprek
4. Een lijst documenten die de nieuwe medewerker moet doornemen

Toon hoe consistent dit elke keer is en hoe het de buddy ontlast.

### Workflow-canvas (25 min)

Voor HR: "Iemand start over twee weken bij MAF. Loop me door alles heen wat er gebeurt: contract, accounts, kennismaking, eerste werkweek, eerste maand. Waar herhaalt zich elke keer hetzelfde?"

Voor finance: "Eind van de maand: vanaf de boekhouding tot de directie de cijfers ziet. Wat zijn de stappen? Waar zit kopieerwerk, waar zit denkwerk?"

Doe één van de twee, niet beide. Kies de meest energieke deelnemer als richting.

### Quick win en brug (10 min)

Quick win HR: één regeling of beleidsstuk kiezen om als test-FAQ in Copilot Studio of als Custom GPT op te zetten.
Quick win finance: één maandrapportage kiezen om volgende maand met Copilot in Excel te maken.

Brug: "Wat we nu deden is op één document of één Excel. Een agent die elke maand automatisch de rapportage maakt, of een Teams-bot waar medewerkers in chatten met het handboek, is de volgende stap. Daar willen we graag op verder."

### Inspiratiecases (voorbij Copilot-chat)

1. **Beleid-FAQ in Teams.** Agent staat in een Teams-kanaal. Medewerkers stellen vragen over regelingen. Agent antwoordt op basis van het MAF-handboek, met bronvermelding. Schaalt HR zonder HR-werk te vervangen.
2. **Maandrapportage-pipeline.** Cijfers verschijnen in een SharePoint-Excel. Agent maakt direct een conceptrapport: hoofdtabel, samenvattende alinea, top-3 afwijkingen. Finance reviewt en publiceert.
3. **Onboarding-buddy-agent.** Stuurt de eerste 30 dagen elke maandag tips en check-ins naar nieuwe medewerker, beantwoordt vragen via Teams, signaleert aan HR als iemand achterloopt op accounts of trainingen.

### Prompt-kaart om mee te geven

```
Hier is een Excel of regeling: [plak inhoud of geef bestand].

Voor financiele data:
- Wijs de drie grootste afwijkingen aan ten opzichte van vorige maand.
- Schrijf een samenvattende alinea van max 5 zinnen voor de rapportage.
- Stel drie mogelijke verklaringen voor en geef aan welke informatie nog nodig is om dat te bevestigen.

Voor HR-regelingen of beleid:
- Beantwoord deze vraag van een medewerker: [vraag].
- Citeer alleen uit het bovenstaande beleidsdocument.
- Als het antwoord er niet staat, zeg dat eerlijk en verwijs naar de HR-afdeling.
```

---

## Cluster 4: Evenementen (90 min)

### Wat je over deze sessie moet weten

Klein team, hoog herhalingsgehalte in het werk. Elk evenement heeft dezelfde fases: planning, uitnodiging, draaiboek, dag-zelf, evaluatie. De winst zit in templates en flows die jaar op jaar werken, zodat het team zich op de inhoud kan concentreren.

Verwacht enige stress en vermoeidheid: evenementenmensen zijn vaak druk en vinden het moeilijk om voor de zoveelste keer iets nieuws te leren. Sluit aan op tijdwinst, niet op innovatie.

### Opener (10 min)

> "Wat was het laatste evenement waar jullie iets aan organiseerden? Wat ging soepel, en waar dacht je 'dit hadden we al moeten regelen voordat we eraan begonnen'?"

Echte verhalen, snel rondje.

### Mining-vragen (20 min)

- Welke evenementen komen jaarlijks terug? Wat doe je telkens opnieuw?
- Heb je een draaiboek-template, of bouw je hem elke keer opnieuw op?
- Hoe verloopt deelnemerscommunicatie nu: uitnodiging, herinneringen, follow-up?
- Wat doen jullie met evaluaties na een evenement? Worden ze gelezen, gebruikt, opgevolgd?
- Hoeveel overlap is er met marketing of relatiebeheer bij voorbereiding?
- Wat is voor jullie de meest stressvolle fase van een evenement, en waarom?

### Demo-opties (25 min, kies één live)

**Optie A: Draaiboek naar herbruikbare template**
Pak een oud draaiboek (van MAF, of een geanonimiseerd voorbeeld). Upload of plak het in Claude of Copilot. Vraag: "maak hiervan een template voor volgend jaar. Vervang alle specifieke namen, data en locaties door duidelijke invulvelden. Voeg een checklist toe met taken per fase."

Output: een herbruikbaar Word-document dat ze direct kunnen gebruiken voor het eerstvolgende evenement.

**Optie B: Drie deelnemersmails in één keer**
Geef AI de evenementdetails (titel, datum, locatie, doelgroep, programma) en vraag om drie mails:
1. Uitnodiging (zes weken vooraf)
2. Herinnering met praktische info (drie dagen vooraf)
3. Bedankmail met terugblik (de dag erna)

Toon dat één briefing drie afgestemde berichten oplevert, in dezelfde toon, met logische opbouw.

**Optie C: Evaluatieformulieren samenvatten**
Pak een stapel evaluaties (echte of fictieve, 10-15 stuks). Plak ze samen in Claude (lange context werkt hier goed) of Copilot. Vraag:
1. "Wat ging volgens deelnemers goed?"
2. "Wat kan beter?"
3. "Drie concrete verbeterpunten voor volgend jaar."
4. "Zijn er individuele opmerkingen die directe aandacht vragen?"

Tip: gebruik bij voorkeur Claude voor optie C wegens lange context. Dat is meteen een geloofwaardige reden waarom je Claude voorstelt.

### Workflow-canvas (25 min)

Startvraag: "Jullie hebben een evenement over 2 maanden. Teken op een tijdlijn alles wat er nu tot een week na het evenement moet gebeuren. Markeer wat elke keer hetzelfde is. Wat zou kunnen verdwijnen als jullie een goede template en een agent hadden?"

Doe dit echt op tijdlijn, niet als lijst. Het visuele helpt om de herhaling te zien.

### Quick win en brug (10 min)

Quick win: kies één evenement dat dit jaar terugkomt en een onderdeel daarvan (uitnodigingsmails, draaiboek, of evaluaties) om met AI op te bouwen. Maandag starten.

Brug: "Wat we hier doen is elk stuk losse aandacht geven aan AI. Een agent die de hele evenement-keten begeleidt, van uitnodigingen tot evaluatie tot verbetervoorstellen voor volgend jaar, is de volgende stap. Niet vandaag, maar bouwbaar."

### Inspiratiecases (voorbij Copilot-chat)

1. **Evenementen-agent door de tijd heen.** Twee maanden voor het evenement begint de agent. Hij stuurt op gezette momenten communicatie, herinnert vrijwilligers, plaatst statusupdates in het team-kanaal, en op de dag-erna verzamelt hij evaluaties.
2. **Levende verbeterlijst.** Elk evaluatieformulier wordt automatisch verwerkt. Verbeterpunten worden opgeteld en aan het draaiboek voor volgend jaar toegevoegd. Niets gaat verloren tussen jaargangen.
3. **Real-time vragen-baliebot.** Tijdens een evenement: deelnemers stellen vragen via een Teams-kanaal of WhatsApp-nummer. Agent antwoordt op basis van het programma, locatie-info, dieetlijst en logistiek. Team kan zich op het echte werk concentreren.

### Prompt-kaart om mee te geven

```
Schrijf drie mails voor [evenementnaam] op [datum] in [locatie] voor [doelgroep].

Programma in het kort: [3 regels].

Mail 1: UITNODIGING, te versturen 6 weken vooraf. Warm, helder over praktische zaken,
eindigend op een duidelijke aanmeldknop.

Mail 2: HERINNERING, te versturen 3 dagen vooraf. Korter dan de uitnodiging. Met
locatie, dieetlijst-link, parkeerinfo. Toon: praktisch en behulpzaam.

Mail 3: BEDANKMAIL, te versturen de dag erna. Persoonlijk, met een terugblik op
één moment van de dag, een link naar foto's of vervolg, en de uitnodiging om
feedback te delen.

Houd in alle drie de toon: warm, MAF-stijl, geen overdrijving, korte zinnen.
```

---

## Plenaire afsluiter of bilateraal met Gilbert (optioneel, 15-30 min)

Als jullie aan het einde van de dag nog tijd hebben met Gilbert, doe het volgende:

1. Loop de quick wins per cluster langs. Schrijf ze op één pagina.
2. Wijs aan welke twee of drie quick wins de meeste tractie zullen krijgen (vermoedelijk Marketing, Relatiebeheer, en Digital Innovation).
3. Geef Gilbert een keuze van de drie vervolgpakketten (A: Quick Wins Sprint, B: Workflow Implementation, C: AI Center of Excellence) met de twee die je het meest geschikt vindt voor MAF nu.
4. Stel een vervolgafspraak voor binnen 2 weken om concreet te worden.

Hou dit zakelijk en kort. De pitch is dat er momentum is en je dat wilt vasthouden.

---

## Last-minute spiekbriefje voor in je broekzak

| Cluster | Eén ding dat je zeker moet laten zien | Eén risico om op te letten |
|---------|---------------------------------------|----------------------------|
| Marketing + DI | Brand-voice Custom GPT live bouwen, en dan Claude met MCP als brug naar agent | Niet twee gesprekken parallel; blijf de brug benadrukken |
| Relatiebeheer | Gespreksverslag in één run naar 4 dingen | Geen echte donateurnamen of bedragen gebruiken zonder toestemming |
| HR + Finance | Copilot in Excel of FAQ-agent op HR-handboek | Nuchter blijven, geen creatieve show |
| Evenementen | Drie deelnemersmails in één keer, of evaluaties samenvatten met Claude | Tijddruk benoemen, geen extra leerlast |
