class Avenger {
  constructor(entrada) {
    this.alias = entrada.alias;
    this.nombre = entrada.nombre;
    this.tipo = entrada.tipo;
    this.edad = parseInt(entrada.edad);
  }

  soyMayorDeEdad() {
    return this.edad >= 18;
  }
}
