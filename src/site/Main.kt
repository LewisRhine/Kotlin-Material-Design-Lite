package site

import header
import mdlApp
import site.pages.MainPage
import site.pages.Forums

fun main(args: Array<String>) {
    val mdlApp = mdlApp {
        navigationLayout(MainPage, "layout") {
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
