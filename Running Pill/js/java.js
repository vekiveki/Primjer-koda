$(document).ready(function() {
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        900,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(window).on("scroll", function() {
  var scrollPos = $(window).scrollTop();
  if (scrollPos <= 0) {
    $(".gumbek").fadeOut();
  } else {
    $(".gumbek").fadeIn();
  }
});
