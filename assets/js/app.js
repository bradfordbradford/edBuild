


// Now, Now  //
$(document).ready(function($) {

    // Prevent FOUC while JS loads, then swap for Run
    /////////////////////////////////////////////////////////
    $('html').removeClass('no-js').addClass('js');
    $('body').removeClass('init').addClass('run');



    // Smooth Scroll to First Slide
    /////////////////////////////////////////////////////////
    $("#question .scroll-prompt").click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $('#philosophy').offset().top -0 }, 500, 'swing');
    });


});
