// owlCarousel for screenshots slider
$('.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

// for navbar background change and for top-arrow
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 400) {
            $(".main-nav").css('background-color', '#2671be');
            $('.top-scroll').css('visibility', 'visible');
        } else {
            $(".main-nav").css('background', '#1976D2');
            $('.top-scroll').css('visibility', 'hidden');
        }
    });
});
// for counter effect
jQuery(document).ready(function ($) {
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });
});

// wow initialize (for animation)
$(document).ready(function () {
    'use strict';
    new WOW().init();
})

// for smooth scrolling
$(document).ready(function () {
    var scrollLinks = $('.scroll');
    scrollLinks.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    })
})


