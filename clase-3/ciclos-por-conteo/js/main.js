// El ciclo for consta de 3 partes (llamadas sentencias)
// La primera es la de inicialización: Se usa para declarar nuestras variables.
// La segunda es la condición: Mientras sea verdadera el ciclo seguira repitiendose.
// La tercera o de finalización: Se ejecutará siempre al final de cada repetición.

// Aclaración del operador ++
// El operador ++ le suma 1 a la variable sobre el que fue aplicado.
// variable++ es lo mismo que hacer variable = variable + 1

// En este ejemplo de ciclo for estamos inicializando la variable i en el valor 1.
// Luego pedimos que se repita el ciclo siempre que i <= 5.
// Al final de cada ciclo aumentamos en valor de la variable i en 1.
// Por lo tanto el console.log se repetirá 5 veces
// Llamar a la variable i es una convención, si esa variable ya fue usada es común usas los nombres j o k.
for (let i = 1; i <= 5; i++) {
  console.log('Esto es el ciclo', i);
}

// La palabra reservada break rompe con la ejecucion del ciclo.
// No importa en que repetición estemos, el ciclo finaliza.
// En este caso solo alertará del 1 al 4.
for (let j = 1; j <= 10; j++) {
  if (j == 5) {
      break;
  }
  alert('Ejemplo de break: ' + j);
}

// La palabra reservada continue saltea la repeticion actual.
// Una analogía es: "ponerle siguiente a la cancion en spotify".
// Luego de saltear la repetición, el ciclo continua normalmente.
// En este ejmplo se alertan todos los numeros excepto por el 5.
for (let k = 1; k <= 10; k++) {
  if (k == 5) {
      continue;
  }
  alert('Ejemplo de continue: ' + k);
}
