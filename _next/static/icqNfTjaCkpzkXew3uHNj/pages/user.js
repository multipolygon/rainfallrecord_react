(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{L6Ll:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a("ODXe"),o=a("q1tI"),i=a.n(o),r=a("h7RS"),l=a("SMIj"),c=a("e5ou"),d=a("W+MB"),s=i.a.createElement;function p(){return s(r.a,null,s(d.a.Consumer,null,(function(e){var t=Object(n.a)(e,1)[0];return s(c.a,null,null!==t&&s(i.a.Fragment,null,s(c.b,null,"User: ",t.username),s(l.a,{locations:t.locations})))})))}},SMIj:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("Ff2n"),r=a("wx14"),l=(a("17x9"),a("iuhU")),c=a("H2TA");var d=n.createContext(),s=n.forwardRef((function(e,t){var a=e.classes,o=e.className,c=e.component,s=void 0===c?"table":c,p=e.padding,u=void 0===p?"default":p,g=e.size,m=void 0===g?"medium":g,b=e.stickyHeader,f=void 0!==b&&b,h=Object(i.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=n.useMemo((function(){return{padding:u,size:m,stickyHeader:f}}),[u,m,f]);return n.createElement(d.Provider,{value:v},n.createElement(s,Object(r.a)({ref:t,className:Object(l.a)(a.root,o,f&&a.stickyHeader)},h)))})),p=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s);var u=n.createContext(),g={variant:"body"},m=n.forwardRef((function(e,t){var a=e.classes,o=e.className,c=e.component,d=void 0===c?"tbody":c,s=Object(i.a)(e,["classes","className","component"]);return n.createElement(u.Provider,{value:g},n.createElement(d,Object(r.a)({className:Object(l.a)(a.root,o),ref:t},s)))})),b=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(m),f=a("NqtD"),h=a("ye/S"),v=n.forwardRef((function(e,t){var a,o=e.align,c=void 0===o?"inherit":o,s=e.classes,p=e.className,g=e.component,m=e.padding,b=e.scope,h=e.size,v=e.sortDirection,y=e.variant,j=Object(i.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),O=n.useContext(d),x=n.useContext(u);a=g||(x&&"head"===x.variant?"th":"td");var w=b;!w&&x&&"head"===x.variant&&(w="col");var N=m||(O&&O.padding?O.padding:"default"),k=h||(O&&O.size?O.size:"medium"),C=y||x&&x.variant,R=null;return v&&(R="asc"===v?"ascending":"descending"),n.createElement(a,Object(r.a)({ref:t,className:Object(l.a)(s.root,s[C],p,"inherit"!==c&&s["align".concat(Object(f.a)(c))],"default"!==N&&s["padding".concat(Object(f.a)(N))],"medium"!==k&&s["size".concat(Object(f.a)(k))],"head"===C&&O&&O.stickyHeader&&s.stickyHeader),"aria-sort":R,scope:w},j))})),y=Object(c.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(h.d)(Object(h.b)(e.palette.divider,1),.88):Object(h.a)(Object(h.b)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(v),j=n.forwardRef((function(e,t){var a=e.classes,o=e.className,c=e.component,d=void 0===c?"div":c,s=Object(i.a)(e,["classes","className","component"]);return n.createElement(d,Object(r.a)({ref:t,className:Object(l.a)(a.root,o)},s))})),O=Object(c.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(j),x={variant:"head"},w=n.forwardRef((function(e,t){var a=e.classes,o=e.className,c=e.component,d=void 0===c?"thead":c,s=Object(i.a)(e,["classes","className","component"]);return n.createElement(u.Provider,{value:x},n.createElement(d,Object(r.a)({className:Object(l.a)(a.root,o),ref:t},s)))})),N=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(w),k=n.forwardRef((function(e,t){var a=e.classes,o=e.className,c=e.component,d=void 0===c?"tr":c,s=e.hover,p=void 0!==s&&s,g=e.selected,m=void 0!==g&&g,b=Object(i.a)(e,["classes","className","component","hover","selected"]),f=n.useContext(u);return n.createElement(d,Object(r.a)({ref:t,className:Object(l.a)(a.root,o,f&&{head:a.head,footer:a.footer}[f.variant],p&&a.hover,m&&a.selected)},b))})),C=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(h.b)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(k),R=a("kKAo"),E=a("AesL"),T=o.a.createElement;t.a=function(e){var t=e.locations;return T(O,{component:R.a,size:"small",style:{backgroundColor:"transparent"}},T(p,null,T(N,null,T(C,null,T(y,null,"Title"),T(y,null,"Location"),T(y,{align:"right"},"7 Days"),T(y,{align:"right"},"30 Days"))),T(b,null,t.map((function(e){return T(C,{key:e.id},T(y,{component:"th",scope:"row"},T(E.a,{href:"/locations/[id]",as:"/locations/".concat(e.id,"/")},e.title)),T(y,null,e.location),T(y,{align:"right"},e.total_7_days),T(y,{align:"right"},e.total_30_days))})))))}},lgRd:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user",function(){return a("L6Ll")}])}},[["lgRd",0,2,1,3,4]]]);