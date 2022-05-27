(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{565:function(e,a,v){"use strict";v.r(a);var _=v(18),t=Object(_.a)({},(function(){var e=this,a=e.$createElement,v=e._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"typescript在项目开发中的实践心得"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#typescript在项目开发中的实践心得"}},[e._v("#")]),e._v(" TypeScript在项目开发中的实践心得")]),e._v(" "),v("blockquote",[v("p",[e._v("Typescript实践经验分享")])]),e._v(" "),v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),v("p",[e._v("从"),v("code",[e._v("2020年")]),e._v("年底的时候，我开始使用"),v("code",[e._v("Typescript")]),e._v("进行项目的开发。期间团队也开始转向"),v("code",[e._v("Typescript")]),e._v("。")]),e._v(" "),v("p",[e._v("在这期间，做过很多尝试，也阅读过一些优质的文章和源码。现如今，大多数开源项目都将"),v("code",[e._v("Typescript")]),e._v("做为开发的主力军。")]),e._v(" "),v("p",[e._v("在这期间，我查阅的大多数文章都是在进行一个"),v("code",[e._v("Typescript")]),e._v("的基础使用，开发实践这一块更是少之又少，少有的一些干货文啃起来也非常的不过瘾。")]),e._v(" "),v("p",[e._v("相信在读的各位收藏夹里面已经有很多份学习"),v("code",[e._v("Typescript")]),e._v("的小文章都在吃灰，看了一遍但到了项目中依旧无从下手，该如何去进行开发？")]),e._v(" "),v("p",[e._v("独乐乐不如众乐乐，本篇文章就从开发的角度来聊聊，探讨下"),v("code",[e._v("Typescript")]),e._v("在真实项目中开发的实践心得和开发体验。")]),e._v(" "),v("p",[e._v("当你看完文章时，我建议先思考团队是否需要"),v("code",[e._v("Typescript")]),e._v("。以及"),v("code",[e._v("Typescript")]),e._v("是否可以解决当前项目生产的困境。")]),e._v(" "),v("h2",{attrs:{id:"必知必会的特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#必知必会的特性"}},[e._v("#")]),e._v(" 必知必会的特性")]),e._v(" "),v("p",[e._v("在"),v("code",[e._v("TypeScript")]),e._v("中，有一些好用的"),v("code",[e._v("特性")]),e._v("和"),v("code",[e._v("功能")]),e._v("对于日常开发来说是比较常见的。下面就罗列一些较为实用的知识点作为一个小小的备忘录。")]),e._v(" "),v("h3",{attrs:{id:"readonly"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#readonly"}},[e._v("#")]),e._v(" Readonly")]),e._v(" "),v("p",[e._v("有了"),v("code",[e._v("Readonly")]),e._v("，可以声明更加严谨的可读属性，亦或者变量。")]),e._v(" "),v("p",[e._v("在"),v("code",[e._v("ES6")]),e._v("当中，可以通过"),v("code",[e._v("const")]),e._v("进行常量量声明，切声明后不可修改，如果进行修改的话会直接"),v("code",[e._v("Cannot assign to 'a' because it is a constant.")]),e._v("进行异常抛错。")]),e._v(" "),v("p",[e._v("虽然不能更改整个值，但是如果值是一个引用类型的话，依旧可以对其内部的属性进行修改。那么从"),v("code",[e._v("只读")]),e._v("的概念上来说，显然不具备当前的能力。")]),e._v(" "),v("p",[e._v("而使用"),v("code",[e._v("Typescript")]),e._v("当中的"),v("code",[e._v("readonly")]),e._v("关键字对属性或者是变量进行声明，那么将会在编译时就发出告警。那么在声明部分")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202112171729273.png",alt:"图片"}})]),e._v(" "),v("h3",{attrs:{id:"条件类型-conditional-type"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#条件类型-conditional-type"}},[e._v("#")]),e._v(" 条件类型(Conditional Type)")]),e._v(" "),v("p",[e._v("如果你不知道条件类型，那么来看一段"),v("code",[e._v("@vue/reactivity")]),e._v("中的代码吧。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("export type DeepReadonly<T> = T extends Builtin\n  ? T\n  : T extends Map<infer K, infer V>\n    ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>\n    : T extends ReadonlyMap<infer K, infer V>\n      ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>\n      : T extends WeakMap<infer K, infer V>\n          ......\n")])])]),v("p",[e._v("其中"),v("code",[e._v("DeepReadonly")]),e._v("通过"),v("code",[e._v("extends")]),e._v("的方式继承父类然后通过"),v("code",[e._v("? :")]),e._v("表达式来进行一个"),v("code",[e._v("类型三目运算符")]),e._v("的操作进行一个类型的条件判断。")]),e._v(" "),v("p",[e._v("通过一个简单的案例来进行理解，当泛型"),v("code",[e._v("T")]),e._v("为"),v("code",[e._v("string")]),e._v("类型的时候，那么"),v("code",[e._v("B")]),e._v("为"),v("code",[e._v("1")]),e._v("，反之为"),v("code",[e._v("2")]),e._v("。可以看到同样的一个类型，因为传入的"),v("code",[e._v("泛型T")]),e._v("不一样，结果自然而然的有了出入。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202112171728065.png",alt:"图片"}})]),e._v(" "),v("h3",{attrs:{id:"namespace"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#namespace"}},[e._v("#")]),e._v(" namespace")]),e._v(" "),v("p",[v("code",[e._v("命名空间(namespace)")]),e._v("是一个比较常见的东西，它常用于组织一份类型区域防止类型之间的重命名冲突，需要配置 "),v("code",[e._v("declare")]),e._v(" 输出到外部环境才能够使用，非常便捷的在于使用"),v("code",[e._v("declare namespace")]),e._v("在工程项目中可以不需要引入任何类型而直接可以访问。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202112171729106.png",alt:"图片"}})]),e._v(" "),v("h3",{attrs:{id:"declare"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#declare"}},[e._v("#")]),e._v(" declare")]),e._v(" "),v("p",[v("code",[e._v("declare")]),e._v("是用于声明形式存在的。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("declare var/let/const")]),e._v("用来声明全局的变量。")]),e._v(" "),v("li",[v("code",[e._v("declare function")]),e._v(" 用来声明全局方法(函数)")]),e._v(" "),v("li",[v("code",[e._v("declare class")]),e._v(" 用来声明全局类")]),e._v(" "),v("li",[v("code",[e._v("declare namespace")]),e._v(" 用来声明命名空间")]),e._v(" "),v("li",[v("code",[e._v("declare module")]),e._v(" 用来声明模块")]),e._v(" "),v("li",[v("code",[e._v("...")])])]),e._v(" "),v("p",[e._v("在这里需要注意的是"),v("code",[e._v("Global augmentations have the same behavior and limits as module augmentations.")])]),e._v(" "),v("p",[e._v("Declaration Merging")]),e._v(" "),v("p",[e._v("什么意思呢？")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202112171730030.png",alt:"图片"}})]),e._v(" "),v("p",[e._v("大体上翻译成大白话就是:")]),e._v(" "),v("blockquote",[v("p",[v("code",[e._v("declare")]),e._v("与"),v("code",[e._v("declare global")]),e._v("它们功能是一样的。在"),v("code",[e._v("d.ts")]),e._v("中，使用"),v("code",[e._v("declare")]),e._v("与"),v("code",[e._v("declare global")]),e._v("两个作用是相等的。")])]),e._v(" "),v("p",[e._v("因此，在"),v("code",[e._v("d.ts")]),e._v("进行"),v("code",[e._v("declare")]),e._v("，它默认是全局的，在使用"),v("code",[e._v("declare global")]),e._v("显得有点画蛇添足了。")]),e._v(" "),v("p",[e._v("那么什么时候使用"),v("code",[e._v("declare")]),e._v(", 又什么时候使用"),v("code",[e._v("declare global")]),e._v("？")]),e._v(" "),v("blockquote",[v("p",[e._v("在模块文件中定义"),v("code",[e._v("declare")]),e._v("，如果想要用作全局就可以使用"),v("code",[e._v("declare global")]),e._v("完成该需求。")])]),e._v(" "),v("p",[e._v("那么，可以来看个🌰栗子，看完之后就大体上懂了，都是一些比较常见的实例。")]),e._v(" "),v("ul",[v("li",[e._v("在使用"),v("code",[e._v("TypeScript")]),e._v("开发的时候想为一些"),v("code",[e._v("API")]),e._v("添加一些自定义的属性，或者进行一些覆盖。")]),e._v(" "),v("li",[e._v("在使用"),v("code",[e._v("vue")]),e._v("的时候，通过"),v("code",[e._v("import")]),e._v("引入的"),v("code",[e._v("vue")]),e._v("组件大多会提示错误。")])]),e._v(" "),v("p",[e._v("如何解决？")]),e._v(" "),v("p",[e._v("可以通过对模块的定义来进行"),v("code",[e._v(".vue")]),e._v("文件模块进行一个"),v("code",[e._v("declare module")]),e._v("在内部可以将其"),v("code",[e._v("export")]),e._v("为相关类型。在这里"),v("code",[e._v("vue2")]),e._v("和"),v("code",[e._v("vue3")]),e._v("不太一样。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("declare module '*.vue' {\n    ///\n    export ...\n}\n")])])]),v("h3",{attrs:{id:"模块类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模块类型"}},[e._v("#")]),e._v(" 模块类型")]),e._v(" "),v("p",[e._v("在渐进式的过程中，很多代码和包都可能没有对应的"),v("code",[e._v(".d.ts")]),e._v("。因此需要对部分文件进行"),v("code",[e._v(".d.ts")]),e._v("的类型文件编写，那么，你真的知道"),v("code",[e._v("ES Module")]),e._v(" 和 "),v("code",[e._v("CommonJS Module")]),e._v("之间的导入吗？")]),e._v(" "),v("p",[v("code",[e._v("ES Module")]),e._v("的引入方式大家都知道，但是如何对其声明"),v("code",[e._v(".d.ts")]),e._v("，就看下面这个用例。")]),e._v(" "),v("p",[e._v("我对"),v("code",[e._v("config/index.js")]),e._v("创建了一个"),v("code",[e._v("index.d.ts")]),e._v("作为其声明文件，并且导出了"),v("code",[e._v("config")]),e._v("对象。那么，我如何将类型提供给引入方呢？")]),e._v(" "),v("p",[e._v("首先，知道"),v("code",[e._v("index.js")]),e._v("导出是一个对象，那么"),v("code",[e._v("declare const")]),e._v("一个类型出来，然后通过"),v("code",[e._v("export = config")]),e._v("的形式对导出进行声明。那么在通过"),v("code",[e._v("import { xxx } from '@/config")]),e._v("就可以获悉具体的类型了。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("declare const config: BaseConfig & EnvConfig\n\nexport = config\n")])])]),v("p",[e._v("如图，"),v("code",[e._v("baseApi")]),e._v("拥有了"),v("code",[e._v("HTTP")]),e._v(" ｜ "),v("code",[e._v("HTTPS")]),e._v("的类型。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202112171730067.png",alt:"图片"}})]),e._v(" "),v("h3",{attrs:{id:"模板字符串类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模板字符串类型"}},[e._v("#")]),e._v(" 模板字符串类型")]),e._v(" "),v("p",[e._v("模板字符串是一个非常有意思的东西，它能够对文本进行一定程度上的约束，如上面"),v("code",[e._v("baseApi")]),e._v("在项目中被定义为了"),v("code",[e._v("HTTP | HTTPS")]),e._v("的类型。约定当前值中必须包含"),v("code",[e._v("http://")]),e._v("或者是"),v("code",[e._v("https://")]),e._v("才算校验成功。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("// global.d.ts\ndeclare type HTTP = `http://${string}`\ndeclare type HTTPS = `https://${string}`\n\n// @/config/index.d.ts\ntype baseApi = HTTP | HTTPS\n")])])]),v("p",[e._v("同样的，在使用"),v("code",[e._v("dva")]),e._v("中，也可以利用特性对"),v("code",[e._v("type")]),e._v("进行"),v("code",[e._v("namespace")]),e._v("和"),v("code",[e._v("action")]),e._v("的组合，这样在写"),v("code",[e._v("dispatch")]),e._v("时，可以有一定的提示和约束能力。")]),e._v(" "),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("p",[e._v("想看更多实践可以看"),v("code",[e._v("ssh")]),e._v("的TypeScript 4.1 新特性：字符串模板类型，Vuex 终于有救了？这篇文章深入一下。")]),e._v(" "),v("h3",{attrs:{id:"函数重载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#函数重载"}},[e._v("#")]),e._v(" 函数重载")]),e._v(" "),v("p",[v("code",[e._v("函数重载")]),e._v("是一个非常常用的特性，它大多数用于多态函数。大多数同学可能都不怎么使用。但是它能够定义不同的参数类型。需要有"),v("code",[e._v("多个重载签名")]),e._v("和一个"),v("code",[e._v("实现签名")]),e._v("。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("重载签名")]),e._v("：就是对参数形式的不同书写，可以定义多种模式。")]),e._v(" "),v("li",[v("code",[e._v("实现签名")]),e._v("：对函数内部方法的具体实现。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("h3",{attrs:{id:"getter-setter"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#getter-setter"}},[e._v("#")]),e._v(" getter/setter")]),e._v(" "),v("p",[v("code",[e._v("get/set存取器")]),e._v("是在"),v("code",[e._v("class")]),e._v("当中比较实用的一个功能，它保证了类中变量的私有化。在外部时时不能直接对其更改的，如果大家了解"),v("code",[e._v("javaBean")]),e._v("的话理解起来并不是很困难。")]),e._v(" "),v("p",[e._v("在"),v("code",[e._v("class")]),e._v("中声明一个带"),v("code",[e._v("_")]),e._v("下标的变量，那么就可以通过"),v("code",[e._v("get")]),e._v("， "),v("code",[e._v("set")]),e._v("对其进行设置值。")]),e._v(" "),v("p",[e._v("在实例中当我们调用"),v("code",[e._v(".name")]),e._v("的时候，其实本身就是调用了其"),v("code",[e._v("get")]),e._v("的方式，而设置值时，则是调用"),v("code",[e._v("set")]),e._v("方法，")]),e._v(" "),v("blockquote",[v("p",[e._v("需要注意的是，"),v("code",[e._v("._name")]),e._v("值也输出了，但是"),v("code",[e._v("TypeScript")]),e._v("会进行提示你"),v("code",[e._v("._name是私有的")]),e._v("不允许你访问。")])]),e._v(" "),v("h2",{attrs:{id:"枚举"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#枚举"}},[e._v("#")]),e._v(" 枚举")]),e._v(" "),v("p",[e._v("对于"),v("code",[e._v("typescript")]),e._v("思想来说，("),v("code",[e._v("enum")]),e._v(")是对代码具有侵入式的，它的实现方式可以看其编译成"),v("code",[e._v("javascript")]),e._v("后的代码。")]),e._v(" "),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("p",[e._v("枚举("),v("code",[e._v("enum")]),e._v(")的使用场景在于可以定义部分行为和状态。通过一个🌰可以来看下：")]),e._v(" "),v("p",[e._v("对其某个任务的行为定义在枚举当中，这样做可以进行一些状态复用，避免在页面写太多"),v("code",[e._v("status === 1")]),e._v("的代码，因为没人知道"),v("code",[e._v("1")]),e._v("代表什么，有什么含义，不利于维护。")]),e._v(" "),v("p",[e._v("将其定义成"),v("code",[e._v("enum")]),e._v("的标注用于标识状态，如："),v("code",[e._v("status === Status.START")]),e._v("。")]),e._v(" "),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("p",[e._v("枚举可以看一篇阿宝哥的小文章一文让你彻底掌握 TS 枚举")]),e._v(" "),v("h2",{attrs:{id:"泛型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#泛型"}},[e._v("#")]),e._v(" 泛型")]),e._v(" "),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("p",[e._v("泛型是"),v("code",[e._v("TypeScript")]),e._v("当中必知必会的一个属性，在很多的时候，类型推导在开始时很难进行推倒。相比于使用 any 类型，使用泛型来创建可复用的组件要更好，因为泛型会保留参数类型。")]),e._v(" "),v("blockquote",[v("p",[v("code",[e._v("泛型")]),e._v("很多时候作用于对一个类型的多种形态定义，能够非常灵活的对一个类型进行定义和延伸推导。")])]),e._v(" "),v("p",[e._v("那么，来看几个比较简单的实例")]),e._v(" "),v("h3",{attrs:{id:"简单的泛型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单的泛型"}},[e._v("#")]),e._v(" 简单的泛型")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("type Generics<T> = {\n    name: string\n    age: number\n    sex: T\n}\n\ninterface Generics<T> {\n    name: string\n    age: number\n    sex: T\n}\n")])])]),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("h3",{attrs:{id:"简单的函数泛型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单的函数泛型"}},[e._v("#")]),e._v(" 简单的函数泛型")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("function setSex<T> (sex: T) {\n}\n\nsetSex<'男'>('女')\n")])])]),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("h3",{attrs:{id:"泛型类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#泛型类"}},[e._v("#")]),e._v(" 泛型类")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("class Person<T> {\n    private sex: T;\n    constructor(readonly type: T) { \n        this.sex = type; \n    }\n}\n\nconst person = new Person<'男'>('女')\n")])])]),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("blockquote",[v("p",[e._v("对于"),v("code",[e._v("泛型")]),e._v("的实践来说，使用是需要一定理解，复杂的"),v("code",[e._v("泛型")]),e._v("使用会非常的复杂。")])]),e._v(" "),v("h2",{attrs:{id:"工具类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#工具类型"}},[e._v("#")]),e._v(" 工具类型")]),e._v(" "),v("p",[v("code",[e._v("TypeScript")]),e._v("当中也提供了一些非常好用的工具类型，能够配合我们更好的使用工具类型。")]),e._v(" "),v("h3",{attrs:{id:"readonly-partial"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#readonly-partial"}},[e._v("#")]),e._v(" Readonly & Partial")]),e._v(" "),v("p",[v("code",[e._v("Readonly")]),e._v("可以将类型转换为只读对象，使用方式是"),v("code",[e._v("Readonly<T>")]),e._v("。")]),e._v(" "),v("p",[e._v("一个实栗立即了解：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("interface Person{\n    name: string;\n}\ntype Person2 = Readonly<Person>;\n\nconst a: Person2 = {\n    name: 'wangly19'\n}\n\nconst b: Person = {\n    name: 'wangly19'\n}\n\na.name = 'wangly19 new'\nb.name = 'wangly19 new'\n")])])]),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("h3",{attrs:{id:"record"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#record"}},[e._v("#")]),e._v(" Record")]),e._v(" "),v("p",[v("code",[e._v("Record")]),e._v("能够快速创建对象类型。它的使用方式是"),v("code",[e._v("Record<K, V>")]),e._v("，能够快速的为"),v("code",[e._v("object")]),e._v("创建统一的"),v("code",[e._v("key")]),e._v("和"),v("code",[e._v("value")]),e._v("类型。")]),e._v(" "),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("h3",{attrs:{id:"pick-omit"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pick-omit"}},[e._v("#")]),e._v(" Pick & Omit")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("Pick")]),e._v("：主要作用是从一组属性中拿出某个属性，并将其返回，那么先来看一下实例。")])]),e._v(" "),v("p",[v("code",[e._v("Pick")]),e._v("的使用方法是"),v("code",[e._v("Pick<P, K>")]),e._v("，如（P）类型中拥有"),v("code",[e._v("name")]),e._v(","),v("code",[e._v("age")]),e._v(","),v("code",[e._v("desc")]),e._v("三个属性，那么"),v("code",[e._v("K")]),e._v("为 "),v("code",[e._v("name")]),e._v("则最终将取到只有"),v("code",[e._v("name")]),e._v("的属性，其他的将会被排出。")]),e._v(" "),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("Omit")]),e._v("：主要作用是从一组属性中排除某个属性，并将排除属性后的结果返回。")])]),e._v(" "),v("p",[v("code",[e._v("Omit")]),e._v("的使用方法是"),v("code",[e._v("Omit<P, K>")]),e._v("，与"),v("code",[e._v("Pick")]),e._v("的结果是相反的，如果说"),v("code",[e._v("Pick")]),e._v("是取出，那么"),v("code",[e._v("Omit")]),e._v("则是过滤的效果，具体可以看下面的案例。")]),e._v(" "),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("h3",{attrs:{id:"exclude-extract"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#exclude-extract"}},[e._v("#")]),e._v(" Exclude & Extract")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("Exclude")]),e._v("：从一个联合类型中排除掉属于另一个联合类型的子集")])]),e._v(" "),v("p",[e._v("来看下，"),v("code",[e._v("Exclude")]),e._v("使用形式是"),v("code",[e._v("Exclude<T, S>")]),e._v("，如果"),v("code",[e._v("T")]),e._v("中的属性在"),v("code",[e._v("S")]),e._v("不存在那么就会返回。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("interface A {\n    show: boolean,\n    hidden: boolean,\n    status: string\n}\n\ninterface B {\n    show: boolean,\n    name: string\n}\n\ntype outPut = Exclude<keyof A, keyof B>\n")])])]),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("Extract")]),e._v("：跟Exclude相反，从从一个联合类型中取出属于另一个联合类型的子集")])]),e._v(" "),v("p",[e._v("举一反三，如果"),v("code",[e._v("Exclude")]),e._v("是取差集，那么"),v("code",[e._v("Extract")]),e._v("就是取交集。会返回两个"),v("code",[e._v("联合类型")]),e._v("中相同的部分。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("interface A {\n    show: boolean,\n    hidden: boolean,\n    status: string\n}\n\ninterface B {\n    show: boolean,\n    name: string\n}\n\ntype outPut = Extract<keyof A, keyof B>\n")])])]),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("h3",{attrs:{id:"partial"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#partial"}},[e._v("#")]),e._v(" Partial")]),e._v(" "),v("p",[v("code",[e._v("Partial")]),e._v("是一个将类型转为可选类型的工具，对于不明确的类型来说，需要将所有的属性转化为可选的"),v("code",[e._v("?.")]),e._v("形式，转换成为可选的属性类型。")]),e._v(" "),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("h3",{attrs:{id:"其他"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[e._v("#")]),e._v(" 其他")]),e._v(" "),v("p",[v("code",[e._v("TypeScript")]),e._v("的工具类型有很多，不只是官方提供，在日常实践中，也会定义非常多的工具类型。那么在了解工具类型的同时，更多的是知晓这些工具类型是如何来的，怎么实现。")]),e._v(" "),v("p",[e._v("相信我，当你弄懂后，你对于使用"),v("code",[e._v("Typescript")]),e._v("会有一个新的认识，写起来会更加的得心应手。")]),e._v(" "),v("h2",{attrs:{id:"实践场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实践场景"}},[e._v("#")]),e._v(" 实践场景")]),e._v(" "),v("p",[e._v("看完了太多的理论东西，那么来看看在日常实践中是如何真实实践一把呢?")]),e._v(" "),v("h3",{attrs:{id:"dva的实践"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dva的实践"}},[e._v("#")]),e._v(" Dva的实践")]),e._v(" "),v("p",[e._v("如果使用过"),v("code",[e._v("Dva")]),e._v("开发的朋友可能知道，"),v("code",[e._v("dispatch")]),e._v("的类型提示非常的艰难，因此，在开发的时候重新定义了"),v("code",[e._v("Dispatch")]),e._v("的类型，用来做一些主动的类型提示。")]),e._v(" "),v("p",[e._v("对于"),v("code",[e._v("Modal")]),e._v("的类型作为一些基本定义，然后对"),v("code",[e._v("DvaDispatch")]),e._v("进行部分的注入和推导。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("type")]),e._v("拥有"),v("code",[e._v("modal")]),e._v("中"),v("code",[e._v("namespace")]),e._v("和"),v("code",[e._v("effects & reducers")]),e._v("的类型推导。")]),e._v(" "),v("li",[v("code",[e._v("Promise")]),e._v("返回值的主动暴露。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("ul",[v("li",[e._v("如何使用？")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("// 方案一\nconst dispatch: DvaDispatch<DeskTopModel> = useDispatch();\n\ndispatch<null>({\n    ...\n})\n\n// 方案二\ndispatch<DeskTopModel, null>({\n    ...\n})\n")])])]),v("p",[e._v("那么"),v("code",[e._v("DeskTopModel")]),e._v("是什么呢？")]),e._v(" "),v("p",[e._v("没错，就是"),v("code",[e._v("model")]),e._v("的类型声明，在其中，对每一项"),v("code",[e._v("effects")]),e._v("和"),v("code",[e._v("reducers")]),e._v("都进行详细的定义，根据这些信息就可以推导出当前"),v("code",[e._v("type")]),e._v("的类型了。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("export interface DeskTopModel {\n  namespace: 'desktop',\n  state: DeskTopModelState,\n  effects: {\n    getTableSourceData: Effect\n  },\n  reducers: {\n    saveTableData: Reducer<DeskTopModelState>\n  }\n}\n")])])]),v("p",[e._v("对于"),v("code",[e._v("Dva")]),e._v("来说，很多时候都需要在"),v("code",[e._v("Effect")]),e._v("后做某事，这个时候有两个方式，一是"),v("code",[e._v("callback")]),e._v("，另外一个就是"),v("code",[e._v("Promise")]),e._v("回调。")]),e._v(" "),v("p",[e._v("而通过"),v("code",[e._v("Promise")]),e._v("方式，进行返回值的推导可以让使用"),v("code",[e._v("dispatch")]),e._v("拥有返回类型的能力。")]),e._v(" "),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("h4",{attrs:{id:"dva-dispatch"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dva-dispatch"}},[e._v("#")]),e._v(" Dva Dispatch")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("/**\n * ActionType， 推导当前effect & reducer\n * @default string\n */\ntype ActionType<M extends Model | string> = M extends Model ? \n`${M['namespace']}/${(keyof M['effects'] | keyof M['reducers']) & string}` : \nstring\n\n\n/**\n * dvaDispatch新增类型\n * @example\n * dispatch: DvaDispatch<Store>\n */\nexport type DvaDispatch<S = void> = <T = undefined, R = undefined>(action: {\n  type: ActionType<\n    S extends Model \n      ? S \n        : T extends Model \n          ? T \n            : string>,\n  payload?: any\n  loading?: boolean,\n  toast?: Taro.showToast.Option\n  [key: string]: any\n}) => \nT extends Model \n  ? R extends undefined \n    ? undefined \n      : Promise<R> \n        : T extends undefined \n          ? undefined \n            : Promise<T>\n")])])]),v("h3",{attrs:{id:"service-response-实践"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#service-response-实践"}},[e._v("#")]),e._v(" Service Response 实践")]),e._v(" "),v("p",[v("code",[e._v("Service Response")]),e._v("是什么？")]),e._v(" "),v("p",[e._v("在于后端通信时，会返回很多的数据，那么在使用"),v("code",[e._v("TypeScript")]),e._v("的时候怎么去定义这些类型呢？又怎么在团队协作中进行合作呢？")]),e._v(" "),v("p",[e._v("在大部分实验当中，我们是这样做的。")]),e._v(" "),v("h4",{attrs:{id:"创建api命名空间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建api命名空间"}},[e._v("#")]),e._v(" 创建API命名空间")]),e._v(" "),v("p",[e._v("绝大多数数据，都是存放在"),v("code",[e._v("API")]),e._v("的命名空间当中。它的目录如下：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("-- index.d.ts\n-- api1.d.ts\n-- api2.d.ts\n-- api3.d.ts\n...\n")])])]),v("p",[e._v("团队协作当中，"),v("code",[e._v("index.d.ts")]),e._v("多数为公共类型。而其他文件中的则是模块类型。举个例子，"),v("code",[e._v("Request")]),e._v("的返回类型。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("declare namespace API {\n  type commonResult<T = any> = {\n    data: T,\n    code: string,\n    showMessage: false | {\n      method: 'message' | 'notification',\n      type: 'success' | 'error' | 'info' | 'warning',\n      message: string,\n      description?: string\n    }\n  }\n}\n")])])]),v("p",[e._v("而对应请求方案配置则对应相应的"),v("code",[e._v("api")]),e._v("文件。")]),e._v(" "),v("p",[e._v("如"),v("code",[e._v("home.ts")]),e._v("声明了"),v("code",[e._v("配置转请求函数")]),e._v("的方式。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("// #home.ts\nmodule.exports = {\n  getVisualizationListApi: 'GET /service-admin/v1/visualization/table/list'\n  addVisualizationItemApi: 'GET /service-admin/v1/visualization/table/add'\n}\n")])])]),v("p",[e._v("然后对应的在"),v("code",[e._v("types")]),e._v("下声明一个新的"),v("code",[e._v(".d.ts")]),e._v("类型声明文件。比如："),v("code",[e._v("home.ts")]),e._v("对应"),v("code",[e._v("home.d.ts")]),e._v("。")]),e._v(" "),v("p",[e._v("那么在多人协作下，每个人负责的模块本身来说都不会冲突。在项目迭代管理中，大多数都是一个人对应一个小模块的开发节奏，彼此不会有太大的重复。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("// #home.d.ts\n\ndeclare namespace API {\n  type VisualizationListResponse = {}\n  type VisualizationActionResponse = {}\n}\n")])])]),v("blockquote",[v("p",[e._v("所有的"),v("code",[e._v("declare namespace API")]),e._v("都会合并。在"),v("code",[e._v("namespace")]),e._v("之间依旧可以使用API.xx(其他模块的type)来结合声明类型。")])]),e._v(" "),v("h4",{attrs:{id:"如何使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[e._v("#")]),e._v(" 如何使用？")]),e._v(" "),v("p",[e._v("在进行"),v("code",[e._v("namespace")]),e._v("的声明定义后，可以在需要使用的地方，无需任何引入直接访问"),v("code",[e._v("API")]),e._v("，然后通过"),v("code",[e._v("API.VisualizationListResponse")]),e._v("就可以访问到定义的"),v("code",[e._v("VisualizationListResponse")]),e._v("类型。")]),e._v(" "),v("p",[v("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}}),e._v("image.png")]),e._v(" "),v("h2",{attrs:{id:"资源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#资源"}},[e._v("#")]),e._v(" 资源")]),e._v(" "),v("ul",[v("li",[e._v("你为什么不使用 TypeScript？")]),e._v(" "),v("li",[e._v("Declaration Merging")]),e._v(" "),v("li",[e._v("TypeScript 4.1 新特性：字符串模板类型，Vuex 终于有救了？")]),e._v(" "),v("li",[e._v("一文让你彻底掌握 TS 枚举")]),e._v(" "),v("li",[e._v("TypeScript 高级用法")]),e._v(" "),v("li",[e._v("一文读懂 TypeScript 泛型及应用（ 7.8K字）")]),e._v(" "),v("li",[e._v("在线Typescript，Playground")]),e._v(" "),v("li",[e._v("utility-types")])]),e._v(" "),v("h2",{attrs:{id:"如何深入学习typescript"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何深入学习typescript"}},[e._v("#")]),e._v(" 如何深入学习TypeScript?")]),e._v(" "),v("p",[e._v("当了解"),v("code",[e._v("TypeScript")]),e._v("后，想学习进阶的使用方式，可以看看一些类型库的源码，这些源码内很多"),v("code",[e._v("TypeScript")]),e._v("的操作都能够在其中看到。")]),e._v(" "),v("p",[e._v("比较好的如："),v("code",[e._v("utility-types")]),e._v(", 里面有一些实用的基本类型，可以对源码进行阅读，阅读难度不大，多动手实践下就会对类型有一个更加清晰的明确。")]),e._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),v("p",[v("code",[e._v("TypeScript")]),e._v("是一把双刃剑，对开发者来说具有一定门槛，在使用不当的时候，其实对于项目来说会变得更加的复杂，可读性并没有过多的提升。")]),e._v(" "),v("p",[e._v("根据自身团队的实际情况，慢慢推动"),v("code",[e._v("TypeScript")]),e._v("的基建，保持当前生态体系下的框架和库对"),v("code",[e._v("TypeScript")]),e._v("的支持度良好的情况下逐步替换到"),v("code",[e._v("TypeScript")]),e._v("是一个不错的选择。")]),e._v(" "),v("p",[e._v("打个比方：如果你现在使用的是"),v("code",[e._v("vue2")]),e._v("，那么不妨可以考虑下，用"),v("code",[e._v("TypeScript")]),e._v("写组件真的好吗？")]),e._v(" "),v("p",[v("code",[e._v("TypeScript")]),e._v("上手需要一定的学习的学习成本和任务负担，并不是说会"),v("code",[e._v("javaScript")]),e._v("就会"),v("code",[e._v("TypeScript")]),e._v("，其中"),v("code",[e._v("OOP")]),e._v("的思想来说，对团队成员其实是有一定的影响的。尤其是在敏捷项目开发下，影响还是蛮大的。")]),e._v(" "),v("p",[e._v("因此，如果项目迭代本身高频快，那么在估量开发需求时，质量和效率很明显并不能兼得之。可以慢慢的进行推动。")]),e._v(" "),v("blockquote",[v("p",[v("code",[e._v("TypeScript")]),e._v("不会防止屎山的出现，也没有大多数人传言中的那么香。只是很多吹捧的人会把屎山说香。它只是一个类型系统，并没有传的那么神乎其神，能做的只是杜绝了很多"),v("code",[e._v("奇技淫巧")]),e._v("，让代码可以在一个较为正常的环境下进行开发。")])])])}),[],!1,null,null,null);a.default=t.exports}}]);