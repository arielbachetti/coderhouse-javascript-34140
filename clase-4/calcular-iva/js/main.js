// Constante global con el % del IVA.
// Es una buena practica ya que si el % cambia
// lo modificaremos en un solo lugar.
const IVA = 21;

// Declaracion de funcion para calcular el IVA.
const calcularIva = (precio) => {
  const resultado = precio + (precio * IVA / 100);
  return resultado;
}

// Solicitamos precios de productos y retornamos el precio
// con el IVA incluido.
let precioProducto;
do {
  precioProducto = prompt('Ingrese precio producto');
  const precioProductoParseado = parseFloat(precioProducto);
  if (precioProductoParseado > 0) {
    alert('Precio con iva (' + IVA + '%): ' + calcularIva(precioProductoParseado));
  }
} while (precioProducto != 'FIN');
