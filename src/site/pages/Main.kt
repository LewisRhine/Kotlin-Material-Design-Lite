package site.pages

import header
import mdlApp
import org.w3c.dom.HTMLElement
import site.Color
import site.pages.forumspage.Forums
import site.pages.mainpage.MainPage
import kotlin.browser.document

const val MAINPAGE_TITLE = "Main"
const val FORUM_TITLE = "Forum"

fun main(args: Array<String>) {
    val start = (document.getElementById("MdlApp") ?: throw IllegalArgumentException("No MldApp Element found!"))
            as? HTMLElement ?: throw IllegalArgumentException("MldApp Element is not div!")

    when(start.title) {
        MAINPAGE_TITLE -> MainPage.createPage()
        FORUM_TITLE -> Forums.createPage()
        "" -> throw IllegalArgumentException("MldApp Element has no title!")
        else -> throw IllegalArgumentException("MldApp Element title not defined!")
    }
}
