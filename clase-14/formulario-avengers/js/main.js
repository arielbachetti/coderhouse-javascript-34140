const formulario = document.getElementById('ingreso-avenger');
const tabla = document.getElementById('tabla');

const llamadaAlServidor = new Promise((resolve, reject) => {
  setTimeout(() => {
    const avengersDelLocalStorage = JSON.parse(localStorage.getItem('avengers')) || [];
    const avengers = avengersDelLocalStorage.map((avenger) => {
      return new Avenger(avenger);
    });

    console.log(avengers);
    resolve(avengers);
  }, 2000);
});

const agregarFilaALaTabla = ({ alias, nombre, edad }) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${alias}</td>
    <td>${nombre}</td>
    <td>${edad}</td>
  `;

  const botonera = document.createElement('td');
  botonera.innerHTML = '<button class="btn btn-danger mb-3">Borrar</button>';
  botonera.addEventListener('click', () => {
    Swal.fire({
      text: `Esta seguro de que quire eliminar a ${alias}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((respuesta) => {
      if(respuesta.isConfirmed) {
        const avengerEcontrado = avengers.find((elemento) => elemento.alias === alias);
        const indice = avengers.indexOf(avengerEcontrado);
        avengers.splice(indice, 1);
        localStorage.setItem('avengers', JSON.stringify(avengers));
        tr.remove();
      }
    });
  });

  tr.append(botonera);

  tabla.append(tr);
}

const mensajeEspera = document.getElementById('mensaje-espera');
mensajeEspera.hidden = false;

llamadaAlServidor.then((data) => {
  for(const avenger of data) {
    agregarFilaALaTabla(avenger);
  }
  mensajeEspera.hidden = true;
  tabla.hidden = false;
}).catch(() => {
  Toastify({
    text: 'Ocurrió un error, intente mas tarde',
    gravity: 'top',
    position: 'right',
    duration: 3000,
    style: {
      background: 'red'
    },
    close: true
  }).showToast();});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const [aliasInput, nombreInput, edadInput] = e.target;
  const avenger = new Avenger({
    alias: aliasInput.value,
    nombre: nombreInput.value,
    edad: edadInput.value,
  });

  if (!avenger.soyMayorDeEdad()) {
    Toastify({
      text: 'Debes ser mayor de 18 para ingresar',
      gravity: 'top',
      position: 'right',
      duration: 3000,
      style: {
        background: 'red'
      },
      close: true
    }).showToast();
    return;
  }

  avengers.push(avenger);
  localStorage.setItem('avengers', JSON.stringify(avengers));

  agregarFilaALaTabla(avenger);

  for(const input of e.target) {
    input.value = '';
  }
});
