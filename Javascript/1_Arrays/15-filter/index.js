const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]

const reprovados = nomes.filter((nome, elemento) => notas[elemento] < 5 )

console.log(reprovados)

