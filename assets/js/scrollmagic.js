var controller = new ScrollMagic.Controller();
var fadeUps = document.getElementsByClassName("fadeUp");
var fadeZooms = document.getElementsByClassName("fadeZoom");
var fadeFlyIn = document.getElementsByClassName("fadeFlyIn");


for (var i=0; i<fadeUps.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
                        triggerElement: fadeUps[i], // y value not modified, so we can use element as trigger as well
                        offset: 50,												 // start a little later
                        triggerHook: 0.9,
                        duration: 0 ,
                        reverse: true

                    })
                    .setClassToggle(fadeUps[i], "visible") // add class toggle
                    .addTo(controller);
    }

for (var i=0; i<fadeZooms.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
                        triggerElement: fadeZooms[i], // y value not modified, so we can use element as trigger as well
                        offset: 50,												 // start a little later
                        triggerHook: 0.9,
                        duration: 0 ,
                        reverse: true

                    })
                    .setClassToggle(fadeZooms[i], "visible") // add class toggle
                    .addTo(controller);
    }

for (var i=0; i<fadeFlyIn.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
                        triggerElement: fadeFlyIn[i], // y value not modified, so we can use element as trigger as well
                        offset: 50,												 // start a little later
                        triggerHook: 0.9,
                        duration: 0 ,
                        reverse: true

                    })
                    .setClassToggle(fadeFlyIn[i], "visible") // add class toggle
                    .addTo(controller);
}




