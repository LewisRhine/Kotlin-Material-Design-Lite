package site.pages

import components.*
import components.layout.Grid
import components.layout.navigationlayout.MdlContent
import components.layout.navigationlayout.content
import components.layout.grid
import org.w3c.dom.Element
import site.Color

object MainPage : MdlContent {
    override val content = content("Pagina Principal") {
        grid {
            val images = Array (20*6) {"images/laptop.jpg"}
            val titles = Array (20*6) {"Rithmio"}
            val supportingTexts = Array (20*6) {"At Rithmio I Introduced new technologies like Kotlin and RxJava which have helped to make the team faster and more efficient."}
            createX(20, images, titles, supportingTexts);
        }
    }

    private fun Grid.createX(lines: Int, images: Array<String>, titles: Array<String>, supportingTexts: Array<String>) {
        for (i in 0 until lines*6) {
            cellCard(2) {
                size()
                image = Card.Image(images[i])
                title = titles[i]
                supportingText = supportingTexts[i]
                button = Card.Button("VER", Color.accent)
            }
        }
    }
}

