//requerendo um módulo e carregando as bibliotecas
const _ = require('lodash')

//randon biblioteca do lodash 
setInterval(() => console.log(_.random(1, 10)), 2000)

// rs -> para dar restart no nodemon

// node -v -> para ver a versão

// npm é o gerenciador de pacotes do node. Ele é responsável por baixar bibiotecas

// npm i lodash -> comando para instalar a biblioteca lodash , o comando em sí é: npm i +o que for instalar

// npm i -g nodemon -> comando em que instalo a biblioteca nodemom de forma global graças ao -g

// a biblioteca nodemom ela atualiza o código a cada modificação 