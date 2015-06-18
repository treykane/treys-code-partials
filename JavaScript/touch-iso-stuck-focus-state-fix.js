//ADD THIS ATTRIBUTE TO TOUCHABLE ELEMENTS - ontouchend="this.onclick=fix"

//THIS IS A FIX MOSTLY FOR iOS TO ALLOW THE FOCUS STATE TO RESET BY BRIEFLY PULLING THE ELEMENT OUT OF THE DOM THEN PUTTING IT BACK IN.  THIS IS DONE ON A TIMEOUT AFTER THE TOUCH EVENT ENDS.

function fix() { //iOS FOCUS/HOVER FIX - REMOVES THEN PLACES ELEMENT BACK INTO DOM
    var el = this; 
    var par = el.parentNode;
    var next = el.nextSibling;
    setTimeout(function() {
        par.removeChild(el);
        par.insertBefore(el, next);
    }, 1500);//SET TIMEOUT
} 