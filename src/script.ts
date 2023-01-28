let number1 = document.getElementById('number1') as HTMLInputElement; // types assertions
let number2 = document.getElementById('number2') as HTMLInputElement;
let botao = document.getElementById('calcular') as HTMLButtonElement;
let result = document.getElementById('resultado') as HTMLDivElement;

function calcular(n1: number, n2: number){
    return n1 + n2;
}

botao.addEventListener('click', function(){
    result.innerHTML = calcular(+number1.value, +number2.value).toString();
});
// types no parâmetro da function e types no retorno da function
// Existe o Type Inference tbm conhecida como Contextual Types
/* function firstLetterUpperCase(name: string) : string {
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter+name.substring(1);
}; */

// Types em objetos para eliminar a possibilidade de erro
// Propriedades opcionais 
/* function resumo(user: {name: string, age?: number}){
    if(user.age !== undefined){
        return `Olá ${user.name} tudo bem? Você tem ${user.age} anos.`;
    } else{
        return `Olá ${user.name} tudo bem?`;
    }
} */ 
// Types em objetos para eliminar a possibilidade de erro
/* function resumo(usuario: {name: string, age: number}){
    return `Olá ${usuario.name}, tudo bem? Você tem ${usuario.age} anos.`;
}
// Implementação da função
let u = {
    name : 'Bonieky',
    age : 90
};
resumo(u); */
// Union Types (múltiplos Types)
/* function mostrarIdade(idade : number | string){
    if(typeof idade === 'string'){
        console.log(idade.toUpperCase);
    } else{
        console.log(idade);
    }
}
mostrarIdade(90);
mostrarIdade('90'); */

// criação de types e interfaces (quando usar?)
// O type NÃO permite adicionar itens após criação
/* type User = {
    name : string,
    age : number
}; */

// O interface permite adicionar itens após criação.
/* interface User {
    name: string,
    age: number
};

function resumo(usuario: User){
    return `Olá ${usuario.name}, tudo bem? Você tem ${usuario.age} anos.`;
}

resumo({
    name: 'Bonieky',
    age : 90
}); */

// Inferência Literal.
//function fazerRequisicao(url : string, method: 'GET' | 'POST'){
    // lógica
//};
/* type Methods = 'GET' | 'POST';
let url = 'https://google.com.br';
let method : Methods = 'GET';
fazerRequisição(url, method); */

// fazendo Inferência Literal usando objeto
/* type RequestDetails = {
    url: string,
    method: 'GET' | 'POST'
};

let req : RequestDetails =  {
    url: 'https://google.com.br',
    method: 'GET'
};
fazerRequisicao(req.url, req.method); */

//Type para funções
/* type MathFunction = (n1: number, n2: number) => number;

const somar: MathFunction = (n1, n2) => {
    return n1 + n2;
}

const subtrair: MathFunction = (n1, n2) => {
    return n1 - n2;
}

const multiplicar: MathFunction = (n1, n2) => {
    return n1 * n2;
}

const dividir: MathFunction = (n1, n2) => {
    return n1 / n2;
} */