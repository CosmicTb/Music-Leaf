/*
    This controls anything that happens in the contol bar (E.g. The playback timeline)
*/

// Allowed files to import (Audio, video & other formats are split for it to be easier when displaying song visuals)
const audioFormats = [".mp3", ".wav"];
const videoFormats = [".mp4", ".mpeg"];
const otherFormats = [];
const allowedFiles = audioFormats.concat(videoFormats.concat(otherFormats));

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

// Song index that is running
let songIndex = null;

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

    // Checks for if the user actually adds a song or not
    fileElement.addEventListener("change", (e) => {
        // Grabs files that were imported & puts them into the queue
        const importedSongs = Array.from(e.target.files);
        if (importedSongs) {
            console.log(importedSongs);
            importedSongs.forEach(songFile => {
                // Checks if the file type is allowed. If not, it will not be added
                const filetype = songFile.name.slice(songFile.name.lastIndexOf("."));
                if (allowedFiles.indexOf(filetype) != -1) {
                    const songItemURL = window.URL.createObjectURL(songFile);
                    const songItem = {
                        "name": songFile.name.slice(0, songFile.name.lastIndexOf(".")),
                        "filetype": songFile.name.slice(songFile.name.lastIndexOf(".")),
                        "cover": null,
                        "length": null,
                        "song": songItemURL
                    };
                    queue.push(songItem);
                }
            });
        }
    });
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

    // Sets title of song
    document.getElementById("songName").innerText = queue[index].name;
    document.getElementById("songName").setAttribute("title", queue[index].name);

    // Sets song's file type
    document.getElementById("fileType").innerText = queue[index].filetype;
    document.getElementById("fileType").setAttribute("title", queue[index].filetype);

    // Updates the song playing index & refreshes the visual
    songIndex = index;
    refreshVisual();
}