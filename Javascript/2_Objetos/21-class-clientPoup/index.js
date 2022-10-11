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

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarSaldoPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const andre = new ClientePoupanca('Andre', 'a@email.com', '112233445566', 100, 200)

//console.log(andre)

andre.depositar(50)
andre.depositarSaldoPoupanca(50)

console.log(andre)