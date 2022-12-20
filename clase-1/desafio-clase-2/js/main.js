// Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.
let entradaNumero = prompt("Ingrese un numero para sumarle 10");
const numeroASumar = 10;
let entradaNumeroParseada = parseInt(entradaNumero);
let salidaNumero  = entradaNumeroParseada + numeroASumar;
console.log(salidaNumero);
