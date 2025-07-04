AOS.init();

var owl = $('#img-owl');
owl.owlCarousel({
  items:2,
  loop:true,
  margin:30,
  autoplay:true,
  autoplayTimeout:2500,
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
  items:2
}
}
});

$('.counter').each(function () {
$(this).prop('Counter',0).animate({
Counter: $(this).text()
}, {
duration: 4000,
easing: 'swing',
step: function (now) {
$(this).text(Math.ceil(now));
}
});
});
$('#advance') .hide();
$('#place').click (function(){
$('#place').hide();
$('#city, #city1').hide();
$('#advance').show();
});
$('#end1').click(function(){
$(' #city, #city1').show();
$('#end1').hide();
});
$('#end').click(function(){
$('#place').show();
$('#advance').hide();
});