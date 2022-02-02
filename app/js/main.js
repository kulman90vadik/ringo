
window.addEventListener("load", function(){
    window.addEventListener('scroll', function(){
        if(window.scrollY >= 100) {
            document.querySelector('.header').classList.add('header--active');
        }
        else {
            document.querySelector('.header').classList.remove('header--active');
        }
    });

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
        loop: true,
        spaceBetween: 40,
        centeredSlides: true,
        navigation: {
            nextEl: '.project-swiper__btn--next',
            prevEl: '.project-swiper__btn--prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            720: {
                slidesPerView: "auto",
                spaceBetween: 20
            },
        }
    });


    new Swiper('.partners-swiper', {
        wrapperClass: 'partners-swiper__wrapper',
        slideClass: 'partners-swiper__slide',
        loop: true,
        navigation: {
            nextEl: '.partners-swiper__btn--next',
            prevEl: '.partners-swiper__btn--prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            720: {
                slidesPerView: 3,
            },
            1120: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        }
    });

    document.querySelector('.header__btn').addEventListener('click', function(){
        let width = document.documentElement.clientWidth;
        
        document.querySelector('.header__menu').classList.toggle('header__menu--active');
        document.querySelectorAll('.header__btn-item').forEach(item => {
            item.classList.toggle('header__btn-item--active');
        });
        if(width <= 400) {
            document.querySelector('.social--header').classList.toggle('social--top');
            document.querySelector('.phone--header').classList.toggle('phone--top');
        }
    });

    new WOW().init();

});
