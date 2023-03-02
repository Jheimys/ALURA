let ul = document.querySelector('ul')
//console.log(ul)



botaoMostraEstoque.addEventListener('click', () => {
  ul.innerHTML += `
        <li cor="laranja" tipo="tinta-exterior" class="item">Tinta laranja</li>
      <li cor="vermelho" tipo="tinta-interior" class="item">Tinta vermelha</li>
      <li cor="branco" tipo="tinta-interior" class="item">Tinta branca</li>
      <li cor="amarelo" tipo="tinta-exterior" class="item">Tinta amarela</li>
      <li cor="rosa" tipo="tinta-exterior" class="item">Tinta rosa</li>
      <li cor="preto" tipo="tinta-exterior" class="item">Tinta preta</li> 
  `
})

botaoLimpaEstoque.addEventListener('click', () => {
  ul.innerHTML = ''
})
