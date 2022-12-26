// Ejemplos de ciclos condicionales con while y do while

let numero = 1;

// Los ciclos while se ejecutarán ninguna o N veces mientras la condición se cumpla.

// Este primer while no se va a ejecutar ya que 1 > 5 es false.
while (numero > 5) {
  console.log('1er while (no se ejecuta)', numero);
  numero++;
}

// Este while se ejecutará 5 veces y la variable numero quedará con el valor 6.
while (numero <= 5) {
  console.log('2do while', numero);
  numero++;
}

// Los ciclos do while tienen la particularidad que se ejecutan al menos una vez.
// El resto de las ejecuciones dependerán de la condición del while.

// En este caso solo se ejecutará una vez (la que nos asegura el do while)
// Luego a partir de la 2da iteración la condición será falsa (6 <= 5) y no se ejecutará mas.
do {
  console.log('do while', numero);
} while (numero <= 5);
