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
   console.log(wScroll)
   console.log($(".section-first").offset().top/2)
   console.log(wScroll - $(".section-first").offset().top/2)
   console.log((wScroll - $(".section-first").offset().top/2)/($(".section-first").offset().top/100));

   var sectionFirstCalcCenter = (wScroll + ($(".display-2").height()/2) - $(".section-first").offset().top/2)/($(".section-first").offset().top/100);

   if (wScroll > $(".section-first").offset().top/2){
     $(".display-2").css({
       'transform' : 'translateY(calc(100vh - '+sectionFirstCalcCenter+'vh))'
     })
   }

   if (wScroll > $(".section-first").offset().top/2){
     $(".feature-list").css({
       'transform' : 'translateY(calc(60vh - '+(sectionFirstCalcCenter*2)/4 +'vh))'
     })
   }
   console.log(wScroll+"  "+$(".section-second").offset().top * 0.8)
   if (wScroll > $(".section-second").offset().top * 0.8) {

     $(".iconCont").each(function (i) {

       setTimeout(function() {
         $(".iconCont").eq(i).addClass('is-showing')
       }, 150 * (i+1));

     })
   }
   else{
     $(".iconCont").each(function () {
       $(".iconCont").removeClass('is-showing')
     })
   }




})
