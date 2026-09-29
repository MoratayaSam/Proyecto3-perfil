const boton = document.getElementById("btnEstadisticas");
const estadisticas = document.getElementById("estadisticas");

boton.addEventListener("click", function () {
    estadisticas.textContent = "Estadísticas disponibles";
});