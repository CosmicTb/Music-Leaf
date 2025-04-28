/*
    This controls anything that happens in the contol bar (E.g. The playback timeline)
*/

// Allowed files to import
const allowedFiles = [".mp3", ".wav", ".mp4", ".mpeg"];

// Songs set inside the queue
let queue = [
    {
        "name": "Video test",
        "filetype": ".mp4",
        "cover": null,
        "length": "99999999999999999",
        "song": "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        "name": "Audio test",
        "filetype": ".mp3",
        "cover": null,
        "length": "111111111111111",
        "song": "https://www.w3schools.com/tags/horse.mp3"
    }
];

// Add a song
function addSong() {
    // Checks if file element already exists
    if (document.getElementById("file")) {
        document.getElementById("file").remove();
    }

    // Creates file element & makes the user click it
    var fileElement = document.createElement("input");
    fileElement.setAttribute("id", "file");
    fileElement.setAttribute("type", "file");
    fileElement.setAttribute("accept", allowedFiles.toString());
    fileElement.setAttribute("multiple", "");
    document.getElementById("hiddenContent");
    fileElement.click();
}

// Runs a song from queue
function runSong(index) {
    // Checks if a source tag already exists
    if (document.getElementById("source")) {
        document.getElementById("source").remove();
        document.getElementById("song").load();
    }

    // Sets a source tag into the video element
    var sourceElement = document.createElement("source");
    sourceElement.setAttribute("id", "source");
    sourceElement.setAttribute("src", queue[index].song);
    document.getElementById("song").appendChild(sourceElement);
}