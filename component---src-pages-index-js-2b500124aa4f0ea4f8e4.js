webpackJsonp([35783957827783],{"./src/components/Hero.js":function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r("./node_modules/react/react.js"),n=a(o),i=function(e){var t=e.title,r=e.subtitle;return n.default.createElement("div",{className:"hero-body background-brand"},n.default.createElement("p",{className:"title is-3 white"},t),n.default.createElement("p",{className:"subtitle is-4 white"},r))};t.default=i,e.exports=t.default},"./src/components/ProjectCard.js":function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=r("./node_modules/react/react.js"),l=a(s),c=function(e){function t(){return o(this,t),n(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=void 0;return"undefined"!=typeof this.props.imgurl&&(e=l.default.createElement("div",{className:"card-image"},l.default.createElement("figure",{className:"image is-4by3"},l.default.createElement("img",{src:"/danielsada.mx/img/"+this.props.imgurl+".png",alt:this.props.name})))),l.default.createElement("div",{className:"card"},e,l.default.createElement("div",{className:"card-content"},l.default.createElement("div",{className:"media"},l.default.createElement("div",{className:"media-content"},l.default.createElement("p",{className:"title is-4"},this.props.name),l.default.createElement("p",{className:"subtitle is-6"},this.props.subtitle))),l.default.createElement("div",{className:"content"},this.props.description,l.default.createElement("br",null)," ",this.props.technologies.map(function(e){return l.default.createElement("a",{key:e},"#",e," ")}),l.default.createElement("br",null),l.default.createElement("br",null),l.default.createElement("a",{className:"sitelink",style:{float:"right",color:"#ccc",display:"inline-block",height:"30px"},href:this.props.url}," Link to Site "),l.default.createElement("br",null))))},t}(l.default.Component);t.default=c,e.exports=t.default},"./src/components/ProjectDashboard.js":function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){for(var r=Array(t),a=0;a<r.length;a++)r[a]=Array();for(var o=0;o<e.length;o++)r[o%t].push(e[o]);return r}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c=r("./node_modules/react/react.js"),u=a(c),d=r("./src/data/projects.js"),p=a(d),m=r("./src/components/ProjectCard.js"),f=a(m),h=function(e){function t(){return o(this,t),n(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=p.default,t=e.map(function(e){return u.default.createElement(f.default,l({key:e.name},e))}),r=s(t,3),a=r.map(function(e,t){return u.default.createElement("div",{className:"column",key:t},e)});return u.default.createElement("div",{className:"columns container"},a)},t}(u.default.Component);t.default=h,e.exports=t.default},"./src/data/projects.js":function(e,t){"use strict";t.__esModule=!0;var r=[{id:0,name:"Simple implementation of Schoning's KSAT Algorithm",subtitle:"Creator",url:"https://github.com/danielsada/Schoning-KSAT-algorithm",description:"For Solving KSAT problems which is NP-Hard",technologies:["Javascript","Algorithms"]},{id:1,name:"Implementation of Papadimitrou 2SAT Algorithm",subtitle:"Creator",url:"https://github.com/danielsada/Papadimitriou-2SAT",description:"Easy implementation that allows 2SAT solving.",technologies:["Python","Algorithms"]},{id:2,name:"Competitive programming at ACM ICPC.",subtitle:"Creator",url:"https://icpc.baylor.edu/ICPCID/ZJGZ2K2T6VC4",description:"Competed and won several awards in ACM ICPC",technologies:["C++","C","Java","Algorithms"]},{id:3,name:"Sadeira",subtitle:"Co-Founder, CTO",url:"http://sadeira.com",description:"Created and founded a software development firm which is heavily focused in marketing",technologies:["Adwords","DevOps","Marketing","ROI"],imgurl:"sadeira"},{id:4,name:"Qswimwear",subtitle:"Creator",url:"http://qswimwear.com",description:"Created a platform to render 3D suits, managing projects and implementing a shopify website.",technologies:["Shopify","PHP","3D Rendering","Adobe Scene7"],imgurl:"qswimwear"},{id:5,name:"Tommy",subtitle:"Contributed",url:"http://tommy.mx",description:"Implemented login and cart flows, with callbacks, created logging infrastructure.",technologies:["React","Node.js","IBM Websphere","Java EE","Logstash","Apache Camel"],imgurl:"tommy"},{id:6,name:"PedroNava.mx",subtitle:"Creator",url:"http://pedronava.mx",description:"Created a lawyer site using a WYSIWYG editor, sometimes the easiest tool is the best.",technologies:["CSS","Squarespace"],imgurl:"pedronava"},{id:7,name:"Fide.mx",subtitle:"Project evaluation software",url:"http://fide.mx",description:"Contributed to a metaprogramming site which generated rules for evaluating mexico's electric infrastructure expansion projects.",technologies:["PHP","Javascript","Websockets"],imgurl:"fide"},{id:8,name:"Ibero App",subtitle:"Created the App, published.",url:"https://itunes.apple.com/mx/app/ibero-m%C3%B3vil/id527739127?l=en&mt=8",description:'Created the "Universidad Iberoamericana" app for alumni, where they manage the grades and schedules..',technologies:["PHP","Javascript","Websockets"],imgurl:"ibero"},{id:9,name:"OnceOnceFlores",subtitle:"Creator",url:"http://onceonceflores.com",description:"E-commerce for distributing flowers in mexico.",technologies:["Shopify","PHP","Logistics","Shipping Labels"],imgurl:"onceonce"},{id:10,name:"PrendaResuelve",subtitle:"Creator",url:"http://prendaresuelve.mx",description:"Simple site on php for pawn shop in Mexico",technologies:["Wordpress","PHP","CSS","CSS Animations"],imgurl:"prendaresuelve"},{id:11,name:"La Voz desde Zona Esmeralda",subtitle:"Creator",url:"http://lavozesmeralda.com",description:"Simple site on wordpress for a local newspaper.",technologies:["Wordpress","PHP","CSS","CSS Animations"],imgurl:"vozesmeralda"},{id:12,name:"Door2Door",subtitle:"Creator",url:"http://d2dfit.mx",description:"Simple site on wordpress for a local newspaper.",technologies:["Shopify","HTML","CSS"],imgurl:"d2d"},{id:13,name:"VIA taller",subtitle:"Creator",url:"http://via-taller.com",description:"Simple site on wordpress for a local architecture firm.",technologies:["Shopify","HTML","CSS"],imgurl:"via-taller"}];t.default=r,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/danielsada/Developer/danielsada.mx/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/danielsada/Developer/danielsada.mx/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/danielsada/Developer/danielsada.mx/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/danielsada/Developer/danielsada.mx/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/danielsada/Developer/danielsada.mx/node_modules/babel-preset-stage-0/lib/index.js","/Users/danielsada/Developer/danielsada.mx/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js':function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(){for(var e={},t=p.default,r=Array.isArray(t),a=0,t=r?t:t[Symbol.iterator]();;){var o;if(r){if(a>=t.length)break;o=t[a++]}else{if(a=t.next(),a.done)break;o=a.value}for(var n=o,i=n.technologies,s=Array.isArray(i),l=0,i=s?i:i[Symbol.iterator]();;){var c;if(s){if(l>=i.length)break;c=i[l++]}else{if(l=i.next(),l.done)break;c=l.value}var u=c;e[u]=!0}}return console.log("ret",e),e}t.__esModule=!0;var l=r("./node_modules/react/react.js"),c=a(l),u=r("./node_modules/gatsby-link/index.js"),d=(a(u),r("./src/data/projects.js")),p=a(d),m=r("./src/components/ProjectDashboard.js"),f=a(m),h=r("./src/components/Hero.js"),b=a(h),g=function(e){function t(){return o(this,t),n(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=s(),t=[];for(var r in e)t.push(c.default.createElement("span",{className:"tag is-large is-primary"},r));return c.default.createElement("div",null,c.default.createElement("div",{className:"hero panoramic"}),c.default.createElement(b.default,{title:"Daniel Sada Caraveo",subtitle:"Computing Engineer, coffee enthusiast, life-long learner and curious. Trying to save years of human life."}),c.default.createElement("div",{className:"section"},c.default.createElement("h1",{className:"is-1 title"},"Skills"),c.default.createElement("div",{className:"tags"},t)),c.default.createElement(b.default,{title:"Projects contributed or created",subtitle:"This are some of the things I have done in the past"}),c.default.createElement("div",{className:"section"},c.default.createElement("h1",{className:"is-1 title"},"Contributions"),c.default.createElement(f.default,null)),c.default.createElement(b.default,{title:"This website was constructed in React and Gatsby with Bulma",subtitle:""}))},t}(c.default.Component);t.default=g,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-2b500124aa4f0ea4f8e4.js.map