// Operador ++
let contador = 0;
contador = contador + 1;
contador++;
contador += 1;
console.log(contador);

// Operador ternario
const valor = 10;

if (valor > 100) {
  console.log('Es mayor a 100');
} else {
  console.log('No es mayor a 100');
}

const mensaje = valor > 100 ? 'Es mayor a 100': 'No es mayor a 100';

console.log(mensaje);

// Operador && (lazy evaluation)
valor > 100 && console.log('Es mayor a 100');

const resultadoAnd = valor > 100 && 'Un nuevo valor';
console.log(resultadoAnd);

// Operador ||
const resultadoOr = '' || 'Un valor (or)';
console.log(resultadoOr);
console.log(0 || 'Un valor (or)');

// nullish coalescing
// Similar a || pero solo devuelve el 2do operando
// con null y undefined
console.log(null ?? 'Nullish');
console.log(undefined ?? 'Nullish');
console.log(0 ?? 'Nullish');

// Acceso condicional a un objeto
const avenger1 = {
  alias: 'Iron Man',
  nombre: 'Tony Stark',
  edad: 40,
  direccion: {
    calle: 'Calle falsa',
    numero: 123,
  }
};
const avenger2 = {
  alias: 'Thor',
  nombre: 'Thor',
  edad: 100000
};

console.log(avenger1.direccion.calle);
console.log(avenger2?.direccion?.calle);
