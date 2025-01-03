import{r as h,R as Y,j as e,u as J,a as Z}from"./index-BYD67E-e.js";import{A as v,D as q,a as ee,I as j,C as te,b as U,u as se,c as ae,G as w,d as ne,F as N,e as re,f as ie,L as _,g as oe,h as le}from"./index-BAVVFW0t.js";import{r as ce,u as de,a as he,T as ue,g as W,b as $,s as k,c as D,L as me,d as H,e as Q,k as O,f as X,m as xe,h as pe,i as M,B as d,j as g,l as fe,n as ge,o as P,p as B}from"./TextField-DLtBL7md.js";function je(t){const{theme:a,name:s,props:n}=t;return!a||!a.components||!a.components[s]||!a.components[s].defaultProps?n:ce(a.components[s].defaultProps,n)}function ye(t,a,s,n,o){const[r,l]=h.useState(()=>o&&s?s(t).matches:n?n(t).matches:a);return he(()=>{if(!s)return;const i=s(t),c=()=>{l(i.matches)};return c(),i.addEventListener("change",c),()=>{i.removeEventListener("change",c)}},[t,s]),r}const ve={...Y},G=ve.useSyncExternalStore;function be(t,a,s,n,o){const r=h.useCallback(()=>a,[a]),l=h.useMemo(()=>{if(o&&s)return()=>s(t).matches;if(n!==null){const{matches:u}=n(t);return()=>u}return r},[r,t,n,o,s]),[i,c]=h.useMemo(()=>{if(s===null)return[r,()=>()=>{}];const u=s(t);return[()=>u.matches,p=>(u.addEventListener("change",p),()=>{u.removeEventListener("change",p)})]},[r,s,t]);return G(c,i,l)}function we(t={}){const{themeId:a}=t;return function(n,o={}){let r=de();r&&a&&(r=r[a]||r);const l=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:i=!1,matchMedia:c=l?window.matchMedia:null,ssrMatchMedia:f=null,noSsr:u=!1}=je({name:"MuiUseMediaQuery",props:o,theme:r});let p=typeof n=="function"?n(r):n;return p=p.replace(/^@media( ?)/m,""),(G!==void 0?be:ye)(p,i,c,f,u)}}function ke(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Ce(t){return parseFloat(t)}const Ie=we({themeId:ue});function Se(t){return $("MuiListItemAvatar",t)}W("MuiListItemAvatar",["root","alignItemsFlexStart"]);const Le=t=>{const{alignItems:a,classes:s}=t;return Q({root:["root",a==="flex-start"&&"alignItemsFlexStart"]},Se,s)},Me=k("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:s}=t;return[a.root,s.alignItems==="flex-start"&&a.alignItemsFlexStart]}})({minWidth:56,flexShrink:0,variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}),Re=h.forwardRef(function(a,s){const n=D({props:a,name:"MuiListItemAvatar"}),{className:o,...r}=n,l=h.useContext(me),i={...n,alignItems:l.alignItems},c=Le(i);return e.jsx(Me,{className:H(c.root,o),ownerState:i,ref:s,...r})});function Ae(t){return $("MuiSkeleton",t)}W("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Fe=t=>{const{classes:a,variant:s,animation:n,hasChildren:o,width:r,height:l}=t;return Q({root:["root",s,n,o&&"withChildren",o&&!r&&"fitContent",o&&!l&&"heightAuto"]},Ae,a)},I=O`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,S=O`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,ze=typeof I!="string"?X`
        animation: ${I} 2s ease-in-out 0.5s infinite;
      `:null,Ne=typeof S!="string"?X`
        &::after {
          animation: ${S} 2s linear 0.5s infinite;
        }
      `:null,_e=k("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:s}=t;return[a.root,a[s.variant],s.animation!==!1&&a[s.animation],s.hasChildren&&a.withChildren,s.hasChildren&&!s.width&&a.fitContent,s.hasChildren&&!s.height&&a.heightAuto]}})(xe(({theme:t})=>{const a=ke(t.shape.borderRadius)||"px",s=Ce(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:pe(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${a}/${Math.round(s/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:ze||{animation:`${I} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:Ne||{"&::after":{animation:`${S} 2s linear 0.5s infinite`}}}]}})),E=h.forwardRef(function(a,s){const n=D({props:a,name:"MuiSkeleton"}),{animation:o="pulse",className:r,component:l="span",height:i,style:c,variant:f="text",width:u,...p}=n,y={...n,animation:o,component:l,variant:f,hasChildren:!!p.children},m=Fe(y);return e.jsx(_e,{as:l,ref:s,className:H(m.root,r),ownerState:y,...p,style:{width:u,height:i,...c}})}),Pe=M(e.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),L=M(e.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}),"FavoriteBorder"),V=M(e.jsx("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send"),Be=()=>{const t=[{name:"kritisanon",img:"https://via.placeholder.com/50"},{name:"janvhi",img:"https://via.placeholder.com/50"},{name:"john",img:"https://via.placeholder.com/50"},{name:"mike",img:"https://via.placeholder.com/50"}];return e.jsx(d,{sx:{display:"flex",gap:2,padding:2,paddingBottom:1,backgroundColor:"#fff"},children:t.map((a,s)=>e.jsxs(d,{sx:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer"},children:[e.jsx(v,{src:a.img,sx:{width:56,height:56,border:"2px solid #e91e63"}}),e.jsx(g,{variant:"caption",sx:{marginTop:1,textAlign:"center"},children:a.name})]},s))})},Ee=t=>{const[a,s]=h.useState(t),[n,o]=h.useState(t),r=h.useCallback(async(l,i)=>{o(a);const c=l(a);s(c);try{await i()}catch(f){throw s(n),f}},[a,n]);return[a,r]},Te=k(q)(({theme:t})=>({"& .MuiDialog-paper":{maxWidth:"1200px",maxHeight:"90vh",margin:"16px",borderRadius:"8px",overflow:"hidden"}})),Ue=({open:t,onClose:a,post:s})=>{var f,u,p,y;const[n,o]=h.useState(""),r=fe(),l=Ie(r.breakpoints.down("sm")),i=m=>{m.preventDefault(),o("")},c=(s==null?void 0:s.comments)||[{user:{userName:"_rushii_56",profileImage:"https://via.placeholder.com/32"},text:"Itne me gaan fat gaya 😂",likes:2,hours:"2h"},{user:{userName:"its_vishal_023",profileImage:"https://via.placeholder.com/32"},text:"Ek pune Infosys me bhi bhejdo..humko bhi wfh chahiye 😂",likes:5,hours:"3h"},{user:{userName:"rupp_the_rookie",profileImage:"https://via.placeholder.com/32"},text:"Happy new year bolne aya hga",likes:1,hours:"4h"},{user:{userName:"t.h.e.s.a.u.r.a.b.h",profileImage:"https://via.placeholder.com/32"},text:"Next time backbenchers will be seen wearing leopard costumes at night",likes:3,hours:"5h"},{user:{userName:"suhasshidore8",profileImage:"https://via.placeholder.com/32"},text:"@ritu_chaudhari_97 Ai replace humans ❌ Animal replace humans ✅",likes:0,hours:"6h"}];return e.jsx(Te,{open:t,onClose:a,maxWidth:!1,"aria-labelledby":"comment-modal",fullScreen:l,children:e.jsx(ee,{sx:{p:0},children:e.jsxs(d,{sx:{display:"flex",flexDirection:l?"column":"row",height:l?"100%":"90vh"},children:[e.jsx(d,{sx:{width:l?"100%":"60%",height:l?"50%":"100%",bgcolor:"black",display:"flex",alignItems:"center"},children:e.jsx("img",{src:(u=(f=s==null?void 0:s.media)==null?void 0:f[0])==null?void 0:u.url,alt:s==null?void 0:s.caption,style:{width:"100%",height:"100%",objectFit:"contain"}})}),e.jsxs(d,{sx:{width:l?"100%":"40%",height:l?"50%":"100%",display:"flex",flexDirection:"column"},children:[e.jsxs(d,{sx:{p:2,display:"flex",alignItems:"center",borderBottom:1,borderColor:"divider"},children:[e.jsx(v,{src:(p=s==null?void 0:s.user)==null?void 0:p.profileImage}),e.jsx(g,{variant:"subtitle2",sx:{ml:1,fontWeight:600},children:(y=s==null?void 0:s.user)==null?void 0:y.userName}),e.jsx(j,{onClick:a,sx:{ml:"auto"},children:e.jsx(te,{})})]}),e.jsx(d,{sx:{flex:1,overflow:"auto",p:2},children:c.map((m,C)=>e.jsxs(d,{sx:{display:"flex",alignItems:"flex-start",mb:2},children:[e.jsx(v,{src:m.user.profileImage,sx:{width:32,height:32,mr:1}}),e.jsxs(d,{sx:{flex:1,width:"80%"},children:[e.jsxs(g,{variant:"body2",sx:{fontWeight:600,fontSize:"0.85rem"},children:[m.user.userName," ",e.jsx("span",{style:{fontWeight:400},children:m.text})]}),e.jsx(d,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mt:.5},children:e.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(g,{variant:"caption",sx:{color:"text.secondary",fontSize:"0.75rem"},children:m.hours}),e.jsxs(g,{variant:"caption",sx:{color:"text.secondary",fontSize:"0.75rem"},children:[m.likes," likes"]})]})})]}),e.jsx(j,{size:"small",sx:{p:2},children:e.jsx(L,{fontSize:"small"})})]},C))}),e.jsxs(d,{sx:{p:2,borderTop:1,borderColor:"divider"},children:[e.jsxs(d,{sx:{display:"flex",gap:1,mb:1},children:[e.jsx(j,{size:"small",children:e.jsx(L,{})}),e.jsx(j,{size:"small",children:e.jsx(U,{})}),e.jsx(j,{size:"small",children:e.jsx(V,{})})]}),e.jsxs(g,{variant:"subtitle2",sx:{fontWeight:600},children:[(s==null?void 0:s.likesCount)||0," likes"]})]}),e.jsx(d,{component:"form",onSubmit:i,sx:{p:2,borderTop:1,borderColor:"divider"},children:e.jsx(ge,{fullWidth:!0,value:n,onChange:m=>o(m.target.value),placeholder:"Add a comment...",variant:"standard",sx:{"& .MuiInput-underline:before":{borderBottom:"none"}}})})]})]})})})},We=k(d)`
  @keyframes scaleHeart {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.3);
    }
    15% {
      opacity: 0.9;
      transform: translate(-50%, -50%) scale(1.2);
    }
    30% {
      opacity: 0.9;
      transform: translate(-50%, -50%) scale(0.95);
    }
    45%,
    80% {
      opacity: 0.9;
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px; // Base container size
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: scaleHeart 2s ease-out forwards;
  z-index: 10;

  // Make the heart icon fill most of the container
  & .MuiSvgIcon-root {
    width: 90%;
    height: 90%;
    color: white;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
  }
`,T=k(j)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8) !important;
  padding: 8px !important;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9) !important;
  }
`,$e=({post:t})=>{var R,A,F,z;const[a,s]=Ee(t.likesCount),[n,o]=h.useState(!1),[r,l]=h.useState(t.isLiked||!1),[i,c]=h.useState(!1),[f,u]=h.useState(0),[p]=se(),[y]=ae(),m=async()=>{try{l(!r),c(!0),setTimeout(()=>{c(!1)},2e3),await s(x=>x+1*(r?-1:1),async()=>{r?await y(t._id).unwrap():await p(t._id).unwrap()})}catch(x){console.error("Failed to update post:",x),l(r)}},C=()=>{u(x=>x===0?0:x-1)},K=()=>{u(x=>{var b;return x===((b=t==null?void 0:t.media)==null?void 0:b.length)?1:x+1})};return e.jsxs(w,{item:!0,xs:12,children:[e.jsxs(ne,{sx:{borderRadius:0,boxShadow:0,border:"1px solid #dbdbdb"},children:[e.jsxs(d,{sx:{display:"flex",alignItems:"center",padding:2},children:[e.jsx(v,{src:(R=t==null?void 0:t.user)==null?void 0:R.profileImage,alt:((A=t==null?void 0:t.user)==null?void 0:A.userName)||"User",sx:{width:32,height:32,marginRight:1}}),e.jsx(g,{variant:"subtitle2",fontWeight:"600",children:(F=t==null?void 0:t.user)==null?void 0:F.userName})]}),e.jsxs(d,{sx:{position:"relative",cursor:"pointer",backgroundColor:"#fafafa",overflow:"hidden"},onDoubleClick:()=>m(),children:[e.jsx(d,{sx:{display:"flex",transition:"transform 0.3s ease",transform:`translateX(-${f*100}%)`},children:t.media.map((x,b)=>e.jsx("img",{src:x.url,alt:`${t.caption} ${b+1}`,style:{width:"100%",flexShrink:0,display:"block",maxHeight:"600px",objectFit:"contain"}},b))}),r&&i&&e.jsxs(We,{children:[e.jsx(N,{style:{fontSize:"90%"}})," "]}),t.media.length>1&&e.jsxs(e.Fragment,{children:[f>0&&e.jsx(T,{onClick:x=>{x.stopPropagation(),C()},sx:{left:8},children:e.jsx(Pe,{})}),f<t.media.length-1&&e.jsx(T,{onClick:x=>{x.stopPropagation(),K()},sx:{right:8},children:e.jsx(re,{})})]})]}),e.jsxs(d,{sx:{display:"flex",alignItems:"center",padding:"6px 12px"},children:[e.jsx(j,{onClick:()=>m(),sx:{padding:"8px",marginRight:"6px","& .MuiSvgIcon-root":{transition:"color 0.2s ease",color:r?"#ed4956":"inherit"}},children:r?e.jsx(N,{sx:{fontSize:24}}):e.jsx(L,{sx:{fontSize:24}})}),e.jsx(j,{sx:{padding:"8px",marginRight:"6px"},onClick:()=>o(!0),children:e.jsx(U,{sx:{fontSize:24}})}),e.jsx(j,{sx:{padding:"8px"},children:e.jsx(V,{sx:{fontSize:24}})})]}),e.jsxs(d,{sx:{padding:"0 16px 16px"},children:[e.jsxs(g,{variant:"subtitle2",fontWeight:"600",sx:{mb:1},children:[a," likes"]}),e.jsxs(d,{sx:{display:"flex",alignItems:"flex-start"},children:[e.jsx(g,{variant:"subtitle2",fontWeight:"600",sx:{mr:1},children:(z=t==null?void 0:t.user)==null?void 0:z.userName}),e.jsx(g,{variant:"body2",color:"text.secondary",children:t.caption})]}),t.commentCount>0&&e.jsxs(g,{variant:"body2",color:"text.secondary",sx:{mt:1,cursor:"pointer"},children:["View all ",t.commentCount," comments"]})]})]}),n&&e.jsx(Ue,{open:n,onClose:()=>o(!1),post:t})]},t._id)},De=()=>{var o;const[t,a]=h.useState([]),[s,{isLoading:n}]=ie();return h.useEffect(()=>{s({page:1,limit:10}).then(({data:r})=>a(r))},[]),n?e.jsx("h1",{children:"Loading..."}):e.jsx(w,{container:!0,spacing:2,sx:{padding:{xs:2,md:4},paddingX:{xs:0,md:4,lg:15},maxWidth:"935px",margin:"0 auto"},children:((o=t==null?void 0:t.payload)==null?void 0:o.length)>0&&t.payload.map(r=>e.jsx($e,{post:r},r._id))})},He=()=>{const{data:t,isLoading:a,isError:s,error:n}=J(),[o]=Z(),r=async i=>{try{const c=await o({followingId:i}).unwrap();c.status===200&&console.log(c.message)}catch(c){console.log(c)}},l=Array.from({length:3},(i,c)=>c);return a?e.jsx(e.Fragment,{children:e.jsx(P,{children:l.map((i,c)=>e.jsxs(_,{secondaryAction:e.jsx(B,{variant:"outlined",size:"small",children:"Follow"}),children:[e.jsx(E,{variant:"circular",children:e.jsx(v,{})}),e.jsx(E,{width:"50%",style:{marginLeft:"1rem"},children:e.jsx(g,{children:"."})})]},c))})}):e.jsx(P,{children:t.payload.map(i=>e.jsxs(_,{secondaryAction:e.jsx(B,{variant:"outlined",size:"small",onClick:()=>r(i._id),children:"Follow"}),children:[e.jsx(Re,{children:e.jsx(v,{src:i.profileImage})}),e.jsx(oe,{primary:i.userName,secondary:"Instagram recommended"})]},i._id))})},Qe=()=>e.jsx(d,{sx:{flexGrow:1},children:e.jsxs(w,{container:!0,children:[e.jsxs(w,{item:!0,xs:12,md:8,children:[e.jsx(Be,{}),e.jsx(De,{})]}),e.jsx(w,{item:!0,xs:12,md:4,sx:{display:{xs:"none",md:"block"},padding:2},children:e.jsx(He,{})})]})}),Ve=()=>e.jsx(le,{children:e.jsx(Qe,{})});export{Ve as Home,Ve as default};
