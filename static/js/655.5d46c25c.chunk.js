"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[655],{8655:function(n,e,t){t.r(e),t.d(e,{Contacts:function(){return V},default:function(){return B}});var r,i,a,o,s,c,l=t(2791),d=t(9434),u=t(5705),x=t(6727),m=t(3634),p=t(6916),h=function(n){return n.contacts.items},f=function(n){return n.contacts.loading},Z=function(n){return n.contacts.error},b=(0,p.P1)([h,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),j=t(8571),g=t(7107),y=t(4507),v=t(4708),C=t(1614),w=t(4554),P=t(1889),k=t(6179),z=t(184),F=x.Ry().shape({name:x.Z_().required().label("name"),number:x.Z_().required().label("number")}),A=function(){var n=(0,d.I0)(),e=(0,d.v9)(h),t=(0,g.Z)();return(0,z.jsx)(y.Z,{theme:t,children:(0,z.jsxs)(C.Z,{component:"main",maxWidth:"xs",children:[(0,z.jsx)(v.ZP,{}),(0,z.jsx)(w.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,z.jsx)(u.J9,{initialValues:{name:"",number:""},validationSchema:F,onSubmit:function(t,r){var i=r.resetForm,a=t.name,o=t.number;if(e.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()||n.number===t.number})))return alert("".concat(t.name," or ").concat(t.number," is already exist"));n((0,m.uK)({name:a,phone:o})),i()},children:function(n){var e=n.handleSubmit;return(0,z.jsx)(w.Z,{component:"form",noValidate:!0,onSubmit:e,sx:{mt:3},autoComplete:"off",children:(0,z.jsxs)(P.ZP,{container:!0,spacing:2,children:[(0,z.jsxs)(P.ZP,{item:!0,xs:12,children:[(0,z.jsx)("label",{htmlFor:"name",children:" Name "}),(0,z.jsx)(k.Z,{required:!0,fullWidth:!0,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]}),(0,z.jsxs)(P.ZP,{item:!0,xs:12,children:[(0,z.jsx)("label",{htmlFor:"number",children:" Number "}),(0,z.jsx)(k.Z,{required:!0,fullWidth:!0,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})]}),(0,z.jsx)(P.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"center"},children:(0,z.jsx)(j.Z,{type:"submit",variant:"contained",sx:{mt:3,mb:2},children:" Add contact "})})]})})}})})]})})},I=t(4808),_=function(n){var e=n.name,t=(0,d.I0)(),r=function(n){t((0,I.T)(n))},i=(0,g.Z)();return(0,z.jsx)(y.Z,{theme:i,children:(0,z.jsxs)(C.Z,{component:"main",maxWidth:"xs",children:[(0,z.jsx)(v.ZP,{}),(0,z.jsx)(w.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,z.jsxs)(P.ZP,{container:!0,spacing:2,children:[(0,z.jsx)(P.ZP,{item:!0,xs:12,children:(0,z.jsx)(k.Z,{required:!0,fullWidth:!0,type:"text",name:"Find contact",value:e,onChange:function(n){return r(n.target.value)},placeholder:"Filter"})}),(0,z.jsx)(P.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"center"},onClick:function(){r("")},children:(0,z.jsx)(j.Z,{type:"submit",variant:"contained",sx:{mt:3,mb:2},children:" Reset filter "})})]})})]})})},q=t(168),L=t(6487),W=L.ZP.li(r||(r=(0,q.Z)(["\ndisplay: flex;\ngap: 15px;\nalign-items: center;\n\n"]))),S=L.ZP.ul(i||(i=(0,q.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 15px;\npadding:0;\nwidth: 360px;\n\n"]))),T=L.ZP.button(a||(a=(0,q.Z)(["\nfont-weight: 400;\ncursor: pointer;\nborder-style: none;\nborder: 2px solid #ccc;\nborder-radius: 5px;\nbox-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);\nmargin: auto;\nfont-size: 15px;\npadding: 5px 10px;\nmargin-right: 0;\n\n\n\ntransition-property: background-color, box-shadow;\ntransition-duration: 250ms;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n&:hover {\n  background-color: #939495;\n  border: 2px solid #ccc;\n}\n"]))),D=function(){var n=(0,d.I0)(),e=(0,d.v9)(b);return(0,z.jsx)(S,{children:e.map((function(e){return(0,z.jsxs)(W,{children:[e.name," : ",e.phone,(0,z.jsx)(T,{onClick:function(){return t=e.id,void n((0,m.GK)(t));var t},children:"Delete"})]},e.id)}))})},N=t(225),J=N.Z.div(o||(o=(0,q.Z)(["\nwidth: 500px;\nmargin: auto;\n\n"]))),K=N.Z.h2(s||(s=(0,q.Z)(["\nfont-size: 30px;\nmargin:0 auto;\ntext-align: center;\n"]))),R=N.Z.ul(c||(c=(0,q.Z)(["\npadding: 24px;\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\nfont-style: italic;\nwidth: 380px;\nmargin: 0 auto;\npadding-top: 20px;\n\n"]))),V=function(){var n=(0,d.v9)(f),e=(0,d.v9)(Z),t=(0,d.v9)(h),r=(0,d.I0)();return(0,l.useEffect)((function(){r((0,m.yF)())}),[r]),(0,z.jsxs)(J,{children:[(0,z.jsx)(K,{children:" Phonebook "}),(0,z.jsx)(A,{}),n&&(0,z.jsx)("p",{children:"Loading..."}),e&&(0,z.jsx)("p",{children:e}),(0,z.jsx)(K,{children:" Contacts "}),(0,z.jsxs)(R,{children:[(0,z.jsx)(_,{}),0===t.length&&(0,z.jsx)("p",{children:"There are no any contacts "}),(0,z.jsx)(D,{})]})]})},B=V}}]);
//# sourceMappingURL=655.5d46c25c.chunk.js.map