const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map(nota =>  nota == 10 ? nota : nota + 1)

// const notasAtualizadas = notas.map( notas => {
//     if(notas == 10){
//         return notas
//     } else {
//         return notas + 1
//     }
// })
console.log(notasAtualizadas)