import{b as u,c as g,d as h,r as b,j as e}from"./index-BJ0llSRe.js";import{u as f,c as w,a as c,F as m,L as p}from"./FormField-BSO6P7zV.js";import{l as j,B as t,j as r,p as k}from"./TextField-C8WNi2Vq.js";const F=()=>{const[x]=u(),s=g(),d=h(a=>{var i;return(i=a.auth)==null?void 0:i.token});b.useEffect(()=>{d&&s("/")},[d]);const o=j(),n=f({initialValues:{emailId:"",password:""},validationSchema:w({emailId:c().required("email is required"),password:c().required("Password is required")}),onSubmit:async a=>{const i=await x(a).unwrap();console.log(i),i.status===200&&s("/")}}),l={fullWidth:!0,variant:"outlined",margin:"dense",size:"small",sx:{fontSize:10,backgroundColor:"#F7F7F7",[o.breakpoints.down("xs")]:{fontSize:12}}};return e.jsxs(t,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"95vh",padding:2,[o.breakpoints.down("sm")]:{padding:1}},children:[e.jsxs(t,{sx:{margin:"10px",width:"100%",maxWidth:300,minWidth:300,padding:4,border:"1px solid #ccc",borderColor:"#ccc",textAlign:"center",[o.breakpoints.down("xs")]:{maxWidth:"100%",padding:2}},children:[e.jsx(r,{variant:"h4",sx:{fontFamily:"'Grand Hotel', cursive",marginBottom:3,paddingTop:3,paddingBottom:3,[o.breakpoints.down("sm")]:{fontSize:24}},children:e.jsx("b",{children:"Vinstagram"})}),e.jsxs("form",{onSubmit:n.handleSubmit,children:[e.jsx(m,{type:"text",name:"emailId",label:"email",formik:n,...l}),e.jsx(m,{type:"password",name:"password",label:"Password",formik:n,...l}),e.jsx(k,{fullWidth:!0,type:"submit",variant:"contained",sx:{borderRadius:2,backgroundColor:"#0095f6",color:"#fff",marginTop:2,marginBottom:2,":hover":{backgroundColor:"#007acb"},[o.breakpoints.down("sm")]:{padding:"8px 16px"}},children:"Log in"})]}),e.jsx(r,{variant:"body2",color:"textSecondary",gutterBottom:!0,children:"OR"}),e.jsx(p,{href:"#",variant:"body2",underline:"hover",sx:{display:"block",marginTop:2,[o.breakpoints.down("xs")]:{fontSize:14}},children:"Forgot password?"})]}),e.jsx(t,{sx:{width:"100%",maxWidth:300,minWidth:300,textAlign:"center",marginTop:2,paddingX:4,paddingY:2,border:"1px solid #ccc",borderColor:"#ccc",[o.breakpoints.down("xs")]:{maxWidth:"100%",padding:1}},children:e.jsxs(r,{variant:"body1",children:["Don’t have an account?"," ",e.jsx(p,{href:"/signup",underline:"hover",sx:{fontWeight:500},children:"Sign up"})]})})]})};export{F as default};
