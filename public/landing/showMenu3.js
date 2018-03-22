var counter = 0;
$( "#menuBtn" ).click(function() {
  if (counter == 0) {
    $(".sideMenu").css({
      'transform' : 'translateX(0px)',
    });

    $(".sideMenu-items").css({
      'transform' : 'translateX(0px)',
    });
    counter = 1;
  }
  else {
    $(".sideMenu").css({
      'transform' : 'translateX(100vw)',
    });

    $(".sideMenu-items").css({
      'transform' : 'translateX(100vw)',
    });

    counter = 0;
  }

});
