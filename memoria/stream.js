const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";

let readableStream = fs.createReadStream(
  __dirname + "/input.txt"
);

readableStream.setEncoding("UTF8");
readableStream.on("data", function (chunk) {
  console.log(chunk);
});

readableStream.on("end", function () {
  console.log(data);
});

process.stdout.write("hola");
process.stdout.write("que");
process.stdout.write("mas");

const transdrom = stream.Transform;

function Mayus() {
  transdrom.call(this);
}
util.inherits(Mayus, transdrom);

Mayus.prototype._transform = function (
  chunk,
  codif,
  callback
) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  callback();
};

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);
