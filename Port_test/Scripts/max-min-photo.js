
$(function () {
    $('.minimized').click(function (event) {

        //attr - bierze wartość atrybutu (link do zdjęcia)
        var i_path = $(this).attr('src');

        //append - wkleja w koniec 'body' kod
        $('body').append('<div id="wrap-overlay"><div id="overlay"></div><div id="magnify"><img src="' + i_path + '"></div></div>');

        //fadeIn - wybrane elementy będą niewidoczne fast - szybko
        $('#overlay, #magnify, #wrap-overlay').fadeIn('fast');

    });

    $('body').on('click', ' #overlay, #wrap-overlay', function (event) {
        event.preventDefault();

        $('#overlay, #magnify, #wrap-overlay').fadeOut('fast', function () {
            $(' #magnify, #overlay, #wrap-overlay ').remove();
        });


    });  
});