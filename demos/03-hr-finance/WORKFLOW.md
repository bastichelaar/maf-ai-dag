# Workflow-visualisatie: HR en Financien

Per sub-team een eigen huidige situatie en met-agent diagram. Toon op groot scherm bij de start van de sessie, kies in de mining-fase welke je verder uitwerkt. Primair vandaag: HR-mail-stroom (op basis van Thamar's intake).

## HR-huidige situatie: mail-stroom

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
  A[Inkomende mail Outlook] --> B[HR-medewerker leest en classificeert in hoofd]
  B --> C[Zoekt eerdere reactie als toon-referentie]
  B --> D[Checkt handboek bij regelvraag]
  C --> E[Schrijft concept]
  D --> E
  E --> F[Herziet, persoonlijk maken, verzendt]
  G[Tijd-optelling per week, vooral Erna, Arjen en Martine] -.- E

  classDef legacy fill:#f4f4f4,stroke:#747678,color:#393535
  classDef pain stroke:#d01d20,stroke-dasharray:5 5,color:#393535,fill:#ffffff
  class A,B,C,D,E,F legacy
  class G pain
```

Vraag aan het team: herken je dit, hoeveel mails per week vallen onder dit patroon?

## HR met agent: mail-stroom

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
  A[Inkomende mail in input/] --> B[mail-reactie agent]
  T[MAF-HR-toon] --> B
  H[Handboek-fragment] --> B
  B --> C[Type-detectie: sollicitatie, thuisfront, veld of intern]
  C --> D[Concept-antwoord in juiste toon]
  C --> E[Notitie met check-punten voor medewerker]
  D --> F[HR reviewt, personaliseert, verzendt]
  E --> F

  classDef input fill:#f4f4f4,stroke:#747678,color:#393535
  classDef agent fill:#002f5f,stroke:#002f5f,color:#ffffff
  classDef output fill:#ffffff,stroke:#002f5f,color:#002f5f
  classDef finale fill:#d01d20,stroke:#d01d20,color:#ffffff
  class A,T,H input
  class B,C agent
  class D,E output
  class F finale
```

Wat verandert: de agent leest de toon-richtlijn en het handboek elke keer opnieuw, kalibreert het concept op het juiste type, en levert daarnaast een notitie waarin hij zelf benoemt wat de medewerker nog moet checken. Mens reviewt en verzendt, oordeel blijft bij mens.

## HR-huidige situatie: onboarding

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
  A[Contract getekend] --> B[Welkomstmail uit oud sjabloon]
  A --> C[Checklist samenstellen vaak handmatig]
  A --> D[Documenten verzamelen]
  A --> E[Gesprekvragen voorbereiden]
  B --> F[Sturen voor startdatum]
  C --> F
  D --> F
  E --> F
  G[Inconsistentie tussen medewerkers] -.- B

  classDef legacy fill:#f4f4f4,stroke:#747678,color:#393535
  classDef pain stroke:#d01d20,stroke-dasharray:5 5,color:#393535,fill:#ffffff
  class A,B,C,D,E,F legacy
  class G pain
```

## HR met agent: onboarding

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
  A[Functieprofiel en startdatum] --> B[onboarding-pakket agent]
  C[MAF-handboek] --> B
  B --> D[Welkomstmail]
  B --> E[Week 1 checklist]
  B --> F[3 gesprekvragen voor 90 dagen]
  B --> G[Documenten-leeslijst]
  D --> H[HR reviewt en verzendt]

  classDef sgtitle fill:transparent,stroke:transparent,color:#002f5f,font-weight:bold,font-size:14px
  classDef input fill:#f4f4f4,stroke:#747678,color:#393535
  classDef agent fill:#002f5f,stroke:#002f5f,color:#ffffff
  classDef output fill:#ffffff,stroke:#002f5f,color:#002f5f
  classDef finale fill:#d01d20,stroke:#d01d20,color:#ffffff
  class A,C input
  class B agent
  class D,E,F,G output
  class H finale
```

## Finance-huidige situatie: maandrapportage

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
  A[Cijfers in Excel] --> B[Posten vergelijken met vorige maand]
  B --> C[Afwijkingen handmatig vinden]
  C --> D[Tekst schrijven voor rapportage]
  D --> E[Kopieren naar Word-template]
  E --> F[Rapport delen met directie]
  G[2 a 3 uur werk elke maand] -.- C
  G -.- D

  classDef legacy fill:#f4f4f4,stroke:#747678,color:#393535
  classDef pain stroke:#d01d20,stroke-dasharray:5 5,color:#393535,fill:#ffffff
  class A,B,C,D,E,F legacy
  class G pain
```

## Finance met agent: maandrapportage

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
  A[Maandcijfers CSV] --> B[rapport-helper agent]
  B --> C[Top-3 afwijkingen met percentages]
  B --> D[Samenvattende alinea in rapport-toon]
  B --> E[Mogelijke verklaringen met informatie-vraag]
  C --> F[Finance reviewt en publiceert]
  D --> F
  E --> F

  classDef sgtitle fill:transparent,stroke:transparent,color:#002f5f,font-weight:bold,font-size:14px
  classDef input fill:#f4f4f4,stroke:#747678,color:#393535
  classDef agent fill:#002f5f,stroke:#002f5f,color:#ffffff
  classDef output fill:#ffffff,stroke:#002f5f,color:#002f5f
  classDef finale fill:#d01d20,stroke:#d01d20,color:#ffffff
  class A input
  class B agent
  class C,D,E output
  class F finale
```

## Brug naar productie (HR en Finance gecombineerd)

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
    A1[input-folder fictieve data] --> B1[onboarding of rapport-helper]
    B1 --> C1[output-folder concepten]
  end

  subgraph productie [" "]
    direction TB
    t_productie["In productie bij MAF"]:::sgtitle
    t_productie -.- A2
    A2["AFAS, Exact of SharePoint"] --> B2[zelfde agent via MCP]
    B2 --> C2["Direct in Word-rapport Outlook-concept of Teams"]
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

In productie zit het agent-script aangesloten op het HR-systeem of de finance-applicatie, en wordt de output direct als concept in de juiste tool geplaatst.
