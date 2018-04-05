package components

import classType
import div
import h2
import org.w3c.dom.Element
import org.w3c.dom.events.Event
import org.w3c.dom.get
import kotlin.browser.document
import kotlin.dom.appendElement
import kotlin.dom.createElement

external val dialogPolyfill: dynamic

fun Element.dialog(cssClassId: String = "", init: Dialog.() -> Unit): Element {
    val dialog = Dialog(cssClassId)
    dialog.init()
    return dialog.mainElement
}

/**
 * Horrendous hack because <dialog> is not supported on most browsers
 */
class Dialog(cssClassId: String = "") {
    companion object {
        var isADialogAlreadyOpen = false
    }

    val mainElement: Element

    init {
        mainElement = document.createElement("dialog") { this classType ("$cssClassId backdrop mdl-dialog") }

        dialogPolyfill.registerDialog(mainElement)
        open()
    }

    var title = ""
        set(value) {
            mainElement.h2("mdl-dialog__title") { textContent = value }
        }

    var content = ""
        set(value) {
            mainElement.div("mdl-dialog__content") { appendElement("p") { textContent = value } }
        }

    var buttonOne: Button? = null
        set(value) {
            if(value != null) {
                mainElement.appendElement("a") {
                    classType("mdl-button mdl-js-button mdl-js-ripple-effect ${value.color}")
                    textContent = value.text.toUpperCase()
                    mainElement.addEventListener("click",  { _: Event ->
                        value.onClick(this)
                        if(value.shouldClose) {
                            close()
                        }
                    })
                }
            } else {
                mainElement.getElementsByClassName("mdl-button")[0]?.remove()
            }
        }

    private fun open() {
        if(!isADialogAlreadyOpen) {
            isADialogAlreadyOpen = true

            document.getElementsByTagName("body")[0]?.append(mainElement)

            val mainElementInsecure: dynamic = mainElement
            mainElementInsecure.showModal()
        }
    }

    private fun close() {
        val mainElementInsecure: dynamic = mainElement
        mainElementInsecure.close()

        mainElement.remove()

        isADialogAlreadyOpen = false
    }

    data class Button(val text: String, val shouldClose: Boolean, val color: String, val onClick: Element.() -> Unit = {})
}