package components

import classType
import org.w3c.dom.Element
import plus
import span
import kotlin.browser.document

inline fun Element.list(cssClassId: String = "", init: List.() -> Unit) : Element {
    val list = List(cssClassId)
    list.init()
    this + list.mainElement
    return list.mainElement
}

class List(cssClassId: String = "") : MdlComponent("ul", "mdl-list", cssClassId) {
    fun item(listIem: ListIem) {
        mainElement + document.createElement("li").apply {
            this classType "mdl-list__item mdl-list__item--three-line"
            span("mdl-list__item-text-body") { textContent = listIem.primaryText }
        }
    }
}

data class ListIem(val primaryText: String)