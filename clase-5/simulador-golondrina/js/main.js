// Creamos una clase Golondrina
// Esta clase representara una golondrina con su
// energia y 2 metodos: come y vola.
// Metodo come: suma 10 de energia.
// Metodo vola: consume 2 de energia por cada kilometro recorrido.
class Golondrina {
  constructor(nombre, energiaMaxima) {
    this.nombre = nombre;
    this.energiaMaxima = parseInt(energiaMaxima);
    this.energia = parseInt(energiaMaxima);
  }

  vola(distanciaEnKms) {
    const energiaAGastar = distanciaEnKms * 2;

    if (this.energia < energiaAGastar) {
      alert(this.nombre + ': Estoy muy cansada para volar esa distancia :(');
    } else {
      this.energia = this.energia - energiaAGastar;
      alert(this.nombre + ': vole ' + distanciaEnKms + ' Kms y me queda ' + this.energia + ' de energia');
    }
  }

  come() {
    const nuevaEnergia = this.energia + 10;
    if (nuevaEnergia > this.energiaMaxima) {
      alert(this.nombre + 'No puedo comer mas, estoy satisfecha :(');
    } else {
      this.energia = nuevaEnergia;
      alert(this.nombre + ': Estaba muy rico :D, ahora mi energia es de ' + this.energia);
    }
  }
}

alert('Bienvenid@ al simulador de golondrnas');

const nombre = prompt('Ingrese el nombre de su golondrina');
const energiaMaxima = prompt('Ingrese la energía máxima de su golondrina');

const golondrina = new Golondrina(nombre, energiaMaxima);

let opcion;
do {
  opcion = prompt('Seleccione una opcion:\n1 - volar\n2 - comer\n0 - Finalizar');
  switch (opcion) {
    case '1':
      const distancia = parseInt(prompt('Indique la distancia a volar en Kms'));
      golondrina.vola(distancia);
      break;
    case '2':
      golondrina.come();
      break;
  }
  console.log(opcion)
} while (opcion !== '0');
