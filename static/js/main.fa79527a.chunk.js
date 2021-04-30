(this["webpackJsonptheme-builder"]=this["webpackJsonptheme-builder"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c.n(n),i=c(9),l=c.n(i),s=(c(15),c.p+"static/media/logo.6ce24c58.svg"),a=(c(16),c(0)),r=function(e){var t=e.id,c=e.className,n=void 0===c?"primaryButton":c,o=e.type,i=void 0===o?"submit":o,l=e.onClick,s=e.isDisabled,r=void 0!==s&&s,d=e.children;return Object(a.jsx)("button",{id:t,className:"styledButton "+n,type:i,onClick:l,disabled:r,children:d})},d=c(3),b=function(){return Object(a.jsxs)("header",{className:"navBar",id:"navBar",role:"banner",children:[Object(a.jsx)("h1",{children:"Theme Builder"}),Object(a.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(a.jsx)(r,{id:"toggleThemeButton",type:"button",onClick:function(){!function(){var e=document.documentElement.className;document.documentElement.className="","theme-light"===e?(document.documentElement.classList.add("theme-".concat("dark")),localStorage.setItem("theme","dark")):(document.documentElement.classList.add("theme-".concat("light")),localStorage.setItem("theme","light"))}()},children:Object(a.jsxs)("span",{children:["Change Theme ",Object(a.jsx)(d.a,{icon:"sun"})," ",Object(a.jsx)(d.a,{icon:"moon"})]})})]})},h=function(){return Object(a.jsxs)("footer",{className:"footer container",id:"footer",role:"contentinfo",children:[Object(a.jsxs)("p",{children:["Project by:"," ",Object(a.jsxs)("a",{className:"repo-link",href:"https://github.com/JoshDavies/",target:"_blank",rel:"noopener noreferrer","aria-label":"visit Josh Davies GitHub Profile",children:[Object(a.jsx)(d.a,{icon:["fab","github-square"]})," Josh Davies"]})]}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{className:"repo-link",href:"https://github.com/JoshDavies/theme-builder/tree/main",target:"_blank",rel:"noopener noreferrer",children:"Github Repo"})})]})},u=function(e){var t=e.children;return Object(a.jsxs)("div",{id:"defaultPageLayout",children:[Object(a.jsx)(b,{}),t,Object(a.jsx)(h,{})]})},j=(c(23),function(){return Object(a.jsxs)("div",{className:"subSection",id:"ButtonComponents",children:[Object(a.jsx)("h3",{children:"Button Component"}),Object(a.jsx)(r,{id:"demoPrimaryButton",type:"button",onClick:function(){return null},children:"Primary Button"}),Object(a.jsx)(r,{id:"demoSecondaryButton",type:"button",onClick:function(){return null},children:"Secondary Button",className:"secondaryButton"}),Object(a.jsx)(r,{id:"demoButtonDisabled",type:"button",onClick:function(){return null},children:"Disabled Button",isDisabled:!0})]})}),m=(c(24),function(e){var t=e.id,c=e.isSelected,n=e.toggleCheckbox,o=e.labelText,i=e.isDisabled,l=void 0!==i&&i,s=e.altCheckColor;return Object(a.jsxs)("span",{className:"checkboxComponent",children:[Object(a.jsx)("button",{id:"checkbox-".concat(t),type:"button",className:"checkbox",onClick:n,onKeyPress:n,disabled:l,role:"checkbox","aria-checked":c,"aria-labelledby":"checkbox-label-".concat(t),children:c&&Object(a.jsx)(d.a,{icon:"check",className:"check "+s})}),Object(a.jsx)("label",{htmlFor:"checkbox-label-".concat(t),onClick:n,onKeyPress:n,className:"checkboxLabel",children:o})]})}),x=function(){return Object(a.jsxs)("div",{className:"subSection",id:"CheckboxComponents",children:[Object(a.jsx)("h3",{children:"Checkbox Component"}),Object(a.jsxs)("div",{className:"subSection",children:[Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:"fyi: The state of the checkboxes have been hardcoded."})}),Object(a.jsx)(m,{id:"Unchecked",isSelected:!1,toggleCheckbox:function(){return null},labelText:"Unchecked"}),Object(a.jsx)(m,{id:"Checked",isSelected:!0,toggleCheckbox:function(){return null},labelText:"Checked"}),Object(a.jsx)(m,{id:"CheckedAlt",isSelected:!0,toggleCheckbox:function(){return null},labelText:"Checked Alt color",altCheckColor:"altCheckColor"}),Object(a.jsx)(m,{id:"UncheckedDisabled",isSelected:!1,toggleCheckbox:function(){return null},labelText:"Unchecked disabled",isDisabled:!0}),Object(a.jsx)(m,{id:"CheckedDisabled",isSelected:!0,toggleCheckbox:function(){return null},labelText:"Checked disabled",isDisabled:!0})]})]})},k=function(){return Object(a.jsx)("div",{id:"HomePage",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("h2",{children:[Object(a.jsx)(d.a,{icon:"home"})," Home Page"]}),Object(a.jsx)("div",{className:"subSection",children:Object(a.jsx)("p",{children:" Welcome to the Home Page."})}),Object(a.jsx)(j,{}),Object(a.jsx)(x,{})]})})};var O=function(){return Object(n.useEffect)((function(){var e=function(e){document.documentElement.className="",document.documentElement.classList.add("theme-".concat(e))};!function(){var t=window.matchMedia("(prefers-color-scheme: dark)"),c=localStorage.getItem("theme");c?e("dark"===c?"dark":"light"):t.matches?e("dark"):e("light")}()}),[]),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(u,{children:Object(a.jsx)(k,{})})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,l=t.getTTFB;c(e),n(e),o(e),i(e),l(e)}))},g=(c(25),c(4)),p=c(5),C=c(8),v=c(10);g.b.add(p.e,p.b,p.d,p.c,C.a,C.b,p.a,v.a),l.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),f()}},[[26,1,2]]]);
//# sourceMappingURL=main.fa79527a.chunk.js.map