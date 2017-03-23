(function($){  
  setInterval(function(){  
    $(".slideshow ul li:first-child").animate({"margin-left": -500}, 600, function(){  
        $(this).css("margin-left",0).appendTo(".slideshow ul");  
    });  
  }, 3000);  
})(jQuery);

