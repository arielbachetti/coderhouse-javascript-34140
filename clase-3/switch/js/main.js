// Ejemplo de estructura switch
// Si hay default, solo se ejecuta si lo que pasamos entre () no coincide con ningun case.
// Cuando si coincide con un case, ejecuta desde ese lugar hacia abajo hasta que encuentra un break.

const texto = 'B';

switch (texto) {
  case 'A':
    console.log('Case 1');
    break;
  case 'B':
    console.log('Case 2');
  case 'C':
    console.log('Case 3');
    break;
  default:
    console.log('Default');
}
