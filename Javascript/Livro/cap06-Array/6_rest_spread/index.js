const pacientes = ['Ana', 'Carlos', 'João', 'Sofia']
const [atender, proximo, ...outros] = pacientes

console.log(atender) //Ana
console.log(proximo) //Carlos
console.log(outros) // ['João', 'Sofia']

console.log('')
console.log('EXEMPLO 02:')

let professores = ['Jonas', 'James']
professores = ['Marcelo', ...professores ] //acrescenta Marcelo no início
professores = [...professores, 'Bolis'] //acrescenta Bolis no final
console.log(professores)