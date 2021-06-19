// $(document).ready(function() {
//     var topOfDivScroll = $(".intro").offset().top - $(window).height();
  
//     $(window).scroll(function() {
//       if ($(window).scrollTop() > topOfDivScroll) {
//         $(".intro").hide();
//       } else $(".header-nav").show();
//     });
//   });

$(document).ready(function() {
    $('.burger').click(function() {
        $('.burger,.header-nav,.header-nac-act,.main-logo a, .main-logo.act,.main-bar, .header-nav-active').toggleClass('active');
    });
});

//Change backgrond-image
(function($) {
    $(document).ready(function() {
        $("#main").hover(function() {
            $('.inteo').css('background-image', 'url(https://images.unsplash.com/photo-1439242088854-0c76045f4124?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925)');
          });
      
        });
      })(jQuery);