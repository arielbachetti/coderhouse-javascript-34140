// Declaramos una constante y le asignamos el numero 6.
const unNumero = 6;

// Ejemplo de un if sin else.
if (unNumero === 6) {
  alert('unNumero es igual a 6');
}

// Ejemplo de if con else.
if (unNumero === 7) {
  // Si unNumero es estrictamente igual a 7 se ejecuta la siguiente linea
  alert('unNumero es igual a 7');
} else {
  // Si unNumero no es estrictamente igual a 7 se ejecuta la siguiente linea
  alert('unNumero no es igual a 7');
}

// Ejemplo de un else if
if (unNumero === 10) {
  // Si el numero es estrictamente igual a 10 se ejecuta la siguiente linea
  alert("unNumero es igual a 10");
} else if (unNumero === 5) {
  // Si el numero es estrictamente igual a 5 se ejecuta la siguiente linea
  alert("unNumero es igual a 5");
} else {
  // Si ninguna de las condiciones anteriores son verdaderas, se ejecuta la siguiente linea
  alert("unNumero no es igual a los casos anteriores");
}
