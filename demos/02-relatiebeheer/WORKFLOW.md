# Workflow-visualisatie: Relatiebeheer

Twee diagrammen om op groot scherm te tonen tijdens de sessie. Eerst de huidige situatie, dan met-agent.

## Huidige situatie

```mermaid
%%{init: {'theme':'base', 'themeVariables': {
  'primaryColor': '#002f5f',
  'primaryTextColor': '#ffffff',
  'primaryBorderColor': '#002f5f',
  'lineColor': '#393535',
  'secondaryColor': '#f4f4f4',
  'tertiaryColor': '#ffffff',
  'fontFamily': 'sans-serif'
}, 'flowchart': {
  'subGraphTitleMargin': {'top': 30, 'bottom': 60},
  'padding': 30,
  'nodeSpacing': 80,
  'rankSpacing': 100,
  'diagramPadding': 30,
  'titleTopMargin': 30
}}}%%
flowchart LR
  A[Gesprek met donateur of relatie] --> B[Notities op papier of in hoofd]
  B --> C[Verslag tikken indien tijd]
  C --> D[CRM bijwerken als je eraan denkt]
  C --> E[Follow-up mail schrijven vaak uitgesteld]
  C --> F[Acties in eigen agenda]
  G[Tijdsdruk] -.- D
  G -.- E
  G -.- F
  H["Resultaat: follow-ups blijven liggen en CRM raakt verouderd"] -.- F

  classDef legacy fill:#f4f4f4,stroke:#747678,color:#393535
  classDef pain stroke:#d01d20,stroke-dasharray:5 5,color:#393535,fill:#ffffff
  class A,B,C,D,E,F legacy
  class G,H pain
```

Vraag aan het team: hoeveel gesprekken zijn de afgelopen maand zo niet helemaal afgerond?

## Met agent

```mermaid
%%{init: {'theme':'base', 'themeVariables': {
  'primaryColor': '#002f5f',
  'primaryTextColor': '#ffffff',
  'primaryBorderColor': '#002f5f',
  'lineColor': '#393535',
  'secondaryColor': '#f4f4f4',
  'tertiaryColor': '#ffffff',
  'fontFamily': 'sans-serif'
}, 'flowchart': {
  'subGraphTitleMargin': {'top': 30, 'bottom': 60},
  'padding': 30,
  'nodeSpacing': 80,
  'rankSpacing': 100,
  'diagramPadding': 30,
  'titleTopMargin': 30
}}}%%
flowchart LR
  A[Gespreksverslag als tekst of audio] --> B[gesprek-naar-flow agent]
  B --> C[Actiepunten met deadlines]
  B --> D[CRM-notitie 5 regels]
  B --> E[Concept follow-up mail in MAF-toon]
  B --> F[Openstaande vragen voor volgend gesprek]
  C --> G[Medewerker reviewt en verstuurt]
  D --> G
  E --> G

  H[CRM-extract.csv 30 relaties] --> I[aandachts-radar agent]
  J[Historische contacten] --> I
  I --> K[Top 5 relaties met concept-bericht elke maandagochtend]
  K --> L[Medewerker kiest wie ze deze week belt]

  classDef sgtitle fill:transparent,stroke:transparent,color:#002f5f,font-weight:bold,font-size:14px
  classDef input fill:#f4f4f4,stroke:#747678,color:#393535
  classDef agent fill:#002f5f,stroke:#002f5f,color:#ffffff
  classDef output fill:#ffffff,stroke:#002f5f,color:#002f5f
  classDef finale fill:#d01d20,stroke:#d01d20,color:#ffffff
  class A,H,J input
  class B,I agent
  class C,D,E,F,K output
  class G,L finale
```

Wat verandert: alles wat in de huidige situatie kan blijven liggen, krijgt nu een concept-uitvoer die de medewerker alleen nog hoeft te reviewen. De aandachts-radar is een tweede agent die proactief signaleert wie aandacht verdient.

## Brug naar productie

```mermaid
%%{init: {'theme':'base', 'themeVariables': {
  'primaryColor': '#002f5f',
  'primaryTextColor': '#ffffff',
  'primaryBorderColor': '#002f5f',
  'lineColor': '#393535',
  'secondaryColor': '#f4f4f4',
  'tertiaryColor': '#ffffff',
  'fontFamily': 'sans-serif'
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
    A1[input-folder verslag of CSV] --> B1[gesprek-naar-flow of aandachts-radar]
    B1 --> C1[output-folder concepten]
  end

  subgraph productie [" "]
    direction TB
    t_productie["In productie bij MAF"]:::sgtitle
    t_productie -.- A2
    A2[Outlook-mail of Teams-vergadering] --> B2[zelfde agent via MCP]
    M[CRM database] --> B2
    B2 --> C2["Concepten direct in CRM, Outlook en Teams"]
  end

  classDef sgtitle fill:transparent,stroke:transparent,color:#002f5f,font-weight:bold,font-size:14px
  classDef input fill:#f4f4f4,stroke:#747678,color:#393535
  classDef agent fill:#002f5f,stroke:#002f5f,color:#ffffff
  classDef output fill:#ffffff,stroke:#002f5f,color:#002f5f
  class A1,A2,M input
  class B1,B2 agent
  class C1,C2 output
  style demo fill:#fafafa,stroke:#747678,color:#393535
  style productie fill:#ffffff,stroke:#002f5f,color:#002f5f
```

In productie zit het CRM aangesloten (via MCP-connector of API), en wordt elke maandag automatisch een top-5 aangeleverd in de Teams-chat van de relatiebeheerder. Dezelfde agent, andere aansluiting.
