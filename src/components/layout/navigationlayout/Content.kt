package components.layout.navigationlayout

import components.MdlComponent
import org.w3c.dom.Element

fun content(title: String, cssClassId: String = "", body: Element.() -> Unit)  = Content(title, cssClassId, body)

class Content(val title: String, cssClassId: String = "", body: Element.() -> Unit) : MdlComponent("div", "mdl-layout__content", cssClassId) {
    init {
        mainElement.body()
    }
}

interface MdlContent {
    val content: Content
}



