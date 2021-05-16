console.log(this === global) // False porque o this não aponta para global e sim pra export.module
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logoThis() {
    console.log('Dentro de uma funçãp...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)// TRUE porque o this dentro da função aponta para global 
}


logoThis()