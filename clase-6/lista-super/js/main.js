// Ejemplo de una lista de supermercado.
const listaSuper = [];

let entrada;
do {
  entrada = prompt('Ingrese un producto. Ingrese FIN para terminar');
  if (entrada != 'FIN') {
    listaSuper.push(entrada);
  }
} while (entrada != 'FIN');

// Mostramos la cantidad de elementos ingresados.
alert('La lista tiene ' + listaSuper.length + ' productos.');
// Mostramos todos los elementos unos abajo de otro.
alert('La lista tiene:\n' + listaSuper.join('\n'));
