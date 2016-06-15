#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
exampleWidget <- function(x, width = NULL, height = NULL) {

  stopifnot(is.matrix(x))
  # create widget
  htmlwidgets::createWidget(
    name = 'exampleWidget',
    x,
    width = width,
    height = height,
    package = 'htmlExample'
  )
}

