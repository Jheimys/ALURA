export default class User {
    #nome
    #email
    #nascimento 
    #role 
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    exibirInfos() {
       return console.log(`${this.#nome}, ${this.#email}`)
    }
}

