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

$(document).on("click", ".sidebar-box__head", function(){
  $(this).toggleClass("is-show");
  $(this).parents(".sidebar-box").find(".sidebar-box__body").slideToggle(200);
});

$(".search input").focus(function(){
  $(this).parents(".search").addClass("is-focus");
});

//scroll container
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});


$(".search input").blur(function(){
  $(this).parents(".search").removeClass("is-focus");
});


$(document).on("click", ".sidebar-tab a", function(event){
  event.preventDefault();
  const href = $(this).attr("href");
  $(href).siblings().removeClass("is-show");
  $(this).parents(".sidebar-tab").siblings().removeClass("active");
  $(this).parents(".sidebar-tab").toggleClass("active");
  $(href).toggleClass("is-show");
});

$(document).on("click", ".panel-view__icon a", function(event){
  event.preventDefault();
  const href = $(this).attr("href");
  $(href).siblings().removeClass("is-show");
  $(this).parents(".panel-view__icon").siblings().removeClass("active");
  $(this).parents(".panel-view__icon").toggleClass("active");
  $(href).toggleClass("is-show");
});

if(!$(".sidebar-box").has("is-hide")){
  console.log("sidebar-box have class is-hide")
  $('.sidebar-box__head').removeClass("is-show");
  $('.sidebar-box__body').css("display", "none");
};


$(document).on("click", ".c-form-box-info__link.is-change", function(event){
  event.preventDefault();
  const parent = $(this).parents(".c-form-box-info");
  parent.toggleClass("is-edited");
  parent.find("input").focus();
  parent.hasClass("is-edited") ? $(this).text("Принять") : $(this).text("Изменить");
})


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


// popup-auth
$(function(){
  $(document).on("click", ".js-show-popup", function(e){
    e.preventDefault();
    $(".product-popup-layout").toggleClass("is-open");
  })

  $(document).on("click", ".product-popup-close", function(e){
    e.preventDefault();
    console.log("hello")
    $(".product-popup-layout").toggleClass("is-open");
  })

  const $html = $('html');
  const $header = $('.header_wrap header');

  function showPopup(icon, popup) {
    $(document).on('click', icon, function (e) {

      e.preventDefault();
      const costType = $(this).attr('data-type');
      const costName = $(this).attr('data-name');
      console.log('type', costType);
      console.log('name', costName);
      if (costType !== '') {

        $(popup).addClass(costType);
        $(popup).find('.popup-title').text(costName)
      }

      $(popup).addClass('is-visible');
      $('.mfp-bg').addClass('is-visible');


      $html.addClass('blocked');
      // $('body').addClass('blocked');

      const widthScroll = windowWidth - documentWidth;
      console.log('widthScroll: ' + widthScroll);
      if (windowWidth > documentWidth) {
        $html.css({
          'margin-right': widthScroll
        });
        $header.css({
          'padding-right': widthScroll
        });
      }
    });
  }

  $(document).on('click', '.js-popup-close', function (e) {
    e.preventDefault();
    $(this).parents('.mfp-wrap').removeClass('is-visible');
    $('.mfp-bg').removeClass('is-visible');
    $html.css({
      'margin-right': '0'
    }).removeClass('blocked');

    $header.css({
      'padding-right': '0'
    });

    const parentModal = $(this).parents('.mfp-wrap');
    if (parentModal.data('save')) {
      onPopupClose(parentModal);
    }
  });

  showPopup("#sidebar-registration", '.popup-auth');

  /*сворачивание / разворачивание фильтров в сйдбаре*/
  const slideDownFilter = (elem) => {
    elem.text('Свернуть')
  }

  const slideUpFilter = (elem) => {
    elem.text('Посмотреть все');
  }



  $(document).on('click', '.sidebar-box__more', function(e){
    e.preventDefault();
    const $parentBox = $(this).parents('.sidebar-box');
    $parentBox.toggleClass('is-show');
    $parentBox.hasClass('is-show') ?  slideDownFilter($(this)) : slideUpFilter($(this));

    const $list = $parentBox.find(".js-sidebar-box-list");

    console.log("list", $list)
  })

  $(document).on('click', '.mobile-icon__menu', function(e){
    e.preventDefault();
    $(".sidebar").addClass("is-show")
  })
});

// const more = document.querySelector(".sidebar-box__more");
// document.addEventListener("click", function(e){
//
//
//   if(e.target.getAttribute("data-type") === "more") {
//     const $parent = e.target.parentNode.parentNode;
//     $parent.classList.contains("is-show") ? $parent.classList.remove('is-show') : $parent.classList.add('is-show')
//
//
//     const $list = $parent.querySelector(".swiper");
//
//     const scrollBox = new Swiper($list, {
//       direction: "vertical",
//       slidesPerView: "auto",
//       freeMode: true,
//       scrollbar: {
//         el: ".swiper-scrollbar",
//       },
//       mousewheel: true,
//     });
//     console.log()
//
//
//     freezeScroll('.sidebar-box-list');
//   }
//
//
// })


/*запрет на скролл вне окна при активном скролле на div корзины*/


  const scrollEvents = ['wheel', 'mousewheel']

  function freezeScroll(){
    for (var i = 0; i < arguments.length; i++) {
      elem = arguments[i];
      let func = preventScrollEventFunc(elem);
      let options = {passive: false};
      $(elem).on('mouseenter', function(){
        onWheel(window, func, options);
      }).on('mouseleave', function(){
        removeOnWheel(window, func);
      });
    }
  }
// Отменить скролл страницы, если элемент selector прокручен до упора
  function preventScrollEventFunc(selector){
    let elem = $(selector);
    function preventScroll(e){
      let offset = e.wheel || e.wheelDelta;
      let crossingUpper = elem.scrollTop() == 0 && offset > 0;
      let crossingDown = (elem[0].scrollHeight - elem.scrollTop() ==
          elem[0].clientHeight && offset < 0);
      if (crossingUpper || crossingDown){
        e.preventDefault()
      }
    }
    return preventScroll;
  }
// Повесить обработчик func для событий wheel и mousewheel у elem
  function onWheel(elem, func, options){
    options = options || {};
    scrollEvents.forEach(function(item, i, arr){
      elem.addEventListener(item, func, options);
    });
  }
// Убрать обработчик func для событий wheel и mousewheel у elem
  function removeOnWheel(elem, func, options){
    options = options || {};
    scrollEvents.forEach(function(item, i, arr){
      elem.removeEventListener(item, func, options);
    });
  }

  freezeScroll('.c-order-list');



/****************************************************************/
/****************************************************************/
/****************************************************************/

