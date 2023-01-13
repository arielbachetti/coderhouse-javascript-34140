// Obtenemos un elemento del dom con getElementById y pasandole
// por parametro el id del elemento.
const titulo = document.getElementById('avengers-titulo');

// Editamos la propiedad inner text para cambiar el contenido
// dentro de la etiqueta. No podemos usar HTML, es solo texto.
titulo.innerText = 'The Avengers!';

// Para saber si el resultado de getElementById efectivamente
// encontró un valor podemos usar in if.
const container = document.getElementById('container-avengers');
if (container) {
  console.log('Se muestra solo si existe')
}

// Si el id no existe en el documento de html, retorna null.
const noExiste = document.getElementById('no-existe');
console.log(noExiste); // null

// Para buscar todos los elementos que implementan una clase de css podemos usar
// getElementsByClassName pasando el nombre de la clase por parámetro.
// El resultado es un array de todos los elementos que implementen la clase.
// Si ningún elemento la implementa, devuelve un array vacío.
const avengers = document.getElementsByClassName('avenger');
if (avengers.length > 0) {
  console.dir(avengers);
  console.log('El array tiene al menos un elemento');
}

// Podemos obtener el listado de todos las etiquetas de un mismo tipo
// con getElementsByTagName pasando el nombre de la etiqueta por parámetro.
// La desventaja es que es muy probable que la etiqueta se use en muchas partes
// del archivo html, por lo que no siempre puede servirnos.
// También devuelve un array.
console.dir(document.getElementsByTagName('li'));

// Con la propiedad innerHtml podemos modificar el contenido de una etiqueta
// Y será interpretado como codigo HTML.
const subtitulo = document.getElementById('avengers-subtitulo');
subtitulo.innerHTML = "<p>The Earth's mightest heroes!</p>";

// Con className podemos editar la clase de una etiqueta de HTML.
// Si queremos usar multiples clases debemos separarlas con espacios
// de la misma forma que hacemos en HTML.
// En este ejemplo vamos a asignar un color aleatorio seleccionado del
// array de colores. Para ello usamos la los métodos floor y random
// en conjunto.
const color = document.getElementById('color-aleatorio');
const colores = ['rojo', 'azul', 'amarillo'];
color.className = colores[Math.floor(Math.random() * colores.length)];
