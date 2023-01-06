"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2876],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),m=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=m(r),d=a,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(7294),a=r(4334),l="tabItem_Ymn6";function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(3117),a=r(7294),l=r(4334),i=r(2389),o=r(7392),u=r(7094),m=r(2466),p="tabList__CuJ",c="tabItem_LNqP";function s(e){var t,r,i=e.lazy,s=e.block,d=e.defaultValue,f=e.values,b=e.groupId,v=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(t=null!=d?d:null==(r=k.find((function(e){return e.props.default})))?void 0:r.props.value)?t:k[0].props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),w=y.tabGroupChoices,j=y.setTabGroupChoices,E=(0,a.useState)(N),O=E[0],x=E[1],D=[],P=(0,m.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var T=w[b];null!=T&&T!==O&&h.some((function(e){return e.value===T}))&&x(T)}var B=function(e){var t=e.currentTarget,r=D.indexOf(t),n=h[r].value;n!==O&&(P(t),x(n),null!=b&&j(b,String(n)))},I=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=D.indexOf(e.currentTarget)+1;r=null!=(n=D[a])?n:D[0];break;case"ArrowLeft":var l,i=D.indexOf(e.currentTarget)-1;r=null!=(l=D[i])?l:D[D.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},v)},h.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return D.push(e)},onKeyDown:I,onFocus:B,onClick:B},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),i?(0,a.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,i.Z)();return a.createElement(s,(0,n.Z)({key:String(t)},e))}},6967:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return c}});var n=r(3117),a=r(102),l=(r(7294),r(3905)),i=(r(5488),r(5162),["components"]),o={sidebar_position:4,title:"\u5feb\u901f\u4e0a\u624b"},u=void 0,m={unversionedId:"get-started",id:"get-started",title:"\u5feb\u901f\u4e0a\u624b",description:"B\u7ad9\u89c6\u9891",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/get-started.mdx",sourceDirName:".",slug:"/get-started",permalink:"/jimmer/zh/docs/get-started",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/get-started.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u5feb\u901f\u4e0a\u624b"},sidebar:"tutorialSidebar",previous:{title:"Benchmark",permalink:"/jimmer/zh/docs/benchmark"},next:{title:"jimmer-core\u5b50\u9879\u76ee",permalink:"/jimmer/zh/docs/jimmer-core/"}},p={},c=[{value:"B\u7ad9\u89c6\u9891",id:"b\u7ad9\u89c6\u9891",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u5feb\u901f\u4f53\u9a8c",id:"\u5feb\u901f\u4f53\u9a8c",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],s={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"b\u7ad9\u89c6\u9891"},"B\u7ad9\u89c6\u9891"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u89c6\u9891\u5730\u5740"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9\u7b80\u4ecb"),(0,l.kt)("th",{parentName:"tr",align:null},"\u96be\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7248\u672c\u8981\u6c42"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.bilibili.com/video/BV1wD4y1L7xr/"},"https://www.bilibili.com/video/BV1wD4y1L7xr/")),(0,l.kt)("td",{parentName:"tr",align:null},"\u524d\u540e\u7aef\u514d\u5bf9\u63a5+spring boot starter"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6613"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece0.6\u5f00\u59cb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.bilibili.com/video/BV19t4y177PX"},"https://www.bilibili.com/video/BV19t4y177PX")),(0,l.kt)("td",{parentName:"tr",align:null},"\u591a\u8868\u8fde\u63a5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6613"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.bilibili.com/video/BV1kd4y1A7K3"},"https://www.bilibili.com/video/BV1kd4y1A7K3")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u529f\u80fd"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece0.3\u5f00\u59cb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.bilibili.com/video/BV1Mt4y1u7fz/"},"https://www.bilibili.com/video/BV1Mt4y1u7fz/")),(0,l.kt)("td",{parentName:"tr",align:null},"\u591a\u89c6\u89d2\u7f13\u5b58"),(0,l.kt)("td",{parentName:"tr",align:null},"\u96be"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece0.5\u5f00\u59cb")))),(0,l.kt)("h2",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"jimmer-core ",(0,l.kt)("em",{parentName:"p"},"(\u4e0d\u53ef\u53d8\u5bf9\u8c61\u90e8\u5206)")," \u5feb\u901f\u4e0a\u624b"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/jimmer/zh/docs/jimmer-core/usage"},"\u8bf7\u70b9\u51fb\u8fd9\u91cc"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"jimmer-sql ",(0,l.kt)("em",{parentName:"p"},"(ORM\u90e8\u5206)")," \u5feb\u901f\u4e0a\u624b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6211\u4f7f\u7528spring-boot\uff0c\u671f\u671b\u5229\u7528jimmer\u7684spring-boot-starter\u548cspring-data-jimmer\u5927\u5e45\u7b80\u5316\u5f00\u53d1"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"./jimmer-sql/spring-boot"},"\u8bf7\u70b9\u51fb\u8fd9\u91cc"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6211\u60f3\u4e86\u89e3\u4f7f\u7528Jimmer\u7684\u6240\u6709\u7ec6\u8282\uff0c\u751a\u81f3\u8003\u8651\u4eb2\u624b\u5c06Jimmer\u548c\u975espring\u7684\u5176\u4ed6\u6846\u67b6\u6574\u5408\u8d77\u6765"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"./jimmer-sql/basic/usage"},"\u8bf7\u70b9\u51fb\u8fd9\u91cc")))))),(0,l.kt)("h2",{id:"\u5feb\u901f\u4f53\u9a8c"},"\u5feb\u901f\u4f53\u9a8c"),(0,l.kt)("p",null,"\u7528Intellij\u6253\u5f00",(0,l.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/example/java/jimmer-sql/"},"<","jimmer-home",">","/example/java/java-sql"),"\u6216",(0,l.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/example/kotlin/jimmer-sql-kt/"},"<","jimmer-home",">","/example/kotlin/java-sql-kt"),"\uff0c"),(0,l.kt)("p",null,"\u9996\u6b21\u6253\u5f00\u540e\uff0cIDE\u4f1a\u51fa\u73b0\u7f16\u8bd1\u62a5\u9519\uff0c\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"#%E7%94%A8IDE%E6%89%93%E5%BC%80Demo"},"\u7528IDE\u6253\u5f00Demo")),(0,l.kt)("p",null,"\u542f\u52a8\uff0c\u8bbf\u95eehttp://localhost:8080/ui\u3002"),(0,l.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"./demo"},"\u9644\u5e26demo")),(0,l.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u548c\u5176\u4ed6\u6240\u6709\u5f3a\u7c7b\u578bDSL\u7684Java\u6846\u67b6\u4e00\u6837\uff0cJimmer\u4f7f\u7528\u4e86\u4ee3\u7801\u751f\u6210\u5668\uff0c\u5bf9Java\u800c\u8a00\uff0c\u662fAnnotationProcessor\uff1b\u5bf9Kotlin\u800c\u8a00\uff0c\u662fKSP\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u6240\u4ee5\uff0c\u9996\u6b21\u7528IDE\u6253\u5f00\u6846\u67b6\u9644\u5e26demo\u4e2d\u4efb\u4f55\u9879\u76ee\uff0c\u90fd\u4f1a\u56e0\u4e3a\u672c\u8be5\u88ab\u81ea\u52a8\u751f\u6210\u7684\u4ee3\u7801\u6682\u65f6\u4e0d\u5b58\u5728\u800c\u62a5\u7f16\u8bd1\u9519\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u522b\u6015\uff0c\u653e\u5fc3\u5927\u80c6\u5730\u70b9\u51fb\u8fd0\u884c\u6309\u94ae\uff0c\u6240\u6709\u95ee\u9898\u5c06\u4f1a\u7acb\u5373\u81ea\u52a8\u6d88\u5931\u3002")))}d.isMDXComponent=!0}}]);