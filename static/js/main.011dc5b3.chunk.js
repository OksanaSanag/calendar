(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(4),o=n.n(l),i=(n(14),n(15),Object(a.createContext)({openModal:function(){},closeModal:function(){}})),s=n(3),d=(n(16),n(2)),r=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],l=n[1],o=Object(a.useContext)(i).closeModal,r=e.data;return Object(d.jsxs)("div",{className:"modal",children:[Object(d.jsx)("div",{className:"cross",children:"X"}),Object(d.jsxs)("div",{className:"modal-body",children:[Object(d.jsx)("input",{type:"text",className:"modal-input",placeholder:"event name",value:c,onChange:function(e){l(e.target.value)}}),Object(d.jsx)("input",{className:"modal-input",placeholder:"event day",value:r.startStr}),Object(d.jsx)("input",{className:"modal-input",placeholder:"event time"}),Object(d.jsx)("input",{className:"modal-input",placeholder:"notes"})]}),Object(d.jsxs)("div",{className:"modal-footer",children:[Object(d.jsx)("button",{className:"modal-button",onClick:o,children:"Cancel"}),Object(d.jsx)("button",{className:"modal-button",onClick:function(){},children:"Save"})]})]})},u=function(e){var t=e.children,n=Object(a.useState)(!1),c=Object(s.a)(n,2),l=c[0],o=c[1],u=Object(a.useState)(""),j=Object(s.a)(u,2),b=j[0],m=j[1],v={openModal:function(e){console.log("modalConfig",e),o(!0),m(e)},closeModal:function(){o(!1)}};return Object(d.jsxs)(i.Provider,{value:v,children:[l&&Object(d.jsx)(r,{data:b}),t]})},j=n(7),b=n(5),m=n(9),v=n(8),O=0,p=(new Date).toISOString().replace(/T.*$/,""),h=[{id:f(),title:"All-day event",start:p},{id:f(),title:"Timed event",start:p+"T12:00:00"}];function f(){return String(O++)}n(21);var x=function(){var e=Object(a.useContext)(i).openModal,t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],l=n[1];console.log("eventData",c);return Object(d.jsx)("div",{className:"demo-app",children:Object(d.jsx)("div",{className:"demo-app-main",children:Object(d.jsx)(j.a,{value:c,plugins:[b.b,m.a,v.a],headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},initialView:"dayGridMonth",editable:!0,selectable:!0,selectMirror:!0,dayMaxEvents:!0,initialEvents:h,select:function(t){l(t),console.log("selectInfo::1",t),e(t)},eventClick:function(e){e.event.remove()}})})})};var g=function(){return Object(d.jsx)(u,{children:Object(d.jsx)("div",{className:"fullCalendar",children:Object(d.jsx)(x,{})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),l(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),C()}},[[22,1,2]]]);
//# sourceMappingURL=main.011dc5b3.chunk.js.map