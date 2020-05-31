function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("hola " + nombre);
    miCallback(nombre);
  }, 1000);
}

function hablar(CallbackHablar) {
  setTimeout(function () {
    console.log("bla bla bla bla..");
    CallbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("adios " + nombre);
    otroCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}
//--

console.log("iniciando preceso");
hola("camilo", function (nombre) {
  conversacion(nombre, 5, function () {
    console.log("proceso ended");
  });
});

// hola("camilo", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       adios(nombre, function () {
//         console.log("terminando preceso");
//       });
//     });
//   });
// });
