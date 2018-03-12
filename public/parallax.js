$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
   $(".fore-phone").css({
     'transform' : 'translate(0px, -'+wScroll/32+'%)'
   })
   $(".logo").css({
     'transform' : 'translate(0px, -'+wScroll+'%)'
   })



   $(".slogan").css({
     'transform' : 'translate(0px, -'+wScroll+'%)'
   })


   $(".slogan").css({
     'opacity' : wScroll/500
   })

   if (wScroll > $(".section-first").offset().top - ($(window).height()/1.2)) {
     $(".display-2").css({
       'transform' : 'translate(0px, calc(0% - '+wScroll/9+'%))'
     })
   }

   if (wScroll > $(".feature-list").offset().top - ($(window).height()/4) ){
     console.log("scroll - " + wScroll)
     console.log($(".feature-list").offset().top - ($(window).height()/1.2))
     $(".feature-list").css({
       'opacity' : wScroll/1000,
       'transform' : 'translate(0px, calc(0% - '+wScroll/17+'%))',
     })
   }



})
