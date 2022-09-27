(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{609:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"基础-hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础-hook"}},[t._v("#")]),t._v(" 基础 Hook:")]),t._v(" "),a("h3",{attrs:{id:"_1-usestate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-usestate"}},[t._v("#")]),t._v(" 1.useState")]),t._v(" "),a("h4",{attrs:{id:"基础用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 . 初次渲染时，返回值 state 和 initialState 的值相同")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 在后续的重新渲染中吗，useState 返回的第一个值将始终是更新后最新的 state")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" initialState "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h4",{attrs:{id:"函数式更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数式更新"}},[t._v("#")]),t._v(" 函数式更新")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以将函数传递给 setCount ， 该函数将接受先前的state，并返回一个更新后的值。、")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevCount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" prevCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个 setCount 和 class 组件中的 setState 方法不同，useState不会自动合并更新对象。但我们可以用函数式的 setCount 结合展开运算符来达到合并更新对象的效果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("userInfo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setUserInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qile'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUserInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevUserInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("prevUser "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// useReducer 是另一种可选方案，它更适合用于管理包含多个子值的 state 对象。")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h4",{attrs:{id:"惰性初始state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#惰性初始state"}},[t._v("#")]),t._v(" 惰性初始State")]),t._v(" "),a("p",[t._v("initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始state需通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用")]),t._v(" "),a("h4",{attrs:{id:"跳过-state-更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跳过-state-更新"}},[t._v("#")]),t._v(" 跳过 state 更新")]),t._v(" "),a("p",[t._v("如果前一个和更新后的 state 相同，则会跳过子组件的渲染并且不会触发 effect 的执行\nReact 用的是 Object.is() 来比较 state")]),t._v(" "),a("h3",{attrs:{id:"_2-useeffect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-useeffect"}},[t._v("#")]),t._v(" 2.useEffect")]),t._v(" "),a("h4",{attrs:{id:"基础用法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础用法-2"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一个参数是接收一个包含命令式，且可能有副作用代码的函数。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认情况下 useEffect 它会在第一次渲染之后和每次更新之后都会执行。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其实就类似于 class 组件中 componentDidMount 和 componentDidUpdate 这两个生命周期钩子的效果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h4",{attrs:{id:"清除effect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除effect"}},[t._v("#")]),t._v(" 清除Effect")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 举个🌰，例如我们在组件卸载时需要清除effect创建的 订阅或者计时器 ID 等... 想要实现这一点，useEffect 函数需要返回一个清除函数。清除函数可以是 命名函数 也可以是 匿名的箭头函数")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" subscription "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清除订阅")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cleanup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    subscription"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unsubscription")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("）\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("blockquote",[a("p",[t._v("清除函数一般会在组件卸载前执行，如果组件多次渲染，则在执行下一个effect之前，上一个effect就会被清除。但这也会带来一个问题，就是每次更新都会创建新的订阅，那如何避免每次更新都触发effect的执行。这就需要借助 useEffect 的第二个参数了，第二个参数需要传递一个 数组，它是effect所依赖的值的集合。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时只有 props.source 改变时才会重新创建订阅")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" subscription "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清除订阅")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cleanup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    subscription"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unsubscription")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("）\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[a("code",[t._v("useEffect")]),t._v(" 的第二个参数如果传递一个 空数组，则只会执行一次effect （仅在组件挂载和卸载时执行），原理就是告诉 React 你的 effect 不依赖与 props 或 state 中任何的值，所以它永远都不需要重复执行。并且effect内部的props和state就会一直持有其初始值。")]),t._v(" "),a("h4",{attrs:{id:"用途"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[t._v("#")]),t._v(" 用途")]),t._v(" "),a("p",[t._v("只要是副作用，都可以使用 useEffect() 引入。 它的常见用途有下面几种。")]),t._v(" "),a("ul",[a("li",[t._v("获取数据")]),t._v(" "),a("li",[t._v("事件监听或订阅")]),t._v(" "),a("li",[t._v("改变 DOM")]),t._v(" "),a("li",[t._v("输出日志")])]),t._v(" "),a("h4",{attrs:{id:"effect的执行时机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#effect的执行时机"}},[t._v("#")]),t._v(" effect的执行时机")]),t._v(" "),a("p",[t._v("React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect ，并非所有 effect 都可以被延迟执行。比如，对于用户可见的DOM变更就必在浏览器执行下一次绘制前被同步更新，这样才不会影响用户的视觉体验，React 提供了额外的 Hook ， useLayoutEffect 来处理这类effect。它与 useEffect 的结构相同，区别只是调用的时机不同，会早于 useEffect。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[t._v("需要注意的是 useLayoutEffect() 会阻塞页面的渲染。")])]),a("h4",{attrs:{id:"effect-的依赖频繁变化-该怎么办"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#effect-的依赖频繁变化-该怎么办"}},[t._v("#")]),t._v(" effect 的依赖频繁变化，该怎么办？")]),t._v(" "),a("p",[t._v("其实通过上面的笔记，我们可以想想，如果我们给 useEffect 的第二个参数传入一个 空数组 [] ，就可以让useEffect 中 effect 只执行一次。但这又带来了新问题，如果我们需要让 effect 中的state更新。那此时是没法做到的。上代码来说明如果解决这个问题")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 我们可以使用 setState 的函数式更新形式。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Counter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" timerId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在这不依赖于外部的 `count` 变量")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timerId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 我们的 effect 不使用组件作用域中的任何变量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h4",{attrs:{id:"注意点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[t._v("#")]),t._v(" 注意点")]),t._v(" "),a("p",[t._v("使用 useEffect() 时，有一点需要注意。如果有多个副作用，应该调用多个 useEffect(), 而不应该合并写在一起。")]),t._v(" "),a("h3",{attrs:{id:"_3-usecontext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-usecontext"}},[t._v("#")]),t._v(" 3.useContext")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在父组件通过 createContext 创建 context")]),t._v(" "),a("ul",[a("li",[t._v("const MyContext = createContext(initialValue)")])])]),t._v(" "),a("li",[a("p",[t._v("在子孙组件中使用，但别忘记 useContext 的参数必须是 context 对象本身：")]),t._v(" "),a("ul",[a("li",[t._v("useContext(MyContext)")]),t._v(" "),a("li",[t._v("useContext(MyContext) 其实相当于 context API 中的 "),a("code",[t._v("<MyContext.Consumer>")])]),t._v(" "),a("li",[t._v("useContext(MyContext) 只是让你能够读取 context 的值以及订阅 context 的变化。仍然需要在上层组件树中使用 "),a("code",[t._v("<MyContext.Provider>")]),t._v(" 来为下层组件提供 context。")])])])]),t._v(" "),a("p",[a("strong",[t._v("如何使用：")]),t._v(" "),a("iframe",{staticStyle:{width:"793px",height:"1200px",border:"0",transform:"scale(1)",overflow:"hidden"},attrs:{src:"https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=one-dark&wt=none&l=jsx&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=import%2520%257B%2520createContext%252C%2520useContext%252C%2520useState%2520%257D%2520from%2520%2522react%2522%250A%250Aconst%2520themes%2520%253D%2520%257B%250A%2520%2520light%253A%2520%257B%250A%2520%2520%2520%2520type%253A%2520%2522light%2522%252C%250A%2520%2520%2520%2520foreground%253A%2520%2522%2523000000%2522%252C%250A%2520%2520%2520%2520background%253A%2520%2522%2523eeeeee%2522%252C%250A%2520%2520%257D%252C%250A%2520%2520dark%253A%2520%257B%250A%2520%2520%2520%2520type%253A%2520%2522dark%2522%252C%250A%2520%2520%2520%2520foreground%253A%2520%2522%2523ffffff%2522%252C%250A%2520%2520%2520%2520background%253A%2520%2522%2523222222%2522%252C%250A%2520%2520%257D%252C%250A%257D%250Aconst%2520ThemeContext%2520%253D%2520createContext%28themes.light%29%250A%250Afunction%2520ThemedButton%28%29%2520%257B%250A%2520%2520const%2520theme%2520%253D%2520useContext%28ThemeContext%29%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cbutton%2520style%253D%257B%257B%2520background%253A%2520theme.background%252C%2520color%253A%2520theme.foreground%2520%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520I%2520am%2520styled%2520by%2520theme%2520context%21%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%29%250A%257D%250A%250Afunction%2520Toolbar%28props%29%2520%257B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253CThemedButton%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%250A%257D%250A%250Aexport%2520function%2520ContextDemo%28%29%2520%257B%250A%2520%2520const%2520%255Btheme%252C%2520setTheme%255D%2520%253D%2520useState%28themes.dark%29%250A%2520%2520const%2520handleThemeChange%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520const%2520currentTheme%2520%253D%2520theme.type%2520%21%253D%253D%2520%2522light%2522%2520%253F%2520themes.light%2520%253A%2520themes.dark%250A%2520%2520%2520%2520setTheme%28currentTheme%29%250A%2520%2520%257D%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253CThemeContext.Provider%2520value%253D%257Btheme%257D%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520onClick%253D%257BhandleThemeChange%257D%253E%25E7%2582%25B9%25E5%2587%25BB%25E5%2588%2587%25E6%258D%25A2%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253CToolbar%253E%253C%252FToolbar%253E%250A%2520%2520%2520%2520%253C%252FThemeContext.Provider%253E%250A%2520%2520%29%250A%257D",sandbox:"allow-scripts allow-same-origin"}})]),t._v(" "),a("p",[t._v("注意点：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("当前的 context 值由上层组件汇总距离当前组件最近的 "),a("code",[t._v("<MyContext.providers>")]),t._v(" 的 "),a("code",[t._v("value")]),t._v(" prop 决定")])]),t._v(" "),a("li",[a("p",[t._v("调用了 useContext 的组件总会在 context 值变化时重新渲染。如果重渲染组件的开销较大，你可以 通过使用 memoization 来优化。")])])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/facebook/react/issues/15156#issuecomment-474590693",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);