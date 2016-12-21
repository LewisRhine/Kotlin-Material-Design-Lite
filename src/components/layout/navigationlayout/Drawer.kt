package components.layout.navigationlayout

import components.MdlComponent
import components.layout.LayoutTile
import components.layout.navigationlayout.LayoutNav
import org.w3c.dom.Element
import kotlin.browser.document
import kotlin.properties.Delegates

class Drawer(cssClassId: String = "") : MdlComponent("div", "mdl-layout__drawer", cssClassId), LayoutNav, LayoutTile
