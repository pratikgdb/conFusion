$(document).ready(function() {
  $("#mycarousel").carousel({ interval: 2000 });
  $("#carouselButton").click(function() {
    if ($("#carouselButton").children("span").hasClass('fa-pause')){
       $("#mycarousel").carousel('pause');
       $("#carouselButton").children("span").removeClass('fa-pause');
       $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass("fa-play")){
       $("#mycarousel").carousel('cycle');
       $("#carouselButton").children("span").removeClass('fa-play');
       $("#carouselButton").children("span").addClass('fa-pause');
    }
  });
  });
  $(document).ready(function() {
    $("#reserve").click(function(){
     $("#ReserveTableModal").modal('show');
    });
  });

  $(document).ready(function() {
    $('.fa-sign-in').click(function() {
      $("#loginModal").modal('show');
    });
    });
