let avengers = ['Iron Man', 'Captain America', 'Thor', 'Hulk'];

// Length muestra la cantidad de elementos del array.
console.log('length', avengers.length);

// Con push agregamos un elemento al final del array.
console.log(avengers.push('Black Widow'));
// Con unshift agregamos un elemento al principio del array.
console.log(avengers.unshift('Hawkeye'));
console.log('agregar elementos', avengers);

// Con pop removemos un elemento del final del array.
console.log(avengers.pop());
// Con shift removemos un elemento del principio del array.
console.log(avengers.shift());
console.log('quitar elementos', avengers);

// splice(param1, param2) remueve desde el indice param1 la cantidad
// de elementos especificado en el param 2.
avengers.splice(0, 2);
console.log('splice', avengers);

avengers = ['Iron Man', 'Captain America', 'Thor', 'Hulk'];
// Join junta los arrays con el sring que se le pasa por parametro
// y devuelve un string.
console.log('join', avengers.join(', ')); // 'Iron Man, Captain America, Thor, Hulk'

// Concat une dos arrays y devuelve un nuevo array con el contenido de ambos.
const nuevosAvengers = ['Spiderman', 'Hawkeye'];
console.log('concat', avengers.concat(nuevosAvengers));
console.log('concat', nuevosAvengers.concat(avengers));

// slice(param1, param2) comienza desde el indice ingresado en param1
// y finaliza en el elemento anterior al indice especificado en el param2.
console.log('slice', avengers.slice(1, 3)); // ['Captain America', 'Thor']

// Devuelve el indice del valor recibido por parametro
// si no existe el valor, devuelve -1
console.log('indexOf', avengers.indexOf('Ariel')); // -1
console.log('indexOf', avengers.indexOf('Thor')); // 2

// Devuelve true si el value existe en el array.
// Si no existe devuelve false.
console.log('includes', avengers.includes('Ariel')); // false
console.log('includes', avengers.includes('Thor')); // true

// Invierte el orden de los valores del array.
// Es destructivo, por lo que modifica el array original.
avengers.reverse();
console.log('reverse', avengers);
