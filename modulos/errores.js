function otrafuncion() {
  serompe();
}

function serompe() {
  return 3 + z;
}

function serompeasincrona() {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.error("se rompio la asincrona");
    }
  }, 2000);
}

try {
  serompeasincrona();
  //serompe();
} catch (err) {
  console.log("vaya, se ha roto");
  console.error(err.message);
}

console.log("continuo ejecucion");
