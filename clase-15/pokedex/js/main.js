const limit = 20;
let offset = 0;
const table = document.getElementById('pokedex-table');

document.getElementById('siguiente').addEventListener('click', () => {
  offset += limit;
  mostrarPagina(offset, limit);
});

document.getElementById('anterior').addEventListener('click', () => {
  offset -= limit;
  mostrarPagina(offset, limit);
});

const getPokemons = async (offset, limit) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const body = await response.json();

  return body.results;
}

const getPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return await response.json();
}

const cargarTabla = (pokemons) => {
  table.innerHTML = `
    <tr>
      <th>#</th>
      <th>Nombre</th>
    </tr>
  `;

  pokemons.forEach(((pokemon) => {
    const { name, url } = pokemon;
    const id = url.split('/')[6];

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${id}</td>
      <td>
        <a href="#" id="pokemon-${id}">${name}</a>
      </td>
    `;

    table.append(tr);

    document.getElementById(`pokemon-${id}`).addEventListener(
      'click',
      () => {
        Swal.fire({});
        Swal.showLoading();

        getPokemon(id).then(({ name, types, id, sprites: { front_default: imageUrl } }) => {
          Swal.fire({
            title: name,
            html: `
              <p>No.: ${id}</p>
              <p>Types: ${types.map(({ type: { name } }) => name).join(', ')}</p>
            `,
            imageUrl
          });
          Swal.hideLoading();
        });
      }
    );
  }));
}

const mostrarPagina = async (offset, limit) => {
  const pokemons = await getPokemons(offset, limit);
  cargarTabla(pokemons);
}

mostrarPagina();
