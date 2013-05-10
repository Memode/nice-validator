/*! Validator 1.0.0-pre
* (c) 2012-2013 Jony Zhang <zj86@live.cn>, MIT Licensed
* http://niceue.github.io/validator/
*/
(function(e,t){"use strict";function i(a,s){var l,o,u=this;return!u instanceof i?new i(a,s):(u.$el=e(a),q(s)&&(s={success:s}),l=u.options=e.extend({},L,s),o=l.theme,o&&P[o]&&(l=e.extend(l,P[o],s)),u.rules=new r(l.rules,!0),u.messages=new n(l.messages,!0),u.fields={},u.elements={},u.isValid=!0,u._init(),t)}function r(e,t){var i=t?t===!0?this:t:r.prototype;if(S(e))for(var n in e)i[n]=a(e[n])}function n(e,t){var i=t?t===!0?this:t:n.prototype;if(S(e))for(var r in e){if(!e[r])return;i[r]=e[r]}}function a(t){switch(e.type(t)){case"function":return t;case"array":return function(e){return t[0].test(e.value)||t[1]||!1};case"regexp":return function(e){return t.test(e.value)}}}function s(t){var i="";return e.map(t.split(" "),function(e){i+=","+(e.charAt(0)==="#"?e:'[name="'+e+'"]')}),i.substring(1)}function l(t){if(t&&t.tagName){var i=t;switch(t.tagName.toUpperCase()){case"INPUT":case"SELECT":case"TEXTAREA":i=t.form||e(t).closest(".n-"+m)}return e(i).data(m)||e(i).validator().data(m)}}function o(i,r){var n=e.trim(D(i,"data-rule-"+r));if(n)return n=Function("return "+n)(),n?a(n):t}function u(e,t,i){var r=t.msg;return S(r)&&i&&(r=r[i]),N(r)||(r=D(e,"data-msg-"+i)||""),r}function d(e){if(!e)return"";var t=F.exec(e);return t?t[1]:""}function c(e){return(e||L.msgTemplate).replace("{#msg}",'<span class="msg-wrap"></span>')}function f(t,i,r){var n,a,s,l;return i.target&&(n=e(i.target,r),n.length&&(t=n[0])),s=t.name||"#"+t.id,a=e("."+_+"[data-for="+s+"]",r),a.length||(n=e(D(t,"data-target")||t),l=c(i.tpl),a=e(l).addClass(_).attr({tabindex:-1,role:"alert",style:i.style||"","data-for":s}),i.cls&&a.addClass(i.cls),a[i.pos&&i.pos!=="right"?"insertBefore":"insertAfter"](n)),a}function g(t,i,r){var n,a,s,l,o=i.effect;n={error:y,ok:v,tip:k,loading:b}[i.type||(i.type="error")],e(t).is(":checkbox,:radio")&&(t=h(t,i.pos==="left")),s=f(t,i,r),l=s.find("span.msg-wrap"),l.length||(l=e('<span class="msg-wrap"></span>').appendTo(s)),l[0].innerHTML=(i.arrow||"")+(i.icon||"")+'<span class="n-msg">'+i.msg+"</span>",l[0].className="msg-wrap "+n,s[0].style.display="",o&&(q(o)?a=o:j(o)&&q(o[0])&&(a=o[0]),a&&a(l,i.type))}function p(t,i,r){i=i||{},e(t).is(":checkbox,:radio")&&(i.pos=i.pos||d(L.msgTheme),t=h(t,i.pos==="left"));var n,a=f(t,i,r),s=i.effect;a.length&&(j(s)&&q(s[1])?(n=a.find("span.msg-wrap"),a[0].style.display="",s[1](n,i.type)):a[0].style.display="none")}function h(t,i){return e(t).closest(".n-"+m).find('input[name="'+t.name+'"]')[i?"first":"last"]()[0]}var m="validator",v="n-ok",y="n-error",k="n-tip",b="n-loading",w="n-invalid",_="msg-box",x="aria-invalid",M="data-inputstatus",O=":input:not(:button,:submit,:reset,:disabled)",$=/(\w+)(?:[\[\(]([^\]\)]*)[\]\)])?/,A=/(?:([^:\[]*):)?\s*(.*)/,C=/[^\x00-\xff]/g,F=/^.*(top|right|bottom|left).*$/,T=/(?:(post|get):)?(.+)/i,R=/[<>\&\/]/g,E=e.noop,V=e.proxy,q=e.isFunction,j=e.isArray,N=function(e){return"string"==typeof e},S=function(e){return e&&Object.prototype.toString.call(e)==="[object Object]"},D=function(e,i,r){return r===t?e.getAttribute(i):(null===r?e.removeAttribute(i):e.setAttribute(i,""+r),t)},I=window.console||{log:E,info:E,warn:E},L={debug:0,timely:"input",stopOnError:!1,showError:!0,showOk:!0,defaultMsg:"{0} is not valid.",loadingMsg:"Validating...",msgTemplate:"<span>{#msg}</span>",msgIcon:'<span class="n-icon"></span>',msgArrow:"",msgClass:"",formClass:"n-default",ignore:"",valid:E,invalid:E,validated:{}},P={"default":{msgClass:"n-right",showOk:""}};e.fn.validator=function(t){var r=this,n=arguments;return r.is(":input")?r:(!r.is("form")&&(r=this.find("form")),!r.length&&(r=this),r.each(function(){if(N(t)){if(t.charAt(0)==="_")return;var r=e(this).data(m);r&&r[t].apply(r,Array.prototype.slice.call(n,1))}else new i(this,t)}),this)},e.fn.isValid=function(){var e=this[0],t=l(e);return t?t._checkField(e):!0},i.prototype={_init:function(){var t=this,i=t.options,r=t.fields;j(i.groups)&&e.map(i.groups,function(i){if(!N(i.fields)||!q(i.callback))return null;var n=e(s(i.fields),t.$el),a=function(){return i.callback.call(t,n)};e.extend(a,i),e.map(i.fields.split(" "),function(e){r[e]=r[e]||{},r[e].group=a})}),S(i.fields)&&e.each(i.fields,function(e,t){t&&(r[e]=N(t)?{rule:t}:t)}),e(O,t.$el).each(function(){var e,n=this,a=n.id;a&&"#"+a in r||(a=n.name),a&&(e=r[a]||{},e.rule||(e.rule=D(n,"data-rule")||""),e.rules=[],D(n,"data-rule",null),e.rule&&(e.name=e.name||n.name,e.key=a,e.required=e.rule.indexOf("required")!==-1,e.must=e.rule.indexOf("match")!==-1||e.rule.indexOf("checked")!==-1,e.required&&D(n,"aria-required",!0),("timely"in e&&!e.timely||!i.timely)&&D(n,"notimely",!0),N(e.target)&&D(n,"data-target",e.target),N(e.tip)&&D(n,"data-tip",e.tip),r[a]=t._parseField(e)))}),t.msgOpt={type:"error",tpl:c(i.msgTemplate),pos:d(i.msgClass),cls:i.msgClass,icon:i.msgIcon,arrow:i.msgArrow,style:i.msgStyle,effect:i.effect},t.$el.data(m)||(t.$el.on("submit",V(t,"_submit")).on("reset",V(t,"_reset")).on("validated.field",O,V(t,"_validatedField")).on("validated.rule",O,V(t,"_validatedRule")).on("focusin",O,V(t,"_focus")).on("focusout validate",O,V(t,"_blur")).on("click",":radio,:checkbox",V(t,"_click")),i.timely==="input"&&t.$el.on("keyup",O,V(t,"_blur")),t.$el.data(m,t).addClass("n-"+m+" "+i.formClass),D(t.$el[0],"novalidate","true"))},_submit:function(i){i&&i.preventDefault();var r,n=this,a=n.options,s=i.target,l="focus.field",o=e(O,n.$el);n._reset(),a.ignore&&(o=o.not(a.ignore)),o.each(function(i,r){if(!e(r).is("[novalidate]")){var s=n.getField(this);if(s)return n._validate(this,s),!n.isValid&&a.stopOnError?(e(this).trigger(l),!1):t}}),n.isValid||a.stopOnError||e(":input."+w+":first",n.$el).trigger(l),r=n.isValid||a.debug===2?"valid":"invalid",a[r].call(n,s),n.$el.trigger(r+".form",[s])},_reset:function(){var t=this,i=t.options.showError;N(i)?e(i).html(""):(e("[data-for]."+_,t.$el).map(function(){this.style.display="none"}),e(O,t.$el).map(function(){D(this,M,null),D(this,x,null),e(this).removeClass(w)})),t.isValid=!0},_focus:function(e){var t,i=e.target;D(i,x)!=="false"&&D(i,M)!=="tip"&&(t=D(i,"data-tip"),t&&this.showMsg(i,{msg:t,type:"tip"}))},_blur:function(t,i){var r,n,a=this,s=a.options,l=t.target,o=100;if(!i){if(t.type==="validate")n=!0;else{if(e(l).is("[notimely]"))return;if(s.timely==="input"&&t.type!=="keyup")return}if(s.ignore&&e(l).is(s.ignore))return;if(t.type==="keyup"){var u=t.keyCode,d={8:1,9:1,16:1,32:1,46:1};if(!d[u]&&48>u||u>=112)return;o=500}}r=a.getField(l),r&&(r.timeout&&clearTimeout(r.timeout),r.timeout=setTimeout(function(){a._validate(l,r,n)},o))},_click:function(e){this._blur(e,!0)},_parseField:function(i){var r,n=A.exec(i.rule);if(n)return i.display=n[1],r=(n[2]||"").split(";"),e.map(r,function(r){var n=$.exec(r);return n?(i.rules.push({method:n[1],params:n[2]?e.trim(n[2]).split(", "):t}),t):null}),i.vid=0,i.rid=i.rules[0].method,i},_validatedField:function(t,i,r){var n=this,a=n.options.showError,s=t.target,l=i.isValid=!!r.valid;e(s)[l?"removeClass":"addClass"](w).trigger((l?"valid":"invalid")+".field",[i,r]).attr(x,!l),a&&(N(a)?e(a).html(r.msg||""):r.msg||r.showOk?n.showMsg(s,r):n.hideMsg(s,r))},_validatedRule:function(i,r,n,a){n=n||s.getField(o);var s=this,l=s.options,o=i.target,d="",c=n.key,f=n.rid,g=!1,p=!1;return a=a||{},r!==!0?(d=u(o,n,f),d||(N(r)?(d=r,r={error:d}):S(r)&&(r.error?d=r.error:(g=!0,r.ok&&N(r.ok)&&(p=!0),d=r.ok))),a.msg=(g?d:d||s.messages[f]||L.defaultMsg).replace("{0}",n.display||"")):g=!0,g?(a.type="ok",a.valid=!0,!p&&N(l.showOk)&&(p=!0,a.msg=l.showOk),p&&(a.showOk=!0),e(o).trigger("valid.rule",[f])):(s.isValid=!1,e(o).trigger("invalid.rule",[f])),l.debug&&I[g?"info":"warn"](n.vid+": "+f+" -> "+(a.msg||!0)),n.old=n.old||{},n.old.ret=a,s.elements[c]=o,g&&n.old.value!==t&&n.old.value!==o.value&&(n.vid=0,s._checkRule(o,n)),g&&n.vid<n.rules.length-1?(n.vid++,s._checkRule(o,n)):(n.vid=0,q(l.validated[name])&&l.validated[name].call(s,o,n,a),e(o).trigger("validated.field",[n,a]),t)},_checkRule:function(i,r){var n,a=this,s=r.rules[r.vid],l=s.method,u=s.params;r.rid=l,r.old={value:i.value},n=(o(i,l)||a.rules[l]||function(){return!0}).call(a,i,u,r),n!==t?e(i).trigger("validated.rule",[n,r]):a.isValid=!1},_checkField:function(e,t){var i=this;return(t=t||i.getField(e))?(i._validate(e,t,!0),t.isValid):!0},_validate:function(i,r,n){var a,s,l=this,o=l.options,u=e(i),d={},c=r.group,f=r.isValid=!0;if(r&&r.rules&&!i.disabled&&!u.is("[novalidate]")){if(a=r.old,n=n||r.must,!r.required&&i.value===""&&!c){if(u.is("[data-tip]"))return!0;if(!u.is(":checkbox,:radio"))return u.trigger("validated.field",[r,{valid:!0}]),t}if(!n&&a&&a.ret!==t&&a.value===i.value){if(a.ret.valid||(f=l.isValid=!1),D(i,M)==="tip")return;if(i.value!=="")return d=a.ret,u.trigger("validated.field",[r,d]),t}else c&&(e.extend(d,c),s=c.call(l),s===!0?(s=t,l.hideMsg(i,d)):(N(s)&&(s={error:s}),l.hideMsg(i),r.vid=0,r.rid="group",f=!1));o.debug&&I.log(i),s!==t?u.trigger("validated.rule",[s,r,d]):r.rule&&l._checkRule(i,r)}},getField:function(e){var t,i=this;return t=e.id&&"#"+e.id in i.fields||!e.name?"#"+e.id:e.name,i.fields[t]},test:function(i,r){var n,a,s,l=$.exec(r);return l?(a=l[1],s=l[2]?e.trim(l[2]).split(", "):t,a in this.rules&&(n=this.rules[a].call(this,i,s)),n===!0||n===t||n):!0},getRangeMsg:function(e,t,i,r){if(t){var n=this,a=n.messages[i]||"",s=t[0].split("~"),l=s[0],o=s[1],u="rg",d=[""],c=+e===+e;if(s.length===2){if(l&&o){if(c&&e>=+l&&+o>=e)return!0;d=d.concat(s)}else if(l&&!o){if(c&&e>=+l)return!0;d.push(l),u="gt"}else if(!l&&o){if(c&&+o>=e)return!0;d.push(o),u="lt"}}else{if(e===+l)return!0;d.push(l),u="eq"}return a&&(r&&r+u in a&&(u=r+u),d[0]=a[u]),n.renderMsg.apply(null,d)}},_getMsgOpt:function(t){return N(t)&&(t={msg:t}),e.extend({},this.msgOpt,t)},renderMsg:function(){var e=arguments,t=e[0],i=e.length;if(t){for(;--i;)t=t.replace("{"+i+"}",e[i]);return t}},showMsg:function(e,t){t=this._getMsgOpt(t),D(e,M,t.type),g(e,t,this.$el)},hideMsg:function(e,t){t=this._getMsgOpt(t),p(e,t,this.$el)},mapMsg:function(t){var i=this;e.each(t,function(t,r){var n=i.elements[t]||e(':input[name="'+t+'"]',i.$el)[0];i.showMsg(n,r)})},setMsg:function(e){new n(e,this.messages)},setRule:function(e){new r(e,this.rules)},setField:function(i,r){var n=this,a={};if(N(i)){if(null===r)return e.map(i.split(" "),function(e){e&&n.fields[e]&&(n.fields[e]=null)}),t;r&&(a[i]=r)}else S(i)&&(a=i);e.extend(!0,n.options.fields,a),n._init()},destroy:function(){this.$el.off().removeData(m)}},e(function(){e("body").on("focusin",":input[data-rule]",function(){l(this)?e(this).trigger("focusin"):e(this).removeAttr("data-rule")}).on("submit","form:not([novalidate])",function(t){var i,r=e(this);r.data(m)||(i=r.validator().data(m),e.isEmptyObject(i.fields)?r.attr("novalidate",!0).removeData(m):i._submit(t))})}),new r({required:function(t){return!!e.trim(t.value)},integer:function(e,t){var i,r="0|",n="[1-9]\\d*",a=t?t[0]:"*";switch(a){case"+":i=n;break;case"-":i="-"+n;break;case"+0":i=r+n;break;case"-0":i=r+"-"+n;break;default:i=r+"-?"+n}return i="^(?:"+i+")$",RegExp(i).test(e.value)||this.messages.integer[a]},match:function(t,i){var r,n,a,s,l,o=t.value,u="eq";if(i&&(i.length===1?n=i[0]:(u=i[0],n=i[1]),s=e(n.charAt(0)==="#"?n:':input[name="'+n+'"]',this.$el)[0]))switch(l=this.getField(s),a=this.messages.match[u].replace("{1}",l.display||n),r=s.value,u){case"lt":return+r>+o||a;case"lte":return+r>=+o||a;case"gte":return+o>=+r||a;case"gt":return+o>+r||a;default:return o===r||a}},range:function(e,t){return this.getRangeMsg(+e.value,t,"range")},checked:function(t,i){if(!e(t).is(":radio,:checkbox"))return!0;var r=e('input[name="'+t.name+'"]',this.$el).filter(function(){return!this.disabled&&this.checked&&e(this).is(":visible")}).length;return i?this.getRangeMsg(r,i,"checked"):!!r||this.messages.required},length:function(e,t){var i=e.value,r=(t[1]?i.replace(C,"xx"):i).length;return t&&t[0].charAt(0)==="~"&&(t[0]="0"+t[0]),this.getRangeMsg(r,t,"length",t[1]?"2_":"")},remote:function(i,r,n){var a,s=this,l={},o=function(e){return N(e)||S(e)&&("error"in e||"ok"in e)?e:t};return r?(a=T.exec(r[0]),l[i.name]=i.value,r[1]&&e.map(r.slice(1),function(t){l[t]=e(':input[name="'+t+'"]',this.$el).val()}),s.showMsg(i,{type:"loading",msg:s.options.loadingMsg}),e.ajax({url:a[2],type:a[1]||"POST",data:l,cache:!1,complete:function(r,a){var s,l=r.responseText;""===l?l=!0:l||"error"!==a?l.charAt(0)==="{"&&(l=e.parseJSON(l)||{},s=o(l),s===t&&(s=o(l.data)),l=s||"success"===a):l="Net error",e(i).trigger("validated.rule",[l,n])}}),t):!0},filter:function(e,t){var i=t?RegExp("["+t[0]+"]","g"):R;e.value=e.value.replace(i,"")}}),i.defaults=L,i.showMsg=g,i.hideMsg=p,i.setTheme=function(t,i){S(t)?e.each(t,function(e,t){P[e]=t}):N(t)&&S(i)&&(P[t]=i)},i.config=function(t){e.each(t,function(e,t){"rules"===e?new r(t):"messages"===e?new n(t):L[e]=t})},e.validator=i})(jQuery);