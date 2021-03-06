<?php 
// CUSTOM SHORTCODES - Short Codes should be used when you need a lightweight solution to offering user customized control over content.  You can add a "Wrapping ShortCode" which will allow you to wrap selected content in a short code to apply style, or some other formatting. 

// You can also use "Single Word ShortCodes" which allow you to simply inject an element or function into your page.  

// For more on this topic and more things you can do with your shortcodes see this TUTS+ - http://code.tutsplus.com/tutorials/wordpress-shortcodes-the-right-way--wp-17165



// Single ShortCode - Use would be [signoff]
function signOffText() { 
    return 'Thank you so much for reading! And remember to subscribe to our RSS feed. ';
}
add_shortcode('signoff', 'signOffText');


// Wrapping ShortCode - Use would be [disclaimer] CONTENT GOES HERE [/disclaimer]
function disclaimer( $atts, $content = null ) { 
    return '<p class="disclaimer-small">"'.$content.'"</p>';
}
add_shortcode("disclaimer", "disclaimer");


// Wrapping Shortcode with Attributes 
function button_yellow ( $atts, $content = null ) {
    extract(shortcode_atts(array(
      "href" => 'http://'
    ), $atts));
    return '<button class="button-yellow"><a href="'.$href.'">'.$content.'</a></button>';
}
add_shortcode("button", "button_yellow");


// Allow shortcodes to be parsed inside shortcodes.
function column_row ( $atts, $content = null ) {  //ROW (RESPONSIVE)
    return '<div class="row-r">'. do_shortcode( $content ).'</div>';
}
add_shortcode("row", "column_row");


?>

