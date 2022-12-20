// Declaramos una constante con nuestra palabra secreta.
const palabraSecreta = 'Perro';

// Solicitamos con prompt al usuario que ingrese una palabra.
const palabraIngresada = prompt('Ingrese una palabra para adivinar la palabra secreta');

// Comparamos la palabra ingresada con la palabra secreta (igualdad estricta).
if (palabraIngresada === palabraSecreta) {
  // Si son iguales mostramos que adivinó la palabra secreta.
  alert('Adivinaste la palabra secreta!')
} else {
  // Si son distintas mostramos que no la adivinó y que intente nuevamente.
  alert('No adivinaste la palabra secreta! :( Intenta de nuevo!')
}
