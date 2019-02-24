$(document).ready(function() {
 
    var owl = $("#productsCarousel");   
    owl.owlCarousel({
        center: true,
        items:4,
        loop:true,
        margin:10,
        autoWidth:true,
        nav:true,
        dots: false,
        autoplay:true
   });
  
   $('#productsCarousel > .owl-nav> .owl-prev').html('<img src="image/arrow-slider-sm.png">');
   $('#productsCarousel > .owl-nav> .owl-next').html('<img src="image/arrow-slider-sm.png" style="transform:scaleX(-1); ">');
});
   
   
   
                       