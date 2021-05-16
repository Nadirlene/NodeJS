console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 
exports.b = 2 
module.exports.c = 3
// significa que o a,b e c ficaram visiveis fora    

console.log(module.exports)
console.log(exports)
console.log(this)

