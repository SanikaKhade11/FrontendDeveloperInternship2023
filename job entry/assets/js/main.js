AOS.init();

var owl = $('#client-owl');
owl.owlCarousel({
  items:2,
  loop:true,
  margin:30,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsive:{
      0:{
  items:1
},
991:{
  items:1
},
1000:{
  items:2
},
1300:{
  items:3
}
}
});