const fs = require("fs");

let fileList = fs.readdirSync(".");
console.log(fileList);

// fs.writeFileSync("new", "Hello Node.js!");

const os = require("os");
console.log(os.cpus());

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "I love AB180"
  })
);
