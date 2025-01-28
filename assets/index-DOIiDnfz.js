import{g as K,a as X,k as H,c as O,s as F,b as M,m as G,d as Y,r as h,u as Z,j as t,e as J,f as ee,h as U,I as P,R as D,i as te,l as se,n as re,o as ie,p as E}from"./index-CnVehZsc.js";import{A as $,u as ne,a as ae,C as oe,b as ce,F as le,c as de,L as W,d as ue,S as _,e as me}from"./index-BNH_EhRw.js";import{B as k,T as I,a as q,L as Q}from"./TextField-Dt0rUU8X.js";import{u as xe,G as R,F as T,C as he,a as fe,L as ge}from"./Modal-CCbXJ8Yl.js";import"./userApi-B1UbH_1o.js";function pe(e){return K("MuiCircularProgress",e)}X("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const w=44,A=H`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,z=H`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,ve=typeof A!="string"?O`
        animation: ${A} 1.4s linear infinite;
      `:null,ye=typeof z!="string"?O`
        animation: ${z} 1.4s ease-in-out infinite;
      `:null,je=e=>{const{classes:s,variant:r,color:i,disableShrink:d}=e,n={root:["root",r,`color${M(i)}`],svg:["svg"],circle:["circle",`circle${M(r)}`,d&&"circleDisableShrink"]};return ee(n,pe,s)},be=F("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:r}=e;return[s.root,s[r.variant],s[`color${M(r.color)}`]]}})(G(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:ve||{animation:`${A} 1.4s linear infinite`}},...Object.entries(e.palette).filter(Y()).map(([s])=>({props:{color:s},style:{color:(e.vars||e).palette[s].main}}))]}))),ke=F("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,s)=>s.svg})({display:"block"}),Se=F("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,s)=>{const{ownerState:r}=e;return[s.circle,s[`circle${M(r.variant)}`],r.disableShrink&&s.circleDisableShrink]}})(G(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:s})=>s.variant==="indeterminate"&&!s.disableShrink,style:ye||{animation:`${z} 1.4s ease-in-out infinite`}}]}))),Ce=h.forwardRef(function(s,r){const i=Z({props:s,name:"MuiCircularProgress"}),{className:d,color:n="primary",disableShrink:u=!1,size:a=40,style:l,thickness:c=3.6,value:o=0,variant:p="indeterminate",...y}=i,m={...i,color:n,disableShrink:u,size:a,thickness:c,value:o,variant:p},v=je(m),j={},b={},g={};if(p==="determinate"){const f=2*Math.PI*((w-c)/2);j.strokeDasharray=f.toFixed(3),g["aria-valuenow"]=Math.round(o),j.strokeDashoffset=`${((100-o)/100*f).toFixed(3)}px`,b.transform="rotate(-90deg)"}return t.jsx(be,{className:J(v.root,d),style:{width:a,height:a,...b,...l},ownerState:m,ref:r,role:"progressbar",...g,...y,children:t.jsx(ke,{className:v.svg,ownerState:m,viewBox:`${w/2} ${w/2} ${w} ${w}`,children:t.jsx(Se,{className:v.circle,style:j,ownerState:m,cx:w,cy:w,r:(w-c)/2,fill:"none",strokeWidth:c})})})}),we=U(t.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),Ie=U(t.jsx("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send"),Re=()=>{const e=[{name:"kritisanon",img:"https://via.placeholder.com/50"},{name:"janvhi",img:"https://via.placeholder.com/50"},{name:"john",img:"https://via.placeholder.com/50"},{name:"mike",img:"https://via.placeholder.com/50"}];return t.jsx(k,{sx:{display:"flex",gap:2,padding:2,paddingBottom:1,backgroundColor:"#fff"},children:e.map((s,r)=>t.jsxs(k,{sx:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer"},children:[t.jsx($,{src:s.img,sx:{width:56,height:56,border:"2px solid #e91e63"}}),t.jsx(I,{variant:"caption",sx:{marginTop:1,textAlign:"center"},children:s.name})]},r))})},Fe=F(k)`
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
`,N=F(P)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8) !important;
  padding: 8px !important;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9) !important;
  }
`,Le=({item:e})=>{var b,g,f,S;const[s,r]=xe(e.likesCount),[i,d]=h.useState(!1),[n,u]=h.useState(e.isLiked||!1),[a,l]=h.useState(!1),[c,o]=h.useState(0),[p]=ne(),[y]=ae(),m=async()=>{try{u(!n),l(!0),setTimeout(()=>{l(!1)},2e3),await r(x=>x+1*(n?-1:1),async()=>{n?await y(e._id).unwrap():await p(e._id).unwrap()})}catch(x){console.error("Failed to update post:",x),u(n)}},v=()=>{o(x=>x===0?0:x-1)},j=()=>{o(x=>{var C;return x===((C=e==null?void 0:e.media)==null?void 0:C.length)?1:x+1})};return t.jsxs(R,{item:!0,xs:12,sx:{marginBottom:2},children:[t.jsxs(oe,{sx:{borderRadius:0,boxShadow:0,borderTop:"1px solid #dbdbdb"},children:[t.jsxs(k,{sx:{display:"flex",alignItems:"center",padding:2},children:[t.jsx($,{src:(b=e==null?void 0:e.user)==null?void 0:b.profileImage,alt:((g=e==null?void 0:e.user)==null?void 0:g.userName)||"User",sx:{width:32,height:32,marginRight:1}}),t.jsx(I,{variant:"subtitle2",fontWeight:"600",children:(f=e==null?void 0:e.user)==null?void 0:f.userName})]}),t.jsxs(k,{sx:{position:"relative",cursor:"pointer",backgroundColor:"#fafafa",overflow:"hidden",border:"1px solid #dbdbdb"},onDoubleClick:()=>m(),children:[t.jsx(k,{sx:{display:"flex",transition:"transform 0.3s ease",transform:`translateX(-${c*100}%)`},children:e.media.map((x,C)=>t.jsx("img",{src:x.url,alt:`${e.caption} ${C+1}`,style:{width:"100%",flexShrink:0,display:"block",maxHeight:"600px",objectFit:"contain"}},`${e._id}-${C}`))}),n&&a&&t.jsxs(Fe,{children:[t.jsx(T,{style:{fontSize:"90%"}})," "]}),e.media.length>1&&t.jsxs(t.Fragment,{children:[c>0&&t.jsx(N,{onClick:x=>{x.stopPropagation(),v()},sx:{left:8},children:t.jsx(we,{})}),c<e.media.length-1&&t.jsx(N,{onClick:x=>{x.stopPropagation(),j()},sx:{right:8},children:t.jsx(ce,{})})]})]}),t.jsxs(k,{sx:{display:"flex",alignItems:"center",padding:"6px 12px"},children:[t.jsx(P,{onClick:()=>m(),sx:{padding:"8px",marginRight:"6px","& .MuiSvgIcon-root":{transition:"color 0.2s ease",color:n?"#ed4956":"inherit"}},children:n?t.jsx(T,{sx:{fontSize:24}}):t.jsx(le,{sx:{fontSize:24}})}),t.jsx(P,{sx:{padding:"8px",marginRight:"6px"},onClick:()=>d(!0),children:t.jsx(he,{sx:{fontSize:24}})}),t.jsx(P,{sx:{padding:"8px"},children:t.jsx(Ie,{sx:{fontSize:24}})})]}),t.jsxs(k,{sx:{padding:"0 16px 16px"},children:[t.jsxs(I,{variant:"subtitle2",fontWeight:"600",sx:{mb:1},children:[s," likes"]}),t.jsxs(k,{sx:{display:"flex",alignItems:"flex-start"},children:[t.jsx(I,{variant:"subtitle2",fontWeight:"600",sx:{mr:1},children:(S=e==null?void 0:e.user)==null?void 0:S.userName}),t.jsx(I,{variant:"body2",color:"text.secondary",children:e.caption})]}),e.commentCount>0&&t.jsxs(I,{variant:"body2",color:"text.secondary",sx:{mt:1,cursor:"pointer"},children:["View all ",e.commentCount," comments"]})]})]}),i&&t.jsx(fe,{open:i,onClose:()=>d(!1),post:e})]},e._id)};var B=new Map,L=new WeakMap,V=0,Pe=void 0;function Me(e){return e?(L.has(e)||(V+=1,L.set(e,V.toString())),L.get(e)):"0"}function $e(e){return Object.keys(e).sort().filter(s=>e[s]!==void 0).map(s=>`${s}_${s==="root"?Me(e.root):e[s]}`).toString()}function Ae(e){const s=$e(e);let r=B.get(s);if(!r){const i=new Map;let d;const n=new IntersectionObserver(u=>{u.forEach(a=>{var l;const c=a.isIntersecting&&d.some(o=>a.intersectionRatio>=o);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=i.get(a.target))==null||l.forEach(o=>{o(c,a)})})},e);d=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:s,observer:n,elements:i},B.set(s,r)}return r}function ze(e,s,r={},i=Pe){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=e.getBoundingClientRect();return s(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:d,observer:n,elements:u}=Ae(r),a=u.get(e)||[];return u.has(e)||u.set(e,a),a.push(s),n.observe(e),function(){a.splice(a.indexOf(s),1),a.length===0&&(u.delete(e),n.unobserve(e)),u.size===0&&(n.disconnect(),B.delete(d))}}function Be({threshold:e,delay:s,trackVisibility:r,rootMargin:i,root:d,triggerOnce:n,skip:u,initialInView:a,fallbackInView:l,onChange:c}={}){var o;const[p,y]=h.useState(null),m=h.useRef(c),[v,j]=h.useState({inView:!!a,entry:void 0});m.current=c,h.useEffect(()=>{if(u||!p)return;let S;return S=ze(p,(x,C)=>{j({inView:x,entry:C}),m.current&&m.current(x,C),C.isIntersecting&&n&&S&&(S(),S=void 0)},{root:d,rootMargin:i,threshold:e,trackVisibility:r,delay:s},l),()=>{S&&S()}},[Array.isArray(e)?e.toString():e,p,d,i,n,u,r,l,s]);const b=(o=v.entry)==null?void 0:o.target,g=h.useRef(void 0);!p&&b&&!n&&!u&&g.current!==b&&(g.current=b,j({inView:!!a,entry:void 0}));const f=[y,v.inView,v.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}const De=e=>{const{fetchQuery:s,children:r,limit:i=10}=e,[d,n]=h.useState(1),[u,a]=h.useState([]),[l,c]=h.useState(!0),o=h.useRef(!0),{ref:p,inView:y}=Be({threshold:1}),{data:m,isLoading:v,isFetching:j,isError:b}=s({page:d,limit:i});return h.useEffect(()=>{m!=null&&m.payload&&o.current&&(a(g=>[...g,...m.payload]),m.payload.length<i&&c(!1),o.current=!1)},[m]),h.useEffect(()=>{y&&l&&!o.current&&(o.current=!0,n(g=>g+1))},[y,l]),b?t.jsx(I,{children:"Error loading data."}):t.jsxs(t.Fragment,{children:[u.map(g=>D.Children.map(r,f=>D.cloneElement(f,{item:g}))),(j||v)&&t.jsx(k,{sx:{textAlign:"center",my:2},children:t.jsx(Ce,{})}),!j&&!v&&l&&t.jsx("div",{ref:p})]})},Ee=()=>t.jsx(R,{container:!0,sx:{padding:{xs:2,md:4},paddingX:{xs:0,md:4,lg:15},paddingRight:{xs:0,md:4,lg:15},paddingLeft:{xs:0,md:4,lg:15},maxWidth:"935px",margin:"0 auto"},children:t.jsx(De,{fetchQuery:de,limit:5,children:t.jsx(Le,{})})}),_e=e=>{const{user:s,onSendFollowRequest:r}=e,i=()=>{r(s._id)},d=()=>{e.onItemClicked(s._id)};return t.jsxs(W,{sx:{cursor:"pointer"},secondaryAction:t.jsx(q,{variant:"outlined",size:"small",onClick:i,children:"Follow"}),children:[t.jsx(ge,{onClick:d,children:t.jsx($,{src:s.profileImage})}),t.jsx(ue,{primary:s.userName,secondary:"Vinstagram recommended",onClick:d})]},s._id)},Te=({size:e=3})=>{const s=Array.from({length:e},(r,i)=>i);return t.jsx(t.Fragment,{children:t.jsx(Q,{children:s.map((r,i)=>t.jsxs(W,{secondaryAction:t.jsx(q,{variant:"outlined",size:"small",children:"Follow"}),children:[t.jsx(_,{variant:"circular",children:t.jsx($,{})}),t.jsx(_,{width:"50%",style:{marginLeft:"1rem"},children:t.jsx(I,{children:"."})})]},i))})})},Ne=()=>{var l;const e=te(),s=se(),{data:r,isLoading:i,isFetching:d}=re(),[n]=ie(),u=h.useCallback(c=>{n(c).unwrap().then(o=>{o.status===200&&s(E({message:"Follow request sent successfully",severity:"success"}))}).catch(o=>{var y;const p=((y=o==null?void 0:o.data)==null?void 0:y.message)||"Something went wrong";s(E({message:p,severity:"error"}))})},[]),a=h.useCallback(c=>{e(`/profile/${c}`)},[]);return i||d?t.jsx(Te,{}):t.jsx(Q,{children:(l=r==null?void 0:r.payload)==null?void 0:l.map(c=>t.jsx(_e,{user:c,onSendFollowRequest:u,onItemClicked:a},c._id))})},Ve=()=>t.jsx(k,{sx:{flexGrow:1},children:t.jsxs(R,{container:!0,children:[t.jsxs(R,{item:!0,xs:12,md:8,children:[t.jsx(Re,{}),t.jsx(Ee,{})]}),t.jsx(R,{item:!0,xs:12,md:4,sx:{display:{xs:"none",md:"block"},padding:2},children:t.jsx(Ne,{})})]})}),qe=()=>t.jsx(me,{children:t.jsx(Ve,{})});export{qe as Home,qe as default};
