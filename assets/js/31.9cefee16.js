(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{591:function(s,i,e){"use strict";e.r(i);var r=e(14),l=Object(r.a)({},(function(){var s=this,i=s.$createElement,e=s._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_1-什么是ingress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是ingress"}},[s._v("#")]),s._v(" 1.什么是ingress")]),s._v(" "),e("ul",[e("li",[s._v("把端口号对外暴露，通过ip+端口号进行访问\n"),e("ul",[e("li",[s._v("可以用Service里面的NodePort实现")])])]),s._v(" "),e("li",[s._v("NodePort的缺陷")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.rishiqing.com/task/v1/folder/file/url?signature=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoidmlldyIsImlhdCI6MTY1MDE4OTMzMSwiZmlsZUlkIjo2Mjc3NDc0LCJ0aW1lc3RhbXAiOjE2NTAxODkzMzE5OTB9.PqkQ2umcSdvEWFUM5iYNaKeAc0daaqsYOWt0X1WZQso",alt:"图示"}})]),s._v(" "),e("blockquote",[e("p",[s._v("如果通过 Ingress 就可以避免 NodePort 的缺陷")])]),s._v(" "),e("h2",{attrs:{id:"_2-ingress和pod关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-ingress和pod关系"}},[s._v("#")]),s._v(" 2.Ingress和Pod关系")]),s._v(" "),e("ul",[e("li",[s._v("pod和ingress通过service关联的\n"),e("ul",[e("li",[s._v("ingress作为统一入口，由service关联一组pod")])])])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.rishiqing.com/task/v1/folder/file/url?signature=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoidmlldyIsImlhdCI6MTY1MDE4OTUzNywiZmlsZUlkIjo2Mjc3NDk1LCJ0aW1lc3RhbXAiOjE2NTAxODk1MzcyNTd9.U-ih3UOZEQUmkM2KjfOiI0Wvi0DPqYL0Lhy4Lcr8crM",alt:"tu"}})]),s._v(" "),e("h2",{attrs:{id:"_3-ingress工作流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-ingress工作流程"}},[s._v("#")]),s._v(" 3.Ingress工作流程")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.rishiqing.com/task/v1/folder/file/url?signature=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoidmlldyIsImlhdCI6MTY1MDE4OTY1MiwiZmlsZUlkIjo2Mjc3NTA1LCJ0aW1lc3RhbXAiOjE2NTAxODk2NTI1MDF9.aDY0eICP9FWcokV-XovWkdS0WgxoItQKAZdhdNeHxM8",alt:"tu"}})]),s._v(" "),e("blockquote",[e("p",[s._v("ingress不是内部组件，需要单独安装部署")])]),s._v(" "),e("h2",{attrs:{id:"_4-如何使用ingress-ingress-是一个-controller"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何使用ingress-ingress-是一个-controller"}},[s._v("#")]),s._v(" 4.如何使用Ingress （Ingress 是一个 Controller）")]),s._v(" "),e("blockquote",[e("p",[s._v("可以选择官方维护的nginx控制器实现部署")])]),s._v(" "),e("h3",{attrs:{id:"_4-1使用ingress对外暴露应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1使用ingress对外暴露应用"}},[s._v("#")]),s._v(" 4.1使用Ingress对外暴露应用")]),s._v(" "),e("hr"),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.rishiqing.com/task/v1/folder/file/url?signature=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoidmlldyIsImlhdCI6MTY1MDE5MDA1NCwiZmlsZUlkIjo2Mjc3NTQ5LCJ0aW1lc3RhbXAiOjE2NTAxOTAwNTQxODZ9.rGrXfQeQXnUlnBB4MUU2-B9S5jXWNme5XVthGbeHHcM",alt:"tu"}})]),s._v(" "),e("hr"),s._v(" "),e("ol",[e("li",[e("p",[s._v("下载 ingress-controller.yaml 文件")])]),s._v(" "),e("li",[e("p",[s._v("拉取相关镜像，进行Ingress的创建和部署")])])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl apply -f ingress-controller.yaml \n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("配置Ingress的访问规则")])]),s._v(" "),e("hr"),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.rishiqing.com/task/v1/folder/file/url?signature=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoidmlldyIsImlhdCI6MTY1MDE5MDQxMywiZmlsZUlkIjo2Mjc3NTczLCJ0aW1lc3RhbXAiOjE2NTAxOTA0MTM4MjV9.x5sE6X_pb4ks_arAV_5YVEBWmwSjNwXmuw-nRIhbqMc",alt:"tu"}})]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubctl apply -f ingress-rule.yaml\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://www.rishiqing.com/task/v1/folder/file/url?signature=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoidmlldyIsImlhdCI6MTY1MDE5MDY0NiwiZmlsZUlkIjo2Mjc3NTgxLCJ0aW1lc3RhbXAiOjE2NTAxOTA2NDY0NzF9.uxsS00hJI6TQlB3kDwlIhgDre_PId0EE_d2KBMFp1Kk",alt:"tu"}})]),s._v(" "),e("hr")])}),[],!1,null,null,null);i.default=l.exports}}]);