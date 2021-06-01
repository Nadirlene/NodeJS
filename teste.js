// var lista = [0, 1 ,6, 5,1,0,3,2, 2, 3, 4];


// const hash = {}
// for( valor of lista){
//     hash[valor] = valor
    
// }

// resultado = []
// console.log(resultado)
// hash.forEach( valor =>  {console.log(hash.valor)
   
// })
//console.log(resultado)
const array = ["André", 1, 2, 3, "André", 3, "Pedro"];

array.reduce((unico, item) => {
    return unico.includes(item) ? unico : [...unico, item]
}, []);

