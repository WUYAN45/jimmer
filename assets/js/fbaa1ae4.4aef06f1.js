"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7993],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return a?i.createElement(m,n(n({ref:t},u),{},{components:a})):i.createElement(m,n({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,n[1]=s;for(var c=2;c<o;c++)n[c]=a[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return n}});var i=a(7294),r=a(4334),o="tabItem_Ymn6";function n(e){var t=e.children,a=e.hidden,n=e.className;return i.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,n),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return h}});var i=a(3117),r=a(7294),o=a(4334),n=a(2389),s=a(7392),l=a(7094),c=a(2466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a,n=e.lazy,d=e.block,h=e.defaultValue,m=e.values,f=e.groupId,b=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.l)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===h?h:null!=(t=null!=h?h:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:k[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),N=w.tabGroupChoices,x=w.setTabGroupChoices,j=(0,r.useState)(g),q=j[0],T=j[1],J=[],O=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=N[f];null!=S&&S!==q&&y.some((function(e){return e.value===S}))&&T(S)}var I=function(e){var t=e.currentTarget,a=J.indexOf(t),i=y[a].value;i!==q&&(O(t),T(i),null!=f&&x(f,String(i)))},Z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var i,r=J.indexOf(e.currentTarget)+1;a=null!=(i=J[r])?i:J[0];break;case"ArrowLeft":var o,n=J.indexOf(e.currentTarget)-1;a=null!=(o=J[n])?o:J[J.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},y.map((function(e){var t=e.value,a=e.label,n=e.attributes;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,key:t,ref:function(e){return J.push(e)},onKeyDown:Z,onFocus:I,onClick:I},n,{className:(0,o.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":q===t})}),null!=a?a:t)}))),n?(0,r.cloneElement)(k.filter((function(e){return e.props.value===q}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==q})}))))}function h(e){var t=(0,n.Z)();return r.createElement(d,(0,i.Z)({key:String(t)},e))}},1522:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return b}});var i=a(3117),r=a(102),o=(a(7294),a(3905)),n=a(5488),s=a(5162),l=a.p+"assets/medias/java-fetcher-a47c6f710d4cc259e540c4a5909ae021.mp4",c=a.p+"assets/medias/kotlin-fetcher-b8ddc7a4ad25644d36d580ac726ec13f.mp4",u=a.p+"assets/medias/graphql-fetcher-34e0bb75712c966bd614fa03d964de4f.mp4",p=["components"],d={sidebar_position:1,title:"Revolutionary"},h=void 0,m={unversionedId:"preface",id:"preface",title:"Revolutionary",description:"Jimmer is a revolutionary ORM framework with built-in powerful cache management for Java and Kotlin.",source:"@site/docs/preface.mdx",sourceDirName:".",slug:"/preface",permalink:"/jimmer/docs/preface",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/preface.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Revolutionary"},sidebar:"tutorialSidebar",next:{title:"Feature list",permalink:"/jimmer/docs/intro"}},f={},b=[{value:"1. Express arbitrarily complex data structures",id:"1-express-arbitrarily-complex-data-structures",level:2},{value:"2. Query arbitrarily complex data structures",id:"2-query-arbitrarily-complex-data-structures",level:2},{value:"2.1. Specify the shape of the queried data structure on the server side",id:"21-specify-the-shape-of-the-queried-data-structure-on-the-server-side",level:3},{value:"2.2. Specify the shape of the queried data structure on the client side",id:"22-specify-the-shape-of-the-queried-data-structure-on-the-client-side",level:3},{value:"3. Save arbitrarily complex data structures",id:"3-save-arbitrarily-complex-data-structures",level:2},{value:"4. Cache arbitrarily complex data structures (with maintenance for consistency)",id:"4-cache-arbitrarily-complex-data-structures-with-maintenance-for-consistency",level:2},{value:"4.1. Simple object cache",id:"41-simple-object-cache",level:3},{value:"4.2. Associative attribute cache",id:"42-associative-attribute-cache",level:3},{value:"4.3. Computed attribute cache",id:"43-computed-attribute-cache",level:3},{value:"4.4. Multi-view cache",id:"44-multi-view-cache",level:3},{value:"4.5. Cache Consistency",id:"45-cache-consistency",level:3},{value:"5. Other features",id:"5-other-features",level:2},{value:"5.1. Strongly typed DSL",id:"51-strongly-typed-dsl",level:3},{value:"5.2. Ultra-simple multi-table JOIN",id:"52-ultra-simple-multi-table-join",level:3},{value:"5.3. Ultra-simple paging",id:"53-ultra-simple-paging",level:3},{value:"5.4. Trigger",id:"54-trigger",level:3},{value:"5.5 Ultimate performance",id:"55-ultimate-performance",level:3},{value:"6. Future work",id:"6-future-work",level:2}],k={toc:b};function y(e){var t=e.components,d=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,i.Z)({},k,d,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jimmer is a revolutionary ORM framework with built-in powerful cache management for Java and Kotlin."),(0,o.kt)("p",null,"Unlike simple CRUD-focused or traditional ORM solutions, Jimmer's core value is to maintain arbitrarily complex data associations in an extremely lightweight manner. No matter how complex the relationships between tables are, Jimmer could do sophisticated one-time processing from the bottom, freeing developers from dealing with tedious details at the business layer. The more complex the data structure, the greater the benefits of Jimmer."),(0,o.kt)("p",null,"Jimmer has several capabilities that clearly distinguish it from traditional solutions. The key point is that developers are no longer stuck with fragmented entity objects and their relationships but operate on arbitrarily complex data structures easily."),(0,o.kt)("p",null,"The ability of holistic manipulation of arbitrarily complex data structures is the core novelty of Jimmer. We\u2019ll cover four topics in this article."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Express arbitrarily complex data structures"),(0,o.kt)("li",{parentName:"ol"},"Query arbitrarily complex data structures"),(0,o.kt)("li",{parentName:"ol"},"Save arbitrarily complex data structures"),(0,o.kt)("li",{parentName:"ol"},"Cache arbitrarily complex data structures")),(0,o.kt)("h2",{id:"1-express-arbitrarily-complex-data-structures"},"1. Express arbitrarily complex data structures"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"shape",src:a(8793).Z,width:"1150",height:"856"})),(0,o.kt)("p",null,"This diagram demonstrates a global model and three local business perspectives of a specific relational database."),(0,o.kt)("p",null,"Each business perspective observes a local area of the global model."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The shape of this area can vary widely, and you can freely decide whether it contains certain entities, associations or even attributes.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The attributes mentioned here include not only the database mapping attributes already shown in the figure above, but also business attributes that are not related to the database structure.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The shape of the area requires ",(0,o.kt)("strong",{parentName:"li"},"no prior design")," and could be defined at ",(0,o.kt)("strong",{parentName:"li"},"any time")," with zero cost, so it is infinitely flexible, changing with requirements naturally.")),(0,o.kt)("p",null,"Being a Java and Kotlin-oriented solution, Jimmer's entities are strongly typed intuitively and dynamic surprisingly."),(0,o.kt)("p",null,"By the word ",(0,o.kt)("inlineCode",{parentName:"p"},"dynamic"),", we mean that any property of an entity object, whether it is a scalar property, an associative property, or a business property unrelated to the data model, can be unspecified. In this way, dynamic entities can describe arbitrarily complex data structures."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Not specifying a property of an object, and setting a property of an object to null, are totally different in Jimmer.")),(0,o.kt)("p",null,"In addition, Jimmer ensures that the data structure described by dynamic entities does not contain circular references and is a directed tree with an aggregated root, so that it can be transferred directly via the HTTP protocol."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Dynamic entities could express arbitrarily complex data structures and be transferred directly via HTTP. Therefore, developers should:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Use a unified entity model to express the business data format, rather than defining DTOs for different data formats required by different business scenarios.")),(0,o.kt)("p",{parentName:"admonition"},"This is important, it avoids redundant data definitions that make the system lose compactness; and it\u2019s the core of the Jimmer on which other revolutionary features are based.")),(0,o.kt)("h2",{id:"2-query-arbitrarily-complex-data-structures"},"2. Query arbitrarily complex data structures"),(0,o.kt)("p",null,"Jimmer provides two methods for querying arbitrarily complex data structures"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Specify the shape of the queried data structure on the server side"),(0,o.kt)("p",{parentName:"li"},"Details: ",(0,o.kt)("a",{parentName:"p",href:"./jimmer-sql/query/fetcher"},"Object Fetcher"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Specifying the shape of the queried data structure on the client side"),(0,o.kt)("p",{parentName:"li"},"Details: ",(0,o.kt)("a",{parentName:"p",href:"./spring-graphql"},"Spring GraphQL Support")))),(0,o.kt)("h3",{id:"21-specify-the-shape-of-the-queried-data-structure-on-the-server-side"},"2.1. Specify the shape of the queried data structure on the server side"),(0,o.kt)("p",null,"Jimmer supports the feature called ",(0,o.kt)("a",{parentName:"p",href:"./jimmer-sql/query/fetcher"},"object Fetcher"),", which gives developers the ability to query arbitrarily complex data structures from the database.\nPlease watch the video below."),(0,o.kt)(n.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("video",{width:"100%",controls:!0},(0,o.kt)("source",{src:l,type:"video/mp4"}),(0,o.kt)("div",{style:{padding:"1rem",fontSize:"2rem",color:"red"}},"Your browser does not support the video tag."))),(0,o.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("video",{width:"100%",controls:!0},(0,o.kt)("source",{src:c,type:"video/mp4"}),(0,o.kt)("div",{style:{padding:"1rem",fontSize:"2rem",color:"red"}},"Your browser does not support the video tag.")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The object fetcher also has a powerful capability not shown in the video, recursive fetching self-associative properties. "),(0,o.kt)("p",{parentName:"admonition"},"Check out ",(0,o.kt)("a",{parentName:"p",href:"./jimmer-sql/query/fetcher#recursively-query-self-associated-properties"},"Recursive Fetching for Self-Association")," for details.")),(0,o.kt)("h3",{id:"22-specify-the-shape-of-the-queried-data-structure-on-the-client-side"},"2.2. Specify the shape of the queried data structure on the client side"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," is a protocol for querying arbitrarily complex data on the client side, but it has the disadvantage of slightly higher development costs on the server side."),(0,o.kt)("p",null,"SpringBoot supports ",(0,o.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-graphql"},"Spring GraphQL")," from 2.7.0. Jimmer provides specific support for this, and significantly reduces the development cost of Spring GraphQL-based projects."),(0,o.kt)("video",{width:"100%",controls:!0},(0,o.kt)("source",{src:u,type:"video/mp4"}),(0,o.kt)("div",{style:{padding:"1rem",fontSize:"2rem",color:"red"}},"Your browser does not support the video tag.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Note, by the limitation of the current GraphQL protocol, this method does not have the same recursive querying capability for self-associative properties as the object fetcher\u2019s."),(0,o.kt)("p",{parentName:"admonition"},"If your business scenario requires both recursive query capabilities for self-associative attributes and transferring the decision on the shape of the queried data structure to the client, you can easily customize a GraphQL-like text protocol, the client submits text in a specific format according to the custom protocol and the server converts it to an object fetcher query.")),(0,o.kt)("h2",{id:"3-save-arbitrarily-complex-data-structures"},"3. Save arbitrarily complex data structures"),(0,o.kt)("p",null,"Developers can use the dynamicity of Jimmer entities to build arbitrarily complex data structures which could be stored by Jimmer.\nJimmer will compare the current data structure in the database with the data structure the user expects to save, and then modify the inconsistent parts, make it consistent with the user expectation finally."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Jimmer's save feature is similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"vue")," in the web domain.")),(0,o.kt)("p",null,"As shown in the picture"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"save",src:a(6607).Z,width:"1473",height:"1036"})),(0,o.kt)("p",null,"The top left figure shows the current data structure in the database.\nThe top right figure shows the data structure expected by the user. Each object is identified either by an id or a business key and a id growth strategy."),(0,o.kt)("p",null,"The bottom of the picture shows the operations performed by Jimmer, labeled with four colors."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("div",{style:{color:"red"}},"Red part:"),(0,o.kt)("p",{parentName:"li"},"If an object exists in the current data structure of the database and does not exist in the user\u2019s expectation to save, the object and its associations will be deleted."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"The user can control the action of the Jimmer and choose to block the operation",(0,o.kt)("em",{parentName:"p"},"(default behavior)"),", disconnect the relationship only, or delete the object."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("div",{style:{color:"green"}},"Green section:"),(0,o.kt)("p",{parentName:"li"},"If an object does not exist in the current data structure of the database and exists in the user\u2019s expectation to save, this object and its associations will be created."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"The user can control the action and choose to block",(0,o.kt)("em",{parentName:"p"},"(default behavior)")," or allow the operation."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("div",{style:{color:"blue"}},"Blue section:"),(0,o.kt)("p",{parentName:"li"},"If the associations of an object with other objects in the current data structure of the database are different from the user\u2019s expectation to save, the associations are automatically adjusted.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("div",{style:{color:"orange"}},"Orange part:"),(0,o.kt)("p",{parentName:"li"},"If an object in the data structure that the user expects to save has modifiable properties and the corresponding one exists in the current data structure of the database, these properties would be modified."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Since the Jimmer entity is dynamic, modifying some of the properties but not all is allowed since any property can be missing.")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Unlike all other data persistence solutions, Jimmer does not require a prior decision on whether each association should be saved in cascade; that depends entirely on the shape of the data structure specified by the user.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The save command is one of Jimmer's most distinguishing database modification capabilities, and we of course also support other traditional modification methods.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Although the save command is a sort of black-boxed high-level API, developers still have fine-grained control over details (the part of the diagram with changing colors), because Jimmer supports a powerful trigger mechanism."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Checkout ",(0,o.kt)("a",{parentName:"p",href:"./jimmer-sql/advanced/trigger"},"trigger")," for detials."))))),(0,o.kt)("h2",{id:"4-cache-arbitrarily-complex-data-structures-with-maintenance-for-consistency"},"4. Cache arbitrarily complex data structures (with maintenance for consistency)"),(0,o.kt)("p",null,"As mentioned above, Jimmer can query arbitrarily complex data structures, Jimmer supports caching arbitrarily complex data structures accordingly to get higher performance for your application."),(0,o.kt)("p",null,"From the perspective of use, caching is completely transparent to developers. Developers query data and get the cache worked automatically without extra code. We will discuss at the implementation level."),(0,o.kt)("p",null,"At the implementation level, there are two types of cache in Jimmer, object cache and attribute cache. Attribute cache can be further divided into associative attribute cache and computed attribute cache."),(0,o.kt)("p",null,"The combination of object cache and the associative cache forms the caching for arbitrarily complex data structures from the user\u2019s perspective."),(0,o.kt)("p",null,"The caching mechanism of Jimmer has the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No restrictions on which caching technology to use."),(0,o.kt)("li",{parentName:"ul"},"Transparent to the developers, whether to use caching does not result in business code changes."),(0,o.kt)("li",{parentName:"ul"},"Supports multi-level caching, for example, the first level is the JVM's internal caffine, and the second level uses Redis shared by the cluster."),(0,o.kt)("li",{parentName:"ul"},"The caching is optional, the whole framework can work without cache. Even with caching enabled, users could still control fine-granularly whether object cache should be used for each entity type, and whether attribute cache should be used for each associative or computed attribute."),(0,o.kt)("li",{parentName:"ul"},"Great data consistency support.")),(0,o.kt)("h3",{id:"41-simple-object-cache"},"4.1. Simple object cache"),(0,o.kt)("p",null,"Simple object cache, responsible for mapping object ids to simple objects."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Simple objects do not have any associative properties except for simple foreign keys.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"object-cache",src:a(372).Z,width:"1280",height:"1216"})),(0,o.kt)("h3",{id:"42-associative-attribute-cache"},"4.2. Associative attribute cache"),(0,o.kt)("p",null,"The associative attribute cache is a unique feature of Jimmer, providing ",(0,o.kt)("strong",{parentName:"p"},"maps")," for data to support fast querying of associative attributes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"association-cache",src:a(684).Z,width:"1473",height:"1399"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In the GraphQL working mode, for associations based on foreign keys",(0,o.kt)("em",{parentName:"p"},"(",(0,o.kt)("inlineCode",{parentName:"em"},"Book.store-1"),"\u3001",(0,o.kt)("inlineCode",{parentName:"em"},"Book.store-2"),"\u548c",(0,o.kt)("inlineCode",{parentName:"em"},"Book.store-3")," in the figure)")," rather than these expressed by intermediate table many-to-one relations, associative attribute cache should be used only if the foreign key of the current object is missing. or the parent object can be obtained by a simple parameterized query in the simple object cache with the foreign key and there is no need to use the associative attribute cache."),(0,o.kt)("p",{parentName:"admonition"},"The rest of the associative attribute cache for collection types is important in all scenarios, whether for one-to-many or many-to-many attributes.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"One of the drawbacks of relational databases is that any data associations require queries. A more straightforward cache of map greatly mitigates this problem.")),(0,o.kt)("h3",{id:"43-computed-attribute-cache"},"4.3. Computed attribute cache"),(0,o.kt)("p",null,"Jimmer entities support non-persistent (@Transient) attributes independent of the database structure, which have no corresponding fields in the database and are used to express developer-defined business attributes."),(0,o.kt)("p",null,"There are two types of non-persistent attributes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Manual mode: Jimmer would do nothing with this type of attributes, and whether the entity object has it or not depends entirely on the user's business code."),(0,o.kt)("li",{parentName:"ul"},"Automatic mode: if the object fetcher or GraphQL queries this kind of attributes, Jimmer will call the computation solver configured in the current property annotation to compute and set the property automatically.")),(0,o.kt)("p",null,"Non-persistent attribute in automatic mode is also called computed attribute and could optionally use computed cache."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"calculated-cache",src:a(6385).Z,width:"1473",height:"918"})),(0,o.kt)("h3",{id:"44-multi-view-cache"},"4.4. Multi-view cache"),(0,o.kt)("p",null,"Jimmer provides ",(0,o.kt)("a",{parentName:"p",href:"jimmer-sql/advanced/filter"},"global filters")," that allow implicit conditional filtering on certain entity classes in all queries."),(0,o.kt)("p",null,"This feature makes it easy to implement row-based data authorization that would result in different operators seeing different data."),(0,o.kt)("p",null,"Therefore, we want different operators to see different cached data, that is the multi-view cache."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"multi-view-cache",src:a(917).Z,width:"1473",height:"2451"})),(0,o.kt)("p",null,"This figure shows multi-view cache with multi-tenancy as an example. Different operators see different associative cached and computed cached data."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Multi-view cache consumes much more space and should be used only for important associative or computed attributes. Developers are free to decide whether an associative or computed attribute should use normal cache only or multi-view cache.")),(0,o.kt)("h3",{id:"45-cache-consistency"},"4.5. Cache Consistency"),(0,o.kt)("p",null,"Jimmer provides out-of-the-box cache data consistency guarantees. All developers have to do is simply enable ",(0,o.kt)("a",{parentName:"p",href:"./jimmer-sql/advanced/trigger"},"Jimmer's trigger feature")," to make it perceive and response database changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The cache consistency is fully automated for applications with only object cache and associative cache, no extra works need to do."),(0,o.kt)("li",{parentName:"ul"},"Very simple manual assistance is required for applications with computed cache or multi-view cache")),(0,o.kt)("p",null,"Example"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The corresponding associative cache and computed cache would be cleared automatically when a foreign key modified."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"View gif animation"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"modify_fk",src:a(8574).Z,width:"600",height:"438"})),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"In this animation, the white area above is the SQL tool, and the black area below is the Intellij log."),(0,o.kt)("p",{parentName:"blockquote"},"The associative attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"BookStore.books")," is affected, which further affects the computed attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"BookStore.avgPrice"),".")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The corresponding associative cache would be cleared automatically when intermediate tables modified."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"View gif animation"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"insert_middle_table",src:a(7570).Z,width:"600",height:"438"})),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"In this animation, the white area above is the SQL tool, and the black area below is the Intellij log.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The corresponding computed cache would be cleared automatically when the dependent fields modified."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"View gif animation"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"modify_price",src:a(5687).Z,width:"600",height:"438"})),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"In this animation, the white area above is the SQL tool, and the black area below is the Intellij log.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The corresponding associative and computed cache would be cleared automatically when the fields that the filter depends on modified."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"View gif animation"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"modify_tenant",src:a(8634).Z,width:"600",height:"438"})),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"In this animation, the white area above is the SQL tool, and the black area below is the Intellij log."),(0,o.kt)("p",{parentName:"blockquote"},"In this example, the global filter operates on the Book object, all associative attributes BookStore.books and Author.books pointing to it are affected. The computed attribute BookStore.avgPrice is further affected since the associative attribute BookStore.books changes."))))),(0,o.kt)("h2",{id:"5-other-features"},"5. Other features"),(0,o.kt)("h3",{id:"51-strongly-typed-dsl"},"5.1. Strongly typed DSL"),(0,o.kt)("p",null,"Errors are found at compile-time as much as possible; strongly typed DSL can be also mixed with Native SQL."),(0,o.kt)("h3",{id:"52-ultra-simple-multi-table-join"},"5.2. Ultra-simple multi-table JOIN"),(0,o.kt)("p",null,"Jimmer strongly typed DSL provides more useful features than native SQL for multi-table JOIN."),(0,o.kt)("p",null,"Building paths of any length with chained expressions by the help of intellisence based on object properties is multi-level JOIN."),(0,o.kt)("p",null,"Conflicting table JOINs in the different paths could be merged automatically, and redundant JOINs would be optimized out automatically."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'This is probably the first ORM without the "JOIN" operator'),(0,o.kt)("p",{parentName:"blockquote"},"In fact, it\u2019s the original motivation for Jimmer.")),(0,o.kt)("p",null,"Link: ",(0,o.kt)("a",{parentName:"p",href:"./jimmer-sql/basic/table-join"},"Table Joins")),(0,o.kt)("h3",{id:"53-ultra-simple-paging"},"5.3. Ultra-simple paging"),(0,o.kt)("p",null,"Query for row counting required by paging would be generated and optimized automatically based on data object query."),(0,o.kt)("p",null,"Link: ",(0,o.kt)("a",{parentName:"p",href:"./jimmer-sql/query/pagination"},"Pagination query")),(0,o.kt)("h3",{id:"54-trigger"},"5.4. Trigger"),(0,o.kt)("p",null,"Jimmer provides two kinds of triggers to notify data changes before and after a transaction commit respectively. Each could perceive the data changes, including object changes and association changes."),(0,o.kt)("p",null,"Link: ",(0,o.kt)("a",{parentName:"p",href:"./jimmer-sql/advanced/trigger"},"Trigger")),(0,o.kt)("h3",{id:"55-ultimate-performance"},"5.5 Ultimate performance"),(0,o.kt)("p",null,"Link: ",(0,o.kt)("a",{parentName:"p",href:"./benchmark"},"Benchmark"),"."),(0,o.kt)("h2",{id:"6-future-work"},"6. Future work"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do not restrict the microservice governance framework, allow entity objects to support remote associations across microservice boundaries."),(0,o.kt)("li",{parentName:"ul"},"While SQL grouping and aggregation can be used to implement computed attributes, these sorts of statistical operations are not the area the relational OLTP databases are best at, we may support mapping computed attributes to column-based OLAP databases like Clickhouse in future.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The available features are slightly beyond the scope of ORM, but we still interpret Jimmer as ORM currently."),(0,o.kt)("p",{parentName:"blockquote"},"We will interpret Jimmer in a new way when it goes far beyond ORM after these features implemented, and the future is coming now.")))}y.isMDXComponent=!0},684:function(e,t,a){t.Z=a.p+"assets/images/association-cache-a56183bba7a369821e88cbfb277c9464.png"},6385:function(e,t,a){t.Z=a.p+"assets/images/calculated-cache-fed29948e1b2f8fb93bf45851e5668b3.png"},7570:function(e,t,a){t.Z=a.p+"assets/images/insert_middle_table-736e675fe9d012a6a269d555ea59d7c0.gif"},8574:function(e,t,a){t.Z=a.p+"assets/images/modify_fk-ec09667d0549c54863e5a61f37940e9a.gif"},5687:function(e,t,a){t.Z=a.p+"assets/images/modify_price-ced79acc8e041f77cd71b64913403956.gif"},8634:function(e,t,a){t.Z=a.p+"assets/images/modify_tenant-1520daf16c79bb704d2f81c4b026237a.gif"},917:function(e,t,a){t.Z=a.p+"assets/images/multi-view-cache-76f3c4c61bce71a30c72922f931a641f.png"},372:function(e,t,a){t.Z=a.p+"assets/images/object-cache-4a9d5b4cb61322890552a5508785c18c.jpeg"},6607:function(e,t,a){t.Z=a.p+"assets/images/save-6631bb52e10864ffe98320a913473282.png"},8793:function(e,t,a){t.Z=a.p+"assets/images/shape-877c9a8df8953a5c8b7e0af6f45b8bea.png"}}]);