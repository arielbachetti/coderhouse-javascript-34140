const objeto = {
  nombre: 'Ariel',
  edad: 31
}

// setItem nos permite guardar en el storage
// un valor bajo una clave.
// El primer parametro es la clave y el segundo
// el valor.
localStorage.setItem('nombreUsuario', 'Ariel');
localStorage.setItem('edadUsuario', 31);

// Con getItem podemos obtener los valores del storage
// mediante el nombre de la clave.
const nombre = localStorage.getItem('nombreUsuario');
console.log(nombre);
console.log(localStorage.getItem('edadUsuario'));

// Si no existe retorna null.
console.log(localStorage.getItem('estoNoExiste'));

// Como el storage solo puede almacenar strings, debemos
// guardar los objetos y arrays como JSON.
localStorage.setItem('unObjeto', JSON.stringify(objeto));
const objetoDelStorage = localStorage.getItem('unObjeto');
console.log(objetoDelStorage);
const objetoDelStorageParseado = JSON.parse(objetoDelStorage);
console.log(objetoDelStorageParseado);

// removeItem se utiliza para borrar una determinada clave
// del storage.
localStorage.removeItem('unObjeto');

// clear se utiliza para borrar todo el contenido del storage
// (todas las claves).
localStorage.clear();

// localStorage es global del navegador sin importar si cerramos
// o abrimos pestañas.
// Session storage es por pestaña del navegador. Con este ejemplo pueden
// comprobar que si hacen click en el boton en diferentes pestañas
// los valores de random serán distintos.
document.getElementById('boton').addEventListener('click', () => {
  sessionStorage.setItem('unaClaveDeLaSession', Math.random());
});
