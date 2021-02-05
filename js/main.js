$(document).ready(function() {
  const flowersSlider = new Swiper('.flowers-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,

     // Navigation arrows
     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // настройки адаптивной версии 
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 6,
      } 
    }
});

const reviewSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

$("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : '../img/bunch/bunch-1.jpg',
      opts : {
        caption : 'First caption',
        thumb   : '../img/bunch/bunch-1.jpg'
      }
    },
    {
      src  : '../img/bunch/bunch-2.jpg',
      opts : {
        caption : 'Second caption',
        thumb   : '../img/bunch/bunch-2.jpg'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });
});

$("#review-2").on('click', function() {

  $.fancybox.open([
    {
      src  : '../img/bunch/bunch-3.jpg',
      opts : {
        caption : 'First caption',
        thumb   : '../img/bunch/bunch-3.jpg'
      }
    },
    {
      src  : '../img/bunch/bunch-4.jpg',
      opts : {
        caption : 'Second caption',
        thumb   : '../img/bunch/bunch-4.jpg'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });
});

}); 