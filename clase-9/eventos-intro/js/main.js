const boton = document.getElementById('btn');

// Opcion 1: definir un evento con addEventListener.
// Para ello pasamos como primer parámetro el nombre del
// evento y como segundo parametro el event handler.
// El event handler es una función que contiene el codigo
// que vamos a querer ejecutar cada vez que suceda el evento.
boton.addEventListener('click', () => {
  console.log('Alguien hizo click - addEventListener');
});

// Opcion 2: Otra opcion para definir un evento es con
// la propiedad onnombredelevento. En este caso asignamos
// directamente la función (event handler) a la propiedad.
// boton.onclick = () => {
//   console.log('Alguien hizo click - onclick');
// };
