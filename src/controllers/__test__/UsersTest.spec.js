const operacoes = require ('../OperaçoesController')

it('1 + 2 deve ser igual a 3', () => {
    const result = 3

    expect(operacoes.soma(1,2)).toBe(result)
})


// const soma = (num1, num2) => {
//     let total = num1 + num2;
//     return total
// }

// const subtracao = (num1, num2) => {
//     let total = num1 - num2;
//     return total
// }

// const multiplicacao = (num1, num2) => {
//     let total = num1 * num2;
//     return total
// }

// const divisao = (num1, num2) => {
//     let total = num1 / num2;
//     return total
// }














// function adicionar(a, b) {
//     return a + b;
// }


// function subtrair(a, b) {
//     return a - b;
// }


// function multiplicar(a, b) {
//     return a * b;
// }


// function dividir(a, b) {
//     if (b !== 0) {
//         return a / b;
//     } else {
//         return 'Erro: Divisão por zero não é permitida.';
//     }
// }


// console.log(adicionar(5, 3));     
// console.log(subtrair(5, 3));      
// console.log(multiplicar(5, 3));   
// console.log(dividir(5, 3));       
// console.log(dividir(5, 0));       

