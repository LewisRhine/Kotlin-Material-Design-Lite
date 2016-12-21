package samplesite

import MdlColor
import Shade
import b
import header
import img
import mdlApp
import samplesite.pages.About
import kotlin.browser.document

fun main(args: Array<String>) {
    val mdlApp = mdlApp {
        navigationLayout(About, "layout") {
            header {}
            drawer("drawer") {
                mainElement.header("drawer-header ${MdlColor.Background.blueGrey(Shade.s300)}") {
                    img("avatar") { src = "images/roundprofile.png" }
                    b { textContent = "Lewis Rhine" }
                    append(document.createTextNode("Android Developer"))
                }

                nav("navigation") {
                    link { text = "About"; materialIcons = "account_circle"; onClick { content = About } }
                    link { text = "Blog"; materialIcons = "book"; href = "https://medium.com/lewisrhine" }
                    link { text = "Projects"; materialIcons = "build"; href = "https://github.com/lewisrhine" }
                    link {
                        text = "Twitter"
                        href = "https://twitter.com/lewisrhine"
                        mainElement.append(document.createElement("i").apply {
                            setAttribute("class", "material-icons fa fa-twitter")
                        })
                    }
                    link {
                        text = "Instagram"
                        href = "https://www.instagram.com/lewisrhine"
                        mainElement.append(document.createElement("i").apply {
                            setAttribute("class", "material-icons fa fa-instagram")
                        })
                    }
                    link {
                        text = "LinkedIn"
                        href = "https://www.linkedin.com/in/lewisrhine"
                        mainElement.append(document.createElement("i").apply {
                            setAttribute("class", "material-icons fa fa-linkedin")
                        })
                    }
                    link { text = "email"; href = "mailto:lewisrhine@gmail.com"; materialIcons = "email" }
                }
            }
        }
    }
}
