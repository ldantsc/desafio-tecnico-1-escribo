# Desafio Técninco 1

Este é um repositório referente ao primeiro desafio técnico da escribo em JavaScript, e utilizando HTML e CSS para visualizar o resultado

## Objetivo do Desafio

- Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

## Passo a passo feito

O principal desafio está em **js/script.js** e aqui segue o passo a passo que tomei:

- criação da função **sumValues**

- criação de um array vazio

- For clássico para interar a variavel *i*

- Verificar se o resto da divisão de *i* por 3 retornar 0 ou se o resto da divisão de *i* por 5 retornar 0, adicionar o valor de *i* ao Array

- Após o For ser concluído, criei uma variável em que utilizo o método do JS reduce, que retorna a soma de todos os numeros desse Array.

## Concluindo

Para testar o código, criei uma pequena pagina para visualizar o resultado do desafio, que irei fazer o deploy atráves do Github Pages, o link esta em About no próprio repositório ou clicando [aqui](https://ldantsc.github.io/desafio-tecnico-1-escribo/)

- O resultado vai estar visivel após digitar o valor no input e clicar no botão **Resultado** (o resultado aparecerá também através DevTools em console)
