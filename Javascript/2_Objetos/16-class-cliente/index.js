class Cliente {
    constructor(nome, email, cpf, saldo){
        //Atributos da classe
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    //métodos da classe
    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

//Instância da classe Cliente com obj andre
const andre = new Cliente('Andre', 'andre@email.com', '112233445566', 100)
console.log(andre)