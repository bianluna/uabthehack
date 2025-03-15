document.addEventListener("DOMContentLoaded", function () {
    fetch('http://localhost:3001/citas') // Cambiar URL cuando se suba el backend
        .then(response => response.json())
        .then(data => {
            console.log("Citas médicas recibidas:", data); //Esto es solo un ejemplo
            let citasContainer = document.getElementById("citas");
            citasContainer.innerHTML = ""; // Limpiar el contenido anterior
            data.forEach(cita => {
                let citaElement = document.createElement("div");
                citaElement.innerHTML = `<p><strong>Paciente:</strong> ${cita.paciente} - <strong>Fecha:</strong> ${cita.fecha}</p>`;
                citasContainer.appendChild(citaElement);
            });
        })
        .catch(error => console.error("Error al obtener citas:", error));
});
