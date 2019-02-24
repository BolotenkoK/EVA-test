$(document).ready(function() {
 
    var owl = $("#carouselTop");   
    owl.owlCarousel({
       center: true,
       nav:true,
       items:1,
       loop:true,  
       autoWidth:true,
       autoplay:true
           
   });
    $( ".owl-nav> .owl-prev").html('<img src="image/string-slider-big.png">');
    $( "#carouselTop > .owl-nav> .owl-next").html('<img src="image/string-slider-big.png" style="transform:scaleX(-1); ">');

});
   
   
   
                       