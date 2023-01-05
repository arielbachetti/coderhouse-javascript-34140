// Creamos una funcion constructora
function Actor(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = parseInt(edad);
  this.saludar = (saludo) => saludo + ', soy ' + this.nombre
}

// Creamos un objeto con la funcion constructora con new.
const actor1 = new Actor('Will', 'Smith', 53);
console.log(actor1);
console.log(actor1.saludar('Holis'));

// Creamos otro objeto con la funcion constructora con new.
const actor2 = new Actor('Chris', 'Evans', '41');
console.log(actor2);
console.log(actor2.saludar('Hola'));

// Operador in para saber si una propiedad esta en un objeto.
console.log('nombre' in actor1); // true
console.log('nacionalidad' in actor1); // false

// Recorrer los atributos de un objeto.
for (const atributo in actor1) {
  console.log(atributo);
}

// Algunos metodos de los strings:
const miString = 'Hola';
// Obtener el largo en caracteres.
console.log(miString.length);
// Transaformar a mayusculas.
console.log(miString.toUpperCase());
