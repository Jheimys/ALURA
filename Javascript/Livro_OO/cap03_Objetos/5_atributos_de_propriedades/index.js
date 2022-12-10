/* MÉTODO: Object.defineProperty()

  i) Mudar os atributos das propriedades

  ii) Esse método aceita 3 argumentos:
      - O objeto que tem a propriedade
      - O nome da propriedade
      - Objeto descritor da propriedade

 MÉTODO: Object.keys()
    - Obtém um array de nomes de propriedades enumeráveis
*/

//Exemplo: Quero que uma propriedade do obj seja não enumerável e não configurável

const person1 = {
    name: 'Nicolas'   //A propriedade name é definida nomarlmente.
}

Object.defineProperty(person1, 'name', {
    enumerable: false   // Altera o atributo da propriedade name para false
})

console.log('name' in person1) // true: Verificando se a proprieade name existe
console.log(person1.propertyIsEnumerable('name')) // false

const properties = Object.keys(person1)
console.log(properties.length) // Retorna 0 que é a quantidade de obj enumeráveis

Object.defineProperty(person1, 'name', {
    configurable: false  // Muda o atributo da propriedade configurable para false
})

// Agora as propriedades do obj person1 não são mais configuráveis
// Exemplo, vamos  tentar apagar a propriedade name

delete person1.name
console.log('name'in person1) //true: o que mostra que a propriedade nao foi apagada.

Object.defineProperty(person1, 'name', {
    configurable: true // erro: Cannot redefine property: name
})




