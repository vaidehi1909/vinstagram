import{c as M,j as e,s as B,I as f,r as x,u as T,a as q,b as G,d as O,e as L}from"./index-8qznlozp.js";import{A as y,u as W,a as $,C as D,b as E,c as Q,L as P,d as U,e as X}from"./index-CMo7Tlew.js";import{B as c,T as m,a as R,L as _}from"./TextField-DvMWTNB1.js";import{u as V,G as g,F,a as Y,C as J,b as K,L as Z,S as z}from"./Modal-kI_m7u7q.js";import"./userApi-BgumEB5T.js";const ee=M(e.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),se=M(e.jsx("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send"),te=()=>{const s=[{name:"kritisanon",img:"https://via.placeholder.com/50"},{name:"janvhi",img:"https://via.placeholder.com/50"},{name:"john",img:"https://via.placeholder.com/50"},{name:"mike",img:"https://via.placeholder.com/50"}];return e.jsx(c,{sx:{display:"flex",gap:2,padding:2,paddingBottom:1,backgroundColor:"#fff"},children:s.map((t,i)=>e.jsxs(c,{sx:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer"},children:[e.jsx(y,{src:t.img,sx:{width:56,height:56,border:"2px solid #e91e63"}}),e.jsx(m,{variant:"caption",sx:{marginTop:1,textAlign:"center"},children:t.name})]},i))})},ne=B(c)`
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
`,A=B(f)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8) !important;
  padding: 8px !important;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9) !important;
  }
`,ae=({post:s})=>{var C,S,v,I;const[t,i]=V(s.likesCount),[r,o]=x.useState(!1),[a,j]=x.useState(s.isLiked||!1),[k,h]=x.useState(!1),[l,d]=x.useState(0),[b]=W(),[p]=$(),w=async()=>{try{j(!a),h(!0),setTimeout(()=>{h(!1)},2e3),await i(n=>n+1*(a?-1:1),async()=>{a?await p(s._id).unwrap():await b(s._id).unwrap()})}catch(n){console.error("Failed to update post:",n),j(a)}},H=()=>{d(n=>n===0?0:n-1)},N=()=>{d(n=>{var u;return n===((u=s==null?void 0:s.media)==null?void 0:u.length)?1:n+1})};return e.jsxs(g,{item:!0,xs:12,children:[e.jsxs(D,{sx:{borderRadius:0,boxShadow:0,border:"1px solid #dbdbdb"},children:[e.jsxs(c,{sx:{display:"flex",alignItems:"center",padding:2},children:[e.jsx(y,{src:(C=s==null?void 0:s.user)==null?void 0:C.profileImage,alt:((S=s==null?void 0:s.user)==null?void 0:S.userName)||"User",sx:{width:32,height:32,marginRight:1}}),e.jsx(m,{variant:"subtitle2",fontWeight:"600",children:(v=s==null?void 0:s.user)==null?void 0:v.userName})]}),e.jsxs(c,{sx:{position:"relative",cursor:"pointer",backgroundColor:"#fafafa",overflow:"hidden"},onDoubleClick:()=>w(),children:[e.jsx(c,{sx:{display:"flex",transition:"transform 0.3s ease",transform:`translateX(-${l*100}%)`},children:s.media.map((n,u)=>e.jsx("img",{src:n.url,alt:`${s.caption} ${u+1}`,style:{width:"100%",flexShrink:0,display:"block",maxHeight:"600px",objectFit:"contain"}},u))}),a&&k&&e.jsxs(ne,{children:[e.jsx(F,{style:{fontSize:"90%"}})," "]}),s.media.length>1&&e.jsxs(e.Fragment,{children:[l>0&&e.jsx(A,{onClick:n=>{n.stopPropagation(),H()},sx:{left:8},children:e.jsx(ee,{})}),l<s.media.length-1&&e.jsx(A,{onClick:n=>{n.stopPropagation(),N()},sx:{right:8},children:e.jsx(E,{})})]})]}),e.jsxs(c,{sx:{display:"flex",alignItems:"center",padding:"6px 12px"},children:[e.jsx(f,{onClick:()=>w(),sx:{padding:"8px",marginRight:"6px","& .MuiSvgIcon-root":{transition:"color 0.2s ease",color:a?"#ed4956":"inherit"}},children:a?e.jsx(F,{sx:{fontSize:24}}):e.jsx(Y,{sx:{fontSize:24}})}),e.jsx(f,{sx:{padding:"8px",marginRight:"6px"},onClick:()=>o(!0),children:e.jsx(J,{sx:{fontSize:24}})}),e.jsx(f,{sx:{padding:"8px"},children:e.jsx(se,{sx:{fontSize:24}})})]}),e.jsxs(c,{sx:{padding:"0 16px 16px"},children:[e.jsxs(m,{variant:"subtitle2",fontWeight:"600",sx:{mb:1},children:[t," likes"]}),e.jsxs(c,{sx:{display:"flex",alignItems:"flex-start"},children:[e.jsx(m,{variant:"subtitle2",fontWeight:"600",sx:{mr:1},children:(I=s==null?void 0:s.user)==null?void 0:I.userName}),e.jsx(m,{variant:"body2",color:"text.secondary",children:s.caption})]}),s.commentCount>0&&e.jsxs(m,{variant:"body2",color:"text.secondary",sx:{mt:1,cursor:"pointer"},children:["View all ",s.commentCount," comments"]})]})]}),r&&e.jsx(K,{open:r,onClose:()=>o(!1),post:s})]},s._id)},ie=()=>{var o;const[s,t]=x.useState([]),[i,{isLoading:r}]=Q();return x.useEffect(()=>{i({page:1,limit:10}).then(({data:a})=>t(a))},[]),r?e.jsx("h1",{children:"Loading..."}):e.jsx(g,{container:!0,spacing:2,sx:{padding:{xs:2,md:4},paddingX:{xs:0,md:4,lg:15},maxWidth:"935px",margin:"0 auto"},children:((o=s==null?void 0:s.payload)==null?void 0:o.length)>0&&s.payload.map(a=>e.jsx(ae,{post:a},a._id))})},re=s=>{const{user:t,onSendFollowRequest:i}=s,r=()=>{i(t._id)},o=()=>{s.onItemClicked(t._id)};return e.jsxs(P,{sx:{cursor:"pointer"},secondaryAction:e.jsx(R,{variant:"outlined",size:"small",onClick:r,children:"Follow"}),children:[e.jsx(Z,{onClick:o,children:e.jsx(y,{src:t.profileImage})}),e.jsx(U,{primary:t.userName,secondary:"Instagram recommended",onClick:o})]},t._id)},oe=({size:s=3})=>{const t=Array.from({length:s},(i,r)=>r);return e.jsx(e.Fragment,{children:e.jsx(_,{children:t.map((i,r)=>e.jsxs(P,{secondaryAction:e.jsx(R,{variant:"outlined",size:"small",children:"Follow"}),children:[e.jsx(z,{variant:"circular",children:e.jsx(y,{})}),e.jsx(z,{width:"50%",style:{marginLeft:"1rem"},children:e.jsx(m,{children:"."})})]},r))})})},le=()=>{var h;const s=T(),t=q(),{data:i,isLoading:r,isFetching:o}=G(),[a]=O(),j=x.useCallback(l=>{a(l).unwrap().then(d=>{d.status===200&&t(L({message:"Follow request sent successfully",severity:"success"}))}).catch(d=>{var p;console.error(d);const b=((p=d==null?void 0:d.data)==null?void 0:p.message)||"Something went wrong";t(L({message:b,severity:"error"}))})},[]),k=x.useCallback(l=>{s(`/profile/${l}`)},[]);return r||o?e.jsx(oe,{}):e.jsx(_,{children:(h=i==null?void 0:i.payload)==null?void 0:h.map(l=>e.jsx(re,{user:l,onSendFollowRequest:j,onItemClicked:k},l._id))})},ce=()=>e.jsx(c,{sx:{flexGrow:1},children:e.jsxs(g,{container:!0,children:[e.jsxs(g,{item:!0,xs:12,md:8,children:[e.jsx(te,{}),e.jsx(ie,{})]}),e.jsx(g,{item:!0,xs:12,md:4,sx:{display:{xs:"none",md:"block"},padding:2},children:e.jsx(le,{})})]})}),ge=()=>e.jsx(X,{children:e.jsx(ce,{})});export{ge as Home,ge as default};
