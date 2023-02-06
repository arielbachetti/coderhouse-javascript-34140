// Promesas

// Ejemplo de una promesa que se resuelve en 2000 ms.
const promesa = new Promise((resolve) => {
  setTimeout(resolve, 2000);
});

// Funcion que devuelve una promesa que se resuelve o rechaza
// dependiendo del boolean que recibe por parametro.
// Esto es para poder mostrar una promesa que falla.
const estoDevuelveUnaPromesa = (condicion) =>{
  const promesa = new Promise((resolve, reject) => {
    if (condicion) {
      resolve('Todo esta bien');
    } else {
      reject('Todo esta mal');
    }
  });

  return promesa;
}

// Promesa que se resuelve
estoDevuelveUnaPromesa(true)
  .then((respuesta) => {
    console.log(respuesta);
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  })
  .then(() => {
    console.log('Holis');
  })
  .then(() => {
    console.log('Chau!');
  })
  .finally(() => {
    console.log('Finally 1!!')
  });

// Promesa que falla (ejecuta el catch).
estoDevuelveUnaPromesa(false)
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('Finally 2!!')
  });
