

// swiper
const swiper = new Swiper('.projects__slider', {
  slidesPerView: 1,
  breakpoints: {
    768: { 
      slidesPerView: 2
    },
    1200: { 
      slidesPerView: 3 
    }
  },
  loop: true,

  spaceBetween: 50,
  
  navigation: {
    nextEl: '.projects .swiper-button-next',
    prevEl: '.projects .swiper-button-prev',
  },

  pagination: {
    el: '.projects .swiper-pagination',
    clickable: true,
  },
});