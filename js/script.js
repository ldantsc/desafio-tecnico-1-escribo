/*

Desafio Técnico 1 

Descrição:
- Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores
inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

Exemplos:
- Caso sua função receba o inteiro 10, ela deve retornar 23, resultante do somatório dos números 3, 5, 6 e
9 que são menores que 10.
- Caso sua função receba o inteiro 11, ela deve retornar 33, resultante do somatório dos números 3, 5, 6, 9
e 10 que são menores que 11. 

*/

export function sumValues(number) {
    /* inicializar array vazia */
    let initialArray = []

    for(let i = 1; i < number; i++){
        /* verificar se numero em i é divisivel por 3 ou divisivel por 5*/
        if(i % 3 === 0 || i % 5 === 0) {
            /* se true, adicionar ao array e recomeçar 
            o loop até sua parada*/
            initialArray.push(i);
        };
    };
    
    /* após a parada do loop, criar uma variável e utilizar o método reduce para somar
    os numeros do array e retornar a soma de todos os numeros do array*/
    const result = initialArray.reduce((prevNumber, nextNumber)=> {
        return prevNumber + nextNumber;
    });

    return result;

};



