const fs = require('fs') //importando o módulo file sistem do node

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}
// salvar o objeto acima em formato json

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!')
})

// JSON.stringify converte o objeto em formato textual json.

