const salaJS = [7, 7, 8, 8, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 8, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0)
    return (somaDasNotas/notasDaSala.length).toFixed(2)
}

console.log(`A média da sala de JS é:${mediaSala(salaJS)}`)
console.log(`A média da sala de Java é:${mediaSala(salaJava)}`)
console.log(`A média da sala de Python é:${mediaSala(salaPython)}`)


//EXEMPLO 02
const numeros = [43, 50, 65, 12]

// O método reduce precisa de 2 parâmetros:
// 1° função cb que é obrigatório:(acum, atual) => atual + acum
//2° o número 0 que representa o valor inicial do atual.
const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(soma) //170

//EXEMPLO 03
const soma1 = numeros.reduce(function (acum, atual) {
    return atual + acum
   }, 0)

   console.log(soma1)