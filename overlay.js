//Create global namespace app if not yet defined
if (typeof(app) === 'undefined' ) {
	app = {};
}

app.overlay = {
    init : function(){
        $(document).ready(function(){
            app.overlay.overlaySetUp();
            app.overlay.waypoints();
        });
	},

	// set up overlay  
	overlaySetUp: function(){
        $.each($('.section-overlay'), function(index){
            index++;
            //define the overlay selector for this iteration
            $overlay = "<div id=\"overlay" + index + "\" class=\"overlay\"><h2>"+ $(this).data('attr') +"</h2></div>";

            // add an id to each section
            $(this).attr('id', 'section'+index);

            // append overlay to the section
            $('#section' + index).append( $overlay );
        });
		
        $('.overlay').css("height", $(this).parent().css('height'));
	},
        
    // set up waypoints to trigger fade
	waypoints : function() {
        app = {};
        app.waypoints = {};
        index = 0;

        $.each($('.section-overlay'), function(index){
            index++;

            // create waypoints to trigger fade once viewed
            app.waypoints[index]  = new Waypoint({
                element: document.getElementById('overlay'+index),
                handler: function(direction) {
                    if (direction == "down"){
                        $('#overlay'+index).fadeTo( "slow" , 0, function() {
                            // Animation complete.
                        });
                    }
                }
            });
    	});
	}
  
}