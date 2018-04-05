package site.pages.forumspage

import components.ListIem
import components.layout.Grid
import components.layout.grid
import components.layout.navigationlayout.Content
import components.layout.navigationlayout.MdlContent
import components.layout.navigationlayout.content
import components.list
import header
import mdlApp
import site.Color

object Forums : MdlContent {
    fun createPage() {
        val mdlApp = mdlApp {
            navigationLayout(Forums, "layout") {
                header(Color.primary) {
                }
                drawer("drawer") {
                    mainElement.header("drawer-header") {
                        setAttribute("style", " background: url('images/whoiam.jpg') center / cover; padding: 10px;")
                    }

                    nav("navigation") {
                        link { text = "Foros"; materialIcons = "forum"; href = "forum.html" }
                        link { text = "Ingresar"; materialIcons = "account_circle"; href = "https://medium.com/lewisrhine" }
                        link { text = "Acerca de"; materialIcons = "info"; href = "https://github.com/lewisrhine" }
                    }
                }
            }
        }
    }

    override val content = content("Foros") {
        setAttribute("style", " background: url('images/whoiam.jpg') center / cover; filter: alpha(opacity=60); padding: 10px;")
    }
}

