//Recopilo la data de los inputs: inputs principales
const nombre = document.getElementById('input-nombre');
const rol = document.getElementById('input-rol');
const ciudad = document.getElementById('input-ciudad');

//Botones y tarjetes
const boton = document.querySelector('button');
const tarjeta = document.querySelector('#tarjeta');
const limpiar = document.getElementById('limpiar');

//Elementos de la tarjeta
const nombreCard = document.getElementById('card-nombre'); //luis
const rolCard = document.getElementById('card-rol');
const ciudadCard = document.getElementById('card-ciudad');


boton.addEventListener('click', () => {
    const fullNombre = nombre.value.slice(0,1).toUpperCase()+ nombre.value.slice(1,nombre.value.length).toLowerCase();
    nombreCard.textContent = fullNombre;

    const rolUpp = rol.value.slice(0,1).toUpperCase()+ rol.value.slice(1,rol.value.length).toLowerCase();
    rolCard.textContent = rolUpp;

    const ciudadUpp = ciudad.value.slice(0,1).toUpperCase()+ ciudad.value.slice(1,ciudad.value.length).toLowerCase();
    ciudadCard.textContent = ciudadUpp;

    //Agregamos un atributo de tipo class a la tarjeta
    boton.classList.add('activo');
    tarjeta.classList.add('tarjeta_luego');
});

limpiar.addEventListener('click', () => {
    nombre.value = "";
    rol.value = "";
    ciudad.value = "";
    nombreCard.textContent = "";
    rolCard.textContent = "";
    ciudadCard.textContent = "";

    //Quitamos los efectos de "Tarjeta Generada"
    boton.classList.remove('activo');
    tarjeta.classList.remove('tarjeta_luego');
});