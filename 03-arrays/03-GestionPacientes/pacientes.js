//RECOPILACION DE DATOS
const dni = document.getElementById("dni");
const edad = document.getElementById("edad");
const nombreCompleto = document.getElementById("nombreCompleto");
const costoConsulta = document.getElementById("costoConsulta");
const seguro = document.getElementById("tieneSeguro");
const canvas = document.getElementById("graficoPacientes");

let opcionEscogidaEspecialidades = "";
let opcionEscogidaMedicos = "";
let pacienteS = 0;
let pacienteNS = 0;

//Pacientes Registrados
let listaPacientes = [];

//Variable global de grafico
let miGrafico = null;

//----------------------------------------------------------------------
//RECOPILACION DE DATOS DE DROPDOWNS

//Recopilar la opcion clickeada en el "dropdown-especialidades"
document.getElementById("listadoEspecialidades").addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.classList.contains("dropdown-item"))
        opcionEscogidaEspecialidades = e.target.textContent;
});

//Recopilar la opcion clickeada en el "dropdown-medico"
document.getElementById("listadoMedicos").addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.classList.contains("dropdown-item"))
        opcionEscogidaMedicos = e.target.textContent;
});

//----------------------------------------------------------------------
//FUNCION PARA REGISTRAR PACIENTE
function registrarPaciente() {
    //realiza validacion de campos
    if (dni.value.trim() === "" || nombreCompleto.value.trim() === "" || costoConsulta.value.trim() === "") {
        alert("Completar los campos faltantes");
        return;
    }

    let paciente = {
        dni: dni.value,
        edad: parseInt(edad.value),
        nombre: nombreCompleto.value,
        costo: parseFloat(costoConsulta.value),
        seguro: seguro.checked,
        especialidad: opcionEscogidaEspecialidades,
        medico: opcionEscogidaMedicos
    };

    //Actualizamos contadores
    if (paciente.seguro) {
        pacienteS++;
        document.getElementById("pacientesConSeguro").textContent = pacienteS;
    } else {
        pacienteNS++;
        document.getElementById("pacientesSinSeguro").textContent = pacienteNS;
    }

    document.getElementById("pacientesTotales").textContent = pacienteS + pacienteNS;
    listaPacientes.push(paciente);

    //Limpiamos el formulario (menos el checkbox)
    dni.value = "";
    edad.value = "";
    nombreCompleto.value = "";
    costoConsulta.value = "";
    opcionEscogidaEspecialidades = "";
    opcionEscogidaMedicos = "";
    alert("Paciente registrado con exito!!");
    
    document.querySelector("#formulario input:first-of-type").focus();
}

//----------------------------------------------------------------------
//FUNCION PARA MOSTRAR PACIENTES
function mostrarPaciente() {
    if (listaPacientes.length == 0) {
        alert("No hay pacientes registrados!");
        return;
    }

    //mostramos la tarjeta
    document.getElementById("tarjeta").classList.remove("d-none");

    //mostramos resultado, ocultar canvas
    document.getElementById("resultado").classList.remove("d-none");
    canvas.classList.add("d-none")

    //cambiamos cabecera
    document.getElementById("cabecera").textContent = "HISTORIAL";

    //generamos el listado
    let mensaje = document.getElementById("resultado");
    mensaje.innerHTML = `<h4><strong>PACIENTES REGISTRADOS [${listaPacientes.length}]<strong></h4><hr>`;

    listaPacientes.forEach((paciente, indice) => {
        mensaje.innerHTML += `
            Paciente #${indice + 1}<br>
            DNI: ${paciente.dni}<br>
            Edad: ${paciente.edad}<br>
            Nombre Completo: ${paciente.nombre}<br>
            Especialidad: ${paciente.especialidad}<br>
            Medico Asignado: ${paciente.medico}<br>
            Costo de Consulta: S/.${paciente.costo}<br>
            Seguro: ${paciente.seguro ? "Si" : "No"}<br>
            <hr>
        `;
    });
}

//FUNCION PARA MOSTRAR ESTADISTICAS
function mostrarEstadisticas() {
    if (listaPacientes.length === 0) {
        alert("No hay datos registrados para mostrar!");
        return;
    }

    //mostramos tarjeta
    document.getElementById("tarjeta").classList.remove("d-none");

    //ocultamos resultado, mostramos canvas
    document.getElementById("resultado").classList.add("d-none");
    canvas.classList.remove("d-none");

    //Cambiamos cabecera
    document.getElementById("cabecera").textContent = "ESTADISTICAS";

    //Destruimos grafico anterior
    if (miGrafico) {
        miGrafico.destroy();
        miGrafico=null;
    }

    //Grafico barras (Mostramos "Pacientes con Seguro" vs "Sin Seguro")
    miGrafico = new Chart(canvas,{
        type:"bar",
        data:{
            labels:["Con Seguro","Sin Seguro"],
            datasets:[{
                data:[pacienteS,pacienteNS],
                backgroundColor:["#ffc107","#dc3545"]
            }]
        }
    });
}

//----------------------------------------------------------------------
//EVENTO DE BOTONES
//"registrarPaciente", "mostrarPacientes" y "mostrarEstadisticas"

document.getElementById("registrarPaciente").addEventListener("click", (e) => {
    e.preventDefault();
    registrarPaciente();
});

document.getElementById("mostrarPacientes").addEventListener("click", (e) => {
    e.preventDefault();
    mostrarPaciente();
});

document.getElementById("mostrarEstadisticas").addEventListener("click", (e) => {
    e.preventDefault();
    mostrarEstadisticas();
});

document.getElementById("ocultar").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("tarjeta").classList.add("d-none");
});
