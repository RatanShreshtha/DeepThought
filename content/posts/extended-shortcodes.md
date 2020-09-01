+++
title = "Extended Shortcodes"
description = "Few more shortcodes provided by Deep Thought."
date = 2020-08-29

[taxonomies]
categories = ["Documentation"]
tags = ["theme", "zola"]

[extra]
toc = true
comment = true
+++

Deep Thought theme provides multiple shortcodes on top of built-in ones in Zola.

<!-- more -->

# Quote

To put a quote in your post use the below snippet
**Code**

```markdown
{%/* quote(author="Winston Churchill") */%}
Success is not final, failure is not fatal: it is the courage to continue that counts.
{%/* end */%}
```

**Output**

{% quote(author="Winston Churchill") %}
Success is not final, failure is not fatal: it is the courage to continue that counts.
{% end %}

# Mermaid

[mermaid](https://mermaidjs.github.io/) is a library helping you to generate diagram and flowcharts from text, in a similar manner as Markdown.

## Flowchart

To put a flowchart in your post use below snippet
**Code**

```
{%/* mermaid() */%}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
{%/* end */%}
```

**Output**
{% mermaid() %}
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
{% end %}

## Sequence Diagram

To put a sequence diagram in your post use below snippet
**Code**

```
{%/* mermaid() */%}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
{%/* end */%}
```

**Output**
{% mermaid() %}
sequenceDiagram
participant Alice
participant Bob
Alice->>John: Hello John, how are you?
loop Healthcheck
John->>John: Fight against hypochondria
end
Note right of John: Rational thoughts <br/>prevail!
John-->>Alice: Great!
John->>Bob: How about you?
Bob-->>John: Jolly good!
{% end %}

## Gantt diagram

To put a gantt diagram in your post use below snippet
**Code**

```
{%/* mermaid() */%}
gantt
dateFormat YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task :done, des1, 2014-01-06,2014-01-08
Active task :active, des2, 2014-01-09, 3d
Future task : des3, after des2, 5d
Future task2 : des4, after des3, 5d
{%/* end */%}
```

**Output**

{% mermaid() %}
gantt
dateFormat YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task :done, des1, 2014-01-06,2014-01-08
Active task :active, des2, 2014-01-09, 3d
Future task : des3, after des2, 5d
Future task2 : des4, after des3, 5d
{% end %}

## Class diagram - exclamation experimental
To put a class diagram in your post use below snippet
**Code**

```
{%/* mermaid() */%}
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 _-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --_ C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
{%/* end */%}
```

**Output**
{% mermaid() %}
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 _-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --_ C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
{% end %}

## Git graph - exclamation experimental
To put a git graph in your post use below snippet
**Code**

```
{%/* mermaid() */%}
gitGraph:
options
{
"nodeSpacing": 150,
"nodeRadius": 10
}
end
commit
branch newbranch
checkout newbranch
commit
commit
checkout master
commit
commit
merge newbranch
{%/* end */%}
```

**Output**
{% mermaid() %}
gitGraph:
options
{
"nodeSpacing": 150,
"nodeRadius": 10
}
end
commit
branch newbranch
checkout newbranch
commit
commit
checkout master
commit
commit
merge newbranch
{% end %}

## Entity Relationship Diagram - exclamation experimental
To put an ER diagram in your post use below snippet
**Code**

```
{%/* mermaid() */%}
erDiagram
CUSTOMER ||--o{ ORDER : places
ORDER ||--|{ LINE-ITEM : contains
CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
{%/* end */%}
```

**Output**
{% mermaid() %}
erDiagram
CUSTOMER ||--o{ ORDER : places
ORDER ||--|{ LINE-ITEM : contains
CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
{% end %}

## User Journey Diagram
To put an user journey diagram in your post use below snippet
**Code**

```
{%/* mermaid() */%}
journey
title My working day
section Go to work
Make tea: 5: Me
Go upstairs: 3: Me
Do work: 1: Me, Cat
section Go home
Go downstairs: 5: Me
Sit down: 5: Me
{%/* end */%}
```

**Output**
{% mermaid () %}
journey
title My working day
section Go to work
Make tea: 5: Me
Go upstairs: 3: Me
Do work: 1: Me, Cat
section Go home
Go downstairs: 5: Me
Sit down: 5: Me
{% end %}

# Mapbox

[Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js) is a JavaScript library that uses WebGL to render interactive maps from vector tiles and Mapbox styles.

**Code**
```
{{/* mapbox(lng=73.856255, lat=18.516726, zoom=8) */}}
```
**Output**
{{ mapbox(lng=73.856255, lat=18.516726, zoom=8) }}

# Chart

[Chart.js](https://www.chartjs.org/) is simple yet flexible JavaScript charting for designers & developers

**Code**
```markdown
{%/* chart() */%}
{
"type": "bar",
"data": {
"labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
"datasets": [{
"label": "# of Votes",
"data": [12, 19, 3, 5, 8, 3],
"backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
"borderColor": ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
"borderWidth": 1
}]
}
}
{%/* end */%}
```

**Output**
{% chart() %}
{
"type": "bar",
"data": {
"labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
"datasets": [{
"label": "# of Votes",
"data": [12, 19, 3, 5, 8, 3],
"backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
"borderColor": ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
"borderWidth": 1
}]
}
}
{% end %}
