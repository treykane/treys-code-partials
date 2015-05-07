$(function() { //AUTO SCROLLS THE PAGE AFTER LOAD AND A DELAY
    $('html, body').delay(3500).animate({
         scrollTop: $('#watch').offset().top - 78 //FIXED HEADER OFFSET, CAN BE LEFT BLANK
       }, 2000);
});