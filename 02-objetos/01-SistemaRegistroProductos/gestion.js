const nombre = document.getElementById("nombre");
const categoria = document.getElementById("categoria");
const precio = document.getElementById("precio");
const stock = document.getElementById("stock");
const activo = document.getElementById("activo");
const formulario = document.getElementById("formulario");
const tarjeta = document.getElementById("tarjeta");
const resultado = document.getElementById("resultado");

let producto = {};

//Manejamos el estado -> "añadir", "actualizar" y "eliminar"
let estado = "";

//EVENTO DE ENVIAR FORMULARIO - CREA OBJETO
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    producto = {
        nom_prod: nombre.value,
        cate_prod: categoria.value,
        prec_prod: precio.value,
        sto_prod: stock.value,
        act_prod: activo.checked  //no 'value' porque siempre es 'on'
    };

    tarjeta.classList.remove("d-none");
    listado();
});

//METODO LISTAR PROPIEDADES DEL PRODUCTO
function listado() {
    //1. Dibujamos la base fija de siempre
    let textoHTML = `
        <strong>Nombre:</strong> ${producto.nom_prod}<br>
        <strong>Categoria:</strong> ${producto.cate_prod}<br>
        <strong>Precio:</strong> ${producto.prec_prod}<br>
        <strong>Stock:</strong> ${producto.sto_prod}<br>
        <strong>Activo:</strong> ${producto.act_prod ? "Si" : "No"}
    `;

    //2. Definimos las propiedades fijas que no se repetiran abajo
    const propiedadesFijas = ["nom_prod", "cate_prod", "prec_prod", "sto_prod", "act_prod"];

    //3. Recorremos dinamicamente TODO el objeto para pintar las extras acumuladas
    for (const clave in producto) {
        //Si la clave no es de las fijas, significa que es una propiedad nueva añadida por el usuario
        if (!propiedadesFijas.includes(clave) && clave.trim() != "") {
            textoHTML += `<br><strong>${clave}:</strong> ${producto[clave]}`
        }
    }

    resultado.innerHTML = textoHTML;
}

//BOTON AÑADIR 
const propiedades_nuevas = document.getElementById("propiedades_nuevas");
const propiedad_nombre = document.getElementById("propiedad_nom");
const propiedad_valor = document.getElementById("propiedad_value");

document.getElementById("anadir").addEventListener("click", (e) => {
    estado = "ANADIR";
    document.getElementById("enviar").textContent = "Agregar";
    propiedades_nuevas.classList.remove("d-none");
});

//BOTON ACTUALIZAR
document.getElementById("actualizar").addEventListener("click", (e) => {
    estado = "ACTUALIZAR";
    document.getElementById("enviar").textContent = "Modificar";
    propiedades_nuevas.classList.remove("d-none");
});


//BOTON ELIMINAR
document.getElementById("eliminar").addEventListener("click", (e) => {
    estado = "ELIMINAR";
    document.getElementById("enviar").textContent = "Eliminar";
    propiedades_nuevas.classList.remove("d-none");
    propiedad_valor.disabled=true;
});

//BOTON ENVIAR NUEVAS PROPIEDADES
document.getElementById("enviar").addEventListener("click", (e) => {
    e.preventDefault();

    const nombreExtra = propiedad_nombre.value;
    const valorExtra = propiedad_valor.value;

    if (estado === "ANADIR") {
        if (nombreExtra !== "" && valorExtra !== "") {
            producto[nombreExtra] = valorExtra;
        }
    }
    else if (estado === "ACTUALIZAR") {
        if (nombreExtra !== "" && valorExtra !== "") {
            if (producto.hasOwnProperty(nombreExtra)) {
                producto[nombreExtra] = valorExtra;
            } else { alert("Esa propiedad no existe para ser actualizada"); }
        }
    }
    else if (estado === "ELIMINAR") {
        if (nombreExtra != "") {
            if (producto.hasOwnProperty(nombreExtra)) {
                delete producto[nombreExtra];
                propiedad_valor.disabled=false;
            } else { alert("Esa propiedad no existe, no se puede eliminar"); }
        }
    }

    //Finalizamos refresh de la pantalla con los cambios y limpiamos
    listado();
    propiedad_nombre.value="";
    propiedad_valor.value="";
    propiedades_nuevas.classList.add("d-none");
});

