$(document).ready(function(){
    $(".c-hamburger").click(function(){
      $(".menu").slideToggle("slow");
    });
  });

$(window).resize(function(){
    if ($(window).width() > 768){
        $(".menu").show();
    } else {
        $(".menu").hide();
    }
  });
