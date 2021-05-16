// Em node um arquivo representa um módulo.

console.log(this)  // Objeto vazio

// formas de exportar algo de um módulo node
this.ola = 'Fala Pessoal'
exports.bemVindo = 'Bem vindo ao node'
module.exports.ateLogo = 'Até o próximo exemplo.'