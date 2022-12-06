// Para remover uma propriedade usamos o método delete

const person1 = {
    name: 'Nicolas'
}

console.log('name' in person1) // true

delete person1.name

console.log('name' in person1) // false
console.log(person1.name) // undefined