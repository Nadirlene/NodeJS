const express = require('express')
const app = express()

let data = new Date() //para obter o dia atal parte 1

let mensagemDoDia = require('./mensagemdodia')

app.get('/', (req, res) => {
    let dia = data.getDate() //obtendo o dia atual a partir da instancia de Date
    let mensagemSelecionada = mensagemDoDia.retornarMensagemDoDia(dia)

    res.json({ mensagem: mensagemSelecionada})
})

app.listen(8080, ()=>{
    console.log(`Servidor node iniciado em ${data}.`)
})

// camada rest, recebe as requisições HTTP e consome a camada de de serviço
