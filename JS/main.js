$(document).ready(function () {
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image'
        , mainClass: 'mfp-with-zoom'
        , gallery: {
            enabled: true
        }
        , zoom: {
            enabled: true
            , duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
    $(".burger-menu").click(function () {
        if ($("#bntMenu").hasClass("menu-on")) {
            $(this).removeClass("menu-on");
            $('.blockHidden').css("display", "none");
        }
        else {
            $(this).addClass("menu-on");
            $('.blockHidden').css("display", "flex");
        }
    });
    $(".blockHidden>a").click(function(){
        $(".burger-menu").removeClass("menu-on");
            $('.blockHidden').css("display", "none");
    })
    // Last scopes
});