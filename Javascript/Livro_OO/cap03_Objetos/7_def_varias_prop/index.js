/*
    MÉTODO: Object.defineProperties()
    -Define várias propriedades simultaneamente.
    -Aceita dois agumentos
     i) O objeto
     ii) Objeto contendo as informações a serem usadas.
*/

const person1 = {}

//propriedades de dados para armazenar informações
Object.defineProperties(person1, {
    _name: {
        value: 'Nicolas',
        enumerable: true,
        configurable: true,
        writable: true
    },

    //propriedades de acesso
    name: {
        get: function() {
            console.log('Readind name')
            return this._name
        }
    },

    set : function(value) {
        console.log('Setting name to %s', value)
        this._name = value
    },
    
    enumerable: true,
    configurable: true
})