/*
    i) Propriedades de dados: Contêm um valor. 
    ii) Propriedade de acesso: Não contêm valor, definem uma função a ser
    chamada.

    - get: retorna um valor
    - set: recebem um valor
*/

const person1 = {
    _name: 'Nicolas', //Propriedade de dado
    get name() { // propriedade de acesso
        console.log("Reading name")
        return this._name
    },

    set name(value) {
        console.log('setting name to %s', value)
        this._name = value
    }
}

console.log(person1.name)

person1.name = 'Greg'

console.log(person1.name)