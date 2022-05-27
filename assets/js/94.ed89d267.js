(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{507:function(e,t,a){"use strict";a.r(t);var _=a(18),o=Object(_.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"彻底搞懂-nginx-的五大应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#彻底搞懂-nginx-的五大应用场景"}},[e._v("#")]),e._v(" 彻底搞懂 Nginx 的五大应用场景")]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/074FYr_4Bjd3h4juU4-Iew",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://mp.weixin.qq.com/s/074FYr_4Bjd3h4juU4-Iew"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"一、http服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、http服务器"}},[e._v("#")]),e._v(" "),a("strong",[e._v("一、HTTP服务器")])]),e._v(" "),a("p",[e._v("Nginx本身也是一个静态资源的服务器，当只有静态资源的时候，就可以使用Nginx来做服务器，如果一个网站只是静态页面的话，那么就可以通过这种方式来实现部署。")]),e._v(" "),a("p",[e._v("1、 首先在文档根目录"),a("code",[e._v("Docroot(/usr/local/var/www)")]),e._v("下创建html目录, 然后在html中放一个test.html;")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbue6FUiaDhfyMF4bBf2z0LyvLwcibrhPEu0QVmfVuIECbcj8oKQOuqUfSAs7Q3dRHUevQMIkUS3DhChg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),a("p",[e._v("2、 配置"),a("code",[e._v("nginx.conf")]),e._v("中的server")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("user mengday staff;\n\nhttp {\n    server {\n        listen       80;\n        server_name  localhost;\n        client_max_body_size 1024M;\n\n        # 默认location\n        location / {\n            root   /usr/local/var/www/html;\n            index  index.html index.htm;\n        }\n    }\n}\n")])])]),a("p",[e._v("3、访问测试")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("http://localhost/")]),e._v(" 指向"),a("code",[e._v("/usr/local/var/www/index.html")]),e._v(", index.html是安装nginx自带的html")]),e._v(" "),a("li",[a("code",[e._v("http://localhost/test.html")]),e._v(" 指向"),a("code",[e._v("/usr/local/var/www/html/test.html")])])]),e._v(" "),a("blockquote",[a("p",[e._v("注意：如果访问图片出现403 Forbidden错误，可能是因为nginx.conf 的第一行user配置不对，默认是#user nobody;是注释的，linux下改成user root; macos下改成user 用户名 所在组; 然后重新加载配置文件或者重启，再试一下就可以了， 用户名可以通过who am i 命令来查看。")])]),e._v(" "),a("p",[e._v("4、指令简介")]),e._v(" "),a("ul",[a("li",[e._v("server : 用于定义服务，http中可以有多个server块")]),e._v(" "),a("li",[e._v("listen : 指定服务器侦听请求的IP地址和端口，如果省略地址，服务器将侦听所有地址，如果省略端口，则使用标准端口")]),e._v(" "),a("li",[e._v("server_name : 服务名称，用于配置域名")]),e._v(" "),a("li",[e._v("location : 用于配置映射路径uri对应的配置，一个server中可以有多个location, location后面跟一个uri,可以是一个正则表达式, / 表示匹配任意路径, 当客户端访问的路径满足这个uri时就会执行location块里面的代码")]),e._v(" "),a("li",[e._v("root : 根路径，当访问"),a("code",[e._v("http://localhost/test.html")]),e._v("，“/test.html”会匹配到”/”uri, 找到root为"),a("code",[e._v("/usr/local/var/www/html")]),e._v("，用户访问的资源物理地址="),a("code",[e._v("root + uri = /usr/local/var/www/html + /test.html=/usr/local/var/www/html/test.html")])]),e._v(" "),a("li",[e._v("index : 设置首页，当只访问"),a("code",[e._v("server_name")]),e._v("时后面不跟任何路径是不走root直接走index指令的；如果访问路径中没有指定具体的文件，则返回index设置的资源，如果访问"),a("code",[e._v("http://localhost/html/")]),e._v(" 则默认返回index.html")])]),e._v(" "),a("p",[e._v("5、location uri正则表达式")]),e._v(" "),a("ul",[a("li",[a("code",[e._v(".")]),e._v(" ：匹配除换行符以外的任意字符")]),e._v(" "),a("li",[a("code",[e._v("?")]),e._v(" ：重复0次或1次")]),e._v(" "),a("li",[a("code",[e._v("+")]),e._v(" ：重复1次或更多次")]),e._v(" "),a("li",[a("code",[e._v("*")]),e._v(" ：重复0次或更多次")]),e._v(" "),a("li",[a("code",[e._v("\\d")]),e._v(" ：匹配数字")]),e._v(" "),a("li",[a("code",[e._v("^")]),e._v(" ：匹配字符串的开始")]),e._v(" "),a("li",[a("code",[e._v("$")]),e._v(" ：匹配字符串的结束")]),e._v(" "),a("li",[a("code",[e._v("{n}")]),e._v(" ：重复n次")]),e._v(" "),a("li",[a("code",[e._v("{n,}")]),e._v(" ：重复n次或更多次")]),e._v(" "),a("li",[a("code",[e._v("[c]")]),e._v(" ：匹配单个字符c")]),e._v(" "),a("li",[a("code",[e._v("[a-z]")]),e._v(" ：匹配a-z小写字母的任意一个")]),e._v(" "),a("li",[a("code",[e._v("(a|b|c)")]),e._v(" : 属线表示匹配任意一种情况，每种情况使用竖线分隔，一般使用小括号括括住，匹配符合a字符 或是b字符 或是c字符的字符串")]),e._v(" "),a("li",[a("code",[e._v("\\")]),e._v(" 反斜杠：用于转义特殊字符")])]),e._v(" "),a("p",[e._v("小括号()之间匹配的内容，可以在后面通过"),a("code",[e._v("$1")]),e._v("来引用，"),a("code",[e._v("$2")]),e._v("表示的是前面第二个()里的内容。正则里面容易让人困惑的是"),a("code",[e._v("\\")]),e._v("转义特殊字符。")]),e._v(" "),a("h2",{attrs:{id:"二、静态服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、静态服务器"}},[e._v("#")]),e._v(" "),a("strong",[e._v("二、静态服务器")])]),e._v(" "),a("p",[e._v("在公司中经常会遇到静态服务器，通常会提供一个上传的功能，其他应用如果需要静态资源就从该静态服务器中获取。")]),e._v(" "),a("p",[e._v("1、在"),a("code",[e._v("/usr/local/var/www")]),e._v(" 下分别创建images和img目录，分别在每个目录下放一张"),a("code",[e._v("test.jpg")])]),e._v(" "),a("p",[a("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("http {\n    server {\n        listen       80;\n        server_name  localhost;\n\n\n        set $doc_root /usr/local/var/www;\n\n        # 默认location\n        location / {\n            root   /usr/local/var/www/html;\n            index  index.html index.htm;\n        }\n\n        location ^~ /images/ {\n            root $doc_root;\n       }\n\n       location ~* \\.(gif|jpg|jpeg|png|bmp|ico|swf|css|js)$ {\n           root $doc_root/img;\n       }\n    }\n}\n")])])]),a("p",[e._v("自定义变量使用set指令，语法 set 变量名值;引用使用变量名值;引用使用变量名; 这里自定义了doc_root变量。")]),e._v(" "),a("p",[e._v("静态服务器location的映射一般有两种方式：")]),e._v(" "),a("ul",[a("li",[e._v("使用路径，如 /images/ 一般图片都会放在某个图片目录下，")]),e._v(" "),a("li",[e._v("使用后缀，如 .jpg、.png 等后缀匹配模式")])]),e._v(" "),a("p",[e._v("访问"),a("code",[e._v("http://localhost/test.jpg")]),e._v(" 会映射到 "),a("code",[e._v("$doc_root/img")])]),e._v(" "),a("p",[e._v("访问"),a("code",[e._v("http://localhost/images/test.jpg")]),e._v(" 当同一个路径满足多个location时，优先匹配优先级高的location，由于"),a("code",[e._v("^~")]),e._v(" 的优先级大于 "),a("code",[e._v("~")]),e._v(", 所以会走"),a("code",[e._v("/images/")]),e._v("对应的location")]),e._v(" "),a("p",[e._v("常见的location路径映射路径有以下几种：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("=")]),e._v("    进行普通字符精确匹配。也就是完全匹配。")]),e._v(" "),a("li",[a("code",[e._v("^~")]),e._v("     前缀匹配。如果匹配成功，则不再匹配其他location。")]),e._v(" "),a("li",[a("code",[e._v("~")]),e._v("    表示执行一个正则匹配，区分大小写")]),e._v(" "),a("li",[a("code",[e._v("~*")]),e._v("     表示执行一个正则匹配，不区分大小写")]),e._v(" "),a("li",[a("code",[e._v("/xxx/")]),e._v("  常规字符串路径匹配")]),e._v(" "),a("li",[a("code",[e._v("/")]),e._v("    通用匹配，任何请求都会匹配到")])]),e._v(" "),a("h4",{attrs:{id:"location优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location优先级"}},[e._v("#")]),e._v(" location优先级")]),e._v(" "),a("p",[e._v("当一个路径匹配多个location时究竟哪个location能匹配到时有优先级顺序的，而优先级的顺序于location值的表达式类型有关，和在配置文件中的先后顺序无关。相同类型的表达式，字符串长的会优先匹配。推荐："),a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4Njc5NjM1NQ==&mid=2247504489&idx=1&sn=afd92248113146b086652ad7f89c7a7c&chksm=ebd5ed45dca26453c0cf91265d669711a4e2b4ea52f3ff4a00b063a9de46d69fcc599f151210&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java面试题大全"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("以下是按优先级排列说明：")]),e._v(" "),a("ul",[a("li",[e._v("等号类型（=）的优先级最高。一旦匹配成功，则不再查找其他匹配项，停止搜索。")]),e._v(" "),a("li",[a("code",[e._v("^~")]),e._v("类型表达式，不属于正则表达式。一旦匹配成功，则不再查找其他匹配项，停止搜索。")]),e._v(" "),a("li",[e._v("正则表达式类型（"),a("code",[e._v("~ ~*")]),e._v("）的优先级次之。如果有多个location的正则能匹配的话，则使用正则表达式最长的那个。")]),e._v(" "),a("li",[e._v("常规字符串匹配类型。按前缀匹配。")]),e._v(" "),a("li",[e._v("/ 通用匹配，如果没有匹配到，就匹配通用的")])]),e._v(" "),a("p",[e._v("优先级搜索问题：不同类型的location映射决定是否继续向下搜索")]),e._v(" "),a("ul",[a("li",[e._v("等号类型、"),a("code",[e._v("^~")]),e._v("类型：一旦匹配上就停止搜索了，不会再匹配其他location了")]),e._v(" "),a("li",[e._v("正则表达式类型("),a("code",[e._v("~ ~*")]),e._v("）,常规字符串匹配类型"),a("code",[e._v("/xxx/")]),e._v(" : 匹配到之后，还会继续搜索其他其它location，直到找到优先级最高的，或者找到第一种情况而停止搜索")])]),e._v(" "),a("p",[e._v("location优先级从高到底：")]),e._v(" "),a("p",[e._v("("),a("code",[e._v("location =")]),e._v(") > ("),a("code",[e._v("location 完整路径")]),e._v(") > ("),a("code",[e._v("location ^~ 路径")]),e._v(") > ("),a("code",[e._v("location ~,~* 正则顺序")]),e._v(") > ("),a("code",[e._v("location 部分起始路径")]),e._v(") > ("),a("code",[e._v("/")]),e._v(")")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("location = / {\n    # 精确匹配/，主机名后面不能带任何字符串 /\n    [ configuration A ]\n}\nlocation / {\n    # 匹配所有以 / 开头的请求。\n    # 但是如果有更长的同类型的表达式，则选择更长的表达式。\n    # 如果有正则表达式可以匹配，则优先匹配正则表达式。\n    [ configuration B ]\n}\nlocation /documents/ {\n    # 匹配所有以 /documents/ 开头的请求，匹配符合以后，还要继续往下搜索。\n    # 但是如果有更长的同类型的表达式，则选择更长的表达式。\n    # 如果有正则表达式可以匹配，则优先匹配正则表达式。\n    [ configuration C ]\n}\nlocation ^~ /images/ {\n    # 匹配所有以 /images/ 开头的表达式，如果匹配成功，则停止匹配查找，停止搜索。\n    # 所以，即便有符合的正则表达式location，也不会被使用\n    [ configuration D ]\n}\n\nlocation ~* \\.(gif|jpg|jpeg)$ {\n    # 匹配所有以 gif jpg jpeg结尾的请求。\n    # 但是 以 /images/开头的请求，将使用 Configuration D，D具有更高的优先级\n    [ configuration E ]\n}\n\nlocation /images/ {\n    # 字符匹配到 /images/，还会继续往下搜索\n    [ configuration F ]\n}\n\n\nlocation = /test.htm {\n    root   /usr/local/var/www/htm;\n    index  index.htm;\n}\n")])])]),a("p",[e._v("注意：location的优先级与location配置的位置无关")]),e._v(" "),a("h2",{attrs:{id:"三、反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、反向代理"}},[e._v("#")]),e._v(" "),a("strong",[e._v("三、反向代理")])]),e._v(" "),a("p",[e._v("反向代理应该是Nginx使用最多的功能了，反向代理(Reverse Proxy)方式是指以代理服务器来接受internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。")]),e._v(" "),a("p",[e._v("简单来说就是真实的服务器不能直接被外部网络访问，所以需要一台代理服务器，而代理服务器能被外部网络访问的同时又跟真实服务器在同一个网络环境，当然也可能是同一台服务器，端口不同而已。")]),e._v(" "),a("p",[e._v("反向代理通过"),a("code",[e._v("proxy_pass")]),e._v("指令来实现。")]),e._v(" "),a("p",[e._v("启动一个Java Web项目，端口号为8081")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server {\n    listen       80;\n    server_name  localhost;\n\n    location / {\n        proxy_pass http://localhost:8081;\n        proxy_set_header Host $host:$server_port;\n        # 设置用户ip地址\n         proxy_set_header X-Forwarded-For $remote_addr;\n         # 当请求服务器出错去寻找其他服务器\n         proxy_next_upstream error timeout invalid_header http_500 http_502 http_503; \n    }\n\n}   \n")])])]),a("p",[e._v("当我们访问localhost的时候，就相当于访问 "),a("code",[e._v("localhost:8081")]),e._v("了")]),e._v(" "),a("h2",{attrs:{id:"四、负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、负载均衡"}},[e._v("#")]),e._v(" "),a("strong",[e._v("四、负载均衡")])]),e._v(" "),a("p",[e._v("负载均衡也是Nginx常用的一个功能，负载均衡其意思就是分摊到多个操作单元上进行执行，例如Web服务器、FTP服务器、企业关键应用服务器和其它关键任务服务器等，从而共同完成工作任务。")]),e._v(" "),a("p",[e._v("简单而言就是当有2台或以上服务器时，根据规则随机的将请求分发到指定的服务器上处理，负载均衡配置一般都需要同时配置反向代理，通过反向代理跳转到负载均衡。而Nginx目前支持自带3种负载均衡策略，还有2种常用的第三方策略。")]),e._v(" "),a("p",[e._v("负载均衡通过upstream指令来实现。推荐："),a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI4Njc5NjM1NQ==&mid=2247504489&idx=1&sn=afd92248113146b086652ad7f89c7a7c&chksm=ebd5ed45dca26453c0cf91265d669711a4e2b4ea52f3ff4a00b063a9de46d69fcc599f151210&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java面试题大全"),a("OutboundLink")],1)]),e._v(" "),a("h4",{attrs:{id:"_1-rr-round-robin-轮询-默认"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-rr-round-robin-轮询-默认"}},[e._v("#")]),e._v(" 1. RR(round robin :轮询 默认)")]),e._v(" "),a("p",[e._v("每个请求按时间顺序逐一分配到不同的后端服务器，也就是说第一次请求分配到第一台服务器上，第二次请求分配到第二台服务器上，如果只有两台服务器，第三次请求继续分配到第一台上，这样循环轮询下去，也就是服务器接收请求的比例是 1:1， 如果后端服务器down掉，能自动剔除。轮询是默认配置，不需要太多的配置")]),e._v(" "),a("p",[e._v("同一个项目分别使用8081和8082端口启动项目")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream web_servers {  \n   server localhost:8081;  \n   server localhost:8082;  \n}\n\nserver {\n    listen       80;\n    server_name  localhost;\n    #access_log  logs/host.access.log  main;\n\n\n    location / {\n        proxy_pass http://web_servers;\n        # 必须指定Header Host\n        proxy_set_header Host $host:$server_port;\n    }\n }\n")])])]),a("p",[e._v("访问地址仍然可以获得响应 "),a("code",[e._v("http://localhost/api/user/login?username=zhangsan&password=111111")]),e._v(" ，这种方式是轮询的")]),e._v(" "),a("h4",{attrs:{id:"_2-权重"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-权重"}},[e._v("#")]),e._v(" 2. 权重")]),e._v(" "),a("p",[e._v("指定轮询几率，weight和访问比率成正比, 也就是服务器接收请求的比例就是各自配置的weight的比例，用于后端服务器性能不均的情况,比如服务器性能差点就少接收点请求，服务器性能好点就多处理点请求。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream test {\n    server localhost:8081 weight=1;\n    server localhost:8082 weight=3;\n    server localhost:8083 weight=4 backup;\n}\n")])])]),a("p",[e._v("示例是4次请求只有一次被分配到8081上，其他3次分配到8082上。backup是指热备，只有当8081和8082都宕机的情况下才走8083")]),e._v(" "),a("h4",{attrs:{id:"_3-ip-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-ip-hash"}},[e._v("#")]),e._v(" 3. ip_hash")]),e._v(" "),a("p",[e._v("上面的2种方式都有一个问题，那就是下一个请求来的时候请求可能分发到另外一个服务器，当我们的程序不是无状态的时候(采用了session保存数据)，这时候就有一个很大的很问题了，比如把登录信息保存到了session中，那么跳转到另外一台服务器的时候就需要重新登录了，所以很多时候我们需要一个客户只访问一个服务器，那么就需要用iphash了，iphash的每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream test {\n    ip_hash;\n    server localhost:8080;\n    server localhost:8081;\n}\n")])])]),a("h4",{attrs:{id:"_4-fair-第三方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-fair-第三方"}},[e._v("#")]),e._v(" 4. fair(第三方)")]),e._v(" "),a("p",[e._v("按后端服务器的响应时间来分配请求，响应时间短的优先分配。这个配置是为了更快的给用户响应")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream backend {\n    fair;\n    server localhost:8080;\n    server localhost:8081;\n}\n")])])]),a("h4",{attrs:{id:"_5-url-hash-第三方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-url-hash-第三方"}},[e._v("#")]),e._v(" 5. url_hash(第三方)")]),e._v(" "),a("p",[e._v("按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。在upstream中加入hash语句，server语句中不能写入weight等其他的参数，"),a("code",[e._v("hash_method")]),e._v("是使用的hash算法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream backend {\n    hash $request_uri;\n    hash_method crc32;\n    server localhost:8080;\n    server localhost:8081;\n}\n")])])]),a("p",[e._v("以上5种负载均衡各自适用不同情况下使用，所以可以根据实际情况选择使用哪种策略模式,不过fair和url_hash需要安装第三方模块才能使用。")]),e._v(" "),a("h2",{attrs:{id:"五、动静分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、动静分离"}},[e._v("#")]),e._v(" "),a("strong",[e._v("五、动静分离")])]),e._v(" "),a("p",[e._v("动静分离是让动态网站里的动态网页根据一定规则把不变的资源和经常变的资源区分开来，动静资源做好了拆分以后，我们就可以根据静态资源的特点将其做缓存操作，这就是网站静态化处理的核心思路。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream web_servers {  \n       server localhost:8081;  \n       server localhost:8082;  \n}\n\nserver {\n    listen       80;\n    server_name  localhost;\n\n    set $doc_root /usr/local/var/www;\n\n    location ~* \\.(gif|jpg|jpeg|png|bmp|ico|swf|css|js)$ {\n       root $doc_root/img;\n    }\n\n    location / {\n        proxy_pass http://web_servers;\n        # 必须指定Header Host\n        proxy_set_header Host $host:$server_port;\n    }\n\n    error_page 500 502 503 504  /50x.html;  \n    location = /50x.html {  \n        root $doc_root;\n    }\n\n }\n")])])]),a("h2",{attrs:{id:"六、其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、其他"}},[e._v("#")]),e._v(" "),a("strong",[e._v("六、其他")])]),e._v(" "),a("h4",{attrs:{id:"_1-return指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-return指令"}},[e._v("#")]),e._v(" 1.return指令")]),e._v(" "),a("p",[e._v("返回http状态码 和 可选的第二个参数可以是重定向的URL")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("location /permanently/moved/url {\n    return 301 http://www.example.com/moved/here;\n}\n")])])]),a("h4",{attrs:{id:"_2-rewrite指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-rewrite指令"}},[e._v("#")]),e._v(" 2. rewrite指令")]),e._v(" "),a("p",[e._v("重写URI请求 rewrite，通过使用rewrite指令在请求处理期间多次修改请求URI，该指令具有一个可选参数和两个必需参数。")]),e._v(" "),a("p",[e._v("第一个(必需)参数是请求URI必须匹配的正则表达式。")]),e._v(" "),a("p",[e._v("第二个参数是用于替换匹配URI的URI。")]),e._v(" "),a("p",[e._v("可选的第三个参数是可以停止进一步重写指令的处理或发送重定向(代码301或302)的标志")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("location /users/ {\n    rewrite ^/users/(.*)$ /show?user=$1 break;\n}\n")])])]),a("h4",{attrs:{id:"_3-error-page指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-error-page指令"}},[e._v("#")]),e._v(" 3. error_page指令")]),e._v(" "),a("p",[e._v("使用error_page指令，您可以配置NGINX返回自定义页面以及错误代码，替换响应中的其他错误代码，或将浏览器重定向到其他URI。在以下示例中，"),a("code",[e._v("error_page")]),e._v("指令指定要返回404页面错误代码的页面(/404.html)。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("error_page 404 /404.html;\n")])])]),a("h4",{attrs:{id:"_4-日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-日志"}},[e._v("#")]),e._v(" 4. 日志")]),e._v(" "),a("p",[e._v("访问日志：需要开启压缩 gzip on; 否则不生成日志文件，打开"),a("code",[e._v("log_format")]),e._v("、"),a("code",[e._v("access_log")]),e._v("注释")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\naccess_log  /usr/local/etc/nginx/logs/host.access.log  main;\n\ngzip  on;\n')])])]),a("h4",{attrs:{id:"_5-deny-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-deny-指令"}},[e._v("#")]),e._v(" 5. deny 指令")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 禁止访问某个目录\nlocation ~* \\.(txt|doc)${\n    root $doc_root;\n    deny all;\n}   \n")])])]),a("h4",{attrs:{id:"_6-内置变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-内置变量"}},[e._v("#")]),e._v(" 6. 内置变量")]),e._v(" "),a("p",[e._v("nginx的配置文件中可以使用的内置变量以美元符"),a("code",[e._v("$")]),e._v("开始，也有人叫全局变量。其中，部分预定义的变量的值是可以改变的。另外，关注Java知音公众号，回复“后端面试”，送你一份面试题宝典！")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("$args")]),e._v(" ："),a("code",[e._v("#")]),e._v("这个变量等于请求行中的参数，同"),a("code",[e._v("$query_string")])]),e._v(" "),a("li",[a("code",[e._v("$content_length")]),e._v(" ：请求头中的Content-length字段。")]),e._v(" "),a("li",[a("code",[e._v("$content_type")]),e._v(" ：请求头中的Content-Type字段。")]),e._v(" "),a("li",[a("code",[e._v("$document_root")]),e._v(" ：当前请求在root指令中指定的值。")]),e._v(" "),a("li",[a("code",[e._v("$host")]),e._v(" ：请求主机头字段，否则为服务器名称。")]),e._v(" "),a("li",[a("code",[e._v("$http_user_agent")]),e._v(" ：客户端agent信息")]),e._v(" "),a("li",[a("code",[e._v("$http_cookie")]),e._v(" ：客户端cookie信息")]),e._v(" "),a("li",[a("code",[e._v("$limit_rate")]),e._v(" ：这个变量可以限制连接速率。")]),e._v(" "),a("li",[a("code",[e._v("$request_method")]),e._v(" ：客户端请求的动作，通常为GET或POST。")]),e._v(" "),a("li",[a("code",[e._v("$remote_addr")]),e._v(" ：客户端的IP地址。")]),e._v(" "),a("li",[a("code",[e._v("$remote_port")]),e._v(" ：客户端的端口。")]),e._v(" "),a("li",[a("code",[e._v("$remote_user")]),e._v(" ：已经经过Auth Basic Module验证的用户名。")]),e._v(" "),a("li",[a("code",[e._v("$request_filename")]),e._v(" ：当前请求的文件路径，由root或alias指令与URI请求生成。")]),e._v(" "),a("li",[a("code",[e._v("$scheme")]),e._v(" ：HTTP方法（如http，https）。")]),e._v(" "),a("li",[a("code",[e._v("$server_protocol")]),e._v(" ：请求使用的协议，通常是HTTP/1.0或HTTP/1.1。")]),e._v(" "),a("li",[a("code",[e._v("$server_addr")]),e._v(" ：服务器地址，在完成一次系统调用后可以确定这个值。")]),e._v(" "),a("li",[a("code",[e._v("$server_name")]),e._v(" ：服务器名称。")]),e._v(" "),a("li",[a("code",[e._v("$server_port")]),e._v(" ：请求到达服务器的端口号。")]),e._v(" "),a("li",[a("code",[e._v("$request_uri")]),e._v(" ：包含请求参数的原始URI，不包含主机名，如：”"),a("code",[e._v("/foo/bar.php?arg=baz")]),e._v("”。")]),e._v(" "),a("li",[a("code",[e._v("$uri")]),e._v(" ：不带请求参数的当前URI，"),a("code",[e._v("$uri")]),e._v("不包含主机名，如”"),a("code",[e._v("/foo/bar.html")]),e._v("”。")]),e._v(" "),a("li",[a("code",[e._v("$document_uri")]),e._v(" ：与"),a("code",[e._v("$uri")]),e._v("相同")])])])}),[],!1,null,null,null);t.default=o.exports}}]);