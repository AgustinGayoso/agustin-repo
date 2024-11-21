let puntuacionJugador = 0;
let puntuacionComputadora = 0;

function obtenerEleccionComputadora() {
    const opciones = ["piedra", "papel", "tijera"];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}

function determinarGanador(eleccionJugador, eleccionComputadora) {
    if (eleccionJugador === eleccionComputadora) return "empate";

    if (
        (eleccionJugador === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionJugador === "papel" && eleccionComputadora === "piedra") ||
        (eleccionJugador === "tijera" && eleccionComputadora === "papel")
    ) {
        puntuacionJugador++;
        return "ganaste";
    } else {
        puntuacionComputadora++;
        return "perdiste";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".boton");
    const resultadoTexto = document.getElementById("resultados");
    const puntuacionTexto = document.getElementById("puntuacion");


    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const eleccionJugador = boton.getAttribute("data-choice");
            const eleccionComputadora = obtenerEleccionComputadora();
            const resultado = determinarGanador(eleccionJugador, eleccionComputadora);

            resultadoTexto.textContent = `Elegiste ${eleccionJugador}, la computadora eligió ${eleccionComputadora}. ¡${resultado}!`;
            puntuacionTexto.textContent = `Puntuación: Jugador ${puntuacionJugador} - ${puntuacionComputadora} Computadora`;
        });
    });
});