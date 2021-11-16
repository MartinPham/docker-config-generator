(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(171)}])},171:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return I}});var t=r(5893),o=r(7294),a=r(9661),i=r(3321),c=r(6720),s=r(9874),u=r(122),l=r(5113),d=r(7357),m=r(6886),h=r(3845),f=r(5861),p=r(480),g=r(5071),x=r(657),b=r(1425),j=r(6514),y=r(7645),Z=r(4776),k=r(9207),v=r(6671),C=r(640),w=r.n(C),O=r(7501),P=r.n(O),_=r(6868),S=r(8556),D=r(7006),E=r(1265),N=[{name:"Docker Hub",url:"registry.hub.docker.com"},{name:"Github",url:"ghcr.io"},{name:"Gitlab",url:"registry.gitlab.com"}];function W(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function q(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){W(e,n,r[n])}))}return e}var G=(0,o.forwardRef)((function(e,n){return(0,t.jsx)(Z.Z,q({direction:"up",ref:n},e))})),B=(0,D.D)();function I(){var e=(0,o.useState)(null),n=e[0],r=e[1],Z=(0,o.useState)(""),C=Z[0],O=Z[1],D=(0,o.useState)(""),W=D[0],I=D[1],M=(0,o.useState)(""),T=M[0],F=M[1],H=(0,o.useState)(!1),K=H[0],R=H[1],U=(0,o.useState)(!1),V=U[0],X=U[1],z=(0,o.useCallback)((function(){X(!1)}),[]),L=(0,S.Ds)().enqueueSnackbar,A=(0,o.useCallback)((function(){w()(T,{debug:!0,format:"text/plain",onCopy:function(){L("Copied to clipboard",{variant:"success"})}})}),[T]),J=(0,o.useCallback)((function(){if(""===C.trim()||""===W.trim()||null!==n&&""===n.url.trim())L("Missing fields",{variant:"error"});else{var e=P().encode("".concat(C,":").concat(W)),r='{\n  "auths": {\n      "'.concat(null!==n&&n.url,'": {\n          "auth": "').concat(e,'",\n          "email": "').concat(C,'",\n          "password": "').concat(W,'",\n      }\n  }\n}');K&&(r=P().encode(r)),F(r),X(!0)}}),[n,C,W,K]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(m.ZP,{container:!0,component:"main",sx:{height:"100vh"},children:[(0,t.jsx)(c.ZP,{}),(0,t.jsx)(m.ZP,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/featured/?password)",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),(0,t.jsx)(m.ZP,{item:!0,xs:12,sm:8,md:5,component:l.Z,elevation:6,square:!0,children:(0,t.jsxs)(d.Z,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,t.jsx)(a.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,t.jsx)(h.Z,{})}),(0,t.jsx)(f.Z,{component:"h1",variant:"h5",children:"Generate Docker config"}),(0,t.jsxs)(d.Z,{component:"div",sx:{mt:1},children:[(0,t.jsx)(E.Z,{value:n,onChange:function(e,n){"string"===typeof n?r({url:n}):n&&n.url?r({url:n.url}):r(n)},filterOptions:function(e,n){var r=B(e,n),t=n.inputValue,o=e.some((function(e){return t===e.name}));return""===t||o||r.push({url:t,name:'Use "'.concat(t,'"')}),r},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,id:"registry",options:N,getOptionLabel:function(e){return"string"===typeof e?e:e.url?e.url:e.name||""},renderOption:function(e,n){return(0,t.jsx)("li",q({},e,{children:n.name}))},freeSolo:!0,renderInput:function(e){return(0,t.jsx)(s.Z,q({},e,{label:"Docker registry *"}))}}),(0,t.jsx)(s.Z,{margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"email",value:C,onChange:function(e){return O(e.target.value)}}),(0,t.jsx)(s.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:W,onChange:function(e){return I(e.target.value)}}),(0,t.jsx)(p.Z,{control:(0,t.jsx)(g.Z,{value:"remember",color:"primary",checked:K,onChange:function(e){return R(e.target.checked)}}),label:"Encode content with Base64"}),(0,t.jsx)(i.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},onClick:J,children:"Generate"}),(0,t.jsxs)(f.Z,{sx:{mt:5},variant:"body2",color:"text.secondary",align:"center",children:["\xa9 Martin Pham - "," ",(0,t.jsx)(u.Z,{color:"inherit",href:"https://mph.am/",children:"mph.am"})]})]})]})})]}),(0,t.jsxs)(x.Z,{fullWidth:!0,maxWidth:"md",open:V,TransitionComponent:G,keepMounted:!0,onClose:z,"aria-describedby":"config-dialog-description",children:[(0,t.jsx)(y.Z,{children:"Docker Config"}),(0,t.jsxs)(j.Z,{sx:{padding:0,backgroundColor:"rgb(30, 30, 30)"},children:[(0,t.jsx)(i.Z,{variant:"outlined",onClick:A,sx:{position:"absolute",top:18,right:10},children:(0,t.jsx)(_.Z,{})}),(0,t.jsx)(k.Z,{language:"json",style:v.BV,children:T})]}),(0,t.jsx)(b.Z,{children:(0,t.jsx)(i.Z,{onClick:z,children:"OK"})})]})]})}}},function(e){e.O(0,[567,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);