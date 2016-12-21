import components.layout.navigationlayout.Layout
import components.layout.navigationlayout.MdlContent
import kotlin.browser.document

fun mdlApp(init: MdlApp.() -> Unit): MdlApp {
    val app = MdlApp()
    app.init()
    return app
}

class MdlApp() {
    private val app = document.getElementById("MdlApp")

    init {
        requireNotNull(app) { "No MldApp Element found!" }
    }

    fun navigationLayout(content: MdlContent, cssClass: String = "", init: Layout.() -> Unit) {
        val nl = Layout(content, cssClass)
        nl.init()
        nl.mainElement.append(nl.content.content.mainElement)
        app?.append(nl.mainElement)
    }
}
