<?php
// This will move WPAUTOP to run after your shortcodes have been processed the reason you will want to do this is to prevent you shortcodes from being wrapped in the Markup from the WordPress editor (things such as: <p>, <br/>, <div>) that you don't wish to be part of the shortcode markup. 


remove_filter( 'the_content', 'wpautop' );//MOVE WPAUTOP TO RUN AFTER SHORTCODES ARE PROCESSED
add_filter( 'the_content', 'wpautop' , 20);

?>