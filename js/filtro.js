$(function () {

    let about = $('#about').offset().top,
        services = $('#services').offset().top,
        clients = $('#clients').offset().top,
        contact = $('#contact').offset().top;

    window.addEventListener('resize', function(){
        let about = $('#about').offset().top,
        services = $('#services').offset().top,
        clients = $('#clients').offset().top,
        contact = $('#contact').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-about').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: about -100
        },600);
    });

    $('#enlace-services').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: services -100
        },600);
    });

    $('#enlace-clients').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: clients -100
        },600);
    });

    $('#enlace-contact').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contact -100
        },600);
    });
});