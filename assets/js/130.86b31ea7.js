(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{540:function(v,_,t){"use strict";t.r(_);var e=t(18),r=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"看了就会的浏览器帧原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#看了就会的浏览器帧原理"}},[v._v("#")]),v._v(" 看了就会的浏览器帧原理")]),v._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),t("p",[v._v("本文会介绍浏览器中帧（Frame）的概念，它的流程是怎么样的。")]),v._v(" "),t("p",[v._v("至于写这个文章的出发点在于，我好奇浏览器中像素工作流程是怎么样的，什么时候开始的，最后的结果是什么。")]),v._v(" "),t("p",[v._v("基于这些好奇，查阅了些外文资料，本文提供了些参考，参考链接在文末。")]),v._v(" "),t("h2",{attrs:{id:"缘由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缘由"}},[v._v("#")]),v._v(" 缘由")]),v._v(" "),t("p",[v._v("在将帧的概念前，我们得从背景开始看起，也就是渲染页面的这个过程，有哪些关键性的路径呢。")]),v._v(" "),t("h2",{attrs:{id:"五大关键渲染路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五大关键渲染路径"}},[v._v("#")]),v._v(" 五大关键渲染路径")]),v._v(" "),t("p",[v._v("像素输出到页面，肯定经历了很多的过程，那我们作为前端工程师，工作中需要注意的点是哪些呢，这里给出参考:")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202181642572.png",alt:"图片"}}),v._v("渲染关键路径")]),v._v(" "),t("p",[v._v("这五个主要的部分，应该是我们值得去关注的，因为我们拥有最大控制权的部分。至于每一个过程具体是怎么样的呢，不清楚的可以参考下图:")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202181644729.png",alt:"图片"}}),v._v("每个阶段任务")]),v._v(" "),t("p",[v._v("所以在这么一个像素的管道里，每部分都有可能造成卡顿，所以我们需要额外的关注这些，毕竟那一部分不当，都会开了不必要的性能开销。")]),v._v(" "),t("h3",{attrs:{id:"三种输出方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三种输出方式"}},[v._v("#")]),v._v(" 三种输出方式")]),v._v(" "),t("p",[v._v("当时我的疑问是: 难道每一帧都总是会经过管道每个部分的处理嘛，其实不是这样子的，从视觉的角度来说，管道针对指定帧的运行通常有三种方式:")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202181642544.png",alt:"图片"}}),v._v("指定帧的运行通常有三种方式")]),v._v(" "),t("p",[v._v("如果我们以第三种方式来更新视图，也就是更改一个既不要布局也不要绘制的属性，则浏览器将跳到只执行合成。")]),v._v(" "),t("h3",{attrs:{id:"跑个demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跑个demo"}},[v._v("#")]),v._v(" 跑个demo")]),v._v(" "),t("p",[v._v("为了更加具体的验证上述的过程，可以动手跑一个demo，来验证一下。")]),v._v(" "),t("blockquote",[t("p",[v._v("demo地址:https://googlechrome.github.io/devtools-samples/jank/")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202181643423.png",alt:"图片"}}),v._v("主线程")]),v._v(" "),t("p",[v._v("我们添加多个dom元素进行动画，效果更佳明显，接着我们打开Performance，Record这个过程，我们需要关注的是Main选项卡，也就是主线程，我们在放大里面的Task，就有了下图:")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202181643553.png",alt:"图片"}}),v._v("详细的Task")]),v._v(" "),t("p",[v._v("经历的过程，也是很清楚看到，Update Layer Tree --\x3e> Layout --\x3e> Paint --\x3e> Composite Layers。")]),v._v(" "),t("blockquote",[t("p",[v._v("如果你不是很清楚Performance中名称的含义,可以参考下面这篇文章，"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI5MDU2MDY0Mw==&mid=2247489712&idx=1&sn=7637a7a8d07cfa9c65e959e8a68f2ee7&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[v._v("点这里"),t("OutboundLink")],1),v._v(":")]),v._v(" "),t("p",[v._v("https://mp.weixin.qq.com/s/iodsGPWgYc97yWLb09Xk6A")])]),v._v(" "),t("p",[v._v("接着，我们按下，Optimize按钮，按照之前的流程走，Record后，发现不对劲，还是这样子步骤，难道是哪里存在问题嘛，好奇的我，打开了Sources面板，然后就发现了:")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202181643367.png",alt:"图片"}}),v._v("未优化的动画")]),v._v(" "),t("p",[v._v("它的源码优化动画，使用的是rAF,了解过的人一定不会陌生，你可以简单的理解就是:按帧对网页进行重绘。这里就引出了帧的概念，后续会说明。")]),v._v(" "),t("blockquote",[t("p",[v._v("rAF的详细介绍，后续会对它进行梳理，可以持续关注。")])]),v._v(" "),t("h3",{attrs:{id:"如何避免回流与重绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何避免回流与重绘"}},[v._v("#")]),v._v(" 如何避免回流与重绘")]),v._v(" "),t("p",[v._v("回到前面我们设想的点，我们如何才能保证直接跳到合成过程，避免Layout以及Paint呢，当然有，我们需要对app.js中的uppdate函数进行改造，使用"),t("strong",[v._v("transform: translateX(0px);")]),v._v(" 做动画，做完update函数的处理逻辑后，我们再次Record一下:")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202181643873.png",alt:"图片"}}),v._v("优化后的动画")]),v._v(" "),t("p",[v._v("从Task子任务中，我们可以发现，"),t("strong",[v._v("Layout --\x3e> Paint")]),v._v(", 布局和绘制的过程跳过了。这也是为什么我们常说的需要避免回流与重绘。从主线程上来看，能够完全的避免这些过程，避免了很多的运算开销。")]),v._v(" "),t("p",[v._v("这也是为什么经常可以看到这样子的建议:")]),v._v(" "),t("ul",[t("li",[v._v("坚持使用 transform 和 opacity 属性更改来实现动画。")]),v._v(" "),t("li",[v._v("使用 "),t("code",[v._v("will-change")]),v._v(" 或 "),t("code",[v._v("translateZ")]),v._v(" 提升移动的元素。")])]),v._v(" "),t("p",[v._v("至于使用will-change和translatez来提升图层，这又是另外知识点了，这里就不张开了。")]),v._v(" "),t("p",[v._v("介绍到这里，我们已经清楚的明白，避免回流和重绘的意义，那么我们提到的"),t("strong",[v._v("帧")]),v._v("和"),t("strong",[v._v("rAF")]),v._v(" 与 渲染路径有啥关系呢。")]),v._v(" "),t("h2",{attrs:{id:"帧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#帧"}},[v._v("#")]),v._v(" 帧")]),v._v(" "),t("p",[v._v("我做的第一件事情就是google，然后维基百科给出如下定义:")]),v._v(" "),t("blockquote",[t("p",[v._v("在视频领域，电影、电视、数字视频等可视为随时间连续变换的许多张画面，其中"),t("strong",[v._v("帧")]),v._v("是指每一张画面。")])]),v._v(" "),t("p",[v._v("嗯，不是很好理解，知道我找到了这张图，才解答了我的困惑:")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202181707487.png",alt:""}}),v._v("frame")]),v._v(" "),t("p",[v._v("这就真的是"),t("strong",[v._v("一图胜千言")]),v._v("。")]),v._v(" "),t("p",[v._v("这个图，你可以理解成就是像素放到屏幕的完整过程。你肯定对里面的一些关键信息很迷惑，这里作出一些解释。")]),v._v(" "),t("blockquote",[t("p",[v._v("接下来大部分内容都是翻译的，没有更多的总结，感兴趣可以看看原文。")])]),v._v(" "),t("h3",{attrs:{id:"processes-进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#processes-进程"}},[v._v("#")]),v._v(" PROCESSES(进程)")]),v._v(" "),t("p",[v._v("映入眼帘的就是进程:")]),v._v(" "),t("ul",[t("li",[t("p",[t("strong",[v._v("Renderer Process")]),v._v(": 渲染进程。")])]),v._v(" "),t("li",[t("ul",[t("li",[v._v("一个标签的周围容器。")]),v._v(" "),t("li",[v._v("它包含了多个线程，这些线程共同负责让你的页面出现在屏幕上的各个环节。")]),v._v(" "),t("li",[v._v("这些线程是"),t("strong",[v._v("合成线程")]),v._v("（Compositor）、"),t("strong",[v._v("图块栅格化线程")]),v._v("（Tile Worker）和主线程。")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("GPU Process")]),v._v(":  GPU进程。")])]),v._v(" "),t("li",[t("ul",[t("li",[v._v("这是服务于所有标签和周围浏览器进程的单一进程。")]),v._v(" "),t("li",[v._v("当帧被提交时，GPU进程将上传任何磁贴和其他数据（如四维顶点和矩阵）到GPU，以便实际将像素推送到屏幕上。")]),v._v(" "),t("li",[v._v("GPU进程包含一个单一的线程，称为GPU线程，实际完成工作。")])])])]),v._v(" "),t("h3",{attrs:{id:"renderer-process-threads-渲染进程中的线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#renderer-process-threads-渲染进程中的线程"}},[v._v("#")]),v._v(" RENDERER PROCESS THREADS（渲染进程中的线程）")]),v._v(" "),t("p",[v._v("现在我们来看看Renderer Process中的线程。")]),v._v(" "),t("ul",[t("li",[t("p",[t("strong",[v._v("Compositor Thread")]),v._v("(合成线程):")])]),v._v(" "),t("li",[t("ul",[t("li",[v._v("这是第一个被告知vsync事件的线程(这是操作系统告诉浏览器制作新帧的方式)。")]),v._v(" "),t("li",[v._v("它还将接收任何输入事件。")]),v._v(" "),t("li",[v._v("如果可以的话，合成器线程将避免进入主线程，并将尝试将输入（比如说--滚动甩动）转换为屏幕上的运动。它将通过更新图层位置并通过GPU线程直接将帧提交给GPU来实现。")]),v._v(" "),t("li",[v._v("如果因为输入事件处理程序或其他视觉工作而无法做到这一点，那么就需要使用主线程。")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("Main Thread")]),v._v("("),t("strong",[v._v("主线程")]),v._v(")：")])]),v._v(" "),t("li",[t("ul",[t("li",[v._v("这是浏览器执行我们都知道和喜欢的任务的地方。JavaScript、样式、布局和绘画。(在未来的Houdini中，这种情况会有所改变，我们将能够在Compositor线程中运行一些代码。)")]),v._v(" "),t("li",[v._v('这个线程赢得了 "最有可能导致jank "的奖项，主要是因为这里有很多东西在运行。(jank值得是'),t("strong",[v._v("页面抖动")]),v._v(")")])])]),v._v(" "),t("li",[t("p",[v._v("Compositor Tile Worker(s) ("),t("strong",[v._v("合成图块栅格化线程")]),v._v("):")])]),v._v(" "),t("li",[t("ul",[t("li",[v._v("由合成线程派生的一个或多个线程，用于处理栅格化任务。我们稍后再讨论。")])])])]),v._v(" "),t("p",[v._v('在很多方面，你应该把Compositor线程视为 "大老板"。虽然它不运行JavaScript、Layout、Paint或其他任何东西，但它是完全负责启动主线程工作的线程，然后将帧运送到屏幕上。如果它不需要等待输入事件处理程序，它就可以在等待主线程完成工作的同时运送帧。')]),v._v(" "),t("p",[v._v("你也可以想象Service Workers和Web Workers生活在这个过程中，不过我没有把他们包括在内，因为这让事情变得更加复杂。")]),v._v(" "),t("h3",{attrs:{id:"the-flow-of-things-主线程流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-flow-of-things-主线程流程"}},[v._v("#")]),v._v(" THE FLOW OF THINGS(主线程流程)")]),v._v(" "),t("p",[v._v("让我们成主线程开始吧。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202181707500.png",alt:"图片"}}),v._v("主线程")]),v._v(" "),t("p",[v._v('让我们一步步走过这个流程，从vsync到像素，并谈谈在事件的 "全胖 "版本中事情是如何进行的。值得记住的是，浏览器不需要执行所有这些步骤，这取决于什么是必要的。例如，如果没有新的HTML要解析，那么解析HTML就不会启动。事实上，很多时候，提高性能的最好方法就是简单地消除部分流程被启动的必要性!')]),v._v(" "),t("p",[v._v("同样值得注意的是，样式和布局下的红色箭头似乎指向了 "),t("strong",[v._v("requestAnimationFrame")]),v._v("。在你的代码中完全有可能意外地触发这两者。这就是所谓的强制同步布局（或样式，视情况而定），它通常对性能不利。")]),v._v(" "),t("ol",[t("li",[t("p",[t("strong",[v._v("Frame Start")]),v._v("（"),t("strong",[v._v("开始新的一帧")]),v._v("）：")])]),v._v(" "),t("li",[t("ol",[t("li",[v._v("垂直同步信号触发，开始渲染新的一帧图像。")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("Input event handlers")]),v._v(" （"),t("strong",[v._v("输入事件的处理")]),v._v("）。")])]),v._v(" "),t("li",[t("ol",[t("li",[v._v("-输入数据从合成器线程传递给主线程上的任何输入事件处理程序。")]),v._v(" "),t("li",[v._v("所有的输入事件处理程序（触摸移动、滚动、点击）都应该首先启动，每帧一次，但情况不一定如此。")]),v._v(" "),t("li",[v._v("调度器会做出最大努力的尝试，其成功率在不同的操作系统中有所不同。在用户交互和事件进入主线程处理之间也有一些延迟。")])])]),v._v(" "),t("li",[t("p",[t("strong",[t("code",[v._v("requestAnimationFrame")])]),v._v("：")])]),v._v(" "),t("li",[t("ol",[t("li",[v._v("这是对屏幕进行视觉更新的理想位置，因为你有新鲜的输入数据，而且这是你要得到的最接近vsync的地方。")]),v._v(" "),t("li",[v._v("其他的视觉任务，比如样式计算，都是在这个任务之后进行的，所以它的理想位置是突变元素。")]),v._v(" "),t("li",[v._v("如果你突变--比如说--100个类，这不会导致100个样式计算；它们将被分批处理，并在后面处理。唯一需要注意的是，你不要查询任何计算过的样式或布局属性（比如el.style.backgroundImage或el.style.offsetWidth）。")]),v._v(" "),t("li",[v._v("如果你这样做，你会把重新计算的样式、布局或两者都向前带，导致强制的同步布局，或者更糟糕的是，布局打乱。")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("Parse HTML")]),v._v(" ("),t("strong",[v._v("解析 HTML")]),v._v("):")])]),v._v(" "),t("li",[t("ol",[t("li",[v._v("任何新添加的HTML都会被处理，并创建DOM元素。")]),v._v(" "),t("li",[v._v("在页面加载过程中或appendChild等操作后，你可能会看到更多的这种情况。")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("Recalc Styles")]),v._v("（"),t("strong",[v._v("重新计算样式")]),v._v("）:")])]),v._v(" "),t("li",[t("ol",[t("li",[v._v("样式是为任何新添加或突变的东西计算的，这可能是整个树，也可能是范围，这取决于改变了什么。")]),v._v(" "),t("li",[v._v("这可能是整个树，也可能是范围缩小，这取决于改变了什么。")]),v._v(" "),t("li",[v._v("例如，改变主体上的类可能影响深远，但值得注意的是，浏览器已经非常聪明地自动限制了样式计算的范围。")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("Layout")]),v._v("（绘制）:")])]),v._v(" "),t("li",[t("ol",[t("li",[v._v("计算每个可见元素的几何信息（每个元素的位置和大小）。它通常对整个文档进行计算，通常使计算成本与DOM大小成正比。")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("Update Layer Tree")]),v._v("（"),t("strong",[v._v("更新图层树")]),v._v("）:")])]),v._v(" "),t("li",[t("ol",[t("li",[v._v("创建叠加上下文和深度排序元素的过程。")]),v._v(" "),t("li")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("Paint")]),v._v(":")])]),v._v(" "),t("li",[t("ol",[t("li",[v._v("这是两部分过程中的第一部分：绘制是记录任何新元素或视觉上有变化的元素的绘制调用（在这里填充一个矩形，在那里写文字）。")]),v._v(" "),t("li",[v._v('第二部分是光栅化（见下文），在这里执行绘图调用，并填充纹理。这一部分是对绘制调用的记录，通常比光栅化快得多，但这两部分通常统称为 "绘画"。')])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("Composite")]),v._v("（"),t("strong",[v._v("合成")]),v._v("）:")])]),v._v(" "),t("li",[t("ol",[t("li",[v._v("计算出图层和瓷砖的信息，并传回给合成器线程来处理。")]),v._v(" "),t("li",[v._v("这将会考虑到，除其他事项外，像will-change，重叠元素，以及任何硬件加速的canvases。")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("Raster Scheduled")]),v._v(" （"),t("strong",[v._v("栅格化规划")]),v._v("）and "),t("strong",[v._v("Rasterize")]),v._v("（"),t("strong",[v._v("栅格化")]),v._v("）:")])]),v._v(" "),t("li",[t("ol",[t("li",[v._v("现在会执行在Paint任务中记录的绘制调用。这是在Compositor Tile Workers中完成的，其数量取决于平台和设备能力。")]),v._v(" "),t("li",[v._v("例如，在Android上，你通常会发现一个Worker，在桌面上，你有时可以找到四个。栅格化是以图层为单位进行的，每个图层都是由瓷砖组成的。")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("Frame End（帧结束）:")])])]),v._v(" "),t("li",[t("ol",[t("li",[v._v("当各个图层的磁贴都栅格化后，任何新的磁贴都会和输入数据（可能在事件处理程序中被改变）一起提交给GPU线程。")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("Frame Ships")]),v._v("（"),t("strong",[v._v("发送帧")]),v._v("）:")])]),v._v(" "),t("li",[t("ol",[t("li",[v._v("最后，但绝不是最不重要的，磁贴由GPU线程上传至GPU。GPU使用四边形和矩阵（所有常见的GL好东西）将磁贴绘制到屏幕上。")])])])]),v._v(" "),t("p",[v._v("大致上，整个的过程就是上述。")]),v._v(" "),t("h3",{attrs:{id:"requestidlecallback"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requestidlecallback"}},[v._v("#")]),v._v(" "),t("strong",[v._v("requestIdleCallback")])]),v._v(" "),t("p",[v._v("要说这个的话，我们得拿"),t("strong",[v._v("requestAnimationFrame")]),v._v("来类比，requestAnimationFrame是在重新渲染屏幕"),t("strong",[v._v("之前")]),v._v("执行的，上面提到的rAF，当时做的就是优化动画，所以很适合做动画。")]),v._v(" "),t("p",[v._v("requestIdleCallback你通过主线程里面中的Task去查找的话，会发现它是在渲染屏幕"),t("strong",[v._v("之后")]),v._v("执行，通过查阅文章发现，一般会看浏览器是否空闲。")]),v._v(" "),t("p",[v._v("这里篇幅有限，想要了解这个的话，推荐一篇文章:")]),v._v(" "),t("blockquote",[t("p",[v._v("https://juejin.cn/post/6844904165462769678")])]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("最近查阅外文文献，发现要学的东西太多了，如果这篇文章有写的不对，或者翻译不佳的地方，欢迎小伙伴指出。")]),v._v(" "),t("p",[t("strong",[v._v("我是TianTian，我们下一期见！！！")])]),v._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),t("p",[v._v("[1] "),t("strong",[v._v("w3c-longTasks:")]),v._v(" https://github.com/w3c/longtasks")]),v._v(" "),t("p",[v._v("[2] "),t("strong",[v._v("chrome-fps-meter:")]),v._v(" https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#fps-meter")]),v._v(" "),t("p",[v._v("[3] "),t("strong",[v._v("devtools-samples:")]),v._v(" https://googlechrome.github.io/devtools-samples/jank/")]),v._v(" "),t("p",[v._v("[4] "),t("strong",[v._v("Analyze runtime performance:")]),v._v(" https://developer.chrome.com/docs/devtools/evaluate-performance/")]),v._v(" "),t("p",[v._v("[5] "),t("strong",[v._v("Timeline Event Reference:")]),v._v(" https://developer.chrome.com/docs/devtools/evaluate-performance/performance-reference/")]),v._v(" "),t("p",[v._v("[6] "),t("strong",[v._v("The Anatomy of a Frame:")]),v._v(" https://aerotwist.com/blog/the-anatomy-of-a-frame/")]),v._v(" "),t("p",[v._v("[7] "),t("strong",[v._v("performance-rendering:")]),v._v(" https://developers.google.com/web/fundamentals/performance/rendering")]),v._v(" "),t("p",[v._v("[8] "),t("strong",[v._v("维基百科:")]),v._v(" https://zh.wikipedia.org/wiki/")])])}),[],!1,null,null,null);_.default=r.exports}}]);