'use strict';

    /* =====================================================
        TESTIMONIALS SLIDER
    ===================================================== */
    var testimonialsSlider = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
        },
    });

