import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "aminBlog",
  description: "阿敏的博客，记录自己的胡思乱想",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav导航栏 左边的logo旁边的文字
    siteTitle: "竹枝",
    // 网站左上角的logo图标
    logo: "/amin2.jpg",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "技术",
        items: [
          {
            text: "前端",
            link: "/frontend",
            items: [
              { text: "Javascript相关", link: "/frontend/javascript.md" },
              { text: "ES6相关", link: "/frontend/es6.md" },
            ],
          },
          {
            text: "后端",
            items: [
              { text: "Python", link: "/backend/python" },
              { text: "Node", link: "/backend/node" },
            ],
          },
          { text: "区块链", link: "/blockchain" },
        ],
      },
      {
        text: "AI",
        items: [
          {
            text: "Img2Img",
            link: "https://chat.openai.com/",
          },
          { text: "Voice2Voice", link: "https://chat.openai.com/" },
        ],
      },
      {
        text: "胡思乱想🤪",
        items: [
          {
            text: "旅游攻略",
            items: [
              { text: "鼓浪屿旅游指南", link: "/other/鼓浪屿旅游指南.md" },
            ],
          },
          {
            text: "食谱",
            items: [
              { text: "炖牛腩", link: "/other/food/打工储备粮：炖牛腩.md" },
            ],
          },
        ],
      },
    ],

    sidebar: {
      "/frontend/": {
        text: "技术",
        // 开启折叠按钮
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: "前端",
            items: [
              {
                text: "Javascript相关",
                items: [
                  {
                    text: "原型和原型链",
                    link: "./frontend/javascript/props.md",
                  },
                  {
                    text: "Javascript中的继承",
                    link: "/frontend/javascript/extend.md",
                  },
                  {
                    text: "作用域和作用域链",
                    link: "/frontend/javascript/作用域和作用域链.md",
                  },
                  {
                    text: "闭包",
                    link: "/frontend/javascript/闭包.md",
                  },
                  {
                    text: "typeof",
                    link: "/frontend/javascript/typeof.md",
                  },
                  {
                    text: "instanceof",
                    link: "/frontend/javascript/instanceof.md",
                  },
                  {
                    text: "new",
                    link: "/frontend/javascript/new.md",
                  },
                  {
                    text: "call、apply、bind",
                    link: "/frontend/javascript/call、apply、bind.md",
                  },
                  {
                    text: "深拷贝（递归）",
                    link: "/frontend/javascript/深拷贝（递归）.md",
                  },
                  {
                    text: "柯里化",
                    link: "/frontend/javascript/柯里化.md",
                  },
                  {
                    text: "V8引擎的垃圾回收机制",
                    link: "/frontend/javascript/V8引擎的垃圾回收机制.md",
                  },
                  {
                    text: "浮点数精度 缺失问题",
                    link: "/frontend/javascript/浮点数精度 缺失问题.md",
                  },
                  {
                    text: "事件循环机制",
                    link: "/frontend/javascript/事件循环机制.md",
                  },
                  {
                    text: "数组扁平化",
                    link: "/frontend/javascript/数组扁平化.md",
                  },
                  {
                    text: "JavaScript的数据类型",
                    link: "/frontend/javascript/JavaScript的数据类型.md",
                  },
                  {
                    text: "数据类型的检测方法",
                    link: "/frontend/javascript/数据类型的检测方法.md",
                  },
                  {
                    text: "类型转换",
                    link: "/frontend/javascript/类型转换.md",
                  },
                  {
                    text: "事件流和事件委托",
                    link: "/frontend/javascript/事件流和事件委托.md",
                  },
                  {
                    text: "IIFE立即执行匿名函数",
                    link: "/frontend/javascript/IIFE立即执行匿名函数.md",
                  },
                ],
              },
              {
                text: "HTML相关",
                items: [
                  {
                    text: "行内元素和块级元素",
                    link: "/frontend/html/行内元素和块级元素.md",
                  },
                  {
                    text: "src和href的区别",
                    link: "/frontend/html/src和href的区别.md",
                  },
                  {
                    text: "对HTML语义化的理解",
                    link: "/frontend/html/对HTML语义化的理解.md",
                  },
                  {
                    text: "script标签中defer和async的区别",
                    link: "/frontend/html/script标签中defer和async的区别.md",
                  },
                  {
                    text: " DOCTYPE(文档类型)的作用",
                    link: "/frontend/html/DOCTYPE(文档类型)的作用.md",
                  },
                  {
                    text: "meta标签",
                    link: "/frontend/html/meta标签.md",
                  },
                ],
              },
              {
                text: "CSS相关",
                items: [
                  {
                    text: "BFC",
                    link: "/frontend/css/BFC/BFC.md",
                  },
                  {
                    text: "CSS 模块化问题",
                    link: "/frontend/css/CSS 模块化问题/CSS 模块化问题.md",
                  },
                  {
                    text: "CSS中 可继承 与 不可继承 的属性",
                    link: "/frontend/css/CSS中 可继承 与 不可继承 的属性/CSS中 可继承 与 不可继承 的属性.md",
                  },
                  {
                    text: "CSS中的常见布局",
                    link: "/frontend/css/CSS中的常见布局/CSS中的常见布局.md",
                  },
                  {
                    text: "CSS的一些性能优化",
                    link: "/frontend/css/CSS的一些性能优化/CSS的一些性能优化.md",
                  },
                  {
                    text: "CSS选择器及其优先级",
                    link: "/frontend/css/CSS选择器及其优先级/CSS选择器及其优先级.md",
                  },
                  {
                    text: "display",
                    link: "/frontend/css/display/display.md",
                  },
                  {
                    text: "flex常见考题",
                    link: "/frontend/css/flex常见考题/flex常见考题.md",
                  },
                  {
                    text: "less和sass的区别",
                    link: "/frontend/css/less和sass的区别/less和sass的区别.md",
                  },
                  {
                    text: "link和@import的区别",
                    link: "/frontend/css/link和@import的区别/link和@import的区别.md",
                  },
                  {
                    text: "position的取值问题",
                    link: "/frontend/css/position的取值问题/position的取值问题.md",
                  },
                  {
                    text: "transform,transition和animation的区别",
                    link: "/frontend/css/transform,transition和animation/transform,transition和animation的区别.md",
                  },
                  {
                    text: "单行省略",
                    link: "/frontend/css/单行省略/单行省略.md",
                  },
                  {
                    text: "样式收集",
                    link: "/frontend/css/样式收集/样式收集.md",
                  },
                  {
                    text: "水平垂直居中问题",
                    link: "/frontend/css/水平垂直居中问题/水平垂直居中问题.md",
                  },
                  {
                    text: "画图形（三角形、梯形、扇形）",
                    link: "/frontend/css/画图形（三角形、梯形、扇形）/画图形（三角形、梯形、扇形）.md",
                  },
                  {
                    text: "隐藏元素的方法有哪些",
                    link: "/frontend/css/隐藏元素的方法有哪些/隐藏元素的方法有哪些.md",
                  },
                ],
              },
              {
                text: "ES6相关",
                items: [
                  {
                    text: "babel下的let与const",
                    link: "/frontend/ES6/babel下的let与const/babel下的let与const.md",
                  },
                  {
                    text: "let const var的区别",
                    link: "/frontend/ES6/let const var的区别/let const var的区别.md",
                  },
                  {
                    text: "Map的基本讲解",
                    link: "/frontend/ES6/Map的基本讲解/Map的基本讲解.md",
                  },
                  {
                    text: "WeakMap的基本讲解",
                    link: "/frontend/ES6/WeakMap的基本讲解/WeakMap的基本讲解.md",
                  },
                  {
                    text: "Set的基本讲解",
                    link: "/frontend/ES6/Set的基本讲解/Set的基本讲解.md",
                  },
                  {
                    text: "WeakSet的基本讲解",
                    link: "/frontend/ES6/WeakSet的基本讲解/WeakSet的基本讲解.md",
                  },
                  {
                    text: "Promise",
                    link: "/frontend/ES6/Promise/Promise.md",
                  },
                  {
                    text: "Promise手写",
                    link: "/frontend/ES6/Promise手写/Promise手写.md",
                  },
                  {
                    text: "Promise的一些有意思的输出题",
                    link: "/frontend/ES6/Promise的一些有意思的输出题/Promise的一些有意思的输出题.md",
                  },
                  {
                    text: "Promise相关考题",
                    link: "/frontend/ES6/Promise相关考题/Promise相关考题.md",
                  },
                  {
                    text: "Proxy",
                    link: "/frontend/ES6/Proxy/Proxy.md",
                  },
                  {
                    text: "扩展运算符（ ... ）的作用及使用场景",
                    link: "/frontend/ES6/扩展运算符（ ... ）的作用及使用场景/扩展运算符（ ... ）的作用及使用场景.md",
                  },
                  {
                    text: "箭头函数",
                    link: "/frontend/ES6/箭头函数/箭头函数.md",
                  },
                ],
              },
              {
                text: "浏览器相关",
                items: [
                  { text: "BOM", link: "/frontend/浏览器/BOM/BOM.md" },
                  {
                    text: "DNS劫持",
                    link: "/frontend/浏览器/DNS劫持/DNS劫持.md",
                  },
                  { text: "DOM", link: "/frontend/浏览器/DOM/DOM.md" },
                  {
                    text: "串行、并行和并发的区别",
                    link: "/frontend/浏览器/串行、并行和并发的区别/串行、并行和并发的区别.md",
                  },
                  {
                    text: "事件循环机制",
                    link: "/frontend/浏览器/事件循环机制/事件循环机制.md",
                  },
                  {
                    text: "setTimeout和setInterval的区别",
                    link: "/frontend/浏览器/事件循环机制/setTimeout和setInterval的区别/setTimeout和setInterval的区别.md",
                  },
                  {
                    text: "宏任务和微任务",
                    link: "/frontend/浏览器/事件循环机制/宏任务和微任务/宏任务和微任务.md",
                  },
                  {
                    text: "从输入URL到页面出现，浏览器做了什么-",
                    link: "/frontend/浏览器/从输入URL到页面出现，浏览器做了什么-/从输入URL到页面出现，浏览器做了什么-.md",
                  },
                  {
                    text: "对V8的理解",
                    link: "/frontend/浏览器/对V8的理解/对V8的理解.md",
                  },
                  {
                    text: "浏览器中的进程and线程",
                    link: "/frontend/浏览器/浏览器中的进程and线程/浏览器中的进程and线程.md",
                  },
                  {
                    text: "浏览器储存",
                    link: "/frontend/浏览器/浏览器储存/浏览器储存.md",
                  },
                  {
                    text: "cookie、sessionStorage、localstorage的区别",
                    link: "/frontend/浏览器/浏览器储存/cookie、sessionStorage、localsto/cookie、sessionStorage、localstorage的区别.md",
                  },
                  {
                    text: "浏览器缓存",
                    link: "/frontend/浏览器/浏览器缓存/浏览器缓存.md",
                  },
                  {
                    text: "浏览器可视化工具Performance",
                    link: "/frontend/浏览器/浏览器可视化工具Performance/浏览器可视化工具Performance.md",
                  },
                  {
                    text: "请求状态码",
                    link: "/frontend/浏览器/请求状态码/请求状态码.md",
                  },
                  { text: "跨域", link: "/frontend/浏览器/跨域/跨域.md" },
                  {
                    text: "路由（前端路由）",
                    link: "/frontend/浏览器/路由（前端路由）/路由（前端路由）.md",
                  },
                  {
                    text: "路由（后端路由）",
                    link: "/frontend/浏览器/路由（后端路由）/路由（后端路由）.md",
                  },
                  {
                    text: "面试官：页面白屏怎么优化？  了解过gzip吗？",
                    link: "/frontend/浏览器/面试官：页面白屏怎么优化？  了解过gzip吗？/面试官：页面白屏怎么优化？  了解过gzip吗？.md",
                  },
                  {
                    text: "gzip",
                    link: "/frontend/浏览器/面试官：页面白屏怎么优化？  了解过gzip吗？/gzip/gzip.md",
                  },
                  {
                    text: "预渲染   和   服务器渲染",
                    link: "/frontend/浏览器/预渲染   和   服务器渲染/预渲染   和   服务器渲染.md",
                  },
                  {
                    text: "（同源页面间的）跨页面通信",
                    link: "/frontend/浏览器/（同源页面间的）跨页面通信/（同源页面间的）跨页面通信.md",
                  },
                  {
                    text: "（非同源页面间的）跨页面通信",
                    link: "/frontend/浏览器/（非同源页面间的）跨页面通信/（非同源页面间的）跨页面通信.md",
                  },
                ],
              },
              {
                text: "计算机网络",
                items: [
                  {
                    text: "get 和 post 的区别",
                    link: "/frontend/计算机网络/get 和 post 的区别/get 和 post 的区别.md",
                  },
                  {
                    text: "HTTP和HTTPS的区别",
                    link: "/frontend/计算机网络/HTTP和HTTPS的区别/HTTP和HTTPS的区别.md",
                  },
                  {
                    text: "HTTP常见状态码",
                    link: "/frontend/计算机网络/HTTP常见状态码/HTTP常见状态码.md",
                  },
                  {
                    text: "HTTP状态码304 是多好还是少好",
                    link: "/frontend/计算机网络/HTTP状态码304 是多好还是少好/HTTP状态码304 是多好还是少好.md",
                  },
                  {
                    text: "TCP-IP网络模型",
                    link: "/frontend/计算机网络/TCP-IP网络模型/TCP-IP网络模型.md",
                  },
                  {
                    text: "网络分层",
                    link: "/frontend/计算机网络/网络分层/网络分层.md",
                  },
                  {
                    text: "聊一聊HTTP3.0 、HTTP2.0 和 HTTP1.0 有什么区别",
                    link: "/frontend/计算机网络/聊一聊HTTP3.0 、HTTP2.0 和 HTTP1.0 /聊一聊HTTP3.0 、HTTP2.0 和 HTTP1.0 有什么区别.md",
                  },
                ],
              },
              {
                text: "前端安全相关",
                link: "/frontend/前端网络相关/前端安全相关.md",
              },
              { text: "Vue相关", link: "/frontend/Vue/Vue.md" },
              { text: "webpack相关", link: "/frontend/webpack/webpack基础.md" },
              {
                text: "手写相关",
                link: "/frontend/手写相关/面试手写题汇总.md",
              },
              { text: "前端优化相关", link: "/frontend/前端优化.md" },
              {
                text: "常考技能点",
                link: "/frontend/常考技能点/常考技能点.md",
              },
              { text: "devtools", link: "/frontend/devtools/devtools.md" },
            ],
          },
        ],
      },
      "/blockchain/": {
        text: "区块链学习笔记",
        // 开启折叠按钮
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: "区块链相关",
            items: [{ text: "尝试1", link: "/blockchain/test1.md" }],
          },
        ],
      },
    },
    assetsInclude: ["**/*.JPG", "**/*.jpg"],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
