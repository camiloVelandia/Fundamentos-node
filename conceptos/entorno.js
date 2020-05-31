//podemos en consolo poner NOMBRE=camilo node/canceptos/entorno.js para ejecutar
let nombre = process.env.NOMBRE || "sin nombre";
console.log("hola " + nombre);
