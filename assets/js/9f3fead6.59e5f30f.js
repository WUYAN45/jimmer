"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8312],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(4334),r="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),l=n(7294),r=n(4334),i=n(2389),o=n(7392),s=n(7094),u=n(2466),d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,n,i=e.lazy,p=e.block,m=e.defaultValue,f=e.values,b=e.groupId,h=e.className,y=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.l)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.U)(),T=v.tabGroupChoices,j=v.setTabGroupChoices,x=(0,l.useState)(N),E=x[0],I=x[1],q=[],w=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var B=T[b];null!=B&&B!==E&&k.some((function(e){return e.value===B}))&&I(B)}var _=function(e){var t=e.currentTarget,n=q.indexOf(t),a=k[n].value;a!==E&&(w(t),I(a),null!=b&&j(b,String(a)))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,l=q.indexOf(e.currentTarget)+1;n=null!=(a=q[l])?a:q[0];break;case"ArrowLeft":var r,i=q.indexOf(e.currentTarget)-1;n=null!=(r=q[i])?r:q[q.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},h)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return q.push(e)},onKeyDown:O,onFocus:_,onClick:_},i,{className:(0,r.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(y.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,i.Z)();return l.createElement(p,(0,a.Z)({key:String(t)},e))}},4553:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=n(3117),l=n(102),r=(n(7294),n(3905)),i=n(5488),o=n(5162),s=["components"],u={sidebar_position:5,title:"Simple Query"},d=void 0,c={unversionedId:"jimmer-sql/query/find",id:"jimmer-sql/query/find",title:"Simple Query",description:"The query DSL discussed earlier can handle sufficiently complex situations, however many queries in real projects are simple queries. To this end, Jimmer provides API support for simple queries.",source:"@site/docs/jimmer-sql/query/find.mdx",sourceDirName:"jimmer-sql/query",slug:"/jimmer-sql/query/find",permalink:"/jimmer/docs/jimmer-sql/query/find",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/query/find.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Simple Query"},sidebar:"tutorialSidebar",previous:{title:"Object Fetcher",permalink:"/jimmer/docs/jimmer-sql/query/fetcher"},next:{title:"Query middle table",permalink:"/jimmer/docs/jimmer-sql/query/association"}},p={},m=[{value:"findAll",id:"findall",level:2},{value:"Query by type",id:"query-by-type",level:3},{value:"Query by object fetcher",id:"query-by-object-fetcher",level:3},{value:"findById",id:"findbyid",level:2},{value:"Query by type",id:"query-by-type-1",level:3},{value:"Query by object fetcher",id:"query-by-object-fetcher-1",level:3},{value:"findByExample",id:"findbyexample",level:2},{value:"Simple QBE",id:"simple-qbe",level:3},{value:"Use fuzzy matching",id:"use-fuzzy-matching",level:3},{value:"Use object fetcher",id:"use-object-fetcher",level:3}],f={toc:m};function b(e){var t=e.components,n=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The query DSL discussed earlier can handle sufficiently complex situations, however many queries in real projects are simple queries. To this end, Jimmer provides API support for simple queries."),(0,r.kt)("p",null,"This article discusses three topics"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"findAll"),(0,r.kt)("li",{parentName:"ol"},"findById"),(0,r.kt)("li",{parentName:"ol"},"findByExample")),(0,r.kt)("h2",{id:"findall"},"findAll"),(0,r.kt)("h3",{id:"query-by-type"},"Query by type"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = sqlClient.getEntities()\n    .findAll(\n        \n        // Query books\n        Book.class,\n\n        // Optional variadic arguments, sorting mode\n        BookProps.NAME,\n        BookProps.EDITION.desc()\n    );\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient.entities\n    .findAll(Book::class) {\n        asc(Book::name)\n        desc(Book::edition)\n    }\n")))),(0,r.kt)("h3",{id:"query-by-object-fetcher"},"Query by object fetcher"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = sqlClient.getEntities()\n    .findAll(\n        \n        // highlight-next-line\n        BookFetcher.$\n            .allScalarFields()\n            .store(\n                BookStoreFetcher.$.allScalarFields()\n            )\n            .authors(\n                AuthorFetcher.$.allScalarFields()\n            ),\n\n        BookProps.NAME,\n        BookProps.EDITION.desc()\n    );\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient.entities\n    .findAll(\n        // highlight-next-line\n        newFetcher(Book::class).by { \n            allScalarFields()\n            store { \n                allScalarFields()\n            }\n            authors { \n                allScalarFields()\n            }\n        }\n    ) {\n        asc(Book::name)\n        desc(Book::edition)\n    }\n")))),(0,r.kt)("h2",{id:"findbyid"},"findById"),(0,r.kt)("p",null,"Jimmer's ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlClient.entities")," provides the following 6 methods for querying object(s) by id(s)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"MethodName"),(0,r.kt)("th",{parentName:"tr",align:null},"Arugment 1"),(0,r.kt)("th",{parentName:"tr",align:null},"Arguemnt 2"),(0,r.kt)("th",{parentName:"tr",align:null},"Return Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"findById"),(0,r.kt)("td",{parentName:"tr",align:null},"Class or KClass"),(0,r.kt)("td",{parentName:"tr",align:null},"Single id"),(0,r.kt)("td",{parentName:"tr",align:null},"Single object or null"),(0,r.kt)("td",{parentName:"tr",align:null},"Query a simple object by id; returns null if there is no matching data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"findById"),(0,r.kt)("td",{parentName:"tr",align:null},"Object Fetcher"),(0,r.kt)("td",{parentName:"tr",align:null},"Single id"),(0,r.kt)("td",{parentName:"tr",align:null},"Single object or null"),(0,r.kt)("td",{parentName:"tr",align:null},"Query an object by id, Its format is specified by the object fetcher; returns null if there is no matching data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"findByIds"),(0,r.kt)("td",{parentName:"tr",align:null},"Class or KClass"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection of ids"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection of objects"),(0,r.kt)("td",{parentName:"tr",align:null},"Query a batch of simple objects according to the id collection, since some data may not match, the length of the returned object list may be smaller than the length of the passed in id collection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"findByIds"),(0,r.kt)("td",{parentName:"tr",align:null},"Object Fetcher"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection of ids"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection of objects"),(0,r.kt)("td",{parentName:"tr",align:null},"Query a batch of objects according to the id collection, Its format is specified by the object fetcher; since some data may not match, the length of the returned object list may be smaller than the length of the passed in id collection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"findMapByIds"),(0,r.kt)("td",{parentName:"tr",align:null},"Class or KClass"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection of ids"),(0,r.kt)("td",{parentName:"tr",align:null},"Ordered Map consisting of ids and objects"),(0,r.kt)("td",{parentName:"tr",align:null},"A Map with keys as ids and simple objects as values, this map does not change the order of the incoming id collection; since some data may not match, the length of the returned map may be smaller than the length of the incoming id collection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"findMapByIds"),(0,r.kt)("td",{parentName:"tr",align:null},"Object Fetcher"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection of ids"),(0,r.kt)("td",{parentName:"tr",align:null},"Ordered Map consisting of ids and objects"),(0,r.kt)("td",{parentName:"tr",align:null},"A Map with keys as ids and objects as values, the format of the value is specified by the object fetcher, this map does not change the order of the incoming id collection; since some data may not match, the length of the returned map may be smaller than the length of the incoming id collection")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"These APIs that query data by id will use ",(0,r.kt)("a",{parentName:"p",href:"../advanced/cache"},"External cache"))),(0,r.kt)("p",null,"Next, take ",(0,r.kt)("inlineCode",{parentName:"p"},"findMapByIds")," as an example"),(0,r.kt)("h3",{id:"query-by-type-1"},"Query by type"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Map<Long, Book> bookMap = sqlClient.getEntities()\n    .findMapByIds(\n        Book.class,\n        Arrays.asList(2L, 3L, 4L)\n    );\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val bookMap = sqlClient.entities\n    .findMapByIds(\n        Book::class,\n        listOf(2L, 3L, 4L)\n    )\n")))),(0,r.kt)("h3",{id:"query-by-object-fetcher-1"},"Query by object fetcher"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Map<Long, Book> bookMap = sqlClient.getEntities()\n    .findMapByIds(\n        BookFetcher.$\n            .allScalarFields()\n            .store(\n                BookStoreFetcher.$.allScalarFields()\n            )\n            .authors(\n                AuthorFetcher.$.allScalarFields()\n            ),\n        Arrays.asList(2L, 3L, 4L)\n    );\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val bookMap = sqlClient.entities\n    .findMapByIds(\n        newFetcher(Book::class).by {\n            allScalarFields()\n            store {\n                allScalarFields()\n            }\n            authors {\n                allScalarFields()\n            }\n        },\n        listOf(2L, 3L, 4L)\n    )\n")))),(0,r.kt)("h2",{id:"findbyexample"},"findByExample"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"findByExample")," implements the QBE (Query By Example) query."),(0,r.kt)("p",null,"The so-called QBE query is that the user passes in an example object, and the ORM queries similar objects."),(0,r.kt)("p",null,"Since Jimmer objects are dynamic, Jimmer's QBE queries are very flexible."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If some properties of the example object are missing, unspecified properties will not be used to generate SQL filter conditions"),(0,r.kt)("li",{parentName:"ul"},"If an attribute of the example object is specified as null, the SQL ",(0,r.kt)("inlineCode",{parentName:"li"},"IS NULL")," filter condition will be generated"),(0,r.kt)("li",{parentName:"ul"},"If an attribute of the example object is specified as non-null, by default, the SQL ",(0,r.kt)("inlineCode",{parentName:"li"},"=")," filter condition will be generated",(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For string properties specified as non-null, users can change the configuration to use fuzzy filter conditions, which will be described later.")))),(0,r.kt)("h3",{id:"simple-qbe"},"Simple QBE"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$.produce(draft -> {\n    draft.setParent((TreeNode) null);\n    draft.setName("Hello");\n});\nList<TreeNode> treeNodes = sqlClient.getEntities()\n    .findByExample(\n            // highlight-next-line\n            Example.of(treeNode),\n            TreeNodeProps.NAME.asc()\n    );\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by { \n    parent = null\n    name = "Hello"\n}\nval treeNodes = sqlClient.entities\n    .findByExample(\n        example(treeNode)\n    ) {\n        asc(TreeNode::name)\n    }\n')))),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The boilerplate object only allows specifying properties based on simple column or foreign key, otherwise it will cause an exception")),(0,r.kt)("p",null,"The final SQL is as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.NODE_ID, \n    tb_1_.NAME, \n    tb_1_.PARENT_ID \nfrom TREE_NODE as tb_1_ \nwhere\n    /* highlight-next-line */\n    tb_1_.NAME = ? \nand \n    /* highlight-next-line */\n    tb_1_.PARENT_ID is null \norder by tb_1_.NAME asc\n")),(0,r.kt)("h3",{id:"use-fuzzy-matching"},"Use fuzzy matching"),(0,r.kt)("p",null,"By default, non-null properties of example object will generate ",(0,r.kt)("inlineCode",{parentName:"p"},"="),", however, we can change this default behavior through configuration."),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$.produce(draft -> {\n    draft.setParent((TreeNode) null);\n    draft.setName("Hello");\n});\nList<TreeNode> treeNodes = sqlClient.getEntities()\n    .findByExample(\n        Example.of(treeNode)\n            // highlight-next-line\n            .like(TreeNodeProps.NAME),\n        TreeNodeProps.NAME.asc()\n    );\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    parent = null\n    name = "Hello"\n}\nval treeNodes = sqlClient.entities\n    .findByExample(\n        example(treeNode) {\n            // highlight-next-line\n            like(TreeNode::name)\n        }\n    ) {\n        asc(TreeNode::name)\n    }\n')))),(0,r.kt)("p",null,"The final SQL is as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select tb_1_.NODE_ID, tb_1_.NAME, tb_1_.PARENT_ID \nfrom TREE_NODE as tb_1_ \nwhere \n    /* highlight-next-line */\n    tb_1_.NAME like ? \nand \n    tb_1_.PARENT_ID is null \norder by tb_1_.NAME asc\n")),(0,r.kt)("h3",{id:"use-object-fetcher"},"Use object fetcher"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$.produce(draft -> {\n    draft.setParent((TreeNode) null);\n    draft.setName("Hello");\n});\nList<TreeNode> treeNodes = sqlClient.getEntities()\n    .findByExample(\n        Example.of(treeNode),\n        // highlight-next-line\n        TreeNodeFetcher.$\n            .allScalarFields()\n            .childNodes(\n                TreeNodeFetcher.$.allScalarFields(),\n                it -> it.recursive()\n            ),\n        TreeNodeProps.NAME.asc()\n    );\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val treeNodes = sqlClient.entities\n    .findByExample(\n        example(treeNode),\n        // highlight-next-line\n        newFetcher(TreeNode::class).by { \n            allScalarFields()\n            childNodes({\n                filter { \n                    recursive()\n                }\n            }) {\n                allScalarFields()\n            }\n        }\n    ) {\n        asc(TreeNode::name)\n    }\n")))))}b.isMDXComponent=!0}}]);