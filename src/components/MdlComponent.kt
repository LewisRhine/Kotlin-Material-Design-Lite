package components

import classType
import org.w3c.dom.Element
import kotlin.browser.document
import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KProperty

abstract class MdlComponent(tag: String, classType: String, cssClassId: String = "") {
    val mainElement = document.createElement(tag).apply { this classType "$cssClassId $classType" }

    var backgroundColor: MdlColor.Background? = null
        set(value) {
            value?.let { mainElement.setAttribute("class", mainElement.getAttribute("class")?.plus(" $it")!!) }
        }

    var textColor: MdlColor.Text? = null
        set(value) {
            value?.let { mainElement.setAttribute("class", mainElement.getAttribute("class")?.plus(" $it")!!) }
        }

    fun <T> htmlPram(parent: Element = mainElement): ReadWriteProperty<Any, T> = object : ReadWriteProperty<Any, T> {
        private var prop: T? = null

        override fun getValue(thisRef: Any, property: KProperty<*>): T {
            return prop ?: throw IllegalStateException("Property ${property.name} should be initialized before get.")
        }

        override fun setValue(thisRef: Any, property: KProperty<*>, value: T) {
            prop = value
            set(property.name, prop!!)
        }

        private fun set(name: String, value: T) {
            parent.setAttribute(name, "$value")
            if (name == "href") parent.setAttribute("target" ,"_blank")
        }
    }

    fun htmlTextPram(text: String = "", parent: Element = mainElement): ReadWriteProperty<Any, String> = object : ReadWriteProperty<Any, String> {
        private var prop: String = text

        init {
            set(prop)
        }

        override fun getValue(thisRef: Any, property: KProperty<*>): String = prop

        override fun setValue(thisRef: Any, property: KProperty<*>, value: String) {
            prop = value
            set(prop)
        }

        private fun set(text: String) {
            parent.textContent = text
        }
    }

    fun <T : MdlComponent> appendToMain(initItem: T) = object : ReadWriteProperty<Any, T> {
        var item = initItem

        init {
            mainElement.append(item.mainElement)
        }

        override fun getValue(thisRef: Any, property: KProperty<*>): T = item

        override fun setValue(thisRef: Any, property: KProperty<*>, value: T) {
            mainElement.append(value.mainElement)
            item = value
        }
    }

    fun <T : MdlComponent> appendToMainIf(condition: Boolean, initItem: T) = object : ReadWriteProperty<Any, T> {
        var item = initItem

        init {
            if (condition) mainElement.append(item.mainElement)
        }

        override fun getValue(thisRef: Any, property: KProperty<*>): T = item

        override fun setValue(thisRef: Any, property: KProperty<*>, value: T) {
            if (condition) {
                mainElement.append(value.mainElement)
                item = value
            }
        }
    }

    operator fun Element.unaryPlus() {
        mainElement.append(this)
    }
}
