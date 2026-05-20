# Tools-setup voor de demo's

Korte instructies voor Bas: hoe je een AGENT-*.md inlaadt in elk van de drie omgevingen.

## In Claude Code (primaire demo-omgeving)

De agent-bestanden in deze repo zijn geschreven als Claude Code subagent-definities. Zo gebruik je ze:

**Optie 1: agent als slash-command instructie**
1. `cd demos/XX-cluster/` in je terminal
2. Start Claude Code in die map
3. Open de relevante `AGENT-*.md` als referentie
4. Begin je sessie met: "lees AGENT-content-pipeline.md en gedraag je als die agent vanaf nu"

**Optie 2: registreren als subagent in .claude/agents/**
Voor elk cluster kun je de AGENT-*.md kopieren naar `~/.claude/agents/` of `demos/XX-cluster/.claude/agents/`, dan is hij oproepbaar via de Agent-tool. Maar voor de demo van vandaag werkt optie 1 sneller en zichtbaarder.

## In Claude.ai (Project)

Voor wie de agent na de dag wil naspelen:

1. Open Claude.ai en maak een nieuw Project
2. Plak de inhoud van `AGENT-*.md` (alles na de YAML-header) in het Project-instructies-veld
3. Upload de input-bestanden uit `demos/XX-cluster/input/` als Project-kennis
4. Start een gesprek met dezelfde prompt als in DEMO-DRAAIBOEK

De agent zal in Claude.ai bestanden niet kunnen schrijven, maar wel alle outputs in het gesprek tonen. Voor MAF-medewerkers die zelf willen experimenteren is dit de meest toegankelijke weg.

## In ChatGPT (Custom GPT)

Voor het Marketing-cluster waar ChatGPT Plus al in gebruik is:

1. Open chatgpt.com, ga naar "Verken GPTs" -> "Maken"
2. Plak de inhoud van `AGENT-*.md` in het instructies-veld
3. Voeg de bestanden uit `input/` toe als kennisbron
4. Geef de GPT een naam (bv. "MAF Content Pipeline")

De GPT kan geen lokale bestanden schrijven, maar wel structureel werken volgens de agent-definitie. Goede manier voor marketing om de agent in ChatGPT-vorm te ervaren.

## Voor cluster 1: GEMINI_API_KEY

De afbeelding-skill in cluster 1 vereist een Google Gemini API-key. Check vooraf:

```bash
echo $GEMINI_API_KEY
```

Als leeg: zet 'm in je shell-profile of in een `.env`-file. Zonder key valt de demo terug op een placeholder en uitleg "dit zou de gegenereerde afbeelding zijn".

Installatie van Python-afhankelijkheden:

```bash
pip install google-genai pillow
```

Test het script eerst stand-alone voordat je de demo doet:

```bash
cd demos/01-marketing-di
python scripts/generate_image.py --brand maf --subject "small aircraft over remote mountain village in soft morning light" --format social --output output/images/test.png
```

## Bij twijfel: render Mermaid in Claude.ai

Als VSCode of Obsidian niet voorhanden is, kun je elke `WORKFLOW.md` in een Claude.ai-chat plakken. Claude rendert de Mermaid-diagrammen direct. Werkt op elk apparaat met browser.
