//Recopilacion de data
const nombre = $("#nombre");
const edad = $("#edad");
const compras = $("#compras");
const premium = $("#premium");

const formulario = $("#formulario");

formulario.on("submit", function (e) {
    e.preventDefault();
    formulario.addClass("d-none");

    const cliente = {
        nombre: nombre.val().trim(),
        edad: parseInt(edad.val()),
        compras: parseFloat(compras.val()),
        premium: premium.prop("checked")
    };

    let respuesta_fija = `
    <strong>Nombre:</strong> ${cliente.nombre}<br>
    <strong>Edad:</strong> ${cliente.edad}<br>
    <strong>Compras:</strong> ${cliente.compras}<br> 
    <strong>Premium:</strong> ${cliente.premium?"Si":"No"}<br>
    `;

    if (cliente.edad >= 21 && cliente.compras >= 1000 && cliente.premium) {
        $("#cabecera").text("Resultado: Cliente VIP");
        cliente.categoria = "VIP Oro";
        cliente.descuento = "25%";
        cliente.total = cliente.compras - (0.25*cliente.compras);

    } else {
        $("#cabecera").text("Cliente No Premium");
        cliente.categoria = "Cliente Regular";
        cliente.descuento = "0%";
        cliente.total = cliente.compras;
    }
    respuesta_fija+=`
    <strong>Categoria:</strong> ${cliente.categoria}<br>
    <strong>Descuento:</strong> ${cliente.descuento}<br>
    <strong>Total:</strong> ${cliente.total}
    `;

    $("#tarjeta").removeClass("d-none");
    $("#resultado").html(respuesta_fija);

});


