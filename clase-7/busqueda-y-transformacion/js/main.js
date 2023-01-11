const avengers = [
  {
    alias: 'Thor',
    nombre: 'Thor',
    ordenDeAfilicacion: 3,
    tipo: 'Dios',
    fuerza: 1000
  },
  {
    alias: 'Captain America',
    nombre: 'Steve Rogers',
    ordenDeAfilicacion: 1,
    tipo: 'Humano',
    fuerza: 100
  },
  {
    alias: 'Iron Man',
    nombre: 'Tony Stark',
    ordenDeAfilicacion: 2,
    tipo: 'Humano',
    fuerza: 10
  },
  {
    alias: 'Hulk',
    nombre: 'Bruce Banner',
    ordenDeAfilicacion: 4,
    tipo: 'Hulk',
    fuerza: 10000
  },
  {
    alias: 'Vision',
    nombre: 'Vision',
    ordenDeAfilicacion: 7,
    tipo: 'Robot',
    fuerza: 5000
  },
];

// forEach
avengers.forEach((avenger) => {
  if (avenger.tipo === 'Humano') {
    console.log(avenger.alias);
  }
});

// Find
const encontrado = avengers.find((avenger) => {
  return avenger.alias === 'Hulk';
});
const noEncontrado = avengers.find((avenger) => {
  return avenger.alias === 'Ariel';
});

console.log(encontrado);
console.log(noEncontrado);

// Filter
const humanos = avengers.filter((avenger) => {
  return avenger.tipo === 'Humano';
});

console.log(humanos);

// Some
const hayDios = avengers.some((avenger) => {
  return avenger.tipo === 'Dios';
});
console.log(hayDios);

// map
const nombres = avengers.map((avenger) => {
  return avenger.nombre
});
console.log(nombres);

// Reduce
const fuerzaTotalHumanos = avengers.reduce((acumulador, avenger) => {
  if (avenger.tipo === 'Humano') {
    return acumulador + avenger.fuerza;
  }

  return acumulador;
}, 0);

console.log(fuerzaTotalHumanos);

// sort
const listaNumeros = [5, 8, 1, 9, 4];
const listaNombres = ['Hulk', 'Tony', 'Ari'];
console.log(listaNumeros.sort());
console.log(listaNombres.sort());

avengers.sort((avenger1, avenger2) => {
  if (avenger1.fuerza < avenger2.fuerza) {
    return 1;
  }

  if (avenger1.fuerza > avenger2.fuerza) {
    return -1
  }

  if (avenger1.fuerza === avenger2.fuerza) {
    return 0;
  }
});

console.log(avengers);
