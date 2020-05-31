process.on("beforeExit", () => {
  console.log("se va a acabar :D");
});
process.on("exit", () => {
  console.log("se acabo :D");
});

process.on("uncaughtException", (err, origen) => {
  console.log("vaya se nos olvido cachar un error");
  console.error(err.message);
});
// process.on('unhandledRejection')

functionquenoesta();
