// Mi primera alerta con sweet alert!
Swal.fire({
  title: 'Error!',
  text: 'Hubo un error',
  icon: 'error',
  confirmButtonText: 'Cerrar'
})

// Usar las alertas con eventos.
const boton = document.getElementById('boton');
boton.addEventListener('click', () => {
  Swal.fire({
    title: 'Yaay!',
    text: 'Hiciste click en el botón',
    icon: 'success',
    confirmButtonText: 'Cerrar'
  });
});

// Alerta con timer.
Swal.fire({
  title: 'Timer',
  text: 'Una alerta con timer',
  icon: 'success',
  showConfirmButton: false,
  timer: 2000,
});

// Custom attributes (images).
Swal.fire({
  title: 'Congats!',
  text: 'Mission complete!',
  imageUrl: 'https://assets.stickpng.com/images/5842a4f5a6515b1e0ad75af6.png',
  showConfirmButton: false,
  imageWidth: 100,
  imageHeight: 100,
  imageAlt: 'Avengers Logo',
});

// Custom attributes (background y el fondo).
Swal.fire({
  title: 'Custom width, padding, color, background.',
  width: 600,
  padding: '3em',
  color: '#716add',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
})

// Sweet alert con mayor interaccion para el usuario.
const botonBorrar = document.getElementById('boton-borrar');
botonBorrar.addEventListener('click', () => {
  Swal.fire({
    title: 'Está seguro que quiere borrar?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Obvio',
    cancelButtonText: 'No, me da miedo'
  }).then((resultado) => {
    if (resultado.isConfirmed) {
      Swal.fire({
          title: 'Borrado!',
          icon: 'success',
          text: 'El archivo ha sido borrado'
      })
    }
  })
})
