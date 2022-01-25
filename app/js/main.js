
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


    new Swiper('.project-swiper', {
        wrapperClass: 'project-swiper__wrapper',
        slideClass: 'project-swiper__slide',
        // slidesPerView: 2,
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 40,
        centeredSlides: true,
        navigation: {
            nextEl: '.project-swiper__btn--next',
            prevEl: '.project-swiper__btn--prev',
        },
    });


    new Swiper('.partners-swiper', {
        wrapperClass: 'partners-swiper__wrapper',
        slideClass: 'partners-swiper__slide',
        slidesPerView: 4,
        loop: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.partners-swiper__btn--next',
            prevEl: '.partners-swiper__btn--prev',
        },
    });

    // new WOW().init();

});
