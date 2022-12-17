
const user = {
    name: 'Juliana',
    email: 'j@j.com',
    nascimento: '2021/01/01',
    role:'estudante',
    ativo: 'true',
    exibirInfos: function() {
        console.log(this.name, this.email)
    }
}

const admin = {
    name: 'Mariana',
    email:'m@m.com',
    role:'admin',
    criarCurso() {
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()
