var number1 = document.getElementById('number1'); // types assertions
var number2 = document.getElementById('number2');
var botao = document.getElementById('calcular');
var result = document.getElementById('resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    result.innerHTML = calcular(+number1.value, +number2.value).toString();
});
