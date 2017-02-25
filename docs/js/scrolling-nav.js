var _MENU_OFFSET = 50;
var _SCROLL_OFFSET = 80;

//jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    if ($("#custom-bootstrap-menu").offset().top > _MENU_OFFSET) {
        $("#custom-bootstrap-menu").addClass("top-nav-collapse");
    } else {
        $("#custom-bootstrap-menu").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
