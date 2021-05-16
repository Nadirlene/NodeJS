const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 0', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})
// segundos, hora, dia do mês, mês, dia da semana

setTimeout(function () { //setTimeout temporizador padão do JavaScript
    tarefa1.cancel()  // uma forma de cancelar um temporizador que eu criar
console.log('Cancelando Tarefa 1!')
}, 20000) // 20000 = 20 segundos

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]  // regras dia da semana
regra.hour = 10
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})