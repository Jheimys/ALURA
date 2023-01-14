// slice --> "Fatia"
// contém dois parametros: slice(posição inicial, posição final) 
// Obs: esses parametros não são obrigatórios 
// O slice não modifica o vetor original

//IMPORTANTE: a posição final é um intervalo aberto --- [a,b)


const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(num.length/2) //5.5

const num1 = num.slice(0, num.length/2) 

const num2 = num.slice(num.length/2) 

console.log('Números:', num)
console.log('Números 1:', num1) //[0,1,2,3,4]
console.log('Números 2:', num2) // [ 5, 6, 7, 8, 9, 10 ]

// Se o valor inicial for negativo indica a quantidade de elementos do final para
// o inicío que serão obtidos.
const letras = ['A', 'B', 'C', 'D']
const letras2 = letras.slice(-2)    // ['C', 'D'] 
console.log(letras)
console.log(letras2)

// Se o valor final for negativo indica a quantidade de elementos do final para
// o inicío que serão descartados.
const letras3 = letras.slice(0,-2)    // ['A', 'B'] 
console.log(letras)
console.log(letras3)