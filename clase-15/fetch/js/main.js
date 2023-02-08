// Fetch de una api (metodo GET).
fetch('https://pokeapi.co/api/v2/pokemon/25')
  .then((response) => response.json())
  .then((data) => console.log(data));

// Fetch de un archivo json local.
fetch('./js/avengers.json')
  .then((response) => response.json())
  .then((data) => {
    setTimeout(() => console.log(data), 100);
  });
