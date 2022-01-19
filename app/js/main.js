
window.addEventListener("load", function(){

    new Swiper('.home__swiper', {
        wrapperClass: 'home__slider',
        slideClass: 'home__slide',
        pagination: {
            el: '.home__pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        
        navigation: {
            nextEl: '.home__btn--next',
            prevEl: '.home__btn--prev',
            
        },
    
    });

    // new WOW().init();
});
