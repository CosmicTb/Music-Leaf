/*
    This is to show the way to visually show the song to the user
*/

// Session setting if the song is displayed as a video or not
let showVideo = false;

// Used to refresh the visual, like if the file is an audio format and a video can't be displayed
function refreshVisual() {
    // Hide both title div & video
    document.getElementById("titleDiv").style.display = "none";
    document.getElementById("song").style.display = "none";

    // Checks if a song is running in the first place
    if (songIndex) {
        // Check if the song is in an audio format or video format
        if (audioFormats.indexOf(queue[songIndex].filetype) != -1) { // Audio format
            document.getElementById("titleDiv").style.display = "";
        } else if (videoFormats.indexOf(queue[songIndex].filetype) != -1) { // Video format
            // Check if showVideo session setting is on or not
            if (showVideo) {
                document.getElementById("song").style.display = "";
            } else {
                document.getElementById("titleDiv").style.display = "";
            }
        }
    } else {
        document.getElementById("titleDiv").style.display = "";
    }

    // Update the switch visual button
    if (showVideo) {
        document.getElementById("switchVisual").setAttribute("title", "Switch to audio");
    } else {
        document.getElementById("switchVisual").setAttribute("title", "Switch to video");
    }

}

// Used to switch between audio & video
function switchVisual() {
    if (showVideo) {
        showVideo = false;
    } else {
        showVideo = true;
    }
    refreshVisual();
}

// Refreshes visual when Music Leaf loads
refreshVisual();