$(document).ready(function() {
  $digi1 = document.getElementById("didgi4");

  $(".record").on("click", function() {
    if ($(this).hasClass("rotate")) {
      $('#stopwatch').timer('pause');
      $(this).toggleClass("rotate");
    }
    else {
      $('#stopwatch').timer('resume');
      $(this).toggleClass("rotate");
    }

  })
})
