let buffer = Buffer.alloc(4);
console.log(buffer);

let buffer2 = Buffer.from([1, 2, 3, 6]);
console.log(buffer2);

let buffer3 = Buffer.from("hola mundo");
console.log(buffer3);
console.log(buffer3.toString());

//abecedario en hexadecimal
let abc = Buffer.alloc(26);
for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}
console.log(abc.toString());
