/*
    -Um construtor é simplesmente uma função usada com operador new para criar
     um obj.

     - Contrutores devem começar com uma letra maiúscula para diferenciar
     de outras funções
*/


/* 
function Person() {
    //intenscionalmente vazia
}

//Com o contrutor definido podemos criar instâncias

const person1 = new Person
const person2 = new Person

//Operador instanceof

console.log(person1 instanceof Person ) //true
console.log(person2 instanceof Person ) //true

//Propriedade constructor
console.log(person1.constructor === Person) //true
console.log(person2.constructor === Person) //true 
*/

function Person(name){
    this.name = name
    this.sayName = function() { //metódo sayName()
        console.log(this.name)
    }
}

const person1 = new Person('Nicolas')
const person2 = new Person('Greg')

console.log(person1.name) //Nicolas
console.log(person2.name) //Greg

person1.sayName() //exibe NIcolas
person2.sayName() //exibe Greg