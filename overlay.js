//Create global namespace app if not yet defined
if (typeof(app) === 'undefined' ) {
    app = {};
}

app.overlay = {
    // some default settings which can be overridden during instantiation
    defaultSettings : {
        fadeSpeed: 'slow',
        fadeToOpacity: 0,
        overlayIdprefix: 'overlay',
        overlayClass: 'overlay',
        overlayWidth: 'full',
        sectionIdprefix: 'section'
    },
    
    // set settings and initalize overlay and waypoint set up
    init : function(userSettings){
        // if settings are passed in, use them
        if (typeof(userSettings) != 'undefined') {
            //merge the user settings with default settigns
            app.overlay.settings = $.extend({},app.overlay.defaultSettings,userSettings)
        } 
        // otherwise use the defaults
        else {
            app.overlay.settings = app.overlay.defaultSettings;
        }
        $(document).ready(function(){
            app.overlay.overlaySetUp();
            app.overlay.waypointSetUp();
        });
    },

    // set up overlay  
    overlaySetUp: function(){
        $.each($('.section-overlay'), function(index){
            index++;
            
            // set titles and content
            var title = "<div class=\"title\">" + $(this).data('title') + "</div>";
            var content = "<div class=\"content\">" + $(this).data('content') + "</div>";
            
            //define the overlay selector for this iteration
            $overlay = "<div id=\"" + app.overlay.settings.overlayIdprefix + index + "\" class=\" "+ app.overlay.settings.overlayClass + "\">" + title + content + "</div>";

            // add an id to each section
            $(this).attr('id', app.overlay.settings.sectionIdprefix+index);

            // append overlay to the section
            $('#section' + index).append( $overlay );
        });
        
        // set overlay to full width of page, and height of parent section if overlayWidth=full
        if (app.overlay.settings.overlayWidth === 'full') {
            
            $.each($('.overlay'), function() { 
                var offset = $(this).offset();
                var parentHeight = $(this).parent().css('height');
                var $thisOverlay = $(this);
                $thisOverlay.offset({
                    top: offset.top, 
                    left: 0
                });
                $thisOverlay.css({
                    width : window.innerWidth,
                    height : parentHeight
                });
            });
        }
    },
        
    // set up waypoints to trigger fade
    waypointSetUp : function() {
        app.waypoints = {};
        index = 0;

        $.each($('.section-overlay'), function(index){
            index++;

            // create waypoints to trigger fade once viewed
            app.waypoints[index]  = new Waypoint({
              element: document.getElementById('overlay'+index),
              handler: function(direction) {
                if (direction == "down"){
                    $('#overlay'+index).fadeTo( app.overlay.settings.fadeSpeed, app.overlay.settings.fadeToOpacity, function() {
                        // Animation complete. Init callback if provided
                        if (app.overlay.settings.callback) {
                            app.overlay.settings.callback();
                        }
                     });
                }
              }
            });
        });
    }
  
}