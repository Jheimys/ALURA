/*
const person1 = {
    _name: 'Nicolas', //propriedade de dados

    get name(){ //propriedade de acesso
        console.log('Reading name')
        return this._name
    },

    set name(value) {
        console.log('Setting name to  %s', value)
        this._name = value
    }
}
*/

//Esse código poderia ser escrito assim:

const person1 = {
    _name: 'Nicolas'
}

Object.defineProperty(person1, 'name', {
    get: function() {
        console.log('Reading name')
        return this._name
    },
    set: function(value) {
        console.log('Setting name to %s', value)
        this._name = value
    }, 

    enumerable: true,
    configurable: true
})

