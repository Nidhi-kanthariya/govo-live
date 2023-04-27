
/*=====================
  Ecommerce App Js 
  ==========================*/

// Product js

var swiper = new Swiper(".productImg", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".productImgNav", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


//  Shop Sidebar Toggle 
const shopSidebarToggle = document.querySelector('.shop-toggle');
const shopSidebar = document.querySelector('.shop-sidebar');
const shopCloseBtn = document.querySelector('.shop-close-sidebar');
shopSidebarToggle?.addEventListener('click', function () {
  shopSidebar.classList.toggle('show');
});
shopCloseBtn?.addEventListener('click', function () {
  shopSidebar.classList.remove('show');
});

//  Grid & List view js  

const gridView = document.querySelector('.grid-layout-view');
const listView = document.querySelector('.list-layout-view');
const productWrapperGrid = document.querySelector('.product-wrapper-grid');
let productBox = document.querySelectorAll('.product-box');
gridView?.addEventListener('click', function () {
  productWrapperGrid.classList.remove("list-view");
  document.querySelector(".product-box").classList.remove("col-span-12");
});
listView?.addEventListener('click', function () {
  productWrapperGrid.classList.add("list-view");
  document.querySelector(".product-box").classList.add("col-span-12");
});

