"use strict";(self.webpackChunkgosellr_fe=self.webpackChunkgosellr_fe||[]).push([[97],{1172:function(e,s,n){n(2791);s.Z=n.p+"static/media/ehb-main-dark.f5113e8ec09c1f975f29fa8df17a89fe.svg"},9097:function(e,s,n){n.r(s),n.d(s,{default:function(){return j}});var t=n(2791),r=n(4165),a=n(5861),i=n(9439),o=(n(6098),n(536)),l=n(6106),c=n(914),d=n(5308),u=n(7309),p=n(7689),h=n(1172),m=n(5120),f=n(184),x=function(){var e=(0,m.cp)(),s=(0,i.Z)(e,2),n=s[0],x=s[1].isLoading,j=(0,t.useState)(""),g=(0,i.Z)(j,2),v=g[0],y=g[1],w=(0,p.s0)(),b=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(s){var t,a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(""),t={email:s.email,password:s.password},e.prev=2,e.next=5,n({payload:t}).unwrap();case 5:a=e.sent,i=a.token,console.log("response",a),localStorage.setItem("token",i),w("/home"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0),null!==e.t0&&void 0!==e.t0&&e.t0.data?y(null===e.t0||void 0===e.t0?void 0:e.t0.data):y("");case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(s){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"auth-main-wrapper tex-w",children:[(0,f.jsxs)("div",{className:"header-alg",children:[(0,f.jsx)("img",{src:h.Z,width:70,alt:""}),(0,f.jsxs)("p",{children:["Sign In to ",(0,f.jsx)("strong",{children:"EHB"})," "]})]}),(0,f.jsx)("div",{className:"wrapper-auth",children:(0,f.jsxs)(o.Z,{name:"basic",initialValues:{remember:!0},onFinish:b,onFinishFailed:function(e){console.log("Failed:",e)},layout:"vertical",children:[(0,f.jsxs)(l.Z,{gutter:[20,0],children:[(0,f.jsx)(c.Z,{xs:24,sm:24,md:24,lg:24,children:(0,f.jsx)(o.Z.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Required field"}],children:(0,f.jsx)(d.Z,{placeholder:"Type here",rootClassName:"styled-input",autoComplete:"off"})})}),(0,f.jsx)(c.Z,{xs:24,sm:24,md:24,lg:24,children:(0,f.jsx)(o.Z.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please enter your password!"}],children:(0,f.jsx)(d.Z.Password,{rootClassName:"styled-input",placeholder:"Enter your password"})})})]}),v&&(0,f.jsx)("div",{className:"error-message-footer",children:v}),(0,f.jsx)("div",{style:{display:"flex",justifyContent:"center",width:"100%"},children:(0,f.jsx)(u.ZP,{htmlType:"submit",loading:x,className:"common-btn-dull",style:{width:"100%",marginTop:"30px"},children:"Login"})}),(0,f.jsxs)("p",{className:"bottom-res",children:["Didn't have an account ? ",(0,f.jsx)("span",{onClick:function(){return w("/sign-up")},children:"Register"})]})]})}),(0,f.jsxs)("div",{className:"lb-docs-nav",children:[(0,f.jsx)("p",{children:"Terms"}),(0,f.jsx)("p",{children:"Privacy"}),(0,f.jsx)("p",{children:"About"}),(0,f.jsx)("p",{className:"ex-w",children:(0,f.jsx)("em",{children:"Contact EHB support"})})]})]})},j=function(){return(0,f.jsx)(x,{})}},5120:function(e,s,n){n.d(s,{cp:function(){return a},q8:function(){return r}});var t=n(4152).M.injectEndpoints({endpoints:function(e){return{postCreateUser:e.mutation({query:function(e){return{url:"https://ehb-be-production.up.railway.app/api/users",method:"POST",body:e.payload}},invalidatesTags:["Auth"]}),postLoginUser:e.mutation({query:function(e){return{url:"https://ehb-be-production.up.railway.app/api/auth",method:"POST",body:e.payload}},invalidatesTags:["Auth"]})}}}),r=t.usePostCreateUserMutation,a=t.usePostLoginUserMutation},6098:function(){}}]);
//# sourceMappingURL=97.37537253.chunk.js.map