/*
    MÉTODO: Object.seal()
    -Sela um Obj
    - O atributo [[extensible]]será definido com false
    - Será possível ler e atualizar suas propriedades apenas.
*/

const person1 = {
    name: 'Nicolas'
}

console.log(Object.isExtensible(person1)) //true
console.log(Object.isSealed(person1)) //false

Object.seal(person1)

console.log(Object.isExtensible(person1)) // false
console.log(Object.isSealed(person1)) //true

person1.sayName = function() {
    console.log(this.name)
}
console.log('sayName' in person1) //false

person1.name = 'Greg'
console.log(person1.name) //Greg

delete person1.name
console.log('name' in person1) //true
console.log(person1.name) //Greg

const descriptor = Object.getOwnPropertyDescriptor(person1, 'name')
console.log(descriptor.configurable) //false