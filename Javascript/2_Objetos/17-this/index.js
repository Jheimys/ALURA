//Você deve ter reparado na palavra-chave this que foi utilizada anteriormente, tanto nas 
//funções construtoras quanto nas classes, e que significa literalmente “isso” ou “este”.

//Vamos ver com mais detalhes o que faz o this e mais três métodos que utilizamos para 
//manipulá-lo: call(), apply() e bind().

//Vamos criar um objeto pessoa com propriedades nome e email, além de um método para 
//imprimir o nome da pessoa no terminal:

const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
      console.log(`${pessoa.nome}`)
    }
}
   
pessoa.imprimeNome() //Ana

//Veja que o método imprimeNome() faz referência ao próprio objeto pessoa. O JavaScript 
//tem uma forma melhor de fazer isso, que não “acopla” o método ao nome do objeto:

const pessoas= {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
      console.log(`${this.nome}`)
    }
}
   
pessoas.imprimeNome() //Ana

//Podemos visualizar melhor a utilização do this para “desacoplar” o método do objeto com 
//um outro exemplo

function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email ${this.email}`)
}

//Acima temos uma função que não está ligada a nenhum objeto. Vamos ver como podemos 
//utilizá-la para objetos diferentes de forma independente:

const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
}
   
const pessoa2 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: imprimeNomeEmail
}
   
pessoa1.imprimeInfo()
//nome: Ana, email a@email.com
pessoa2.imprimeInfo()
//nome: Paula, email p@email.com

   //Dentro de cada objeto, criamos um método que chama a função externa imprimeNomeEmail//
   //(). Essa função é executada no contexto de cada um dos objetos e o this faz com que 
   //ela utilize os valores de propriedade desses objetos.

   //O this representa o objeto que executa a função. Podemos dizer que a instrução 
   //passada para o JavaScript é: “execute a função aqui, utilizando este contexto”.

   //No caso de atributos das funções construtoras ou dos construtores de classe, o this //
   //tem função similar: podemos dizer que o construtor recebe os atributos deste objeto:

function Pessoa(nome, email){
 this.nome =nome
 this.email =email
 this.imprimeNomeEmail = function(){
    console.log(`nome: ${this.nome}, email: ${this.email}`)
 }
}

//Quando criarmos objetos com base nesta função construtora, os atributos que a função 
//receber como parâmetro (nome e email) serão definidos no contexto de cada um deles:

const pessoa3 = new Pessoa("Ana", "a@email.com")
const pessoa4 = new Pessoa("Paula", "p@email.com")

pessoa3.imprimeNomeEmail()
// nome: Ana, email: a@email.com
pessoa4.imprimeNomeEmail()
// nome: Paula, email: p@email.com



