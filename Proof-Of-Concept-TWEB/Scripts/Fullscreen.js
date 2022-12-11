window.addEventListener("load", startup, false); // when the page loads

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
    }); // these check for if the fullscreen button has been clicked on. Once clicked, it calls the toggleFullScreen function with the corresponding 
    //video tag enabled


    togglePicture1.addEventListener("click", async () => {

        togglePIP(video1);
    });

    togglePicture2.addEventListener("click", async () => {
        togglePIP(video2);
    });

    togglePicture3.addEventListener("click", async () => {
        togglePIP(video3); // call the togglePIP function with the corresponding video tag passed in
    }); // these eventlisteners check if the PIP buttons have been clicked on




}
function toggleFullScreen(video) {
    if (!document.fullscreenElement) {
        // If the document is not in full screen mode
        // make the video full screen
        video.requestFullscreen();
        document.exitPictureInPicture(); // exits any PIP running
    } else {
        // Otherwise exit the full screen
        
            document.exitFullscreen();
        
    }
}

function togglePIP(video) {
    
    if(video.pictureInPictureElement) { // checks if the vid is already PIP
        video 
            .exitPictureInPicture() // exits the PIP, useful if there is already a PIP playing before the button is clicked on
            console.log('exit PIP now') // logs to  console if the button is pressed
            .catch(error => { // Error handling code
                console.log('exit PIP error') // logs to  console if there is an error
                
            })
    } else { // else 
        video.requestPictureInPicture()
        // requests Picture-in-Picture
    }
}
