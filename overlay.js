//Create global namespace app if not yet defined
if (typeof(app) === 'undefined' ) {
    app = {};
}

app.overlay = {
    init : function(settings){
        // if settings are passed in, use them
        if (typeof(settings) != 'undefined') {
            app.overlay.settings = settings;
        } 
        // otherwise create some defaults
        else {
            app.overlay.settings = {
                fadeSpeed: 'slow',
                fadeToOpacity: 0,
                overlayIdprefix: 'overlay',
                overlayClass: 'overlay',
                sectionIdprefix: 'section'
            }
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
        
        $('.overlay').css("height", $(this).parent().css('height'));
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

// set section heights to window height
$('.section').css("height", window.innerHeight);

//if cookie exists hide overlays otherwise create cookie
if (document.cookie.indexOf("visited") >= 0) {
    $('.overlay').css("display","none");
} else {
    document.cookie = "visited=true";
}

app.overlay.init();
