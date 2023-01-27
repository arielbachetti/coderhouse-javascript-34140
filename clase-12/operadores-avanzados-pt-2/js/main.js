// Destructuring (objetos)
const avenger = {
  numeroDeCredencial: 2,
  alias: 'Iron Man',
  nombre: 'Tony Stark',
  edad: 40,
  direccion: {
    calle: 'Calle falsa',
    numero: 123,
  }
};

const nombre = avenger.nombre;
const {
  numeroDeCredencial: id,
  alias,
  edad,
  noExiste,
  direccion: { calle }
} = avenger;

console.log(nombre);
console.log(alias);
console.log(edad);
console.log(noExiste);
console.log(calle);
console.log(id);

// Destructuring de parametros
const obtenerAliasAvenger = ({ alias }) => alias;

console.log(obtenerAliasAvenger(avenger));

// Destructuring (array)
const nombresAvengers = ['Captain America', 'Thor', 'Iron Man', 'Hulk'];

const [nombre1, nombre2] = nombresAvengers;

console.log(nombre1);
console.log(nombre2);

// Spread arrays
console.log(nombresAvengers);
console.log(nombresAvengers[0], nombresAvengers[1], nombresAvengers[2], nombresAvengers[3]);
console.log(...nombresAvengers);

// Ejemplo spread con min y max
const numeros = [1, 67, 89, 34, 3];
console.log(Math.max(1, 67, 89, 34, 3));
console.log(Math.max(...numeros));

// Spread de un array en otro array
const masNombresDeAvengers = ['Vision', 'Spiderman'];
const nuevoArray = [...nombresAvengers, ...masNombresDeAvengers]
console.log(nuevoArray);

// Spread de un array en un objeto
const objeto = { ...nombresAvengers }
console.log(objeto);

// Spread objetos
const nuevoAvenger = {
  ...avenger,
  alias: 'Ari',
  nombre: 'Ariel'
}

console.log(nuevoAvenger);

// Rest parameters
const sumar = (...numeros) => {
  console.log(numeros);
  return numeros.reduce((acc, numero) => acc + numero, 0);
}

console.log(sumar(1, 2, 3));
