(()=>{"use strict";var t,e={356:(t,e,a)=>{function o(){document.querySelectorAll("[data-counter]").forEach((function(t){1==Number(t.querySelector("[data-сounter-num]").innerHTML)?t.querySelector("[data-counter-minus]").classList.add("disabled"):t.querySelector("[data-counter-minus]").classList.remove("disabled"),t.addEventListener("click",n)}))}function n(t){var e=t.target.closest("[data-counter]"),a=e.querySelector("[data-сounter-num]"),o=e.getAttribute("data-counter"),n=(document.querySelectorAll('[data-сounter-num="'.concat(o,'"]')),Number(a.innerHTML));t.target.closest("[data-counter-minus]")&&n>0?(2==n&&e.querySelector("[data-counter-minus]").classList.add("disabled"),a.innerHTML=n-1):t.target.closest("[data-counter-plus]")&&(1==n&&e.querySelector("[data-counter-minus]").classList.remove("disabled"),a.innerHTML=n+1)}a.d(e,{a:()=>P});a(917);var c=a(597),r=a(638);function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l={closeExisting:!0,touch:!1,hideScrollbar:!1,autoFocus:!1,baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-stage"></div></div>',animationEffect:"zoom",animationDuration:400,afterShow:function(t,e){r(e.src).closest(".fancybox-container").addClass("open")},beforeClose:function(t,e){r(e.src).closest(".fancybox-container").removeClass("open")},btnTpl:{smallBtn:'<button type="button" data-fancybox-close="" class="fancybox-button fancybox-close-small" title="Close"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.75781 4.75732L13.2431 13.2426" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.75691 13.2426L13.2422 4.75732" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'}};function u(){r("[data-fancy-button]").on("click",(function(t){var e=s({},l),a=r(this).data("fancy-button");"cart"!==a&&t.preventDefault();var o=r('[data-fancy-modal="'.concat(a,'"]'));switch(a){case"service":r("[data-service-modal-ttl]").text("".concat(r(this).data("service-ttl"))),e.beforeClose=function(){setTimeout((function(){r("[data-fancy-modal=service]").removeClass("success")}),500)};break;case"cart":e.beforeShow=function(){r.fancybox.close(o)};break;case"profile":e.beforeClose=function(){setTimeout((function(){r("[data-fancy-modal=profile]").removeClass("success")}),500)},document.querySelectorAll("[data-profile]").forEach((function(t){var e=t.getAttribute("data-profile"),a=document.querySelectorAll('[data-profile-input="'.concat(e,'"]'));a.length&&a.forEach((function(e){e.value=t.innerText}))}));break;case"edit-company":var n=t.target.closest("[data-company-info]").querySelectorAll("[data-company]"),c=t.target.closest("[data-company-info]").getAttribute("data-company-info"),i=document.querySelector("[data-edit-company-form]");document.querySelector("[data-edit-company-form]").setAttribute("data-edit-company-form","".concat(c)),n.forEach((function(t){var e=t.getAttribute("data-company"),a=i.querySelectorAll('[data-company-input="'.concat(e,'"]'));a.length&&a.forEach((function(e){e.value=t.innerText}))})),e.beforeClose=function(){setTimeout((function(){r("[data-fancy-modal=edit-company]").removeClass("success"),document.querySelector("[data-edit-company-form]").setAttribute("data-edit-company-form",""),document.querySelector("[data-edit-company-form]").reset()}),500)};break;case"add-company":e.beforeClose=function(){setTimeout((function(){r("[data-fancy-modal=add-company]").removeClass("success")}),500)};break;case"registration":e.beforeClose=function(){setTimeout((function(){r("[data-fancy-modal=registration]").removeClass("success")}),500)};break;case"ask":e.beforeClose=function(){setTimeout((function(){r("[data-fancy-modal=ask]").removeClass("success")}),500)}}r.fancybox.defaults=s(s({},r.fancybox.defaults),e),"menu"!==a&&r.fancybox.open(o)})),r('[data-fancy-button="cart"]').on("mouseenter",(function(t){var e=s({},l);t.preventDefault();var a=r(this).data("fancy-button"),o=r('[data-fancy-modal="'.concat(a,'"]'));e.baseTpl='<div class="fancybox-container down" role="dialog" tabindex="-1"><div class="fancybox-bg light"></div><div class="fancybox-stage"></div></div>',e.animationEffect="right",e.afterShow=function(){r(".fancybox-slide").on("mouseover",(function(t){t.target.closest(".cart-modal")||r.fancybox.close(o)}))},r.fancybox.defaults=s(s({},r.fancybox.defaults),e),r.fancybox.open(o)}))}u(),r((function(){r("[data-fancy-button=menu]").on("click",(function(t){var e=s({},l);t.preventDefault(),e.baseTpl='<div class="fancybox-container down" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-stage"></div></div>',r.fancybox.defaults=s(s({},r.fancybox.defaults),e),r(".body").hasClass("fancybox-active")?(r.fancybox.close(r('[data-fancy-modal="menu"]')),r("[data-fancy-button=menu]").removeClass("active")):(r.fancybox.open(r('[data-fancy-modal="menu"]')),r("[data-fancy-button=menu]").addClass("active"))}))})),r((function(){var t=r("[data-fancy-modal=lk]");if(t){var e=s({},l);r.fancybox.defaults=s(s({},r.fancybox.defaults),e),r.fancybox.open(t)}})),c.KR.bind("[data-fancybox]",{Toolbar:!1,animated:!1,Carousel:{Navigation:{prevTpl:'<svg class="catalog-slider-control" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="30" transform="matrix(-1 0 0 1 30 30)" fill="white"/><path d="M33.09 37.9201L26.57 31.4001C25.8 30.6301 25.8 29.3701 26.57 28.6001L33.09 22.0801" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',nextTpl:'<svg class="catalog-slider-control" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" fill="white"/><path d="M26.9099 37.9201L33.4299 31.4001C34.1999 30.6301 34.1999 29.3701 33.4299 28.6001L26.9099 22.0801" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'}}});a(563);var m=a(419),f=a.n(m),p=a(638);function y(){var t=document.querySelectorAll("[data-input]");t.length&&t.forEach((function(t){t.oninput=function(){this.value?this.classList.add("active"):this.classList.remove("active")}}))}function v(){var t=document.querySelector("[data-promo-input]"),e=document.querySelector("[data-promo-button]");t&&t.addEventListener("input",(function(){t.value.length>0?e.classList.remove("disabled"):e.classList.add("disabled")}))}var b=a(948),g=a.n(b),h=a(638);function w(){if(document.querySelector("[data-accordion]")){var t=new(g())("[data-accordion]");h("[data-add-company-form]").length&&h("[data-add-company-form]").parsley().on("form:success",(function(){setTimeout((function(){t.update()}))}))}}var S=a(145);a(527);function k(){var t=document.getElementById("profile-menu");t&&(0,S.ZP)("[data-profile-menu]",{content:t.innerHTML,maxWidth:202,allowHTML:!0,arrow:!1,placement:"bottom-end",interactive:!0,trigger:"mouseenter click"});var e=document.getElementById("select-company");e&&(0,S.ZP)("[data-companies-select]",{content:e.innerHTML,maxWidth:200,allowHTML:!0,arrow:!1,placement:"bottom-start",interactive:!0,trigger:"mouseenter click"})}var q=a(638);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function T(t){q("[data-replace]").each((function(e,a){var o=q(a),n=o.data("replace"),c=q(t).filter("[data-replace=".concat(n,"]"));c.length||(c=q(t).find("[data-replace=".concat(n,"]"))),o.empty(),o.append(c.html())})),P()}q((function(){q("[data-type=form-backend]").on("submit",(function(t){t.preventDefault();var e=q(this),a={},o="json";"edit-company"!==e.data("form")&&"add-company"!==e.data("form")||(o="html"),e.find("[data-get-field]").each((function(t,e){var o=q(e),n=o.data("field");a[n]=o.val()})),q.ajax({method:"post",url:e.attr("action"),data:a,dataType:o,success:function(t){"json"===o?(console.log(t),t.success?t.redirect?location=t.redirect:window.formSuccess.exec(e.data("form"),e):alert(t.message)):window.formSuccess.exec(e.data("form"),e,t)}})})),q(document).on("click","[btn-show-more]",(function(){var t=q(this),e=t.closest("[data-parent-container-list]"),a=e.data("parent-container-list"),n=e.find("[data-type=backend-list]"),c=t.closest("[data-parent-container-btn]"),r=c.data("parent-container-btn"),i=t.closest("[btn-show-more]").attr("data-url");t.remove(),void 0!==i&&q.ajax({type:"GET",url:i,dataType:"html",success:function(t){var e=q(t).find("[data-parent-container-list=".concat(a,"]")).find("[data-type=backend-item]"),i=q(t).find("[data-parent-container-btn=".concat(r,"]")).find("[btn-show-more]");n.append(e),c.append(i),o()}})})),q(document).on("click","[data-type=filter-click]",(function(){var t=q(this);window.filters.getData[t.data("get-type")](t.data("field"),t.data("val")),console.log("filters data"),console.log(Object.values(window.filters.data.filters)),q.ajax({type:"GET",url:window.location.href,dataType:"html",data:window.filters.data,success:function(t){var e=q(t).find("[data-container=items]");q("[data-container=items]").replaceWith(e)}})})),q(document).on("click","[data-type=filter-click-reset]",(function(){window.filters.data.filters={},q.ajax({type:"GET",data:window.filters.data,href:"",dataType:"html",success:function(t){var e=q(t).find("[data-container=items]");q("[data-container=items]").replaceWith(e)}})})),function(){var t=window.location.pathname.split("/")[1];"cart"===t&&document.querySelector("[data-total-count-back]")&&(document.querySelector("[data-total-count-back]").innerText=document.querySelectorAll("div.product-card[data-product-incart]").length);if("catalog"===t){var e=new URL(document.location).searchParams.get("search");e&&(document.querySelector("[data-catalog-search-input]").value=e,document.querySelector("[data-catalog-search-reset]").classList.add("show"))}q(document).on("click",'[data-backend="btn-cart"]',(function(t){var e=q(this),a=e.data("id"),o=Number(document.querySelector('[data-сounter-num="'.concat(a,'"]')).innerText),n=e.data("ajax-location");e.css("pointer-events","none"),o>=1&&q.ajax({type:"get",url:n,dataType:"html",data:{items:{id:a,count:o},url:window.location.pathname},success:function(t){T(t),e.css("pointer-events","auto")}})})),q(document).on("click",'[data-backend="incart-btn-cart"]',(function(t){t.preventDefault();var e,a=q(this),n=a.data("id"),c=a.data("action"),r=0,i={};switch(c){case"del":document.querySelectorAll('[data-product-incart="'.concat(n,'"]')).forEach((function(t){t.remove()})),document.querySelector('[data-result-product="'.concat(n,'"]'))&&document.querySelector('[data-result-product="'.concat(n,'"]')).remove(),document.querySelector("[data-product-incart]")?(document.querySelector("[data-total-count-back]").innerText=document.querySelectorAll("div.product-card[data-product-incart]").length,i={items:{id:n,action:c}},e=!1):(i={items:{id:n,action:c,last_element:"true"}},e=!0,q("[data-cart-title]").remove(),q("[data-cart-body]").remove(),q("[data-cart-empty-title]").css("display",""),q("[data-cart-empty-body]").css("display",""));break;case"append":case"sub":r=Number(document.querySelector('[data-сounter-num="'.concat(n,'"]')).innerText),o(),i={items:{id:n,count:r,action:c}};break;case"addPromo":i={items:{promo:document.querySelector("[data-promo-input]").value,action:c}};break;case"delPromo":document.querySelector("[data-promocode-backend]").classList.remove("success"),i={items:{action:c}}}a.css("pointer-events","none"),q("[data-checkout-btn-backend]").css("pointer-events","none"),q.ajax({type:"POST",url:"/cart/",dataType:"text",data:i,success:function(t){e||(a.css("pointer-events","auto"),q("[data-checkout-btn-backend]").css("pointer-events","auto"),q("[data-cart-result]").replaceWith(t),y(),v())}})}))}(),q(document).on("click","[data-auth-id]",(function(t){t.preventDefault();var e=q(this),a=e.data("ajax-location"),o=e.data("auth-id");e.css("pointer-events","none"),q.ajax({type:"POST",url:a,dataType:"json",data:{"auth-id":o},success:function(t){t.success?document.location.reload():alert(t.message)}})})),q(document).on("click","[data-type=basket]",(function(){var t=q(this),e=t.data("event-type"),a=t.data("url");q.ajax({type:"GET",url:a||"".concat(window.config.path,"/include/ajax/basket/").concat(e,".php"),data:t.data("params"),success:function(a){"object"===x(a)?window.basket.eventsCallable[a.success?"success":"error"][e](t,a):T(a)}})})),q(document).on("submit","[data-type=form-ajax]",(function(t){t.preventDefault();var e=q(this),a=e.attr("method"),o=e.attr("action"),n=e[0].querySelector("[data-file-input]"),c=n?n.appFile.files:[],r=c.length?new FormData:{};e.find("[data-type=get-field], input:checked[data-field]").each((function(){var t=q(this).val();if(t){var e=q(this).data("field");c.length?r.append(e,t):r[e]=t}})),q.each(c,(function(t,e){r.append("files[]",e)})),q.ajax({type:a||"POST",url:o||"".concat(window.config.path,"/include/ajax/forms/index.php"),data:r,contentType:!c.length&&"application/x-www-form-urlencoded; charset=UTF-8",processData:!c.length,success:function(t){if("object"!==x(t)||t.success){var a=e.data("func");"object"===x(a)?q.each(a,(function(a,o){window.objFormSuccess[o](e,t)})):window.objFormSuccess[a](e,t)}else{var o=e.data("func-error");o?window.objFormErrors[o](e,t):alert(t.message)}}})})),q("#order-form").on("submit",(function(t){t.preventDefault();var e=q(this),a={};e.find("[data-get-field]").each((function(t,e){a[q(e).attr("name")]=q(e).val()})),q.ajax({method:"post",url:e.attr("action"),data:a,dataType:"json",success:function(t){q("[data-order-page]").addClass("success"),q("[data-invoice]").attr("href",t.urlInvoice),q("[data-order-number]").html(t.numberOrder),q("[data-name-contact]").html(a.name),q("[data-address-delivery]").html(a.city),q("[data-delivery]").html(a.address),q("[data-comment-order]").html(a.comment)}})}))})),window.objFormSuccess={promo:function(t,e){T(e)}},window.objFormErrors={promo:function(t,e){alert(e)}},window.basket={eventsCallable:{success:{},error:{add:function(t,e){alert(e.message)},update:function(t,e){alert(e.message)},delete:function(t,e){alert(e.message)}}}},window.formSuccess={exec:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;switch(t){case"subscribe":case"contact":case"contact2":window.formSuccess.openFancybox(t);break;case"profile":window.formSuccess.profileForm();break;case"edit-company":case"add-company":window.formSuccess.addClass(e),window.formSuccess.replaceCompaniesContainer(a),w(),u(),k();break;default:window.formSuccess.addClass(e)}},addClass:function(t){t?(t.closest("[data-fancy-modal]").addClass("success"),"recovery"===t.attr("data-form")&&(q("[data-recovery-result]").text(q("[data-input-recovery]").val()),t.reset())):alert("Ошибка заполнения формы")},profileForm:function(){q("[data-fancy-modal=profile]").addClass("success"),document.querySelectorAll("[data-profile-input]").forEach((function(t){var e=t.getAttribute("data-profile-input"),a=document.querySelector('[data-profile="'.concat(e,'"]')),o=a.closest("[data-profile-row]");console.log(t.value),t.value.length<1?a&&o.remove():a.innerText=t.value}))},replaceCompaniesContainer:function(t){q("[data-companies-container]").replaceWith(t)},openFancybox:function(t){switch(t){case"subscribe":q.fancybox.open(q("[data-fancy-modal=subscribe-response]"));break;case"contact":q.fancybox.open(q("[data-fancy-modal=response]"));break;case"contact2":q.fancybox.open(q("[data-fancy-modal=response2]"))}}},window.filters={data:{filters:{},ajax:"filter"},getData:{one:function(t,e){e&&!window.filters.data.filters[t]||delete window.filters.data.filters[t],window.filters.data.filters[t]=e},many:function(t,e){window.filters.data.filters[t]||(window.filters.data.filters[t]={}),window.filters.data.filters[t][e]?(delete window.filters.data.filters[t][e],Object.keys(window.filters.data.filters[t]).length||delete window.filters.data.filters[t]):window.filters.data.filters[t][e]=e}}};var L=a(566),_=a.n(L);var E=a(412),C=a(371),j=a(369),A=a(383),O=a(638);function P(){document.querySelectorAll("[data-active-items]").forEach((function(t){var e=Number(t.getAttribute("data-active-items"));t.querySelectorAll("[data-count-item]").forEach((function(t,a){a<e&&t.classList.add("active")}))}))}(0,A.ScrollMagicPluginGsap)(E,C.Q3),window.CONFIG=window.location.hostname&&"localhost"!==window.location.hostname&&"cloudmill.github.io"!==window.location.hostname?{path:"/local/templates/main/",debug:!0}:{path:"./",debug:!0},document.addEventListener("DOMContentLoaded",(function(){!function(){var t=document.querySelector("[data-preloader]");if(t){var e=function(){document.querySelector("[data-show-1]").classList.remove("no-opacity"),setTimeout((function(){document.querySelectorAll("[data-show-2]").forEach((function(t){t.classList.remove("no-opacity")}))}),300),setTimeout((function(){document.querySelector("[data-show-3]").classList.remove("no-opacity")}),600),setTimeout((function(){document.querySelector("[data-show-1]").classList.remove("transition"),document.querySelector("[data-show-3]").classList.remove("transition"),document.querySelectorAll("[data-show-2]").forEach((function(t){t.classList.remove("transition")}))}),900)};window.scrollTo(0,0),setTimeout((function(){"complete"===document.readyState?(t.classList.add("close"),setTimeout((function(){t.remove(),e()}),800)):(document.querySelector("[data-preloader-beans]").classList.add("rotating"),window.addEventListener("load",(function(){t.classList.add("close"),setTimeout((function(){t.remove(),e()}),800)})))}),1e3)}else document.querySelector("[data-show-1]").classList.remove("no-opacity"),document.querySelector("[data-show-1]").classList.remove("transition")}(),p("form").parsley(),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Спецсимволы запрещены"},notblank:"Это поле должно быть заполнено",required:"Заполните поле",pattern:"Это значение некорректно",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Это значение должно содержать не менее %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Это значение должно совпадать"}),Parsley.setLocale("ru"),Parsley.addValidator("telLength",{requirementType:"number",validateString:function(t,e){return t.replace(/\D/g,"").length===e},messages:{ru:"Телефон введён не полностью"}}),document.querySelectorAll("[data-parsley-validate]").forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault(),t.hasAttribute("data-promocode-form")||"profile"===t.getAttribute("data-form")||"recovery"===t.getAttribute("data-form")||(t.reset(),t.querySelectorAll("[data-input]").forEach((function(t){t.classList.remove("active")})))}))})),p("[data-service-form]").length&&p("[data-service-form]").parsley().on("form:success",(function(){p("[data-fancy-modal=service]").addClass("success")})),p("[data-recovery-form]").length&&p("[data-recovery-form]").parsley().on("form:success",(function(){p("[data-recovery-result]").text(p("[data-input-recovery]").val()),p("[data-fancy-modal=recovery]").addClass("success")})),p("[data-registration-form]").length&&p("[data-registration-form]").parsley().on("form:success",(function(){p("[data-fancy-modal=registration]").addClass("success")})),p("[data-contact-form]").length&&p("[data-contact-form]").parsley().on("form:success",(function(){p.fancybox.open(p("[data-fancy-modal=response]"))})),p("[data-contact-form2]").length&&p("[data-contact-form2]").parsley().on("form:success",(function(){p.fancybox.open(p("[data-fancy-modal=response2]"))})),p("[data-subscribe-form]").length&&p("[data-subscribe-form]").parsley().on("form:success",(function(){p.fancybox.open(p("[data-fancy-modal=subscribe-response]"))})),p("[data-ask-form]").length&&p("[data-ask-form]").parsley().on("form:success",(function(){p("[data-fancy-modal=ask]").addClass("success")})),p("[data-promocode-form]").length&&p("[data-promocode-form]").parsley().on("form:success",(function(){p("[data-promocode-code]").text(p("[data-promo-input]").val()),p("[data-promocode]").addClass("success"),p("[data-promocode-back]").on("click",(function(){p("[data-promocode]").removeClass("success")}))})),p("[data-profile-form]").length&&p("[data-profile-form]").parsley().on("form:success",(function(){p("[data-fancy-modal=profile]").addClass("success"),document.querySelectorAll("[data-profile-input]").forEach((function(t){var e=t.getAttribute("data-profile-input"),a=document.querySelector('[data-profile="'.concat(e,'"]')),o=a.closest("[data-profile-row]");t.value.length<1?a&&o.remove():a.innerText=t.value}))})),p("[data-edit-company-form]").length&&p("[data-edit-company-form]").parsley().on("form:success",(function(){p("[data-fancy-modal=edit-company]").addClass("success"),document.querySelector("[data-edit-company-form]").querySelectorAll("[data-company-input]").forEach((function(t){var e=t.getAttribute("data-company-input"),a=t.closest("[data-edit-company-form]").getAttribute("data-edit-company-form"),o=document.querySelector('[data-company-info="'.concat(a,'"]')).querySelector('[data-company="'.concat(e,'"]'));t.value.length>0&&(o.innerText=t.value)}))})),p("[data-add-company-form]").length&&p("[data-add-company-form]").parsley().on("form:success",(function(){p("[data-fancy-modal=add-company]").addClass("success");var t=document.querySelector("[data-add-company-form]"),e=document.querySelectorAll("[data-company-info]");document.querySelector("[data-companies-list]").insertAdjacentHTML("beforeend",'<li class="companies-item ac"><button class="companies-item__button ac-trigger">\n\t\t\t\t\t\t\t\t\t<div class=companies-item__col>\n\t\t\t\t\t\t\t\t\t\t<div class=companies-item__ttl>'.concat(t.querySelector("[data-company-input=name]").value,'</div>\n\t\t\t\t\t\t\t\t\t\t<div class=companies-item__note>Контрагент</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=companies-item__status><svg class=status-svg width=24 height=24 viewBox="0 0 24 24" fill=none xmlns=http://www.w3.org/2000/svg>\n\t\t\t\t\t\t\t\t\t\t\t<path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" fill=#F8C478></path>\n\t\t\t\t\t\t\t\t\t\t\t<path d="M15.7099 15.18L12.6099 13.33C12.0699 13.01 11.6299 12.24 11.6299 11.61V7.51001" stroke=black stroke-width=1.5 stroke-linecap=round stroke-linejoin=round></path>\n\t\t\t\t\t\t\t\t\t\t</svg><span>На проверке</span></div>\n                    <svg class=companies-item__arrow width=32 height=32 viewBox="0 0 32 32" fill=none xmlns=http://www.w3.org/2000/svg>\n\t\t\t\t\t\t\t\t\t\t<path d="M26.5599 11.8799L17.8666 20.5732C16.8399 21.5999 15.1599 21.5999 14.1333 20.5732L5.43994 11.8799" stroke=black stroke-width=2 stroke-miterlimit=10 stroke-linecap=round stroke-linejoin=round></path>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<div class=ac-panel>\n\t\t\t\t\t\t\t\t\t<div class=companies-item__content data-company-info=').concat(e.length+1,">\n\t\t\t\t\t\t\t\t\t\t<ul class=companies-info>\n\t\t\t\t\t\t\t\t\t\t\t<li class=companies-info__item>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__title>Полное название юридического лица</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__value data-company=name>").concat(t.querySelector("[data-company-input=name]").value,"</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=companies-info__item>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__title>ИНН</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__value data-company=inn>").concat(t.querySelector("[data-company-input=inn]").value,"</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=companies-info__item>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__title>КПП</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__value data-company=kpp>").concat(t.querySelector("[data-company-input=kpp]").value,"</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=companies-info__item>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__title>Юридический адрес</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__value data-company=addr>").concat(t.querySelector("[data-company-input=addr]").value,"</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=companies-info__item>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__title>Контактное лицо</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__value data-company=contact>").concat(t.querySelector("[data-company-input=contact]").value,"</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=companies-info__item>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__title>e-mail</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__value data-company=mail>").concat(t.querySelector("[data-company-input=mail]").value,"</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=companies-info__item>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__title>Номер телефона</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=companies-info__value data-company=tel>").concat(t.querySelector("[data-company-input=tel]").value,"</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>"))})),p("#order-form").length&&p("#order-form").parsley().on("form:success",(function(){})),f()({mask:"+7 (999) 999-99-99",showMaskOnHover:!1}).mask("[data-phone-input]"),f()({regex:"^[а-яА-Яё ]+$"}).mask("[data-alphanum]"),f()({regex:"^[0-9]+$"}).mask("[data-number]"),f()({regex:"[а-яА-Яё]+ [а-яА-Яё]+ [а-яА-Яё]+"}).mask("[data-fio]"),window.Parsley.addValidator("string",{requirementType:"string",validateString:function(t){return!/[^a-zа-яё\s]/i.test(t)},messages:{ru:"Спецсимволы и цифры запрещены"}}),y(),v(),function(){var t=document.getElementById("catalog-search");if(t){var e=t.querySelector("[data-catalog-search-input]"),a=t.querySelector("[data-catalog-search-reset]");e.addEventListener("input",(function(){e.value.length>0?a.classList.add("show"):a.classList.remove("show")})),a.addEventListener("click",(function(){a.classList.remove("show")}))}}(),function(){var t=document.querySelector("[data-type=site-templ-path]");if(window.config={path:window.location.hostname&&"cloudmill.github.io"!==window.location.hostname?t?t.value:"/local/templates/main/":""},document.querySelector("#map"))try{ymaps.ready((function(){var t=new ymaps.Map("map",{center:[55.755864,37.617698],zoom:12,controls:[]},{searchControlProvider:"yandex#search"}),e=(ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),new ymaps.Placemark([55.755864,37.617698],{},{iconLayout:"default#image",iconImageHref:"assets/images/svg/placemark.svg",iconImageSize:[52,52],iconImageOffset:[-26,-26]}));t.geoObjects.add(e)}))}catch(t){console.error(t)}}(),function(){if(document.querySelector("[data-order-page]")){var t=document.querySelectorAll("[data-delivery-reset]");t.length>0&&t.forEach((function(t){t.addEventListener("click",(function(){document.querySelectorAll("input[type=radio]").forEach((function(t){t.checked=!1}))}))}));var e=document.querySelector("[data-order-address]"),a=document.querySelector("[data-delivery-block]");e&&e.addEventListener("focusout",(function(){e.value.length>1&&a.classList.remove("no-display")}));var o=document.querySelectorAll("[data-show-comment]"),n=document.querySelector("[data-comment-block]");o.forEach((function(t){t.addEventListener("click",(function(){n.classList.remove("no-display")}))}))}}(),k(),function(){var t=document.getElementById("seq-section");if(t){for(var e=[],a=1;a<89;a++)a<10?e.push("".concat(window.CONFIG.path,"assets/images/seq2/b_0000").concat(a,"-min.jpg")):e.push("".concat(window.CONFIG.path,"assets/images/seq2/b_000").concat(a,"-min.jpg"));var o={curImg:0},n=C.Q3.to(o,.5,{curImg:e.length-1,roundProps:"curImg",repeat:10,immediateRender:!0,ease:C.ZP.easeNone,onUpdate:function(){O("#seqimg").attr("src",e[o.curImg])}}),c=new E.Controller;new E.Scene({triggerElement:t,duration:2*document.documentElement.clientHeight,triggerHook:1}).setTween(n).addTo(c);var r=new j.b_,i=new j.b_,s=new j.b_,d=new j.b_,l=document.querySelector(".seq-bean-1"),u=document.querySelector(".seq-bean-2"),m=document.querySelector(".seq-bean-3"),f=document.querySelector(".seq-bean-4"),p=2*document.documentElement.clientHeight;r.add(C.Q3.fromTo(l,1,{y:"0%"},{y:"-80%",ease:"linear",immediateRender:!1})),new E.Scene({triggerElement:t,duration:p,triggerHook:1}).setTween(r).addTo(c),i.add(C.Q3.fromTo(u,1,{y:"0%"},{y:"-600%",ease:"linear",immediateRender:!1})),new E.Scene({triggerElement:t,duration:p,triggerHook:1}).setTween(i).addTo(c),s.add(C.Q3.fromTo(m,1,{y:"0%"},{y:"-500%",ease:"linear",immediateRender:!1})),new E.Scene({triggerElement:t,duration:p,triggerHook:1}).setTween(s).addTo(c),d.add(C.Q3.fromTo(f,1,{y:"0%"},{y:"-50%",ease:"linear",immediateRender:!1})),new E.Scene({triggerElement:t,duration:p,triggerHook:1}).setTween(d).addTo(c)}}(),w(),function(){var t=window.matchMedia("(min-width: 1024px)"),e=document.querySelector("[data-vert-img]"),a=document.querySelector("[data-vert-bottom]"),o=document.querySelector("[data-vert-text]"),n=document.querySelector("[data-vert-last]");if(t.matches&&e){var c=function(){var t=(document.documentElement.clientHeight-e.offsetHeight)/2;e.style.top="".concat(t,"px"),a.style.height="".concat(t,"px"),o.style.paddingBottom="".concat(e.offsetHeight/2-n.offsetHeight/2,"px")};c(),window.addEventListener("resize",(function(){c()}));var r=new E.Controller({refreshInterval:1}),i=new j.b_,s=new j.b_,d=new j.b_,l=document.querySelector("[data-vertical-sl]"),u=document.querySelector("[data-vertical-img-1]"),m=document.querySelector("[data-vertical-img-2]"),f=document.querySelector("[data-triangle-1]"),p=document.querySelector("[data-triangle-2]"),y=l.offsetHeight;i.add(C.Q3.fromTo(u,2,{y:"0%"},{y:"-100%",ease:"slow",immediateRender:!1})),i.add(C.Q3.fromTo(m,2,{y:"0%"},{y:"-200%",ease:"slow",immediateRender:!1})),new E.Scene({triggerElement:l,duration:l.offsetHeight/2,triggerHook:0}).setTween(i).addTo(r),s.add(C.Q3.fromTo(f,1,{rotate:"0deg"},{rotate:"90deg",immediateRender:!1})),new E.Scene({triggerElement:l,duration:y,triggerHook:.5}).setTween(s).addTo(r),d.add(C.Q3.fromTo(p,1,{rotate:"90deg"},{rotate:"180deg",immediateRender:!1})),new E.Scene({triggerElement:l,duration:y,triggerHook:.5}).setTween(d).addTo(r)}}();["useful","delivery","delivery-opts","delivery-opts2","del-points"].forEach((function(t){return function(t){var e=document.querySelector('[data-tabs-panel="'.concat(t,'"]')),a=document.querySelector('[data-tabs-container="'.concat(t,'"]'));null==e||e.addEventListener("click",(function(o){if(o.target.closest("[data-tab]")){if("useful"==t)o.target.closest("[data-tab]").classList.toggle("active");else{var n=e.querySelector("[data-tab].active");null==n||n.classList.remove("active"),o.target.closest("[data-tab]").classList.add("active")}if(a){var c=o.target.closest("[data-tab]").getAttribute("data-tab");a.querySelector("[data-tab-content].active").classList.remove("active"),a.querySelector('[data-tab-content="'.concat(c,'"]')).classList.add("active")}}}))}(t)}));var t=document.querySelector("[data-tabs-filters]"),e=document.querySelector("[data-tabs-reset]");e&&(t.addEventListener("click",(function(){setTimeout((function(){t.querySelector("[data-tab].active")?e.classList.remove("disabled"):e.classList.add("disabled")}))})),e.addEventListener("click",(function(){t.querySelectorAll("[data-tab]").forEach((function(t){t.classList.remove("active")})),e.classList.add("disabled")}))),P()})),window.addEventListener("load",(function(){document.querySelector(".body").classList.remove("no-transition"),document.querySelector(".plug-page")&&(document.querySelector(".plug-page__logo").classList.add("loaded"),setTimeout((function(){document.querySelector(".plug-page__top").classList.add("loaded"),document.querySelector(".plug-page__bottom").classList.add("loaded"),document.querySelector(".plug-page__spin").classList.add("start")}),400)),document.querySelectorAll("[data-cart-init]"),document.querySelectorAll("[data-counter]").length&&o();var t=document.querySelector("[data-main-video]");t&&t.play(),_().init({once:!0,offset:0,duration:500})}))}},a={};function o(t){var n=a[t];if(void 0!==n)return n.exports;var c=a[t]={exports:{}};return e[t].call(c.exports,c,c.exports,o),c.exports}o.m=e,t=[],o.O=(e,a,n,c)=>{if(!a){var r=1/0;for(l=0;l<t.length;l++){for(var[a,n,c]=t[l],i=!0,s=0;s<a.length;s++)(!1&c||r>=c)&&Object.keys(o.O).every((t=>o.O[t](a[s])))?a.splice(s--,1):(i=!1,c<r&&(r=c));if(i){t.splice(l--,1);var d=n();void 0!==d&&(e=d)}}return e}c=c||0;for(var l=t.length;l>0&&t[l-1][2]>c;l--)t[l]=t[l-1];t[l]=[a,n,c]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={143:0};o.O.j=e=>0===t[e];var e=(e,a)=>{var n,c,[r,i,s]=a,d=0;if(r.some((e=>0!==t[e]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(s)var l=s(o)}for(e&&e(a);d<r.length;d++)c=r[d],o.o(t,c)&&t[c]&&t[c][0](),t[r[d]]=0;return o.O(l)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))})();var n=o.O(void 0,[942],(()=>o(356)));n=o.O(n)})();