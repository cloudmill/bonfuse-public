(()=>{"use strict";var e,t={208:(e,t,r)=>{r(563),r(917);var a=r(638);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s={closeExisting:!0,touch:!1,hideScrollbar:!1,autoFocus:!1,baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-stage"></div></div>',animationEffect:"zoom",animationDuration:400,afterShow:function(e,t){a(t.src).closest(".fancybox-container").addClass("open")},beforeClose:function(e,t){a(t.src).closest(".fancybox-container").removeClass("open")},template:{closeButton:'<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.75781 4.75732L13.2431 13.2426" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.75691 13.2426L13.2422 4.75732" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'}};a((function(){a("[data-fancy-button]").on("click",(function(e){var t=o({},s);e.preventDefault();var r=a(this).data("fancy-button"),n=a('[data-fancy-modal="'.concat(r,'"]'));if("service"===r)a("[data-service-modal-ttl]").text("".concat(a(this).data("service-ttl"))),t.beforeClose=function(){setTimeout((function(){a(".service-modal").removeClass("success")}),500)};a.fancybox.defaults=o(o({},a.fancybox.defaults),t),a.fancybox.open(n)}))}));r(419);var u=r(638);function i(){var e=document.querySelectorAll("[data-cart-body]"),t=document.querySelectorAll("[data-counter]");if(e.length){for(var r=0;r<t.length;r++)l(r);f(),document.querySelectorAll("[data-delete-product]").forEach((function(e){e.addEventListener("click",(function(t){var r=e.getAttribute("data-delete-product");document.querySelector('[data-product="'.concat(r,'"]')).remove(),document.querySelector('[data-result-product="'.concat(r,'"]')).remove(),d(),f()}))}))}t.length&&(d(),function(e){e.forEach((function(e){e.addEventListener("click",(function(t){var r=Number(e.querySelector("[data-сounter-num]").innerHTML);(t.target.closest("[data-counter-minus]")&&r>0?(2==r&&e.querySelector("[data-counter-minus]").classList.add("disabled"),e.querySelector("[data-сounter-num]").innerHTML=r-1):t.target.closest("[data-counter-plus]")&&(1==r&&e.querySelector("[data-counter-minus]").classList.remove("disabled"),e.querySelector("[data-сounter-num]").innerHTML=r+1),d(),document.querySelectorAll("[data-cart-body]").length)&&(l(e.getAttribute("data-counter")),f())}))}))}(t))}function l(e){var t=Number(document.querySelector('[data-product-price="'.concat(e,'"]')).innerText.replace(/\D/g,"")),r=document.querySelectorAll('[data-product-total-price="'.concat(e,'"]')),a=Number(document.querySelector('[data-сounter-num="'.concat(e,'"]')).innerText);r.forEach((function(e){e.innerText=(t*a).toLocaleString()}))}function d(){var e=document.querySelectorAll("[data-total-count]"),t=[];document.querySelectorAll("[data-сounter-num]").forEach((function(e){t.push(Number(e.innerText))})),e.forEach((function(e){e.innerText=t.reduce((function(e,t){return e+t}),0)}))}function f(){var e=document.querySelector("[data-total-price]"),t=[],r=[];document.querySelectorAll("[data-product-total-price]").forEach((function(e){t.push(Number(e.innerText.replace(/\D/g,"")))})),document.querySelectorAll("[data-discount]").forEach((function(e){r.push(Number(e.innerText.replace(/\D/g,"")))})),e.innerText=(t.reduce((function(e,t){return e+t}),0)-r.reduce((function(e,t){return e+t}),0)).toLocaleString()}function p(e){var t=document.querySelector('[data-tabs-panel="'.concat(e,'"]')),r=document.querySelector('[data-tabs-container="'.concat(e,'"]'));null==t||t.addEventListener("click",(function(a){if(a.target.closest("[data-tab]")){if("useful"==e)a.target.closest("[data-tab]").classList.toggle("active");else{var n=t.querySelector("[data-tab].active");null==n||n.classList.remove("active"),a.target.closest("[data-tab]").classList.add("active")}if(r){var o=a.target.closest("[data-tab]").getAttribute("data-tab");r.querySelector("[data-tab-content].active").classList.remove("active"),r.querySelector('[data-tab-content="'.concat(o,'"]')).classList.add("active")}}}))}document.addEventListener("DOMContentLoaded",(function(){var e;u("form").parsley(),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Заполните поле",pattern:"Это значение некорректно",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Это значение должно содержать не менее %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Это значение должно совпадать"}),Parsley.setLocale("ru"),document.querySelectorAll("[data-parsley-validate]").forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault(),e.reset(),e.querySelectorAll("[data-input]").forEach((function(e){e.classList.remove("active")}))}))})),u("[data-service-form]").length&&u("[data-service-form]").parsley().on("form:success",(function(){u(".service-modal").addClass("success")})),u("[data-contact-form]").length&&u("[data-contact-form]").parsley().on("form:success",(function(){u.fancybox.open(u("[data-fancy-modal=response]"))})),Inputmask({mask:"+7 (999) 999-99-99",showMaskOnHover:!1}).mask("[data-phone-input]"),window.Parsley.addValidator("string",{requirementType:"string",validateString:function(e){var t=/[^a-zа-яё\s]/i;return console.log(t.test(e)),!t.test(e)},messages:{ru:"Спецсимволы и цифры запрещены"}}),(e=document.querySelectorAll("[data-input]")).length&&e.forEach((function(e){e.oninput=function(){this.value?this.classList.add("active"):this.classList.remove("active")}})),function(){var e=document.querySelector("[data-promo-input]"),t=document.querySelector("[data-promo-button]");e&&e.addEventListener("input",(function(){e.value.length>0?t.classList.remove("disabled"):t.classList.add("disabled")}))}(),p("useful"),p("delivery"),p("delivery-opts"),p("delivery-opts2")})),window.addEventListener("load",(function(){document.querySelector(".body").classList.remove("no-transition"),document.querySelector(".plug-page")&&(document.querySelector(".plug-page__logo").classList.add("loaded"),setTimeout((function(){document.querySelector(".plug-page__top").classList.add("loaded"),document.querySelector(".plug-page__bottom").classList.add("loaded"),document.querySelector(".plug-page__spin").classList.add("start")}),400)),i()}))}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,r,n,o)=>{if(!r){var c=1/0;for(l=0;l<e.length;l++){for(var[r,n,o]=e[l],s=!0,u=0;u<r.length;u++)(!1&o||c>=o)&&Object.keys(a.O).every((e=>a.O[e](r[u])))?r.splice(u--,1):(s=!1,o<c&&(c=o));if(s){e.splice(l--,1);var i=n();void 0!==i&&(t=i)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,n,o]},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[c,s,u]=r,i=0;if(c.some((t=>0!==e[t]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(u)var l=u(a)}for(t&&t(r);i<c.length;i++)o=c[i],a.o(e,o)&&e[o]&&e[o][0](),e[c[i]]=0;return a.O(l)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=a.O(void 0,[610,532],(()=>a(208)));n=a.O(n)})();