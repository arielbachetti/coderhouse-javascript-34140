// Ejemplo con setTimeout
console.log('Otro codigo 1');

setTimeout(() => {
  console.log('Soy el setTimeout');
}, 0);

console.log('Otro codigo 2');

// Ejemplo de setInterval
const id = setInterval(() => {
  console.log('Soy el setInterval');
}, 1000);

// Detenemos el setInterval
clearInterval(id);

const idTimeout = setTimeout(() => {
  clearInterval(id);
}, 5000);

// Detenemos la ejecución del setTimeout (si es que no
// se ejecutó)
clearTimeout(idTimeout);
