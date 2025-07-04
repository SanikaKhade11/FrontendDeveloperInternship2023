$(document).ready(function(){
    $(".contact").hide();
    $("#over2").click(function(){
      $(".overview").hide();
      $(".contact").show();
    });
    $("#over1").click(function(){
      $(".contact").hide();
      $(".overview").show();
    });
  });

