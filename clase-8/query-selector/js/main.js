// Con querySelector podemos acceder a los elementos del DOM
// de la misma forma que utilizamos los selectores de CSS.
// querySelector devuelve el primer elemento que cumpla con
// la condición o null.

// Pedimos el primer elemento p que se encuentre dentro del
// elemento con el id contenedor.
console.dir(document.querySelector('#contenedor p'));

// Pedimos el primer elemento strong dentro del elemento que implemente
// la clase texto
console.dir(document.querySelector('.texto strong'));

// Con querySelectorAll podemos obtener todos los resultados que cumplan
// la condición. Por lo que retorna un array.
console.dir(document.querySelectorAll('.heroe'));

// También podemos acceder a las pseudo clasess de CSS.
console.dir(document.querySelector('.radio:checked'));
