// VERSION 2 DEL CODIGO (Anterior tuvo fallos)
const codigoPaquete = document.getElementById("codigoPaquete");
const destinatario = document.getElementById("destinatario");
const peso = document.getElementById("peso");
const resultado = document.getElementById("resultado");
const formulario = document.getElementById("formulario");

let lista = [];

function respuestaFija(paquete) {
    return `
    <strong>Codigo:</strong> ${paquete.codigo}<br>    
    <strong>Destinatario:</strong> ${paquete.destinatario}<br>    
    <strong>Peso:</strong> ${paquete.peso} Kg<br>    
    <hr>    
    `
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const botonPresionado = e.submitter.id; //registrar o despachar

    if (botonPresionado == "registrar") {
        const paquete = {
            codigo: codigoPaquete.value,
            destinatario: destinatario.value,
            peso: parseFloat(peso.value)
        }
        //obj1, obj2, obj3, ....

        lista.push(paquete);    //[paquete1, paquete2, paquete3, ....]
        formulario.reset();
        codigoPaquete.focus();

    } else if (botonPresionado == "despachar") {
        document.getElementById("formulario").classList.add("d-none");
        document.getElementById("tarjeta").classList.remove("d-none");

        //Total paquetes
        resultado.innerHTML = `<h2><strong>Total de paquetes: </strong>${lista.length}</h2><br>`

        resultado.innerHTML += `<h3><strong>PRIMER PAQUETE</strong></h3>`;
        //Primer paquete
        resultado.innerHTML += respuestaFija(lista[0]);  //obj0       

        resultado.innerHTML += `<br><h3><strong>ULTIMO PAQUETE</strong></h3><br>`;
        //Ultimo paquete
        resultado.innerHTML += respuestaFija(lista[lista.length-1]);     //Objn  
    }
});