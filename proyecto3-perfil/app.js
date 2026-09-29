const boton = document.getElementById("btnEstadisticas");
const estadisticas = document.getElementById("estadisticas");

boton.addEventListener("click", function () {
    estadisticas.textContent = "Estadísticas disponibles";
});
botonMostar.addEventListener("click", () => {
    estadisticas.textContent = "Carreras: 10 | puntos: 250";
});