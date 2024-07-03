function actualizarContador() {
    const fechaBoda = new Date("August 3, 2024 00:00:00").getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;

    // Cuando la cuenta regresiva termine, muestra un mensaje
    if (diferencia < 0) {
        clearInterval(intervalo);
        document.getElementById("contador").innerHTML = "¡Es el día de la boda!";
    }
}

// Actualizar el contador cada segundo
let intervalo = setInterval(actualizarContador, 1000);
