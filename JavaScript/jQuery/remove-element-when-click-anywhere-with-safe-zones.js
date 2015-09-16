// This handy little function will allow you to remove an element on the page when the user clicks ANYWHERE on the page. You can then set safezones that the user can click in, a good use would be if a search box pops up on the page and you need to allow the user to select and type in it, but want the box to go away when they click anywhere else on the page.


$(function() { // REMOVE ELEMENT IF YOU CLICK ANYWHERE ON THE PAGE
    $(".search-toggle-button").click(function(){ return false; }); // ignore clicks on .search-toggle-button
    $(".search-field").click(function(){ return false; }); // ignore clicks on the .search-field

    $(document).on("click", function() { jQuery(".search-toggle").fadeOut('fast'); }); // Fade out if you click anywhere else
  });