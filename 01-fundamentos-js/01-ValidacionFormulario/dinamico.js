const formulario = document.getElementById('formulario');
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const dinero = document.getElementById("dinero");

const error_nombre = document.getElementById("error_nombre");
const error_edad = document.getElementById("error_edad");
const error_dinero = document.getElementById("error_dinero");


// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const exito = document.getElementById("exito");
//     const fracaso = document.getElementById("fracaso");

//     if (nombre.value.trim() !== "" && parseInt(edad.value) >= 18 && parseFloat(dinero.value)>= 50) {
//         exito.classList.remove('d-none');
//         return;
//     } else {
//         fracaso.classList.remove('d-none');
//         return;
//     }

// });

nombre.addEventListener('input', () => {
    if (nombre.value.trim() === "") {
        error_nombre.classList.remove('d-none');
    }else{
        error_nombre.classList.add('d-none');
    }
});

edad.addEventListener('input', () => {
    if (parseInt(edad.value) >=18) {
        error_edad.classList.add('d-none');
    }else{
        error_edad.classList.remove('d-none');
    }
});

dinero.addEventListener('input', () => {
    if (parseFloat(dinero.value) >=50) {
        error_dinero.classList.add('d-none');
    }else{
        error_dinero.classList.remove('d-none');
    }
});