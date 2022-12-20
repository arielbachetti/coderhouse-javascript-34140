// Aprendemos a declarar y asignar variables

// Ejemplo con let, recuerden que let permite cambiarle el valor a la variable.
let miPrimerVariableNumerica = 5;
miPrimerVariableNumerica = 10;
// Ejemplo con const, recuerden que const es una constante y no se permite cambiar el valor de la misma.
const miPrimerConstante = 20;

// Con console log podemos ver el contenido de nuestras vaiables por la consola del browser.
console.log("miPrimerVariableNumerica", miPrimerVariableNumerica);
console.log("miPrimerConstante", miPrimerConstante);

// Ejemplo de una suma y una multiplicacion
const numero1 = 1;
const numero2 = 2;
let resultadoSuma = numero1 + numero2;
console.log("resultadoSuma", resultadoSuma)
console.log("multiplicacion", numero1 * numero2);

// Concatenacion de strings (texto)
const nombre = 'Ariel';
const saludo = 'Hola como estas';

const saludoAriel = saludo + ', ' + nombre;
console.log("saludoAriel", saludoAriel);
