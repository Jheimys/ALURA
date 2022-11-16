# O que é o Async/await?

Costumamos chamar de programação assíncrona o ato de executar uma tarefa em "segundo plano", sem nosso controle direto disso. Sem explicitamente trabalhar com threads e coordená-las. Escrevendo basicamente da forma tradicional que temos.

Porém, é importante frisar o comportamento do JavaScript de "executar uma coisa por vez". Com isso em mente o assíncrono no JavaScript vai separar seu código em duas partes: coisas que rodam agora, coisas que vão rodar depois de algo acontecer... Calma. Vai ficar mais fácil de entender.

Trabalhando com front-end, vemos que uma boa parte do que ocorre no âmbito do navegador é event-driven. Ou seja, o código aguarda algum evento acontecer (por exemplo, o usuário clicar em um botão) antes de executar qualquer código. Outros exemplos de eventos, além de clique do mouse, são toque na tela, determinada tecla ser pressionada, o cursor do mouse passar em cima de algum elemento, etc). Mas, para além destas interações do usuário com a interface, há muitas outras situações que podem ser síncronas ou assíncronas.

Para exemplificar, podemos pensar em comunicação. Uma ligação telefônica é um exemplo de comunicação síncrona: quando falamos ao telefone, as informações chegam e saem em sequência, uma após a outra; fazemos uma pergunta, recebemos logo em seguida a resposta, com os dados dessa resposta fazemos outro comentário, etc.

Por outro lado, uma conversa online via algum mensageiro, como o WhatsApp ou ou Telegram, é um exemplo de comunicação assíncrona: enviamos uma mensagem e não ficamos olhando para a tela, esperando, até a outra pessoa responder (ou pelo menos não deveríamos!). Afinal de contas, não temos como saber quando, e se, essa resposta vai chegar. Mandamos a mensagem e vamos fazer outras coisas enquanto a resposta não chega, ao contrário do telefone.

Com o código, o processo é parecido: um código síncrono é aquele de ocorre em sequência, uma instrução após a outra.

```js
function soma(num1, num2) {
  return num1 + num2;
}

console.log(soma(2, 2)); // 4
```

Até aí, tudo normal. O JavaScript executou uma linha após a outra.

Mas o que acontece quando, por exemplo, nosso código precisa receber alguns dados de uma API? Ao mesmo tempo que é preciso aguardar a requisição e resposta da API, não podemos bloquear o funcionamento de todo o nosso programa; seria a mesma coisa que enviar uma mensagem pelo WhatsApp e ficar esperando a resposta sem fazer mais nada nesse meio tempo.

É para esse tipo de situação, que requer processamento assíncrono que existem as Promises, ou, literalmente, promessas. O sentido de Promise em JavaScript é similar ao literal: Uma pessoa te passa o contato do Telegram e pede para que você mande uma mensagem pra ela, prometendo que vai responder... O que não temos como saber se vai acontecer.

Quando enviamos uma requisição de dados a uma API, temos uma promessa de que estes dados irão chegar, mas enquanto isso não acontece, o sistema deve continuar rodando. Se, por exemplo, o servidor estiver caído, essa promessa de dados pode não se cumprir, e temos que lidar com isso. As Promises trabalham neste contexto - elas são a ferramenta que o JavaScript utiliza para lidar com código assíncrono.

Existem algumas formas de se trabalhar com processamento assíncrono (ou seja, Promises) em JavaScript: utilizando o método .then(), as palavras-chave async e await ou o objeto Promise e seus métodos. Aqui, vamos focar no uso de .then(), async/await e no uso do método Promise.all.
