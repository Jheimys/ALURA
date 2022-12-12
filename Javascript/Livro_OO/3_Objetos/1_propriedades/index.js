const person1 = {
    name: 'Nicolas'
}

const person2 = new Object()
person2.name = 'Nicolas'

person1.age ='Redacted'
person2.age ='Redacted'

//O valor da propriedade é alterado
person1.name = 'Greg' 
person2.name = 'Michael'

console.log(person1)
console.log(person2)

/*

- Os dois obj possuem as propriedades name e age.
- Os valores da propriedade pode ser alterado a qualquer instante.

*/