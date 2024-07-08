document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audioPlayer");
    var playPauseButton = document.getElementById("playPauseButton");
    var iconoPlayPause = document.getElementById("iconoPlayPause");

    // Intentar reproducir el audio automáticamente al cargar la página
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(function() {
            console.log('Autoplay started successfully');
            iconoPlayPause.classList.remove("fa-play");
            iconoPlayPause.classList.add("fa-pause");
        }).catch(function(error) {
            console.log('Autoplay failed: ', error);
            iconoPlayPause.classList.add("fa-play");
        });
    }

    // Agregar event listener para el botón de play/pause
    playPauseButton.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            iconoPlayPause.classList.remove("fa-play");
            iconoPlayPause.classList.add("fa-pause");
        } else {
            audio.pause();
            iconoPlayPause.classList.add("fa-play");
            iconoPlayPause.classList.remove("fa-pause");
        }
    });
});





