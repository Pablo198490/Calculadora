/*METEMOS LAS CLASES DE HTML EN VARIABES EN JAVA PARA PODER UTILIZARLAS*/

const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador')

const display = new Display(displayValorAnterior, displayValorActual);

/*Mediante esta función hacemos que cuando pulsemos un botón se añada un número al display*/



botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));

});