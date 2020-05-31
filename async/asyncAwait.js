async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("hola " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("bla bla bla bla..");
      resolve(nombre);
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("adios " + nombre);
      resolve();
    }, 1000);
  });
}

async function main() {
  let nombre = await hola("camilo");
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
}
console.log("empezamos");
main();
console.log("terminamos");
