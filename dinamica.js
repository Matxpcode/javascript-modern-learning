// Mostramos la opcion escogida en el dropdown
const desplegable = document.getElementById("desplegable");
const opciones = document.querySelectorAll('.dropdown-item');  //nodelist

let opcionEscogida = null;

opciones.forEach((opcion)=>{
    opcion.addEventListener('click',function(e){
        e.preventDefault();
        opcionEscogida = this.textContent;
        desplegable.textContent = opcionEscogida;
    });
});
