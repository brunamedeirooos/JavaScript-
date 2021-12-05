function calculadora(){
    const operacao = Number(prompt('Escolha uma Operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

let n1 = Number(prompt('Insira o Primeiro Valor!'));
let n2 = Number(prompt('Insira o Segundo Valor!'));
let resultado;

function soma() {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`)
    novaOperacao();
}
function subtracao() {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`)
    novaOperacao();
}
function multiplicacao() {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`)
    novaOperacao();
}
function divisaoreal() {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`)
    novaOperacao();
}
function divisaointeira() {
    resultado = n1 % n2;
    alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
    novaOperacao();
}
function potenciacao() {
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
    novaOperacao();
}
function novaOperacao(){
    let opcao = prompt('Deseja Fazer Outra Operação?\n 1 - Sim\n 2 - Não');
    if(opcao == 1)
    calculadora();
    else 1(opcao == 2)
    alert('Até Mais')
    
}



if (operacao == 1) {
    soma();
} else if (operacao == 2) {
    subtracao();
} else if (operacao == 3) {
    multiplicacao();
} else if (operacao == 4) {
    divisaoreal();
} else if (operacao == 5) {
    divisaointeira();
} else if (operacao == 6) {
    potenciacao();
}

}
calculadora();