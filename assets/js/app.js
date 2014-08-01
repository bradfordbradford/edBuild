// Now, Now  //
$(document).ready(function($) {

    // Prevent FOUC while JS loads, then swap for Run
    /////////////////////////////////////////////////////////
    $('html').removeClass('no-js').addClass('js');
    $('body').removeClass('init').addClass('run');

    // Mobile
    $("#cycle-sections.show-on-tablet #next").click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $('#philosophy').offset().top -0 }, 500, 'easeInOutExpo');
    });


    // CYCLE SECTIONS
    /////////////////////////////////////////////////////////
    (function() {
        var scrollToSection = function(element) {
            $('html, body').stop().animate({
                scrollTop: element.offset().top +4
            }, 1200, 'easeInOutExpo');
        }
        $('#next').click(function(event) {
            event.preventDefault();
            var $current = $('#main-content > .active_section');
            if ($current.index() != $('#main-content > section').length - 1) {
                $current.removeClass('active_section').next().addClass('active_section');
                scrollToSection($current.next());
            }
        });
        $('#prev').click(function(event) {
            event.preventDefault();
            var $current = $('#main-content > .active_section');
            if (!$current.index() == 0) {
                $current.removeClass('active_section').prev().addClass('active_section');
                scrollToSection($current.prev());
            }
        });
    })();

});