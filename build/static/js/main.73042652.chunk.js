(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(3),i=n.n(r),s=(n(13),n(4)),o=n(5),d=n(6),l=n(8),j=n(7),b=n(0),u=function(e){var t=e.handleOnClick;return Object(b.jsx)(b.Fragment,{children:["good","neutral","bad"].map((function(e){return Object(b.jsx)("button",{type:"button",name:e,onClick:function(e){t(e)},children:e},e)}))})},h=function(e){var t=e.title,n=void 0===t?"":t,a=e.children;return Object(b.jsxs)("section",{children:[n&&Object(b.jsx)("header",{children:n}),a]})},O=function(e){var t=e.bad,n=e.good,a=e.neutral,c=e.positivePercentage,r=e.total;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Good: ",n]}),Object(b.jsxs)("p",{children:["Neutral: ",a]}),Object(b.jsxs)("p",{children:["Bad: ",t]}),Object(b.jsxs)("p",{children:["Total: ",r]}),Object(b.jsxs)("p",{children:["Positive feedback: ",c,"%"]})]})},v=function(e){var t=e.message,n=void 0===t?"":t;return Object(b.jsx)("p",{children:n})},g=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0,total:0,positivePercentage:0},e.addFeedback=function(t){var n=t.target.name,a=e.state[n];e.setState(Object(s.a)({},n,a+1),(function(){return e.calcStatistics()}))},e}return Object(d.a)(n,[{key:"calcStatistics",value:function(){var e=this.state,t=e.bad,n=e.good,a=t+n+e.neutral,c=Math.round(n/a*100);this.setState({total:a,positivePercentage:c})}},{key:"render",value:function(){var e=this.state,t=e.bad,n=e.good,a=e.neutral,c=e.positivePercentage,r=e.total;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{title:"Please leave feedback",children:Object(b.jsx)(u,{handleOnClick:this.addFeedback})}),Object(b.jsx)(h,{title:"Statistics",children:r?Object(b.jsx)(O,{bad:t,good:n,neutral:a,positivePercentage:c,total:r}):Object(b.jsx)(v,{message:"No feedback given"})})]})}}]),n}(a.Component),p=g;i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.73042652.chunk.js.map