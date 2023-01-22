const div = document.getElementById('ejemplos-mouse');

// Se ejecuta cuando presionamos el mouse (sin importar
// si lo soltamos o no).
div.addEventListener('mousedown', () => {
  console.log('mousedown');
});

// Se ejecuta cuando soltamos el mouse una vez presionado.
div.addEventListener('mouseup', () => {
  console.log('mouseup');
});

// Se ejecuta cuando hacemos click.
// Es importante saber que se ejecuta siempre después
// de mousedown y mouseup.
div.addEventListener('click', () => {
  console.log('click');
});

// Se ejecuta cuando posicionamos el cursor sobre el elemento.
div.addEventListener('mouseover', () => {
  console.log('mouseover');
});

// Se ejecuta cuando movemos el cursor fuera del elemento.
div.addEventListener('mouseout', () => {
  console.log('mouseout');
});

// Se ejecuta cada vez que movemos el mouse sobre el elemento.
// Ojo que mientras que movamos el cursor sobre el elemento,
// se va a ejecutar.
div.addEventListener('mousemove', () => {
  console.log('mousemove');
});

const input = document.getElementById('ejemplos-teclado');

// Se ejecuta cuando presionamos una tecla del teclado mientras
// estamos posicionados en un elemento (input en el ejemplo).
input.addEventListener('keydown', () => {
  console.log('keydown');
});

// Se ejecuta cuando soltamos una tecla del teclado mientras
// estamos posicionados en un elemento (input en el ejemplo).
input.addEventListener('keyup', () => {
  console.log('keyup');
});

// Se ejecuta cuando el contenido del elemento (input) cambió
// y movemos el foco a otro elemento.
input.addEventListener('change', () => {
  console.log('change');
});

// Se ejecuta cada vez que el input cambia su value.
input.addEventListener('input', () => {
  console.log('input');
});

const formulario = document.getElementById('formulario');

// El evento submit se ejecuta cuando se presiona el botón
// submit de un formulario.
// En el contexto del evento que llega por parametro debemos
// ejecutar preventDefault() para evitar el comportamiento por
// defecto (refrescar la pagina).
formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  console.log(parseInt(e.target[1].value));
  console.log('submit');
})

// Aclaración: todos los eventos reciben un parametro con el contexto
// del evento. Si no vamos a usarlo, podemos no incluirlo como sucede
// con los primeros ejemplos.
