package components

import div
import h2
import org.w3c.dom.Element

fun Element.card(cssClassId: String = "", shadow: Card.Shadow = Card.Shadow.DP2, init: Card.() -> Unit): Element {
    val card = Card(cssClassId, shadow)
    card.init()
    this.append(card.mainElement)
    return card.mainElement
}

//todo add actions and media
class Card(cssClassId: String = "", shadow: Shadow = Card.Shadow.DP2) : MdlComponent("div", "mdl-card $shadow", cssClassId) {
    enum class Shadow {
        DP2 {
            override fun toString(): String = "mdl-shadow--2dp"
        },
        DP3 {
            override fun toString(): String = "mdl-shadow--3dp"
        },
        DP4 {
            override fun toString(): String = "mdl-shadow--4dp"
        },
        DP6 {
            override fun toString(): String = "mdl-shadow--6dp"
        },
        DP8 {
            override fun toString(): String = "mdl-shadow--8dp"
        },
        DP16 {
            override fun toString(): String = "mdl-shadow--16dp"
        }
    }

    fun size(width: Int = -1, height: Int = -1) {
        mainElement.setAttribute("style", "width: ${width}px; height: ${height}px;")
    }

    var title = ""
        set(value) {
            mainElement.div("mdl-card__title") { h2("mdl-card__title-text") { textContent = value } }
        }

    var supportingText = ""
        set(value) {
            mainElement.div("mdl-card__supporting-text") { textContent = value }
        }

}
