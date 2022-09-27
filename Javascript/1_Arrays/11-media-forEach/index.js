const notas = [10, 9, 8, 7, 6, 5]

let somaNotas = 0


//callback --> o parametro da função não um dado e sim uma outra função
// no caso uma arrow function que é o mais comum de se usar.
notas.forEach( nota => {
    somaNotas += nota
})

//UMA OUTRA FORMA DE USAR O FOREACH
// notas.forEach(function(notas){
//     somaNotas += nota
// })

console.log(somaNotas)

let media = somaNotas/notas.length
console.log(media)