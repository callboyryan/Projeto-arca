let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

$(document).ready(function() {
  $(".navbar a").click(function() {
    var target = $(this).attr("href");
    var offset = $(target).offset().top;
    
    $("html, body").animate({
      scrollTop: offset
    }, 800);
    
    return false;
  });
});
