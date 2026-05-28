# Demo's voor de MAF AI-dag 20 mei

> **Alle voorbeelddata in deze demos is verzonnen.** Persoonsnamen, organisatie-namen, plaatsnamen, financiele cijfers, mailinhoud en relatie-historie zijn opgesteld als demo-materiaal voor de AI-inspiratiedag op 20 mei 2026. Overeenkomsten met werkelijke MAF-medewerkers, donateurs, partners of situaties berusten op toeval. Per cluster staat een korte toelichting in de bijbehorende `input/README.md`.

Vier werkende demo-pakketten, één per cluster. Elk pakket bevat een of twee gespecialiseerde Claude Code agents, een Mermaid-workflow voor op groot scherm, een live-demo-draaiboek, en fictieve MAF-voorbeelddata. Cluster 1 heeft daarnaast een afbeeldings-skill die een MAF-brand-image genereert via Google Gemini, plus een optionele uitbreiding met de `maf-design` skill (op repo-root in `.claude/skills/maf-design/`) die uit de content drie publicatie-klare HTML-artefacten maakt: landingspagina, e-mail-nieuwsbrief en social card.

## Lees eerst

- [`00-overzicht-concepten.md`](00-overzicht-concepten.md) — Eén A4 met de begrippen chat, skill, workflow, agent en MCP voor MAF-publiek. Gebruik dit als opener voor elke sessie.
- [`00-tools-setup.md`](00-tools-setup.md) — Hoe je een AGENT-*.md inlaadt in Claude Code, plakt in een Claude.ai Project, of vertaalt naar een ChatGPT Custom GPT.

## Clusters

| Map | Cluster | Hoofd-demo |
|-----|---------|------------|
| [`01-marketing-di/`](01-marketing-di/) | Marketing en Digital Innovation | Content-pipeline: donateurverhaal naar 3 platformteksten plus social-afbeelding in MAF-stijl, optioneel doorgezet naar publicatie-pakket (landing, e-mail, social card) via maf-design skill |
| [`02-relatiebeheer/`](02-relatiebeheer/) | Relatiebeheer en donateurs | Gespreksverslag naar 4 outputs plus wekelijkse aandachts-radar |
| [`03-hr-finance/`](03-hr-finance/) | HR en Financien | Mail-reactie agent (sollicitatie, thuisfront, veld) als primaire demo, plus onboarding-pakket en finance rapport-helper als secundaire opties |
| [`04-evenementen/`](04-evenementen/) | Evenementen | Evenement-communicatiepakket plus evaluaties-verwerker |

## Voor elke demo geldt

1. `cd demos/XX-cluster/` voordat je Claude Code opent. De agents gebruiken relatieve paden (`input/`, `output/`, `brands/`).
2. Open `WORKFLOW.md` in VSCode of Obsidian voor de Mermaid-visualisatie. Toon de huidige situatie eerst, dan de met-agent situatie, daarna pas de live demo.
3. Volg `DEMO-DRAAIBOEK.md` voor de exacte commando's en wat je tijdens de demo zegt.
4. Output verschijnt live in `output/`. Open de gegenereerde bestanden op groot scherm.

## Vereisten

- Claude Code op je laptop, ingelogd
- Voor cluster 1 (afbeeldings-skill): `GEMINI_API_KEY` als omgevingsvariabele, Python met `google-genai` en `pillow`. Zonder API-key valt de demo terug op tekst-only met placeholder; uitleg in cluster 1 draaiboek.
- Markdown-viewer met Mermaid-support (VSCode + extensie, Obsidian, of GitHub web). Bij twijfel: render in Claude.ai door de markdown in een chat te plakken.

## Productie versus demo

De demo's draaien op fictieve MAF-data in `input/`-folders. In productie zou diezelfde agent op SharePoint, CRM, mail en Teams aansluiten via MCP. Per draaiboek staat aangegeven welk MCP-koppelpunt waarde toevoegt, zodat de brug naar pakket B (Workflow Implementation) of pakket C (AI Center of Excellence) intuïtief is.

## Skelet-folders

Elke cluster-folder heeft een `skelet-voor-eigen-data/` map met lege templates. MAF-medewerkers die het na de dag met echte (geanonimiseerde) data willen proberen, kunnen daar hun bestanden in zetten en dezelfde agent aanroepen.
