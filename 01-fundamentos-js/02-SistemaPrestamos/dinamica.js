// Reglas del banco

// Recopilamos data de los inputs 
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const ingreso = document.getElementById("ingreso");
const monto = document.getElementById("monto");
const desplegable = document.getElementById("desplegable");

//Padre de opciones
const parentOpciones = document.getElementById('padre');
const opciones = document.querySelectorAll(".dropdown-item"); //NodeList

const formulario = document.getElementById("formulario");

let opcion_escogida = "";

// Desplegable segun opcion escogida
opciones.forEach(opcion => {
    opcion.addEventListener("click", (e) => {
        e.preventDefault();
        opcion_escogida = opcion.textContent.trim().toLowerCase();
        desplegable.textContent = opcion_escogida;
    });
});

// Reglas de validacion
nombre.addEventListener("input", () => {
    const nombre_error = document.getElementById('nombre_error');
    if (nombre.value.trim() === "") {
        nombre_error.classList.remove('d-none');
    } else nombre_error.classList.add('d-none');
});

edad.addEventListener("input", () => {
    const edad_error = document.getElementById("edad_error");
    if (parseInt(edad.value.trim()) >= 18 && parseInt(edad.value.trim()) <= 65) {
        edad_error.classList.add('d-none');
    } else edad_error.classList.remove('d-none');
});

ingreso.addEventListener("input", () => {
    const ingreso_error = document.getElementById("ingreso_error");
    if (parseFloat(ingreso.value.trim()) > 1025) {
        ingreso_error.classList.add('d-none');
    } else ingreso_error.classList.remove('d-none');
});

monto.addEventListener("input", () => {
    const monto_error = document.getElementById("monto_error");
    if (parseFloat(monto.value.trim()) > 0) {
        monto_error.classList.add('d-none');
    } else monto_error.classList.remove('d-none');
});

parentOpciones.addEventListener("click", (e) => {
    const tipo_error = document.getElementById("tipo_error");
    e.preventDefault();
    if (e.target.textContent === "Indefinido" || e.target.textContent === "Temporal" || e.target.textContent === "Independiente") {
        tipo_error.classList.add('d-none');
    } else tipo_error.classList.remove('d-none');
});

// Reglas de aprobacion

function maximo() {
    let maximo = 0;
    switch (opcion_escogida) {  //temporal , 2000
        case "indefinido":
            maximo = parseFloat(ingreso.value) * 15;
            break;
        case "temporal":
            maximo = parseFloat(ingreso.value) * 8;
            break;
        default:
            maximo = parseFloat(ingreso.value) * 5;
            break;
    }
    return maximo;
}


function aprobacion(monto, maximo) {
    let mensaje = "";
    if (monto > maximo) {
        mensaje = `Prestamo rechazado.\nEl maximo permitido es S/.${maximo}.`
    } else mensaje = "Prestamo aprobado";
    return mensaje;
}

// Validacion de operaciones
formulario.addEventListener('submit', (e) => {
    const tarjeta = document.getElementById("tarjeta");
    const ingreso_result = document.getElementById("ingreso_result");
    const contrato_result = document.getElementById("contrato_result");
    const maximo_result = document.getElementById("maximo_result");
    const solicita_result = document.getElementById("solicita_result");
    const aprobado_result = document.getElementById("aprobado_result");

    e.preventDefault();
    formulario.classList.add('d-none');
    tarjeta.classList.remove('d-none');

    ingreso_result.textContent = "Ingreso: "+parseFloat(ingreso.value); 
    contrato_result.textContent = "Contrato: "+opcion_escogida; 
    maximo_result.textContent = "Maximo: "+maximo(); 
    solicita_result.textContent = "Solicita: "+parseFloat(monto.value);
    aprobado_result.textContent = "Resultado: "+aprobacion(parseFloat(monto.value),maximo());     
});