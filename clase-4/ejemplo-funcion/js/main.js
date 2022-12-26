// Ejemplo funciones

// Declararamos una funcion (analogo a inicializar una variable)
function saludar() {
  const nombre = prompt('Ingrese nombre');
  alert('Hola ' + nombre);
}

// Llamada a la funcion.
saludar();

// Ejemplo funcion anonima
const saludarAnonima = () => {
  const nombre = prompt('Ingrese nombre (anonima)');
  alert('Hola ' + nombre);
}

// Ejemplo funcion flecha
// La funcion fleta es una funcion anonima de sintaxis
// simplificada.
// const suma = (num1, num2) => {
//   return num1 + num2
// }
const suma = (num1, num2) => num1 + num2

console.log(suma(2,2));
