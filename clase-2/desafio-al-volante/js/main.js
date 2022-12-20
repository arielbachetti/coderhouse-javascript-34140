// Solicitamos al usuario su edad con un prompt.
const edad = prompt("Ingresar edad para saber si puede obtener la licencia de conducir");

// Como la edad es un valor numerico entero, parseamos la entrada con parseInt() para obtener un numero.
const edadParseada = parseInt(edad);

if (edadParseada > 0 && edadParseada < 17) {
  // Si la edad es un valor mayor que 0 y menor que 17, mostramos el mensaje
  // diciendo que no puede obtener la licencia.
  // Otra alternativa puede ser edadParseada > 0 && edadParseada <= 16
  alert("No puede obtener la licencia de conducir");
} else if (edadParseada === 17) {
  // Si la edad es estrictamente igual a 17, mostramos el mensaje diciendo que
  // necesita autorización de padres o tutores y pasar las pruebas.
  alert("Puede obtener la licencia de conducir con autorización de los padres o tutores y realizando las pruebas teoricas y prácticas");
} else if (edadParseada > 17) {
  // Si la edad es > 17 mostramos el mensaje diciendo que necesita pasar las pruebas.
  // Es posible también resolver esto con edadParseada >= 18
  alert("Puede obtener la licencia realizando las pruebas teoricas y prácticas");
} else {
  // En caso de que no se cumplan ninguna de las anteriores, mostramos un mensaje de error
  // Diciendo que la entrada es invalida.
  alert("Entrada invalida")
}
