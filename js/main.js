//Create the burger menu

$(document).ready(function() {
    $('.burger').click(function() {
        $('.burger,.header-nav,.header-nav-act,.main-logo a, .main-logo.act a,.main-bar, .register-input-part').toggleClass('active');
    });
});

//Change backgraund-image

(function($) {
    $(document).ready(function() {
        $("#main").hover(function() {
            $('.inteo').css('background-image', 'url(https://images.unsplash.com/photo-1439242088854-0c76045f4124?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925)');
          });
      
        });
      })(jQuery);

//For menu

$('.ft-title').click(function(e) {
    e.preventDefault();
   
     var $this = $(this);
   
     if ($this.next().hasClass('show')) {
         $this.next().removeClass('show');
         $this.next().slideUp(350);
       $this.find('img').css( "transform", "rotate(0deg)");
     } else {
         $this.parent().parent().find('ft-main-list').removeClass('show');
         $this.parent().parent().find('ft-main-list').slideUp(350);
         $this.next().toggleClass('show');
         $this.next().slideToggle(350);
  $this.find('img').css( "transform", "rotate(90deg)");
 
 
     }
 });

 $('.header-link, .header-link-act').click(function(e) {
    e.preventDefault();
   
     var $this = $(this);
   
     if ($this.next().hasClass('show')) {
         $this.next().removeClass('show');
         $this.next().slideUp(350);
       $this.find('img').css( "transform", "rotate(0deg)");
     } else {
         $this.parent().parent().find('header-item, header-item-act').removeClass('show');
         $this.parent().parent().find('header-item, header-item-act').slideUp(350);
         $this.next().toggleClass('show');
         $this.next().slideToggle(350);
  $this.find('img').css( "transform", "rotate(90deg)");
 
 
     }
 });