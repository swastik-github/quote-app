(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{47:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},48:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},49:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},50:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},51:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},53:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(8),a=c(35),m=c(36),r=c(15),j=c(47),i=c.n(j),d=c(1),l=function(e){return Object(d.jsxs)("figure",{className:i.a.quote,children:[Object(d.jsx)("p",{children:e.text}),Object(d.jsx)("figcaption",{children:e.author})]})},u=c(37),b=c(48),x=c.n(b),O=c(49),h=c.n(O),f=function(e){var t=Object(n.useRef)(),c=Object(m.a)(a.a),s=c.sendRequest,o=c.status,j=c.error,i=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||j||i()}),[o,j,i]);var l=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(d.jsxs)("form",{className:h.a.form,onSubmit:l,children:["pending"===o&&Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(r.a,{})}),Object(d.jsxs)("div",{className:h.a.control,onSubmit:l,children:[Object(d.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(d.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(d.jsx)("div",{className:h.a.actions,children:Object(d.jsx)("button",{className:"btn",children:"Add Comment"})})]})},p=c(50),_=c.n(p),N=function(e){return Object(d.jsx)("li",{className:_.a.item,children:Object(d.jsx)("p",{children:e.text})})},v=c(51),C=c.n(v),g=function(e){return Object(d.jsx)("ul",{className:C.a.comments,children:e.comments.map((function(e){return Object(d.jsx)(N,{text:e.text},e.id)}))})},q=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],o=t[1],j=Object(s.j)().quoteId,i=Object(m.a)(a.c),l=i.sendRequest,b=i.status,O=i.data;Object(n.useEffect)((function(){l(j)}),[j,l]);var h,p=Object(n.useCallback)((function(){l(j)}),[l,j]);return"pending"===b&&(h=Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(r.a,{})})),"completed"===b&&O&&O.length>0&&(h=Object(d.jsx)(g,{comments:O})),"completed"!==b||O&&0!==O.length||(h=Object(d.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(d.jsxs)("section",{className:x.a.comments,children:[Object(d.jsx)("h2",{children:"User Comments"}),!c&&Object(d.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(d.jsx)(f,{quoteId:j,onAddedComment:p}),h]})};t.default=function(){var e=Object(s.k)(),t=Object(s.j)().quoteId,c=Object(m.a)(a.e,!0),j=c.sendRequest,i=c.status,u=c.data,b=c.error;return Object(n.useEffect)((function(){j(t)}),[j,t]),"pending"===i?Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(r.a,{})}):b?Object(d.jsx)("p",{className:"centered",children:b}):u.text?Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(l,{text:u.text,author:u.author}),Object(d.jsx)(s.c,{path:e.path,exact:!0,children:Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(o.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),Object(d.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(d.jsx)(q,{})})]}):Object(d.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=4.ba4f9fbd.chunk.js.map