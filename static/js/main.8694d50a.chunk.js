(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(4),s=c.n(r),i=(c(9),c(2)),o=c(0),j=function(e){var t=e.handleOnClick;return Object(o.jsx)(o.Fragment,{children:["good","neutral","bad"].map((function(e){return Object(o.jsx)("button",{type:"button",name:e,onClick:function(c){t(e)},children:e},e)}))})},b=function(e){var t=e.title,c=void 0===t?"":t,n=e.children;return Object(o.jsxs)("section",{children:[c&&Object(o.jsx)("header",{children:c}),n]})},d=function(e){var t=e.bad,c=e.good,n=e.neutral,a=e.positivePercentage,r=e.total;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("p",{children:["Good: ",c]}),Object(o.jsxs)("p",{children:["Neutral: ",n]}),Object(o.jsxs)("p",{children:["Bad: ",t]}),Object(o.jsxs)("p",{children:["Total: ",r]}),Object(o.jsxs)("p",{children:["Positive feedback: ",a,"%"]})]})},u=function(e){var t=e.message,c=void 0===t?"":t;return Object(o.jsx)("p",{children:c})};var l=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(0),s=Object(i.a)(r,2),l=s[0],O=s[1],h=Object(n.useState)(0),f=Object(i.a)(h,2),x=f[0],g=f[1],v=Object(n.useState)(0),k=Object(i.a)(v,2),p=k[0],m=k[1],S=Object(n.useState)(0),w=Object(i.a)(S,2),P=w[0],C=w[1];return Object(n.useEffect)((function(){var e=x+c+l;m(e);var t=Math.round(c/e*100);C(t)}),[c,l,x]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{title:"Please leave feedback",children:Object(o.jsx)(j,{handleOnClick:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":O((function(e){return e+1}));break;case"bad":g((function(e){return e+1}));break;default:console.log("\u043a\u043d\u043e\u043f\u043a\u0430 ".concat(e," \u043d\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f"))}}})}),Object(o.jsx)(b,{title:"Statistics",children:p?Object(o.jsx)(d,{bad:x,good:c,neutral:l,positivePercentage:P,total:p}):Object(o.jsx)(u,{message:"No feedback given"})})]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.8694d50a.chunk.js.map