const fs = require('fs') // importando módulo filesistem nativo do node

const caminho = __dirname + '/arquivo.json'

// sincrono... (não ideal) melhor para arquivos pequenos
const conteudo = fs.readFileSync(caminho, 'utf8')
console.log(conteudo)

// assincrono... (mais interessante)
fs.readFile(caminho, 'utf8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// segundo exemplo de forma sincrona
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})

//__dirname é a constante presente que representa o diretório atual