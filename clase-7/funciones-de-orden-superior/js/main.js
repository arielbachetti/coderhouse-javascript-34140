const esMenor = (numero) => {
  return (numeroAEvaluar) => {
    return numeroAEvaluar < numero;
  }
}

const esMenorQue10 = esMenor(10);
const esMenorQue1 = esMenor(1);

console.log(esMenorQue10(2));
console.log(esMenorQue1(2));

const recorrerArrayYEjecutar = (fn, array) => {
  for (const elemento of array) {
    fn(elemento);
  }
}

const array = [1, 2];
const functionPorParam = (elemento) => {
  console.log(elemento);
  console.log(elemento + 10);
}
recorrerArrayYEjecutar(
  functionPorParam,
  array
);
