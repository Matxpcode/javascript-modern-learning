// Mostramos la opcion escogida en el dropdown
const desplegable = document.getElementById("desplegable");
const opciones = document.querySelectorAll('.dropdown-item');  //nodelist

let opcionEscogida = null;

opciones.forEach((opcion) => {
    opcion.addEventListener('click', function (e) {
        e.preventDefault();
        opcionEscogida = this.textContent;
        desplegable.textContent = opcionEscogida;
    });
});

// Realizamos la validacion de inputs
const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");

nombre.addEventListener('input', () => {
    if (nombre.value.trim() !== "") {
        document.getElementById("alerta_nombre").classList.add('d-none');
    } else {
        document.getElementById("alerta_nombre").classList.remove('d-none');
    }
});

precio.addEventListener('input', () => {
    const valor = precio.value.trim();

    if (valor === "" || parseFloat(valor) <= 0) {
        document.getElementById("alerta_precio").classList.remove('d-none');
    } else {
        document.getElementById("alerta_precio").classList.add('d-none');
    }
});

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!opcionEscogida) {
        document.getElementById("alerta_tipo").classList.remove('d-none');
        return;
    } else {
        document.getElementById("formulario").classList.add("d-none")
        document.getElementById("tarjeta").classList.remove("d-none");
        document.getElementById("alerta_completada").classList.remove("d-none");

        document.getElementById("result_nombre").textContent = nombre.value;
        document.getElementById("result_precio").textContent = precio.value;
        document.getElementById("result_tipo").textContent = opcionEscogida;
        
        document.getElementById("descuento").textContent = calcularTodo().porcentaje;
        document.getElementById("total").textContent = calcularTodo().total;
    }
});

// Reglas de descuento

//1.Primera opcion, pero menos eficiente por scope
// let descuento="";

// function total(){
//     if (opcionEscogida === "nuevo") {
//         descuento="5%";        
//         return parseFloat(precio.value) * 0.95;
//     } else if (opcionEscogida === "regular") {
//         descuento="10%";
//         return parseFloat(precio.value) * 0.9;
//     } else {
//         descuento="20%"
//         return parseFloat(precio.value) * 0.8;
//     }
// }

//2.Segunda opcion, mas factible, todo en un objeto
function calcularTodo() {
    let precioNumerico = parseFloat(precio.value.trim());
    let desc = "";
    let neto = 0;

    if (opcionEscogida==="nuevo") {
        desc="5%";
        neto=precioNumerico*0.95;
    }else if(opcionEscogida==="regular"){
        desc="10%";
        neto=precioNumerico*0.9;
    }else{
        desc="20%";
        neto=precioNumerico*0.8;
    }

    return{
        porcentaje:desc,
        total:neto
    }
}