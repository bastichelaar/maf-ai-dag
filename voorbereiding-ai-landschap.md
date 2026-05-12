# Voorbereiding: het AI-landschap voor de MAF-dag

Werkdocument voor Bas en Rik. Doel: genoeg context om geloofwaardig het verschil te kunnen uitleggen tussen wat MAF nu heeft (Copilot) en wat er daarboven zit.

---

## Het landschap in één zin

Microsoft Copilot is diep verweven met de M365-omgeving. Claude is sterker in redeneren, schrijven en code, en flexibeler buiten het Microsoft-ecosysteem. Workflow-tools (Power Automate, n8n, Make) verbinden beide werelden met de rest van hun systemen. MCP is de laag die een AI-model rechtstreeks aan externe tools en data koppelt.

---

## Microsoft Copilot

### Wat het is
Copilot is geen losse AI maar een verzameling van AI-functies ingebouwd in de M365-apps die MAF al gebruikt: Word, Excel, Outlook, Teams, SharePoint, OneDrive. Het model achter Copilot is GPT-4o (OpenAI), maar er zijn plekken in Copilot Studio waar je inmiddels ook Claude-modellen kunt kiezen.

### Wat Copilot goed kan
- Tekst samenvatten, herschrijven en opstellen in Word, Outlook, Teams
- Formules uitleggen en data analyseren in Excel
- Vergaderingen samenvatten en actiepunten extraheren in Teams
- Zoeken door de hele M365-omgeving (SharePoint, mails, documenten) via Microsoft Graph
- Eenvoudige agents bouwen in Copilot Studio op basis van SharePoint-kennisbanken
- Power Automate-flows maken via natuurlijke taal

### Wat Copilot niet goed kan
- Werken buiten het Microsoft-ecosysteem (externe tools, databases, APIs koppelen)
- Complexe redeneerketens over meerdere stappen uitvoeren
- Geavanceerde code schrijven of reviewen
- Agents bouwen die echt autonoom meerdere stappen doorlopen
- Data van buiten M365 meenemen zonder handmatige integratie

### Prijs
Copilot M365 kost $30 per gebruiker per maand bovenop de bestaande M365-licentie. Veel organisaties betalen dit al maar gebruiken het nauwelijks.

---

## Claude (Anthropic)

### De drie smaken
Claude bestaat in drie vormen die sterk van elkaar verschillen:

**Claude.ai (chat-interface)**
De gewone webomgeving, vergelijkbaar met hoe MAF Copilot Chat gebruikt. Beschikbaar als gratis, Pro ($20/maand) en Teams-versie. Hier kun je documenten uploaden, lange teksten analyseren, content schrijven. Sterker dan Copilot in redeneren en schrijven, maar geen automatische toegang tot M365-bestanden.

**Claude for Enterprise / via API**
Organisatie-versie met hogere limieten, privacy-garanties en de mogelijkheid om Claude in eigen systemen te integreren. Hier kun je Claude Projects opzetten met eigen instructies, documenten en tone-of-voice als vaste context. Prijs: $60+ per gebruiker per maand.

**Claude Code (CLI voor developers)**
Dit is waar jullie sterk in zijn. Een command-line tool die Claude direct verbindt aan een codebase, terminalcommando's kan uitvoeren, bestanden kan lezen en schrijven, en via MCP externe tools kan aanroepen. Niet relevant voor de meeste MAF-teams, maar voor Digital Innovation zeer interessant om te laten zien.

### Waar Claude sterker is dan Copilot
- Langere context (200.000 tokens): hele documenten, rapporten, datasets in één keer meegeven
- Dieper redeneren: stappenplannen, analyse van tegenstrijdige informatie, nuancering
- Betere schrijfkwaliteit: toon, structuur, argumentatie
- Code schrijven en reviewen
- Flexibel buiten Microsoft-stack
- MCP-support voor eigen tool-koppelingen
- Sneller itereren op prompts en agents

### Waar Copilot sterker is dan Claude
- Directe toegang tot alles in M365: geen extra setup, werkt vanuit Word/Outlook/Teams
- Zoeken door de hele organisatie via Microsoft Graph
- Governance en security al geregeld binnen M365-beleid van MAF
- Drempel voor gewone medewerkers lager: zit in de tools die ze al kennen

### Interessante convergentie
Microsoft gebruikt inmiddels Claude-modellen (Opus 4.5) op bepaalde plekken in Copilot, waaronder de Excel Agent Mode en de Researcher-agent in M365. Het "Copilot vs Claude"-verhaal is dus niet zwart-wit maar meer: dezelfde motor, andere carrosserie en andere integratie.

---

## Alternatieven

### ChatGPT / GPT-4o (OpenAI)
Vergelijkbaar met Claude in de chatinterface. ChatGPT heeft ook een Teams-integratie en custom GPTs. Voor MAF waarschijnlijk geen meerwaarde naast Copilot (zit al op GPT-4o). Vermeld het voor volledigheid maar adviseer het niet als eerste stap.

### Gemini (Google)
Google's antwoord op Copilot: diep geïntegreerd in Google Workspace (Docs, Sheets, Gmail). Niet relevant voor MAF die al op M365 zit.

### Perplexity
Zoekgericht AI, nuttig voor research en up-to-date informatie. Geen workflow-mogelijkheden. Eventueel te noemen als aanvulling voor het donateurs- of marketingteam dat veel research doet.

### Conclusie voor MAF
Voor nu: Copilot blijft hun dagelijkse tool. Claude is het goede alternatief voor diepere taken en als brug naar meer geavanceerde workflows. De rest is niet relevant tenzij specifieke behoeften dat vragen.

---

## Workflow automatisering

### Het principe
Workflow-tools verbinden apps met elkaar op basis van triggers en acties: "als X gebeurt, doe dan Y en daarna Z." AI is nu een stap in die keten geworden: je kunt een AI-model aanroepen als onderdeel van een flow.

### Power Automate (Microsoft)
Al inbegrepen in M365. De logische eerste stap voor MAF.

**Wat het kan:** flows bouwen die M365-apps verbinden (mail → SharePoint → Teams → Excel), met een Copilot/AI-stap erin. Bv: bij een inkomende mail van een donateur automatisch een samenvatting genereren en in het CRM zetten.

**Sterktes:** geen extra kosten, governance al geregeld, werkt naadloos met de rest van M365.

**Beperkingen:** beperkt buiten Microsoft-ecosysteem, complexe flows worden snel rommelig, AI-stappen zijn nog redelijk basaal.

**Leercurve:** gemiddeld. Niet voor iedereen, maar iemand van Digital Innovation kan dit in een dag leren.

### n8n
Open source, self-hostable workflow-tool. Dit is de optie voor teams die meer controle willen en wat technischer zijn.

**Wat het kan:** 400+ app-integraties, Claude en andere AI-modellen als stap inbouwen, complexe vertakkende logica, eigen code uitvoeren als stap. Sterkste AI-integratie van alle workflow-tools (bijna 70 AI-specifieke nodes).

**Sterktes:** geen kosten per uitvoering (bij self-hosting), volledige datacontrole, meest flexibel voor geavanceerde use cases.

**Beperkingen:** vereist iemand die het opzet en onderhoudt. Niet voor niet-technische teams.

**Leercurve:** hoog. Iets voor Digital Innovation als ze het zelf willen hosten.

### Make (voorheen Integromat)
Visuele workflow-builder, zit tussen Power Automate en n8n in.

**Wat het kan:** 1.500+ integraties, visuele scenario-builder met routers en iterators, AI-stappen inbouwen. Goede balans tussen kracht en gebruiksgemak.

**Prijs:** gratis tier beschikbaar, betaald vanaf ca. $9/maand.

**Leercurve:** gemiddeld. Toegankelijker dan n8n, krachtiger dan Zapier.

### Zapier
Meest gebruiksvriendelijk van de vier. 7.000+ integraties, eenvoudige "trigger-actie" flows.

**Wat het kan:** snel simpele workflows opzetten zonder technische kennis. AI Actions ingebouwd voor eenvoudige AI-stappen.

**Prijs:** duurder dan Make voor complexere flows ($20-100/maand afhankelijk van gebruik).

**Leercurve:** laag. Iedereen kan ermee aan de slag.

### Wat te adviseren aan MAF

| Scenario | Tool |
|----------|------|
| Eerste stap, binnen M365 blijven | Power Automate |
| Iets krachtiger, non-technisch team | Make of Zapier |
| Volledige controle, technisch team | n8n |
| Complexe agents met Claude | n8n + Claude API of Claude Code + MCP |

Voor de dag: noem Power Automate als de logische eerste stap voor alle teams, en n8n als de optie voor Digital Innovation als ze verder willen.

---

## MCP: Model Context Protocol

### Wat het is
MCP is een open standaard van Anthropic (inmiddels ook ondersteund door OpenAI en Google) die een AI-model verbindt aan externe tools en databronnen. Vergelijk het met een USB-C poort voor AI: één standaard aansluiting, oneindig veel apparaten.

Zonder MCP: je plakt tekst in een chatvenster en de AI antwoordt.
Met MCP: de AI kan zelf bestanden lezen, databases doorzoeken, API-calls doen en acties uitvoeren in externe systemen, terwijl jij gewoon een vraag stelt.

### Hoe het werkt
Je draait een MCP-server naast je AI-tool. Die server biedt tools aan ("lees dit bestand", "zoek in deze database", "stuur dit bericht"). De AI roept die tools aan wanneer dat nodig is om een vraag te beantwoorden of een taak uit te voeren.

Claude Code heeft dit ingebouwd. Vanuit de terminal kun je MCP-servers aanzetten en Claude kan dan rechtstreeks met die systemen werken.

### Beschikbare MCP-servers (relevante voorbeelden)

**Productiviteit en samenwerking**
- Microsoft SharePoint / OneDrive: bestanden lezen en doorzoeken
- Outlook / Exchange: mails lezen, samenvatten, opstellen
- Slack: berichten lezen, sturen, kanalen doorzoeken
- Google Drive / Docs: documenten lezen en bewerken

**Data en databases**
- PostgreSQL, MySQL, SQLite: queries uitvoeren op databases
- Excel / CSV: data inlezen en analyseren

**Ontwikkeltools**
- GitHub: code lezen, issues bekijken, pull requests
- Filesystem: lokale bestanden lezen en schrijven

**Overig**
- Fetch: willekeurige websites en APIs aanroepen
- Memory: persistente geheugenopslag voor de AI
- Stripe, Notion, Airtable, en 200+ andere tools via community-servers

### Wat dit betekent voor MAF
Zonder MCP: medewerker kopieert tekst uit SharePoint, plakt in Claude, kopieert antwoord terug.
Met MCP: Claude leest zelf het SharePoint-document, analyseert het, en schrijft het antwoord direct terug naar het systeem.

Dit is precies het verhaal voor Digital Innovation: hier breek je uit de chat-modus en ga je naar een agent die zelfstandig werkt.

### Copilot en MCP
Copilot werkt via Microsoft Graph en Power Platform-connectors, niet via MCP. Functioneel vergelijkbaar voor M365-bronnen, maar geslotener: je kunt alleen koppelen wat Microsoft toestaat. MCP is open: iedereen kan een server schrijven voor elk systeem.

---

## Samenvatting: de boodschap voor de dag

| | Copilot | Claude | n8n / Power Automate | MCP |
|--|---------|--------|----------------------|-----|
| **Wat** | AI in M365-apps | Sterker in denken en schrijven | Workflows automatiseren | AI koppelen aan tools |
| **Voor wie** | Elke medewerker | Iedereen die diepere taken heeft | Digital Innovation, enthousiaste users | Digital Innovation |
| **Instapdrempel** | Laag (zit al in M365) | Laag (browser, gratis tier) | Gemiddeld tot hoog | Hoog |
| **Kosten** | Al betaald (of $30/user) | Gratis tot $20/maand | Gratis tot $100/maand | Gratis (open source) |
| **Kracht** | Integratie M365 | Kwaliteit en flexibiliteit | Automatisering | Verbinding met alles |

**De kernboodschap voor de dag:** Copilot en Claude zijn geen concurrenten maar complementair. Copilot is de handige collega in je bekende tools. Claude is de specialist die je inschakelt voor moeilijker werk. Workflow-tools zijn de lijm die alles aan elkaar verbindt. En MCP is hoe je een agent bouwt die zelfstandig door die hele keten heen werkt.
