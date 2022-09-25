//A função pop() remove elementos do array.
//Não precisa passar parametros, entende-se que sempre será o último elemento a ser removido

const notas = [10, 9, 8, 7]
console.log('Notas:', notas)
notas.pop()
console.log('Notas atualizadas:', notas)

console.log('TESTE 01')
const arrayVazia = [,,,];
console.log(arrayVazia.length)
console.log(arrayVazia[0])
console.log(arrayVazia[1])
console.log(arrayVazia[2])

console.log('TESTE 02')
const arrayVazia2 = [,,,];
console.log(arrayVazia2.length)
arrayVazia2.push(50)
console.log(arrayVazia2)
console.log(arrayVazia2.length)