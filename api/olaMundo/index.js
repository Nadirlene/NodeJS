// importando o módulo express
const express = require("express");

//crio a várialvel app, ela contém as funcionalidades express
const app = express();

app.get("/", (req, res) => {
  let mensagem = { mensagem: "Olá, Mundo!" };
  res.json(mensagem);
});

app.listen(8080, () => {
  let data = new Date();
  console.log(`Servidor node iniciado em ${data}`);
});

// a função listn faz da nossa aplicação um servidor back-end que ficará sempre aguardando requisições.
