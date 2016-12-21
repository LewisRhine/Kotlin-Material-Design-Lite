package components.layout

import classType
import components.*
import org.w3c.dom.Element
import kotlin.browser.document

fun Element.grid(cssClassId: String = "", init: Grid.() -> Unit): Element {
    val grid = Grid(cssClassId)
    grid.init()
    this.append(grid.mainElement)
    return grid.mainElement
}

class Grid(cssClassId: String = "") : MdlComponent("div", "mdl-grid", cssClassId) {
    fun cell(col: Int, cssClassId: String = "", init: Element.() -> Unit) {
        require(col < 13) { "column number $col too high mdl-cell column range is 1 to 12" }
        val div = document.createElement("div").apply { this classType "$cssClassId mdl-cell mdl-cell--$col-col" }
        div.init()
        mainElement.append(div)
    }

    fun cellCard(col: Int, cssClassId: String = "", shadow: Card.Shadow = Card.Shadow.DP2, init: Card.() -> Unit) {
        require(col < 13) { "column number $col too high mdl-cell column range is 1 to 12" }
        val card = Card("$cssClassId mdl-cell mdl-cell--$col-col", shadow)
        card.init()
        mainElement.append(card.mainElement)
    }
}


