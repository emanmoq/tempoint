$(document).ready(function () {
    
    $('.mallCarusel').owlCarousel({
        autoplay: true,
        rtl:true,
        loop: true,
        dots:true,
        nav:true,
        navText: ["<i class='lni-chevron-right'></i>","<i class='lni-chevron-left'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items:1,
      
            }
          
        }
  

        
});
$('.slider-Owl').owlCarousel({
    autoplay: true,
    navText: ["<i class='lni-chevron-right'></i>","<i class='lni-chevron-left'></i>"],
    rtl:true,
    loop: true,
    dots:true,
    nav:true,
    responsiveClass: true,
    responsive: {
        0: {
            items:1,
  
        }
      
    }
    
});

});

