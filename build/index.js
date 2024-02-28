!function(){"use strict";var e,t={679:function(){var e=window.wp.blocks,t=window.wp.element,l=window.wp.i18n,o=window.wp.blockEditor,a=window.wp.components,n=window.wp.compose,r=window.wp.data,i=JSON.parse('["admissions","alumni","apply-now","audio","back","calendar","cancel","comment","directory","document","donor","download","email","event","facebook","faculty","faq","favorite","give","google-plus","handbook","home","hours","hr","image","inclusive","info","instagram","intranet","job","less","link","linkedin","location","menu","more","news","next","notification","parent","partners","pay","phone","pinterest","plan","program-of-study","research","resources","safety","search","send","settings","shop","sitemap","snapchat","students","submit","team","tickets","trash","twitter","unit","user","video","volume","website","weibo","whatsapp","workshop","youtube"]'),c=JSON.parse('{"u2":"create-block/uofi-modal-block"}');(0,e.registerBlockType)(c.u2,{edit:function e({attributes:c,setAttributes:u,isSelected:s,clientId:m}){const{modalId:d,triggerType:g,triggerText:b,triggerButtonStyle:p,triggerIcon:f,triggerIconStyle:v,triggerIconColor:h,triggerJustification:w,modalHeading:E}=c,y=(0,n.useInstanceId)(e);u({modalId:`uofi-modal-${y+1}`});const k=i.map((e=>({label:e,value:e}))),C=d+"-title",I=(0,r.useSelect)((e=>e("core/block-editor").hasSelectedInnerBlock(m)));return(0,t.createElement)("div",{...(0,o.useBlockProps)()},(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(a.PanelBody,{title:"Modal Trigger"},(0,t.createElement)(a.SelectControl,{label:"Trigger Type",value:g,options:[{value:"button",label:"Button"},{value:"icon",label:"Icon"}],onChange:e=>{u({triggerType:e})}}),"button"==g?(0,t.createElement)(a.SelectControl,{label:"Button Style",value:p,options:[{label:"Blue Text",value:"il-white-blue"},{label:"Orange Text",value:"il-white-orange"},{label:"Blue Background",value:"il-blue"},{label:"Orange Background",value:"il-orange"}],onChange:e=>{u({triggerButtonStyle:e})}}):"icon"==g?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a.SelectControl,{label:"Icon",value:f,options:k,onChange:e=>{u({triggerIcon:e})}}),(0,t.createElement)(a.SelectControl,{label:"Icon Style",help:"Some icons not available in line style",value:v,options:[{label:"Filled",value:"il-icon"},{label:"Line",value:"il-icon-line"}],onChange:e=>{u({triggerIconStyle:e})}}),(0,t.createElement)(a.SelectControl,{label:"Icon Color",value:h,options:[{label:"Orange",value:"orange-icon"},{label:"Blue",value:"blue-icon"},{label:"White",value:"white-icon"}],onChange:e=>{u({triggerIconColor:e})}})):void 0,(0,t.createElement)(a.SelectControl,{label:"Trigger Justification",value:w,options:[{label:"Left",value:"items-justified-left"},{label:"Center",value:"items-justified-center"},{label:"Right",value:"items-justified-right"}],onChange:e=>{u({triggerJustification:e})}}))),(0,t.createElement)("div",{className:`uofi-modal-trigger-wrapper ${w}`},"button"==g?(0,t.createElement)("button",{className:`uofi-modal-trigger il-button ${p}`},(0,t.createElement)(o.RichText,{"aria-label":(0,l.__)("Trigger button text"),placeholder:(0,l.__)("Trigger text..."),value:b,onChange:e=>{u({triggerText:e})},allowedFormats:["core/bold","core/italic"],withoutInteractiveFormatting:!0})):(0,t.createElement)("button",{type:"button",className:"uofi-modal-trigger uofi-modal-icon-button","aria-label":`${E} modal trigger`},(0,t.createElement)("span",{className:`uofi-modal-icon ${v} ${h}`},f))),(s||I)&&(0,t.createElement)("div",{className:"uofi-modal il-formatted",id:d},(0,t.createElement)("div",{className:"uofi-modal-content"},(0,t.createElement)(o.RichText,{tagName:"h2",className:"uofi-modal-title",id:C,"aria-label":(0,l.__)("Modal title"),placeholder:(0,l.__)("Modal title..."),value:E,onChange:e=>{u({modalHeading:e})},allowedFormats:["core/bold","core/italic"]}),(0,t.createElement)(o.InnerBlocks,null))))},save:function({attributes:e}){const{modalId:l,triggerType:a,triggerText:n,triggerButtonStyle:r,triggerIcon:i,triggerIconStyle:c,triggerIconColor:u,triggerJustification:s,modalHeading:m}=e,d=l+"-title";return(0,t.createElement)("div",{...o.useBlockProps.save()},(0,t.createElement)("div",{className:`uofi-modal-trigger-wrapper ${s}`},"button"==a?(0,t.createElement)("button",{className:`uofi-modal-trigger il-button ${r}`,"data-modal-target":l},n):(0,t.createElement)("button",{type:"button",className:"uofi-modal-trigger uofi-modal-icon-button",title:`Open ${m} Modal`,"aria-label":`Open ${m} modal`,"data-modal-target":l},(0,t.createElement)("span",{className:`uofi-modal-icon ${c} ${u}`},i))),(0,t.createElement)("div",{className:"uofi-modal il-formatted",id:l,"aria-labelledby":d,tabIndex:"-1","aria-hidden":"true",style:"display:none;"},(0,t.createElement)("div",{className:"uofi-modal-content"},(0,t.createElement)("div",{className:"uofi-modal-header"},(0,t.createElement)("h2",{id:d},m),(0,t.createElement)("button",{type:"button",className:"uofi-modal-close-btn",title:"Close modal","aria-label":"Close modal"},(0,t.createElement)("span",{className:"il-icon"},"cancel"))),(0,t.createElement)(o.InnerBlocks.Content,null),(0,t.createElement)("div",{className:"uofi-modal-footer"},(0,t.createElement)("button",{type:"button",className:"uofi-modal-close-btn il-button"},"Close")))))}})}},l={};function o(e){var a=l[e];if(void 0!==a)return a.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,e=[],o.O=function(t,l,a,n){if(!l){var r=1/0;for(s=0;s<e.length;s++){l=e[s][0],a=e[s][1],n=e[s][2];for(var i=!0,c=0;c<l.length;c++)(!1&n||r>=n)&&Object.keys(o.O).every((function(e){return o.O[e](l[c])}))?l.splice(c--,1):(i=!1,n<r&&(r=n));if(i){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[l,a,n]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};o.O.j=function(t){return 0===e[t]};var t=function(t,l){var a,n,r=l[0],i=l[1],c=l[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(c)var s=c(o)}for(t&&t(l);u<r.length;u++)n=r[u],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(s)},l=self.webpackChunkuofi_modal_block=self.webpackChunkuofi_modal_block||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var a=o.O(void 0,[431],(function(){return o(679)}));a=o.O(a)}();