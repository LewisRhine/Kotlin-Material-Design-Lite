package components

import org.w3c.dom.Element


fun Element.chip(cssClassId: String = "", contact: Boolean = false, init: Chip.() -> Unit): Element {
    val chip = Chip(cssClassId, contact)
    chip.init()
    chip.mainElement.setAttribute("style", "margin-right:5px;")
    this.append(chip.mainElement)
    return chip.mainElement
}

class Chip(cssClassId: String = "", contact: Boolean = false) :
        MdlComponent("span", "mdl-chip ${if (contact) "mdl-chip--contact" else ""}", cssClassId) {

    internal class ChipText() : MdlComponent("span", "mdl-chip__text")
    internal class ContactImage() : MdlComponent("img", "mdl-chip__contact")

    private val img by appendToMainIf(contact, ContactImage())
    private val span by appendToMain(ChipText())

    var text: String by htmlTextPram("", span.mainElement)
    var src: String by htmlPram(img.mainElement)
}