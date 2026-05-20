# Workflow-visualisatie: Marketing en Digital Innovation

Drie diagrammen om op groot scherm te tonen tijdens de sessie. Eerst de huidige situatie. Vraag het team of het klopt. Daarna de met-agent situatie als contrast. Tot slot, als de tijd het toelaat, de uitbreiding met het publicatie-pakket via de maf-design skill.

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
  A[Nieuw donateurverhaal] --> B[Medewerker leest]
  B --> C[Schrijft LinkedIn-post]
  B --> D[Schrijft nieuwsbrief-intro]
  B --> E[Schrijft Instagram-caption]
  C --> F[Eindredactie op toon]
  D --> F
  E --> F
  G[Apart traject: foto zoeken of stockfoto kopen] --> H[Foto bewerken en bijsnijden]
  H --> F
  F --> I[Plaatsing per kanaal]

  classDef legacy fill:#f4f4f4,stroke:#747678,color:#393535
  classDef pain stroke:#d01d20,stroke-dasharray:5 5,color:#393535,fill:#ffffff
  class A,B,C,D,E,F,I legacy
  class G,H pain
```

Vraag aan het team: herken je dit? Hoeveel tijd zit hier in een gemiddeld verhaal?

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
  A[Donateurverhaal] --> B[content-pipeline agent]
  C[Brand-voice en eerdere posts] --> B
  M[MAF visual-style en logo] --> B
  B --> P[3 platform-posts]
  B --> O[MAF-stijl afbeelding]
  P --> H[brand-voice-check agent]
  H --> J[Medewerker reviewt en plaatst]
  O --> J

  classDef sgtitle fill:transparent,stroke:transparent,color:#002f5f,font-weight:bold,font-size:14px
  classDef input fill:#f4f4f4,stroke:#747678,color:#393535
  classDef agent fill:#002f5f,stroke:#002f5f,color:#ffffff
  classDef output fill:#ffffff,stroke:#002f5f,color:#002f5f
  classDef finale fill:#d01d20,stroke:#d01d20,color:#ffffff
  class A,C,M input
  class B,H agent
  class P,O output
  class J finale
```

Wat verandert: één invoer, drie tekstposts plus passende afbeelding, plus toon-controle. Medewerker doet review en publicatie. Inhoudelijk werk blijft mens. Herhaalwerk verdwijnt.

> Bij de live demo maakt de agent drie aparte bestanden (LinkedIn, nieuwsbrief, Instagram) plus een PNG. Het diagram vat dat samen als "3 platform-posts" plus "MAF-stijl afbeelding" om leesbaar te blijven op groot scherm.

## Met publicatie-pakket erbij

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
  P[3 platform-posts] --> Q[publicatie-pakket agent]
  O[MAF-stijl afbeelding] --> Q
  S[maf-design skill: tokens, logo, preview-patterns] --> Q
  Q --> L[Landingspagina HTML]
  Q --> N[Nieuwsbrief HTML]
  Q --> C[Social card HTML 1080x1080]
  L --> R[Medewerker reviewt in browser]
  N --> R
  C --> R

  classDef sgtitle fill:transparent,stroke:transparent,color:#002f5f,font-weight:bold,font-size:14px
  classDef input fill:#f4f4f4,stroke:#747678,color:#393535
  classDef agent fill:#002f5f,stroke:#002f5f,color:#ffffff
  classDef output fill:#ffffff,stroke:#002f5f,color:#002f5f
  classDef finale fill:#d01d20,stroke:#d01d20,color:#ffffff
  class P,O,S input
  class Q agent
  class L,N,C output
  class R finale
```

Wat er bij komt: dezelfde drie tekstposts en dezelfde afbeelding gaan door een tweede agent die met de maf-design skill drie publicatie-klare HTML-artefacten maakt. Geen ontwerper, geen CMS-werk vooraf, alles in MAF-huisstijl. De medewerker reviewt en publiceert. Voor MAF is dit het bewijs van schaal: een verhaal genereert een complete brand-consistente uitgavenset, en deze laatste stap valt later weg achter een knop in productie.

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
    A1[input-folder fictief verhaal] --> B1[content-pipeline agent]
    B1 --> C1["output-folder 3 posts plus 1 afbeelding"]
  end

  subgraph productie [" "]
    direction TB
    t_productie["In productie bij MAF"]:::sgtitle
    t_productie -.- A2
    A2[SharePoint-folder echte donateurverhalen] --> B2[zelfde agent via MCP]
    B2 --> C2[Direct als concept in publishing-tool of Outlook]
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

Hetzelfde agent-script. Andere aansluiting. Dat is de stap van pakket A (Quick Wins Sprint) naar pakket B (Workflow Implementation).
