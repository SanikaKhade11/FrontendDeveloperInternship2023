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
          slidesPerView: 2,
          spaceBetween: 30
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
  
  });



 