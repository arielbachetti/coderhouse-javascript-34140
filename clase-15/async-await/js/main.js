// Para usar await debemos estar dentro de una function
// que sea async.
// El await detiene la ejecución y espera hasta que la promesa
// se resuelva.
const getPokemons = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/25');
  const data = await response.json();
  console.log(data.name);

  const response2 = await fetch('https://pokeapi.co/api/v2/pokemon/26');
  const data2 = await response2.json();
  console.log(data2.name);
}

getPokemons();
