$(function() {


    $('#hamburger-icon').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.mobile-menu').addClass('active');
            $('html').addClass('ov-hidden');
        } else {
            $('.mobile-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
        }
    });

    $('select').niceSelect();

});

$(window).on('load resize', function() {

    var width = $(window).width();

    if ((width > '700') && (width < '1000')) {

    }

});
//# sourceMappingURL=../sourcemaps/main.js.map
