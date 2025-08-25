
// dropdown on hover for large screens
document.addEventListener("DOMContentLoaded", function(){
  if (window.innerWidth > 991) { // only for large screens
    document.querySelectorAll('.navbar .dropdown').forEach(function(e){
        const dropdown = bootstrap.Dropdown.getOrCreateInstance(e.querySelector('.dropdown-toggle'));
        e.addEventListener('mouseenter', function(){
            dropdown.show();
        });
        e.addEventListener('mouseleave', function(){
            dropdown.hide();
        });
    });
  }
});


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