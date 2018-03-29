package components

import classType
import div
import h2
import img
import org.w3c.dom.Element
import org.w3c.dom.get
import kotlin.browser.document
import kotlin.dom.appendElement
import kotlin.dom.removeClass

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

    var button: Button? = null
        set(value) {
            if(value != null) {
                mainElement.appendElement("a") {
                    classType("mdl-button mdl-js-button mdl-js-ripple-effect ${value.color}")
                    textContent = value.text
                }
            } else {
                mainElement.getElementsByClassName("mdl-button")[0]?.remove()
            }
        }

    var image: Image? = null
        set(value) {
            if(value != null) {
                mainElement.div("mdl-card__media") { img("card_helper") {
                    src = value.url
                    alt = value.alt
                } }
            } else {
                mainElement.getElementsByClassName("mdl-card__media")[0]?.remove()
            }
        }

    var title = ""
        set(value) {
            mainElement.div("mdl-card__title") { h2("mdl-card__title-text") { textContent = value } }
        }

    var supportingText = ""
        set(value) {
            mainElement.div("mdl-card__supporting-text") { textContent = value }
        }

    data class Image(val url: String, val alt: String = "")

    data class Button(val text: String, val color: String)

}
