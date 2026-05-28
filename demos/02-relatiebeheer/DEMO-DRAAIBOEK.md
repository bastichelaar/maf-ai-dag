# Demo-draaiboek: Relatiebeheer

Live demo voor het cluster Relatiebeheer (waarin donateurs verstopt zit). Geschatte tijd: 25 minuten.

Sessie-context: dit team is op AI-niveau beginnend. Wees nuchter, geen showcase-toon. Beelden van warm relatiewerk in stand houden.

## Vooraf: setup-check

```bash
cd /home/bas/dev/maf-ai-dag/demos/02-relatiebeheer
ls input/
# Verwacht:
# - gespreksverslag-1.md, gespreksverslag-2.md
# - crm-extract-fictief.csv
# - historische-contacten/ (3 bestanden)
ls output/
# Leeg of alleen .gitkeep
```

## Stap 1: workflow tonen (3 min)

Open `WORKFLOW.md` met Mermaid-preview. Eerst de huidige situatie. Vraag:

> "Herken je dit? Welke van deze stappen blijven in jullie team het vaakst liggen?"

Schrijf op het bord wat ze noemen. Daarna de met-agent situatie.

> "Als de eerste vier outputs vanzelf in concept op tafel zouden liggen, wat zou dat veranderen aan jullie maandag-ochtend?"

## Stap 2: input tonen (2 min)

Open `input/gespreksverslag-1.md` (de De Lange-Verhoef thuisbezoek). Zeg:

> "Dit is een gespreksverslag zoals jullie waarschijnlijk maken na een bezoek. Een uur of langer praten, dan tikken. Aandacht aan vier dingen die hier nu uit moeten komen: actiepunten, CRM, follow-up, en wat er nog open ligt. Kijk wat er gebeurt."

## Stap 3: gesprek-naar-flow agent live aanroepen (5 min)

Start Claude Code in deze folder.

> "Lees AGENT-gesprek-naar-flow.md en gedraag je als die agent. Verwerk input/gespreksverslag-1.md."

Wat te verwachten:
- Claude logt het lezen van het verslag
- Schrijft `output/actiepunten.md`
- Schrijft `output/crm-notitie.md`
- Schrijft `output/concept-followup-mail.md`
- Schrijft `output/openstaande-vragen.md`

## Stap 4: outputs voorlezen (5 min)

Open elk bestand op groot scherm en lees voor:

1. **Actiepunten:** "kijk, drie acties met deadline. Past dit bij hoe jullie het zouden doen?"
2. **CRM-notitie:** "vijf regels, geen interpretatie. Dat is precies wat een CRM nodig heeft."
3. **Concept-followup-mail:** "lees voor, vraag of de toon klopt voor mevrouw De Lange. Wat zou jij aanpassen?"
4. **Openstaande vragen:** "dit is de mentale checklist voor het volgende contact."

Hier ontstaat vaak goede dialoog. Laat het lopen.

## Stap 5: aandachts-radar als tweede demo (5 min)

Wissel naar de tweede agent.

> "Nu een ander soort werk. Stel: het is maandagochtend. Jullie hebben 30 relaties die niet allemaal vandaag gebeld kunnen worden. Welke verdienen aandacht?"

> "Lees AGENT-aandachts-radar.md en gedraag je als die agent. Scan input/crm-extract-fictief.csv en input/historische-contacten/, en lever een top-5 wie deze week aandacht verdient."

Wat te verwachten:
- Claude leest CSV en historische contacten
- Combineert deze met type-relatie en datum
- Schrijft `output/aandachts-radar-week.md`
- Schrijft 5 individuele `output/bericht-[slug].md` bestanden

## Stap 6: top-5 doorlopen (3 min)

Open `aandachts-radar-week.md`. Loop door de top 5. Verwacht zoiets als:

- M. Steensma (trouw, beloofd in november 2024 info te sturen, niet gebeurd)
- CHE Ede (vervolgafspraak niet gemaakt, decaan wacht)
- Y. Tjong (nieuw, toegezegde info niet verstuurd)
- J. de Lange-Verhoef (legaat-gesprek, gebeurd, maar opvolgen)
- Familie Visser-Bakker (eenmalig groot, in 2 weken terugkoppelen)

> "Kijk, de agent oordeelt niet over wie de grootste gever is. Hij kijkt naar wie verwaarloosd dreigt te raken. Dat is precies de blinde vlek waar mensen vaak last van hebben."

Open één `bericht-[slug].md` als voorbeeld. Vraag: "is dit zoals jij dit zou schrijven?"

## Stap 7: brug naar productie (2 min)

Open de brug-naar-productie diagram in `WORKFLOW.md`. Zeg:

> "Vandaag draaide dit op een fictief CRM-extract. In productie zit dezelfde agent rechtstreeks op jullie CRM via MCP. Elke maandag verschijnt een top-5 in jullie Teams-kanaal of in een dashboard. Plus: een gesprek dat je morgen voert, krijgt na een uur de vier concept-uitvoer in een mail. Dat is pakket A naar pakket B."

## Voorzichtigheidsregels

- **AVG**: noem in de outputs geen gevoelige informatie die niet noodzakelijk is. Tijdens demo: als je een gevoelig detail ziet, benoem het en vraag of MAF dat in productie zou tonen of niet.
- **Donateursnamen**: de fictieve namen zijn als zodanig herkenbaar (De Lange-Verhoef, Visser-Bakker). Benoem expliciet dat dit demo-data is.
- **Klink niet als verkoper**: dit team is allergisch voor fundraising-energie. Hou het op werk-realisme en respect voor de relatie.

## Wat als het misgaat

- **Agent rapporteert oppervlakkig**: vraag concreter "lees gespreksverslag-1.md letterlijk en haal eruit wat de afspraken waren".
- **Toon van follow-up is plat**: laat het bewust zien, vraag het team waar het schuurt, en zeg dat brand-voice-werk in pakket A zou worden verfijnd.
- **Aandachts-radar lijkt willekeurig**: vraag de agent te tonen waarom hij iemand bovenin zet ("verklaar je redenering voor positie 1"). Dat maakt de logica zichtbaar.
