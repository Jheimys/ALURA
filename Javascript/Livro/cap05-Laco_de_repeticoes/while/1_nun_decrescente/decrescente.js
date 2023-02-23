function decrescente(num){

    let resultado = ''

    while(num > 1){
        resultado += `${num},`
        num--
    }
    
    console.log(resultado,  '1')
}

decrescente(10)
