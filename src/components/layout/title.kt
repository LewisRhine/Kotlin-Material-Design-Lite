package components.layout

import components.MdlComponent
import components.layout.navigationlayout.Nav
import org.w3c.dom.Element

interface LayoutTile {
    val mainElement: Element

    fun layoutTile(cssClassId: String = "", init: LayoutTitle.() -> Unit) : Element {
        val layoutTitle = LayoutTitle(cssClassId)
        layoutTitle.init()
        mainElement.append(layoutTitle.mainElement)
        return layoutTitle.mainElement
    }
}

class LayoutTitle(cssClassId: String = "") : MdlComponent("span", "mdl-layout-title", cssClassId) {
    var title by htmlTextPram("")
}