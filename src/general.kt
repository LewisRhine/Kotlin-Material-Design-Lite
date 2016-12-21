import components.MdlComponent
import org.w3c.dom.Element
import kotlin.browser.document

//todo clean this code up
fun materialIcon(iconName: String) = kotlin.browser.document.createElement("i").apply {
    setAttribute("class", "material-icons")
    append(kotlin.browser.document.createTextNode(iconName))
}

inline fun Element.header(classId: String ="", init: org.w3c.dom.Element.()->Unit) : org.w3c.dom.Element {
    val header = kotlin.browser.document.createElement("header").apply { this classType classId }
    header.init()
    this.append(header)
    return header
}

inline fun Element.img(classId: String = "", init: Img.() -> Unit): Element {
    val img = Img(classId)
    img.init()
    this.append(img.mainElement)
    return img.mainElement
}

inline fun img(classId: String = "", init: Img.() -> Unit): Element {
    val img = Img(classId)
    img.init()
    return img.mainElement
}

inline fun Element.div(classId: String = "", init: Element.() -> Unit): Element {
    val div = document.createElement("div").apply { this classType classId }
    div.init()
    this.append(div)
    return div
}

inline fun Element.b(init: Element.() -> Unit) : Element {
    val b = document.createElement("b")
    b.init()
    this.append(b)
    return b
}

inline fun Element.h2(classId: String = "", init: Element.() -> Unit) : Element {
    val h2 = document.createElement("h2").apply { this classType classId }
    h2.init()
    this.append(h2)
    return h2
}

inline fun Element.span(classId: String = "", init: Element.() -> Unit): Element {
    val span = document.createElement("span").apply { this classType classId }
    span.init()
    this.append(span)
    return span
}

inline fun span(classId: String = "", init: Element.() -> Unit): Element {
    val span = document.createElement("span").apply { this classType classId }
    span.init()
    return span
}


infix fun Element.style(style: String) {
    this.setAttribute("style", style)
}

class Img(cssClassId: String = "") : MdlComponent("img", cssClassId) {
    var src: String by htmlPram()
    var width: Int by htmlPram()
    var height: Int by htmlPram()
    var border:Int by htmlPram()
    var alt: String by htmlPram()
}


operator fun Element.plus(element: Element) {
    this.append(element)
}

infix fun Element.classType(className: String) {
    this.setAttribute("class", className)
}
