const dni = document.getElementById("dni");
const edad = parseInt(document.getElementById("edad"));
const nombreCompleto = document.getElementById("nombreCompleto");
const costoConsulta = parseFloat(document.getElementById("costoConsulta"));
const seguro = document.getElementById("tieneSeguro").checked;

let opcionEscogidaEspecialidades = "";
let opcionEscogidaMedicos = "";

let listaPacientes = [];

//Verifico la opcion clickeada en el "dropdown-especialidades"
document.getElementById("listadoEspecialidades").addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.classList.contains("dropdown-item")) 
        opcionEscogidaEspecialidades = e.target.textContent;        
});

//Verifico la opcion clickeada en el "dropdown-medico"
document.getElementById("listadoMedicos").addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.classList.contains("dropdown-item")) 
        opcionEscogidaMedicos = e.target.textContent;        
});


//Registrar pacientes
document.getElementById("formulario").addEventListener("submit",(e)=>{
    e.preventDefault();

    let tiposBoton = e.submitter.id;

    switch (tiposBoton) {
        case "registrarPaciente":
            
            break;
        case "mostrarPacientes":
            break;

        case "mostrarEstadisticas":
            break;

        default:
            alert("Falta escoger una opcion de envio!!");
            break;
    }

});


