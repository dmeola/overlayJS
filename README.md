# overlayJS

Notes
------------

Demo at https://jsfiddle.net/4Lvwkdhn/2/

Requires waypoints JS (https://github.com/imakewebthings/waypoints/blob/master/lib/jquery.waypoints.min.js)

HTML
-------------
  * add the class 'section-overlay' to the sections. 
  * add data-title and data-content attributes to the sections

~~~HTML
    <!-- This section does not have the class section-overlay, so it will not receive an overlay -->
    <div class="section">
        <img src="https://placehold.it/700x500">
    </div>
    
    <!-- The following sections have the class section-overlay, so they will receive an overlay -->
    <div class="section section-overlay" data-title = "title 2" data-content = "content 2">
        <img src="https://placehold.it/700x500">
    </div>
    
    <div class="section section-overlay" data-title = "title 3" data-content = "content 3">
        <img src="https://placehold.it/700x500">
    </div>
    
    <div class="section section-overlay" data-title = "title 4" data-content = "content 4">
        <img src="https://placehold.it/700x500">
    </div>
~~~
  
  

JS
-------------
After including overlay.js in your application you can instantiate it with the default settings like so:
~~~
    app.overlay.init();
~~~

You can also customize the settings by passing in an object with any or all of the following settings:
~~~JS
    var settings = {
      fadeSpeed: 'slow',            // can be string 'fast', 'slow', or a number of ms (such as 400)
      fadeToOpacity: 0,             // 0 - 1 (.5 is valid, etc)
      overlayIdprefix: 'overlay',   // id prefix for the overlay (this will evaluate overlay0, overlay1, etc)
      overlayClass: 'overlay',      // this class will be added to each overlay
      sectionIdprefix: 'section',   // each of the parent section will get an id (this will evaluate section0, section1, etc)
      callback: functionName()      // function that will be called after fadeOut
    }
    
    app.overlay.init(settings);
~~~

Run once
-------------
If you only want the overlay to show on the first visit, you can use a cookie:
~~~JS
 //if cookie exists hide overlays otherwise create cookie
 if (document.cookie.indexOf("visited") >= 0) {
     $('.overlay').css("display","none");
 } else {
     document.cookie = "visited=true";
 }
~~~

