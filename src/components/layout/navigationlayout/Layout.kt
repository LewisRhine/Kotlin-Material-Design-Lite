package components.layout.navigationlayout

import components.MdlComponent
import components.layout.navigationlayout.Header
import components.layout.navigationlayout.Drawer
import components.layout.navigationlayout.MdlContent
import org.w3c.dom.Element

class Layout(content: MdlContent, cssClassId: String = "") : MdlComponent("div", "mdl-layout mdl-js-layout", cssClassId) {

    var content: MdlContent = content
        set(value) {
            field.content.mainElement.replaceWith(value.content.mainElement)
            field = value
            header?.let { it.title = field.content.title }
        }

    var header: Header? = null

    fun header(cssClassId: String = "", fixed: Boolean = true, transparent: Boolean = false, init: Header.() -> Unit) {
        val header = Header(cssClassId, transparent = transparent)
        header.init()
        if (fixed) mainElement.setAttribute("class", mainElement.getAttribute("class")?.plus(" mdl-layout--fixed-header")!!)
        header.title = content.content.title
        mainElement.append(header.mainElement)
        this.header = header
    }

    fun drawer(cssClass: String = "", fixed: Boolean = true, init: Drawer.() -> Unit) {
        val drawer = Drawer(cssClass)
        drawer.init()
        if (fixed) mainElement.setAttribute("class", mainElement.getAttribute("class")?.plus(" mdl-layout--fixed-drawer")!!)
        mainElement.append(drawer.mainElement)
    }
}