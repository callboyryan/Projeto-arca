$(document).ready(function() {
  $("#menu-btn").click(function() {
    $(".navbar").toggleClass("active");
  });

  $(".navbar a").click(function() {
    var target = $(this).attr("href");
    var offset = $(target).offset().top;

    $("html, body").animate({
      scrollTop: offset
    }, 800);

    return false;
  });
});
