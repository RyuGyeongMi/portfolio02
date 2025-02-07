$(function () {

    const MAINVISUALSLIDE = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },

        navigation: {
            prevEl: '.main_visual .arrows .prev',
            nextEl: '.main_visual .arrows .next',
        },
    })
});



$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });


});

$(function () {
    const MMS = new Swiper('.main_menu_slide', {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 8000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });

});

$(function () {
    const MIS = new Swiper('.main_interior_slide', {
        loop: true,

        navigation: {
            nextEl: '.main_interior .inner .itm_area .arrows .next',
            prevEl: '.main_interior .inner .itm_area .arrows .prev',
        },
        pagination: {
            clickable: true,
            el: '.main_interior .inner .itm_area .page',
        },
        on: {
            slideChangeTransitionStart: function () {
                console.log(this.realIndex);
                $('.main_interior .inner .desc_area .itm').removeClass('on');
                $('.main_interior .inner .desc_area .itm').eq(this.realIndex).addClass('on');
            }
        }
    })
});

$(function () {
    const MSS = new Swiper('.main_sns_slide', {
        loop: true,
        slidesPerView: 4,

        centeredSlides: true,
    })
});

$(function () {
    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('on');
        $('.header .gnb').toggleClass('on');
    })

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul ul').stop().slideUp();
            $(this).next().stop().slideDown();
        }
    });

    $(window).on('resizw', function () {
        $('.header .mbtn').removeClass(on);
        $('.header .gnb').removeClass(on);
        $('.header .gnb>ul ul').removeAttr('style')
    });

    $('.header .gnb').on('wheel touc', function (e) {
        e.preventDefault();
    })
})

$(function () {
    AOS.init();
})