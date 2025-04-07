//DECLARARAÇÕES E VARIAVEIS

var nome ="fiap";
console.log(nome);

let Idade = 19;
console.log(idade)

const sobrenome="Fiapinho";
console.log(sobrenome)

//declarando uma variavel indefinida
let nome1;
console.log(nome1)

//declarando uma variavel nula
let nome2=null;
console.log(nome2)

//TIPOS DE VARIAVEIS

let exemplo1 =10;
console.log(typeof exemplo1)

let exemplo2 ="Tecnologia";
console.log(typeof exemplo2)

let exemplo3 =true;
console.log(typeof exemplo3)

let exemplo4={};
console.log(typeof exemplo4)

let exemplo5 =[];
console.log(typeof exemplo5)

//CONVERSÕES

let numFloat =123.456;
console.log(parseInt(numFloat));

let numString ="123.456";
console.log(parseFloat(numString));

//METODOS

//length = verifica o tamanho da string
let frase ="O mundo da tecnologia";
console.log(frase.length);

//indexOf -retorna um trecho do texto

let texto="A programação indomável e sustentavel";
console.log(texto.indexOf(""))


//slice - retorna um trecho do texto com inicio e final

let info ="Processamento de ponta";
console.log(info.slice(16,25))

//OPERADORES ARITIMÉTICOS

const num1=10;
const num2=20;

console.log(num1 + num2);
console.log(num1 - num2);
 console.log(num1 * num2);
console.log(num1 / num2);

// OPERADORES LÓGICOS

const num3=20;
const num4="30";

console.log(num3 < num4);
console.log(num3 > num4 && num4 < num3);
console.log(num3 < num4 || num4 < num3); 

// //OPERADORES DE COMPARAÇÃO

//estrutrura condicional

let logado ="fiap";
if(logado == "fiap"){
    console.log("é verdadeiro")
}

// if / elsse

let usuario = "teste"
if(usuario == "teste"){
    console.log("usuario correto")
}else{
    console.log("usuario errado")
}

//if encadeado / aninhado

let idade = 15

if(idade <= 15){
    console.log("Menor de idade")
}else if(idade > 15 && idaede < 18){
    console.log("não é maior de idade")
}else{
    console.log("pode entrar")
}

// switch 

let time = "Palmeiras";

switch(time){
    case "Palmeiras":
        console.log("melhor time")
        break;
    case "sao paulo":
        console.log("nao é o melhor time")
        break;
    case "Corinthians":
        console.log("Você quis dizer timinho?")
        break;
    default:
        console.log("nenhuma das opcoes")
}

// condição ternaria

