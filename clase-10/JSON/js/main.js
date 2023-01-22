const objeto = {
  nombre: 'Ariel',
  edad: 31
}

// Convierte un objeto a formato JSON (un string con unas
// reglas especiales).
const objetoStringificado = JSON.stringify(objeto);

console.log(objetoStringificado);

// Convertimos el JSON nuevamente a un objeto.
// JSON no puede contener comportamiento, solo datos.
console.log(JSON.parse(objetoStringificado));
