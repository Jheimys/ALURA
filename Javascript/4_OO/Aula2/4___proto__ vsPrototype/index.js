/*
Durante nossos estudos de JavaScript é normal toparmos com os protótipos de duas formas diferentes, através da propriedade __proto__ ou do objeto prototype que vemos em todos os objetos.

Afinal, qual a diferença e quando se usa cada um deles?

Para entender melhor essa diferença, vamos testar alguns códigos:
*/

let user = {
    perfil: 'estudante'
}
   
let estudante = {
    nome: 'juliana'
}
   
Object.setPrototypeOf(estudante, user)

/*
No trecho acima, definimos dois objetos, com propriedades diferentes, e estabelecemos que o objeto user será usado como protótipo para o objeto estudante. Podemos testar esse código direto no terminal:
*/

console.log(estudante.nome) // 'juliana'
console.log(estudante.perfil) //'estudante'

/*
Ou seja, o objeto estudante, além da propriedade nome, também tem a propriedade perfil, trazida do protótipo user.
*/