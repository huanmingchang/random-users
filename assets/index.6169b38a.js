import{o as d,c as g,r as q,a as u,w as Ie,v as Kt,b as C,p as $e,d as je,e as Ft,f as ut,g as x,T as ct,m as be,h as w,i as dt,j as Gt,F as H,k as W,l as qt,n as ft,t as vt,q as Yt,s as Pt,u as mt,x as v,y as Wt,z as K,A as z,B as Ve,C as Xt,D as de,E as A,G as Te,H as Zt,S as Qt,I as en,J as Ct,K as tn,L as nn,M as on,N as an}from"./vendor.2cb20e1e.js";const rn=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}};rn();const sn={class:"nav"};function ln(e,n){return d(),g("nav",sn,"Random Users")}var X=(e,n)=>{const o=e.__vccOpts||e;for(const[t,a]of n)o[t]=a;return o};const un={};var cn=X(un,[["render",ln],["__scopeId","data-v-268e1075"]]);const Ue=e=>($e("data-v-bb8aceda"),e=e(),je(),e),dn={class:"options"},fn={class:"dropdown"},vn=Ue(()=>u("option",{value:"10"},"10",-1)),mn=Ue(()=>u("option",{value:"30",select:"selected"},"30",-1)),pn=Ue(()=>u("option",{value:"50"},"50",-1)),gn=[vn,mn,pn],yn={class:"mode"};function hn(e,n,o,t,a,r){const i=q("font-awesome-icon");return d(),g("div",dn,[u("div",fn,[Ie(u("select",{class:"select","onUpdate:modelValue":n[0]||(n[0]=l=>t.selected=l),onChange:n[1]||(n[1]=l=>e.$emit("handleValueChange",l))},gn,544),[[Kt,t.selected]])]),u("div",yn,[C(i,{class:"list",icon:"list",onClick:n[2]||(n[2]=l=>e.$emit("handelModeChange","list"))}),C(i,{class:"grip",icon:"grip",onClick:n[3]||(n[3]=l=>e.$emit("handelModeChange","grip"))})])])}const bn={props:{usersPerPage:Number},setup(e){return{selected:e.usersPerPage}}};var _n=X(bn,[["render",hn],["__scopeId","data-v-bb8aceda"]]);function De(e){return(De=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}function pt(e,n,o,t,a,r,i){try{var l=e[r](i),c=l.value}catch(y){return void o(y)}l.done?n(c):Promise.resolve(c).then(t,a)}function wn(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function Y(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function gt(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),o.push.apply(o,t)}return o}function b(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?gt(Object(o),!0).forEach(function(t){Y(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):gt(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function F(e){return function(n){if(Array.isArray(n))return ze(n)}(e)||function(n){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(n))return Array.from(n)}(e)||function(n,o){if(!!n){if(typeof n=="string")return ze(n,o);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ze(n,o)}}(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function ze(e,n){(n==null||n>e.length)&&(n=e.length);for(var o=0,t=new Array(n);o<n;o++)t[o]=e[o];return t}var Sn=function(e){return function(n,o){return F(n.querySelectorAll(o)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},yt=function(e){return e==document.activeElement},xn=function(){function e(){(function(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")})(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var n,o;return n=e,(o=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(t){if(function(a){return a.key==="Tab"||a.keyCode===9}(t)){if(!t.shiftKey)return!document.activeElement||yt(this.lastElement())?(this.firstElement().focus(),void t.preventDefault()):void 0;yt(this.firstElement())&&(this.lastElement().focus(),t.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(t){t&&(this.root=t,this.elements=Sn(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&wn(n.prototype,o),e}(),ht=function(e){var n=e.targetTouches?e.targetTouches[0]:e;return{x:n.clientX,y:n.clientY}},fe=function(e,n,o){return typeof e!="number"&&(e=Math.min(n,o)||n),typeof o!="number"&&(o=Math.max(n,e)),Math.min(Math.max(n,e),o)},bt=function(e){return e&&Number(e.replace(/px$/,""))||0},_e={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},ve=function(e,n,o){n&&n.addEventListener(_e[e].pc,o),n&&n.addEventListener(_e[e].m,o,{passive:!1})},me=function(e,n,o){n&&n.removeEventListener(_e[e].pc,o),n&&n.removeEventListener(_e[e].m,o)},He=!1;if(typeof window!="undefined"){var _t={get passive(){He=!0}};window.addEventListener("testPassive",null,_t),window.removeEventListener("testPassive",null,_t)}var te,ne,Et=typeof window!="undefined"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),D=[],we=!1,ye=0,wt=-1,Mn=function(e,n){var o=!1;return function(t){for(var a=[];t;){if(a.push(t),t.classList.contains("vfm"))return a;t=t.parentElement}return a}(e).forEach(function(t){(function(a){if(!a||a.nodeType!==Node.ELEMENT_NODE)return!1;var r=window.getComputedStyle(a);return["auto","scroll"].includes(r.overflowY)&&a.scrollHeight>a.clientHeight})(t)&&function(a,r){return!(a.scrollTop===0&&r<0||a.scrollTop+a.clientHeight+r>=a.scrollHeight&&r>0)}(t,n)&&(o=!0)}),o},Ot=function(e){return D.some(function(){return Mn(e,-ye)})},Be=function(e){var n=e||window.event;return!!Ot(n.target)||n.touches.length>1||(n.preventDefault&&n.preventDefault(),!1)},kn=function(e,n){if(e){if(!D.some(function(t){return t.targetElement===e})){var o={targetElement:e,options:n||{}};D=[].concat(F(D),[o]),Et?(e.ontouchstart=function(t){t.targetTouches.length===1&&(wt=t.targetTouches[0].clientY)},e.ontouchmove=function(t){t.targetTouches.length===1&&function(a,r){ye=a.targetTouches[0].clientY-wt,!Ot(a.target)&&(r&&r.scrollTop===0&&ye>0||function(i){return!!i&&i.scrollHeight-i.scrollTop<=i.clientHeight}(r)&&ye<0?Be(a):a.stopPropagation())}(t,e)},we||(document.addEventListener("touchmove",Be,He?{passive:!1}:void 0),we=!0)):function(t){if(ne===void 0){var a=!!t&&t.reserveScrollBarGap===!0,r=window.innerWidth-document.documentElement.clientWidth;if(a&&r>0){var i=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);ne=document.body.style.paddingRight,document.body.style.paddingRight="".concat(i+r,"px")}}te===void 0&&(te=document.body.style.overflow,document.body.style.overflow="hidden")}(n)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},Ae=function(e){e?(D=D.filter(function(n){return n.targetElement!==e}),Et?(e.ontouchstart=null,e.ontouchmove=null,we&&D.length===0&&(document.removeEventListener("touchmove",Be,He?{passive:!1}:void 0),we=!1)):D.length||(ne!==void 0&&(document.body.style.paddingRight=ne,ne=void 0),te!==void 0&&(document.body.style.overflow=te,te=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},pe=function(){},St="enter",xt="entering",ge="leave",Mt="leavng",Pn={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},he={props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[Object,Array],default:function(){return{}}},overlayStyle:{type:[Object,Array],default:function(){return{}}},contentStyle:{type:[Object,Array],default:function(){return{}}},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var n=De(e);return n==="boolean"||n==="string"||e.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},keepOverlay:{type:Boolean,default:!1},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},drag:{type:Boolean,default:!1},dragSelector:{type:String,default:""},keepChangedStyle:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},resizeDirections:{type:Array,default:function(){return["t","tr","r","br","b","bl","l","tl"]},validator:function(e){return["t","tr","r","br","b","bl","l","tl"].filter(function(n){return e.indexOf(n)!==-1}).length===e.length}},minWidth:{type:Number,default:0},minHeight:{type:Number,default:0},maxWidth:{type:Number,default:1/0},maxHeight:{type:Number,default:1/0}},emits:["update:modelValue","click-outside","before-open","opened","before-close","closed","_before-open","_opened","_closed","drag:start","drag:move","drag:end","resize:start","resize:move","resize:end"],setup:function(e,n){var o=n.emit,t=Symbol("vfm"),a=v(null),r=v(null),i=v(null),l=v(null),c=v(null),y=v(null),S=v(null),L=new xn,_=v(!1),M=Wt({modal:!1,overlay:!1,resize:!1}),p=v(null),R=v(null),Z=v(!1),G=v({}),B=v({}),oe=v(null),Je=v(null),ae=pe,re=pe,Tt=K(function(){return typeof e.overlayTransition=="string"?{name:e.overlayTransition}:b({},e.overlayTransition)}),zt=K(function(){return typeof e.transition=="string"?{name:e.transition}:b({},e.transition)}),At=K(function(){return(e.hideOverlay||p.value===ge)&&R.value===ge}),Se=K(function(){return e.zIndex===!1?!!e.zIndexAuto&&+e.zIndexBase+2*(S.value||0):e.zIndex}),Lt=K(function(){return b({},Se.value!==!1&&{zIndex:Se.value})}),It=K(function(){var s=[B.value];return Array.isArray(e.contentStyle)?s.push.apply(s,F(e.contentStyle)):s.push(e.contentStyle),s});function xe(){return{uid:t,props:e,emit:o,vfmContainer:r,vfmContent:i,vfmResize:l,vfmOverlayTransition:c,vfmTransition:y,getAttachElement:Fe,modalStackIndex:S,visibility:M,handleLockScroll:Me,$focusTrap:L,toggle:Bt,params:G}}function ie(){if(e.modelValue){if(o("_before-open",Q({type:"_before-open"})),Ge("before-open",!1))return void re("show");var s=Fe();if(s||e.attach===!1){if(e.attach!==!1){if(!a.value)return _.value=!0,void de(function(){ie()});s.appendChild(a.value)}var f=e.api.openedModals.findIndex(function(m){return m.uid===t});f!==-1&&e.api.openedModals.splice(f,1),e.api.openedModals.push(xe()),S.value=e.api.openedModals.length-1,Me(),e.api.openedModals.filter(function(m){return m.uid!==t}).forEach(function(m,N){m.getAttachElement()===s&&(m.modalStackIndex.value=N,!m.props.keepOverlay&&(m.visibility.overlay=!1))}),_.value=!0,M.overlay=!0,M.modal=!0}else s!==!1&&console.warn("Unable to locate target ".concat(e.attach))}}function Ke(){var s=e.api.openedModals.findIndex(function(m){return m.uid===t});if(s!==-1&&e.api.openedModals.splice(s,1),e.api.openedModals.length>0){var f=e.api.openedModals[e.api.openedModals.length-1];f.props.focusTrap&&f.$focusTrap.firstElement().focus(),(f.props.focusRetain||f.props.focusTrap)&&f.vfmContainer.value.focus(),!f.props.hideOverlay&&(f.visibility.overlay=!0)}e.drag&&Ye(),e.resize&&Xe(),oe.value=null,M.overlay=!1,M.modal=!1}function Me(){e.modelValue&&de(function(){e.lockScroll?kn(r.value,{reserveScrollBarGap:!0}):Ae(r.value)})}function Fe(){return e.attach!==!1&&(typeof e.attach=="string"?!!window&&window.document.querySelector(e.attach):e.attach)}function Q(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return b({ref:xe()},s)}function Ge(s,f){var m=!1,N=Q({type:s,stop:function(){m=!0}});return o(s,N),!!m&&(Z.value=!0,de(function(){o("update:modelValue",f)}),!0)}function ke(s,f,m){oe.value="".concat(f,":").concat(m),o(oe.value,s)}function Bt(s,f){var m=arguments;return new Promise(function(N,ee){ae=function($){N($),ae=pe},re=function($){ee($),re=pe};var J=typeof s=="boolean"?s:!e.modelValue;J&&m.length===2&&(G.value=f),o("update:modelValue",J)})}function se(s){s.stopPropagation();var f,m="resize",N="drag",ee=s.target.getAttribute("direction");if(ee)f=m;else{if(!function(E,O,j){return j===""||F(O.querySelectorAll(j)).includes(E.target)}(s,i.value,e.dragSelector))return;f=N}ke(s,f,"start");var J,$,Ze,Qe,et=ht(s),I=r.value.getBoundingClientRect(),k=i.value.getBoundingClientRect(),le=window.getComputedStyle(i.value).position==="absolute",Pe=bt(B.value.top),Ce=bt(B.value.left),ue=function(){if(e.fitParent){var E={absolute:function(){return{minTop:0,minLeft:0,maxTop:I.height-k.height,maxLeft:I.width-k.width}},relative:function(){return{minTop:Pe+I.top-k.top,minLeft:Ce+I.left-k.left,maxTop:Pe+I.bottom-k.bottom,maxLeft:Ce+I.right-k.right}}};return le?E.absolute():E.relative()}return{}}(),tt=f===m&&(J=document.body,$="cursor",Ze=Pn[ee],Qe=J.style[$],J.style[$]=Ze,function(){J.style[$]=Qe}),nt=function(E){E.stopPropagation(),ke(E,f,"move");var O,j,ot=ht(E),T={x:ot.x-et.x,y:ot.y-et.y};f===m&&(T=function($t,jt,Vt,ce,Ut){var Dt=function(h){var P,V=jt[h.axis];V=e.fitParent?fe(h.min,V,h.max):V;var U=fe(h.minEdge,h.getEdge(V),h.maxEdge);return V=h.getOffsetAxis(U,Ut),Y(P={},h.edgeName,U),Y(P,h.axis,V),P},Ht=function(h,P,V,U){var at,rt=ce[P],it=Vt[h]-ce[h],st=(at=P).charAt(0).toUpperCase()+at.slice(1);return{axis:V,edgeName:P,min:U?it:-rt,max:U?rt:it,minEdge:e["min".concat(st)],maxEdge:e["max".concat(st)],getEdge:function(Oe){return ce[P]-Oe*(U?1:-1)},getOffsetAxis:function(Oe,Jt){var lt=ce[P]-Oe;return Jt?U?lt:0:(U?1:-1)*lt/2}}},Rt={t:["top","height","y",!0],b:["bottom","height","y",!1],l:["left","width","x",!0],r:["right","width","x",!1]},Ee={x:0,y:0};return $t.split("").forEach(function(h){var P=Ht.apply(void 0,F(Rt[h]));Ee=b(b({},Ee),Dt(P))}),Ee}(ee,T,I,k,le)),le?(O=k.top-I.top+T.y,j=k.left-I.left+T.x):(O=Pe+T.y,j=Ce+T.x),f===N&&e.fitParent&&(O=fe(ue.minTop,O,ue.maxTop),j=fe(ue.minLeft,j,ue.maxLeft));var Nt=b(b(b({position:"relative",top:O+"px",left:j+"px",margin:"unset",touchAction:"none"},le&&{position:"absolute",transform:"unset",width:k.width+"px",height:k.height+"px"}),T.width&&{width:T.width+"px"}),T.height&&{height:T.height+"px"});B.value=b(b({},B.value),Nt)};ve("move",document,nt),ve("up",document,function E(O){O.stopPropagation(),f===m&&tt&&tt(),setTimeout(function(){ke(O,f,"end")}),me("move",document,nt),me("up",document,E)})}function qe(){ve("down",i.value,se),B.value.touchAction="none"}function Ye(){me("down",i.value,se)}function We(){M.resize=!0,de(function(){ve("down",l.value,se)})}function Xe(){me("down",l.value,se),M.resize=!1}return z(function(){return e.modelValue},function(s){if(Z.value)Z.value=!1;else if(ie(),!s){if(Ge("before-close",!0))return void re("hide");Ke()}}),z(function(){return e.lockScroll},Me),z(function(){return e.hideOverlay},function(s){e.modelValue&&!s&&(M.overlay=!0)}),z(function(){return e.attach},ie),z(At,function(s){s&&(_.value=!1,r.value.style.display="none")},{flush:"post"}),z(function(){return e.drag},function(s){_.value&&(s?qe():Ye())}),z(function(){return e.resize},function(s){_.value&&(s?We():Xe())}),z(function(){return e.keepChangedStyle},function(s){s||(B.value={})}),e.api.modals.push(xe()),Ve(function(){ie()}),Xt(function(){var s;Ke(),e.lockScroll&&r.value&&Ae(r.value),a==null||(s=a.value)===null||s===void 0||s.remove();var f=e.api.modals.findIndex(function(m){return m.uid===t});e.api.modals.splice(f,1)}),{root:a,vfmContainer:r,vfmContent:i,vfmResize:l,vfmOverlayTransition:c,vfmTransition:y,computedOverlayTransition:Tt,computedTransition:zt,visible:_,visibility:M,params:G,calculateZIndex:Se,bindStyle:Lt,bindContentStyle:It,beforeOverlayEnter:function(){p.value=xt},afterOverlayEnter:function(){p.value=St},beforeOverlayLeave:function(){p.value=Mt},afterOverlayLeave:function(){p.value=ge},beforeModalEnter:function(){R.value=xt},afterModalEnter:function(){R.value=St,(e.focusRetain||e.focusTrap)&&r.value.focus(),e.focusTrap&&L.enable(r.value),e.drag&&qe(),e.resize&&We(),o("_opened"),o("opened",Q({type:"opened"})),ae("show")},beforeModalLeave:function(){R.value=Mt,L.enabled()&&L.disable()},afterModalLeave:function(){R.value=ge,S.value=null,e.lockScroll&&Ae(r.value),e.keepChangedStyle||(B.value={});var s=!1,f=Q({type:"closed",stop:function(){s=!0}});o("_closed"),o("closed",f),ae("hide"),s||(G.value={})},onMousedown:function(s){Je.value=s==null?void 0:s.target},onMouseupContainer:function(){Je.value===r.value&&oe.value!=="resize:move"&&(o("click-outside",Q({type:"click-outside"})),e.clickToClose&&o("update:modelValue",!1))},onEsc:function(){_.value&&e.escToClose&&o("update:modelValue",!1)}}}},Le=Ft("data-v-2836fdb5");$e("data-v-2836fdb5");var Cn={key:0,ref:"vfmResize",class:"vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"};je();var En=Le(function(e,n,o,t,a,r){return o.ssr||t.visible?Ie((d(),x("div",{key:0,ref:"root",style:t.bindStyle,class:["vfm vfm--inset",[o.attach===!1?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":o.preventClick}]],onKeydown:n[4]||(n[4]=qt(function(){return t.onEsc&&t.onEsc.apply(t,arguments)},["esc"]))},[C(ct,be(t.computedOverlayTransition,{onBeforeEnter:t.beforeOverlayEnter,onAfterEnter:t.afterOverlayEnter,onBeforeLeave:t.beforeOverlayLeave,onAfterLeave:t.afterOverlayLeave}),{default:Le(function(){return[!o.hideOverlay&&t.visibility.overlay?(d(),x("div",{key:0,class:["vfm__overlay vfm--overlay vfm--absolute vfm--inset",o.overlayClass],style:o.overlayStyle},null,6)):w("v-if",!0)]}),_:1},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"]),C(ct,be(t.computedTransition,{onBeforeEnter:t.beforeModalEnter,onAfterEnter:t.afterModalEnter,onBeforeLeave:t.beforeModalLeave,onAfterLeave:t.afterModalLeave}),{default:Le(function(){return[Ie(C("div",{ref:"vfmContainer",class:["vfm__container vfm--absolute vfm--inset vfm--outline-none",o.classes],style:o.styles,"aria-expanded":t.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onMouseup:n[2]||(n[2]=dt(function(){return t.onMouseupContainer&&t.onMouseupContainer.apply(t,arguments)},["self"])),onMousedown:n[3]||(n[3]=dt(function(){return t.onMousedown&&t.onMousedown.apply(t,arguments)},["self"]))},[C("div",{ref:"vfmContent",class:["vfm__content",[o.contentClass,{"vfm--prevent-auto":o.preventClick}]],style:t.bindContentStyle,onMousedown:n[1]||(n[1]=function(i){return t.onMousedown(null)})},[Gt(e.$slots,"default",{params:t.params,close:function(){return e.$emit("update:modelValue",!1)}}),t.visibility.resize&&t.visibility.modal?(d(),x("div",Cn,[(d(!0),x(H,null,W(o.resizeDirections,function(i){return d(),x("div",{key:i,direction:i,class:["vfm--resize-".concat(i),"vfm--absolute vfm--prevent-auto"]},null,10,["direction"])}),128))],512)):w("v-if",!0)],38)],46,["aria-expanded"]),[[ut,t.visibility.modal]])]}),_:3},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])],38)),[[ut,!o.ssr||t.visible]]):w("v-if",!0)});(function(e,n){n===void 0&&(n={});var o=n.insertAt;if(e&&typeof document!="undefined"){var t=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",o==="top"&&t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}})(`
.vfm--fixed[data-v-2836fdb5] {
  position: fixed;
}
.vfm--absolute[data-v-2836fdb5] {
  position: absolute;
}
.vfm--inset[data-v-2836fdb5] {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.vfm--overlay[data-v-2836fdb5] {
  background-color: rgba(0, 0, 0, 0.5);
}
.vfm--prevent-none[data-v-2836fdb5] {
  pointer-events: none;
}
.vfm--prevent-auto[data-v-2836fdb5] {
  pointer-events: auto;
}
.vfm--outline-none[data-v-2836fdb5]:focus {
  outline: none;
}
.vfm-enter-active[data-v-2836fdb5],
.vfm-leave-active[data-v-2836fdb5] {
  transition: opacity 0.2s;
}
.vfm-enter-from[data-v-2836fdb5],
.vfm-leave-to[data-v-2836fdb5] {
  opacity: 0;
}
.vfm--touch-none[data-v-2836fdb5] {
  touch-action: none;
}
.vfm--select-none[data-v-2836fdb5] {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.vfm--resize-tr[data-v-2836fdb5],
.vfm--resize-br[data-v-2836fdb5],
.vfm--resize-bl[data-v-2836fdb5],
.vfm--resize-tl[data-v-2836fdb5] {
  width: 12px;
  height: 12px;
  z-index: 10;
}
.vfm--resize-t[data-v-2836fdb5] {
  top: -6px;
  left: 0;
  width: 100%;
  height: 12px;
  cursor: ns-resize;
}
.vfm--resize-tr[data-v-2836fdb5] {
  top: -6px;
  right: -6px;
  cursor: nesw-resize;
}
.vfm--resize-r[data-v-2836fdb5] {
  top: 0;
  right: -6px;
  width: 12px;
  height: 100%;
  cursor: ew-resize;
}
.vfm--resize-br[data-v-2836fdb5] {
  bottom: -6px;
  right: -6px;
  cursor: nwse-resize;
}
.vfm--resize-b[data-v-2836fdb5] {
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 12px;
  cursor: ns-resize;
}
.vfm--resize-bl[data-v-2836fdb5] {
  bottom: -6px;
  left: -6px;
  cursor: nesw-resize;
}
.vfm--resize-l[data-v-2836fdb5] {
  top: 0;
  left: -6px;
  width: 12px;
  height: 100%;
  cursor: ew-resize;
}
.vfm--resize-tl[data-v-2836fdb5] {
  top: -6px;
  left: -6px;
  cursor: nwse-resize;
}
`),he.render=En,he.__scopeId="data-v-2836fdb5",he.__file="lib/VueFinalModal.vue";var Ne={props:{},methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},beforeOpen:function(e,n,o){var t,a=this;return(t=function*(){e.ref.params.value=n.params,yield a.$nextTick(),yield a.$nextTick(),n.value||(a.slice(o),n.reject("show"))},function(){var r=this,i=arguments;return new Promise(function(l,c){var y=t.apply(r,i);function S(_){pt(y,l,c,S,L,"next",_)}function L(_){pt(y,l,c,S,L,"throw",_)}S(void 0)})})()},isString:function(e){return typeof e=="string"}}},On={class:"modals-container"};function kt(e,n){var o=b(b({},e),{},{props:b({},e.props)});return Object.assign(o.props,{api:{type:Object,default:function(){return n}}}),o}Ne.render=function(e,n,o,t,a,r){return d(),x("div",On,[(d(!0),x(H,null,W(e.api.dynamicModals,function(i,l){return d(),x(ft(i.component),be({key:i.id},i.bind,{modelValue:i.value,"onUpdate:modelValue":function(c){return i.value=c}},vt(i.on),{on_closed:function(c){return r.slice(l)},on_beforeOpen:function(c){return r.beforeOpen(c,i)},on_opened:i.opened}),Yt({_:2},[W(i.slots,function(c,y){return{name:y,fn:Pt(function(){return[w(" eslint-disable vue/no-v-html "),r.isString(c)?(d(),x("div",{key:0,innerHTML:c},null,8,["innerHTML"])):(d(),x(ft(c.component),be({key:1},c.bind,vt(c.on||{})),null,16))]})}})]),1040,["modelValue","onUpdate:modelValue","on_closed","on_beforeOpen","on_opened"])}),128))])},Ne.__file="lib/ModalsContainer.vue";var Tn=function(){var e,n,o=(n=null,{show:function(t){for(var a=this,r=arguments.length,i=new Array(r>1?r-1:0),l=1;l<r;l++)i[l-1]=arguments[l];switch(De(t)){case"string":return this.toggle.apply(this,[t,!0].concat(i));case"object":return Promise.allSettled([new Promise(function(c,y){var S={value:!0,id:Symbol("dynamicModal"),component:n,bind:{},slots:{},on:{},params:i[0],reject:y,opened:function(){c("show")}};a.dynamicModals.push(mt(Object.assign(S,t)))})])}},hide:function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return this.toggle(a,!1)},hideAll:function(){return this.hide.apply(this,F(this.openedModals.map(function(t){return t.props.name})))},toggle:function(t){for(var a=arguments.length,r=new Array(a>1?a-1:0),i=1;i<a;i++)r[i-1]=arguments[i];var l=Array.isArray(t)?this.get.apply(this,F(t)):this.get(t);return Promise.allSettled(l.map(function(c){return c.toggle.apply(c,r)}))},get:function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return this.modals.filter(function(i){return a.includes(i.props.name)})},dynamicModals:mt([]),openedModals:[],modals:[],_setDefaultModal:function(t){n=t}});return Y(e={},"$vfm",o),Y(e,"VueFinalModal",function(t){var a=kt(he,t);return t._setDefaultModal(a),a}(o)),Y(e,"ModalsContainer",function(t){return kt(Ne,t)}(o)),e},Re=Tn();Re.$vfm;var zn=Re.VueFinalModal,An=Re.ModalsContainer;const Ln={key:0,class:"cards"},In=["onClick"],Bn={class:"user-avatar"},Nn=["src"],$n={class:"user-name"},jn={class:"user-location"},Vn={key:1,class:"cards-list"},Un={class:"user-avatar-list"},Dn=["src"],Hn={class:"container"},Rn={class:"user-name-list"},Jn={class:"user-location-list"},Kn={class:"card-modal"},Fn={class:"user-avatar-modal"},Gn=["src"],qn={class:"modal-info-wrapper"},Yn={class:"user-name-modal"},Wn={class:"user-location-modal"},Xn={class:"user-email-modal"},Zn={class:"user-cell-modal"};function Qn(e,n,o,t,a,r){const i=q("vue-final-modal");return d(),g(H,null,[o.currentMode==="grip"?(d(),g("div",Ln,[(d(!0),g(H,null,W(o.filterUsers,l=>(d(),g("div",{class:"card",onClick:c=>{t.showModal=!0,t.showUserModal(l)},onBlur:n[0]||(n[0]=c=>t.showModal=!1)},[u("div",Bn,[u("img",{class:"user-avatar-img",src:l.picture.large},null,8,Nn)]),u("div",$n,A(l.name.first+" "+l.name.last),1),u("div",jn,A(l.location.city+", "+l.location.country),1)],40,In))),256))])):w("",!0),o.currentMode==="list"?(d(),g("div",Vn,[(d(!0),g(H,null,W(o.filterUsers,l=>(d(),g("div",{class:"card-list",onClick:n[1]||(n[1]=c=>t.showModal=!0),onBlur:n[2]||(n[2]=c=>t.showModal=!1)},[u("div",Un,[u("img",{class:"user-avatar-img-list",src:l.picture.large},null,8,Dn)]),u("div",Hn,[u("div",Rn,A(l.name.first+" "+l.name.last),1),u("div",Jn,A(l.location.city+", "+l.location.country),1)])],32))),256))])):w("",!0),t.showModal?(d(),x(i,{key:2,modelValue:t.showModal,"onUpdate:modelValue":n[5]||(n[5]=l=>t.showModal=l)},{default:Pt(()=>[u("div",Kn,[u("div",{class:"close",onClick:n[3]||(n[3]=l=>t.showModal=!1)},"\xD7"),u("div",Fn,[u("img",{class:"user-avatar-img-modal",src:t.userModal.picture.large},null,8,Gn)]),u("div",qn,[u("div",Yn,A(t.userModal.name.first+" "+t.userModal.name.last),1),u("div",Wn,A(t.userModal.location.city+", "+t.userModal.location.country),1),u("div",Xn,A(t.userModal.email),1),u("div",Zn,A(t.userModal.cell),1),u("button",{class:"button",onClick:n[4]||(n[4]=l=>t.showModal=!1)},"close")])])]),_:1},8,["modelValue"])):w("",!0)],64)}const eo={props:{filterUsers:Array,currentMode:String},components:{VueFinalModal:zn,ModalsContainer:An},setup(){const e=v(!1),n=v({});function o(t){n.value=t}return{showModal:e,userModal:n,showUserModal:o}}};var to=X(eo,[["render",Qn],["__scopeId","data-v-43bd5839"]]);const no={class:"pagination"},oo={class:"page"},ao={key:0,class:"page"},ro={key:1,class:"page"},io={class:"page"},so=["onClick"],lo={key:2,class:"page"},uo={key:3,class:"page"},co={class:"page"};function fo(e,n,o,t,a,r){return d(),g("nav",null,[u("ul",no,[u("li",oo,[u("a",{class:Te(["page-link",{disabled:o.currentPage===1}]),href:"#",onClick:n[0]||(n[0]=i=>e.$emit("goPrev"))},"<",2)]),o.currentPage>=3?(d(),g("li",ao,[u("a",{class:"page-link",href:"#",onClick:n[1]||(n[1]=i=>e.$emit("handleClick",1))},"1")])):w("",!0),o.currentPage>3?(d(),g("li",ro,[u("a",{class:"page-link",href:"#",onClick:n[2]||(n[2]=i=>e.$emit("handleClick",o.currentPage-3))},"...")])):w("",!0),(d(!0),g(H,null,W(t.pageNumbers,i=>(d(),g("li",io,[u("a",{class:Te(["page-link",{active:i===o.currentPage}]),href:"#",onClick:l=>e.$emit("handleClick",i)},A(i),11,so)]))),256)),o.totalPages>3&&o.totalPages-o.currentPage>2?(d(),g("li",lo,[u("a",{class:"page-link",href:"#",onClick:n[3]||(n[3]=i=>e.$emit("handleClick",o.currentPage+3))},"...")])):w("",!0),o.totalPages>3&&o.totalPages-o.currentPage>=2?(d(),g("li",uo,[u("a",{class:"page-link",href:"#",onClick:n[4]||(n[4]=i=>e.$emit("handleClick",o.totalPages))},A(o.totalPages),1)])):w("",!0),u("li",co,[u("a",{class:Te(["page-link",{disabled:o.currentPage===o.totalPages}]),href:"#",onClick:n[5]||(n[5]=i=>e.$emit("goNext"))},">",2)])])])}const vo={props:{totalPages:Number,currentPage:Number},setup(e){let n=3;const o=v([]);return Ve(()=>{if(n=Math.min(n,e.totalPages),e.totalPages<=n)o.value=[...Array(n).keys()].map(t=>t+1);else{let t=e.currentPage-Math.floor(n/2);t=Math.max(t,1),t=Math.min(t,e.totalPages-n+1),o.value=[...Array(n)].map((a,r)=>r+t)}}),z(e,()=>{if(n=Math.min(n,e.totalPages),e.totalPages<=n)o.value=[...Array(n).keys()].map(t=>t+1);else{let t=e.currentPage-Math.floor(n/2);t=Math.max(t,1),t=Math.min(t,e.totalPages-n+1),o.value=[...Array(n)].map((a,r)=>r+t)}}),{pageNumbers:o}}};var mo=X(vo,[["render",fo],["__scopeId","data-v-df69af6a"]]);const po=e=>($e("data-v-514766de"),e=e(),je(),e),go={class:"spinner"},yo=po(()=>u("div",{class:"bouncing-loader"},[u("div"),u("div"),u("div")],-1)),ho=[yo];function bo(e,n){return d(),g("div",go,ho)}const _o={};var wo=X(_o,[["render",bo],["__scopeId","data-v-514766de"]]);const So="https://randomuser.me/api",xo=Zt.create({baseURL:So});var Mo={getMultipleUsers(e){return xo.get(`/?results=${e}`)}};const ko={key:0};function Po(e,n,o,t,a,r){const i=q("Options"),l=q("UserCard"),c=q("Pagination"),y=q("Spinner");return d(),g(H,null,[t.isLoading?w("",!0):(d(),g("main",ko,[C(i,{"users-per-page":t.usersPerPage,onHandleValueChange:t.changeUsersPerPage,onHandelModeChange:t.changeMode},null,8,["users-per-page","onHandleValueChange","onHandelModeChange"]),C(l,{"filter-users":t.getUsersByPage,"current-mode":t.currentMode},null,8,["filter-users","current-mode"]),C(c,{"total-pages":t.totalPages,"current-page":t.currentPage,onHandleClick:t.changePage,onGoPrev:t.goPrev,onGoNext:t.goNext},null,8,["total-pages","current-page","onHandleClick","onGoPrev","onGoNext"])])),t.isLoading?(d(),x(y,{key:1})):w("",!0)],64)}const Co={components:{UserCard:to,Options:_n,Pagination:mo,Spinner:wo},setup(){const e=v(3010),n=v([]);v([]);const o=v(JSON.parse(localStorage.getItem("current-mode"))||"grip"),t=v(JSON.parse(localStorage.getItem("total-pages"))||1),a=v(JSON.parse(localStorage.getItem("users-per-page"))||30),r=v(JSON.parse(localStorage.getItem("current-page"))||1),i=v(!1),l=K(()=>{const p=(r.value-1)*a.value;return n.value.slice(p,p+a.value)});function c(){t.value=Math.ceil(n.value.length/a.value)}function y(p){a.value=Number(p.target.value)}function S(p){o.value=p}function L(p){r.value=p}function _(){r.value!==1&&r.value--}function M(){r.value!==t.value&&r.value++}return Ve(async()=>{try{i.value=!0;let p=await Mo.getMultipleUsers(e.value);if(p.status!==200)throw new Error(p.statusText);n.value=p.data.results,c(),i.value=!1}catch(p){i.value=!1,console.log("error: "+p),Qt.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}}),en(()=>{r.value>t.value&&(r.value=1,localStorage.setItem("current-page",JSON.stringify(r))),c()}),z([o,r,a,t],([p,R,Z,G])=>{localStorage.setItem("current-mode",JSON.stringify(p)),localStorage.setItem("current-page",JSON.stringify(R)),localStorage.setItem("users-per-page",JSON.stringify(Z)),localStorage.setItem("total-pages",JSON.stringify(G))}),{users:n,getUsersByPage:l,currentMode:o,totalPages:t,usersPerPage:a,currentPage:r,changeUsersPerPage:y,changeMode:S,changePage:L,goPrev:_,goNext:M,isLoading:i}}};var Eo=X(Co,[["render",Po],["__scopeId","data-v-4ed2d67e"]]);const Oo={setup(e){return(n,o)=>(d(),g(H,null,[C(cn),C(Eo)],64))}};Ct.add(tn);Ct.add(nn);on(Oo).component("font-awesome-icon",an).mount("#app");