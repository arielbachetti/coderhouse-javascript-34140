const ahora = new Date();

console.log(ahora);

const navidad = new Date(2022, 11, 25, 0, 0, 0, 0);

console.log(navidad);

console.log(navidad.getMonth());
console.log(navidad.getFullYear());
console.log(navidad.getDay());

console.log(navidad.toDateString());
console.log(navidad.toLocaleString());
console.log(navidad.toLocaleDateString());

const faltaParaNavidad = navidad - ahora;
console.log(Math.round(faltaParaNavidad / 1000 / 60 / 60 / 24));

