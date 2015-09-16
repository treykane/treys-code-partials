<?php
// This sinppet will allow you to set conditional statments based on the URL of the page.  This can be extremely helpful when working with dynamic templating.  


$uri = $_SERVER['REQUEST_URI'];
  if ( strpos($uri,'/events/community/add') !== false ) {
     //do nothing
  } elseif ( strpos($uri,'another-url.php') !== false ) {
    //do nothing, or something
  } else {
    get_sidebar();
  }
?>