(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9121],{59121:function(e,t,a){"use strict";a.r(t);var n=a(29439),c=a(1413),l=a(72791),o=a(99779),s=a(61889),r=a(64554),i=a(95087),d=a(75952),u=a(25469),h=a(78687),x=a(11135),f=a(25787),b=a(45248),p=a(26824),m=a(23814),g=a(92983),k=a(34866),v=a(74794),C=a(21435),y=a(5172),w=a(27454),j=a(80184),Z=null;t.default=(0,f.Z)((function(e){return(0,x.Z)((0,c.Z)((0,c.Z)((0,c.Z)({sizeItem:{width:150},timeItem:{width:100}},m.OR),m.VX),{},{tableWrapper:{height:"calc(100vh - 292px)"},formBox:{border:"1px solid #EAEAEA",padding:25,marginBottom:15},traceCheckedIcon:{width:"14px",height:"14px",marginLeft:"0px"},unCheckedIcon:{width:"14px",height:"14px"}},m.Bz))}))((function(e){var t=e.classes,a=(0,u.TL)(),c=(0,h.v9)((function(e){return e.trace.messages})),x=(0,h.v9)((function(e){return e.trace.traceStarted})),f=(0,l.useState)(""),m=(0,n.Z)(f,2),I=m[0],S=m[1],_=(0,l.useState)(""),T=(0,n.Z)(_,2),N=T[0],F=T[1],L=(0,l.useState)(""),O=(0,n.Z)(L,2),z=O[0],E=O[1],A=(0,l.useState)(""),P=(0,n.Z)(A,2),W=P[0],B=P[1],K=(0,l.useState)(0),M=(0,n.Z)(K,2),R=M[0],D=M[1],U=(0,l.useState)(!1),q=(0,n.Z)(U,2),G=q[0],H=q[1],J=(0,l.useState)(!0),V=(0,n.Z)(J,2),X=V[0],Q=V[1],Y=(0,l.useState)(!1),$=(0,n.Z)(Y,2),ee=$[0],te=$[1],ae=(0,l.useState)(!1),ne=(0,n.Z)(ae,2),ce=ne[0],le=ne[1],oe=(0,l.useState)(!1),se=(0,n.Z)(oe,2),re=se[0],ie=se[1],de=(0,l.useState)(!1),ue=(0,n.Z)(de,2),he=ue[0],xe=ue[1],fe=(0,l.useState)(!1),be=(0,n.Z)(fe,2),pe=be[0],me=be[1];return(0,j.jsxs)(l.Fragment,{children:[(0,j.jsx)(d.mr1,{label:"Trace"}),(0,j.jsx)(v.Z,{children:(0,j.jsxs)(s.ZP,{className:t.formBox,children:[(0,j.jsxs)(s.ZP,{item:!0,xs:12,sx:{display:"flex",flexFlow:"column","& .trace-checkbox-label":{fontSize:"14px",fontWeight:"normal"}},children:[(0,j.jsx)(r.Z,{sx:{fontSize:"16px",fontWeight:600,padding:"20px 0px 20px 0"},children:"Calls to Trace"}),(0,j.jsxs)(r.Z,{className:"".concat(x?"inactive-state":""),sx:{display:"flex",alignItems:"center",justifyContent:"space-between","&.inactive-state .trace-checkbox-label":{color:"#a6a5a5"}},children:[(0,j.jsxs)(r.Z,{sx:{display:"flex",flexFlow:"row",gap:{md:"30px"},"& .trace-checked-icon":{border:"1px solid red"}},children:[(0,j.jsx)(k.Z,{checked:G,id:"all_calls",name:"all_calls",label:"All",onChange:function(e){H(e.target.checked)},value:"all",disabled:x,overrideLabelClasses:"trace-checkbox-label",classes:{checkedIcon:t.traceCheckedIcon,unCheckedIcon:t.unCheckedIcon}}),(0,j.jsx)(k.Z,{checked:X||G,id:"s3_calls",name:"s3_calls",label:"S3",onChange:function(e){Q(e.target.checked)},value:"s3",disabled:x,overrideLabelClasses:"trace-checkbox-label",classes:{checkedIcon:t.traceCheckedIcon,unCheckedIcon:t.unCheckedIcon}}),(0,j.jsx)(k.Z,{checked:ee||G,id:"internal_calls",name:"internal_calls",label:"Internal",onChange:function(e){te(e.target.checked)},value:"internal",disabled:G||x,overrideLabelClasses:"trace-checkbox-label",classes:{checkedIcon:t.traceCheckedIcon,unCheckedIcon:t.unCheckedIcon}}),(0,j.jsx)(k.Z,{checked:ce||G,id:"storage_calls",name:"storage_calls",label:"Storage",onChange:function(e){le(e.target.checked)},value:"storage",disabled:G||x,overrideLabelClasses:"trace-checkbox-label",classes:{checkedIcon:t.traceCheckedIcon,unCheckedIcon:t.unCheckedIcon}}),(0,j.jsx)(k.Z,{checked:re||G,id:"os_calls",name:"os_calls",label:"OS",onChange:function(e){ie(e.target.checked)},value:"os",disabled:G||x,overrideLabelClasses:"trace-checkbox-label",classes:{checkedIcon:t.traceCheckedIcon,unCheckedIcon:t.unCheckedIcon}})]}),(0,j.jsxs)(r.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"15px"},children:[(0,j.jsx)(w.Z,{tooltip:"More filter options",children:(0,j.jsx)(d.zxk,{id:"filter-toggle",onClick:function(){me(!pe)},label:"Filters",icon:(0,j.jsx)(d.k1n,{}),variant:"regular",className:"filters-toggle-button",style:{width:"118px",background:pe?"rgba(8, 28, 66, 0.04)":""}})}),!x&&(0,j.jsx)(d.zxk,{id:"start-trace",label:"Start","data-test-id":"trace-start-button",variant:"callAction",onClick:function(){a((0,y.At)());var e=new URL(window.location.toString()),t=e.port,n="".concat(X?"s3,":"").concat(ee?"internal,":"").concat(ce?"storage,":"").concat(re?"os,":"");G&&(n="all");var c=new URL(document.baseURI).pathname,l=(0,p.x2)(e.protocol);Z=new i.w3cwebsocket("".concat(l,"://").concat(e.hostname,":").concat(t).concat(c,"ws/trace?calls=").concat(n,"&threshold=").concat(R,"&onlyErrors=").concat(he?"yes":"no","&statusCode=").concat(I,"&method=").concat(N,"&funcname=").concat(z,"&path=").concat(W));var s=null;if(null!==Z)return Z.onopen=function(){console.log("WebSocket Client Connected"),a((0,y.qv)(!0)),Z.send("ok"),s=setInterval((function(){Z.send("ok")}),1e4)},Z.onmessage=function(e){var t=JSON.parse(e.data.toString());t.ptime=o.ou.fromISO(t.time).toJSDate(),t.key=Math.random(),a((0,y.ho)(t))},Z.onclose=function(){clearInterval(s),console.log("connection closed by server"),a((0,y.qv)(!1))},function(){Z.close(1e3),clearInterval(s),console.log("closing websockets"),(0,y.qv)(!1)}},style:{width:"118px"}}),x&&(0,j.jsx)(d.zxk,{id:"stop-trace",label:"Stop Trace","data-test-id":"trace-stop-button",variant:"callAction",onClick:function(){Z.close(1e3),a((0,y.qv)(!1))},style:{width:"118px"}})]})]})]}),pe?(0,j.jsxs)(s.ZP,{item:!0,className:"".concat(x?"inactive-state":""),xs:12,sx:{marginTop:"25px",display:"flex",flexFlow:"column",background:"#FBFAFA",padding:"30px","&.inactive-state label":{color:"#a6a5a5"},"& .orient-vertical":{flexFlow:"column","& label":{marginBottom:"10px",fontWeight:600}},"& .trace-checkbox-label":{fontSize:"14px",fontWeight:"normal"}},children:[(0,j.jsxs)(r.Z,{sx:{gap:"30px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",width:"100%"},children:[(0,j.jsx)(C.Z,{className:"orient-vertical",id:"trace-status-code",name:"trace-status-code",label:"Status Code",classes:{},placeholder:"e.g. 503",value:I,onChange:function(e){S(e.target.value)},disabled:x}),(0,j.jsx)(C.Z,{className:"orient-vertical",id:"trace-function-name",name:"trace-function-name",label:"Function Name",classes:{},placeholder:"e.g. FunctionName2055",value:z,onChange:function(e){E(e.target.value)},disabled:x}),(0,j.jsx)(C.Z,{className:"orient-vertical",id:"trace-method",name:"trace-method",label:"Method",classes:{},placeholder:"e.g. Method 2056",value:N,onChange:function(e){F(e.target.value)},disabled:x})]}),(0,j.jsxs)(r.Z,{sx:{gap:"30px",display:"grid",gridTemplateColumns:"2fr 1fr",width:"100%",marginTop:"33px"},children:[(0,j.jsx)(r.Z,{flex:"2",style:{width:"calc( 100% + 10px)"},children:(0,j.jsx)(C.Z,{className:"orient-vertical",id:"trace-path",name:"trace-path",label:"Path",classes:{},placeholder:"e.g. my-bucket/my-prefix/*",value:W,onChange:function(e){B(e.target.value)},disabled:x})}),(0,j.jsx)(r.Z,{sx:{marginLeft:"15px"},children:(0,j.jsx)(C.Z,{className:"orient-vertical",id:"trace-fthreshold",name:"trace-fthreshold",label:"Response Threshold",type:"number",classes:{},placeholder:"e.g. website.io.3249.114.12",value:"".concat(R),onChange:function(e){D(parseInt(e.target.value))},disabled:x})})]}),(0,j.jsx)(r.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-start",marginTop:"40px"},children:(0,j.jsx)(k.Z,{checked:he,id:"only_errors",name:"only_errors",label:"Display only Errors",onChange:function(e){xe(e.target.checked)},value:"only_errors",disabled:x,overrideLabelClasses:"trace-checkbox-label",classes:{checkedIcon:t.traceCheckedIcon,unCheckedIcon:t.unCheckedIcon}})})]}):null,(0,j.jsx)(s.ZP,{item:!0,xs:12,children:(0,j.jsx)(r.Z,{sx:{fontSize:"16px",fontWeight:600,marginBottom:"30px",marginTop:"30px"},children:"Trace Results"})}),(0,j.jsx)(s.ZP,{item:!0,xs:12,className:t.tableBlock,children:(0,j.jsx)(g.Z,{itemActions:[],columns:[{label:"Time",elementKey:"ptime",renderFunction:function(e){var t=new Date(e);return(0,b.zk)(t)},globalClass:t.timeItem},{label:"Name",elementKey:"api"},{label:"Status",elementKey:"",renderFunction:function(e){return"".concat(e.statusCode," ").concat(e.statusMsg)},renderFullObject:!0},{label:"Location",elementKey:"configuration_id",renderFunction:function(e){return"".concat(e.host," ").concat(e.client)},renderFullObject:!0},{label:"Load Time",elementKey:"callStats.duration",globalClass:t.timeItem},{label:"Upload",elementKey:"callStats.rx",renderFunction:b.ae,globalClass:t.sizeItem},{label:"Download",elementKey:"callStats.tx",renderFunction:b.ae,globalClass:t.sizeItem}],isLoading:!1,records:c,entityName:"Traces",idField:"api",customEmptyMessage:x?"No Traced elements received yet":"Trace is not started yet",customPaperHeight:t.tableWrapper,autoScrollToBottom:!0})})]})})]})}))},26824:function(e,t,a){"use strict";a.d(t,{HE:function(){return l},V9:function(){return n},ci:function(){return c},x2:function(){return o}});var n=1006,c=1008,l=1011,o=function(e){var t="ws";return"https:"===e&&(t="wss"),t}},94210:function(e){var t=function(){if("object"===typeof self&&self)return self;if("object"===typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};e.exports=function(){if(this)return this;if("object"===typeof globalThis&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return t()}try{return __global__||t()}finally{delete Object.prototype.__global__}}()},95087:function(e,t,a){var n;if("object"===typeof globalThis)n=globalThis;else try{n=a(94210)}catch(s){}finally{if(n||"undefined"===typeof window||(n=window),!n)throw new Error("Could not determine global this")}var c=n.WebSocket||n.MozWebSocket,l=a(51496);function o(e,t){return t?new c(e,t):new c(e)}c&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach((function(e){Object.defineProperty(o,e,{get:function(){return c[e]}})})),e.exports={w3cwebsocket:c?o:null,version:l}},51496:function(e,t,a){e.exports=a(19794).version},19794:function(e){"use strict";e.exports={version:"1.0.34"}}}]);
//# sourceMappingURL=9121.b5b6c232.chunk.js.map