<?php
/*
Plugin Name: Site Protected - Force Login
Plugin URI: http://www.longerdays.com/
Description: Creates a password protected wordpress site, by using the standard Wordpress Login
Author: Trey Kane
Version: 0.5
Author URI: http://www.treykane.com
License: GPL2
*/



// This Password Protection Plugin, will work with any wordpress install.  I uses the standard WP login to prevent unwanted access to the site.   //

function protect_whole_site() {
    if ( !is_user_logged_in() ) {
        auth_redirect();
    }
}

add_action ('template_redirect', 'protect_whole_site');

