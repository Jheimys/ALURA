/*
1-static

A palavra chave static define um método estático para a classe. Métodos estáticos não são chamados na instâncias da classe. Em vez disso, eles são chamados na própria classe. Geralmente, são funções utilitárias, como funções para criar ou clonar objetos.

2-Sintaxe

static nomeDoMetodo() { ... }

3-Descrição

Chamadas a métodos estáticos são feitas diretamente na classe e não podem ser feitas em uma instância da classe. Métodos estáticos são comumente utilizados como funções utilitárias.

4- Chamada de métodos estáticos De outro método estático

Para chamar um método estático dentro de outro método estático da mesma classe, podemos utilizar a palavra reservada this.
*/

class ChamadaDoMetodoEstatico {
    static metodoEstatico() {
      return 'O método estático foi chamado';
    }
    static outroMetodoEstatico() {
      return this.metodoEstatico() + ' de outro método estático';
    }
}

ChamadaDoMetodoEstatico.metodoEstatico();
  // 'O método estático foi chamado'
  
ChamadaDoMetodoEstatico.outroMetodoEstatico();
  // 'O método estático foi chamado de outro método estático'