const fs = require("fs");

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) {
      console.error("no pude men", err);
    } else {
      console.log("listones");
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

// escribir(
//   __dirname + "/archivogenerado.txt",
//   "creado con codigo por @xander_coder",
//   console.log
// );

//leer(__dirname + "/archivo.txt", console.log);

borrar(__dirname + "/12.txt", console.log);
