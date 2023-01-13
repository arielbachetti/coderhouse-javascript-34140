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

// En este ejemplo vamos a listar los avengers del array
// como un ul de html.

const ul = document.createElement('ul');

for (const avenger of avengers) {
  const li = document.createElement('li');
  // li.innerHTML = '<strong>' + avenger.alias + '</strong>';
  li.innerHTML = `
    <p>
      <strong>${avenger.alias}</strong>
    </p>
  `;
  ul.append(li);
}

document.getElementById('contenedor').append(ul);
