document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const tableRows = document.querySelectorAll("tbody tr");

    const botonLeerMas = document.getElementById("boton-leer-mas");
    const cvAbreviado = document.getElementById("cv-abreviado");
    const cvCompleto = document.getElementById("cv-completo");

    botonLeerMas.addEventListener("click", function() {
        if (cvCompleto.style.display === "none") {
            cvCompleto.style.display = "block";
            cvAbreviado.style.display = "none";
            botonLeerMas.textContent = "Leer menos";
        } else {
            cvCompleto.style.display = "none";
            cvAbreviado.style.display = "block";
            botonLeerMas.textContent = "Leer más";
        }
    });

    form.addEventListener("submit", function(event) {

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const edad = document.getElementById("edad").value;
        const direccion = document.getElementById("direccion").value;
        const provincia = document.getElementById("provincia").value;
        const codigoPostal = document.getElementById("codigoPostal").value;
        const metodoContacto = document.querySelector('input[name="contacto"]:checked').value;

        tableRows[0].cells[1].textContent = nombre;
        tableRows[1].cells[1].textContent = apellido;
        tableRows[2].cells[1].textContent = email;
        tableRows[3].cells[1].textContent = telefono;
        tableRows[4].cells[1].textContent = edad;
        tableRows[5].cells[1].textContent = direccion;
        tableRows[6].cells[1].textContent = provincia;
        tableRows[7].cells[1].textContent = codigoPostal;
        tableRows[8].cells[1].textContent = metodoContacto;

        const suscripciones = Array.from(document.querySelectorAll('input[name="suscripcion"]:checked'))
                                  .map(checkbox => checkbox.value)
                                  .join(", ");
        tableRows[9].cells[1].textContent = suscripciones;
    });
});

