"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[402],{70402:function(n,e,t){t.r(e);var i=t(29439),o=t(72791),s=t(29945),r=t(31776),c=t(82342),u=t(87995),l=t(81551),a=t(91685),d=t(23508),f=t(80184);e.default=function(n){var e=n.closeVersioningModalAndRefresh,t=n.modalOpen,x=n.selectedBucket,g=n.versioningInfo,h=void 0===g?{}:g,p="Enabled"===h.status,j=(0,l.TL)(),v=(0,o.useState)(!1),b=(0,i.Z)(v,2),k=b[0],m=b[1];return(0,f.jsx)(d.Z,{title:"Versioning on Bucket",confirmText:p?"Suspend":"Enable",isOpen:t,isLoading:k,titleIcon:(0,f.jsx)(s.EjK,{}),onConfirm:function(){k||(m(!0),r.h.buckets.setBucketVersioning(x,{versioning:!p}).then((function(){m(!1),e(!0)})).catch((function(n){m(!1),j((0,u.Ih)((0,c.g)(n.error)))})))},confirmButtonProps:{variant:"callAction"},onClose:function(){e(!1)},confirmationContent:(0,f.jsxs)(s.xuv,{id:"alert-dialog-description",children:["Are you sure you want to"," ",(0,f.jsx)("strong",{children:p?"suspend":"enable"})," ","versioning for this bucket?",p&&(0,f.jsxs)(o.Fragment,{children:[(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsx)("strong",{children:"File versions won't be automatically deleted."})]}),(0,f.jsx)(s.xuv,{sx:{paddingTop:"20px"},children:p?(0,f.jsx)(a.Z,{versioningState:h}):null})]})})}}}]);
//# sourceMappingURL=402.75cd5b25.chunk.js.map