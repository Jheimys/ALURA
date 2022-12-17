const user = {
    name: 'Juliana',
    email: 'j@j.com',
    nascimento: '2021/01/01',
    role:'admin',
    ativo: 'true',
    exibirInfos: function() {
        console.log(this.name, this.email)
    }
}


const exibir = function() {
    console.log(this.name)
}
 
exibir() //undefined, essa função não tem ligação com obj.

const exibirNome = exibir.bind(user)
exibirNome() //Juliana, o método bind ligou a função exibir ao obj