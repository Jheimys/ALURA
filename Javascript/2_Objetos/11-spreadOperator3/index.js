
//Importante! Vale notar que, caso a sintaxe de espalhamento seja usada em objetos que 
//tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor 
//destas propriedades à medida que encontra novos valores com o mesmo nome de chave. Por //
//exemplo:

const mago = {nome: "Gandalf", classe: "mago"}
   
const guerreiro = {nome: "Aragorn", classe: "guerreiro"}
   
const ranger = { nome: "Legolas", classe: "ranger"}

//Os três objetos acima têm as mesmas propriedades. Vamos ver o que acontece se tentarmos 
//“espalhar” os dados em um único objeto com o spread operator:

console.log('EXEMPLO 03')
const personagens = { ...mago, ...guerreiro, ...ranger }
console.log(personagens)

//O resultado não será bem o que esperamos:
//{ nome: 'Legolas', classe: 'ranger' }

//O JavaScript sobrescreveu as chaves com o mesmo nome a cada ocorrência, assim o 
//resultado final foi somente o último objeto declarado dentro do objeto personagens.

//Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, 
//então deve ser usado com cuidado em caso de loops ou funções recursivas.

//Também é possível utilizar esta sintaxe com arrays. Você pode conferir mais exemplos 
//neste: https://www.youtube.com/watch?v=f8a-qwKC5yk

