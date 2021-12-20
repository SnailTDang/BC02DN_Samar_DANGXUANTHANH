$(document).ready(function () {
    $('.plan-item').hover(function () {
        $('.plan-item').removeClass("plan-active");
        $(this).addClass("plan-active");
    });
    $('.features-item').hover(function () {
        $('.features-item').removeClass("features-active");
        $(this).addClass("features-active");
        $('.text-active, .heading-active, .icon-active').removeClass("hover-active");
        $(this).find('.text-active, .heading-active, .icon-active').addClass('hover-active')
    });
});