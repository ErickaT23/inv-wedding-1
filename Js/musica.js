document.getElementById("playPauseButton").addEventListener("click", function() {
    var audio = document.getElementById("audioPlayer");
    if (audio.paused) {
        audio.play();
        document.getElementById("iconoPlayPause").classList.remove("fa-play");
        document.getElementById("iconoPlayPause").classList.add("fa-pause");
    } else {
        audio.pause();
        document.getElementById("iconoPlayPause").classList.add("fa-play");
        document.getElementById("iconoPlayPause").classList.remove("fa-pause");
    }
});
