# overlayJS

overlay JS
============

Notes
------------

Demo at https://jsfiddle.net/4Lvwkdhn/2/

Requires waypoints JS (https://github.com/imakewebthings/waypoints/blob/master/lib/jquery.waypoints.min.js)

HTML
-------------


JS
-------------
After including overlay.js in your application you can instantiate it with the default settings like so:
    app.overlay.init();
    
You can also customize the settings by passing in an object with any or all of the following settings:
    var settings = {
      fadeSpeed: 'slow',            // can be string 'fast', 'slow', or a number of ms (such as 400)
      fadeToOpacity: 0,             // 0 - 1 (.5 is valid, etc)
      overlayIdprefix: 'overlay',   // id prefix for the overlay (this will evaluate overlay0, overlay1, etc)
      overlayClass: 'overlay',      // this class will be added to each overlay
      sectionIdprefix: 'section',   // each of the parent section will get an id (this will evaluate section0, section1, etc)
      callback: functionName()      // function that will be called after fadeOut
    }
    
    app.overlay.init(settings);
