const btn = document.querySelector('#calcular')

btn.addEventListener('click', () => {
    console.log('Fui clicado!')
})

const lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 
console.log(lista)

const novalista = lista.splice(1,1)

console.log(novalista) 
console.log(lista)