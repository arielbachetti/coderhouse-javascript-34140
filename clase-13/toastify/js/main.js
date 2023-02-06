// Mi primer toastify.
Toastify({
  text: "Mi primer toast!",
  duration: 3000,
  gravity: 'bottom',
  position: 'left'
}).showToast();

// Agregar styles.
Toastify({
  text: "Toast con styles!",
  duration: 3000,
  gravity: 'bottom',
  position: 'left',
  style: {
      background: 'linear-gradient(to right, #00b09b, #96c92d)'
  }
}).showToast();

// On click.
Toastify({
  text: "Toast con on click!",
  duration: 3000,
  onClick: () => {
    Toastify({
      text: 'Clickeaste un Toast!',
      duration: 1500,
      position: 'left'
    }).showToast()
  }
}).showToast();

// Destination (para que on click nos lleve a una url).
Toastify({
  text: "Toast misterioso",
  duration: 3000,
  destination: 'https://9gag.com/'
}).showToast();
