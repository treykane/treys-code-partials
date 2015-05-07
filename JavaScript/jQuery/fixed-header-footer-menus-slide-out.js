(function($) { //SLIDE OUT FIXED MENUS         
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) { //TOP
                $('#menu').slideDown(300);
            } else {
                $('#menu').slideUp(300);
            }
        });
        $(window).scroll(function(){                          
            if ($(this).scrollTop() < 200) { //BOTTOM
                $('#footer').slideUp(300);
            } else {
                $('#footer').slideDown(300);
            }
        });
    });
})(jQuery);

//------------------------
// --- Required CSS ------
//------------------------
//#menu { /* HEADER MENU */
//  position:fixed;
//  top:0px;
// 	width:100%; 
//	background-color:#11303E;
//	color: #FFFFFF;
//	z-index:9999;
//	display: none;
//  }

//#footer { /*FOOTER MENU*/
//  position:fixed;
//	bottom:0px;
//	width:100%; 
//	background-color:#11303E;
//	color: #FFFFFF;
//	z-index:9999;
//	display: none;
//  text-align: center;
//  padding: 0;
//  margin: 0;
//}