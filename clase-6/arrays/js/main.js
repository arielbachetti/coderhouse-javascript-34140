// Un array es una lista de elementos
// Los elementos pueden ser cualquier valor
const miPrimerArray = [1, { nombre: 'Ariel' } , 6, 'hola', false, []];

// Ejemplos con array de string
const avengers = ['Iron Man', 'Captain America', 'Thor', 'Hulk'];

// Para acceder a los elementos del array lo hacemos con []
// y el valor del indice.
console.log(avengers[2]); // Devuelve Thor
console.log(avengers[10]); // Devuelve undefined

// Para cambiar valores usamos el operador de asignacion (=).
avengers[3] = 'Black Widow';
console.log(avengers);

// Para recorrer el array podemos usar un for.
for (let i = 0; i < avengers.length; i++) {
  console.log(avengers[i]);
}
