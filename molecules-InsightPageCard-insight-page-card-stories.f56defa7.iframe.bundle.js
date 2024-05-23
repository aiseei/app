"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[7670],{"./components/molecules/InsightPageCard/insight-page-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InsightpageCardStory:()=>InsightpageCardStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>insight_page_card_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),index_esm=__webpack_require__("./node_modules/@primer/octicons-react/dist/index.esm.js"),bs=__webpack_require__("./node_modules/react-icons/bs/index.mjs"),Button_button=__webpack_require__("./components/shared/Button/button.tsx"),Typography_text=__webpack_require__("./components/atoms/Typography/text.tsx"),date_utils=__webpack_require__("./lib/utils/date-utils.ts"),get_repo_insights=__webpack_require__("./lib/utils/get-repo-insights.ts"),useRepositories=__webpack_require__("./lib/hooks/api/useRepositories.ts"),copy_to_clipboard=__webpack_require__("./lib/utils/copy-to-clipboard.ts"),card_repo_list=__webpack_require__("./components/molecules/CardRepoList/card-repo-list.tsx"),pie_chart=__webpack_require__("./components/molecules/PieChart/pie-chart.tsx"),stacked_avatar=__webpack_require__("./components/molecules/StackedAvatar/stacked-avatar.tsx"),__jsx=react.createElement;const InsightPageCard=_ref=>{let{insight,user}=_ref;const members=[],repoIds=insight.repos.map((repo=>repo.repo_id)),{data:repoData}=(0,useRepositories.Z)(repoIds),{open,closed,merged,drafts,velocity,total,repoList}=(0,get_repo_insights.Z)(repoData),PieChartData=[{label:"open",value:open,id:"open",color:"hsla(131, 41%, 46%, 1)"},{label:"merged",value:merged,id:"merged",color:"hsla(272, 51%, 54%, 1)"},{label:"closed",value:closed,id:"closed",color:"hsla(11, 89%, 54%, 1)"},{label:"draft",value:drafts,id:"draft",color:"hsla(205, 11%, 78%, 1)"}],averagePrOpened=repoData.length>0?Math.round((open||0)/total*100):0;return __jsx("div",{className:" w-[428px] py-[15px] px-[14px] rounded-lg flex flex-col gap-y-3 gap-x-2 bg-white border"},__jsx("div",{className:"flex items-center justify-between"},__jsx("div",null,insight.name),__jsx("div",{className:"items-center flex"},members.length>0?__jsx(stacked_avatar.Z,{visibleQuantity:2,contributors:members}):"",members.length>2?__jsx("div",null," ","+".concat(members.length-2," members")):"")),__jsx("div",{className:"flex justify-between items-center"},__jsx("div",{className:"flex-1 pl-6"},__jsx(pie_chart.Z,{data:PieChartData})),__jsx("div",{className:"flex gap-2 flex-1 flex-col"},__jsx("div",{className:"flex flex-col"},__jsx("span",{className:"text-xs text-light-slate-11"},"Avg PRs opened"),__jsx("div",{className:"flex text-light-grass-10 justify-between items-end pr-8 mt-1 "},__jsx(Typography_text.Z,{className:"!text-xl !text-black !leading-none"},"".concat(open," PR").concat(open>1?"s":"")),__jsx("p",{className:"flex items-end"},__jsx("span",{className:"mb-0 leading-none"},"".concat(averagePrOpened,"%"))," ",__jsx(bs.gtS,{className:"ml-1"})))),__jsx("div",null,__jsx("span",{className:"text-xs text-light-slate-11"},"Avg PRs velocity"),__jsx("div",{className:"flex text-green-9 justify-between items-end pr-8 mt-1"},__jsx(Typography_text.Z,{className:"!text-xl !text-black !leading-none"},repoData.length>0?(0,date_utils.MK)(Math.round(velocity/repoData.length)):"-"),__jsx("p",{className:"flex items-end"},__jsx("span",{className:"mb-0 leading-none"},total>0?"".concat(Math.round(merged/total*100),"%"):"-")," ",__jsx(bs.gtS,{className:"ml-1",fill:"green",color:"green"})))))),__jsx("div",{className:"mt-4"},__jsx(card_repo_list.Z,{repoList,limit:2})),__jsx("div",{className:"flex mt-4 justify-between"},__jsx(Button_button.Z,{onClick:()=>(0,copy_to_clipboard.v)("".concat(new URL("/pages/".concat(null==user?void 0:user.user_metadata.user_name,"/").concat(insight.id,"/dashboard"),location.origin))),className:"w-48",variant:"outline"}," ",__jsx(index_esm.xPt,{size:16,className:"mr-2"})," Copy Link"),__jsx(link_default(),{href:"/pages/".concat(null==user?void 0:user.user_metadata.user_name,"/").concat(insight.id,"/dashboard")},__jsx(Button_button.Z,{className:"w-48",variant:"primary"},"Go to Insight Page"))))};InsightPageCard.displayName="InsightPageCard";const insight_page_card=InsightPageCard;try{insightpagecard.displayName="insightpagecard",insightpagecard.__docgenInfo={description:"",displayName:"insightpagecard",props:{user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"User | null"}},insight:{defaultValue:null,description:"",name:"insight",required:!0,type:{name:"DbUserInsight"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/InsightPageCard/insight-page-card.tsx#insightpagecard"]={docgenInfo:insightpagecard.__docgenInfo,name:"insightpagecard",path:"components/molecules/InsightPageCard/insight-page-card.tsx#insightpagecard"})}catch(__react_docgen_typescript_loader_error){}var _InsightpageCardStory,_InsightpageCardStory2,test_repo_avatar=__webpack_require__("./img/icons/test-repo-avatar.svg"),insight_page_card_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const insight_page_card_stories={title:"Design System/Molecules/InsightPageCard"},InsightPageCardTemplate=(test_repo_avatar.Z,test_repo_avatar.Z,test_repo_avatar.Z,test_repo_avatar.Z,test_repo_avatar.Z,test_repo_avatar.Z,args=>insight_page_card_stories_jsx(insight_page_card,args));InsightPageCardTemplate.displayName="InsightPageCardTemplate";const InsightpageCardStory=InsightPageCardTemplate.bind({});InsightpageCardStory.args={},InsightpageCardStory.parameters=_objectSpread(_objectSpread({},InsightpageCardStory.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_InsightpageCardStory=InsightpageCardStory.parameters)||void 0===_InsightpageCardStory?void 0:_InsightpageCardStory.docs),{},{source:_objectSpread({originalSource:"args => <InsightPageCard {...args} />"},null===(_InsightpageCardStory2=InsightpageCardStory.parameters)||void 0===_InsightpageCardStory2||null===(_InsightpageCardStory2=_InsightpageCardStory2.docs)||void 0===_InsightpageCardStory2?void 0:_InsightpageCardStory2.source)})});const __namedExportsOrder=["InsightpageCardStory"]},"./components/atoms/Avatar/avatar-hover-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,q:()=>Avatar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@radix-ui/react-hover-card/dist/index.module.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),next_image__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),components_molecules_HoverCardWrapper_hover_card_wrapper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/molecules/HoverCardWrapper/hover-card-wrapper.tsx"),lib_utils_github__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/utils/github.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Avatar=_ref=>{let{contributor,size="large"}=_ref,width=500,height=500;switch(size){case"xsmall":width=24,height=24;break;case"small":width=45,height=45;break;case"medium":width=35,height=35}return __jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.Z,{alt:contributor,className:"border rounded-full not-prose",height:width,src:(0,lib_utils_github__WEBPACK_IMPORTED_MODULE_4__.cc)(contributor,40),width:height})};Avatar.displayName="Avatar";const AvatarHoverCard=_ref2=>{let{contributor,repositories,size="large"}=_ref2;return __jsx(_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_5__.fC,null,__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:"/user/".concat(contributor),as:"/user/".concat(contributor)},__jsx(_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_5__.xz,null,__jsx(Avatar,{contributor,size}))),__jsx(_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_5__.h_,null,__jsx(_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_5__.VY,{sideOffset:5},__jsx(components_molecules_HoverCardWrapper_hover_card_wrapper__WEBPACK_IMPORTED_MODULE_3__.Z,{username:contributor,repositories}))))};AvatarHoverCard.displayName="AvatarHoverCard";const __WEBPACK_DEFAULT_EXPORT__=AvatarHoverCard;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"xsmall"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"components/atoms/Avatar/avatar-hover-card.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}try{avatarhovercard.displayName="avatarhovercard",avatarhovercard.__docgenInfo={description:"",displayName:"avatarhovercard",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"xsmall"'},{value:'"medium"'},{value:'"large"'}]}},repositories:{defaultValue:null,description:"",name:"repositories",required:!0,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"]={docgenInfo:avatarhovercard.__docgenInfo,name:"avatarhovercard",path:"components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/CardProfile/card-profile.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),components_atoms_Avatar_avatar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Avatar/avatar.tsx"),components_atoms_Icon_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/atoms/Icon/icon.tsx"),components_atoms_Typography_text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/atoms/Typography/text.tsx"),img_icons_fork_icon_svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./img/icons/fork-icon.svg"),img_icons_first_pr_icon_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./img/icons/first-pr-icon.svg"),components_atoms_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./components/atoms/Tooltip/tooltip.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const CardProfile=_ref=>{let{githubAvatar,githubName,totalPRs,dateOfFirstPR,isRoundedAvatar}=_ref;return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:"/user/".concat(githubName),as:"/user/".concat(githubName)},__jsx("div",{className:"flex items-center gap-2"},__jsx(components_atoms_Avatar_avatar__WEBPACK_IMPORTED_MODULE_2__.Z,{isCircle:isRoundedAvatar,size:40,avatarURL:githubAvatar||void 0}),__jsx("div",null,__jsx("div",null,__jsx(components_atoms_Typography_text__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"!text-base !text-black  "},githubName)),__jsx("div",{className:"flex gap-2 text-xs"},__jsx("div",{className:"flex items-center gap-1 text-xs text-light-slate-11"},void 0!==totalPRs&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(components_atoms_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_7__.Z,{content:"PRs merged"},__jsx(components_atoms_Icon_icon__WEBPACK_IMPORTED_MODULE_3__.Z,{size:12,alt:"PRs merged",IconImage:img_icons_fork_icon_svg__WEBPACK_IMPORTED_MODULE_5__.Z})),totalPRs," PR",1===totalPRs?"":"s")),__jsx("div",{className:"flex items-center gap-1 text-light-slate-11"},__jsx(components_atoms_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_7__.Z,{content:"First commit date"},__jsx(components_atoms_Icon_icon__WEBPACK_IMPORTED_MODULE_3__.Z,{size:12,alt:"First commit date",IconImage:img_icons_first_pr_icon_svg__WEBPACK_IMPORTED_MODULE_6__.Z})," ",dateOfFirstPR))))))};CardProfile.displayName="CardProfile";const __WEBPACK_DEFAULT_EXPORT__=CardProfile;try{cardprofile.displayName="cardprofile",cardprofile.__docgenInfo={description:"",displayName:"cardprofile",props:{githubAvatar:{defaultValue:null,description:"",name:"githubAvatar",required:!1,type:{name:"string | StaticImageData"}},githubName:{defaultValue:null,description:"",name:"githubName",required:!0,type:{name:"string"}},totalPRs:{defaultValue:null,description:"",name:"totalPRs",required:!0,type:{name:"number"}},dateOfFirstPR:{defaultValue:null,description:"",name:"dateOfFirstPR",required:!0,type:{name:"string"}},isRoundedAvatar:{defaultValue:null,description:"",name:"isRoundedAvatar",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/CardProfile/card-profile.tsx#cardprofile"]={docgenInfo:cardprofile.__docgenInfo,name:"cardprofile",path:"components/molecules/CardProfile/card-profile.tsx#cardprofile"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/ContributorHoverCard/contributor-hover-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./lib/utils/date-utils.ts"),components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Badge/badge.tsx"),_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/molecules/CardProfile/card-profile.tsx"),_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/molecules/CardRepoList/card-repo-list.tsx"),_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/molecules/PullRequestTable/pull-request-table.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const ContributorHoverCard=_ref=>{let{repoList,githubName,totalPR,dateOfFirstPr,githubAvatar,repositories,isMaintainer}=_ref;const topic=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.pageId,calculatedDateFromToday=dateOfFirstPr?(0,lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__.wu)(new Date(parseInt(dateOfFirstPr).toString())):"-";return __jsx("div",{className:"w-[364px] bg-white gap-4 p-3 rounded-lg shadow-superlative flex flex-col"},__jsx("div",{className:"flex items-center justify-between"},__jsx(_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__.Z,{dateOfFirstPR:calculatedDateFromToday,githubAvatar,githubName,totalPRs:totalPR,isRoundedAvatar:!0}),isMaintainer&&__jsx(components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"maintainer"})),__jsx("div",null,__jsx(_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__.Z,{isHoverCard:!0,repositories,limit:5,contributor:githubName,topic})),__jsx("div",null,__jsx(_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__.Z,{repoList,limit:3})))};ContributorHoverCard.displayName="ContributorHoverCard";const __WEBPACK_DEFAULT_EXPORT__=ContributorHoverCard;try{contributorhovercard.displayName="contributorhovercard",contributorhovercard.__docgenInfo={description:"",displayName:"contributorhovercard",props:{repoList:{defaultValue:null,description:"",name:"repoList",required:!0,type:{name:"RepoList[]"}},githubAvatar:{defaultValue:null,description:"",name:"githubAvatar",required:!0,type:{name:"string"}},githubName:{defaultValue:null,description:"",name:"githubName",required:!0,type:{name:"string"}},totalPR:{defaultValue:null,description:"",name:"totalPR",required:!0,type:{name:"number"}},dateOfFirstPr:{defaultValue:null,description:"",name:"dateOfFirstPr",required:!0,type:{name:"string | undefined"}},topic:{defaultValue:null,description:"",name:"topic",required:!1,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}},isMaintainer:{defaultValue:null,description:"",name:"isMaintainer",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"]={docgenInfo:contributorhovercard.__docgenInfo,name:"contributorhovercard",path:"components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/HoverCardWrapper/hover-card-wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),lib_hooks_useFetchUser__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/hooks/useFetchUser.ts"),lib_hooks_useContributorPullRequestsChart__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/hooks/useContributorPullRequestsChart.ts"),lib_utils_github__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/utils/github.ts"),_ContributorHoverCard_contributor_hover_card__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/molecules/ContributorHoverCard/contributor-hover-card.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{username,repositories}=_ref;const topic=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.pageId,{data:contributor}=(0,lib_hooks_useFetchUser__WEBPACK_IMPORTED_MODULE_2__.j)(username),{repoList}=(0,lib_hooks_useContributorPullRequestsChart__WEBPACK_IMPORTED_MODULE_3__.u)(username,"*",repositories,"30"),profile={githubAvatar:(0,lib_utils_github__WEBPACK_IMPORTED_MODULE_4__.cc)(username,40),githubName:username,totalPR:repoList.length},{is_maintainer,first_opened_pr_at}=null!=contributor?contributor:{};return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_ContributorHoverCard_contributor_hover_card__WEBPACK_IMPORTED_MODULE_5__.Z,{dateOfFirstPr:first_opened_pr_at,totalPR:profile.totalPR,githubAvatar:profile.githubAvatar,githubName:profile.githubName,repoList,topic,repositories,isMaintainer:!!is_maintainer}))};try{hovercardwrapper.displayName="hovercardwrapper",hovercardwrapper.__docgenInfo={description:"",displayName:"hovercardwrapper",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"]={docgenInfo:hovercardwrapper.__docgenInfo,name:"hovercardwrapper",path:"components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/PieChart/pie-chart.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_nivo_pie__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@nivo/pie/dist/nivo-pie.es.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const PieChart=_ref=>{let{data}=_ref;return __jsx("div",{className:"w-[135px] h-[135px]"},__jsx(_nivo_pie__WEBPACK_IMPORTED_MODULE_1__.Y2,{data,margin:{top:5,right:5,bottom:5,left:5},innerRadius:.65,padAngle:2,cornerRadius:4,activeInnerRadiusOffset:4,activeOuterRadiusOffset:4,colors:{datum:"data.color"},borderColor:{from:"color"},enableArcLinkLabels:!1,enableArcLabels:!1,arcLabelsSkipAngle:10,arcLabelsTextColor:{from:"color"},tooltip:function(e){var t=e.datum;return __jsx("div",{className:"bg-white py-1 px-2 rounded-lg shadow-xs"},__jsx("div",{className:"flex gap-1 items-center text-light-slate-12 text-xs   capitalize"},__jsx("div",{className:"w-2 h-2 rounded-full mr-1",style:{backgroundColor:t.color}}),__jsx("span",{className:"font-semibold text-light-slate-11"},t.label,":")," ",t.formattedValue," PRs"))},motionConfig:"stiff",legends:[],layers:[_ref2=>{let{dataWithArc,centerX,centerY}=_ref2,total=0;return dataWithArc.forEach((datum=>{total+=datum.value})),__jsx("text",{x:centerX,y:centerY,textAnchor:"middle",dominantBaseline:"central"},total," PRs")},"arcs","arcLabels","arcLinkLabels","legends"]}))};PieChart.displayName="PieChart";const __WEBPACK_DEFAULT_EXPORT__=PieChart;try{piechart.displayName="piechart",piechart.__docgenInfo={description:"",displayName:"piechart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"PieData[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/PieChart/pie-chart.tsx#piechart"]={docgenInfo:piechart.__docgenInfo,name:"piechart",path:"components/molecules/PieChart/pie-chart.tsx#piechart"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/StackedAvatar/stacked-avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>stacked_avatar});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_router=__webpack_require__("./node_modules/next/router.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),avatar_hover_card=__webpack_require__("./components/atoms/Avatar/avatar-hover-card.tsx"),dist=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),public_api_fetcher=__webpack_require__("./lib/utils/public-api-fetcher.ts");const hooks_useInsight=id=>{const baseEndpoint="insights/".concat(id),endpointString="".concat(baseEndpoint),{data,error,mutate}=(0,dist.ZP)(id?endpointString:null,public_api_fetcher.N);return{data,isLoading:!error&&!data,isError:!!error&&Object.keys(error).length>0,mutate}};var fallback_values=__webpack_require__("./lib/utils/fallback-values.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement;const StackedAvatar=_ref=>{let{contributors,visibleQuantity=5,classNames}=_ref;const router=(0,next_router.useRouter)(),{pageId}=router.query,insightId=Number.isInteger(parseInt(pageId,10))?pageId:"",{data:insight,isError}=hooks_useInsight(insightId),repositories=insight?insight.repos.map((repo=>repo.repo_id)):[];return isError?(console.log("Error fetching insight",isError),__jsx("div",null,fallback_values.I)):__jsx("div",{className:(0,clsx_m.Z)("flex -space-x-3 transition-all duration-300 hover:-space-x-1",classNames)},contributors&&contributors.slice(0,visibleQuantity).map((_ref2=>{let{host_login:hostLogin}=_ref2;return __jsx("div",{key:"contributor-avatar-".concat(hostLogin),className:"w-8 h-8 overflow-hidden transition-all duration-300 border-2 border-white border-solid rounded-full"},__jsx(avatar_hover_card.Z,{contributor:hostLogin,repositories}))})))};StackedAvatar.displayName="StackedAvatar";const stacked_avatar=StackedAvatar;try{stackedavatar.displayName="stackedavatar",stackedavatar.__docgenInfo={description:"",displayName:"stackedavatar",props:{contributors:{defaultValue:null,description:"",name:"contributors",required:!0,type:{name:"Contributor[]"}},visibleQuantity:{defaultValue:{value:"5"},description:"",name:"visibleQuantity",required:!1,type:{name:"number"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/StackedAvatar/stacked-avatar.tsx#stackedavatar"]={docgenInfo:stackedavatar.__docgenInfo,name:"stackedavatar",path:"components/molecules/StackedAvatar/stacked-avatar.tsx#stackedavatar"})}catch(__react_docgen_typescript_loader_error){}},"./components/shared/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","children","loading","disabled","variant","showLoadingText","loadingText","onClick","href"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,loading,disabled,variant,showLoadingText=!0,loadingText="Loading...",onClick,href}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);const styles={primary:"bg-light-orange-9 text-light-orange-2 border-light-orange-9 hover:bg-light-orange-10 ".concat(disabled?"bg-light-orange-7 hover:bg-light-orange-7 pointer-events-none":""),default:"bg-white border-light-slate-8 text-light-slate-11 hover:bg-light-slate-2 ".concat(disabled?"bg-light-slate-4 text-light-slate-9 pointer-events-none":""),dark:"bg-dark-slate-6 border-dark-slate-8 text-light-orange-2 hover:bg-dark-slate-8 ".concat(disabled?"bg-dark-slate-4 text-dark-slate-9 pointer-events-none":""),outline:"bg-orange-50 border-orange-500 text-orange-600 hover:bg-orange-100 ".concat(disabled?"bg-light-orange-3 pointer-events-none text-light-orange-7 border-light-orange-5":""),link:"text-orange-600 hover:bg-orange-100 border-none ".concat(disabled?"text-orange-400 pointer-events-none":""),destructive:"border-dark-red-8 bg-dark-red-8 text-white hover:border-dark-red-7 hover:bg-dark-red-7",text:""},rootClass=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(styles[variant],disabled&&"cursor-not-allowed",disabled&&"destructive"!==variant&&"bg-light-orange-7 hover:bg-light-orange-7","items-center inline-flex text-sm font-semibold tracking-tight border py-2 px-4 rounded-md focus-visible:border-orange-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-200 whitespace-nowrap",className),content=loading?__jsx("div",null,__jsx("svg",{"aria-hidden":"true",role:"status",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("inline w-4 h-4 text-white animate-spin",showLoadingText?"mr-2":""),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})),showLoadingText&&__jsx("span",{className:"text-white"},loadingText)):children;return href?__jsx("a",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,href,ref},props),content):__jsx("button",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,ref,onClick:disabled?void 0:onClick},props),content)}));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"link"'},{value:'"text"'},{value:'"primary"'},{value:'"outline"'},{value:'"default"'},{value:'"dark"'},{value:'"destructive"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},showLoadingText:{defaultValue:{value:"true"},description:"",name:"showLoadingText",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:{value:"Loading..."},description:"",name:"loadingText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/Button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/shared/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./lib/hooks/api/useRepositories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),swr__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),next_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/router.js"),lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/utils/public-api-fetcher.ts"),lib_utils_get_filter_query__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/utils/get-filter-query.ts");const __WEBPACK_DEFAULT_EXPORT__=function(){var _data$data,_data$meta;let repoIds=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],range=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,limit=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;const router=(0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),{0:page,1:setPage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),{pageId,selectedFilter}=router.query,topic=pageId,filterQuery=(0,lib_utils_get_filter_query__WEBPACK_IMPORTED_MODULE_4__.Z)(selectedFilter),query=new URLSearchParams(filterQuery);topic&&Number.isNaN(Number(topic))&&query.set("topic",topic),page&&query.set("page","".concat(page)),limit&&query.set("limit","".concat(limit)),range&&query.set("range","".concat(range)),(null==repoIds?void 0:repoIds.length)>0&&(query.delete("topic"),query.set("repoIds",repoIds.join(","))),query.get("repo")&&query.delete("topic");const endpointString="".concat("repos/search","?").concat(query),{data,error,mutate}=(0,swr__WEBPACK_IMPORTED_MODULE_1__.ZP)(endpointString,lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_3__.N);return{data:null!==(_data$data=null==data?void 0:data.data)&&void 0!==_data$data?_data$data:[],meta:null!==(_data$meta=null==data?void 0:data.meta)&&void 0!==_data$meta?_data$meta:{itemCount:0,limit:0,page:0,hasNextPage:!1,hasPreviousPage:!1,pageCount:0},isLoading:!error&&!data,isError:!!error,mutate,page,setPage}}},"./lib/utils/copy-to-clipboard.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>copyToClipboard});var _shorten_url__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/utils/shorten-url.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js");const copyToClipboard=async content=>{try{const shortUrl=await(0,_shorten_url__WEBPACK_IMPORTED_MODULE_0__.X)(content);await navigator.clipboard.writeText(shortUrl)}catch(error){console.log("This browser does not support the clipboard.",error)}}},"./lib/utils/fallback-values.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>DATA_FALLBACK_VALUE});const DATA_FALLBACK_VALUE="-"},"./lib/utils/get-repo-insights.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=repos=>{const repoList=repos.map((repo=>{const[repoOwner,repoName]=repo.full_name.split("/");return{repoIcon:"https://github.com/".concat(repoOwner,".png?size=60"),repoName,repoOwner}})),repoTotals=repos.reduce(((totals,curr)=>{const merged=(totals.merged||0)+(curr.merged_prs_count||0),opened=(totals.opened||0)+(curr.open_prs_count||0),closed=(totals.closed||0)+(curr.closed_prs_count||0),drafts=(totals.drafts||0)+(curr.draft_prs_count||0);return{merged,opened,closed,drafts,churn:(totals.churn||0)+(curr.churnTotalCount||0),velocity:(totals.velocity||0)+(curr.pr_velocity_count||0),total:(totals.total||0)+merged+opened+closed+drafts}}),{});return{repoList,open:repoTotals.opened||0,merged:repoTotals.merged||0,closed:repoTotals.closed||0,drafts:repoTotals.drafts||0,total:repoTotals.total||0,velocity:repoTotals.velocity||0,churn:repoTotals.churn||0}}},"./lib/utils/shorten-url.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>shortenUrl});var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@sentry/core/esm/exports.js");async function shortenUrl(url){try{const response=await fetch("".concat("https://beta.api.opensauced.pizza/v2","/url/shorten?url=").concat(encodeURIComponent(url)));if(response.ok){return(await response.json()).shortUrl}}catch(e){_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.Tb(new Error("Failed to shorten URL ".concat(url),{cause:e}))}return url}},"./img/icons/test-repo-avatar.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/test-repo-avatar.44d8c630.svg",height:24,width:24,blurDataURL:"static/media/test-repo-avatar.44d8c630.svg"}}}]);