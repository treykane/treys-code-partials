<?php //This simple if statment can be used alongsde the normal WP-Enque function to specify a page that should have custom scripts and styles

if ( is_page( 'portfolio' ) ) { //ONLY PORTFOLIO PAGE
      wp_enqueue_script('custom-script' , get_template_directory_uri() . '/js/vendor/custom.min.js', array(), false );
      wp_enqueue_style( 'custom-css', get_template_directory_uri() . '/css/vendor/custom.min.css' );
}


?>