window.addEventListener("load", startup, false);

function startup() {
    // Get the reference to videos and buttons
    const video1 = document.getElementById("video1");
    const video2 = document.getElementById("video2");
    const video3 = document.getElementById("video3");

    const togglePicture1 = document.getElementById("togglePip1");
    const togglePicture2 = document.getElementById("togglePip2");
    const togglePicture3 = document.getElementById("togglePip3");

    const toggleFull1 = document.getElementById("toggleFull1");
    const toggleFull2 = document.getElementById("toggleFull2");
    const toggleFull3 = document.getElementById("toggleFull3");


    toggleFull1.addEventListener("click", async () => {
        toggleFullScreen(video1);
        console.log("Fullscreen button pressed")
    });

    toggleFull2.addEventListener("click", async () => {

        toggleFullScreen(video2);
    });

    toggleFull3.addEventListener("click", async () => {
        toggleFullScreen(video3);
    });


    togglePicture1.addEventListener("click", async () => {

        //If there is no element in Picture-in-Picture yet, let’s request
        // Picture-in-Picture for the video, otherwise leave it.
        togglePIP(video1);
    });

    togglePicture2.addEventListener("click", async () => {
        togglePIP(video2);
    });

    togglePicture3.addEventListener("click", async () => {
        togglePIP(video3);
    });

    

    // On pressing ENTER call toggleFullScreen method
    // document.addEventListener("keypress", function (e) {
        // if (e.key === 'f') {
            // toggleFullScreen(video1);
        // }
        // else if (e.key === 'Enter') {
            // toggleFullScreen(video2);
        // }
        // else if (e.key === 'e') {
            // toggleFullScreen(video3);
        // }
    // }, false);


    //document.addEventListener("click", async () => {
        //if (toggleFull1) {
            //toggleFullScreen(video1);
        //}
        //else if (toggleFull2) {
            //toggleFullScreen(video2);
        //}
        //else if (toggleFull3) {
            //toggleFullScreen(video3);
        //}
    //});

    //document.addEventListener("click", async () => {
        //if (togglePicture1) {
            //togglePIP(video1);
        //}
        //else if (togglePicture2) {
            //togglePIP(video2);
        //}
        //else if (togglePicture3) {
            //togglePIP(video3);
        //}
    //});



}
function toggleFullScreen(video) {
    if (!document.fullscreenElement) {
        // If the document is not in full screen mode
        // make the video full screen
        video.requestFullscreen();
        document.exitPictureInPicture(); // auto exits any PIP running
    } else {
        // Otherwise exit the full screen
        if (document.exitFullscreen()) {
            document.exitFullscreen();
        }
    }
}

function togglePIP(video) {
    
    if(document.pictureInPictureElement) {
        video
            .exitPictureInPicture()
            console.log('button pressed')
            .catch(error => {
                // Error handling
            })
    } else {
        video.requestPictureInPicture()
        // Request Picture-in-Picture
    }
}
