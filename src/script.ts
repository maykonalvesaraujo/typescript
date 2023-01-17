let number1 = document.getElementById('number1') as HTMLInputElement;
let number2 = document.getElementById('number2') as HTMLInputElement;
let botao = document.getElementById('calcular') as HTMLButtonElement;
let result = document.getElementById('resultado') as HTMLDivElement;

function calcular(n1, n2){
    return n1 + n2
}

botao.addEventListener('click', function(){
    result.innerHTML = calcular(number1.value, number2.value);
});