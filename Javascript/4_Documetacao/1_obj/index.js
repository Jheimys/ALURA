/*
    1-Trabalhando com objetos

    A linguagem JavaScript é projetada com base em um paradigma simples orientado a objeto. Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave ) e um valor.
    
    Um valor de propriedade pode ser uma função, que é então considerado um método do objeto. Além dos objetos que são pré-definidos no navegador, você pode definir seus próprios objetos.

    Este capítulo descreve como usar objetos, propriedades, funções e métodos, e como criar seus próprios objetos.

    2-Visão geral de objetos

    Objetos em JavaScript, assim como em muitas outras linguagens de programação, podem ser comparados com objetos na vida real. O conceito de objetos em JavaScript pode ser entendido como objetos tangíveis da vida real.

    Em JavaScript, um objeto é uma entidade independente, com propriedades e tipos. Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades. Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. Da mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.

*/

// 3-Objetos e propriedades

const meuCarro = new Object()
meuCarro.fabricacao = 'Ford'
meuCarro.modelo = 'Mustang'
meuCarro.ano = 1969

//Propriedades não definidas de um objeto são undefined(e não null).

//Poderiamos tbm usar a notação de colchete:

// meuCarro["fabricacao"] = "Ford";
// meuCarro["modelo"] = "Mustang";
// meuCarro["ano"] = 1969;
