(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    if (window.location.href.indexOf("index") > -1 && $(window).width() >= 960) {
        // Collapse Navbar
        var navbarCollapse = function () {
            if ($("#mainNav").offset().top > 20) {
                $("#mainNav").addClass("navbar-shrink");
                $("#mainNav img").attr("src", "images/logo-light.png");

            }
            else {
                $("#mainNav").removeClass("navbar-shrink");
                $("#mainNav img").attr("src", "images/logo-dark.png");

            }
        }
    }
    else {
        setTimeout(function () {
            $("#mainNav").addClass("navbar-shrink");
            $("#mainNav img").attr("src", "images/logo-light.png");

        }, 0)
    }

    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function (e) {
        $('.navbar').addClass('d-none');
    })
    $('.portfolio-modal').on('hidden.bs.modal', function (e) {
        $('.navbar').removeClass('d-none');
    })

})(jQuery); // End of use strict


