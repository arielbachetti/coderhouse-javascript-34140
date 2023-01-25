const formulario = document.getElementById('ingreso-avenger');
const mensajeError = document.getElementById('mensaje-error');
const tabla = document.getElementById('tabla');
const avengersDelLocalStorage = JSON.parse(localStorage.getItem('avengers')) || [];
const avengers = avengersDelLocalStorage.map((avenger) => {
  return new Avenger(avenger);
});

const agregarFilaALaTabla = (avenger) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${avenger.alias}</td>
    <td>${avenger.nombre}</td>
    <td>${avenger.edad}</td>
  `;

  const alias = avenger.alias;
  const botonera = document.createElement('td');
  botonera.innerHTML = '<button class="btn btn-danger mb-3">Borrar</button>';
  botonera.addEventListener('click', () => {
    const avengerEcontrado = avengers.find((elemento) => elemento.alias === alias);
    const indice = avengers.indexOf(avengerEcontrado);
    avengers.splice(indice, 1);
    localStorage.setItem('avengers', JSON.stringify(avengers));
    tr.remove();
  });

  tr.append(botonera);

  tabla.append(tr);
}

for(const avenger of avengers) {
  agregarFilaALaTabla(avenger);
}

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const avenger = new Avenger({
    alias: e.target[0].value,
    nombre: e.target[1].value,
    edad: e.target[2].value,
  });

  if (!avenger.soyMayorDeEdad()) {
    mensajeError.innerText = 'Tienes que ser mayor de 18 años';
    return;
  }

  avengers.push(avenger);
  localStorage.setItem('avengers', JSON.stringify(avengers));

  agregarFilaALaTabla(avenger);

  for(const input of e.target) {
    input.value = '';
  }
});
