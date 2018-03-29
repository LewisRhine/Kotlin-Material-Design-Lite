if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'School-Web-Project'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'School-Web-Project'.");
}
this['School-Web-Project'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Unit = Kotlin.kotlin.Unit;
  var appendElement = Kotlin.kotlin.dom.appendElement_ldvnw0$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var ensureNotNull = Kotlin.ensureNotNull;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var equals = Kotlin.equals;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  MdlColor$Background.prototype = Object.create(MdlColor.prototype);
  MdlColor$Background.prototype.constructor = MdlColor$Background;
  MdlColor$Background$blueGrey.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$blueGrey.prototype.constructor = MdlColor$Background$blueGrey;
  MdlColor$Background$red.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$red.prototype.constructor = MdlColor$Background$red;
  MdlColor$Background$pink.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$pink.prototype.constructor = MdlColor$Background$pink;
  MdlColor$Background$purple.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$purple.prototype.constructor = MdlColor$Background$purple;
  MdlColor$Background$deepPurple.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$deepPurple.prototype.constructor = MdlColor$Background$deepPurple;
  MdlColor$Background$indigo.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$indigo.prototype.constructor = MdlColor$Background$indigo;
  MdlColor$Background$blue.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$blue.prototype.constructor = MdlColor$Background$blue;
  MdlColor$Background$lightBlue.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$lightBlue.prototype.constructor = MdlColor$Background$lightBlue;
  MdlColor$Background$cyan.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$cyan.prototype.constructor = MdlColor$Background$cyan;
  MdlColor$Background$teal.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$teal.prototype.constructor = MdlColor$Background$teal;
  MdlColor$Background$green.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$green.prototype.constructor = MdlColor$Background$green;
  MdlColor$Background$lightGreen.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$lightGreen.prototype.constructor = MdlColor$Background$lightGreen;
  MdlColor$Background$lime.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$lime.prototype.constructor = MdlColor$Background$lime;
  MdlColor$Background$yellow.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$yellow.prototype.constructor = MdlColor$Background$yellow;
  MdlColor$Background$amber.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$amber.prototype.constructor = MdlColor$Background$amber;
  MdlColor$Background$orange.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$orange.prototype.constructor = MdlColor$Background$orange;
  MdlColor$Background$deepOrange.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$deepOrange.prototype.constructor = MdlColor$Background$deepOrange;
  MdlColor$Background$brown.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$brown.prototype.constructor = MdlColor$Background$brown;
  MdlColor$Background$grey.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$grey.prototype.constructor = MdlColor$Background$grey;
  MdlColor$Background$white.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$white.prototype.constructor = MdlColor$Background$white;
  MdlColor$Background$black.prototype = Object.create(MdlColor$Background.prototype);
  MdlColor$Background$black.prototype.constructor = MdlColor$Background$black;
  MdlColor$Text.prototype = Object.create(MdlColor.prototype);
  MdlColor$Text.prototype.constructor = MdlColor$Text;
  MdlColor$Text$blueGrey.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$blueGrey.prototype.constructor = MdlColor$Text$blueGrey;
  MdlColor$Text$red.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$red.prototype.constructor = MdlColor$Text$red;
  MdlColor$Text$pink.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$pink.prototype.constructor = MdlColor$Text$pink;
  MdlColor$Text$purple.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$purple.prototype.constructor = MdlColor$Text$purple;
  MdlColor$Text$deepPurple.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$deepPurple.prototype.constructor = MdlColor$Text$deepPurple;
  MdlColor$Text$indigo.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$indigo.prototype.constructor = MdlColor$Text$indigo;
  MdlColor$Text$blue.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$blue.prototype.constructor = MdlColor$Text$blue;
  MdlColor$Text$lightBlue.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$lightBlue.prototype.constructor = MdlColor$Text$lightBlue;
  MdlColor$Text$cyan.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$cyan.prototype.constructor = MdlColor$Text$cyan;
  MdlColor$Text$teal.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$teal.prototype.constructor = MdlColor$Text$teal;
  MdlColor$Text$green.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$green.prototype.constructor = MdlColor$Text$green;
  MdlColor$Text$lightGreen.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$lightGreen.prototype.constructor = MdlColor$Text$lightGreen;
  MdlColor$Text$lime.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$lime.prototype.constructor = MdlColor$Text$lime;
  MdlColor$Text$yellow.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$yellow.prototype.constructor = MdlColor$Text$yellow;
  MdlColor$Text$amber.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$amber.prototype.constructor = MdlColor$Text$amber;
  MdlColor$Text$orange.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$orange.prototype.constructor = MdlColor$Text$orange;
  MdlColor$Text$deepOrange.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$deepOrange.prototype.constructor = MdlColor$Text$deepOrange;
  MdlColor$Text$brown.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$brown.prototype.constructor = MdlColor$Text$brown;
  MdlColor$Text$grey.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$grey.prototype.constructor = MdlColor$Text$grey;
  MdlColor$Text$white.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$white.prototype.constructor = MdlColor$Text$white;
  MdlColor$Text$black.prototype = Object.create(MdlColor$Text.prototype);
  MdlColor$Text$black.prototype.constructor = MdlColor$Text$black;
  ColorPalette.prototype = Object.create(Enum.prototype);
  ColorPalette.prototype.constructor = ColorPalette;
  ColorPalette$blueGrey.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$blueGrey.prototype.constructor = ColorPalette$blueGrey;
  ColorPalette$red.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$red.prototype.constructor = ColorPalette$red;
  ColorPalette$pink.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$pink.prototype.constructor = ColorPalette$pink;
  ColorPalette$purple.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$purple.prototype.constructor = ColorPalette$purple;
  ColorPalette$deepPurple.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$deepPurple.prototype.constructor = ColorPalette$deepPurple;
  ColorPalette$indigo.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$indigo.prototype.constructor = ColorPalette$indigo;
  ColorPalette$blue.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$blue.prototype.constructor = ColorPalette$blue;
  ColorPalette$lightBlue.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$lightBlue.prototype.constructor = ColorPalette$lightBlue;
  ColorPalette$cyan.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$cyan.prototype.constructor = ColorPalette$cyan;
  ColorPalette$teal.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$teal.prototype.constructor = ColorPalette$teal;
  ColorPalette$green.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$green.prototype.constructor = ColorPalette$green;
  ColorPalette$lightGreen.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$lightGreen.prototype.constructor = ColorPalette$lightGreen;
  ColorPalette$lime.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$lime.prototype.constructor = ColorPalette$lime;
  ColorPalette$yellow.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$yellow.prototype.constructor = ColorPalette$yellow;
  ColorPalette$amber.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$amber.prototype.constructor = ColorPalette$amber;
  ColorPalette$orange.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$orange.prototype.constructor = ColorPalette$orange;
  ColorPalette$deepOrange.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$deepOrange.prototype.constructor = ColorPalette$deepOrange;
  ColorPalette$brown.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$brown.prototype.constructor = ColorPalette$brown;
  ColorPalette$grey.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$grey.prototype.constructor = ColorPalette$grey;
  ColorPalette$white.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$white.prototype.constructor = ColorPalette$white;
  ColorPalette$black.prototype = Object.create(ColorPalette.prototype);
  ColorPalette$black.prototype.constructor = ColorPalette$black;
  Shade.prototype = Object.create(Enum.prototype);
  Shade.prototype.constructor = Shade;
  Shade$s50.prototype = Object.create(Shade.prototype);
  Shade$s50.prototype.constructor = Shade$s50;
  Shade$s100.prototype = Object.create(Shade.prototype);
  Shade$s100.prototype.constructor = Shade$s100;
  Shade$s200.prototype = Object.create(Shade.prototype);
  Shade$s200.prototype.constructor = Shade$s200;
  Shade$s300.prototype = Object.create(Shade.prototype);
  Shade$s300.prototype.constructor = Shade$s300;
  Shade$s400.prototype = Object.create(Shade.prototype);
  Shade$s400.prototype.constructor = Shade$s400;
  Shade$s500.prototype = Object.create(Shade.prototype);
  Shade$s500.prototype.constructor = Shade$s500;
  Shade$s600.prototype = Object.create(Shade.prototype);
  Shade$s600.prototype.constructor = Shade$s600;
  Shade$s700.prototype = Object.create(Shade.prototype);
  Shade$s700.prototype.constructor = Shade$s700;
  Shade$s800.prototype = Object.create(Shade.prototype);
  Shade$s800.prototype.constructor = Shade$s800;
  Shade$s900.prototype = Object.create(Shade.prototype);
  Shade$s900.prototype.constructor = Shade$s900;
  Card$Shadow.prototype = Object.create(Enum.prototype);
  Card$Shadow.prototype.constructor = Card$Shadow;
  Card$Shadow$DP2.prototype = Object.create(Card$Shadow.prototype);
  Card$Shadow$DP2.prototype.constructor = Card$Shadow$DP2;
  Card$Shadow$DP3.prototype = Object.create(Card$Shadow.prototype);
  Card$Shadow$DP3.prototype.constructor = Card$Shadow$DP3;
  Card$Shadow$DP4.prototype = Object.create(Card$Shadow.prototype);
  Card$Shadow$DP4.prototype.constructor = Card$Shadow$DP4;
  Card$Shadow$DP6.prototype = Object.create(Card$Shadow.prototype);
  Card$Shadow$DP6.prototype.constructor = Card$Shadow$DP6;
  Card$Shadow$DP8.prototype = Object.create(Card$Shadow.prototype);
  Card$Shadow$DP8.prototype.constructor = Card$Shadow$DP8;
  Card$Shadow$DP16.prototype = Object.create(Card$Shadow.prototype);
  Card$Shadow$DP16.prototype.constructor = Card$Shadow$DP16;
  Card.prototype = Object.create(MdlComponent.prototype);
  Card.prototype.constructor = Card;
  Chip$ChipText.prototype = Object.create(MdlComponent.prototype);
  Chip$ChipText.prototype.constructor = Chip$ChipText;
  Chip$ContactImage.prototype = Object.create(MdlComponent.prototype);
  Chip$ContactImage.prototype.constructor = Chip$ContactImage;
  Chip.prototype = Object.create(MdlComponent.prototype);
  Chip.prototype.constructor = Chip;
  List.prototype = Object.create(MdlComponent.prototype);
  List.prototype.constructor = List;
  Grid.prototype = Object.create(MdlComponent.prototype);
  Grid.prototype.constructor = Grid;
  Content.prototype = Object.create(MdlComponent.prototype);
  Content.prototype.constructor = Content;
  Drawer.prototype = Object.create(MdlComponent.prototype);
  Drawer.prototype.constructor = Drawer;
  Header$HeaderRow.prototype = Object.create(MdlComponent.prototype);
  Header$HeaderRow.prototype.constructor = Header$HeaderRow;
  Header.prototype = Object.create(MdlComponent.prototype);
  Header.prototype.constructor = Header;
  Layout.prototype = Object.create(MdlComponent.prototype);
  Layout.prototype.constructor = Layout;
  Nav$Link.prototype = Object.create(MdlComponent.prototype);
  Nav$Link.prototype.constructor = Nav$Link;
  Nav.prototype = Object.create(MdlComponent.prototype);
  Nav.prototype.constructor = Nav;
  LayoutTitle.prototype = Object.create(MdlComponent.prototype);
  LayoutTitle.prototype.constructor = LayoutTitle;
  Img.prototype = Object.create(MdlComponent.prototype);
  Img.prototype.constructor = Img;
  function MdlColor() {
  }
  function MdlColor$Background() {
    MdlColor.call(this);
  }
  function MdlColor$Background$blueGrey(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$blueGrey.prototype.toString = function () {
    return 'mdl-color--blue-grey-' + this.shade_0.value;
  };
  MdlColor$Background$blueGrey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'blueGrey',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$red(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$red.prototype.toString = function () {
    return 'mdl-color--red-' + this.shade_0.value;
  };
  MdlColor$Background$red.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'red',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$pink(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$pink.prototype.toString = function () {
    return 'mdl-color--pink-' + this.shade_0.value;
  };
  MdlColor$Background$pink.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'pink',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$purple(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$purple.prototype.toString = function () {
    return 'mdl-color--purple-' + this.shade_0.value;
  };
  MdlColor$Background$purple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'purple',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$deepPurple(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$deepPurple.prototype.toString = function () {
    return 'mdl-color--deep-purple-' + this.shade_0.value;
  };
  MdlColor$Background$deepPurple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'deepPurple',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$indigo(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$indigo.prototype.toString = function () {
    return 'mdl-color--indigo-' + this.shade_0.value;
  };
  MdlColor$Background$indigo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'indigo',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$blue(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$blue.prototype.toString = function () {
    return 'mdl-color--blue-' + this.shade_0.value;
  };
  MdlColor$Background$blue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'blue',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$lightBlue(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$lightBlue.prototype.toString = function () {
    return 'mdl-color--light-blue-' + this.shade_0.value;
  };
  MdlColor$Background$lightBlue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'lightBlue',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$cyan(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$cyan.prototype.toString = function () {
    return 'mdl-color--cyan-' + this.shade_0.value;
  };
  MdlColor$Background$cyan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'cyan',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$teal(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$teal.prototype.toString = function () {
    return 'mdl-color--teal-' + this.shade_0.value;
  };
  MdlColor$Background$teal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'teal',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$green(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$green.prototype.toString = function () {
    return 'mdl-color--green-' + this.shade_0.value;
  };
  MdlColor$Background$green.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'green',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$lightGreen(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$lightGreen.prototype.toString = function () {
    return 'mdl-color--light-green-' + this.shade_0.value;
  };
  MdlColor$Background$lightGreen.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'lightGreen',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$lime(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$lime.prototype.toString = function () {
    return 'mdl-color--lime-' + this.shade_0.value;
  };
  MdlColor$Background$lime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'lime',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$yellow(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$yellow.prototype.toString = function () {
    return 'mdl-color--yellow-' + this.shade_0.value;
  };
  MdlColor$Background$yellow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'yellow',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$amber(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$amber.prototype.toString = function () {
    return 'mdl-color--amber-' + this.shade_0.value;
  };
  MdlColor$Background$amber.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'amber',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$orange(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$orange.prototype.toString = function () {
    return 'mdl-color--orange-' + this.shade_0.value;
  };
  MdlColor$Background$orange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'orange',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$deepOrange(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$deepOrange.prototype.toString = function () {
    return 'mdl-color--deep-orange-' + this.shade_0.value;
  };
  MdlColor$Background$deepOrange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'deepOrange',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$brown(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$brown.prototype.toString = function () {
    return 'mdl-color--brown-' + this.shade_0.value;
  };
  MdlColor$Background$brown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'brown',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$grey(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Background.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Background$grey.prototype.toString = function () {
    return 'mdl-color--grey-' + this.shade_0.value;
  };
  MdlColor$Background$grey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'grey',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$white() {
    MdlColor$Background.call(this);
  }
  MdlColor$Background$white.prototype.toString = function () {
    return 'mdl-color--white';
  };
  MdlColor$Background$white.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'white',
    interfaces: [MdlColor$Background]
  };
  function MdlColor$Background$black() {
    MdlColor$Background.call(this);
  }
  MdlColor$Background$black.prototype.toString = function () {
    return 'mdl-color--black';
  };
  MdlColor$Background$black.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'black',
    interfaces: [MdlColor$Background]
  };
  MdlColor$Background.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Background',
    interfaces: [MdlColor]
  };
  function MdlColor$Text() {
    MdlColor.call(this);
  }
  function MdlColor$Text$blueGrey(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$blueGrey.prototype.toString = function () {
    return 'mdl-color-text--blue-grey-' + this.shade_0.value;
  };
  MdlColor$Text$blueGrey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'blueGrey',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$red(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$red.prototype.toString = function () {
    return 'mdl-color-text--red-' + this.shade_0.value;
  };
  MdlColor$Text$red.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'red',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$pink(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$pink.prototype.toString = function () {
    return 'mdl-color-text--pink-' + this.shade_0.value;
  };
  MdlColor$Text$pink.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'pink',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$purple(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$purple.prototype.toString = function () {
    return 'mdl-color-text--purple-' + this.shade_0.value;
  };
  MdlColor$Text$purple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'purple',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$deepPurple(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$deepPurple.prototype.toString = function () {
    return 'mdl-color-text--deep-purple-' + this.shade_0.value;
  };
  MdlColor$Text$deepPurple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'deepPurple',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$indigo(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$indigo.prototype.toString = function () {
    return 'mdl-color-text--indigo-' + this.shade_0.value;
  };
  MdlColor$Text$indigo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'indigo',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$blue(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$blue.prototype.toString = function () {
    return 'mdl-color-text--blue-' + this.shade_0.value;
  };
  MdlColor$Text$blue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'blue',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$lightBlue(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$lightBlue.prototype.toString = function () {
    return 'mdl-color-text--light-blue-' + this.shade_0.value;
  };
  MdlColor$Text$lightBlue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'lightBlue',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$cyan(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$cyan.prototype.toString = function () {
    return 'mdl-color-text--cyan-' + this.shade_0.value;
  };
  MdlColor$Text$cyan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'cyan',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$teal(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$teal.prototype.toString = function () {
    return 'mdl-color-text--teal-' + this.shade_0.value;
  };
  MdlColor$Text$teal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'teal',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$green(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$green.prototype.toString = function () {
    return 'mdl-color-text--green-' + this.shade_0.value;
  };
  MdlColor$Text$green.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'green',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$lightGreen(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$lightGreen.prototype.toString = function () {
    return 'mdl-color-text--light-green-' + this.shade_0.value;
  };
  MdlColor$Text$lightGreen.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'lightGreen',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$lime(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$lime.prototype.toString = function () {
    return 'mdl-color-text--lime-' + this.shade_0.value;
  };
  MdlColor$Text$lime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'lime',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$yellow(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$yellow.prototype.toString = function () {
    return 'mdl-color-text--yellow-' + this.shade_0.value;
  };
  MdlColor$Text$yellow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'yellow',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$amber(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$amber.prototype.toString = function () {
    return 'mdl-color-text--amber-' + this.shade_0.value;
  };
  MdlColor$Text$amber.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'amber',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$orange(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$orange.prototype.toString = function () {
    return 'mdl-color-text--orange-' + this.shade_0.value;
  };
  MdlColor$Text$orange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'orange',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$deepOrange(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$deepOrange.prototype.toString = function () {
    return 'mdl-color-text--deep-orange-' + this.shade_0.value;
  };
  MdlColor$Text$deepOrange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'deepOrange',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$brown(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$brown.prototype.toString = function () {
    return 'mdl-color-text--brown-' + this.shade_0.value;
  };
  MdlColor$Text$brown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'brown',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$grey(shade) {
    if (shade === void 0)
      shade = Shade$s500_getInstance();
    MdlColor$Text.call(this);
    this.shade_0 = shade;
  }
  MdlColor$Text$grey.prototype.toString = function () {
    return 'mdl-color-text--grey-' + this.shade_0.value;
  };
  MdlColor$Text$grey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'grey',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$white() {
    MdlColor$Text.call(this);
  }
  MdlColor$Text$white.prototype.toString = function () {
    return 'mdl-color-text--white';
  };
  MdlColor$Text$white.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'white',
    interfaces: [MdlColor$Text]
  };
  function MdlColor$Text$black() {
    MdlColor$Text.call(this);
  }
  MdlColor$Text$black.prototype.toString = function () {
    return 'mdl-color-text--black';
  };
  MdlColor$Text$black.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'black',
    interfaces: [MdlColor$Text]
  };
  MdlColor$Text.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Text',
    interfaces: [MdlColor]
  };
  MdlColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MdlColor',
    interfaces: []
  };
  function ColorPalette(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ColorPalette_initFields() {
    ColorPalette_initFields = function () {
    };
    new ColorPalette$blueGrey();
    new ColorPalette$red();
    new ColorPalette$pink();
    new ColorPalette$purple();
    new ColorPalette$deepPurple();
    new ColorPalette$indigo();
    new ColorPalette$blue();
    new ColorPalette$lightBlue();
    new ColorPalette$cyan();
    new ColorPalette$teal();
    new ColorPalette$green();
    new ColorPalette$lightGreen();
    new ColorPalette$lime();
    new ColorPalette$yellow();
    new ColorPalette$amber();
    new ColorPalette$orange();
    new ColorPalette$deepOrange();
    new ColorPalette$brown();
    new ColorPalette$grey();
    new ColorPalette$white();
    new ColorPalette$black();
  }
  function ColorPalette$blueGrey() {
    ColorPalette$blueGrey_instance = this;
    ColorPalette.call(this, 'blueGrey', 0);
    this.value_rn3pbc$_0 = 'blue-grey';
  }
  Object.defineProperty(ColorPalette$blueGrey.prototype, 'value', {
    get: function () {
      return this.value_rn3pbc$_0;
    }
  });
  ColorPalette$blueGrey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'blueGrey',
    interfaces: [ColorPalette]
  };
  var ColorPalette$blueGrey_instance = null;
  function ColorPalette$blueGrey_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$blueGrey_instance;
  }
  function ColorPalette$red() {
    ColorPalette$red_instance = this;
    ColorPalette.call(this, 'red', 1);
    this.value_4vjljw$_0 = 'red';
  }
  Object.defineProperty(ColorPalette$red.prototype, 'value', {
    get: function () {
      return this.value_4vjljw$_0;
    }
  });
  ColorPalette$red.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'red',
    interfaces: [ColorPalette]
  };
  var ColorPalette$red_instance = null;
  function ColorPalette$red_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$red_instance;
  }
  function ColorPalette$pink() {
    ColorPalette$pink_instance = this;
    ColorPalette.call(this, 'pink', 2);
    this.value_tf9t5h$_0 = 'pink';
  }
  Object.defineProperty(ColorPalette$pink.prototype, 'value', {
    get: function () {
      return this.value_tf9t5h$_0;
    }
  });
  ColorPalette$pink.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'pink',
    interfaces: [ColorPalette]
  };
  var ColorPalette$pink_instance = null;
  function ColorPalette$pink_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$pink_instance;
  }
  function ColorPalette$purple() {
    ColorPalette$purple_instance = this;
    ColorPalette.call(this, 'purple', 3);
    this.value_6xbuxn$_0 = 'purple';
  }
  Object.defineProperty(ColorPalette$purple.prototype, 'value', {
    get: function () {
      return this.value_6xbuxn$_0;
    }
  });
  ColorPalette$purple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'purple',
    interfaces: [ColorPalette]
  };
  var ColorPalette$purple_instance = null;
  function ColorPalette$purple_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$purple_instance;
  }
  function ColorPalette$deepPurple() {
    ColorPalette$deepPurple_instance = this;
    ColorPalette.call(this, 'deepPurple', 4);
    this.value_yyu7s7$_0 = 'deep-purple';
  }
  Object.defineProperty(ColorPalette$deepPurple.prototype, 'value', {
    get: function () {
      return this.value_yyu7s7$_0;
    }
  });
  ColorPalette$deepPurple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'deepPurple',
    interfaces: [ColorPalette]
  };
  var ColorPalette$deepPurple_instance = null;
  function ColorPalette$deepPurple_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$deepPurple_instance;
  }
  function ColorPalette$indigo() {
    ColorPalette$indigo_instance = this;
    ColorPalette.call(this, 'indigo', 5);
    this.value_yt5mi9$_0 = 'indigo';
  }
  Object.defineProperty(ColorPalette$indigo.prototype, 'value', {
    get: function () {
      return this.value_yt5mi9$_0;
    }
  });
  ColorPalette$indigo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'indigo',
    interfaces: [ColorPalette]
  };
  var ColorPalette$indigo_instance = null;
  function ColorPalette$indigo_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$indigo_instance;
  }
  function ColorPalette$blue() {
    ColorPalette$blue_instance = this;
    ColorPalette.call(this, 'blue', 6);
    this.value_5as1tl$_0 = 'blue';
  }
  Object.defineProperty(ColorPalette$blue.prototype, 'value', {
    get: function () {
      return this.value_5as1tl$_0;
    }
  });
  ColorPalette$blue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'blue',
    interfaces: [ColorPalette]
  };
  var ColorPalette$blue_instance = null;
  function ColorPalette$blue_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$blue_instance;
  }
  function ColorPalette$lightBlue() {
    ColorPalette$lightBlue_instance = this;
    ColorPalette.call(this, 'lightBlue', 7);
    this.value_pjd7yb$_0 = 'light-blue';
  }
  Object.defineProperty(ColorPalette$lightBlue.prototype, 'value', {
    get: function () {
      return this.value_pjd7yb$_0;
    }
  });
  ColorPalette$lightBlue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'lightBlue',
    interfaces: [ColorPalette]
  };
  var ColorPalette$lightBlue_instance = null;
  function ColorPalette$lightBlue_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$lightBlue_instance;
  }
  function ColorPalette$cyan() {
    ColorPalette$cyan_instance = this;
    ColorPalette.call(this, 'cyan', 8);
    this.value_1d0f1e$_0 = 'cyan';
  }
  Object.defineProperty(ColorPalette$cyan.prototype, 'value', {
    get: function () {
      return this.value_1d0f1e$_0;
    }
  });
  ColorPalette$cyan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'cyan',
    interfaces: [ColorPalette]
  };
  var ColorPalette$cyan_instance = null;
  function ColorPalette$cyan_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$cyan_instance;
  }
  function ColorPalette$teal() {
    ColorPalette$teal_instance = this;
    ColorPalette.call(this, 'teal', 9);
    this.value_2030qj$_0 = 'teal';
  }
  Object.defineProperty(ColorPalette$teal.prototype, 'value', {
    get: function () {
      return this.value_2030qj$_0;
    }
  });
  ColorPalette$teal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'teal',
    interfaces: [ColorPalette]
  };
  var ColorPalette$teal_instance = null;
  function ColorPalette$teal_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$teal_instance;
  }
  function ColorPalette$green() {
    ColorPalette$green_instance = this;
    ColorPalette.call(this, 'green', 10);
    this.value_kiad2i$_0 = 'green';
  }
  Object.defineProperty(ColorPalette$green.prototype, 'value', {
    get: function () {
      return this.value_kiad2i$_0;
    }
  });
  ColorPalette$green.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'green',
    interfaces: [ColorPalette]
  };
  var ColorPalette$green_instance = null;
  function ColorPalette$green_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$green_instance;
  }
  function ColorPalette$lightGreen() {
    ColorPalette$lightGreen_instance = this;
    ColorPalette.call(this, 'lightGreen', 11);
    this.value_we2ks4$_0 = 'light-green';
  }
  Object.defineProperty(ColorPalette$lightGreen.prototype, 'value', {
    get: function () {
      return this.value_we2ks4$_0;
    }
  });
  ColorPalette$lightGreen.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'lightGreen',
    interfaces: [ColorPalette]
  };
  var ColorPalette$lightGreen_instance = null;
  function ColorPalette$lightGreen_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$lightGreen_instance;
  }
  function ColorPalette$lime() {
    ColorPalette$lime_instance = this;
    ColorPalette.call(this, 'lime', 12);
    this.value_hfn1f0$_0 = 'Lime';
  }
  Object.defineProperty(ColorPalette$lime.prototype, 'value', {
    get: function () {
      return this.value_hfn1f0$_0;
    }
  });
  ColorPalette$lime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'lime',
    interfaces: [ColorPalette]
  };
  var ColorPalette$lime_instance = null;
  function ColorPalette$lime_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$lime_instance;
  }
  function ColorPalette$yellow() {
    ColorPalette$yellow_instance = this;
    ColorPalette.call(this, 'yellow', 13);
    this.value_wjzeab$_0 = 'yellow';
  }
  Object.defineProperty(ColorPalette$yellow.prototype, 'value', {
    get: function () {
      return this.value_wjzeab$_0;
    }
  });
  ColorPalette$yellow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'yellow',
    interfaces: [ColorPalette]
  };
  var ColorPalette$yellow_instance = null;
  function ColorPalette$yellow_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$yellow_instance;
  }
  function ColorPalette$amber() {
    ColorPalette$amber_instance = this;
    ColorPalette.call(this, 'amber', 14);
    this.value_2shoom$_0 = 'amber';
  }
  Object.defineProperty(ColorPalette$amber.prototype, 'value', {
    get: function () {
      return this.value_2shoom$_0;
    }
  });
  ColorPalette$amber.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'amber',
    interfaces: [ColorPalette]
  };
  var ColorPalette$amber_instance = null;
  function ColorPalette$amber_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$amber_instance;
  }
  function ColorPalette$orange() {
    ColorPalette$orange_instance = this;
    ColorPalette.call(this, 'orange', 15);
    this.value_dexmnn$_0 = 'orange';
  }
  Object.defineProperty(ColorPalette$orange.prototype, 'value', {
    get: function () {
      return this.value_dexmnn$_0;
    }
  });
  ColorPalette$orange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'orange',
    interfaces: [ColorPalette]
  };
  var ColorPalette$orange_instance = null;
  function ColorPalette$orange_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$orange_instance;
  }
  function ColorPalette$deepOrange() {
    ColorPalette$deepOrange_instance = this;
    ColorPalette.call(this, 'deepOrange', 16);
    this.value_emkq6x$_0 = 'deep-orange';
  }
  Object.defineProperty(ColorPalette$deepOrange.prototype, 'value', {
    get: function () {
      return this.value_emkq6x$_0;
    }
  });
  ColorPalette$deepOrange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'deepOrange',
    interfaces: [ColorPalette]
  };
  var ColorPalette$deepOrange_instance = null;
  function ColorPalette$deepOrange_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$deepOrange_instance;
  }
  function ColorPalette$brown() {
    ColorPalette$brown_instance = this;
    ColorPalette.call(this, 'brown', 17);
    this.value_7ixafr$_0 = 'brown';
  }
  Object.defineProperty(ColorPalette$brown.prototype, 'value', {
    get: function () {
      return this.value_7ixafr$_0;
    }
  });
  ColorPalette$brown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'brown',
    interfaces: [ColorPalette]
  };
  var ColorPalette$brown_instance = null;
  function ColorPalette$brown_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$brown_instance;
  }
  function ColorPalette$grey() {
    ColorPalette$grey_instance = this;
    ColorPalette.call(this, 'grey', 18);
    this.value_syusv6$_0 = 'grey';
  }
  Object.defineProperty(ColorPalette$grey.prototype, 'value', {
    get: function () {
      return this.value_syusv6$_0;
    }
  });
  ColorPalette$grey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'grey',
    interfaces: [ColorPalette]
  };
  var ColorPalette$grey_instance = null;
  function ColorPalette$grey_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$grey_instance;
  }
  function ColorPalette$white() {
    ColorPalette$white_instance = this;
    ColorPalette.call(this, 'white', 19);
    this.value_ds7qd8$_0 = 'white';
  }
  Object.defineProperty(ColorPalette$white.prototype, 'value', {
    get: function () {
      return this.value_ds7qd8$_0;
    }
  });
  ColorPalette$white.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'white',
    interfaces: [ColorPalette]
  };
  var ColorPalette$white_instance = null;
  function ColorPalette$white_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$white_instance;
  }
  function ColorPalette$black() {
    ColorPalette$black_instance = this;
    ColorPalette.call(this, 'black', 20);
    this.value_weapm6$_0 = 'black';
  }
  Object.defineProperty(ColorPalette$black.prototype, 'value', {
    get: function () {
      return this.value_weapm6$_0;
    }
  });
  ColorPalette$black.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'black',
    interfaces: [ColorPalette]
  };
  var ColorPalette$black_instance = null;
  function ColorPalette$black_getInstance() {
    ColorPalette_initFields();
    return ColorPalette$black_instance;
  }
  ColorPalette.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorPalette',
    interfaces: [Enum]
  };
  function ColorPalette$values() {
    return [ColorPalette$blueGrey_getInstance(), ColorPalette$red_getInstance(), ColorPalette$pink_getInstance(), ColorPalette$purple_getInstance(), ColorPalette$deepPurple_getInstance(), ColorPalette$indigo_getInstance(), ColorPalette$blue_getInstance(), ColorPalette$lightBlue_getInstance(), ColorPalette$cyan_getInstance(), ColorPalette$teal_getInstance(), ColorPalette$green_getInstance(), ColorPalette$lightGreen_getInstance(), ColorPalette$lime_getInstance(), ColorPalette$yellow_getInstance(), ColorPalette$amber_getInstance(), ColorPalette$orange_getInstance(), ColorPalette$deepOrange_getInstance(), ColorPalette$brown_getInstance(), ColorPalette$grey_getInstance(), ColorPalette$white_getInstance(), ColorPalette$black_getInstance()];
  }
  ColorPalette.values = ColorPalette$values;
  function ColorPalette$valueOf(name) {
    switch (name) {
      case 'blueGrey':
        return ColorPalette$blueGrey_getInstance();
      case 'red':
        return ColorPalette$red_getInstance();
      case 'pink':
        return ColorPalette$pink_getInstance();
      case 'purple':
        return ColorPalette$purple_getInstance();
      case 'deepPurple':
        return ColorPalette$deepPurple_getInstance();
      case 'indigo':
        return ColorPalette$indigo_getInstance();
      case 'blue':
        return ColorPalette$blue_getInstance();
      case 'lightBlue':
        return ColorPalette$lightBlue_getInstance();
      case 'cyan':
        return ColorPalette$cyan_getInstance();
      case 'teal':
        return ColorPalette$teal_getInstance();
      case 'green':
        return ColorPalette$green_getInstance();
      case 'lightGreen':
        return ColorPalette$lightGreen_getInstance();
      case 'lime':
        return ColorPalette$lime_getInstance();
      case 'yellow':
        return ColorPalette$yellow_getInstance();
      case 'amber':
        return ColorPalette$amber_getInstance();
      case 'orange':
        return ColorPalette$orange_getInstance();
      case 'deepOrange':
        return ColorPalette$deepOrange_getInstance();
      case 'brown':
        return ColorPalette$brown_getInstance();
      case 'grey':
        return ColorPalette$grey_getInstance();
      case 'white':
        return ColorPalette$white_getInstance();
      case 'black':
        return ColorPalette$black_getInstance();
      default:throwISE('No enum constant ColorPalette.' + name);
    }
  }
  ColorPalette.valueOf_61zpoe$ = ColorPalette$valueOf;
  function Shade(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Shade_initFields() {
    Shade_initFields = function () {
    };
    new Shade$s50();
    new Shade$s100();
    new Shade$s200();
    new Shade$s300();
    new Shade$s400();
    new Shade$s500();
    new Shade$s600();
    new Shade$s700();
    new Shade$s800();
    new Shade$s900();
  }
  function Shade$s50() {
    Shade$s50_instance = this;
    Shade.call(this, 's50', 0);
    this.value_spld6y$_0 = '50';
  }
  Object.defineProperty(Shade$s50.prototype, 'value', {
    get: function () {
      return this.value_spld6y$_0;
    }
  });
  Shade$s50.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 's50',
    interfaces: [Shade]
  };
  var Shade$s50_instance = null;
  function Shade$s50_getInstance() {
    Shade_initFields();
    return Shade$s50_instance;
  }
  function Shade$s100() {
    Shade$s100_instance = this;
    Shade.call(this, 's100', 1);
    this.value_fb2a08$_0 = '100';
  }
  Object.defineProperty(Shade$s100.prototype, 'value', {
    get: function () {
      return this.value_fb2a08$_0;
    }
  });
  Shade$s100.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 's100',
    interfaces: [Shade]
  };
  var Shade$s100_instance = null;
  function Shade$s100_getInstance() {
    Shade_initFields();
    return Shade$s100_instance;
  }
  function Shade$s200() {
    Shade$s200_instance = this;
    Shade.call(this, 's200', 2);
    this.value_ik28sp$_0 = '200';
  }
  Object.defineProperty(Shade$s200.prototype, 'value', {
    get: function () {
      return this.value_ik28sp$_0;
    }
  });
  Shade$s200.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 's200',
    interfaces: [Shade]
  };
  var Shade$s200_instance = null;
  function Shade$s200_getInstance() {
    Shade_initFields();
    return Shade$s200_instance;
  }
  function Shade$s300() {
    Shade$s300_instance = this;
    Shade.call(this, 's300', 3);
    this.value_lt27l6$_0 = '300';
  }
  Object.defineProperty(Shade$s300.prototype, 'value', {
    get: function () {
      return this.value_lt27l6$_0;
    }
  });
  Shade$s300.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 's300',
    interfaces: [Shade]
  };
  var Shade$s300_instance = null;
  function Shade$s300_getInstance() {
    Shade_initFields();
    return Shade$s300_instance;
  }
  function Shade$s400() {
    Shade$s400_instance = this;
    Shade.call(this, 's400', 4);
    this.value_p226dn$_0 = '400';
  }
  Object.defineProperty(Shade$s400.prototype, 'value', {
    get: function () {
      return this.value_p226dn$_0;
    }
  });
  Shade$s400.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 's400',
    interfaces: [Shade]
  };
  var Shade$s400_instance = null;
  function Shade$s400_getInstance() {
    Shade_initFields();
    return Shade$s400_instance;
  }
  function Shade$s500() {
    Shade$s500_instance = this;
    Shade.call(this, 's500', 5);
    this.value_sb2564$_0 = '500';
  }
  Object.defineProperty(Shade$s500.prototype, 'value', {
    get: function () {
      return this.value_sb2564$_0;
    }
  });
  Shade$s500.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 's500',
    interfaces: [Shade]
  };
  var Shade$s500_instance = null;
  function Shade$s500_getInstance() {
    Shade_initFields();
    return Shade$s500_instance;
  }
  function Shade$s600() {
    Shade$s600_instance = this;
    Shade.call(this, 's600', 6);
    this.value_vk23yl$_0 = '600';
  }
  Object.defineProperty(Shade$s600.prototype, 'value', {
    get: function () {
      return this.value_vk23yl$_0;
    }
  });
  Shade$s600.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 's600',
    interfaces: [Shade]
  };
  var Shade$s600_instance = null;
  function Shade$s600_getInstance() {
    Shade_initFields();
    return Shade$s600_instance;
  }
  function Shade$s700() {
    Shade$s700_instance = this;
    Shade.call(this, 's700', 7);
    this.value_yt22r2$_0 = '700';
  }
  Object.defineProperty(Shade$s700.prototype, 'value', {
    get: function () {
      return this.value_yt22r2$_0;
    }
  });
  Shade$s700.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 's700',
    interfaces: [Shade]
  };
  var Shade$s700_instance = null;
  function Shade$s700_getInstance() {
    Shade_initFields();
    return Shade$s700_instance;
  }
  function Shade$s800() {
    Shade$s800_instance = this;
    Shade.call(this, 's800', 8);
    this.value_wz20fl$_0 = '800';
  }
  Object.defineProperty(Shade$s800.prototype, 'value', {
    get: function () {
      return this.value_wz20fl$_0;
    }
  });
  Shade$s800.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 's800',
    interfaces: [Shade]
  };
  var Shade$s800_instance = null;
  function Shade$s800_getInstance() {
    Shade_initFields();
    return Shade$s800_instance;
  }
  function Shade$s900() {
    Shade$s900_instance = this;
    Shade.call(this, 's900', 9);
    this.value_tq21n4$_0 = '900';
  }
  Object.defineProperty(Shade$s900.prototype, 'value', {
    get: function () {
      return this.value_tq21n4$_0;
    }
  });
  Shade$s900.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 's900',
    interfaces: [Shade]
  };
  var Shade$s900_instance = null;
  function Shade$s900_getInstance() {
    Shade_initFields();
    return Shade$s900_instance;
  }
  Shade.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Shade',
    interfaces: [Enum]
  };
  function Shade$values() {
    return [Shade$s50_getInstance(), Shade$s100_getInstance(), Shade$s200_getInstance(), Shade$s300_getInstance(), Shade$s400_getInstance(), Shade$s500_getInstance(), Shade$s600_getInstance(), Shade$s700_getInstance(), Shade$s800_getInstance(), Shade$s900_getInstance()];
  }
  Shade.values = Shade$values;
  function Shade$valueOf(name) {
    switch (name) {
      case 's50':
        return Shade$s50_getInstance();
      case 's100':
        return Shade$s100_getInstance();
      case 's200':
        return Shade$s200_getInstance();
      case 's300':
        return Shade$s300_getInstance();
      case 's400':
        return Shade$s400_getInstance();
      case 's500':
        return Shade$s500_getInstance();
      case 's600':
        return Shade$s600_getInstance();
      case 's700':
        return Shade$s700_getInstance();
      case 's800':
        return Shade$s800_getInstance();
      case 's900':
        return Shade$s900_getInstance();
      default:throwISE('No enum constant Shade.' + name);
    }
  }
  Shade.valueOf_61zpoe$ = Shade$valueOf;
  function mdlApp(init) {
    var app = new MdlApp();
    init(app);
    return app;
  }
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function MdlApp() {
    this.app_0 = document.getElementById('MdlApp');
    if (this.app_0 == null) {
      var message = 'No MldApp Element found!';
      throw IllegalArgumentException_init(message.toString());
    }
  }
  MdlApp.prototype.navigationLayout_d0ce5n$ = function (content, cssClass, init) {
    if (cssClass === void 0)
      cssClass = '';
    var tmp$;
    var nl = new Layout(content, cssClass);
    init(nl);
    nl.mainElement.append(nl.content.content.mainElement);
    (tmp$ = this.app_0) != null ? (tmp$.append(nl.mainElement), Unit) : null;
  };
  MdlApp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MdlApp',
    interfaces: []
  };
  function card($receiver, cssClassId, shadow, init) {
    if (cssClassId === void 0)
      cssClassId = '';
    if (shadow === void 0)
      shadow = Card$Shadow$DP2_getInstance();
    var card = new Card(cssClassId, shadow);
    init(card);
    $receiver.append(card.mainElement);
    return card.mainElement;
  }
  function Card(cssClassId, shadow) {
    if (cssClassId === void 0)
      cssClassId = '';
    if (shadow === void 0)
      shadow = Card$Shadow$DP2_getInstance();
    MdlComponent.call(this, 'div', 'mdl-card ' + shadow, cssClassId);
    this.button_3su3m$_0 = null;
    this.image_cupue3$_0 = null;
    this.title_7p2xyw$_0 = '';
    this.supportingText_jh93qk$_0 = '';
  }
  function Card$Shadow(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Card$Shadow_initFields() {
    Card$Shadow_initFields = function () {
    };
    new Card$Shadow$DP2();
    new Card$Shadow$DP3();
    new Card$Shadow$DP4();
    new Card$Shadow$DP6();
    new Card$Shadow$DP8();
    new Card$Shadow$DP16();
  }
  function Card$Shadow$DP2() {
    Card$Shadow$DP2_instance = this;
    Card$Shadow.call(this, 'DP2', 0);
  }
  Card$Shadow$DP2.prototype.toString = function () {
    return 'mdl-shadow--2dp';
  };
  Card$Shadow$DP2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DP2',
    interfaces: [Card$Shadow]
  };
  var Card$Shadow$DP2_instance = null;
  function Card$Shadow$DP2_getInstance() {
    Card$Shadow_initFields();
    return Card$Shadow$DP2_instance;
  }
  function Card$Shadow$DP3() {
    Card$Shadow$DP3_instance = this;
    Card$Shadow.call(this, 'DP3', 1);
  }
  Card$Shadow$DP3.prototype.toString = function () {
    return 'mdl-shadow--3dp';
  };
  Card$Shadow$DP3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DP3',
    interfaces: [Card$Shadow]
  };
  var Card$Shadow$DP3_instance = null;
  function Card$Shadow$DP3_getInstance() {
    Card$Shadow_initFields();
    return Card$Shadow$DP3_instance;
  }
  function Card$Shadow$DP4() {
    Card$Shadow$DP4_instance = this;
    Card$Shadow.call(this, 'DP4', 2);
  }
  Card$Shadow$DP4.prototype.toString = function () {
    return 'mdl-shadow--4dp';
  };
  Card$Shadow$DP4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DP4',
    interfaces: [Card$Shadow]
  };
  var Card$Shadow$DP4_instance = null;
  function Card$Shadow$DP4_getInstance() {
    Card$Shadow_initFields();
    return Card$Shadow$DP4_instance;
  }
  function Card$Shadow$DP6() {
    Card$Shadow$DP6_instance = this;
    Card$Shadow.call(this, 'DP6', 3);
  }
  Card$Shadow$DP6.prototype.toString = function () {
    return 'mdl-shadow--6dp';
  };
  Card$Shadow$DP6.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DP6',
    interfaces: [Card$Shadow]
  };
  var Card$Shadow$DP6_instance = null;
  function Card$Shadow$DP6_getInstance() {
    Card$Shadow_initFields();
    return Card$Shadow$DP6_instance;
  }
  function Card$Shadow$DP8() {
    Card$Shadow$DP8_instance = this;
    Card$Shadow.call(this, 'DP8', 4);
  }
  Card$Shadow$DP8.prototype.toString = function () {
    return 'mdl-shadow--8dp';
  };
  Card$Shadow$DP8.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DP8',
    interfaces: [Card$Shadow]
  };
  var Card$Shadow$DP8_instance = null;
  function Card$Shadow$DP8_getInstance() {
    Card$Shadow_initFields();
    return Card$Shadow$DP8_instance;
  }
  function Card$Shadow$DP16() {
    Card$Shadow$DP16_instance = this;
    Card$Shadow.call(this, 'DP16', 5);
  }
  Card$Shadow$DP16.prototype.toString = function () {
    return 'mdl-shadow--16dp';
  };
  Card$Shadow$DP16.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DP16',
    interfaces: [Card$Shadow]
  };
  var Card$Shadow$DP16_instance = null;
  function Card$Shadow$DP16_getInstance() {
    Card$Shadow_initFields();
    return Card$Shadow$DP16_instance;
  }
  Card$Shadow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Shadow',
    interfaces: [Enum]
  };
  function Card$Shadow$values() {
    return [Card$Shadow$DP2_getInstance(), Card$Shadow$DP3_getInstance(), Card$Shadow$DP4_getInstance(), Card$Shadow$DP6_getInstance(), Card$Shadow$DP8_getInstance(), Card$Shadow$DP16_getInstance()];
  }
  Card$Shadow.values = Card$Shadow$values;
  function Card$Shadow$valueOf(name) {
    switch (name) {
      case 'DP2':
        return Card$Shadow$DP2_getInstance();
      case 'DP3':
        return Card$Shadow$DP3_getInstance();
      case 'DP4':
        return Card$Shadow$DP4_getInstance();
      case 'DP6':
        return Card$Shadow$DP6_getInstance();
      case 'DP8':
        return Card$Shadow$DP8_getInstance();
      case 'DP16':
        return Card$Shadow$DP16_getInstance();
      default:throwISE('No enum constant components.Card.Shadow.' + name);
    }
  }
  Card$Shadow.valueOf_61zpoe$ = Card$Shadow$valueOf;
  Card.prototype.size_vux9f0$ = function (width, height) {
    if (width === void 0)
      width = -1;
    if (height === void 0)
      height = -1;
    this.mainElement.setAttribute('style', 'width: ' + width + 'px; height: ' + height + 'px;');
  };
  function Card$set_Card$button$lambda(closure$value) {
    return function ($receiver) {
      classType($receiver, 'mdl-button mdl-js-button mdl-js-ripple-effect ' + closure$value.color);
      $receiver.textContent = closure$value.text;
      return Unit;
    };
  }
  Object.defineProperty(Card.prototype, 'button', {
    get: function () {
      return this.button_3su3m$_0;
    },
    set: function (value) {
      var tmp$;
      if (value != null) {
        appendElement(this.mainElement, 'a', Card$set_Card$button$lambda(value));
      }
       else {
        (tmp$ = this.mainElement.getElementsByClassName('mdl-button')[0]) != null ? (tmp$.remove(), Unit) : null;
      }
    }
  });
  Object.defineProperty(Card.prototype, 'image', {
    get: function () {
      return this.image_cupue3$_0;
    },
    set: function (value) {
      var tmp$;
      if (value != null) {
        var $receiver = this.mainElement;
        var classId = 'mdl-card__media';
        var $receiver_0 = document.createElement('div');
        classType($receiver_0, classId);
        var div = $receiver_0;
        var img = new Img('card_helper');
        img.src = value.url;
        img.alt = value.alt;
        div.append(img.mainElement);
        img.mainElement;
        $receiver.append(div);
      }
       else {
        (tmp$ = this.mainElement.getElementsByClassName('mdl-card__media')[0]) != null ? (tmp$.remove(), Unit) : null;
      }
    }
  });
  Object.defineProperty(Card.prototype, 'title', {
    get: function () {
      return this.title_7p2xyw$_0;
    },
    set: function (value) {
      var $receiver = this.mainElement;
      var classId = 'mdl-card__title';
      var $receiver_0 = document.createElement('div');
      classType($receiver_0, classId);
      var div = $receiver_0;
      var classId_0 = 'mdl-card__title-text';
      var $receiver_1 = document.createElement('h2');
      classType($receiver_1, classId_0);
      var h2 = $receiver_1;
      h2.textContent = value;
      div.append(h2);
      $receiver.append(div);
    }
  });
  Object.defineProperty(Card.prototype, 'supportingText', {
    get: function () {
      return this.supportingText_jh93qk$_0;
    },
    set: function (value) {
      var $receiver = this.mainElement;
      var classId = 'mdl-card__supporting-text';
      var $receiver_0 = document.createElement('div');
      classType($receiver_0, classId);
      var div = $receiver_0;
      div.textContent = value;
      $receiver.append(div);
    }
  });
  function Card$Image(url, alt) {
    if (alt === void 0)
      alt = '';
    this.url = url;
    this.alt = alt;
  }
  Card$Image.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Image',
    interfaces: []
  };
  Card$Image.prototype.component1 = function () {
    return this.url;
  };
  Card$Image.prototype.component2 = function () {
    return this.alt;
  };
  Card$Image.prototype.copy_puj7f4$ = function (url, alt) {
    return new Card$Image(url === void 0 ? this.url : url, alt === void 0 ? this.alt : alt);
  };
  Card$Image.prototype.toString = function () {
    return 'Image(url=' + Kotlin.toString(this.url) + (', alt=' + Kotlin.toString(this.alt)) + ')';
  };
  Card$Image.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.alt) | 0;
    return result;
  };
  Card$Image.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.url, other.url) && Kotlin.equals(this.alt, other.alt)))));
  };
  function Card$Button(text, color) {
    this.text = text;
    this.color = color;
  }
  Card$Button.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Button',
    interfaces: []
  };
  Card$Button.prototype.component1 = function () {
    return this.text;
  };
  Card$Button.prototype.component2 = function () {
    return this.color;
  };
  Card$Button.prototype.copy_puj7f4$ = function (text, color) {
    return new Card$Button(text === void 0 ? this.text : text, color === void 0 ? this.color : color);
  };
  Card$Button.prototype.toString = function () {
    return 'Button(text=' + Kotlin.toString(this.text) + (', color=' + Kotlin.toString(this.color)) + ')';
  };
  Card$Button.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.color) | 0;
    return result;
  };
  Card$Button.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.text, other.text) && Kotlin.equals(this.color, other.color)))));
  };
  Card.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Card',
    interfaces: [MdlComponent]
  };
  function chip($receiver, cssClassId, contact, init) {
    if (cssClassId === void 0)
      cssClassId = '';
    if (contact === void 0)
      contact = false;
    var chip = new Chip(cssClassId, contact);
    init(chip);
    chip.mainElement.setAttribute('style', 'margin-right:5px;');
    $receiver.append(chip.mainElement);
    return chip.mainElement;
  }
  function Chip(cssClassId, contact) {
    if (cssClassId === void 0)
      cssClassId = '';
    if (contact === void 0)
      contact = false;
    MdlComponent.call(this, 'span', 'mdl-chip ' + (contact ? 'mdl-chip--contact' : ''), cssClassId);
    this.img_xxrept$_0 = this.appendToMainIf_5my4t9$(contact, new Chip$ContactImage());
    this.span_d8jdoa$_0 = this.appendToMain_ejy5am$(new Chip$ChipText());
    this.text_d864ql$_0 = this.htmlTextPram_5ljwfj$('', this.span_0.mainElement);
    this.src_xxxw74$_0 = this.htmlPram_gckoif$(this.img_0.mainElement);
  }
  function Chip$ChipText() {
    MdlComponent.call(this, 'span', 'mdl-chip__text');
  }
  Chip$ChipText.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChipText',
    interfaces: [MdlComponent]
  };
  function Chip$ContactImage() {
    MdlComponent.call(this, 'img', 'mdl-chip__contact');
  }
  Chip$ContactImage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactImage',
    interfaces: [MdlComponent]
  };
  var Chip$img_metadata = new PropertyMetadata('img');
  Object.defineProperty(Chip.prototype, 'img_0', {
    get: function () {
      return this.img_xxrept$_0.getValue_lrcp0p$(this, Chip$img_metadata);
    }
  });
  var Chip$span_metadata = new PropertyMetadata('span');
  Object.defineProperty(Chip.prototype, 'span_0', {
    get: function () {
      return this.span_d8jdoa$_0.getValue_lrcp0p$(this, Chip$span_metadata);
    }
  });
  var Chip$text_metadata = new PropertyMetadata('text');
  Object.defineProperty(Chip.prototype, 'text', {
    get: function () {
      return this.text_d864ql$_0.getValue_lrcp0p$(this, Chip$text_metadata);
    },
    set: function (text) {
      this.text_d864ql$_0.setValue_9rddgb$(this, Chip$text_metadata, text);
    }
  });
  var Chip$src_metadata = new PropertyMetadata('src');
  Object.defineProperty(Chip.prototype, 'src', {
    get: function () {
      return this.src_xxxw74$_0.getValue_lrcp0p$(this, Chip$src_metadata);
    },
    set: function (src) {
      this.src_xxxw74$_0.setValue_9rddgb$(this, Chip$src_metadata, src);
    }
  });
  Chip.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Chip',
    interfaces: [MdlComponent]
  };
  var list = defineInlineFunction('School-Web-Project.components.list_tt4us9$', wrapFunction(function () {
    var List_init = _.components.List;
    var plus = _.plus_mh1xch$;
    return function ($receiver, cssClassId, init) {
      if (cssClassId === void 0)
        cssClassId = '';
      var list = new List_init(cssClassId);
      init(list);
      plus($receiver, list.mainElement);
      return list.mainElement;
    };
  }));
  function List(cssClassId) {
    if (cssClassId === void 0)
      cssClassId = '';
    MdlComponent.call(this, 'ul', 'mdl-list', cssClassId);
  }
  List.prototype.item_ccvxaz$ = function (listIem) {
    var tmp$ = this.mainElement;
    var $receiver = document.createElement('li');
    classType($receiver, 'mdl-list__item mdl-list__item--three-line');
    var classId = 'mdl-list__item-text-body';
    var $receiver_0 = document.createElement('span');
    classType($receiver_0, classId);
    var span = $receiver_0;
    span.textContent = listIem.primaryText;
    $receiver.append(span);
    plus(tmp$, $receiver);
  };
  List.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'List',
    interfaces: [MdlComponent]
  };
  function ListIem(primaryText) {
    this.primaryText = primaryText;
  }
  ListIem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListIem',
    interfaces: []
  };
  ListIem.prototype.component1 = function () {
    return this.primaryText;
  };
  ListIem.prototype.copy_61zpoe$ = function (primaryText) {
    return new ListIem(primaryText === void 0 ? this.primaryText : primaryText);
  };
  ListIem.prototype.toString = function () {
    return 'ListIem(primaryText=' + Kotlin.toString(this.primaryText) + ')';
  };
  ListIem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.primaryText) | 0;
    return result;
  };
  ListIem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.primaryText, other.primaryText))));
  };
  function MdlComponent(tag, classType_0, cssClassId) {
    if (cssClassId === void 0)
      cssClassId = '';
    var $receiver = document.createElement(tag);
    classType($receiver, cssClassId + ' ' + classType_0);
    this.mainElement = $receiver;
    this.backgroundColor_y0bvqr$_0 = null;
    this.textColor_4824s2$_0 = null;
  }
  Object.defineProperty(MdlComponent.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_y0bvqr$_0;
    },
    set: function (value) {
      if (value != null) {
        var tmp$;
        this.mainElement.setAttribute('class', ensureNotNull((tmp$ = this.mainElement.getAttribute('class')) != null ? tmp$ + (' ' + value) : null));
      }
    }
  });
  Object.defineProperty(MdlComponent.prototype, 'textColor', {
    get: function () {
      return this.textColor_4824s2$_0;
    },
    set: function (value) {
      if (value != null) {
        var tmp$;
        this.mainElement.setAttribute('class', ensureNotNull((tmp$ = this.mainElement.getAttribute('class')) != null ? tmp$ + (' ' + value) : null));
      }
    }
  });
  function MdlComponent$htmlPram$ObjectLiteral(closure$parent) {
    this.closure$parent = closure$parent;
    this.prop_0 = null;
  }
  MdlComponent$htmlPram$ObjectLiteral.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$;
    tmp$ = this.prop_0;
    if (tmp$ == null) {
      throw IllegalStateException_init('Property ' + property.callableName + ' should be initialized before get.');
    }
    return tmp$;
  };
  MdlComponent$htmlPram$ObjectLiteral.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    this.prop_0 = value;
    this.set_0(property.callableName, ensureNotNull(this.prop_0));
  };
  MdlComponent$htmlPram$ObjectLiteral.prototype.set_0 = function (name, value) {
    this.closure$parent.setAttribute(name, value.toString());
    if (equals(name, 'href'))
      this.closure$parent.setAttribute('target', '_blank');
  };
  MdlComponent$htmlPram$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ReadWriteProperty]
  };
  MdlComponent.prototype.htmlPram_gckoif$ = function (parent) {
    if (parent === void 0)
      parent = this.mainElement;
    return new MdlComponent$htmlPram$ObjectLiteral(parent);
  };
  function MdlComponent$htmlTextPram$ObjectLiteral(closure$parent, closure$text) {
    this.closure$parent = closure$parent;
    this.prop_0 = closure$text;
    this.set_0(this.prop_0);
  }
  MdlComponent$htmlTextPram$ObjectLiteral.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.prop_0;
  };
  MdlComponent$htmlTextPram$ObjectLiteral.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    this.prop_0 = value;
    this.set_0(this.prop_0);
  };
  MdlComponent$htmlTextPram$ObjectLiteral.prototype.set_0 = function (text) {
    this.closure$parent.textContent = text;
  };
  MdlComponent$htmlTextPram$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ReadWriteProperty]
  };
  MdlComponent.prototype.htmlTextPram_5ljwfj$ = function (text, parent) {
    if (text === void 0)
      text = '';
    if (parent === void 0)
      parent = this.mainElement;
    return new MdlComponent$htmlTextPram$ObjectLiteral(parent, text);
  };
  function MdlComponent$appendToMain$ObjectLiteral(this$MdlComponent, closure$initItem) {
    this.this$MdlComponent = this$MdlComponent;
    this.item = closure$initItem;
    this$MdlComponent.mainElement.append(this.item.mainElement);
  }
  MdlComponent$appendToMain$ObjectLiteral.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.item;
  };
  MdlComponent$appendToMain$ObjectLiteral.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    this.this$MdlComponent.mainElement.append(value.mainElement);
    this.item = value;
  };
  MdlComponent$appendToMain$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ReadWriteProperty]
  };
  MdlComponent.prototype.appendToMain_ejy5am$ = function (initItem) {
    return new MdlComponent$appendToMain$ObjectLiteral(this, initItem);
  };
  function MdlComponent$appendToMainIf$ObjectLiteral(closure$condition, this$MdlComponent, closure$initItem) {
    this.closure$condition = closure$condition;
    this.this$MdlComponent = this$MdlComponent;
    this.item = closure$initItem;
    if (closure$condition)
      this$MdlComponent.mainElement.append(this.item.mainElement);
  }
  MdlComponent$appendToMainIf$ObjectLiteral.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.item;
  };
  MdlComponent$appendToMainIf$ObjectLiteral.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    if (this.closure$condition) {
      this.this$MdlComponent.mainElement.append(value.mainElement);
      this.item = value;
    }
  };
  MdlComponent$appendToMainIf$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ReadWriteProperty]
  };
  MdlComponent.prototype.appendToMainIf_5my4t9$ = function (condition, initItem) {
    return new MdlComponent$appendToMainIf$ObjectLiteral(condition, this, initItem);
  };
  MdlComponent.prototype.unaryPlus_ejp6nk$ = function ($receiver) {
    this.mainElement.append($receiver);
  };
  MdlComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MdlComponent',
    interfaces: []
  };
  function grid($receiver, cssClassId, init) {
    if (cssClassId === void 0)
      cssClassId = '';
    var grid = new Grid(cssClassId);
    init(grid);
    $receiver.append(grid.mainElement);
    return grid.mainElement;
  }
  function Grid(cssClassId) {
    if (cssClassId === void 0)
      cssClassId = '';
    MdlComponent.call(this, 'div', 'mdl-grid', cssClassId);
  }
  Grid.prototype.cell_jop4ru$ = function (col, cssClassId, init) {
    if (cssClassId === void 0)
      cssClassId = '';
    if (!(col < 13)) {
      var message = 'column number ' + col + ' too high mdl-cell column range is 1 to 12';
      throw IllegalArgumentException_init(message.toString());
    }
    var $receiver = document.createElement('div');
    classType($receiver, cssClassId + ' mdl-cell mdl-cell--' + col + '-col');
    var div = $receiver;
    init(div);
    this.mainElement.append(div);
  };
  Grid.prototype.cellCard_oteltj$ = function (col, cssClassId, shadow, init) {
    if (cssClassId === void 0)
      cssClassId = '';
    if (shadow === void 0)
      shadow = Card$Shadow$DP2_getInstance();
    if (!(col < 13)) {
      var message = 'column number ' + col + ' too high mdl-cell column range is 1 to 12';
      throw IllegalArgumentException_init(message.toString());
    }
    var card = new Card(cssClassId + ' mdl-cell mdl-cell--' + col + '-col', shadow);
    init(card);
    this.mainElement.append(card.mainElement);
  };
  Grid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Grid',
    interfaces: [MdlComponent]
  };
  function content(title, cssClassId, body) {
    if (cssClassId === void 0)
      cssClassId = '';
    return new Content(title, cssClassId, body);
  }
  function Content(title, cssClassId, body) {
    if (cssClassId === void 0)
      cssClassId = '';
    MdlComponent.call(this, 'div', 'mdl-layout__content', cssClassId);
    this.title = title;
    body(this.mainElement);
  }
  Content.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Content',
    interfaces: [MdlComponent]
  };
  function MdlContent() {
  }
  MdlContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MdlContent',
    interfaces: []
  };
  function Drawer(cssClassId) {
    if (cssClassId === void 0)
      cssClassId = '';
    MdlComponent.call(this, 'div', 'mdl-layout__drawer', cssClassId);
  }
  Drawer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Drawer',
    interfaces: [LayoutTile, LayoutNav, MdlComponent]
  };
  function Header(cssClassId, transparent) {
    if (cssClassId === void 0)
      cssClassId = '';
    if (transparent === void 0)
      transparent = false;
    MdlComponent.call(this, 'header', transparent ? 'mdl-layout__header--transparent' : 'mdl-layout__header', cssClassId);
    this.headerRow_ckrckq$_0 = this.appendToMain_ejy5am$(new Header$HeaderRow());
    this.title_vo75z5$_0 = this.htmlTextPram_5ljwfj$(void 0, this.headerRow_0.layoutTitle.mainElement);
  }
  function Header$HeaderRow() {
    MdlComponent.call(this, 'div', 'mdl-layout__header-row');
    this.layoutTitle_f4v6sq$_0 = this.appendToMain_ejy5am$(new LayoutTitle());
  }
  var Header$HeaderRow$layoutTitle_metadata = new PropertyMetadata('layoutTitle');
  Object.defineProperty(Header$HeaderRow.prototype, 'layoutTitle', {
    get: function () {
      return this.layoutTitle_f4v6sq$_0.getValue_lrcp0p$(this, Header$HeaderRow$layoutTitle_metadata);
    }
  });
  Header$HeaderRow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HeaderRow',
    interfaces: [MdlComponent]
  };
  var Header$headerRow_metadata = new PropertyMetadata('headerRow');
  Object.defineProperty(Header.prototype, 'headerRow_0', {
    get: function () {
      return this.headerRow_ckrckq$_0.getValue_lrcp0p$(this, Header$headerRow_metadata);
    }
  });
  var Header$title_metadata = new PropertyMetadata('title');
  Object.defineProperty(Header.prototype, 'title', {
    get: function () {
      return this.title_vo75z5$_0.getValue_lrcp0p$(this, Header$title_metadata);
    },
    set: function (title) {
      this.title_vo75z5$_0.setValue_9rddgb$(this, Header$title_metadata, title);
    }
  });
  Header.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Header',
    interfaces: [MdlComponent]
  };
  function Layout(content, cssClassId) {
    if (cssClassId === void 0)
      cssClassId = '';
    MdlComponent.call(this, 'div', 'mdl-layout mdl-js-layout', cssClassId);
    this.content_ttdgsf$_0 = content;
    this.header = null;
  }
  Object.defineProperty(Layout.prototype, 'content', {
    get: function () {
      return this.content_ttdgsf$_0;
    },
    set: function (value) {
      var tmp$;
      this.content_ttdgsf$_0.content.mainElement.replaceWith(value.content.mainElement);
      this.content_ttdgsf$_0 = value;
      if ((tmp$ = this.header) != null) {
        tmp$.title = this.content_ttdgsf$_0.content.title;
      }
    }
  });
  Layout.prototype.header_jktz5e$ = function (cssClassId, fixed, transparent, init) {
    if (cssClassId === void 0)
      cssClassId = '';
    if (fixed === void 0)
      fixed = true;
    if (transparent === void 0)
      transparent = false;
    var tmp$;
    var header = new Header(cssClassId, transparent);
    init(header);
    if (fixed) {
      this.mainElement.setAttribute('class', ensureNotNull((tmp$ = this.mainElement.getAttribute('class')) != null ? tmp$ + ' mdl-layout--fixed-header' : null));
    }
    header.title = this.content.content.title;
    this.mainElement.append(header.mainElement);
    this.header = header;
  };
  Layout.prototype.drawer_pvsmkh$ = function (cssClass, fixed, init) {
    if (cssClass === void 0)
      cssClass = '';
    if (fixed === void 0)
      fixed = true;
    var tmp$;
    var drawer = new Drawer(cssClass);
    init(drawer);
    if (fixed) {
      this.mainElement.setAttribute('class', ensureNotNull((tmp$ = this.mainElement.getAttribute('class')) != null ? tmp$ + ' mdl-layout--fixed-drawer' : null));
    }
    this.mainElement.append(drawer.mainElement);
  };
  Layout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Layout',
    interfaces: [MdlComponent]
  };
  function LayoutNav() {
  }
  LayoutNav.prototype.nav_huf4ba$$default = function (cssClass, init) {
    var nav = new Nav(cssClass);
    init(nav);
    this.mainElement.append(nav.mainElement);
    return nav.mainElement;
  };
  LayoutNav.prototype.nav_huf4ba$ = function (cssClass, init, callback$default) {
    if (cssClass === void 0)
      cssClass = '';
    return callback$default ? callback$default(cssClass, init) : this.nav_huf4ba$$default(cssClass, init);
  };
  LayoutNav.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LayoutNav',
    interfaces: []
  };
  function Nav(cssClassId) {
    if (cssClassId === void 0)
      cssClassId = '';
    MdlComponent.call(this, 'nav', 'mdl-navigation', cssClassId);
  }
  Nav.prototype.link_g1rzco$ = function (init) {
    var link = new Nav$Link();
    init(link);
    this.mainElement.append(link.mainElement);
    if (link.materialIcons.length > 0)
      link.mainElement.append(materialIcon(link.materialIcons));
    link.mainElement.append(document.createTextNode(link.text));
  };
  function Nav$Link(cssClassId) {
    if (cssClassId === void 0)
      cssClassId = '';
    MdlComponent.call(this, 'a', 'mdl-navigation__link', cssClassId);
    this.href_rf7tue$_0 = this.htmlPram_gckoif$();
    this.materialIcons = '';
    this.text = '';
  }
  var Nav$Link$href_metadata = new PropertyMetadata('href');
  Object.defineProperty(Nav$Link.prototype, 'href', {
    get: function () {
      return this.href_rf7tue$_0.getValue_lrcp0p$(this, Nav$Link$href_metadata);
    },
    set: function (href) {
      this.href_rf7tue$_0.setValue_9rddgb$(this, Nav$Link$href_metadata, href);
    }
  });
  function Nav$Link$onClick$lambda(closure$doOn) {
    return function (f) {
      closure$doOn();
      return Unit;
    };
  }
  Nav$Link.prototype.onClick_o14v8n$ = function (doOn) {
    this.mainElement.addEventListener('click', Nav$Link$onClick$lambda(doOn));
  };
  Nav$Link.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Link',
    interfaces: [MdlComponent]
  };
  Nav.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Nav',
    interfaces: [MdlComponent]
  };
  function LayoutTile() {
  }
  LayoutTile.prototype.layoutTile_t2t2ot$$default = function (cssClassId, init) {
    var layoutTitle = new LayoutTitle(cssClassId);
    init(layoutTitle);
    this.mainElement.append(layoutTitle.mainElement);
    return layoutTitle.mainElement;
  };
  LayoutTile.prototype.layoutTile_t2t2ot$ = function (cssClassId, init, callback$default) {
    if (cssClassId === void 0)
      cssClassId = '';
    return callback$default ? callback$default(cssClassId, init) : this.layoutTile_t2t2ot$$default(cssClassId, init);
  };
  LayoutTile.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LayoutTile',
    interfaces: []
  };
  function LayoutTitle(cssClassId) {
    if (cssClassId === void 0)
      cssClassId = '';
    MdlComponent.call(this, 'span', 'mdl-layout-title', cssClassId);
    this.title_962pzi$_0 = this.htmlTextPram_5ljwfj$('');
  }
  var LayoutTitle$title_metadata = new PropertyMetadata('title');
  Object.defineProperty(LayoutTitle.prototype, 'title', {
    get: function () {
      return this.title_962pzi$_0.getValue_lrcp0p$(this, LayoutTitle$title_metadata);
    },
    set: function (title) {
      this.title_962pzi$_0.setValue_9rddgb$(this, LayoutTitle$title_metadata, title);
    }
  });
  LayoutTitle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LayoutTitle',
    interfaces: [MdlComponent]
  };
  function materialIcon(iconName) {
    var $receiver = document.createElement('i');
    $receiver.setAttribute('class', 'material-icons');
    $receiver.append(document.createTextNode(iconName));
    return $receiver;
  }
  var header = defineInlineFunction('School-Web-Project.header_ldvnw0$', wrapFunction(function () {
    var classType = _.classType_46n0ku$;
    return function ($receiver, classId, init) {
      if (classId === void 0)
        classId = '';
      var $receiver_0 = document.createElement('header');
      classType($receiver_0, classId);
      var header = $receiver_0;
      init(header);
      $receiver.append(header);
      return header;
    };
  }));
  var img = defineInlineFunction('School-Web-Project.img_xxj20k$', wrapFunction(function () {
    var Img_init = _.Img;
    return function ($receiver, classId, init) {
      if (classId === void 0)
        classId = '';
      var img = new Img_init(classId);
      init(img);
      $receiver.append(img.mainElement);
      return img.mainElement;
    };
  }));
  var img_0 = defineInlineFunction('School-Web-Project.img_emetj8$', wrapFunction(function () {
    var Img_init = _.Img;
    return function (classId, init) {
      if (classId === void 0)
        classId = '';
      var img = new Img_init(classId);
      init(img);
      return img.mainElement;
    };
  }));
  var div = defineInlineFunction('School-Web-Project.div_ldvnw0$', wrapFunction(function () {
    var classType = _.classType_46n0ku$;
    return function ($receiver, classId, init) {
      if (classId === void 0)
        classId = '';
      var $receiver_0 = document.createElement('div');
      classType($receiver_0, classId);
      var div = $receiver_0;
      init(div);
      $receiver.append(div);
      return div;
    };
  }));
  var b = defineInlineFunction('School-Web-Project.b_w0hmpq$', function ($receiver, init) {
    var b = document.createElement('b');
    init(b);
    $receiver.append(b);
    return b;
  });
  var h2 = defineInlineFunction('School-Web-Project.h2_ldvnw0$', wrapFunction(function () {
    var classType = _.classType_46n0ku$;
    return function ($receiver, classId, init) {
      if (classId === void 0)
        classId = '';
      var $receiver_0 = document.createElement('h2');
      classType($receiver_0, classId);
      var h2 = $receiver_0;
      init(h2);
      $receiver.append(h2);
      return h2;
    };
  }));
  var span = defineInlineFunction('School-Web-Project.span_ldvnw0$', wrapFunction(function () {
    var classType = _.classType_46n0ku$;
    return function ($receiver, classId, init) {
      if (classId === void 0)
        classId = '';
      var $receiver_0 = document.createElement('span');
      classType($receiver_0, classId);
      var span = $receiver_0;
      init(span);
      $receiver.append(span);
      return span;
    };
  }));
  var span_0 = defineInlineFunction('School-Web-Project.span_rvhpk0$', wrapFunction(function () {
    var classType = _.classType_46n0ku$;
    return function (classId, init) {
      if (classId === void 0)
        classId = '';
      var $receiver = document.createElement('span');
      classType($receiver, classId);
      var span = $receiver;
      init(span);
      return span;
    };
  }));
  function style($receiver, style) {
    $receiver.setAttribute('style', style);
  }
  function Img(cssClassId) {
    if (cssClassId === void 0)
      cssClassId = '';
    MdlComponent.call(this, 'img', cssClassId);
    this.src_b63wlb$_0 = this.htmlPram_gckoif$();
    this.width_6myhpd$_0 = this.htmlPram_gckoif$();
    this.height_1kmyc8$_0 = this.htmlPram_gckoif$();
    this.border_dqk7nh$_0 = this.htmlPram_gckoif$();
    this.alt_b6fiec$_0 = this.htmlPram_gckoif$();
  }
  var Img$src_metadata = new PropertyMetadata('src');
  Object.defineProperty(Img.prototype, 'src', {
    get: function () {
      return this.src_b63wlb$_0.getValue_lrcp0p$(this, Img$src_metadata);
    },
    set: function (src) {
      this.src_b63wlb$_0.setValue_9rddgb$(this, Img$src_metadata, src);
    }
  });
  var Img$width_metadata = new PropertyMetadata('width');
  Object.defineProperty(Img.prototype, 'width', {
    get: function () {
      return this.width_6myhpd$_0.getValue_lrcp0p$(this, Img$width_metadata);
    },
    set: function (width) {
      this.width_6myhpd$_0.setValue_9rddgb$(this, Img$width_metadata, width);
    }
  });
  var Img$height_metadata = new PropertyMetadata('height');
  Object.defineProperty(Img.prototype, 'height', {
    get: function () {
      return this.height_1kmyc8$_0.getValue_lrcp0p$(this, Img$height_metadata);
    },
    set: function (height) {
      this.height_1kmyc8$_0.setValue_9rddgb$(this, Img$height_metadata, height);
    }
  });
  var Img$border_metadata = new PropertyMetadata('border');
  Object.defineProperty(Img.prototype, 'border', {
    get: function () {
      return this.border_dqk7nh$_0.getValue_lrcp0p$(this, Img$border_metadata);
    },
    set: function (border) {
      this.border_dqk7nh$_0.setValue_9rddgb$(this, Img$border_metadata, border);
    }
  });
  var Img$alt_metadata = new PropertyMetadata('alt');
  Object.defineProperty(Img.prototype, 'alt', {
    get: function () {
      return this.alt_b6fiec$_0.getValue_lrcp0p$(this, Img$alt_metadata);
    },
    set: function (alt) {
      this.alt_b6fiec$_0.setValue_9rddgb$(this, Img$alt_metadata, alt);
    }
  });
  Img.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Img',
    interfaces: [MdlComponent]
  };
  function plus($receiver, element) {
    $receiver.append(element);
  }
  function classType($receiver, className) {
    $receiver.setAttribute('class', className);
  }
  function main$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.text = 'Foros';
    $receiver.materialIcons = 'forum';
    $receiver.href = 'forum.html';
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.text = 'Ingresar';
    $receiver.materialIcons = 'account_circle';
    $receiver.href = 'https://medium.com/lewisrhine';
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.text = 'Acerca de';
    $receiver.materialIcons = 'info';
    $receiver.href = 'https://github.com/lewisrhine';
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda($receiver) {
    $receiver.link_g1rzco$(main$lambda$lambda$lambda$lambda$lambda);
    $receiver.link_g1rzco$(main$lambda$lambda$lambda$lambda$lambda_0);
    $receiver.link_g1rzco$(main$lambda$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function main$lambda$lambda$lambda_0($receiver) {
    var $receiver_0 = $receiver.mainElement;
    var classId = 'drawer-header';
    var $receiver_1 = document.createElement('header');
    classType($receiver_1, classId);
    var header = $receiver_1;
    header.setAttribute('style', " background: url('images/whoiam.jpg') center / cover; padding: 10px;");
    $receiver_0.append(header);
    $receiver.nav_huf4ba$('navigation', main$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    $receiver.header_jktz5e$(Color_getInstance().primary, void 0, void 0, main$lambda$lambda$lambda);
    $receiver.drawer_pvsmkh$('drawer', void 0, main$lambda$lambda$lambda_0);
    return Unit;
  }
  function main$lambda($receiver) {
    $receiver.navigationLayout_d0ce5n$(MainPage_getInstance(), 'layout', main$lambda$lambda);
    return Unit;
  }
  function main(args) {
    var mdlApp_0 = mdlApp(main$lambda);
  }
  function Color() {
    Color_instance = this;
    this.primary = (new MdlColor$Background$pink(Shade$s800_getInstance())).toString();
    this.accent = (new MdlColor$Background$red(Shade$s400_getInstance())).toString();
  }
  Color.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Color',
    interfaces: []
  };
  var Color_instance = null;
  function Color_getInstance() {
    if (Color_instance === null) {
      new Color();
    }
    return Color_instance;
  }
  function Forums() {
    Forums_instance = this;
    this.content_6m6m6s$_0 = content('Foros', void 0, Forums$content$lambda);
  }
  Object.defineProperty(Forums.prototype, 'content', {
    get: function () {
      return this.content_6m6m6s$_0;
    }
  });
  function Forums$content$lambda($receiver) {
    $receiver.setAttribute('style', " background: url('images/whoiam.jpg') center / cover; filter: alpha(opacity=60); padding: 10px;");
    return Unit;
  }
  Forums.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Forums',
    interfaces: [MdlContent]
  };
  var Forums_instance = null;
  function Forums_getInstance() {
    if (Forums_instance === null) {
      new Forums();
    }
    return Forums_instance;
  }
  function MainPage() {
    MainPage_instance = this;
    this.content_vbbrue$_0 = content('Pagina Principal', void 0, MainPage$content$lambda(this));
  }
  Object.defineProperty(MainPage.prototype, 'content', {
    get: function () {
      return this.content_vbbrue$_0;
    }
  });
  function MainPage$createX$lambda(closure$images, closure$i, closure$titles, closure$supportingTexts) {
    return function ($receiver) {
      $receiver.size_vux9f0$();
      $receiver.image = new Card$Image(closure$images[closure$i]);
      $receiver.title = closure$titles[closure$i];
      $receiver.supportingText = closure$supportingTexts[closure$i];
      $receiver.button = new Card$Button('VER', Color_getInstance().accent);
      return Unit;
    };
  }
  MainPage.prototype.createX_0 = function ($receiver, lines, images, titles, supportingTexts) {
    var tmp$;
    tmp$ = lines * 6 | 0;
    for (var i = 0; i < tmp$; i++) {
      $receiver.cellCard_oteltj$(2, void 0, void 0, MainPage$createX$lambda(images, i, titles, supportingTexts));
    }
  };
  var Array_0 = Array;
  function MainPage$content$lambda$lambda(this$MainPage) {
    return function ($receiver) {
      var array = Array_0(20 * 6 | 0);
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        array[i] = 'images/laptop.jpg';
      }
      var images = array;
      var array_0 = Array_0(20 * 6 | 0);
      var tmp$_0;
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        array_0[i_0] = 'Rithmio';
      }
      var titles = array_0;
      var array_1 = Array_0(20 * 6 | 0);
      var tmp$_1;
      tmp$_1 = array_1.length - 1 | 0;
      for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
        array_1[i_1] = 'At Rithmio I Introduced new technologies like Kotlin and RxJava which have helped to make the team faster and more efficient.';
      }
      var supportingTexts = array_1;
      this$MainPage.createX_0($receiver, 20, images, titles, supportingTexts);
      return Unit;
    };
  }
  function MainPage$content$lambda(this$MainPage) {
    return function ($receiver) {
      grid($receiver, void 0, MainPage$content$lambda$lambda(this$MainPage));
      return Unit;
    };
  }
  MainPage.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MainPage',
    interfaces: [MdlContent]
  };
  var MainPage_instance = null;
  function MainPage_getInstance() {
    if (MainPage_instance === null) {
      new MainPage();
    }
    return MainPage_instance;
  }
  MdlColor$Background.blueGrey = MdlColor$Background$blueGrey;
  MdlColor$Background.red = MdlColor$Background$red;
  MdlColor$Background.pink = MdlColor$Background$pink;
  MdlColor$Background.purple = MdlColor$Background$purple;
  MdlColor$Background.deepPurple = MdlColor$Background$deepPurple;
  MdlColor$Background.indigo = MdlColor$Background$indigo;
  MdlColor$Background.blue = MdlColor$Background$blue;
  MdlColor$Background.lightBlue = MdlColor$Background$lightBlue;
  MdlColor$Background.cyan = MdlColor$Background$cyan;
  MdlColor$Background.teal = MdlColor$Background$teal;
  MdlColor$Background.green = MdlColor$Background$green;
  MdlColor$Background.lightGreen = MdlColor$Background$lightGreen;
  MdlColor$Background.lime = MdlColor$Background$lime;
  MdlColor$Background.yellow = MdlColor$Background$yellow;
  MdlColor$Background.amber = MdlColor$Background$amber;
  MdlColor$Background.orange = MdlColor$Background$orange;
  MdlColor$Background.deepOrange = MdlColor$Background$deepOrange;
  MdlColor$Background.brown = MdlColor$Background$brown;
  MdlColor$Background.grey = MdlColor$Background$grey;
  MdlColor$Background.white = MdlColor$Background$white;
  MdlColor$Background.black = MdlColor$Background$black;
  MdlColor.Background = MdlColor$Background;
  MdlColor$Text.blueGrey = MdlColor$Text$blueGrey;
  MdlColor$Text.red = MdlColor$Text$red;
  MdlColor$Text.pink = MdlColor$Text$pink;
  MdlColor$Text.purple = MdlColor$Text$purple;
  MdlColor$Text.deepPurple = MdlColor$Text$deepPurple;
  MdlColor$Text.indigo = MdlColor$Text$indigo;
  MdlColor$Text.blue = MdlColor$Text$blue;
  MdlColor$Text.lightBlue = MdlColor$Text$lightBlue;
  MdlColor$Text.cyan = MdlColor$Text$cyan;
  MdlColor$Text.teal = MdlColor$Text$teal;
  MdlColor$Text.green = MdlColor$Text$green;
  MdlColor$Text.lightGreen = MdlColor$Text$lightGreen;
  MdlColor$Text.lime = MdlColor$Text$lime;
  MdlColor$Text.yellow = MdlColor$Text$yellow;
  MdlColor$Text.amber = MdlColor$Text$amber;
  MdlColor$Text.orange = MdlColor$Text$orange;
  MdlColor$Text.deepOrange = MdlColor$Text$deepOrange;
  MdlColor$Text.brown = MdlColor$Text$brown;
  MdlColor$Text.grey = MdlColor$Text$grey;
  MdlColor$Text.white = MdlColor$Text$white;
  MdlColor$Text.black = MdlColor$Text$black;
  MdlColor.Text = MdlColor$Text;
  _.MdlColor = MdlColor;
  Object.defineProperty(ColorPalette, 'blueGrey', {
    get: ColorPalette$blueGrey_getInstance
  });
  Object.defineProperty(ColorPalette, 'red', {
    get: ColorPalette$red_getInstance
  });
  Object.defineProperty(ColorPalette, 'pink', {
    get: ColorPalette$pink_getInstance
  });
  Object.defineProperty(ColorPalette, 'purple', {
    get: ColorPalette$purple_getInstance
  });
  Object.defineProperty(ColorPalette, 'deepPurple', {
    get: ColorPalette$deepPurple_getInstance
  });
  Object.defineProperty(ColorPalette, 'indigo', {
    get: ColorPalette$indigo_getInstance
  });
  Object.defineProperty(ColorPalette, 'blue', {
    get: ColorPalette$blue_getInstance
  });
  Object.defineProperty(ColorPalette, 'lightBlue', {
    get: ColorPalette$lightBlue_getInstance
  });
  Object.defineProperty(ColorPalette, 'cyan', {
    get: ColorPalette$cyan_getInstance
  });
  Object.defineProperty(ColorPalette, 'teal', {
    get: ColorPalette$teal_getInstance
  });
  Object.defineProperty(ColorPalette, 'green', {
    get: ColorPalette$green_getInstance
  });
  Object.defineProperty(ColorPalette, 'lightGreen', {
    get: ColorPalette$lightGreen_getInstance
  });
  Object.defineProperty(ColorPalette, 'lime', {
    get: ColorPalette$lime_getInstance
  });
  Object.defineProperty(ColorPalette, 'yellow', {
    get: ColorPalette$yellow_getInstance
  });
  Object.defineProperty(ColorPalette, 'amber', {
    get: ColorPalette$amber_getInstance
  });
  Object.defineProperty(ColorPalette, 'orange', {
    get: ColorPalette$orange_getInstance
  });
  Object.defineProperty(ColorPalette, 'deepOrange', {
    get: ColorPalette$deepOrange_getInstance
  });
  Object.defineProperty(ColorPalette, 'brown', {
    get: ColorPalette$brown_getInstance
  });
  Object.defineProperty(ColorPalette, 'grey', {
    get: ColorPalette$grey_getInstance
  });
  Object.defineProperty(ColorPalette, 'white', {
    get: ColorPalette$white_getInstance
  });
  Object.defineProperty(ColorPalette, 'black', {
    get: ColorPalette$black_getInstance
  });
  _.ColorPalette = ColorPalette;
  Object.defineProperty(Shade, 's50', {
    get: Shade$s50_getInstance
  });
  Object.defineProperty(Shade, 's100', {
    get: Shade$s100_getInstance
  });
  Object.defineProperty(Shade, 's200', {
    get: Shade$s200_getInstance
  });
  Object.defineProperty(Shade, 's300', {
    get: Shade$s300_getInstance
  });
  Object.defineProperty(Shade, 's400', {
    get: Shade$s400_getInstance
  });
  Object.defineProperty(Shade, 's500', {
    get: Shade$s500_getInstance
  });
  Object.defineProperty(Shade, 's600', {
    get: Shade$s600_getInstance
  });
  Object.defineProperty(Shade, 's700', {
    get: Shade$s700_getInstance
  });
  Object.defineProperty(Shade, 's800', {
    get: Shade$s800_getInstance
  });
  Object.defineProperty(Shade, 's900', {
    get: Shade$s900_getInstance
  });
  _.Shade = Shade;
  _.mdlApp_2prw6t$ = mdlApp;
  _.MdlApp = MdlApp;
  var package$components = _.components || (_.components = {});
  package$components.card_s01urz$ = card;
  Object.defineProperty(Card$Shadow, 'DP2', {
    get: Card$Shadow$DP2_getInstance
  });
  Object.defineProperty(Card$Shadow, 'DP3', {
    get: Card$Shadow$DP3_getInstance
  });
  Object.defineProperty(Card$Shadow, 'DP4', {
    get: Card$Shadow$DP4_getInstance
  });
  Object.defineProperty(Card$Shadow, 'DP6', {
    get: Card$Shadow$DP6_getInstance
  });
  Object.defineProperty(Card$Shadow, 'DP8', {
    get: Card$Shadow$DP8_getInstance
  });
  Object.defineProperty(Card$Shadow, 'DP16', {
    get: Card$Shadow$DP16_getInstance
  });
  Card.Shadow = Card$Shadow;
  $$importsForInline$$['School-Web-Project'] = _;
  Card.Image = Card$Image;
  Card.Button = Card$Button;
  package$components.Card = Card;
  package$components.chip_pi6zr4$ = chip;
  Chip.ChipText = Chip$ChipText;
  Chip.ContactImage = Chip$ContactImage;
  package$components.Chip = Chip;
  _.plus_mh1xch$ = plus;
  package$components.list_tt4us9$ = list;
  package$components.List = List;
  package$components.ListIem = ListIem;
  package$components.MdlComponent = MdlComponent;
  var package$layout = package$components.layout || (package$components.layout = {});
  package$layout.grid_c2af0n$ = grid;
  package$layout.Grid = Grid;
  var package$navigationlayout = package$layout.navigationlayout || (package$layout.navigationlayout = {});
  package$navigationlayout.content_ra6vw2$ = content;
  package$navigationlayout.Content = Content;
  package$navigationlayout.MdlContent = MdlContent;
  package$navigationlayout.Drawer = Drawer;
  Header.HeaderRow = Header$HeaderRow;
  package$navigationlayout.Header = Header;
  package$navigationlayout.Layout = Layout;
  package$navigationlayout.LayoutNav = LayoutNav;
  Nav.Link = Nav$Link;
  package$navigationlayout.Nav = Nav;
  package$layout.LayoutTile = LayoutTile;
  package$layout.LayoutTitle = LayoutTitle;
  _.materialIcon_61zpoe$ = materialIcon;
  _.classType_46n0ku$ = classType;
  _.header_ldvnw0$ = header;
  _.img_xxj20k$ = img;
  _.img_emetj8$ = img_0;
  _.div_ldvnw0$ = div;
  _.b_w0hmpq$ = b;
  _.h2_ldvnw0$ = h2;
  _.span_ldvnw0$ = span;
  _.span_rvhpk0$ = span_0;
  _.style_46n0ku$ = style;
  _.Img = Img;
  var package$site = _.site || (_.site = {});
  package$site.main_kand9s$ = main;
  Object.defineProperty(package$site, 'Color', {
    get: Color_getInstance
  });
  var package$pages = package$site.pages || (package$site.pages = {});
  Object.defineProperty(package$pages, 'Forums', {
    get: Forums_getInstance
  });
  Object.defineProperty(package$pages, 'MainPage', {
    get: MainPage_getInstance
  });
  Drawer.prototype.nav_huf4ba$$default = LayoutNav.prototype.nav_huf4ba$$default;
  Drawer.prototype.layoutTile_t2t2ot$$default = LayoutTile.prototype.layoutTile_t2t2ot$$default;
  Drawer.prototype.nav_huf4ba$ = LayoutNav.prototype.nav_huf4ba$;
  Drawer.prototype.layoutTile_t2t2ot$ = LayoutTile.prototype.layoutTile_t2t2ot$;
  main([]);
  Kotlin.defineModule('School-Web-Project', _);
  return _;
}(typeof this['School-Web-Project'] === 'undefined' ? {} : this['School-Web-Project'], kotlin);
