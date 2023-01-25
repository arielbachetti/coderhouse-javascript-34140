class Avenger {
  constructor(entrada) {
    this.alias = entrada.alias;
    this.nombre = entrada.nombre;
    this.edad = parseInt(entrada.edad);
  }

  soyMayorDeEdad() {
    return this.edad >= 18;
  }
}
