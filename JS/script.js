$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:2,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });


jQuery(function(f){
    var element = f('#back-top');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](500);
    });
});
});

