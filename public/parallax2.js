$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  var fsecScroll = wScroll-500;
   $(".paraHeader").css({
     'transform' : 'translate(0px, -'+wScroll/12+'%)'
   })

if ($(window).width() < 700) {

}
else{
  if (wScroll - 500 > 0 ) {
    $(".column span").css({
      'transform' : 'translate(0px, -'+fsecScroll/12+'%)'
    })

    $(".feature-list").css({
      'transform' : 'translate(0px, -'+fsecScroll/12+'%)'
    })
  }
  else {
    $(".column span").css({
      'transform' : 'translate(0px, 0px)'
    })

    $(".feature-list").css({
      'transform' : 'translate(0px, 0px)'
    })
  }
}



   if (wScroll > 50) {
     $(".brand").css({
       'transform' : 'translate(0px, -50px)',
       'opacity' : '0'
     })
   }
   else{
     $(".brand").css({
       'transform' : 'translate(0px, 0px)',
       'opacity' : '1'
     })
   }

   if (wScroll > 800) {
     $(".topbar").css({
       'background' : 'white',
       'box-shadow' : '0px 5px 8px -3px rgba(0,0,0,0.75)'
     })
     $(".brand").css({
       'transform' : 'translate(0px, 0px)',
       'opacity' : '1'
     })
   }
   else{
     $(".topbar").css({
       'background' : 'none',
       'box-shadow' : 'none'
     })
   }


   if (wScroll > $(".section-second").offset().top * 0.8) {
     console.log("hihihi")
     $(".feature-container").each(function (i) {

       setTimeout(function() {
         $(".feature-container").eq(i).addClass('is-showing')
       }, 150 * (i+1));

     })
   }
   else{
     $(".feature-container").each(function () {
       $(".feature-container").removeClass('is-showing')
     })
   }
})
