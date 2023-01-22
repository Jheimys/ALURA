#Laços de repetição
#1.For

- Sintaxe é composta por três instruções:
  I) O valor inicial da variável de controle
  II) Controla se a repetição continua ou não
  III) incremento ou decremento

**_Ex:_**

```
for( let i = 1; i<= 10; i++) { ... }
```

**_OBS:_** O laço for é interessande de ser usado quando se conhece o início da repetição e quantas vezes a repetição deve acontecer.

#2.While

- O teste da condicional é realizado logo no início.
- Sintaxe:

```
while(condição) {
    ...
}
```

#3. Do while

- Sintaxe:

```
do {
    comandos
} while (condição) {
  ...
}

```

- Uma sútil, porém importante, diferença entre as estruturas de repetição while e do while é a seguinte:

i) **while**, a condição é verificada no início.

ii) **do while**, a condição é verificada no final. Fica garantido que uma vez, no mínimo, os comandos que pertencem ao laço serão executados.

**_OBS:_** Optamos pelos laços de repetição while e do while quando não sabemos previamente quantas vezes a repetição vai acontecer.

**_Exemplo:_**
Pense em um terminal de caixa eletrônico, o sistema efetua o recebimento de uma conta e, no final, pergunta ao cliente se ele deseja pagar outra conta.

#4. Interrupções nos laços (break e continue)

- **break**, sai do laço de repetição.
- **continue**, retorna ao início do laço.
