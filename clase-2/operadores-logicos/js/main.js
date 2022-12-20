// Ejemplos de los operadores logicos que vimos en clase:

const unNumero = 10;

// Operador es igual
console.log('Es igual (true):', unNumero == 10);
console.log('Es igual (false):', unNumero == 5);
console.log('Desigualdad estricta (false)', unNumero === '10');

// Operador es distinto
console.log('Es distinto (true):', unNumero != 5);
console.log('Es distinto (false):', unNumero != 10);
console.log('Desigualdad estricta (true)', unNumero !== '10');

// Operadores mayor, menor
console.log('Es mayor (false):', unNumero > 100);
console.log('Es mayor (true):', unNumero > 5);
console.log('Es mayor o igual (true):', unNumero >= 10);
console.log('Es menor (true):', unNumero < 100);
console.log('Es menor (false):', unNumero < 5);

// AND, &&, y, conjuncion
console.log('Operador and (true):', true && true);
console.log('Operador and (false):', true && false);
console.log('Operador and (true):', unNumero > 5 && unNumero < 100);
console.log('Operador and (false):', unNumero > 50 && unNumero < 100);

// OR, ||, o
console.log('Operador or (true):', true || true);
console.log('Operador or (true):', false || true);
console.log('Operador or (false):', false || false);
console.log('Operador or (true):', unNumero > 50 || unNumero < 100);

// NOT, negacion
console.log('Negacion (false):', !true);
console.log('Negacion (true):', !false);
console.log('Negacion (true):', !(unNumero > 50));

// Recuerden que el uso de parentesis cambia el orden en el que se evalúa
// la operación, y por lo tanto el resultado puede variar.
console.log('Caso 1 (true):', true || (false && false));
console.log('Caso 2 (false):', (true || false) && false);
