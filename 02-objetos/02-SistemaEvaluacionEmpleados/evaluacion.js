//Recopilacion de data
const nombre = document.getElementById("nombre");
const cargo = document.getElementById("cargo");
const sueldo = document.getElementById("sueldo");
const anios = document.getElementById("aniosEmpresa");
const activo = document.getElementById("activo");
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    formulario.classList.add("d-none");

    const cabecera = document.getElementById("cabecera");
    const empleado = {
        nombreEmpleado: nombre.value.trim(),
        cargoEmpleado: cargo.value.trim(),
        sueldoEmpleado: parseFloat(sueldo.value.trim()),
        aniosEmpleado: parseInt(anios.value.trim()),
        activoEmpleado: activo.checked
    };

    let respuestaFija = `
    <strong>Empleado</strong>: ${empleado.nombreEmpleado}<br>
    <strong>Cargo:</strong> ${empleado.cargoEmpleado}<br>
    <strong>Sueldo:</strong> S/.${empleado.sueldoEmpleado}<br>
    <strong>Años en la empresa:</strong> ${empleado.aniosEmpleado}<br>
    <strong>Estado:</strong> ${empleado.activoEmpleado?"Activo":"Inactivo"}<br> 
    `;

    //Reglas de negocio
    if (empleado.activoEmpleado && empleado.aniosEmpleado >= 2 && empleado.sueldoEmpleado < 5000) {
        empleado.bono = 0.1 * empleado.sueldoEmpleado.toFixed(2);
        cabecera.textContent = "Resultado: Apto para bono";
    } else {
        empleado.bono = 0;
        cabecera.textContent = "Resultado: No cumple las condiciones para recibir bono";
    }
    respuestaFija += `<strong>Bono:</strong> S/.${empleado.bono}`;

    document.getElementById("resultado").innerHTML = respuestaFija;
    document.getElementById("tarjeta").classList.remove("d-none");
});
