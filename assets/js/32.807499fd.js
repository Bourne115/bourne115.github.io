(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{593:function(a,t,s){"use strict";s.r(t);var e=s(14),l=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-为什么需要helm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么需要helm"}},[a._v("#")]),a._v(" 1.为什么需要helm")]),a._v(" "),s("ul",[s("li",[a._v("如果我们不用helm，进行部署应用的基本过程\n"),s("ul",[s("li",[a._v("编写yaml文件")]),a._v(" "),s("li",[a._v("通过Deployment来部署pod")]),a._v(" "),s("li",[a._v("用Service做服务发现")]),a._v(" "),s("li",[a._v("Ingress做端口暴露")])])])]),a._v(" "),s("blockquote",[s("p",[a._v("上面这种方式，部署单一应用，少数服务的应用还是比较适合的，但如果部署微服务项目，可能几十个服务，每个服务都有一套yaml文件，那维护这个yaml文件就会很麻烦，还有版本管理也不方便。")])]),a._v(" "),s("p",[s("a",{attrs:{href:"https://helm.sh",target:"_blank",rel:"noopener noreferrer"}},[a._v("helm官网"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"_2-helm可以解决那些问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-helm可以解决那些问题"}},[a._v("#")]),a._v(" 2.helm可以解决那些问题")]),a._v(" "),s("ul",[s("li",[a._v("使用helm可以把我们的yaml文件作为一个整体管理")]),a._v(" "),s("li",[a._v("实现yaml高效复用")]),a._v(" "),s("li",[a._v("使用helm实现应用级别的版本管理")])]),a._v(" "),s("h2",{attrs:{id:"_3-helm介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-helm介绍"}},[a._v("#")]),a._v(" 3.helm介绍")]),a._v(" "),s("p",[a._v("Helm 是一个Kubernetes的包管理工具，就想Linux下的包管理器，如yum/apt 等， 可以很方便的将之前打包好的 yaml 文件 部署到 k8s上")]),a._v(" "),s("h3",{attrs:{id:"_3个重要概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3个重要概念"}},[a._v("#")]),a._v(" 3个重要概念")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("helm：是一个命令式行客户端，主要用于K8s应用 chart 的创建、打包、发布和管理")])]),a._v(" "),s("li",[s("p",[a._v("Chart：应用描述，一系列用于描述k8s资源相关文件的集合 （就是把yaml打包，yaml的集合）")])]),a._v(" "),s("li",[s("p",[a._v("Release：基于Chart的部署实体，一个chart被helm运行后将会生成对应的一个release，将在k8s中创建出真实运行的资源对象 （可实现应用级别的版本管理）")])])]),a._v(" "),s("h2",{attrs:{id:"_4-helm-v3版本的一些变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-helm-v3版本的一些变化"}},[a._v("#")]),a._v(" 4.helm v3版本的一些变化")]),a._v(" "),s("blockquote",[s("p",[a._v("v3版本是2019发布的")])]),a._v(" "),s("p",[s("strong",[a._v("V3之前的架构：")])]),a._v(" "),s("hr"),a._v(" "),s("p",[s("img",{attrs:{src:"https://www.rishiqing.com/task/v1/folder/file/url?signature=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoidmlldyIsImlhdCI6MTY1MTAyNjk1NiwiZmlsZUlkIjo2MzI5ODEzLCJ0aW1lc3RhbXAiOjE2NTEwMjY5NTYxODd9.ypTxCW6bChA0RdwfJbg3BGReD3JCI-ikbqrM4RH20yE",alt:"tu"}})]),a._v(" "),s("hr"),a._v(" "),s("p",[s("strong",[a._v("v3+ 的架构：")])]),a._v(" "),s("hr"),a._v(" "),s("p",[s("img",{attrs:{src:"https://www.rishiqing.com/task/v1/folder/file/url?signature=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoidmlldyIsImlhdCI6MTY1MTAyNzAxNSwiZmlsZUlkIjo2MzI5ODI2LCJ0aW1lc3RhbXAiOjE2NTEwMjcwMTU3MTh9.TlUPw5ZJXewRxKso6RDVgQ6sU0JB0ojnQ_pwwVA9x-c",alt:"tu"}})]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("可以看到 v3 和 v3之前版本 的架构是有一些变化的")]),a._v(" "),s("ul",[s("li",[a._v("删除了 Tiller")]),a._v(" "),s("li",[a._v("release可在不同命名空间重用")]),a._v(" "),s("li",[a._v("可以将chart推到docker仓库中")])]),a._v(" "),s("h2",{attrs:{id:"_5-helm-的安装和配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-helm-的安装和配置"}},[a._v("#")]),a._v(" 5.helm 的安装和配置")]),a._v(" "),s("p",[a._v("这个就直接按照官网的文档，一步步来就可以，而且官网文档很nice")]),a._v(" "),s("p",[a._v("官网文档：https://helm.sh/zh/docs/intro/install/")]),a._v(" "),s("p",[a._v("一般通过把helm的压缩包上传到服务器中解压安装就可以了")]),a._v(" "),s("p",[a._v("tar zxvf  helm-v3.x.x.x-linux-amd64.tar.gz")]),a._v(" "),s("p",[a._v("把解压后的包移动到 mv /usr/bin")]),a._v(" "),s("ul",[s("li",[a._v("配置helm仓库的一些常用命令")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm repo "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("repoName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("repoUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nhelm repo update\nhelm list\nhelm remove "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("repoName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h2",{attrs:{id:"_6-helm快速部署应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-helm快速部署应用"}},[a._v("#")]),a._v(" 6.helm快速部署应用")]),a._v(" "),s("ul",[s("li",[a._v("使用命令搜索应用：helm search repo [rappName] wave")]),a._v(" "),s("li",[a._v("根据搜索内容进行选择安装：helm install  [installName] [originName]\n"),s("ul",[s("li",[a._v("查看状态：helm list")]),a._v(" "),s("li",[a._v("helm status [installName]")])])])]),a._v(" "),s("h2",{attrs:{id:"_7-创建-升级一个自定义的chart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-创建-升级一个自定义的chart"}},[a._v("#")]),a._v(" 7.创建/升级一个自定义的Chart")]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("首先")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm create "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("chartName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  /  helm upgrade "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("chartName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("然后可进入一个Chart文件夹")])]),a._v(" "),s("ul",[s("li",[a._v("chart.yaml: 当前chart属性配置信息")]),a._v(" "),s("li",[a._v("templates: 编写yaml文件放到这个目录中")]),a._v(" "),s("li",[a._v("values.yaml: yaml文件可以用到的全局变量")])]),a._v(" "),s("h2",{attrs:{id:"_8-如何给chart中-templates-里面的yaml文件复用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-如何给chart中-templates-里面的yaml文件复用"}},[a._v("#")]),a._v(" 8.如何给Chart中 templates 里面的yaml文件复用")]),a._v(" "),s("ul",[s("li",[a._v("可以通过变量的形式来配置 在values.yaml 文件中定义Chart的全局变量\n在values.yaml 中定义变量")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("imageName: nginx\nport: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("ul",[s("li",[a._v("在templates的yaml文件中使用")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" .Valuse.变量名称 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n使用 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" .Release.Name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" 根据版本动态生成名称 \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])])}),[],!1,null,null,null);t.default=l.exports}}]);