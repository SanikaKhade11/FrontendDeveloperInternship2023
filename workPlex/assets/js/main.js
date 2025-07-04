var swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    slidesPerGroup:1,
    spaceBetween: 2,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        200: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        568: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 40
        }
      }
  
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
  autoplayTimeout:2500,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})