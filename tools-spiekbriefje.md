# Tools-spiekbriefje: wat MAF gebruikt en hoe het zich verhoudt

Snelle referentie voor tijdens de sessies. Compact, niet uitputtend. Voor het bredere landschap zie `voorbereiding-ai-landschap.md`.

---

## In één tabel

| Tool | Wat krijg je | Kosten | Waar uitblinkt | Waar het strandt |
|------|--------------|--------|----------------|-------------------|
| Copilot (gratis, in browser/Bing) | AI-chat met internet, beeldgeneratie | 0 | Snelle vragen, research, geen M365-data | Geen toegang tot eigen mails, SharePoint, Excel-data |
| Copilot Chat (gratis, met werkaccount) | Hetzelfde, maar met "Commercial Data Protection" | 0 | Veilig vragen stellen zonder dat data wordt getraind | Nog steeds geen toegang tot MAF-data, niet in Word/Excel/Outlook |
| Microsoft 365 Copilot (betaald) | Copilot ín Word, Excel, Outlook, Teams, plus chat met MAF-data | ~€30 per gebruiker per maand | Brieven opstellen in Word, mails samenvatten, Excel-data, vergaderingen samenvatten, Copilot Studio (eenvoudige agents) | Beperkt buiten M365; agents zijn nog matig; veel licenties worden niet gebruikt |
| Teams Premium | AI in vergaderingen: Intelligent Recap, livevertaling, webinars | ~€10 per gebruiker per maand | Vergaderingen automatisch samenvatten met sprekers en actiepunten, livevertaling, branded webinars | Niet hetzelfde als Copilot, kan niet schrijven of analyseren |
| ChatGPT Plus | Sterkere chat met Custom GPTs, Projects, beeld, code, geheugen | $20 per maand | Lange creatieve teksten, custom GPTs met eigen kennis, snelle iteratie, beeldgeneratie | Geen MAF-data-integratie; persoonlijk account, geen team-governance |
| ChatGPT Team / Enterprise | Idem, met admin, geen training op data, gedeelde GPTs | $25 tot $60 per gebruiker per maand | Team-brede GPTs (bv. MAF-toon GPT), governance | Idem: staat los van M365, je moet bestanden uploaden |
| Claude Pro / Team | Lange documenten, sterke schrijfkwaliteit, Projects met eigen kennis | $20 tot $30 per gebruiker per maand | Lange documenten in één keer (jaarverslag, beleid), redeneren over tegenstrijdige info, MCP voor eigen koppelingen | Geen M365-integratie out-of-the-box; minder bekend bij gebruikers |
| Claude Code (CLI) | Claude in de terminal met toegang tot bestanden, terminal, MCP | Inbegrepen in Pro/Team | Bouwen, automatiseren, agents met eigen koppelingen | Voor developers, niet voor eindgebruikers |

---

## Verschillen die je morgen vaak moet uitleggen

### "Wij hebben toch al Copilot?"

Meestal bedoelen ze één van deze drie dingen, vraag altijd door:

1. **Gratis Copilot** in de browser of via copilot.microsoft.com. Geen toegang tot MAF-data, werkt los van M365.
2. **Copilot Chat met werkaccount** (gratis, sinds 2025 standaard binnen M365). Iets veiliger qua data, maar nog steeds zonder toegang tot mails of SharePoint.
3. **Microsoft 365 Copilot (betaald)**. Pas hiermee zit Copilot écht ín Word, Excel, Outlook en kan het mails, agenda, SharePoint doorzoeken.

Praktische check: "Als je Word opent, zie je dan een Copilot-knop bovenin die actief is en je documenten kan herschrijven?" Ja = betaalde licentie. Nee = gratis variant.

### Wat krijg je voor die €30 per maand?

- Copilot **in** Word, Excel, PowerPoint, Outlook, Teams, OneNote, Loop
- Vragen over je eigen mails, agenda, OneDrive, SharePoint, Teams-chats
- "Verwijs naar /document" om documenten te targetten
- Copilot in Teams-vergaderingen (live tijdens of na de vergadering)
- Copilot Studio (mits aparte licentie) om eenvoudige agents te bouwen
- Researcher en Analyst agents (geavanceerd, draaien op Claude onder de motorkap)
- DALL-E voor beeldgeneratie

Wat je *niet* krijgt: agents die buiten M365 koppelen, ChatGPT-niveau creatieve schrijfkwaliteit, lange-document-analyse op Claude-niveau.

### Teams Premium versus Copilot in Teams

Veel verwarring hier. Twee verschillende producten, soms overlap:

| | Teams Premium | Copilot in Teams |
|--|---------------|-------------------|
| **Wat** | AI-functies in vergaderingen | Algemene AI-assistent ín Teams |
| **Recap** | Intelligent Recap: automatisch samenvattingen met sprekers, hoofdstukken, mentions | Recap via Copilot, on-demand vragen kunnen stellen |
| **Livevertaling** | 40+ talen | Beperkt |
| **Webinars** | Geavanceerde registratie, branding | Geen |
| **Beveiliging** | Watermerken, geavanceerde encryptie | Geen |
| **Schrijven, samenvatten chats** | Nee | Ja |
| **Prijs** | ~€10 per gebruiker per maand | Onderdeel van M365 Copilot (~€30) |

Als iemand Teams Premium heeft maar geen M365 Copilot: ze hebben goede vergader-AI, maar geen schrijfassistent in Word of mail-samenvatter in Outlook.

### ChatGPT versus Copilot

Marketing zit waarschijnlijk op ChatGPT Plus omdat het beter is voor creatieve content en custom GPTs. Geen onzin verhaal, gewoon eerlijk:

- **ChatGPT beter dan Copilot in:** creatieve teksten, brainstorm, custom GPTs (kleine agents met eigen kennis), beeldgeneratie, project-mappen met blijvende context, fluence van toon.
- **Copilot beter dan ChatGPT in:** alles wat met eigen MAF-data te maken heeft, dingen direct uit Word of Outlook doen, vergaderingen samenvatten.

In de praktijk: marketingmensen vinden ChatGPT prettiger om mee te schrijven, maar gebruiken Copilot om mails uit Outlook samen te vatten. Dat is geen ramp, dat is praktisch.

### Wanneer Claude voorstellen, zonder geforceerd te zijn?

Geloofwaardige gevallen waar Claude duidelijk wint:

1. **Lange documenten in één keer.** Een jaarverslag, een beleidsdocument, een stapel donateurbrieven samen analyseren. Claude pakt 200.000 tokens (ca. 500 pagina's) in één keer, ChatGPT/Copilot bottlenecken eerder. Concreet voor MAF: "geef Claude alle nieuwsbrieven van de afgelopen 5 jaar en vraag wat er door de jaren heen verschuift in toon".
2. **Schrijfkwaliteit en toon.** Voor de gevoelige donateurcommunicatie of jaarverslag-teksten merken mensen het verschil. Claude is genuanceerder.
3. **Voorbij chat: agents die buiten M365 koppelen.** Met MCP kun je Claude rechtstreeks aan SharePoint, een database, of een externe API koppelen. Copilot kan dat niet zonder Power Platform-connectors die geslotener zijn.
4. **Diep redeneren over tegenstrijdige informatie.** Bv. drie evaluatieformulieren waar deelnemers verschillende dingen zeggen, en Claude moet patronen vinden.

Wanneer Claude *niet* voorstellen:
- Voor mensen die nooit uit Outlook komen en alleen mails willen herschrijven. Copilot doet dat goed genoeg en zit al in hun werkbalk.
- Als de drempel om een nieuw account te openen en bestanden te uploaden te hoog is.

---

## Veelgemaakte misvattingen om vriendelijk recht te zetten

| Misvatting | Wat het werkelijk is |
|------------|----------------------|
| "Copilot kan alles wat ChatGPT kan" | Depends op welke Copilot. Gratis Copilot is minder dan ChatGPT Plus. Betaalde M365 Copilot wint op M365-data, verliest op creatief schrijven. |
| "Mijn data wordt door AI gebruikt om het model te trainen" | Bij betaalde plannen (M365 Copilot, ChatGPT Team/Enterprise, Claude Team/Enterprise) niet. Bij gratis Copilot Chat met werkaccount ook niet. Bij gratis ChatGPT zonder uitschakelen wel. |
| "AI verzint dingen, dus we kunnen het niet vertrouwen" | Klopt voor open vragen. Wordt veel beter als je documenten meegeeft en vraagt om antwoorden specifiek daaruit. "Grounding" heet dat. |
| "Met Copilot zijn we klaar" | Copilot is een goede basis. Voor diepere taken, niet-M365-koppelingen, en agents komen Claude en workflow-tools erbij. |
| "AI vervangt mijn werk" | Realistischer: AI doet de delen die je tóch al niet leuk vond. Tijdwinst gaat naar het werk waar oordeel en relatie tellen. |

---

## Antwoorden op vragen die je morgen waarschijnlijk krijgt

**"Is Claude veilig genoeg voor donateurgegevens?"**
Pro/Team-plannen van Claude trainen niet op je data, met dezelfde standaard als ChatGPT Team. Maar: pas op voor inloggen met privé-accounts of bestanden uploaden met persoonsgegevens. Voor MAF-niveau gevoeligheid: Claude Team of Enterprise gebruiken, geen Pro op persoonsnaam. Daarnaast: net als bij Copilot is een AI-beleid nodig dat zegt wát mag.

**"Waarom zou ik Claude gebruiken als ik al Copilot heb?"**
Voor dingen die Copilot niet goed doet: lange documenten, hoogwaardig schrijfwerk, agents buiten M365. Niet als vervanging, als aanvulling.

**"Wat is een agent eigenlijk?"**
Een agent is AI die meerdere stappen zelfstandig doet in plaats van één vraag-antwoord. Voorbeeld: "lees deze inkomende mail van een donateur, zoek of die vaker heeft gegeven in ons CRM, schrijf een persoonlijk antwoord, en plaats het als concept in Outlook". Drie stappen, één opdracht.

**"Hoe zit het met Power Automate?"**
Dat is de Microsoft-workflow-tool. Hier zet je flows op (als A gebeurt, doe dan B en C) met AI als stap. Logische eerste stap voor MAF omdat het al inbegrepen zit. Voor meer flexibiliteit kijk je naar n8n (open source, technischer) of Make (visueel, makkelijker).

**"Wat is MCP?"**
Een nieuwe standaard (Anthropic, inmiddels ook OpenAI en Google) waarmee een AI rechtstreeks aan systemen wordt gekoppeld. Vergelijk met een USB-C-poort voor AI: één aansluiting, oneindig veel apparaten. Voor Digital Innovation interessant; voor de andere teams gewoon weten dat het bestaat.

---

## Eén-zin samenvattingen die je in een sessie kunt gebruiken

- **Copilot:** "AI in de tools die jullie al kennen, sterk in M365, beperkt daarbuiten."
- **ChatGPT:** "De creatieve schrijfpartner, sterk in toon en eigen GPTs, los van M365."
- **Claude:** "De zware denker en schrijver, sterk in lange documenten en agents buiten M365."
- **Teams Premium:** "AI specifiek voor vergaderingen, niet hetzelfde als Copilot."
- **Power Automate / n8n / Make:** "De lijm tussen tools, AI is daarin een stap geworden."
- **MCP:** "De stekker waarmee een AI-agent rechtstreeks aan systemen kan."
