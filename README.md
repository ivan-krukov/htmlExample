# Silly example

This is a simplistic example of building an interactive HTML table from a matrix with `HTMLWidgets`.

# Description

This is a purposely simple example that shows the logic behind building an interactive table.

The scaffold of the project was generated with:

```
htmlwidgets::scaffoldWidget('exampleWidget')
```

# Files

| Description  | Location                              |
| ------------ | ------------------------------------- |
| `js` source  | `inst/htmlwidgets/exampleWidget.js`   |
| `css` styles | `inst/htmlwidgetsl/tableStyle.js`     |
| config file  | `inst/htmlwidgets/exampleWidget.yaml` |
| `R` bindings | `R/exampleWidget.R`                   |


# Usage

```
library(htmlExample)
exampleWidget(matrix(c(1,0,0,0,1,0,0,0,1), nrow = 3))
```

This will bring up a hover-able table that shows the index and value of the table cells.

The suggested running environemnt is `RStudio`.
