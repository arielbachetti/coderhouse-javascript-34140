// Con createElement podemos crear un nuevo elemento del dom
// especificando por parámetro el nombre de la etiqueta.
// Solo con crear el elemento no alcanza, luego tenemos que
// agregarlo a otro elemento existente del DOM con el método
// append().
const h1 = document.createElement('h1');
h1.innerText = 'Hola agregar elemento!';
document.body.append(h1);

// Para eliminar elementos del DOM usamos el método remove().
const elementos = document.getElementsByClassName('elemento');
const lista = document.getElementById('lista');
lista.remove();

// Para acceder/modificar al valor de un input utilizamos la
// propiedad value.
const input = document.getElementById('nombre');
input.value = 'Ariel';
