
$(function () {
    $('.minimized').click(function (event) {

        //attr - bierze wartość atrybutu (link do zdjęcia)
        var i_path = $(this).attr('src');

        //append - wkleja w koniec 'body' kod
        $('body').append('<div id="wrap-overlay"><div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div></div>');
        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth()) / 2,
            // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight()) / 2
        });
        //fadeIn - wybrane elementy będą niewidoczne fast - szybko
        $('#overlay, #magnify').fadeIn('fast');

    });

    $('body').on('click', '#close-popup, #overlay', function (event) {
        event.preventDefault();

        $('#overlay, #magnify').fadeOut('fast', function () {
            $('#close-popup, #magnify, #overlay').remove();
        });

        
    });
});
