/*
    MÉTODOS: Object.preventExtensions()
    - Aceita um argumento que é o objeto.
    - Se esse método for add, já mais poderar add novas propriedades
    - O valor de [[extensible]] pode ser verificado com o método Object.isExtensible().
*/

const person1 = {
    name: 'Nicolas'
}

console.log(Object.isExtensible(person1)) //true

Object.preventExtensions(person1)

console.log(Object.isExtensible(person1)) //false

person1.sayName = function() {
    console.log(this.name)
}

console.log('sayName' in person1) //false