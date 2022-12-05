const numerosPares = [2, 4, 6]
const numerosImapares = [1, 3, 5]

const numeros = [numerosPares, numerosImapares]
const numeros1 = [...numerosPares, ...numerosImapares]
console.log(numeros) // [ [ 2, 4, 6 ], [ 1, 3, 5 ] ]
console.log(numeros1) // [ 2, 4, 6, 1, 3, 5 ]

const [num1, num2, outrosValores] = [1, 2, 3, 4, ,5 ,6 ,7 ,8]
const [num3, num4, ...outrosValores1] = [1, 2, 3, 4, 5 ,6 ,7 ,8]
console.log(num1, num2, outrosValores) // 1 2 3
console.log(num3, num4, outrosValores1) // 1 2 [ 3, 4, 5, 6, 7, 8 ]

const pessoa = {
    nome:'Ju',
    idade: 25
}

const pessoaComTelefone = {...pessoa, telefone: 123456}

console.log(pessoa, pessoaComTelefone) 
// { nome: 'Ju', idade: 25 } { nome: 'Ju', idade: 25, telefone: 123456 }

