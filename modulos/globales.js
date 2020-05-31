//console.log(global);
//console.log(procces);
//console.log(__dirname);
//console.log(__filename);

let i = 0;

let intervalo = setInterval(function () {
  console.log("hola");
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);

setImmediate(function () {
  console.log("hello");
});
