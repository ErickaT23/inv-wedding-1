document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audioPlayer");
    var playPauseButton = document.getElementById("playPauseButton");
    var iconoPlayPause = document.getElementById("iconoPlayPause");
    var initials = document.getElementById("initials");

    // Asegura que el audio esté completamente cargado antes de permitir interacciones
    audio.addEventListener('canplaythrough', function() {
        // Activar los eventos de clic una vez que el audio esté listo
        initials.addEventListener("click", function() {
            togglePlayPause();
        });

        playPauseButton.addEventListener("click", function() {
            togglePlayPause();
        });

        // Función para alternar entre reproducir y pausar
        function togglePlayPause() {
            if (audio.paused) {
                audio.play().then(() => {
                    // Cambiar el icono a "pausa" cuando el audio comience a reproducirse
                    iconoPlayPause.classList.remove("fa-play");
                    iconoPlayPause.classList.add("fa-pause");
                }).catch(error => {
                    console.log('Playback failed: ', error);
                });
            } else {
                audio.pause();
                // Cambiar el icono a "play" cuando el audio esté pausado
                iconoPlayPause.classList.add("fa-play");
                iconoPlayPause.classList.remove("fa-pause");
            }
        }
    });
});