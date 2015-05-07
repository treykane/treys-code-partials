$(".read-more").click(function(){
  var me = $(this).toggleClass("open"),
      txt = me.is('.open') ? 'Hide' : 'Read More';
  $(me.attr("href")).toggleClass("active", 100);
  me.text(txt);
});