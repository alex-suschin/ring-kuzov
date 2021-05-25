$(function() {

    $('#cascade-slider').cascadeSlider({

    });

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

    $('.vn-slider-serv').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        swipeToSlide: true,
        variableWidth: true,
        responsive: [{
            breakpoint: 881,
            settings: {
                arrows: false
            }
        }]
    });



});

ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [51.680308, 39.215684],
            zoom: 12,
            scrollZoom: false,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark([51.680308, 39.215684], {
            hintContent: 'Кузовной ремонт в Воронеже',
            balloonContent: 'Кузовной ремонт в Воронеже'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/map-marker.svg',
            iconImageSize: [34, 40],
            cursor: 'pointer',
            iconImageOffset: [-15, -30],
            balloonclose: true
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemark)

});

$(window).on('load resize', function() {

    var width = $(window).width();

    if (width < '821') {
        $('.map-contacts').insertAfter('.map');
    } else {
        $('.map-contacts').prependTo('.map .container');
    }

    if (width < '781') {
        $('.works-slider:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false,
            dots: false,
            variableWidth: true,
            asNavFor: '.works-slider__thumbs'
        });

        $('.works-slider__thumbs:not(.slick-initialized)').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.works-slider',
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            variableWidth: true
        });


    } else {
        $(".works-slider.slick-initialized").slick("unslick");
        $(".works-slider__thumbs.slick-initialized").slick("unslick");
    }

    if (width < '881') {
        $('.vn-slider-serv').insertAfter($('.about'));
    } else {
        $('.vn-slider-serv').appendTo($('.content-info__left'));
    }

    if (width < '641') {
        $('[data-img-mobile').each(function() {
            var bgDesc = $(this).attr('style');
            var bgMob = $(this).attr('data-img-mobile');
            $(this).attr('style', bgMob);
        })
    }

    if (width > '640') {
        $('[data-img-desc').each(function() {
            var bgDataDesc = $(this).attr('data-img-desc');
            $(this).attr('style', bgDataDesc);
        })
    }

});
//# sourceMappingURL=../sourcemaps/main.js.map
