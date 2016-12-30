
//Carousel
$('.carousel').carousel({
  interval: 3000
})

//transparent NAVBAR
// $(document).ready(function(){
//   $(window).scroll(function(){
//     if($(window).scrollTop()<80){
//       $('.bg-inverse').css({
//         'background-color':'rgba(59,59,59,1)'
//       });
//
//     }else {
//       $('.bg-inverse').css({
//         'background-color':'rgba(59,59,59,0.6)'
//       });
//     }
//   });
// });

// Smooth Scrolling of NAV bar
$(document).ready(function(){
  $('.nav-item').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

})
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//active menu item on click
$(document).ready(function(){
  $('.navbar-nav li a').click(function(){
    $('.navbar-nav li').parent.removeClass("active");
    $(this).parent().addClass("active")
  });
});
