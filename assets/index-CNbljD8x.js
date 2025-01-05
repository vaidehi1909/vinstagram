import{r as u,j as e,u as _,a as O}from"./index-C_JIDkzU.js";import{A as k,I as b,u as W,a as X,C as G,b as V,c as E,L as A,d as q,e as D}from"./index-DTwYimqB.js";import{g as K,a as Q,k as U,c as H,s as S,m as Y,b as J,u as Z,d as ee,e as te,f as ae,B as h,T as x,L as M,h as B}from"./TextField-C_xX0uQ4.js";import{G as g,F as P,a as se,C as ne,S as ie,b as re,L as oe}from"./Modal-CdoIEenH.js";import"./userApi-Da4BgenJ.js";function le(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function ce(t){return parseFloat(t)}function de(t){return Q("MuiSkeleton",t)}K("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const he=t=>{const{classes:a,variant:s,animation:n,hasChildren:r,width:i,height:d}=t;return te({root:["root",s,n,r&&"withChildren",r&&!i&&"fitContent",r&&!d&&"heightAuto"]},de,a)},w=U`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,C=U`
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
`,ue=typeof w!="string"?H`
        animation: ${w} 2s ease-in-out 0.5s infinite;
      `:null,me=typeof C!="string"?H`
        &::after {
          animation: ${C} 2s linear 0.5s infinite;
        }
      `:null,xe=S("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:s}=t;return[a.root,a[s.variant],s.animation!==!1&&a[s.animation],s.hasChildren&&a.withChildren,s.hasChildren&&!s.width&&a.fitContent,s.hasChildren&&!s.height&&a.heightAuto]}})(Y(({theme:t})=>{const a=le(t.shape.borderRadius)||"px",s=ce(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:J(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${a}/${Math.round(s/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:ue||{animation:`${w} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:me||{"&::after":{animation:`${C} 2s linear 0.5s infinite`}}}]}})),$=u.forwardRef(function(a,s){const n=Z({props:a,name:"MuiSkeleton"}),{animation:r="pulse",className:i,component:d="span",height:o,style:l,variant:m="text",width:f,...y}=n,j={...n,animation:r,component:d,variant:m,hasChildren:!!y.children},v=he(j);return e.jsx(xe,{as:d,ref:s,className:ee(v.root,i),ownerState:j,...y,style:{width:f,height:o,...l}})}),pe=ae(e.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),ge=()=>{const t=[{name:"kritisanon",img:"https://via.placeholder.com/50"},{name:"janvhi",img:"https://via.placeholder.com/50"},{name:"john",img:"https://via.placeholder.com/50"},{name:"mike",img:"https://via.placeholder.com/50"}];return e.jsx(h,{sx:{display:"flex",gap:2,padding:2,paddingBottom:1,backgroundColor:"#fff"},children:t.map((a,s)=>e.jsxs(h,{sx:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer"},children:[e.jsx(k,{src:a.img,sx:{width:56,height:56,border:"2px solid #e91e63"}}),e.jsx(x,{variant:"caption",sx:{marginTop:1,textAlign:"center"},children:a.name})]},s))})},fe=t=>{const[a,s]=u.useState(t),[n,r]=u.useState(t),i=u.useCallback(async(d,o)=>{r(a);const l=d(a);s(l);try{await o()}catch(m){throw s(n),m}},[a,n]);return[a,i]},ye=S(h)`
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
`,z=S(b)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8) !important;
  padding: 8px !important;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9) !important;
  }
`,je=({post:t})=>{var I,L,R,F;const[a,s]=fe(t.likesCount),[n,r]=u.useState(!1),[i,d]=u.useState(t.isLiked||!1),[o,l]=u.useState(!1),[m,f]=u.useState(0),[y]=W(),[j]=X(),v=async()=>{try{d(!i),l(!0),setTimeout(()=>{l(!1)},2e3),await s(c=>c+1*(i?-1:1),async()=>{i?await j(t._id).unwrap():await y(t._id).unwrap()})}catch(c){console.error("Failed to update post:",c),d(i)}},N=()=>{f(c=>c===0?0:c-1)},T=()=>{f(c=>{var p;return c===((p=t==null?void 0:t.media)==null?void 0:p.length)?1:c+1})};return e.jsxs(g,{item:!0,xs:12,children:[e.jsxs(G,{sx:{borderRadius:0,boxShadow:0,border:"1px solid #dbdbdb"},children:[e.jsxs(h,{sx:{display:"flex",alignItems:"center",padding:2},children:[e.jsx(k,{src:(I=t==null?void 0:t.user)==null?void 0:I.profileImage,alt:((L=t==null?void 0:t.user)==null?void 0:L.userName)||"User",sx:{width:32,height:32,marginRight:1}}),e.jsx(x,{variant:"subtitle2",fontWeight:"600",children:(R=t==null?void 0:t.user)==null?void 0:R.userName})]}),e.jsxs(h,{sx:{position:"relative",cursor:"pointer",backgroundColor:"#fafafa",overflow:"hidden"},onDoubleClick:()=>v(),children:[e.jsx(h,{sx:{display:"flex",transition:"transform 0.3s ease",transform:`translateX(-${m*100}%)`},children:t.media.map((c,p)=>e.jsx("img",{src:c.url,alt:`${t.caption} ${p+1}`,style:{width:"100%",flexShrink:0,display:"block",maxHeight:"600px",objectFit:"contain"}},p))}),i&&o&&e.jsxs(ye,{children:[e.jsx(P,{style:{fontSize:"90%"}})," "]}),t.media.length>1&&e.jsxs(e.Fragment,{children:[m>0&&e.jsx(z,{onClick:c=>{c.stopPropagation(),N()},sx:{left:8},children:e.jsx(pe,{})}),m<t.media.length-1&&e.jsx(z,{onClick:c=>{c.stopPropagation(),T()},sx:{right:8},children:e.jsx(V,{})})]})]}),e.jsxs(h,{sx:{display:"flex",alignItems:"center",padding:"6px 12px"},children:[e.jsx(b,{onClick:()=>v(),sx:{padding:"8px",marginRight:"6px","& .MuiSvgIcon-root":{transition:"color 0.2s ease",color:i?"#ed4956":"inherit"}},children:i?e.jsx(P,{sx:{fontSize:24}}):e.jsx(se,{sx:{fontSize:24}})}),e.jsx(b,{sx:{padding:"8px",marginRight:"6px"},onClick:()=>r(!0),children:e.jsx(ne,{sx:{fontSize:24}})}),e.jsx(b,{sx:{padding:"8px"},children:e.jsx(ie,{sx:{fontSize:24}})})]}),e.jsxs(h,{sx:{padding:"0 16px 16px"},children:[e.jsxs(x,{variant:"subtitle2",fontWeight:"600",sx:{mb:1},children:[a," likes"]}),e.jsxs(h,{sx:{display:"flex",alignItems:"flex-start"},children:[e.jsx(x,{variant:"subtitle2",fontWeight:"600",sx:{mr:1},children:(F=t==null?void 0:t.user)==null?void 0:F.userName}),e.jsx(x,{variant:"body2",color:"text.secondary",children:t.caption})]}),t.commentCount>0&&e.jsxs(x,{variant:"body2",color:"text.secondary",sx:{mt:1,cursor:"pointer"},children:["View all ",t.commentCount," comments"]})]})]}),n&&e.jsx(re,{open:n,onClose:()=>r(!1),post:t})]},t._id)},ve=()=>{var r;const[t,a]=u.useState([]),[s,{isLoading:n}]=E();return u.useEffect(()=>{s({page:1,limit:10}).then(({data:i})=>a(i))},[]),n?e.jsx("h1",{children:"Loading..."}):e.jsx(g,{container:!0,spacing:2,sx:{padding:{xs:2,md:4},paddingX:{xs:0,md:4,lg:15},maxWidth:"935px",margin:"0 auto"},children:((r=t==null?void 0:t.payload)==null?void 0:r.length)>0&&t.payload.map(i=>e.jsx(je,{post:i},i._id))})},be=()=>{const{data:t,isLoading:a,isError:s,error:n}=_(),[r]=O(),i=async o=>{try{const l=await r({followingId:o}).unwrap();l.status===200&&console.log(l.message)}catch(l){console.error(l)}},d=Array.from({length:3},(o,l)=>l);return a?e.jsx(e.Fragment,{children:e.jsx(M,{children:d.map((o,l)=>e.jsxs(A,{secondaryAction:e.jsx(B,{variant:"outlined",size:"small",children:"Follow"}),children:[e.jsx($,{variant:"circular",children:e.jsx(k,{})}),e.jsx($,{width:"50%",style:{marginLeft:"1rem"},children:e.jsx(x,{children:"."})})]},l))})}):e.jsx(M,{children:t.payload.map(o=>e.jsxs(A,{secondaryAction:e.jsx(B,{variant:"outlined",size:"small",onClick:()=>i(o._id),children:"Follow"}),children:[e.jsx(oe,{children:e.jsx(k,{src:o.profileImage})}),e.jsx(q,{primary:o.userName,secondary:"Instagram recommended"})]},o._id))})},ke=()=>e.jsx(h,{sx:{flexGrow:1},children:e.jsxs(g,{container:!0,children:[e.jsxs(g,{item:!0,xs:12,md:8,children:[e.jsx(ge,{}),e.jsx(ve,{})]}),e.jsx(g,{item:!0,xs:12,md:4,sx:{display:{xs:"none",md:"block"},padding:2},children:e.jsx(be,{})})]})}),Re=()=>e.jsx(D,{children:e.jsx(ke,{})});export{Re as Home,Re as default};
