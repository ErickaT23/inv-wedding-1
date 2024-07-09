
document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audioPlayer");
    var playPauseButton = document.getElementById("playPauseButton");
    var iconoPlayPause = document.getElementById("iconoPlayPause");
    var initials = document.getElementById("initials");

    // Evento para iniciar la música al hacer clic en las iniciales
    initials.addEventListener("click", function() {
        togglePlayPause();
    });

    // Agregar event listener para el botón de play/pause
    playPauseButton.addEventListener("click", function() {
        togglePlayPause();
    });

    function togglePlayPause() {
        if (audio.paused) {
            audio.play().then(function() {
                iconoPlayPause.classList.remove("fa-play");
                iconoPlayPause.classList.add("fa-pause");
            }).catch(function(error) {
                console.log('Playback failed: ', error);
                // En caso de fallo, asegurarse de que el icono esté correcto
                iconoPlayPause.classList.add("fa-play");
                iconoPlayPause.classList.remove("fa-pause");
            });
        } else {
            audio.pause();
            iconoPlayPause.classList.add("fa-play");
            iconoPlayPause.classList.remove("fa-pause");
        }
    }
});
