// Ingresamos un numero, le sumamos 2 y devolvemos el resultado

// Solicitamos el numero al usuario con prompt
let entrada = prompt("Ingrese un numero para sumarle 2");
// Recuerden parsear los valores numericos! Prompt siempre devuelve string (texto).
let entradaParseada = parseInt(entrada);
// Le sumamos 2 a la entrada parseada
let salida  = 2 + entradaParseada;

// Hacemos un console.log() de nuestras variables para saber que contienen y poder buscar mejor los errores.
// Recuerden que en una app real no se deben dejar los console.log(), esto es para hacer pruebas.
console.log("entrada", entrada);
console.log("entradaParseada", entradaParseada);
console.log("salida", salida);

// Usamos alert para mostrar la salida al usuario.
alert(salida);
