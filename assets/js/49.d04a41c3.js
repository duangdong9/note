(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{461:function(t,s,e){"use strict";e.r(s);var a=e(18),o=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"promise"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[t._v("#")]),t._v(" Promise")]),t._v(" "),e("blockquote",[e("p",[t._v("首先，无法取消"),e("code",[t._v("Promise")]),t._v("，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，"),e("code",[t._v("Promise")]),t._v("内部抛出的错误，不会反应到外部。第三，当处于"),e("code",[t._v("pending")]),t._v("状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）")])]),t._v(" "),e("h3",{attrs:{id:"含义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#含义"}},[t._v("#")]),t._v(" 含义")]),t._v(" "),e("blockquote",[e("p",[t._v("简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。")])]),t._v(" "),e("h3",{attrs:{id:"特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),e("ul",[e("li",[t._v("对象的状态不受外界影响。"),e("code",[t._v("Promise")]),t._v("对象代表一个异步操作，有三种状态："),e("code",[t._v("pending")]),t._v("（进行中）、"),e("code",[t._v("fulfilled")]),t._v("（已成功）和"),e("code",[t._v("rejected")]),t._v("（已失败）")]),t._v(" "),e("li",[t._v("一旦状态改变，就不会再变，任何时候都可以得到这个结果。"),e("code",[t._v("Promise")]),t._v("对象的状态改变，只有两种可能：从"),e("code",[t._v("pending")]),t._v("变为"),e("code",[t._v("fulfilled")]),t._v("和从"),e("code",[t._v("pending")]),t._v("变为"),e("code",[t._v("rejected")]),t._v("。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）")])]),t._v(" "),e("h3",{attrs:{id:"用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("Promise")]),t._v("对象是一个构造函数，用来生成"),e("code",[t._v("Promise")]),t._v("实例。")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Promise 新建后就会立即执行。")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" promise "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Promise"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\npromise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resolved."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Promise")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hi!")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolved")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("一般来说，调用"),e("code",[t._v("resolve")]),t._v("或"),e("code",[t._v("reject")]),t._v("以后，Promise 的使命就完成了，后继操作应该放到"),e("code",[t._v("then")]),t._v("方法里面，而不应该直接写在"),e("code",[t._v("resolve")]),t._v("或"),e("code",[t._v("reject")]),t._v("的后面。所以，最好在它们前面加上"),e("code",[t._v("return")]),t._v("语句，这样就不会有意外。")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后面的语句不会执行")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"promise挂载的方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise挂载的方法"}},[t._v("#")]),t._v(" "),e("code",[t._v("Promise")]),t._v("挂载的方法")]),t._v(" "),e("h4",{attrs:{id:"promise-prototype-then"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise-prototype-then"}},[t._v("#")]),t._v(" "),e("code",[t._v("Promise.prototype.then()")])]),t._v(" "),e("blockquote",[e("p",[t._v("Promise 实例具有"),e("code",[t._v("then")]),t._v("方法，即其方法是定义再原型对象"),e("code",[t._v("Promise.prototype")]),t._v("上的")])]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("注意")])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("then")]),t._v("方法返回的是一个新的"),e("code",[t._v("Promise")]),t._v("实例（注意，不是原来那个"),e("code",[t._v("Promise")]),t._v("实例）。因此可以采用链式写法，即"),e("code",[t._v("then")]),t._v("方法后面再调用另一个"),e("code",[t._v("then")]),t._v("方法。")]),t._v(" "),e("p",[t._v("第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("作用")])]),t._v(" "),e("ul",[e("li",[t._v("为 Promise 实例添加状态改变时的回调函数")])])])]),t._v(" "),e("h4",{attrs:{id:"promise-prototype-catch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise-prototype-catch"}},[t._v("#")]),t._v(" "),e("code",[t._v("Promise.prototype.catch()")])]),t._v(" "),e("blockquote",[e("p",[t._v("方法是"),e("code",[t._v(".then(null, rejection)")]),t._v("或"),e("code",[t._v(".then(undefined, rejection)")]),t._v("的别名，用于指定发生错误时的回调函数。")]),t._v(" "),e("p",[t._v("如果异步操作抛出错误，状态就会变为"),e("code",[t._v("rejected")]),t._v("，就会调用"),e("code",[t._v("catch")]),t._v("方法指定的回调函数，处理这个错误。另外，"),e("code",[t._v("then")]),t._v("方法指定的回调函数，如果运行中抛出错误，也会被"),e("code",[t._v("catch")]),t._v("方法捕获。")])]),t._v(" "),e("h4",{attrs:{id:"promise-prototype-finally"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise-prototype-finally"}},[t._v("#")]),t._v(" "),e("code",[t._v("Promise.prototype.finally()")])]),t._v(" "),e("blockquote",[e("p",[t._v("用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("特性")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("finally")]),t._v("方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是"),e("code",[t._v("fulfilled")]),t._v("还是"),e("code",[t._v("rejected")]),t._v("。这表明，"),e("code",[t._v("finally")]),t._v("方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。")])])]),t._v(" "),e("li",[e("strong",[t._v("本质")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("finally")]),t._v("本质上是"),e("code",[t._v("then")]),t._v("方法的特例。")])])])]),t._v(" "),e("h4",{attrs:{id:"promise-all"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise-all"}},[t._v("#")]),t._v(" "),e("code",[t._v("Promise.all()")])]),t._v(" "),e("blockquote",[e("p",[t._v("方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("特性")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Promise.all")]),t._v("方法接受一个数组作为参数，"),e("code",[t._v("p1")]),t._v("、"),e("code",[t._v("p2")]),t._v("、"),e("code",[t._v("p3")]),t._v("都是 Promise 实例，如果不是，就会先调用下面讲到的"),e("code",[t._v("Promise.resolve")]),t._v("方法，将参数转为 Promise 实例，再进一步处理。（"),e("code",[t._v("Promise.all")]),t._v("方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）")])])]),t._v(" "),e("li",[e("code",[t._v("p")]),t._v("的状态由"),e("code",[t._v("p1")]),t._v("、"),e("code",[t._v("p2")]),t._v("、"),e("code",[t._v("p3")]),t._v("决定，分成两种情况。\n"),e("ul",[e("li",[t._v("只有"),e("code",[t._v("p1")]),t._v("、"),e("code",[t._v("p2")]),t._v("、"),e("code",[t._v("p3")]),t._v("的状态都变成"),e("code",[t._v("fulfilled")]),t._v("，"),e("code",[t._v("p")]),t._v("的状态才会变成"),e("code",[t._v("fulfilled")]),t._v("，此时"),e("code",[t._v("p1")]),t._v("、"),e("code",[t._v("p2")]),t._v("、"),e("code",[t._v("p3")]),t._v("的返回值组成一个数组，传递给"),e("code",[t._v("p")]),t._v("的回调函数。")]),t._v(" "),e("li",[t._v("只要"),e("code",[t._v("p1")]),t._v("、"),e("code",[t._v("p2")]),t._v("、"),e("code",[t._v("p3")]),t._v("之中有一个被"),e("code",[t._v("rejected")]),t._v("，"),e("code",[t._v("p")]),t._v("的状态就变成"),e("code",[t._v("rejected")]),t._v("，此时第一个被"),e("code",[t._v("reject")]),t._v("的实例的返回值，会传递给"),e("code",[t._v("p")]),t._v("的回调函数。")])])]),t._v(" "),e("li",[t._v("注意\n"),e("ul",[e("li",[t._v("如果作为参数的 Promise 实例，自己定义了"),e("code",[t._v("catch")]),t._v("方法，那么它一旦被"),e("code",[t._v("rejected")]),t._v("，并不会触发"),e("code",[t._v("Promise.all()")]),t._v("的"),e("code",[t._v("catch")]),t._v("方法。")])])])]),t._v(" "),e("h4",{attrs:{id:"promise-race"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise-race"}},[t._v("#")]),t._v(" "),e("code",[t._v("Promise.race()")])]),t._v(" "),e("blockquote",[e("p",[t._v("同样是将多个 Promise 实例，包装成一个新的 Promise 实例")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Promise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("race")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ul",[e("li",[t._v("上面代码中，只要"),e("code",[t._v("p1")]),t._v("、"),e("code",[t._v("p2")]),t._v("、"),e("code",[t._v("p3")]),t._v("之中有一个实例率先改变状态，"),e("code",[t._v("p")]),t._v("的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给"),e("code",[t._v("p")]),t._v("的回调函数。")]),t._v(" "),e("li",[e("code",[t._v("Promise.race")]),t._v("方法的参数与"),e("code",[t._v("Promise.all")]),t._v("方法一样，如果不是 Promise 实例，就会先调用下面讲到的"),e("code",[t._v("Promise.resolve")]),t._v("方法，将参数转为 Promise 实例，再进一步处理。")])]),t._v(" "),e("h4",{attrs:{id:"promise-resolve"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise-resolve"}},[t._v("#")]),t._v(" "),e("code",[t._v("Promise.resolve()")])]),t._v(" "),e("blockquote",[e("p",[t._v("将现有对象转为 Promise 对象")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("写法")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("Promise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等价于")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("Promise.resolve")]),t._v("方法的参数分成四种情况。")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("参数是一个 Promise 实例")])]),t._v(" "),e("blockquote",[e("p",[t._v("如果参数是 Promise 实例，那么"),e("code",[t._v("Promise.resolve")]),t._v("将不做任何修改、原封不动地返回这个实例。")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("参数是一个 thenable 对象")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("参数不是具有 then 方法的对象，或根本就不是对象")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("不带有任何参数")])]),t._v(" "),e("blockquote",[e("p",[t._v("方法允许调用时不带参数，直接返回一个"),e("code",[t._v("resolved")]),t._v("状态的 Promise 对象。")])])])])])]),t._v(" "),e("h4",{attrs:{id:"promise-reject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise-reject"}},[t._v("#")]),t._v(" "),e("code",[t._v("Promise.reject()")])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("Promise.reject(reason)")]),t._v("方法也会返回一个新的 Promise 实例，该实例的状态为"),e("code",[t._v("rejected")]),t._v("。")])]),t._v(" "),e("ul",[e("li",[t._v("注意\n"),e("ul",[e("li",[e("code",[t._v("Promise.reject()")]),t._v("方法的参数，会原封不动地作为"),e("code",[t._v("reject")]),t._v("的理由，变成后续方法的参数。这一点与"),e("code",[t._v("Promise.resolve")]),t._v("方法不一致。")])])])])])}),[],!1,null,null,null);s.default=o.exports}}]);