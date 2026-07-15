//Recopilamos data
const nombreProd = document.getElementById("nombre");
const precioProd = document.getElementById("precio");

let contador = 0;

const productos = [];

//Evento para registrar producto
document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();

    let producto = {
        nombre: nombreProd.value,
        precio: parseFloat(precioProd.value)
    };

    productos.push(producto);

    contador++;

    document.getElementById("numeroProd").textContent = contador;

    //Limpiamos formulario
    nombreProd.value = "";
    precioProd.value = "";
    nombreProd.focus();
});

//Evento para mostrar productos: Primero, Ultimo y Total
document.getElementById("verProd").addEventListener("click", (e) => {
    e.preventDefault();

    if (productos.length === 0) {
        alert("No existen productos registrados");
        return;
    } else {
        document.getElementById("tarjeta").classList.remove("d-none");

        document.getElementById("cabecera").textContent = `Producto #${contador}`;
        document.getElementById("resultado").innerHTML = `
        <strong>Primero: </strong>${productos[0].nombre}<br> 
        <strong>Ultimo: </strong>${productos[productos.length - 1].nombre}<br>
        <strong>Total Productos: </strong>${contador}
    `;
    }
});