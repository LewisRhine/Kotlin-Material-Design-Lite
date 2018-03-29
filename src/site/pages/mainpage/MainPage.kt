package site.pages.mainpage

import components.*
import components.layout.Grid
import components.layout.navigationlayout.MdlContent
import components.layout.navigationlayout.content
import components.layout.grid
import header
import mdlApp
import site.Color
import site.pages.main

object MainPage : MdlContent {

    fun createPage() {
        val mdlApp = mdlApp {
            navigationLayout(MainPage, "layout") {
                header(Color.primary) {
                }
                drawer("drawer") {
                    mainElement.header("drawer-header") {
                        setAttribute("style", " background: url('images/whoiam.jpg') center / cover; padding: 10px;")
                    }

                    nav("navigation") {
                        link {
                            text = "Foros"
                            materialIcons = "forum"
                            href = "forum.html"
                        }
                        link {
                            text = "Ingresar"
                            materialIcons = "account_circle"
                            onClick {
                                dialog {
                                    title = "Ingresar"
                                    buttonOne = Dialog.Button("CERRAR", true, Color.accent)
                                }
                            }
                        }
                        link {
                            text = "Acerca de"
                            materialIcons = "info"
                            onClick {
                                dialog {
                                    title = "Acerca de"
                                    content = "Emmanuel Messulam"
                                    buttonOne = Dialog.Button("CERRAR", true, Color.accent)
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    override val content = content("Pagina Principal") {
        grid {
            val images = Array (20*6) {"images/laptop.jpg"}
            val titles = Array (20*6) {"Rithmio"}
            val supportingTexts = Array (20*6) {"At Rithmio I Introduced new technologies like Kotlin and RxJava which have helped to make the team faster and more efficient."}
            createX(20, images, titles, supportingTexts)
        }
    }

    private fun Grid.createX(lines: Int, images: Array<String>, titles: Array<String>, supportingTexts: Array<String>) {
        for (i in 0 until lines*6) {
            cellCard(2) {
                size()
                image = Card.Image(images[i])
                title = titles[i]
                supportingText = supportingTexts[i]
                button = Card.Button("VER", Color.accent) {
                    dialog {
                        title = "Rithmio"
                        content = "At Rithmio I Introduced new technologies like Kotlin and RxJava which have helped to make the team faster and more efficient."
                        buttonOne = Dialog.Button("Ir a foros", true, Color.accent)
                    }
                }
            }
        }
    }
}

