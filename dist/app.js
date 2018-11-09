$( document ).ready(function() {
  $(".btn-open").click(function() {
	  $(".sidebar").toggleClass("open-sidebar close-sidebar");
    $(this).toggleClass("btn-open btn-close fa-bars fa-times");
  });

  $(".btn-close").click(function() {
    $(".sidebar").toggleClass("open-sidebar close-sidebar");
    $(this).toggleClass("btn-open btn-close fa-bars fa-times");
  });
});