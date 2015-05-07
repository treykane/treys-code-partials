$(function() { //PREVENTS AUTO SCROLL FROM FIRING IF USER SCROLLS, AND ALLOWS THE USER TO INTERRUPT SCROLLING ANIMATIONS
    $('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(e){
      if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel"){
        $("html,body").stop();
       }
    })
});