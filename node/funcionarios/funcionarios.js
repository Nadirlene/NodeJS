const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //um cliente http faz requisições de algo que está remoto

//função que filtra todos os chineses
const chineses = f => f.pais === 'China'

//função que filtra todos as mulheres
const mulheres = f => f.genero === 'F'

//função que filtra todos com menor salário. 1º parametro acumulador que é o funcionário, 2º funcionário atual
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
   //console.log(funcionarios)

  
    // mulher chinesa com menor salário
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
    console.log(func)

})

/* const nacionalidade = nac => nac.pais === 'China'
const sexo = genr => genr.genero === 'F'

const resultado = funcionarios.filter(nacionalidade).filter(sexo)
console.log(resultado) */