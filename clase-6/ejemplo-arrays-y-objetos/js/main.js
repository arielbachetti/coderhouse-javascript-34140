// Crear un carrito de compras para agregar items
// y calcular el total con iva.

// Definimos una clase Producto.
class Producto {
  constructor(precio, cantidad) {
    this.precio = parseFloat(precio);
    this.cantidad = parseInt(cantidad);
  }

  calcularPrecioconIva() {
    return this.precio * 1.21 * this.cantidad;
  }
}

// Definimos una clase Carrito.
class Carrito {
  constructor() {
    this.productos = [];
    this.total = 0;
  }

  agregarProducto(precio, cantidad) {
    const producto = new Producto(precio, cantidad);
    this.productos.push(producto);
  }

  calcularTotalconIva() {
    let total = 0;

    for (const producto of this.productos) {
      total = total + producto.calcularPrecioconIva();
    }
    this.total = total;

    return total;
  }
}

// Creamos un nuevo carrito.
const carrito = new Carrito();

let precio;
let cantidad;
let continuar = false;
do {
  // Pedimos que ingrese precio y cantidad.
  precio = prompt('Ingrese precio');
  cantidad = prompt('Ingrese cantidad');

  // Preguntamos si queremos continuar ingresando valores mientras ingrese 'y'.
  continuar = prompt('Quiere continuar ingresando valores? (y/N)') === 'y';

  // agregamos el producto al carrito.
  carrito.agregarProducto(precio, cantidad);
} while(continuar);

// Le pedimos al carrito que calcule el total con iva.
// y lo mostramos con alert.
alert('El total a pagar es: ' + carrito.calcularTotalconIva());
