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
        $('.burger,.header-nav,.logo img,.main-bar').toggleClass('active');
    });
});

