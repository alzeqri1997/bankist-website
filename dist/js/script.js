"use strict";const modal=document.querySelector(".modal"),overlay=document.querySelector(".overlay"),btnCloseModal=document.querySelector(".btn--close-modal"),btnsOpenModal=document.querySelectorAll(".btn--show-modal"),btnScrollTo=document.querySelector(".btn--scroll-to"),section1=document.querySelector("#section--1"),nav=document.querySelector(".nav"),tabs=document.querySelectorAll(".operations__tab"),tabsContainer=document.querySelector(".operations__tab-container"),tabsContent=document.querySelectorAll(".operations__content"),navBtn=document.querySelector(".nav__button"),child=document.querySelector(".nav__button--line"),navLinks=document.querySelector(".nav__links");navBtn.addEventListener("click",(function(e){child.classList.toggle("nav__button--line--active"),navLinks.classList.toggle("active")})),window.addEventListener("scroll",(function(){child.classList.remove("nav__button--line--active"),navLinks.classList.remove("active")}));const openModal=function(e){e.preventDefault(),modal.classList.remove("hidden"),overlay.classList.remove("hidden")},closeModel=()=>{modal.classList.add("hidden"),overlay.classList.add("hidden")};btnsOpenModal.forEach((e=>{e.addEventListener("click",openModal)})),btnCloseModal.addEventListener("click",closeModel),overlay.addEventListener("click",closeModel),document.addEventListener("keydown",(function(e){"Escape"!==e.key||modal.classList.contains("hidden")||closeModel()})),btnScrollTo.addEventListener("click",(function(){section1.scrollIntoView({behavior:"smooth"})})),document.querySelector(".nav__links").addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("nav__link")){const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}})),tabsContainer.addEventListener("click",(function(e){const t=e.target.closest(".operations__tab");t&&(tabs.forEach((e=>e.classList.remove("operations__tab--active"))),tabsContent.forEach((e=>e.classList.remove("operations__content--active"))),t.classList.add("operations__tab--active"),console.log(t.dataset),document.querySelector(`.operations__content--${t.dataset.tab}`).classList.add("operations__content--active"))}));const handleHover=function(e){if(e.target.classList.contains("nav__link")){const t=e.target,n=t.closest(".nav").querySelectorAll(".nav__link"),o=t.closest(".nav").querySelector("img");n.forEach((e=>{e!==t&&(e.style.opacity=this)})),o.style.opacity=this}};nav.addEventListener("mouseover",handleHover.bind(.5)),nav.addEventListener("mouseout",handleHover.bind(1));const header=document.querySelector(".header"),navHeight=nav.getBoundingClientRect().height,stickNav=function(e){const[t]=e;t.isIntersecting?nav.classList.remove("sticky"):nav.classList.add("sticky")},headerObserver=new IntersectionObserver(stickNav,{root:null,threshold:0,rootMargin:`-${navHeight}px`});headerObserver.observe(header);var swiper=new Swiper(".slider",{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".slider__btn--right",prevEl:".slider__btn--left"}});const imgTargets=document.querySelectorAll("img[data-src]"),loadImg=function(e,t){const[n]=e;n.isIntersecting&&(n.target.src=n.target.dataset.src,n.target.addEventListener("load",(function(){n.target.classList.remove("lazy-img")})),t.unobserve(n.target))},imgObserver=new IntersectionObserver(loadImg,{root:null,threshold:0,rootMargin:"200px"});imgTargets.forEach((e=>imgObserver.observe(e)));
//# sourceMappingURL=script.js.map