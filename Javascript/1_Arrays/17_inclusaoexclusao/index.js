//push()--> add no final 
//pop() --> remove o úlimo elemento
//unshift() --> add no início
//shift() --> remove o  primeiro

const cidades = ['Pelotas']
console.log(cidades)

cidades.push('São Lourenço') //add cidade no final
console.log(cidades)

cidades.unshift('Porto Alegre') // add cidade no início
console.log(cidades)

const ultima = cidades.pop() //revome a última cidade
console.log(ultima)
console.log(cidades)

const primeira = cidades.shift() // remove a primeira
console.log(primeira)
console.log(cidades)

// As variáveis ultima e primeira recebem o elemento removido

//Exemplo 02

