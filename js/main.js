// on load
window.addEventListener('load', ()=>{
  document.documentElement.classList.add('doc-loaded')
  
  // skrollr js init
  var s;

  function initOrDestroySkrollr() {
    if (window.innerWidth <= 768) {
      if (s) {
        s.destroy();
        s = null;
      }
    } else {
      if (!s) {
        s = skrollr.init({
          forceHeight: false,
          smoothScrolling: true,
          smoothScrollingDuration: 300
        });
      }
    }
  }

  // Initial check
  initOrDestroySkrollr();

  // On window resize
  window.addEventListener('resize', initOrDestroySkrollr);
  
})


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