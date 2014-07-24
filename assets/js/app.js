


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


    // SKROLLR
    /////////////////////////////////////////////////////////
    var s = skrollr.init();

    // POINTS
    /////////////////////////////////////////////////////////

    $('section').waypoint(function(direction) {
    var active_section;
    active_section = $(this);
      if (direction == 'down') {
              active_section.addClass("active");
    }
    // if (direction == 'up') {
    //   active_section.removeClass("active");
    // };
    },
    {
      offset: function() {
              return $.waypoints('viewportHeight') - $(this).height() + 260;
    }
    });



});
