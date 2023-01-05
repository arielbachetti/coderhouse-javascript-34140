// Declaramos un objeto simplemente con abrir llaves
// y agregando propiedades como "clave: valor".
const persona = {
  nombre: "Will",
  apellido: "Smith",
  ocupacion: "Actor",
  edad: 53,
}

// Para acceder a las propiedades lo podemos hacer con "."
// o non el nombre de la propiedad entre [].
console.log(persona.nombre);
console.log(persona['nombre']);

// Podemos modificar (mutar) las propiedades de un objeto
// asignandole valores con el operador =.
console.log('Antes', persona.edad);
persona.edad = 52;
persona['edad'] = 50;
console.log('Despues', persona.edad);

// De la misma forma podemos agregar nuevas propiedades.
persona.estatura = 1.80;

console.log(persona);
