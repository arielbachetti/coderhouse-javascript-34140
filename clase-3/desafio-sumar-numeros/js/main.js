// Pedirle al usuario que ingrese cuantos numeros quiere sumar.
// Luego pedir numeros la cantidad de veces indicada anteriormente y
// sumarlos. Una vez finalizado, mostrar el resultado por pantalla.

let total = 0;

const numerosAsumar = parseInt(prompt('Ingrese cuantos numeros quiere sumar'));

for (let i = 1; i <= numerosAsumar; i++) {
  const numeroIngresado = prompt('Ingrese numero a sumar');
  const numero = parseInt(numeroIngresado);
  if (numero) {
    total = total + numero;
  }
}

alert('La suma de todos los numeros es: ' + total);
