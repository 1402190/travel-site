(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{17:function(e,s,t){"use strict";function n(e,s){for(var t=0;t<s.length;t++){var n=s[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.r(s);var i=function(){function e(){!function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.modal=document.querySelector(".modal"),this.closeIcon=document.querySelector(".modal__close"),this.events()}var s,t,i;return s=e,(t=[{key:"events",value:function(){var e=this;this.closeIcon.addEventListener("click",(function(){return e.closeTheModal()})),document.addEventListener("keyup",(function(s){return e.keyPressHandler(s)}))}},{key:"openTheModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeTheModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"keyPressHandler",value:function(e){27==e.keyCode&&this.closeTheModal()}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n\t\t<div class="modal">\n\t\t    <div class="modal__inner">\n\t\t      <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>\n\t\t      <div class="wrapper wrapper--narrow">\n\t\t        <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>\n\t\t      </div>\n\n\t\t      <div class="social-icons">\n\t\t        <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>\n\t\t        <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>\n\t\t        <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>\n\t\t        <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>\n\t\t      </div>\n\t\t    </div>\n\t\t    <div class="modal__close">X</div>\n\t\t  </div>\n\t\t\t')}}])&&n(s.prototype,t),i&&n(s,i),e}();s.default=i}}]);