import{r as f,g as T,a as P,s as k,u as A,v as B,j as r,e as z,S as w,T as I,f as E,h as R,U as Z,I as O,t as K}from"./index-DYU24BB5.js";import{n as J,i as X,B as g,T as C,e as Y}from"./TextField-BDpl4tfw.js";import{S as ee,A as F,F as G,g as te,f as se,o as ne,p as ie,h as oe,l as re}from"./index-D_hEYn43.js";const N=f.createContext();function ae(e){return T("MuiGrid",e)}const ce=[0,1,2,3,4,5,6,7,8,9,10],le=["column-reverse","column","row-reverse","row"],ue=["nowrap","wrap-reverse","wrap"],h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],v=P("MuiGrid",["root","container","item","zeroMinWidth",...ce.map(e=>`spacing-xs-${e}`),...le.map(e=>`direction-xs-${e}`),...ue.map(e=>`wrap-xs-${e}`),...h.map(e=>`grid-xs-${e}`),...h.map(e=>`grid-sm-${e}`),...h.map(e=>`grid-md-${e}`),...h.map(e=>`grid-lg-${e}`),...h.map(e=>`grid-xl-${e}`)]);function de({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce((i,s)=>{let o={};if(t[s]&&(n=t[s]),!n)return i;if(n===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=w({values:t.columns,breakpoints:e.breakpoints.values}),l=typeof a=="object"?a[s]:a;if(l==null)return i;const c=`${Math.round(n/l*1e8)/1e6}%`;let u={};if(t.container&&t.item&&t.columnSpacing!==0){const m=e.spacing(t.columnSpacing);if(m!=="0px"){const d=`calc(${c} + ${m})`;u={flexBasis:d,maxWidth:d}}}o={flexBasis:c,flexGrow:0,maxWidth:c,...u}}return e.breakpoints.values[s]===0?Object.assign(i,o):i[e.breakpoints.up(s)]=o,i},{})}function me({theme:e,ownerState:t}){const n=w({values:t.direction,breakpoints:e.breakpoints.values});return I({theme:e},n,i=>{const s={flexDirection:i};return i.startsWith("column")&&(s[`& > .${v.item}`]={maxWidth:"none"}),s})}function V({breakpoints:e,values:t}){let n="";Object.keys(t).forEach(s=>{n===""&&t[s]!==0&&(n=s)});const i=Object.keys(e).sort((s,o)=>e[s]-e[o]);return i.slice(0,i.indexOf(n))}function pe({theme:e,ownerState:t}){const{container:n,rowSpacing:i}=t;let s={};if(n&&i!==0){const o=w({values:i,breakpoints:e.breakpoints.values});let a;typeof o=="object"&&(a=V({breakpoints:e.breakpoints.values,values:o})),s=I({theme:e},o,(l,c)=>{const u=e.spacing(l);return u!=="0px"?{marginTop:`calc(-1 * ${u})`,[`& > .${v.item}`]:{paddingTop:u}}:a!=null&&a.includes(c)?{}:{marginTop:0,[`& > .${v.item}`]:{paddingTop:0}}})}return s}function xe({theme:e,ownerState:t}){const{container:n,columnSpacing:i}=t;let s={};if(n&&i!==0){const o=w({values:i,breakpoints:e.breakpoints.values});let a;typeof o=="object"&&(a=V({breakpoints:e.breakpoints.values,values:o})),s=I({theme:e},o,(l,c)=>{const u=e.spacing(l);if(u!=="0px"){const m=`calc(-1 * ${u})`;return{width:`calc(100% + ${u})`,marginLeft:m,[`& > .${v.item}`]:{paddingLeft:u}}}return a!=null&&a.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${v.item}`]:{paddingLeft:0}}})}return s}function fe(e,t,n={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[n[`spacing-xs-${String(e)}`]];const i=[];return t.forEach(s=>{const o=e[s];Number(o)>0&&i.push(n[`spacing-${s}-${String(o)}`])}),i}const ge=k("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{container:i,direction:s,item:o,spacing:a,wrap:l,zeroMinWidth:c,breakpoints:u}=n;let m=[];i&&(m=fe(a,u,t));const d=[];return u.forEach(p=>{const x=n[p];x&&d.push(t[`grid-${p}-${String(x)}`])}),[t.root,i&&t.container,o&&t.item,c&&t.zeroMinWidth,...m,s!=="row"&&t[`direction-xs-${String(s)}`],l!=="wrap"&&t[`wrap-xs-${String(l)}`],...d]}})(({ownerState:e})=>({boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...e.item&&{margin:0},...e.zeroMinWidth&&{minWidth:0},...e.wrap!=="wrap"&&{flexWrap:e.wrap}}),me,pe,xe,de);function he(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const n=[];return t.forEach(i=>{const s=e[i];if(Number(s)>0){const o=`spacing-${i}-${String(s)}`;n.push(o)}}),n}const ve=e=>{const{classes:t,container:n,direction:i,item:s,spacing:o,wrap:a,zeroMinWidth:l,breakpoints:c}=e;let u=[];n&&(u=he(o,c));const m=[];c.forEach(p=>{const x=e[p];x&&m.push(`grid-${p}-${String(x)}`)});const d={root:["root",n&&"container",s&&"item",l&&"zeroMinWidth",...u,i!=="row"&&`direction-xs-${String(i)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...m]};return E(d,ae,t)},Pe=f.forwardRef(function(t,n){const i=A({props:t,name:"MuiGrid"}),{breakpoints:s}=B(),o=J(i),{className:a,columns:l,columnSpacing:c,component:u="div",container:m=!1,direction:d="row",item:p=!1,rowSpacing:x,spacing:S=0,wrap:D="wrap",zeroMinWidth:_=!1,...b}=o,U=x||S,Q=c||S,q=f.useContext(N),$=m?l||12:q,L={},M={...b};s.keys.forEach(y=>{b[y]!=null&&(L[y]=b[y],delete M[y])});const W={...o,columns:$,container:m,direction:d,item:p,rowSpacing:U,columnSpacing:Q,wrap:D,zeroMinWidth:_,spacing:S,...L,breakpoints:s.keys},H=ve(W);return r.jsx(N.Provider,{value:$,children:r.jsx(ge,{ownerState:W,className:z(H.root,a),as:u,ref:n,...M})})});function ye(e){return T("MuiListItemAvatar",e)}P("MuiListItemAvatar",["root","alignItemsFlexStart"]);const Ce=e=>{const{alignItems:t,classes:n}=e;return E({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},ye,n)},we=k("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.alignItems==="flex-start"&&t.alignItemsFlexStart]}})({minWidth:56,flexShrink:0,variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}),Ae=f.forwardRef(function(t,n){const i=A({props:t,name:"MuiListItemAvatar"}),{className:s,...o}=i,a=f.useContext(X),l={...i,alignItems:a.alignItems},c=Ce(l);return r.jsx(we,{className:z(c.root,s),ownerState:l,ref:n,...o})}),Be=R(r.jsx("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z"}),"ChatBubbleOutline"),ze=R(r.jsx("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"}),"Favorite"),j=e=>{const[t,n]=f.useState(e),[i,s]=f.useState(e),o=f.useCallback(async(a,l=()=>{})=>{s(t);const c=a(t);n(c);try{await l()}catch(u){throw n(i),u}},[t,i]);return[t,o]},Se=({post:e,isMobile:t})=>{var s,o;const[n,i]=f.useState(!1);return r.jsxs(g,{sx:{width:t?"100%":"60%",height:t?"50%":"100%",bgcolor:"black",display:"flex",alignItems:"center",position:"relative"},children:[(!n||!e)&&r.jsx(ee,{variant:"rectangular",width:"100%",height:"100%",sx:{position:"absolute",top:0,left:0,bgcolor:"grey.800"}}),r.jsx("img",{src:(o=(s=e==null?void 0:e.media)==null?void 0:s[0])==null?void 0:o.url,alt:(e==null?void 0:e.caption)||"Image",style:{width:"100%",height:"100%",objectFit:"contain",display:n?"block":"none"},onLoad:()=>i(!0),onError:()=>i(!0)})]})},be=Z.injectEndpoints({endpoints:e=>({addComment:e.mutation({query:t=>({url:"/comment/create",method:"POST",body:t,headers:{"Content-Type":"application/json"}}),invalidatesTags:["PostComments"]}),likeComment:e.mutation({query:t=>({url:`/comment/${t}/like`,method:"POST"}),invalidatesTags:["PostComments"]}),unlikeComment:e.mutation({query:t=>({url:`/comment/${t}/unlike`,method:"POST"}),invalidatesTags:["PostComments"]})})}),{useAddCommentMutation:je,useLikeCommentMutation:ke,useUnlikeCommentMutation:Ie}=be,$e=({comment:e})=>{const[t,n]=j(!!(e!=null&&e.isLiked)),[i,s]=j((e==null?void 0:e.likesCount)||0),[o]=ke(),[a]=Ie(),l=()=>{n(c=>!c,async()=>{t?await a(e._id).unwrap().then(()=>{s(c=>c-1)}):await o(e._id).unwrap().then(()=>{s(c=>c+1)})})};return r.jsxs(g,{sx:{display:"flex",alignItems:"flex-start",mb:2},children:[r.jsx(F,{src:e.user.profileImage,sx:{width:32,height:32,mr:1}}),r.jsxs(g,{sx:{flex:1,width:"80%"},children:[r.jsxs(C,{variant:"body2",sx:{fontWeight:600,fontSize:"0.85rem"},children:[e.user.userName," ",r.jsx("span",{style:{fontWeight:400},children:e.content})]}),r.jsx(g,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mt:.5},children:r.jsx(g,{sx:{display:"flex",alignItems:"center",gap:1},children:r.jsxs(C,{variant:"caption",sx:{color:"text.secondary",fontSize:"0.75rem"},children:[i," likes"]})})})]}),r.jsx(O,{size:"small",sx:{p:2},onClick:l,children:t?r.jsx(G,{color:"secondary",fontSize:"small"}):r.jsx(G,{fontSize:"small"})})]})},Le=({comments:e})=>r.jsx(g,{sx:{flex:1,overflow:"auto",p:2},children:e==null?void 0:e.map((t,n)=>r.jsx($e,{comment:t},n))}),Me=e=>{const{post:t,refetch:n}=e,[i,s]=j(e.comments||[]),[o,a]=f.useState(""),[l,c]=je(),u=K(d=>{var p;return(p=d.auth)==null?void 0:p.user});f.useEffect(()=>{var d,p,x;((p=(d=e.comments)==null?void 0:d[0])==null?void 0:p._id)!==((x=i==null?void 0:i[0])==null?void 0:x._id)&&s(()=>e.comments)},[e.comments]);const m=async d=>{if(d.preventDefault(),!!o)try{const p={postId:t._id,content:o};await s(x=>[{_id:Math.random().toString(36).substr(2,9),post:t._id,likesCount:0,user:u,createdAt:new Date().toISOString(),...p}].concat(x),async()=>{await l(p).unwrap().then(()=>a(""))})}catch(p){console.error(p)}finally{n()}};return r.jsxs(r.Fragment,{children:[r.jsx(Le,{comments:i}),r.jsx(g,{component:"form",sx:{p:2,borderTop:1,borderColor:"divider"},children:r.jsx(Y,{fullWidth:!0,value:o,disabled:c==null?void 0:c.isLoading,onChange:d=>a(d.target.value),onKeyDown:d=>d.key==="Enter"&&m(d),placeholder:"Add a comment...",variant:"standard",sx:{"& .MuiInput-underline:before":{borderBottom:"none"}}})})]})},We=k(te)(({theme:e})=>({"& .MuiDialog-paper":{maxWidth:"1200px",maxHeight:"90vh",margin:"16px",borderRadius:"8px",overflow:"hidden"}})),Ee=({open:e,onClose:t,post:n})=>{var c,u,m,d;const i=B(),s=se(i.breakpoints.down("sm")),{data:o}=ne(n._id),{data:a,...l}=ie(n._id);return r.jsx(We,{open:e,onClose:t,maxWidth:!1,"aria-labelledby":"comment-modal",fullScreen:s,children:r.jsx(oe,{sx:{p:0},children:r.jsxs(g,{sx:{display:"flex",flexDirection:s?"column":"row",height:s?"100%":"90vh"},children:[r.jsx(Se,{post:o==null?void 0:o.payload,isMobile:s}),r.jsxs(g,{sx:{width:s?"100%":"40%",height:s?"50%":"100%",display:"flex",flexDirection:"column"},children:[r.jsxs(g,{sx:{p:2,display:"flex",alignItems:"center",borderBottom:1,borderColor:"divider"},children:[r.jsx(F,{src:(u=(c=o==null?void 0:o.payload)==null?void 0:c.user)==null?void 0:u.profileImage}),r.jsx(C,{variant:"subtitle2",sx:{ml:1,fontWeight:600},children:(d=(m=o==null?void 0:o.payload)==null?void 0:m.user)==null?void 0:d.userName}),r.jsx(O,{onClick:t,sx:{ml:"auto"},children:r.jsx(re,{})})]}),l.isLoading?r.jsx(C,{children:"Loading comments..."}):r.jsx(Me,{post:n,comments:a==null?void 0:a.payload,refetch:l.refetch})]})]})})})};export{Be as C,ze as F,Pe as G,Ae as L,Ee as a,j as u};
