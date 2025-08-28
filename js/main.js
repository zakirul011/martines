// on load
window.addEventListener('load', ()=>{
  document.documentElement.classList.add('doc-loaded')  
})

// animation
const animations = document.querySelectorAll('.animation')
const animationStagger = document.querySelectorAll('.animation-stagger')

animationStagger.forEach(w => {
  let animations = w.querySelectorAll('.animation')
  animations.forEach((el, index) => {
    el.style.transitionDelay = (index / 10) + "s"
  });
});


window.addEventListener('scroll', ()=>{
  animations.forEach(el => {
    let t = el.getBoundingClientRect().top - window.innerHeight * 3 / 4
    if (t <= 0 && window.innerWidth >= 768) {
      el.classList.add('animation-added')
    }else{      
      el.classList.remove('animation-added')
    }
  });
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