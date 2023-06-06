(()=>{"use strict";var t,e={680:(t,e,a)=>{function o(){var t=document.querySelectorAll("[data-cart-init]"),e=document.querySelectorAll("[data-counter]");t.length&&(e.forEach((function(t){n(t.getAttribute("data-counter"))})),r(),document.querySelectorAll("[data-delete-product]").forEach((function(t){t.addEventListener("click",(function(e){var a=t.getAttribute("data-delete-product");document.querySelectorAll('[data-product-incart="'.concat(a,'"]')).forEach((function(t){t.remove()})),document.querySelector('[data-result-product="'.concat(a,'"]'))&&document.querySelector('[data-result-product="'.concat(a,'"]')).remove(),c(),r()}))}))),e.length&&(c(),i())}function n(t){var e=Number(document.querySelector('[data-product-price="'.concat(t,'"]')).innerText.replace(/\D/g,"")),a=document.querySelectorAll('[data-product-total-price="'.concat(t,'"]')),o=Number(document.querySelector('[data-сounter-num="'.concat(t,'"]')).innerText);a.forEach((function(t){t.innerText=(e*o).toLocaleString()}))}function c(){var t=document.querySelectorAll("[data-total-count]"),e=[];document.querySelector('[data-fancy-modal="cart"]').querySelectorAll("[data-сounter-num]").forEach((function(t){e.push(Number(t.innerText))})),t.forEach((function(t){t.innerText=e.reduce((function(t,e){return t+e}),0)}))}function r(){console.log(111);var t=document.querySelectorAll("[data-total-price]"),e=document.querySelector("[data-cart-modal-list]"),a=[],o=[];e.querySelectorAll("[data-product-total-price]").forEach((function(t){a.push(Number(t.innerText.replace(/\D/g,"")))})),document.querySelectorAll("[data-discount]").forEach((function(t){o.push(Number(t.innerText.replace(/\D/g,"")))})),t.forEach((function(t){t.innerText=(a.reduce((function(t,e){return t+e}),0)-o.reduce((function(t,e){return t+e}),0)).toLocaleString()}))}function i(){document.querySelectorAll("[data-counter]").forEach((function(t){1==Number(t.querySelector("[data-сounter-num]").innerHTML)?t.querySelector("[data-counter-minus]").classList.add("disabled"):t.querySelector("[data-counter-minus]").classList.remove("disabled"),t.addEventListener("click",d)}))}function d(t){var e=t.target.closest("[data-counter]"),a=e.querySelector("[data-сounter-num]"),o=e.getAttribute("data-counter"),i=document.querySelectorAll('[data-сounter-num="'.concat(o,'"]')),d=Number(a.innerHTML);(t.target.closest("[data-counter-minus]")&&d>0?(2==d&&e.querySelector("[data-counter-minus]").classList.add("disabled"),i.forEach((function(t){t.innerHTML=d-1}))):t.target.closest("[data-counter-plus]")&&(1==d&&e.querySelector("[data-counter-minus]").classList.remove("disabled"),i.forEach((function(t){t.innerHTML=d+1}))),c(),document.querySelectorAll("[data-cart-init]").length)&&(n(e.getAttribute("data-counter")),r(),c())}a(917);var s=a(597),l=a(638);var u=a(638);function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var y={closeExisting:!0,touch:!1,hideScrollbar:!1,autoFocus:!1,baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-stage"></div></div>',animationEffect:"zoom",animationDuration:400,afterShow:function(t,e){u(e.src).closest(".fancybox-container").addClass("open")},beforeClose:function(t,e){u(e.src).closest(".fancybox-container").removeClass("open")},btnTpl:{smallBtn:'<button type="button" data-fancybox-close="" class="fancybox-button fancybox-close-small" title="Close"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.75781 4.75732L13.2431 13.2426" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.75691 13.2426L13.2422 4.75732" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'}};function v(t,e){var a=e.data("button-modal"),o=u('[data-fancy-modal="'.concat(a,'"]'));if("add-cart"===a)!function(t){var e=t.target.closest("[data-product]"),a=document.querySelector("[data-cart-modal-list]"),o=e.getAttribute("data-product"),c=e.querySelector("[data-product-img]").querySelector("img").getAttribute("src"),r=e.querySelector("[data-product-ttl]").innerText,i=e.querySelector("[data-product-price]").innerText,s=e.querySelector("[data-сounter-num]").innerText;if(document.querySelector("[data-added-img]").setAttribute("src","".concat(c)),l("[data-added-ttl]").text("".concat(r)),l("[data-added-price]").text("".concat(i)),l("[data-added-count]").text("".concat(s)),!a.querySelector('[data-product-incart="'.concat(o,'"]'))){var u=document.querySelector("#card-modal-template").content.cloneNode(!0);u.querySelector("[data-product-img]").setAttribute("src","".concat(c)),u.querySelector("[data-product-ttl]").innerText=r,u.querySelector("[data-product-price]").innerText=i,u.querySelector("[data-сounter-num]").innerText=s,["data-product-price","data-product-total-price","data-counter","data-сounter-num","data-delete-product"].forEach((function(t){u.querySelector("[".concat(t,"]")).setAttribute("".concat(t),"".concat(o))})),a.append(u);var m=a.querySelector("[data-new-incart]");m.setAttribute("data-product","".concat(o)),m.setAttribute("data-product-incart","".concat(o)),m.removeAttribute("data-new-incart"),n(o),document.querySelectorAll("[data-counter]").forEach((function(t){t.removeEventListener("click",d),t.addEventListener("click",d)}))}}(t),c(),r(),u.fancybox.open(o)}function g(){u("[data-fancy-button]").on("click",(function(t){var e=f({},y);t.preventDefault();var a=u(this).data("fancy-button"),o=u('[data-fancy-modal="'.concat(a,'"]'));switch(v(t,u(this)),a){case"service":u("[data-service-modal-ttl]").text("".concat(u(this).data("service-ttl"))),e.beforeClose=function(){setTimeout((function(){u("[data-fancy-modal=service]").removeClass("success")}),500)};break;case"cart":e.beforeShow=function(){u.fancybox.close(o)};break;case"profile":e.beforeClose=function(){setTimeout((function(){u("[data-fancy-modal=profile]").removeClass("success")}),500)},document.querySelectorAll("[data-profile]").forEach((function(t){var e=t.getAttribute("data-profile"),a=document.querySelectorAll('[data-profile-input="'.concat(e,'"]'));a.length&&a.forEach((function(e){e.value=t.innerText}))}));break;case"edit-company":var n=t.target.closest("[data-company-info]").querySelectorAll("[data-company]"),c=t.target.closest("[data-company-info]").getAttribute("data-company-info"),r=document.querySelector("[data-edit-company-form]");document.querySelector("[data-edit-company-form]").setAttribute("data-edit-company-form","".concat(c)),n.forEach((function(t){var e=t.getAttribute("data-company"),a=r.querySelectorAll('[data-company-input="'.concat(e,'"]'));a.length&&a.forEach((function(e){e.value=t.innerText}))})),e.beforeClose=function(){setTimeout((function(){u("[data-fancy-modal=edit-company]").removeClass("success"),document.querySelector("[data-edit-company-form]").setAttribute("data-edit-company-form",""),document.querySelector("[data-edit-company-form]").reset()}),500)};break;case"add-company":e.beforeClose=function(){setTimeout((function(){u("[data-fancy-modal=add-company]").removeClass("success")}),500)};break;case"registration":e.beforeClose=function(){setTimeout((function(){u("[data-fancy-modal=registration]").removeClass("success")}),500)};break;case"ask":e.beforeClose=function(){setTimeout((function(){u("[data-fancy-modal=ask]").removeClass("success")}),500)}}u.fancybox.defaults=f(f({},u.fancybox.defaults),e),"menu"!==a&&u.fancybox.open(o)})),u('[data-fancy-button="cart"]').on("mouseenter",(function(t){var e=f({},y);t.preventDefault();var a=u(this).data("fancy-button"),o=u('[data-fancy-modal="'.concat(a,'"]'));e.baseTpl='<div class="fancybox-container down" role="dialog" tabindex="-1"><div class="fancybox-bg light"></div><div class="fancybox-stage"></div></div>',e.animationEffect="right",e.afterShow=function(){u(".fancybox-slide").on("mouseover",(function(t){t.target.closest(".cart-modal")||u.fancybox.close(o)}))},u.fancybox.defaults=f(f({},u.fancybox.defaults),e),u.fancybox.open(o)}))}g(),u((function(){u("[data-fancy-button=menu]").on("click",(function(t){var e=f({},y);t.preventDefault(),e.baseTpl='<div class="fancybox-container down" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-stage"></div></div>',u.fancybox.defaults=f(f({},u.fancybox.defaults),e),u(".body").hasClass("fancybox-active")?(console.log("click 1"),u.fancybox.close(u('[data-fancy-modal="menu"]')),u("[data-fancy-button=menu]").removeClass("active")):(console.log("click 2"),u.fancybox.open(u('[data-fancy-modal="menu"]')),u("[data-fancy-button=menu]").addClass("active"))}))})),u((function(){var t=u("[data-fancy-modal=lk]");if(t){var e=f({},y);u.fancybox.defaults=f(f({},u.fancybox.defaults),e),u.fancybox.open(t)}})),s.KR.bind("[data-fancybox]",{Toolbar:!1,animated:!1,Carousel:{Navigation:{prevTpl:'<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="30" transform="matrix(-1 0 0 1 30 30)" fill="white"/><path d="M33.09 37.9201L26.57 31.4001C25.8 30.6301 25.8 29.3701 26.57 28.6001L33.09 22.0801" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',nextTpl:'<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" fill="white"/><path d="M26.9099 37.9201L33.4299 31.4001C34.1999 30.6301 34.1999 29.3701 33.4299 28.6001L26.9099 22.0801" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'}}});a(563),a(419);var b=a(638);function h(){var t=document.querySelectorAll("[data-input]");t.length&&t.forEach((function(t){t.oninput=function(){this.value?this.classList.add("active"):this.classList.remove("active")}}))}function w(){var t=document.querySelector("[data-promo-input]"),e=document.querySelector("[data-promo-button]");t&&t.addEventListener("input",(function(){t.value.length>0?e.classList.remove("disabled"):e.classList.add("disabled")}))}var S=a(638);S((function(){S("[data-type=form-backend]").on("submit",(function(t){t.preventDefault();var e=S(this),a={};e.find("[data-get-field]").each((function(t,e){var o=S(e),n=o.data("field");a[n]=o.val()})),S.ajax({method:"post",url:e.attr("action"),data:a,dataType:"json",success:function(t){console.log(t),t.success?t.redirect?location=t.redirect:window.formSuccess.exec(e.data("form"),e):alert(t.message)}})})),S(document).on("click","[btn-show-more]",(function(){var t=S(this),e=t.closest("[data-parent-container-list]"),a=e.data("parent-container-list"),o=e.find("[data-type=backend-list]"),n=t.closest("[data-parent-container-btn]"),c=n.data("parent-container-btn"),r=t.closest("[btn-show-more]").attr("data-url");t.remove(),void 0!==r&&S.ajax({type:"GET",url:r,dataType:"html",success:function(t){var e=S(t).find("[data-parent-container-list=".concat(a,"]")).find("[data-type=backend-item]"),r=S(t).find("[data-parent-container-btn=".concat(c,"]")).find("[btn-show-more]");o.append(e),n.append(r),i()}})})),S(document).on("click","[data-type=filter-click]",(function(){var t=S(this);window.filters.getData[t.data("get-type")](t.data("field"),t.data("val")),console.log("filters data"),console.log(Object.values(window.filters.data.filters)),S.ajax({type:"GET",url:window.location.href,dataType:"html",data:window.filters.data,success:function(t){var e=S(t).find("[data-container=items]");S("[data-container=items]").replaceWith(e)}})})),S(document).on("click","[data-type=filter-click-reset]",(function(){window.filters.data.filters={},S.ajax({type:"GET",data:window.filters.data,href:"",dataType:"html",success:function(t){var e=S(t).find("[data-container=items]");S("[data-container=items]").replaceWith(e)}})})),function(){var t=window.location.pathname.split("/")[1];"cart"===t&&document.querySelector("[data-total-count-back]")&&(document.querySelector("[data-total-count-back]").innerText=document.querySelectorAll("div.product-card[data-product-incart]").length);if("catalog"===t){var e=new URL(document.location).searchParams.get("search");e&&(document.querySelector("[data-catalog-search-input]").value=e,document.querySelector("[data-catalog-search-reset]").classList.add("show"))}S(document).on("click",'[data-backend="btn-cart"]',(function(t){var e=S(this),a=e.data("id"),o=Number(document.querySelector('[data-сounter-num="'.concat(a,'"]')).innerText),n=e.data("ajax-location");e.css("pointer-events","none"),o>=1&&S.ajax({type:"POST",url:n,dataType:"html",data:{items:{id:a,count:o},url:window.location.pathname},success:function(){v(t,e),e.css("pointer-events","auto")}})})),S(document).on("click",'[data-backend="incart-btn-cart"]',(function(t){t.preventDefault();var e,a=S(this),o=a.data("id"),c=a.data("action"),d=0,s={};switch(c){case"del":r(),document.querySelectorAll('[data-product-incart="'.concat(o,'"]')).forEach((function(t){t.remove()})),document.querySelector('[data-result-product="'.concat(o,'"]'))&&document.querySelector('[data-result-product="'.concat(o,'"]')).remove(),document.querySelector("[data-product-incart]")?(document.querySelector("[data-total-count-back]").innerText=document.querySelectorAll("div.product-card[data-product-incart]").length,s={items:{id:o,action:c}},e=!1):(s={items:{id:o,action:c,last_element:"true"}},e=!0,S("[data-cart-title]").remove(),S("[data-cart-body]").remove(),S("[data-cart-empty-title]").css("display",""),S("[data-cart-empty-body]").css("display",""));break;case"append":case"sub":d=Number(document.querySelector('[data-сounter-num="'.concat(o,'"]')).innerText),i(),n(o),r(),s={items:{id:o,count:d,action:c}};break;case"addPromo":s={items:{promo:document.querySelector("[data-promo-input]").value,action:c}};break;case"delPromo":document.querySelector("[data-promocode-backend]").classList.remove("success"),s={items:{action:c}}}a.css("pointer-events","none"),S("[data-checkout-btn-backend]").css("pointer-events","none"),S.ajax({type:"POST",url:"/cart/",dataType:"text",data:s,success:function(t){e||(a.css("pointer-events","auto"),S("[data-checkout-btn-backend]").css("pointer-events","auto"),S("[data-cart-result]").replaceWith(t),h(),w())}})}))}(),S(document).on("click","[data-auth-id]",(function(t){t.preventDefault();var e=S(this),a=e.data("ajax-location"),o=e.data("auth-id");e.css("pointer-events","none"),S.ajax({type:"POST",url:a,dataType:"json",data:{"auth-id":o},success:function(t){t.success?document.location.reload():alert(t.message)}})}))})),window.formSuccess={exec:function(t,e){switch(t){case"subscribe":case"contact":case"contact2":window.formSuccess.openFancybox(t);break;case"profile":window.formSuccess.profileForm();break;default:window.formSuccess.addClass(e)}},addClass:function(t){t?(t.closest("[data-fancy-modal]").addClass("success"),"recovery"===t.attr("data-form")&&(S("[data-recovery-result]").text(S("[data-input-recovery]").val()),t.reset())):alert("Ошибка заполнения формы")},profileForm:function(){S("[data-fancy-modal=profile]").addClass("success"),document.querySelectorAll("[data-profile-input]").forEach((function(t){var e=t.getAttribute("data-profile-input"),a=document.querySelector('[data-profile="'.concat(e,'"]')),o=a.closest("[data-profile-row]");console.log(t.value),t.value.length<1?a&&o.remove():a.innerText=t.value}))},openFancybox:function(t){switch(t){case"subscribe":S.fancybox.open(S("[data-fancy-modal=subscribe-response]"));break;case"contact":S.fancybox.open(S("[data-fancy-modal=response]"));break;case"contact2":S.fancybox.open(S("[data-fancy-modal=response2]"))}}},window.filters={data:{filters:{},ajax:"filter"},getData:{one:function(t,e){e&&!window.filters.data.filters[t]||delete window.filters.data.filters[t],window.filters.data.filters[t]=e},many:function(t,e){window.filters.data.filters[t]||(window.filters.data.filters[t]={}),window.filters.data.filters[t][e]?(delete window.filters.data.filters[t][e],Object.keys(window.filters.data.filters[t]).length||delete window.filters.data.filters[t]):window.filters.data.filters[t][e]=e}}};var q=a(566),k=a.n(q);var x=a(145);a(527);var T=a(412),L=a(371),_=a(369),E=a(383),C=a(638);(0,E.ScrollMagicPluginGsap)(T,L.Q3);var A=a(948),j=a.n(A),O=a(638);window.CONFIG=window.location.hostname&&"localhost"!==window.location.hostname&&"cloudmill.github.io"!==window.location.hostname?{path:"/local/templates/main/",debug:!0}:{path:"./",debug:!0},document.addEventListener("DOMContentLoaded",(function(){!function(){var t=document.querySelector("[data-preloader]");if(t){var e=function(){document.querySelector("[data-show-1]").classList.remove("no-opacity"),setTimeout((function(){document.querySelectorAll("[data-show-2]").forEach((function(t){t.classList.remove("no-opacity")}))}),300),setTimeout((function(){document.querySelector("[data-show-3]").classList.remove("no-opacity")}),600),setTimeout((function(){document.querySelector("[data-show-1]").classList.remove("transition"),document.querySelector("[data-show-3]").classList.remove("transition"),document.querySelectorAll("[data-show-2]").forEach((function(t){t.classList.remove("transition")}))}),900)};window.scrollTo(0,0),setTimeout((function(){"complete"===document.readyState?(t.classList.add("close"),setTimeout((function(){t.remove(),e()}),800)):(document.querySelector("[data-preloader-beans]").classList.add("rotating"),window.addEventListener("load",(function(){t.classList.add("close"),setTimeout((function(){t.remove(),e()}),800)})))}),1e3)}else document.querySelector("[data-show-1]").classList.remove("no-opacity"),document.querySelector("[data-show-1]").classList.remove("transition")}(),b("form").parsley(),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Спецсимволы запрещены"},notblank:"Это поле должно быть заполнено",required:"Заполните поле",pattern:"Это значение некорректно",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Это значение должно содержать не менее %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Это значение должно совпадать"}),Parsley.setLocale("ru"),Parsley.addValidator("telLength",{requirementType:"number",validateString:function(t,e){return t.replace(/\D/g,"").length===e},messages:{ru:"Телефон введён не полностью"}}),document.querySelectorAll("[data-parsley-validate]").forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault(),t.hasAttribute("data-promocode-form")||"profile"===t.getAttribute("data-form")||"recovery"===t.getAttribute("data-form")||(t.reset(),t.querySelectorAll("[data-input]").forEach((function(t){t.classList.remove("active")})))}))})),b("[data-service-form]").length&&b("[data-service-form]").parsley().on("form:success",(function(){b("[data-fancy-modal=service]").addClass("success")})),b("[data-recovery-form]").length&&b("[data-recovery-form]").parsley().on("form:success",(function(){b("[data-recovery-result]").text(b("[data-input-recovery]").val()),b("[data-fancy-modal=recovery]").addClass("success")})),b("[data-registration-form]").length&&b("[data-registration-form]").parsley().on("form:success",(function(){b("[data-fancy-modal=registration]").addClass("success")})),b("[data-contact-form]").length&&b("[data-contact-form]").parsley().on("form:success",(function(){b.fancybox.open(b("[data-fancy-modal=response]"))})),b("[data-contact-form2]").length&&b("[data-contact-form2]").parsley().on("form:success",(function(){b.fancybox.open(b("[data-fancy-modal=response2]"))})),b("[data-subscribe-form]").length&&b("[data-subscribe-form]").parsley().on("form:success",(function(){b.fancybox.open(b("[data-fancy-modal=subscribe-response]"))})),b("[data-ask-form]").length&&b("[data-ask-form]").parsley().on("form:success",(function(){b("[data-fancy-modal=ask]").addClass("success")})),b("[data-promocode-form]").length&&b("[data-promocode-form]").parsley().on("form:success",(function(){b("[data-promocode-code]").text(b("[data-promo-input]").val()),b("[data-promocode]").addClass("success"),b("[data-promocode-back]").on("click",(function(){b("[data-promocode]").removeClass("success")}))})),b("[data-profile-form]").length&&b("[data-profile-form]").parsley().on("form:success",(function(){b("[data-fancy-modal=profile]").addClass("success"),document.querySelectorAll("[data-profile-input]").forEach((function(t){var e=t.getAttribute("data-profile-input"),a=document.querySelector('[data-profile="'.concat(e,'"]')),o=a.closest("[data-profile-row]");t.value.length<1?a&&o.remove():a.innerText=t.value}))})),b("[data-edit-company-form]").length&&b("[data-edit-company-form]").parsley().on("form:success",(function(){b("[data-fancy-modal=edit-company]").addClass("success"),document.querySelector("[data-edit-company-form]").querySelectorAll("[data-company-input]").forEach((function(t){var e=t.getAttribute("data-company-input"),a=t.closest("[data-edit-company-form]").getAttribute("data-edit-company-form"),o=document.querySelector('[data-company-info="'.concat(a,'"]')).querySelector('[data-company="'.concat(e,'"]'));t.value.length>0&&(o.innerText=t.value)}))})),b("[data-add-company-form]").length&&b("[data-add-company-form]").parsley().on("form:success",(function(){b("[data-fancy-modal=add-company]").addClass("success");var t=document.querySelector("[data-add-company-form]"),e=document.querySelectorAll("[data-company-info]");document.querySelector("[data-companies-list]").insertAdjacentHTML("beforeend",'<li class="companies-item ac"><button class="companies-item__button ac-trigger">\n\t\t\t\t\t\t\t\t\t<div class=companies-item__col>\n\t\t\t\t\t\t\t\t\t\t<div class=companies-item__ttl>'.concat(t.querySelector("[data-company-input=name]").value,'</div>\n\t\t\t\t\t\t\t\t\t\t<div class=companies-item__note>Контрагент</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=companies-item__status><svg class=status-svg width=24 height=24 viewBox="0 0 24 24" fill=none xmlns=http://www.w3.org/2000/svg>\n\t\t\t\t\t\t\t\t\t\t\t<path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" fill=#F8C478></path>\n\t\t\t\t\t\t\t\t\t\t\t<path d="M15.7099 15.18L12.6099 13.33C12.0699 13.01 11.6299 12.24 11.6299 11.61V7.51001" stroke=black stroke-width=1.5 stroke-linecap=round stroke-linejoin=round></path>\n\t\t\t\t\t\t\t\t\t\t</svg><span>На проверке</span></div>\n                    <svg class=companies-item__arrow width=32 height=32 viewBox="0 0 32 32" fill=none xmlns=http://www.w3.org/2000/svg>\n\t\t\t\t\t\t\t\t\t\t<path d="M26.5599 11.8799L17.8666 20.5732C16.8399 21.5999 15.1599 21.5999 14.1333 20.5732L5.43994 11.8799" stroke=black stroke-width=2 stroke-miterlimit=10 stroke-linecap=round stroke-linejoin=round></path>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<div class=ac-panel>\n\t\t\t\t\t\t\t\t\t<div class=companies-item__content data-company-info=').concat(e.length+1,">\n\t\t\t\t\t\t\t\t\t\t<ul class=companies-info>\n\t\t\t\t\t\t\t\t\t\t\t<li class=companies-info__item>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__title>Полное название юридического лица</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__value data-company=name>").concat(t.querySelector("[data-company-input=name]").value,"</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=companies-info__item>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__title>ИНН</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__value data-company=inn>").concat(t.querySelector("[data-company-input=inn]").value,"</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=companies-info__item>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__title>КПП</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__value data-company=kpp>").concat(t.querySelector("[data-company-input=kpp]").value,"</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=companies-info__item>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__title>Юридический адрес</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__value data-company=addr>").concat(t.querySelector("[data-company-input=addr]").value,"</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=companies-info__item>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__title>Контактное лицо</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__value data-company=contact>").concat(t.querySelector("[data-company-input=contact]").value,"</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=companies-info__item>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__title>e-mail</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__value data-company=mail>").concat(t.querySelector("[data-company-input=mail]").value,"</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=companies-info__item>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__title>Номер телефона</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__value data-company=tel>").concat(t.querySelector("[data-company-input=tel]").value,'</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul><button class=button data-fancy-button=edit-company><svg width=20 height=20 viewBox="0 0 20 20" fill=none xmlns=http://www.w3.org/2000/svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<path d="M9.16699 1.66666H7.50033C3.33366 1.66666 1.66699 3.33333 1.66699 7.5V12.5C1.66699 16.6667 3.33366 18.3333 7.50033 18.3333H12.5003C16.667 18.3333 18.3337 16.6667 18.3337 12.5V10.8333" stroke=black stroke-width=2 stroke-linecap=round stroke-linejoin=round></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path d="M13.3666 2.51666L6.7999 9.08333C6.5499 9.33333 6.2999 9.825 6.2499 10.1833L5.89157 12.6917C5.75823 13.6 6.3999 14.2333 7.30823 14.1083L9.81657 13.75C10.1666 13.7 10.6582 13.45 10.9166 13.2L17.4832 6.63333C18.6166 5.5 19.1499 4.18333 17.4832 2.51666C15.8166 0.849997 14.4999 1.38333 13.3666 2.51666Z" stroke=black stroke-width=2 stroke-miterlimit=10 stroke-linecap=round stroke-linejoin=round></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path d="M12.4248 3.45834C12.9831 5.45 14.5415 7.00834 16.5415 7.575" stroke=black stroke-width=2 stroke-miterlimit=10 stroke-linecap=round stroke-linejoin=round></path>\n\t\t\t\t\t\t\t\t\t\t\t</svg><span>Редактировать</span></button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>')),g()})),b("#order-form").length&&b("#order-form").parsley().on("form:success",(function(){b(".order-page").addClass("success")})),Inputmask({mask:"+7 (999) 999-99-99",showMaskOnHover:!1}).mask("[data-phone-input]"),window.Parsley.addValidator("string",{requirementType:"string",validateString:function(t){return!/[^a-zа-яё\s]/i.test(t)},messages:{ru:"Спецсимволы и цифры запрещены"}}),h(),w(),function(){var t=document.getElementById("catalog-search");if(t){var e=t.querySelector("[data-catalog-search-input]"),a=t.querySelector("[data-catalog-search-reset]");e.addEventListener("input",(function(){e.value.length>0?a.classList.add("show"):a.classList.remove("show")})),a.addEventListener("click",(function(){a.classList.remove("show")}))}}(),function(){var t=document.querySelector("[data-type=site-templ-path]");if(window.config={path:window.location.hostname&&"cloudmill.github.io"!==window.location.hostname?t?t.value:"/local/templates/main/":""},document.querySelector("#map"))try{ymaps.ready((function(){var t=new ymaps.Map("map",{center:[55.755864,37.617698],zoom:12,controls:[]},{searchControlProvider:"yandex#search"}),e=(ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),new ymaps.Placemark([55.755864,37.617698],{},{iconLayout:"default#image",iconImageHref:"assets/images/svg/placemark.svg",iconImageSize:[52,52],iconImageOffset:[-26,-26]}));t.geoObjects.add(e)}))}catch(t){console.error(t)}}(),function(){if(document.querySelector("[data-order-page]")){var t=document.querySelectorAll("[data-delivery-reset]");t.length>0&&t.forEach((function(t){t.addEventListener("click",(function(){document.querySelectorAll("input[type=radio]").forEach((function(t){t.checked=!1}))}))}));var e=document.querySelector("[data-order-address]"),a=document.querySelector("[data-delivery-block]");e&&e.addEventListener("focusout",(function(){e.value.length>1&&a.classList.remove("no-display")}));var o=document.querySelectorAll("[data-show-comment]"),n=document.querySelector("[data-comment-block]");o.forEach((function(t){t.addEventListener("click",(function(){n.classList.remove("no-display")}))}))}}(),function(){var t=document.getElementById("profile-menu");t&&(0,x.ZP)("[data-profile-menu]",{content:t.innerHTML,maxWidth:202,allowHTML:!0,arrow:!1,placement:"bottom-end",interactive:!0,trigger:"mouseenter click"});var e=document.getElementById("select-company");e&&(0,x.ZP)("[data-companies-select]",{content:e.innerHTML,maxWidth:200,allowHTML:!0,arrow:!1,placement:"bottom-start",interactive:!0,trigger:"mouseenter click"})}(),function(){var t=document.getElementById("seq-section");if(t){for(var e=[],a=1;a<89;a++)a<10?e.push("".concat(window.CONFIG.path,"assets/images/seq2/b_0000").concat(a,"-min.jpg")):e.push("".concat(window.CONFIG.path,"assets/images/seq2/b_000").concat(a,"-min.jpg"));var o={curImg:0},n=L.Q3.to(o,.5,{curImg:e.length-1,roundProps:"curImg",repeat:10,immediateRender:!0,ease:L.ZP.easeNone,onUpdate:function(){C("#seqimg").attr("src",e[o.curImg])}}),c=new T.Controller;new T.Scene({triggerElement:t,duration:2*document.documentElement.clientHeight,triggerHook:1}).setTween(n).addTo(c);var r=new _.b_,i=new _.b_,d=new _.b_,s=new _.b_,l=document.querySelector(".seq-bean-1"),u=document.querySelector(".seq-bean-2"),m=document.querySelector(".seq-bean-3"),f=document.querySelector(".seq-bean-4"),p=2*document.documentElement.clientHeight;r.add(L.Q3.fromTo(l,1,{y:"0%"},{y:"-80%",ease:"linear",immediateRender:!1})),new T.Scene({triggerElement:t,duration:p,triggerHook:1}).setTween(r).addTo(c),i.add(L.Q3.fromTo(u,1,{y:"0%"},{y:"-600%",ease:"linear",immediateRender:!1})),new T.Scene({triggerElement:t,duration:p,triggerHook:1}).setTween(i).addTo(c),d.add(L.Q3.fromTo(m,1,{y:"0%"},{y:"-500%",ease:"linear",immediateRender:!1})),new T.Scene({triggerElement:t,duration:p,triggerHook:1}).setTween(d).addTo(c),s.add(L.Q3.fromTo(f,1,{y:"0%"},{y:"-50%",ease:"linear",immediateRender:!1})),new T.Scene({triggerElement:t,duration:p,triggerHook:1}).setTween(s).addTo(c)}}(),function(){if(document.querySelector("[data-accordion]")){var t=new(j())("[data-accordion]");O("[data-add-company-form]").length&&O("[data-add-company-form]").parsley().on("form:success",(function(){setTimeout((function(){t.update()}))}))}}(),function(){var t=window.matchMedia("(min-width: 1024px)"),e=document.querySelector("[data-vert-img]"),a=document.querySelector("[data-vert-bottom]"),o=document.querySelector("[data-vert-text]"),n=document.querySelector("[data-vert-last]");if(t.matches&&e){var c=function(){var t=(document.documentElement.clientHeight-e.offsetHeight)/2;e.style.top="".concat(t,"px"),a.style.height="".concat(t,"px"),o.style.paddingBottom="".concat(e.offsetHeight/2-n.offsetHeight/2,"px")};c(),window.addEventListener("resize",(function(){c()}));var r=new T.Controller({refreshInterval:1}),i=new _.b_,d=new _.b_,s=new _.b_,l=document.querySelector("[data-vertical-sl]"),u=document.querySelector("[data-vertical-img-1]"),m=document.querySelector("[data-vertical-img-2]"),f=document.querySelector("[data-triangle-1]"),p=document.querySelector("[data-triangle-2]"),y=l.offsetHeight;i.add(L.Q3.fromTo(u,2,{y:"0%"},{y:"-100%",ease:"slow",immediateRender:!1})),i.add(L.Q3.fromTo(m,2,{y:"0%"},{y:"-200%",ease:"slow",immediateRender:!1})),new T.Scene({triggerElement:l,duration:l.offsetHeight/2,triggerHook:0}).setTween(i).addTo(r),d.add(L.Q3.fromTo(f,1,{rotate:"0deg"},{rotate:"90deg",immediateRender:!1})),new T.Scene({triggerElement:l,duration:y,triggerHook:.5}).setTween(d).addTo(r),s.add(L.Q3.fromTo(p,1,{rotate:"90deg"},{rotate:"180deg",immediateRender:!1})),new T.Scene({triggerElement:l,duration:y,triggerHook:.5}).setTween(s).addTo(r)}}();["useful","delivery","delivery-opts","delivery-opts2","del-points"].forEach((function(t){return function(t){var e=document.querySelector('[data-tabs-panel="'.concat(t,'"]')),a=document.querySelector('[data-tabs-container="'.concat(t,'"]'));null==e||e.addEventListener("click",(function(o){if(o.target.closest("[data-tab]")){if("useful"==t)o.target.closest("[data-tab]").classList.toggle("active");else{var n=e.querySelector("[data-tab].active");null==n||n.classList.remove("active"),o.target.closest("[data-tab]").classList.add("active")}if(a){var c=o.target.closest("[data-tab]").getAttribute("data-tab");a.querySelector("[data-tab-content].active").classList.remove("active"),a.querySelector('[data-tab-content="'.concat(c,'"]')).classList.add("active")}}}))}(t)}));var t=document.querySelector("[data-tabs-filters]"),e=document.querySelector("[data-tabs-reset]");e&&(t.addEventListener("click",(function(){setTimeout((function(){t.querySelector("[data-tab].active")?e.classList.remove("disabled"):e.classList.add("disabled")}))})),e.addEventListener("click",(function(){t.querySelectorAll("[data-tab]").forEach((function(t){t.classList.remove("active")})),e.classList.add("disabled")})))})),window.addEventListener("load",(function(){document.querySelector(".body").classList.remove("no-transition"),document.querySelector(".plug-page")&&(document.querySelector(".plug-page__logo").classList.add("loaded"),setTimeout((function(){document.querySelector(".plug-page__top").classList.add("loaded"),document.querySelector(".plug-page__bottom").classList.add("loaded"),document.querySelector(".plug-page__spin").classList.add("start")}),400)),o();var t=document.querySelector("[data-main-video]");t&&t.play(),k().init({once:!0,offset:0,duration:500})}))}},a={};function o(t){var n=a[t];if(void 0!==n)return n.exports;var c=a[t]={exports:{}};return e[t].call(c.exports,c,c.exports,o),c.exports}o.m=e,t=[],o.O=(e,a,n,c)=>{if(!a){var r=1/0;for(l=0;l<t.length;l++){for(var[a,n,c]=t[l],i=!0,d=0;d<a.length;d++)(!1&c||r>=c)&&Object.keys(o.O).every((t=>o.O[t](a[d])))?a.splice(d--,1):(i=!1,c<r&&(r=c));if(i){t.splice(l--,1);var s=n();void 0!==s&&(e=s)}}return e}c=c||0;for(var l=t.length;l>0&&t[l-1][2]>c;l--)t[l]=t[l-1];t[l]=[a,n,c]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={143:0};o.O.j=e=>0===t[e];var e=(e,a)=>{var n,c,[r,i,d]=a,s=0;if(r.some((e=>0!==t[e]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(d)var l=d(o)}for(e&&e(a);s<r.length;s++)c=r[s],o.o(t,c)&&t[c]&&t[c][0](),t[r[s]]=0;return o.O(l)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))})();var n=o.O(void 0,[942],(()=>o(680)));n=o.O(n)})();