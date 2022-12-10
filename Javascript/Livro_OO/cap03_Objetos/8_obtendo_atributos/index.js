/*
    MÉTODO: Object.getOwnPropetyDescriptor()
    -Aceita dois Argumentos:
    i) O objeto a ser manipulado.
    ii) E o nome da propriedade a ser acessada.

    -Se a propriedade existir, deverar receber um objeto descritor com 4 
    propriedades:
     i) Configurable
     ii) enumerable
     iii) e iv) dois valores adequado a cada tipo de propriedade.
*/

const person1 = {
    name: 'Nicolas'
}


//name é propriedade chamada
const descriptor = Object.getOwnPropertyDescriptor(person1, 'name') 

console.log(descriptor.enumerable)  //true
console.log(descriptor.configurable) //true
console.log(descriptor.writable)    //true
console.log(descriptor.value)       //Nicolas