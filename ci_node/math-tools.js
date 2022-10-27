function add(a, b) {
  return a + b;
}

let calculator = {
  PI: 3.14,
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};
module.exports = calculator;

console.log("=======================new=======================");
console.log("exports ------------------------->");
console.dir(exports);
console.log("require ------------------------->");
console.dir(require);
console.log("module ------------------------->");
console.dir(module);
console.log("__filename ------------------------->");
console.dir(__filename);
console.log("__dirname ------------------------->");
console.dir(__dirname);
