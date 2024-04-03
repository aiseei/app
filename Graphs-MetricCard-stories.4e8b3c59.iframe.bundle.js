"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[2522],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./components/Graphs/MetricCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ForkMetricCard:()=>ForkMetricCard,StarMetricCard:()=>StarMetricCard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MetricCard_stories});var _StarMetricCard$param,_StarMetricCard$param2,_ForkMetricCard$param,_ForkMetricCard$param2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),esm=__webpack_require__("./node_modules/echarts-for-react/esm/index.js"),card=__webpack_require__("./components/atoms/Card/card.tsx"),humanizeNumber=__webpack_require__("./lib/utils/humanizeNumber.ts"),__jsx=react.createElement;function MetricCard(_ref){let{stats,variant,range}=_ref;const countProperty="stars"===variant?"star_count":"forks_count",seriesData=(0,react.useMemo)((()=>{var _stats$map;return null!==(_stats$map=null==stats?void 0:stats.map((stat=>{var _stat$countProperty;return null!==(_stat$countProperty=stat[countProperty])&&void 0!==_stat$countProperty?_stat$countProperty:0})))&&void 0!==_stats$map?_stats$map:[]}),[countProperty,stats]),bucketData=(0,react.useMemo)((()=>{var _stats$map2;return null!==(_stats$map2=null==stats?void 0:stats.map((stat=>new Date(stat.bucket).toDateString())))&&void 0!==_stats$map2?_stats$map2:[]}),[stats]),option=(0,react.useMemo)((()=>({xAxis:{type:"category",data:bucketData,show:!1},yAxis:{type:"value",show:!1},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},series:[{data:seriesData,symbol:"none",type:"stars"===variant?"line":"bar"}],color:"hsla(19, 100%, 50%, 1)"})),[bucketData,seriesData,variant]),total=(0,react.useMemo)((()=>null==seriesData?void 0:seriesData.reduce(((stat,currentValue)=>(stat||0)+(currentValue||0)),0)),[seriesData]);return __jsx(card.Z,{className:"w-full xl:max-w-lg h-fit p-5 pl-6"},__jsx("h2",{className:"text-xl font-semibold capitalize"},variant," ",__jsx("span",{className:"font-medium text-base text-slate-500"},range," days")),__jsx("div",{className:"flex justify-between items-center px-2 gap-8"},__jsx("p",{className:"text-5xl font-bold"},(0,humanizeNumber.Z)(total,"abbreviation")),__jsx("div",{className:"h-fit w-full pl-6"},__jsx(esm.Z,{option,style:{height:"100%",width:"100%"}}))))}MetricCard.displayName="MetricCard";try{MetricCard.displayName="MetricCard",MetricCard.__docgenInfo={description:"",displayName:"MetricCard",props:{stats:{defaultValue:null,description:"",name:"stats",required:!0,type:{name:"StatsType[] | undefined"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"stars"'},{value:'"forks"'}]}},range:{defaultValue:null,description:"",name:"range",required:!0,type:{name:"enum",value:[{value:"7"},{value:"30"},{value:"90"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Graphs/MetricCard.tsx#MetricCard"]={docgenInfo:MetricCard.__docgenInfo,name:"MetricCard",path:"components/Graphs/MetricCard.tsx#MetricCard"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const MetricCard_stories={title:"Components/Graphs/MetricCard",component:MetricCard,args:{range:30}},StarMetricCard={args:{variant:"stars",stats:[{bucket:"2024-03-31T00:00:00.000Z",star_count:1},{bucket:"2024-03-30T00:00:00.000Z",star_count:2},{bucket:"2024-03-29T00:00:00.000Z",star_count:1},{bucket:"2024-03-23T00:00:00.000Z",star_count:1},{bucket:"2024-03-19T00:00:00.000Z",star_count:1},{bucket:"2024-03-17T00:00:00.000Z",star_count:2},{bucket:"2024-03-14T00:00:00.000Z",star_count:1},{bucket:"2024-03-13T00:00:00.000Z",star_count:3},{bucket:"2024-03-12T00:00:00.000Z",star_count:3},{bucket:"2024-03-11T00:00:00.000Z",star_count:1},{bucket:"2024-03-06T00:00:00.000Z",star_count:1}]}},ForkMetricCard={args:{variant:"forks",stats:[{bucket:"2024-03-28T00:00:00.000Z",forks_count:1},{bucket:"2024-03-23T00:00:00.000Z",forks_count:2},{bucket:"2024-03-22T00:00:00.000Z",forks_count:1},{bucket:"2024-03-14T00:00:00.000Z",forks_count:1},{bucket:"2024-03-13T00:00:00.000Z",forks_count:1},{bucket:"2024-03-11T00:00:00.000Z",forks_count:1},{bucket:"2024-03-07T00:00:00.000Z",forks_count:1}]}};StarMetricCard.parameters=_objectSpread(_objectSpread({},StarMetricCard.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_StarMetricCard$param=StarMetricCard.parameters)||void 0===_StarMetricCard$param?void 0:_StarMetricCard$param.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    variant: "stars",\n    stats: [{\n      bucket: "2024-03-31T00:00:00.000Z",\n      star_count: 1\n    }, {\n      bucket: "2024-03-30T00:00:00.000Z",\n      star_count: 2\n    }, {\n      bucket: "2024-03-29T00:00:00.000Z",\n      star_count: 1\n    }, {\n      bucket: "2024-03-23T00:00:00.000Z",\n      star_count: 1\n    }, {\n      bucket: "2024-03-19T00:00:00.000Z",\n      star_count: 1\n    }, {\n      bucket: "2024-03-17T00:00:00.000Z",\n      star_count: 2\n    }, {\n      bucket: "2024-03-14T00:00:00.000Z",\n      star_count: 1\n    }, {\n      bucket: "2024-03-13T00:00:00.000Z",\n      star_count: 3\n    }, {\n      bucket: "2024-03-12T00:00:00.000Z",\n      star_count: 3\n    }, {\n      bucket: "2024-03-11T00:00:00.000Z",\n      star_count: 1\n    }, {\n      bucket: "2024-03-06T00:00:00.000Z",\n      star_count: 1\n    }]\n  }\n}'},null===(_StarMetricCard$param2=StarMetricCard.parameters)||void 0===_StarMetricCard$param2||null===(_StarMetricCard$param2=_StarMetricCard$param2.docs)||void 0===_StarMetricCard$param2?void 0:_StarMetricCard$param2.source)})}),ForkMetricCard.parameters=_objectSpread(_objectSpread({},ForkMetricCard.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ForkMetricCard$param=ForkMetricCard.parameters)||void 0===_ForkMetricCard$param?void 0:_ForkMetricCard$param.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    variant: "forks",\n    stats: [{\n      bucket: "2024-03-28T00:00:00.000Z",\n      forks_count: 1\n    }, {\n      bucket: "2024-03-23T00:00:00.000Z",\n      forks_count: 2\n    }, {\n      bucket: "2024-03-22T00:00:00.000Z",\n      forks_count: 1\n    }, {\n      bucket: "2024-03-14T00:00:00.000Z",\n      forks_count: 1\n    }, {\n      bucket: "2024-03-13T00:00:00.000Z",\n      forks_count: 1\n    }, {\n      bucket: "2024-03-11T00:00:00.000Z",\n      forks_count: 1\n    }, {\n      bucket: "2024-03-07T00:00:00.000Z",\n      forks_count: 1\n    }]\n  }\n}'},null===(_ForkMetricCard$param2=ForkMetricCard.parameters)||void 0===_ForkMetricCard$param2||null===(_ForkMetricCard$param2=_ForkMetricCard$param2.docs)||void 0===_ForkMetricCard$param2?void 0:_ForkMetricCard$param2.source)})});const __namedExportsOrder=["StarMetricCard","ForkMetricCard"]},"./components/atoms/Card/card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Card=_ref=>{let{className,children,heading}=_ref;return __jsx("article",{className:"".concat(className||""," block ").concat(heading?"":"p-3"," bg-white border rounded-lg shadow-xs")},heading?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"px-3 md:px-6 py-3 rounded-t-lg bg-light-slate-3"},heading),__jsx("div",null,children)):children)};Card.displayName="Card";const __WEBPACK_DEFAULT_EXPORT__=Card;try{card.displayName="card",card.__docgenInfo={description:"",displayName:"card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Card/card.tsx#card"]={docgenInfo:card.__docgenInfo,name:"card",path:"components/atoms/Card/card.tsx#card"})}catch(__react_docgen_typescript_loader_error){}},"./lib/utils/humanizeNumber.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(num,type)=>{const number="number"!=typeof num?parseFloat(num):num,abs=Math.abs(number),sign=Math.sign(number),commaConverted="".concat(abs>999?(sign*abs/1e3).toFixed(3).replace(".",","):sign*abs),abbreviated=abs>999?"".concat((sign*abs/1e3).toFixed(1),"k"):"".concat(sign*abs);return"comma"===type?commaConverted:abbreviated}}}]);