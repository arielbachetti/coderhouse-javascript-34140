// Ejemplo de una clase

// Declaramos la clase con la palabra class.
class Actor {
  // El constructor es un metodo especial que se
  // ejecutará cuando se haga new de la clase.
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = parseInt(edad);
  }

  // Metodos personalizados de la clase
  saludar(saludo) {
    // Usamos this para referirnos a una propiedad de la clase.
    // Esto en el contexto de un objeto nuevo (new Class()) será
    // una referencia a la propiedad de ese objeto y no otro.
    return saludo + ', soy ' + this.nombre;
  }
}

// Creamos un objeto con la clase y llamamos a sus metodos.
const actor1 = new Actor('Will', 'Smith', 53);
console.log(actor1);
console.log(actor1.saludar('Holis'));

// Creamos otro objeto con la clase y llamamos a sus metodos.
const actor2 = new Actor('Chris', 'Evans', '41');
console.log(actor2);
console.log(actor2.saludar('Hola'));
