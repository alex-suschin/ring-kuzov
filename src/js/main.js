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
            iconImageOffset: [-30, -60],
            balloonclose: true
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemark)

});

$(window).on('load resize', function() {

    var width = $(window).width();

    if ((width > '700') && (width < '1000')) {

    }

});