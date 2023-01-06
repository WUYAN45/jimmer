"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[583],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(t),p=a,f=m["".concat(u,".").concat(p)]||m[p]||s[p]||o;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(7294),a=t(4334),o="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(3117),a=t(7294),o=t(4334),l=t(2389),i=t(7392),u=t(7094),c=t(2466),d="tabList__CuJ",s="tabItem_LNqP";function m(e){var n,t,l=e.lazy,m=e.block,p=e.defaultValue,f=e.values,h=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.l)(N,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(n=null!=p?p:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:b[0].props.value;if(null!==y&&!N.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,u.U)(),T=g.tabGroupChoices,j=g.setTabGroupChoices,w=(0,a.useState)(y),O=w[0],x=w[1],E=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var D=T[h];null!=D&&D!==O&&N.some((function(e){return e.value===D}))&&x(D)}var I=function(e){var n=e.currentTarget,t=E.indexOf(n),r=N[t].value;r!==O&&(C(n),x(r),null!=h&&j(h,String(r)))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;t=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var o,l=E.indexOf(e.currentTarget)-1;t=null!=(o=E[l])?o:E[E.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},v)},N.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:I,onClick:I},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function p(e){var n=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},7852:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),l=t(5488),i=t(5162),u=["components"],c={sidebar_position:5,title:"jimmer-core\u5b50\u9879\u76ee"},d=void 0,s={unversionedId:"jimmer-core/index",id:"jimmer-core/index",title:"jimmer-core\u5b50\u9879\u76ee",description:"\u672c\u6587\u4ece\u529f\u80fd\u5217\u8868\u7684\u7b2c\u4e00\u90e8\u5206\u590d\u5236\u800c\u6765\uff0c\u5185\u5bb9\u5b8c\u5168\u4e00\u6837\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/jimmer-core/index.mdx",sourceDirName:"jimmer-core",slug:"/jimmer-core/",permalink:"/jimmer/zh/docs/jimmer-core/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-core/index.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"jimmer-core\u5b50\u9879\u76ee"},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/jimmer/zh/docs/get-started"},next:{title:"\u73b0\u6709\u95ee\u9898\u548c\u89e3\u51b3\u65b9\u6848",permalink:"/jimmer/zh/docs/jimmer-core/existing-problems"}},m={},p=[],f={toc:p};function h(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u672c\u6587\u4ece",(0,o.kt)("a",{parentName:"p",href:"../intro"},"\u529f\u80fd\u5217\u8868"),"\u7684\u7b2c\u4e00\u90e8\u5206\u590d\u5236\u800c\u6765\uff0c\u5185\u5bb9\u5b8c\u5168\u4e00\u6837\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u5df2\u7ecf\u9605\u8bfb\u8fc7",(0,o.kt)("a",{parentName:"p",href:"../intro"},"\u529f\u80fd\u5217\u8868"),"\u7684\u7b2c\u4e00\u90e8\u5206\uff0c\u53ef\u4ee5\u8df3\u8fc7\u672c\u6587\uff0c\u76f4\u63a5\u9605\u8bfb\u66f4\u6df1\u7684\u6587\u6863\u3002")),(0,o.kt)("p",null,"\u5f3a\u5927\u7684\u53ea\u8bfb\u6570\u636e\u6a21\u578b"),(0,o.kt)("p",null,"\u6211\u4eec\u5c06\u6d41\u884c\u7684JavaScript\u9879\u76ee",(0,o.kt)("a",{parentName:"p",href:"https://github.com/immerjs/immer"},"immer"),"\u79fb\u690d\u5230Java/Kotlin\u3002 \u60a8\u53ef\u4ee5\u50cf\u64cd\u4f5c\u53ef\u53d8\u5bf9\u8c61\u4e00\u6837\u81ea\u7136\u800c\u76f4\u89c2\u5730\u64cd\u4f5c\u4e0d\u53ef\u53d8\u5bf9\u8c61\uff0c\u60a8\u53ef\u4ee5\u62e5\u6709\u4e0d\u53ef\u53d8\u5bf9\u8c61\u7684\u6240\u6709\u4f17\u6240\u5468\u77e5\u7684\u4f18\u70b9\uff0c\u4e5f\u4e0d\u5fc5\u627f\u62c5\u975e\u5fc5\u9700\u5f00\u9500\u3002 \u8fd9\u662f\u4e0d\u53ef\u53d8\u5bf9\u8c61\u6700\u5f3a\u5927\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u5feb\u901f\u9884\u89c8"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// \u7b2c\u4e00\u6b65\uff0c\u4ece\u5934\u6784\u5efa\u6570\u636e\nTreeNode treeNode = TreeNodeDraft.$.produce(root -> {\n    root.setName("Root").addIntoChildNodes(food -> {\n        food\n            .setName("Food")\n            .addIntoChildNodes(drink -> {\n                drink\n                    .setName("Drink")\n                    .addIntoChildNodes(cococola -> {\n                        cococola.setName("Cococola");\n                    })\n                    .addIntoChildNodes(fanta -> {\n                        fanta.setName("Fanta");\n                    });\n                ;\n            });\n        ;\n    });\n});\n\n// \u7b2c\u4e8c\u6b65\uff0c\u5bf9\u73b0\u6709\u6570\u636e\u505a\u51fa\u67d0\u4e9b\u201c\u4fee\u6539\u201d\uff0c\u521b\u5efa\u65b0\u6570\u636e\nTreeNode newTreeNode = TreeNodeDraft.$.produce(\n        // highlight-next-line\n        treeNode, // \u73b0\u6709\u6570\u636e\n        root -> {\n            root\n                .childNodes(false).get(0) // Food\n                .childNodes(false).get(0) // Drink\n                .childNodes(false).get(0) // Cococola\n                .setName("Cococola plus");\n        }\n);\n\nSystem.out.println("treeNode:" + treeNode);\nSystem.out.println("newTreeNode:" + newTreeNode);\n'))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// \u7b2c\u4e00\u6b65\uff0c\u4ece\u5934\u6784\u5efa\u6570\u636e\nval treeNode = new(TreeNode::class).by {\n    name = "Root"\n    childNodes().addBy {\n        name = "Food"\n        childNodes().addBy {\n            name = "Drinks"\n            childNodes().addBy {\n                name = "Cococola"\n            }\n            childNodes().addBy {\n                name = "Fanta"\n            }\n        }\n    }\n}\n\n// \u7b2c\u4e8c\u6b65\uff0c\u5bf9\u73b0\u6709\u6570\u636e\u505a\u51fa\u67d0\u4e9b\u201c\u4fee\u6539\u201d\uff0c\u521b\u5efa\u65b0\u6570\u636e\nval newTreeNode = new(TreeNode::class).by(\n    // highlight-next-line\n    treeNode // existing data\n) {\n    childNodes()[0] // Food\n        .childNodes()[0] // Drinks\n        .childNodes()[0] // Cococola\n        .name += " plus"\n}\n\nprintln("treeNode: $treeNode")\nprintln("newTreeNode: $newTreeNode")\n')))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u6253\u5370\u7ed3\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'treeNode: {\n    "name":"Root",\n    "childNodes":[\n        {\n            "name":"Food",\n            "childNodes":[\n                {\n                    "name":"Drink",\n                    "childNodes":[\n                        // highlight-next-line\n                        {"name":"Cococola"},\n                        {"name":"Fanta"}\n                    ]\n                }\n            ]\n        }\n    ]\n}\nnewTreeNode: {\n    "name":"Root",\n    "childNodes":[\n        {\n            "name":"Food",\n            "childNodes":[\n                {\n                    "name":"Drink",\n                    "childNodes":[\n                        // highlight-next-line\n                        {"name":"Cococola plus"},\n                        {"name":"Fanta"}\n                    ]\n                }\n            ]\n        }\n    ]\n}\n')))),(0,o.kt)("p",null,"Jimmer\u53ef\u7528\u4e8e\u5728\u9996\u9009\u4e0d\u53ef\u53d8\u6570\u636e\u7ed3\u6784\u7684\u4efb\u4f55\u4e0a\u4e0b\u6587\u4e2d\u66ff\u6362java record\uff08\u6216 kotlin dataclass\uff09\u3002 \u6211\u4eec\u4f7f\u7528\u975e\u5e38\u6709\u6548\u7684\u673a\u5236\u6765\u68c0\u6d4b\u66f4\u6539\u5e76\u6d88\u9664\u4e0d\u5fc5\u8981\u7684\u590d\u5236\u5f00\u9500\u3002 \u901a\u5e38\uff0c\u5bf9\u8c61\u7684\u4efb\u4f55\u66f4\u6539\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\u5f15\u7528\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728\u4efb\u4f55\u7279\u5b9a\u5f15\u7528\u7684\u610f\u4e49\u4e0a\uff0c\u8be5\u5bf9\u8c61\u90fd\u662f\u4e0d\u53ef\u53d8\u7684\u3002 \u672a\u66f4\u6539\u7684\u90e8\u5206\u5c06\u5728\u5185\u5b58\u4e2d\u7684\u6240\u6709\u6570\u636e\u7248\u672c\u4e4b\u95f4\u5171\u4eab\uff0c\u4ee5\u907f\u514d\u65e0\u8111\u7684\u590d\u5236\u5e76\u83b7\u5f97\u6700\u4f73\u6027\u80fd\u3002"),(0,o.kt)("p",null,"Jimmer\u53ef\u4ee5\u5e2e\u52a9\u4f60"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u68c0\u6d4b\u610f\u5916\u4fee\u6539\u5e76\u629b\u51fa\u9002\u5f53\u7684\u9519\u8bef\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5bf9\u6df1\u5c42\u6b21\u7ed3\u6784\u7684\u4e0d\u53ef\u53d8\u5bf9\u8c61\u7684\u64cd\u4f5c\uff0c\u4e0d\u518d\u9700\u7e41\u7410\u6837\u677f\u4ee3\u7801\uff0c\u907f\u514d\u624b\u52a8\u590d\u5236\uff0c\u8282\u7701\u5197\u4f59\u526f\u672c\u6784\u5efa\u7684\u5f00\u9500\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u8ddf\u8e2a\u5bf9\u8349\u7a3f\u5bf9\u8c61\u7684\u66f4\u6539\u64cd\u4f5c\uff0c\u5728\u539f\u5bf9\u8c61\u5b8c\u597d\u65e0\u635f\u7684\u60c5\u51b5\u4e0b\uff0c\u81ea\u52a8\u521b\u5efa\u4efb\u4f55\u5fc5\u8981\u7684\u526f\u672c\u3002")),(0,o.kt)("p",null,"\u4f7f\u7528Jimmer\uff0c\u60a8\u65e0\u9700\u5b66\u4e60\u4e13\u95e8\u7684API\u6216\u6570\u636e\u7ed3\u6784\u5373\u53ef\u53d7\u76ca\u4e8e\u4e0d\u53d8\u6027\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u652f\u6301ORM\uff0cJimmer\u5f15\u5165\u4e86\u5bf9\u8c61\u7684\u52a8\u6001\u7279\u6027\u3002 \u5bf9\u8c61\u7684\u4efb\u4f55\u5c5e\u6027\u7686\u53ef\u7f3a\u5931\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u4f7f\u7528\u4ee3\u7801\u8bbf\u95ee\u65f6\uff0c\u7f3a\u5931\u5c5e\u6027\u4f1a\u5bfc\u81f4\u5f02\u5e38\uff1b"),(0,o.kt)("li",{parentName:"ul"},"Jackson \u5e8f\u5217\u5316\u8fc7\u7a0b\u4e2d\u4f1a\u81ea\u52a8\u5ffd\u7565\u7f3a\u5931\u5c5e\u6027\uff0c\u5e76\u4e14\u4e0d\u4f1a\u5bfc\u81f4\u5f02\u5e38\u3002")))}h.isMDXComponent=!0}}]);