let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let botao = document.getElementById('calcular');
let result = document.getElementById('resultado');

function calcular(n1, n2){
    return n1 + n2
}

botao.addEventListener('click', function(){
    result.innerHTML = calcular(number1.value, number2.value);
});