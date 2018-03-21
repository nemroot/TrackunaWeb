var counter = 0;

if ($( window ).width() > 992) {
  $(".leftMenu").css({
    'left' : '0',
  });

  $("main").css({
    'margin-left' : '230px',
  });
  counter = 1;
}
else{
  $(".leftMenu").css({
    'left' : '-230px',
  });

  $("main").css({
    'margin-left' : '0px',
    'max-width' : '100% !important'
  });
  counter = 0;
}

$( window ).resize(function() {
  if ($( window ).width() > 992) {
    $(".leftMenu").css({
      'left' : '0',
    });

    $("main").css({
      'margin-left' : '230px',
    });
    counter = 1;
  }
  else{
    $(".leftMenu").css({
      'left' : '-230px',
    });

    $("main").css({
      'margin-left' : '0px',
      'max-width' : '100% !important'
    });
    counter = 0;
  }
});

$( "#menuBtn" ).click(function() {
  if (counter == 0) {
    if ($( window ).width() < 576) {
      $(".leftMenu").css({
        'left' : '0',
        'z-index' : '100'
      });
      counter = 1;
    }
    else{
      $(".leftMenu").css({
        'left' : '0',
      });

      $("main").css({
        'margin-left' : '230px',
      });
      counter = 1;
    }
  }
  else {
    $(".leftMenu").css({
      'left' : '-230px',
    });

    $("main").css({
      'margin-left' : '0px',
      'max-width' : '100% !important'
    });
    counter = 0;
  }


});
