+++
title = "Extended Components"
description = "Few more components provided by DeepThought."
date = 2020-08-29

[taxonomies]
categories = ["Documentation"]
tags = ["theme", "zola"]

[extra]
toc = true
comments = true
+++

DeepThought theme provides multiple components that you can use directly in your content.
Please, have a look at the [Config Options](/docs/config-options#external-libraries)
that explain how to enable them.

<!-- more -->

# Mermaid

[Mermaid](https://mermaidjs.github.io/) is a library helping you to generate diagram and flowcharts from text, in a similar manner as Markdown.

## Flowchart

To put a flowchart in your post use below snippet

**Code**

```
{% raw %}{% <mermaid> %}{% endraw %}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
{% raw %}{% </mermaid> %}{% endraw %}
```

**Output**
{% <mermaid> %}
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
{% </mermaid> %}

## Sequence Diagram

To put a sequence diagram in your post use below snippet

**Code**

```
{% raw %}{% <mermaid> %}{% endraw %}
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
{% raw %}{% </mermaid> %}{% endraw %}
```

**Output**
{% <mermaid> %}
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
{% </mermaid> %}

## Gantt diagram

To put a gantt diagram in your post use below snippet

**Code**

```
{% raw %}{% <mermaid> %}{% endraw %}
gantt
  dateFormat YYYY-MM-DD
  title Adding GANTT diagram to mermaid
  excludes weekdays 2014-01-10

  section A section
  Completed task :done, des1, 2014-01-06,2014-01-08
  Active task :active, des2, 2014-01-09, 3d
  Future task : des3, after des2, 5d
  Future task2 : des4, after des3, 5d
{% raw %}{% </mermaid> %}{% endraw %}
```

**Output**

{% <mermaid> %}
gantt
  dateFormat YYYY-MM-DD
  title Adding GANTT diagram to mermaid
  excludes weekdays 2014-01-10

  section A section
  Completed task :done, des1, 2014-01-06,2014-01-08
  Active task :active, des2, 2014-01-09, 3d
  Future task : des3, after des2, 5d
  Future task2 : des4, after des3, 5d
{% </mermaid> %}

## Class diagram - experimental

To put a class diagram in your post use below snippet

**Code**

```
{% raw %}{% <mermaid> %}{% endraw %}
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
{% raw %}{% </mermaid> %}{% endraw %}
```

**Output**
{% <mermaid> %}
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
{% </mermaid> %}

## Entity Relationship Diagram - experimental

To put an ER diagram in your post use below snippet
**Code**

```
{% raw %}{% <mermaid> %}{% endraw %}
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
{% raw %}{% </mermaid> %}{% endraw %}
```

**Output**
{% <mermaid> %}
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
{% </mermaid> %}

## User Journey Diagram

To put an user journey diagram in your post use below snippet
**Code**

```
{% raw %}{% <mermaid> %}{% endraw %}
  journey
  title My working day
  section Go to work
  Make tea: 5: Me
  Go upstairs: 3: Me
  Do work: 1: Me, Cat
  section Go home
  Go downstairs: 5: Me
  Sit down: 5: Me
{% raw %}{% </mermaid> %}{% endraw %}
```

**Output**
{% <mermaid> %}
journey
  title My working day
  section Go to work
  Make tea: 5: Me
  Go upstairs: 3: Me
  Do work: 1: Me, Cat
  section Go home
  Go downstairs: 5: Me
  Sit down: 5: Me
{% </mermaid> %}

# Mapbox

[Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js) is a JavaScript library that uses WebGL to render interactive maps from vector tiles and Mapbox styles.

**Code**

```
{% raw %}{% <mapbox zoom={6}> %}{% endraw %}
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [78.016667, 27.183333]
      },
      "properties": {
        "title": "Agra",
        "description": "Agra is a major tourist destination because of its many Mughal-era buildings, most notably the Taj Mahal, Agra Fort and Fatehpur Sikri, all of which are UNESCO World Heritage Sites."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [77.2, 28.6]
      },
      "properties": {
        "title": "New Delhi",
        "description": "New Delhi is the capital of India and an administrative district of NCT Delhi."
      }
    }
  ]
}
{% raw %}{% </mapbox> %}{% endraw %}
```

**Output**
{% <mapbox zoom={6}> %}
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [78.016667, 27.183333]
      },
      "properties": {
        "title": "Agra",
        "description": "Agra is a major tourist destination because of its many Mughal-era buildings, most notably the Taj Mahal, Agra Fort and Fatehpur Sikri, all of which are UNESCO World Heritage Sites."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [77.2, 28.6]
      },
      "properties": {
        "title": "New Delhi",
        "description": "New Delhi is the capital of India and an administrative district of NCT Delhi."
      }
    }
  ]
}
{% </mapbox> %}

# Chart

[Chart.xkcd](https://timqian.com/chart.xkcd/) is a chart library plots “sketchy”, “cartoony” or “hand-drawn” styled charts.

## Line chart

Line chart displays series of data points in the form of lines. It can be used to show trend data, or comparison of different data sets.

**Code**

```
{% raw %}{% <chart> %}{% endraw %}
{
  "type": "Line",
  "title": "Monthly income of an indie developer",
  "xLabel": "Month",
  "yLabel": "$ Dollars",
  "data": {
    "labels": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    "datasets": [
      {
        "label": "Plan",
        "data": [30, 70, 200, 300, 500, 800, 1500, 2900, 5000, 8000]
      },
      {
        "label": "Reality",
        "data": [0, 1, 30, 70, 80, 100, 50, 80, 40, 150]
      }
    ]
  }
}
{% raw %}{% </chart> %}{% endraw %}
```

**Output**

{% <chart> %}
{
  "type": "Line",
  "title": "Monthly income of an indie developer",
  "xLabel": "Month",
  "yLabel": "$ Dollars",
  "data": {
    "labels": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    "datasets": [
      {
        "label": "Plan",
        "data": [30, 70, 200, 300, 500, 800, 1500, 2900, 5000, 8000]
      },
      {
        "label": "Reality",
        "data": [0, 1, 30, 70, 80, 100, 50, 80, 40, 150]
      }
    ]
  }
}
{% </chart> %}


## XY chart

XY chart is used to plot points by specifying their XY coordinates.

**Code**

```
{% raw %}{% <chart> %}{% endraw %}
{
  "type": "XY",
  "title": "Pokemon farms",
  "xLabel": "Coordinate",
  "yLabel": "Count",
  "data": {
    "datasets": [
      {
        "label": "Pikachu",
        "data": [
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 4,
            "y": 122
          },
          {
            "x": 10,
            "y": 100
          }
        ]
      },
      {
        "label": "Squirtle",
        "data": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 3,
            "y": 3
          }
        ]
      },
      {
        "label": "Charizard",
        "data": [
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 6,
            "y": 8
          }
        ]
      }
    ]
  },
  "options": {
    "xTickCount": 5,
    "yTickCount": 5,
    "showLine": false,
    "dotSize": 1
  }
}
{% raw %}{% </chart> %}{% endraw %}
```

**Output**

{% <chart> %}
{
  "type": "XY",
  "title": "Pokemon farms",
  "xLabel": "Coordinate",
  "yLabel": "Count",
  "data": {
    "datasets": [
      {
        "label": "Pikachu",
        "data": [
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 4,
            "y": 122
          },
          {
            "x": 10,
            "y": 100
          }
        ]
      },
      {
        "label": "Squirtle",
        "data": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 3,
            "y": 3
          }
        ]
      },
      {
        "label": "Charizard",
        "data": [
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 6,
            "y": 8
          }
        ]
      }
    ]
  },
  "options": {
    "xTickCount": 5,
    "yTickCount": 5,
    "showLine": false,
    "dotSize": 1
  }
}
{% </chart> %}



## Bar chart

A bar chart provides a way of showing data values represented as vertical bars

**Code**

```
{% raw %}{% <chart> %}{% endraw %}
{
  "type": "Bar",
  "title": "How to feel powerful ?",
  "xLabel": "Platforms",
  "yLabel": "Count",
  "data": {
    "labels": ["Earn Money", "Get Famous", "Use terminal in front of non-programmers"],
    "datasets": [
      {
        "data": [30, 45, 100]
      }
    ]
  },
  "options": {
    "yTickCount": 2,
    "dataColors": ["Red", "Green", "Blue"]
  }
}
{% raw %}{% </chart> %}{% endraw %}
```

**Output**

{% <chart> %}
{
  "type": "Bar",
  "title": "How to feel powerful ?",
  "xLabel": "Platforms",
  "yLabel": "Count",
  "data": {
    "labels": ["Earn Money", "Get Famous", "Use terminal in front of non-programmers"],
    "datasets": [
      {
        "data": [30, 45, 100]
      }
    ]
  },
  "options": {
    "yTickCount": 2,
    "dataColors": ["Red", "Green", "Blue"]
  }
}
{% </chart> %}



## Stacked bar chart

A stacked bar chart provides a way of showing data values represented as vertical bars

**Code**

```
{% raw %}{% <chart> %}{% endraw %}
{
  "type": "StackedBar",
  "title": "Issues and PR Submissions",
  "xLabel": "Month",
  "yLabel": "Count",
  "data": {
    "labels": ["Jan", "Feb", "Mar", "April", "May"],
    "datasets": [
      {
        "label": "Issues",
        "data": [12, 19, 11, 29, 17]
      },
      {
        "label": "PRs",
        "data": [3, 5, 2, 4, 1]
      },
      {
        "label": "Merges",
        "data": [2, 3, 0, 1, 1]
      }
    ]
  }
}
{% raw %}{% </chart> %}{% endraw %}
```

**Output**

{% <chart> %}
{
  "type": "StackedBar",
  "title": "Issues and PR Submissions",
  "xLabel": "Month",
  "yLabel": "Count",
  "data": {
    "labels": ["Jan", "Feb", "Mar", "April", "May"],
    "datasets": [
      {
        "label": "Issues",
        "data": [12, 19, 11, 29, 17]
      },
      {
        "label": "PRs",
        "data": [3, 5, 2, 4, 1]
      },
      {
        "label": "Merges",
        "data": [2, 3, 0, 1, 1]
      }
    ]
  }
}
{% </chart> %}



## Pie/Doughnut chart

A pie/doughnut chart provides a way of illustrating numerical proportion.

**Code**

```
{% raw %}{% <chart> %}{% endraw %}
{
  "type": "Pie",
  "title": "What Tim is made of",
  "data": {
    "labels": ["a", "b", "e", "f", "g"],
    "datasets": [
      {
        "data": [500, 200, 80, 90, 100]
      }
    ]
  }
}
{% raw %}{% </chart> %}{% endraw %}
```

**Output**

{% <chart> %}
{
  "type": "Pie",
  "title": "What Tim is made of",
  "data": {
    "labels": ["a", "b", "e", "f", "g"],
    "datasets": [
      {
        "data": [500, 200, 80, 90, 100]
      }
    ]
  }
}
{% </chart> %}

## Radar chart

A radar chart provides a way of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.

**Code**

```
{% raw %}{% <chart> %}{% endraw %}
{
  "type": "Radar",
  "title": "Letters in random words",
  "data": {
    "labels": ["c", "h", "a", "r", "t"],
    "datasets": [
      {
        "label": "ccharrrt",
        "data": [2, 1, 1, 3, 1]
      },
      {
        "label": "chhaart",
        "data": [1, 2, 2, 1, 1]
      }
    ]
  },
  "options": {
    "showLegend": true,
    "showLabels": true
  }
}
{% raw %}{% </chart> %}{% endraw %}
```

**Output**

{% <chart> %}
{
  "type": "Radar",
  "title": "Letters in random words",
  "data": {
    "labels": ["c", "h", "a", "r", "t"],
    "datasets": [
      {
        "label": "ccharrrt",
        "data": [2, 1, 1, 3, 1]
      },
      {
        "label": "chhaart",
        "data": [1, 2, 2, 1, 1]
      }
    ]
  },
  "options": {
    "showLegend": true,
    "showLabels": true
  }
}
{% </chart> %}

# Galleria

[Galleria](https://galleriajs.github.io/) is a framework that simplifies the process of creating beautiful image galleries for the web and mobile devices.

**Code**

```
{% raw %}{% <galleria> %}{% endraw %}
{
  "images": [
    {
      "src": "alexandre-dinaut-GHxr3O6yZ1c-unsplash.jpg",
      "title": "Clouds & Mountains",
      "description": "Just hanging out with each other."
    },
    {
      "src": "chandler-cruttenden-YYemke7BfuE-unsplash.jpg",
      "title": "Crop",
      "description": "Waiting for the harvest."
    },
    {
      "src": "jung-ho-park-7aZtpsyaWVM-unsplash.jpg",
      "title": "The Fog",
      "description": "Engulfing everything."
    },
    {
      "src": "kitera-dent-BIj4LObC6es-unsplash.jpg",
      "title": "Just Plants",
      "description": "Backdrop of ocean."
    },
    {
      "src": "koes-nadi-XkUFF1nnbA8-unsplash.jpg",
      "title": "Whoa",
      "description": "Something to look at."
    },
    {
      "src": "lazyartistgallery-HHaIRbgzcGw-unsplash.jpg",
      "title": "Let's Chill",
      "description": "Three birds just chilling !!"
    },
    {
      "src": "saira-nUxdL_19OQw-unsplash.jpg",
      "title": "Canyon",
      "description": "Might of nature."
    },
    {
      "src": "waldemar-brandt-2hAEHCt25eM-unsplash.jpg",
      "title": "Evening",
      "description": "Time to wind down."
    }
  ]
}
{% raw %}{% </galleria> %}{% endraw %}
```

**Output**

{% <galleria> %}
{
  "images": [
    {
      "src": "alexandre-dinaut-GHxr3O6yZ1c-unsplash.jpg",
      "title": "Clouds & Mountains",
      "description": "Just hanging out with each other."
    },
    {
      "src": "chandler-cruttenden-YYemke7BfuE-unsplash.jpg",
      "title": "Crop",
      "description": "Waiting for the harvest."
    },
    {
      "src": "jung-ho-park-7aZtpsyaWVM-unsplash.jpg",
      "title": "The Fog",
      "description": "Engulfing everything."
    },
    {
      "src": "kitera-dent-BIj4LObC6es-unsplash.jpg",
      "title": "Just Plants",
      "description": "Backdrop of ocean."
    },
    {
      "src": "koes-nadi-XkUFF1nnbA8-unsplash.jpg",
      "title": "Whoa",
      "description": "Something to look at."
    },
    {
      "src": "lazyartistgallery-HHaIRbgzcGw-unsplash.jpg",
      "title": "Let's Chill",
      "description": "Three birds just chilling !!"
    },
    {
      "src": "saira-nUxdL_19OQw-unsplash.jpg",
      "title": "Canyon",
      "description": "Might of nature."
    },
    {
      "src": "waldemar-brandt-2hAEHCt25eM-unsplash.jpg",
      "title": "Evening",
      "description": "Time to wind down."
    }
  ]
}
{% </galleria> %}

# KaTeX
[KaTeX](https://katex.org/) is a math typesetting library based on TeX.

**Code**

```
{% raw %}{% <katex block={true}> %}{% endraw %}
\KaTeX
{% raw %}{% </katex> %}{% endraw %}
```

**Output**

{% <katex block={true}> %}
\KaTeX
{% </katex> %}

**Photo By:**
- [ALEXANDRE DINAUT](https://unsplash.com/@alexdinaut?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@alexdinaut?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
- [Chandler Cruttenden](https://unsplash.com/@chanphoto?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@chanphoto?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
- [Jung Ho Park](https://unsplash.com/@mylovefromjesus?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@mylovefromjesus?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
- [Kitera Dent](https://unsplash.com/@kitera?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@kitera?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
- [Koes nadi](https://unsplash.com/@bangkoes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@bangkoes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
- [Lazyartistgallery](https://unsplash.com/@rahulp9800?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@rahulp9800?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
- [Saira](https://unsplash.com/@sairaa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@sairaa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
- [Waldemar Brandt](https://unsplash.com/@waldemarbrandt67w?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@waldemarbrandt67w?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
