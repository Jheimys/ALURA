//indexOf() --> faz busca do início para o fim.
//lastIndexOf() --> faz busca do fim para o início.
// os métodos acimam retorna 1 ou -1. exite/não existe

// includes()  --> se o elemento existe retorna true o false.

//              0  1  2  3  4  5 
const idades = [5 ,6, 8, 3, 6, 9]

console.log(idades.indexOf(6)) // retorna 1 que é a posição do elemento 6
console.log(idades.indexOf(0)) // retorna -1 pois o elemento 0 não existe
console.log(idades.indexOf(3)) // retorna 3 que é a posição do elemento 3

console.log(idades.lastIndexOf(6)) // retorna 4 que é o indice do elemento 6 do fim/inicio

console.log(idades.includes(8)) // retorna true

console.log(idades.includes(7)) // retorna false



