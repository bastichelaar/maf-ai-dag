# Workflow-visualisatie: Evenementen

Twee diagrammen voor op groot scherm.

## Huidige situatie

```mermaid
%%{init: {'theme':'base', 'themeVariables': {
  'primaryColor': '#002f5f',
  'primaryTextColor': '#ffffff',
  'primaryBorderColor': '#002f5f',
  'lineColor': '#393535',
  'secondaryColor': '#f4f4f4',
  'tertiaryColor': '#ffffff',
  'fontFamily': 'sans-serif',
  'fontSize': '24px'
}, 'flowchart': {
  'subGraphTitleMargin': {'top': 30, 'bottom': 60},
  'padding': 30,
  'nodeSpacing': 80,
  'rankSpacing': 100,
  'diagramPadding': 30,
  'titleTopMargin': 30
}}}%%
flowchart LR
  A[Evenement plannen] --> B[Draaiboek vanaf scratch of oud bestand]
  B --> C[Uitnodiging schrijven]
  B --> D[Herinnering schrijven]
  B --> E[Bedankmail schrijven]
  B --> F[Evaluatieformulier maken]
  C --> G["Versturen en regelen"]
  D --> G
  E --> G
  F --> G
  G --> H["Na evenement 15 evaluaties"]
  H --> I[Met de hand lezen als er tijd is]
  I --> J[Verbeterpunten vaak niet teruggekoppeld naar draaiboek]

  classDef legacy fill:#f4f4f4,stroke:#747678,color:#393535
  classDef pain stroke:#d01d20,stroke-dasharray:5 5,color:#393535,fill:#ffffff
  class A,B,C,D,E,F,G,H legacy
  class I,J pain
```

Vraag het team: welke fase van een evenement kost de meeste tijd? Wat blijft het vaakst liggen?

## Met agent

```mermaid
%%{init: {'theme':'base', 'themeVariables': {
  'primaryColor': '#002f5f',
  'primaryTextColor': '#ffffff',
  'primaryBorderColor': '#002f5f',
  'lineColor': '#393535',
  'secondaryColor': '#f4f4f4',
  'tertiaryColor': '#ffffff',
  'fontFamily': 'sans-serif',
  'fontSize': '24px'
}, 'flowchart': {
  'subGraphTitleMargin': {'top': 30, 'bottom': 60},
  'padding': 30,
  'nodeSpacing': 80,
  'rankSpacing': 100,
  'diagramPadding': 30,
  'titleTopMargin': 30
}}}%%
flowchart LR
  A["Evenement-basis titel, datum, doelgroep"] --> B[evenement-pakket agent]
  C[Oud draaiboek als referentie] --> B
  B --> D[Uitnodiging-mail]
  B --> E[Herinnering-mail]
  B --> F[Bedank-mail]
  B --> G[Draaiboek-template met checklists]
  B --> H[Evaluatieformulier]

  I[15 evaluaties] --> J[evaluaties-verwerker agent]
  J --> K[Wat ging goed]
  J --> L[Wat kan beter]
  J --> M[Lessen voor volgend jaar]
  M --> N[Direct in draaiboek volgende editie]

  classDef sgtitle fill:transparent,stroke:transparent,color:#002f5f,font-weight:bold,font-size:14px
  classDef input fill:#f4f4f4,stroke:#747678,color:#393535
  classDef agent fill:#002f5f,stroke:#002f5f,color:#ffffff
  classDef output fill:#ffffff,stroke:#002f5f,color:#002f5f
  classDef finale fill:#d01d20,stroke:#d01d20,color:#ffffff
  class A,C,I input
  class B,J agent
  class D,E,F,G,H,K,L,M output
  class N finale
```

## Brug naar productie

```mermaid
%%{init: {'theme':'base', 'themeVariables': {
  'primaryColor': '#002f5f',
  'primaryTextColor': '#ffffff',
  'primaryBorderColor': '#002f5f',
  'lineColor': '#393535',
  'secondaryColor': '#f4f4f4',
  'tertiaryColor': '#ffffff',
  'fontFamily': 'sans-serif',
  'fontSize': '24px'
}, 'flowchart': {
  'subGraphTitleMargin': {'top': 30, 'bottom': 60},
  'padding': 30,
  'nodeSpacing': 80,
  'rankSpacing': 100,
  'diagramPadding': 30,
  'titleTopMargin': 30
}}}%%
flowchart LR
  subgraph demo [" "]
    direction TB
    t_demo["Demo op laptop"]:::sgtitle
    t_demo -.- A1
    A1[input-folder fictieve data] --> B1[evenement-pakket of evaluaties-verwerker]
    B1 --> C1[output-folder concepten]
  end

  subgraph productie [" "]
    direction TB
    t_productie["In productie bij MAF"]:::sgtitle
    t_productie -.- A2
    A2["Aanmeldsysteem Outlook en SharePoint"] --> B2[zelfde agent via MCP]
    B2 --> C2[Direct in publishing-tool en draaiboek-template]
  end

  classDef sgtitle fill:transparent,stroke:transparent,color:#002f5f,font-weight:bold,font-size:14px
  classDef input fill:#f4f4f4,stroke:#747678,color:#393535
  classDef agent fill:#002f5f,stroke:#002f5f,color:#ffffff
  classDef output fill:#ffffff,stroke:#002f5f,color:#002f5f
  class A1,A2 input
  class B1,B2 agent
  class C1,C2 output
  style demo fill:#fafafa,stroke:#747678,color:#393535
  style productie fill:#ffffff,stroke:#002f5f,color:#002f5f
```

In productie zit het aanmeldsysteem aangesloten, en wordt het volledige communicatiepakket automatisch klaargezet zodra een nieuw evenement in de agenda komt. Evaluaties worden automatisch verwerkt en op een verbeterlijst gezet.
