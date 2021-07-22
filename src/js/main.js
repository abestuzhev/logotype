/****************************/
const headerMenuBtn = document.querySelector('.header-menu');
const menuMobile = document.querySelector('.menu-mobile');

headerMenuBtn.addEventListener('click', function () {
  this.classList.toggle("active");
  menuMobile.classList.toggle("is-show");
});
/****************************/

const resultsSlider = new Swiper('.js-slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  autoHeight: true,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    730: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});



// document.addEventListener('click', function (event) {
//
//   if (event.target.dataset.sidebar === 'show') {
//     // event.preventDefault()
//     console.log(event);
//   }
// });

$(".sidebar-box__head").on("click", function(){
  $(this).toggleClass("is-show");
  $(this).parents(".sidebar-box").find(".sidebar-box__body").slideToggle(200);
});

$(".search input").focus(function(){
  $(this).parents(".search").addClass("is-focus");
});

$(".search input").blur(function(){
  $(this).parents(".search").removeClass("is-focus");
});


$(".sidebar-tab a").on("click", function(event){
  event.preventDefault();
  const href = $(this).attr("href");
  $(href).siblings().removeClass("is-show");
  $(this).siblings().removeClass("active");
  $(this).toggleClass("active");
  $(href).toggleClass("is-show");
});


const windowWidth = (window.innerWidth); // вся ширина окна
const documentWidth = (document.documentElement.clientWidth); // ширина минус прокрутка
//
//
// window.onscroll = function() {stickyHeader()};
//
// const header = document.querySelector(".section-header");
//
// const sticky = header.offsetTop;
//
// function stickyHeader() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }



/****************************************************************/
/****************************************************************/
/****************************************************************/

