sealed class MdlColor() {
    sealed class Background() : MdlColor() {
        class blueGrey(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--blue-grey-${shade.value}" }
        class red(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--red-${shade.value}" }
        class pink(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--pink-${shade.value}" }
        class purple(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--purple-${shade.value}" }
        class deepPurple(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--deep-purple-${shade.value}" }
        class indigo(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--indigo-${shade.value}" }
        class blue(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--blue-${shade.value}" }
        class lightBlue(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--light-blue-${shade.value}" }
        class cyan(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--cyan-${shade.value}" }
        class teal(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--teal-${shade.value}" }
        class green(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--green-${shade.value}" }
        class lightGreen(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--light-green-${shade.value}" }
        class lime(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--lime-${shade.value}" }
        class yellow(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--yellow-${shade.value}" }
        class amber(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--amber-${shade.value}" }
        class orange(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--orange-${shade.value}" }
        class deepOrange(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--deep-orange-${shade.value}" }
        class brown(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--brown-${shade.value}" }
        class grey(private val shade: Shade = Shade.s500) : Background() { override fun toString(): String = "mdl-color--grey-${shade.value}" }
        class white() : Background() { override fun toString(): String = "mdl-color--white" }
        class black() : Background() { override fun toString(): String = "mdl-color--black" }
    }


    sealed class Text() : MdlColor() {
        class blueGrey(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--blue-grey-${shade.value}" }
        class red(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--red-${shade.value}" }
        class pink(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--pink-${shade.value}" }
        class purple(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--purple-${shade.value}" }
        class deepPurple(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--deep-purple-${shade.value}" }
        class indigo(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--indigo-${shade.value}" }
        class blue(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--blue-${shade.value}" }
        class lightBlue(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--light-blue-${shade.value}" }
        class cyan(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--cyan-${shade.value}" }
        class teal(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--teal-${shade.value}" }
        class green(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--green-${shade.value}" }
        class lightGreen(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--light-green-${shade.value}" }
        class lime(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--lime-${shade.value}" }
        class yellow(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--yellow-${shade.value}" }
        class amber(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--amber-${shade.value}" }
        class orange(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--orange-${shade.value}" }
        class deepOrange(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--deep-orange-${shade.value}" }
        class brown(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--brown-${shade.value}" }
        class grey(private val shade: Shade = Shade.s500) : Text() { override fun toString(): String = "mdl-color-text--grey-${shade.value}" }
        class white() : Text() { override fun toString(): String = "mdl-color-text--white" }
        class black() : Text() { override fun toString(): String = "mdl-color-text--black" }

    }
}

enum class ColorPalette {
    blueGrey {
        override val value: String = "blue-grey"
    },
    red {
        override val value: String = "red"
    },
    pink {
        override val value: String = "pink"
    },
    purple {
        override val value: String = "purple"
    },
    deepPurple {
        override val value: String = "deep-purple"
    },
    indigo {
        override val value: String = "indigo"
    },
    blue {
        override val value: String = "blue"
    },
    lightBlue {
        override val value: String = "light-blue"
    },
    cyan {
        override val value: String = "cyan"
    },
    teal {
        override val value: String = "teal"
    },
    green {
        override val value: String = "green"
    },
    lightGreen {
        override val value: String = "light-green"
    },
    lime {
        override val value: String = "Lime"
    },
    yellow {
        override val value: String = "yellow"
    },
    amber {
        override val value: String = "amber"
    },
    orange {
        override val value: String = "orange"
    },
    deepOrange {
        override val value: String = "deep-orange"
    },
    brown {
        override val value: String = "brown"
    },
    grey {
        override val value: String = "grey"
    },
    white {
        override val value: String = "white"
    },
    black {
        override val value: String = "black"
    };

    abstract val value: String
}
enum class Shade {
    s50 {
        override val value: String = "50"
    },
    s100 {
        override val value: String = "100"
    },
    s200 {
        override val value: String = "200"
    },
    s300 {
        override val value: String = "300"
    },
    s400 {
        override val value: String = "400"
    },
    s500 {
        override val value: String = "500"
    },
    s600 {
        override val value: String = "600"
    },
    s700 {
        override val value: String = "700"
    },
    s800 {
        override val value: String = "800"
    },
    s900 {
        override val value: String = "900"
    };

    abstract val value: String
}
