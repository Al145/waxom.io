$(window).scroll(function() {
    if ($(this).scrollTop() > 1 && $(window).width() > 768){  
        $('header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
      }
    });
    