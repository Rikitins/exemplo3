//alert ("Hello world")
// //DECLARARAÇÕES E VARIAVEIS

// var nome ="fiap";
// console.log(nome);

// let idade = 19;
// console.log(idade)

// const sobrenome="Fiapinho";
// console.log(sobrenome)

// //declarando uma variavel indefinida
// let nome1;
// console.log(nome1)

// //declarando uma variavel nula
// let nome2=null;
// console.log(nome2)

// //TIPOS DE VARIAVEIS

// let exemplo1 =10;
// console.log(typeof exemplo1)

// let exemplo2 ="Tecnologia";
// console.log(typeof exemplo2)

// let exemplo3 =true;
// console.log(typeof exemplo3)

// let exemplo4={};
// console.log(typeof exemplo4)

// let exemplo5 =[];
// console.log(typeof exemplo5)


//CONVERSÕES

//FLOAT => STRING

// let numFloat =123.456;
// console.log(numFloat.toString())

// //STRING => FLOAT
// let numString ="12.963";
// console.log(parseFloat(numString))

// //INT => STRING
// let numInt =100;
// console.log(numInt.toString())

// //STRING => INT

// let numString1 ="120";
// console.log(parseInt(numString1))

//METODOS

//METODO length - VERIFICA O TAMNHO DA STRING

// let frase ="O mundo da Tecnologia";
// console.log(frase.length)

// //METODO Indeof/lastIndexOf-RETORNA UM TRECHO DO SEU CODIGO

// let texto ="Programação Sustentável ão";
// console.log(texto.lastIndexOf("ão"))

// //METODO slice - RETORNA PARTE DE UM TEXTO PASSANDO INICIO E O FINAL
// let info ="Programação de ponta";
// console.log(info.slice(14,20))

//OPERADORES ARITMÉTICOS

// const a=10;
// const b=20;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

//OPERADORES LÓGICOS

// const c=20;
// const d=30;

// console.log(c > d);
// console.log(c < d && c < 10);
// console.log(c > d || d > c);
// console.log(c == d || d <= c )

//OPERADORES DE COMPARAÇÃO
// let e="10";
// let f="10";

// console.log( e == f);
// console.log( e === f);
// console.log( e != f);


//CONDICIONAL

// if(true){
//     console.log("É verdadeiro")
// }
// let exemplo=1
// if(exemplo==1){
//     console.log("Esta correto")
// }

// //if/else

// let nome="Fia";

// if(nome=="Fiap"){
//     console.log("Nome correto")
//   // document.write("Nome certo")
// }
// else{
//     console.log("HACKER ANUNCIADO AAAAAAAA")
//     // document.write("HACKER ANUNCIADO AAAAAAA")
// }

// //if encadeado ou aninhado

// let idade = 13
// if(idade <=14){
//     console.log("VAI PRA FORA SEU MERDAAAAAA")
// }
// else if (idade > 14 && idade <= 18){
//     console.log("Entra irmão")
// }
// else if(idade > 18 && idade <= 50){
//     console.log("Perigo seus pais estao na balada")
// }
// else{
//     console.log("Fica em casa irmão")
// }

// //swtich case

// let time = "Santos";

// switch(time){
//     case "Corinthians":
//         console.log("Pior time")
//         break;
//     case "Sao paulo":
//         console.log("É tão ruim que consegue perder em casa")
//         break;
//     case "Palmeiras":
//         console.log("Simplesmene não tem mundial")
//         break;
//     default:
//         console.log("Maior time do mundo(Santos)")
// }

// //Ternario

// let valor = 100;
// let resultado = valor == 100 ? "valor certo": "Valor errado";
// console.log(resultado);

// let nota = 7;
// let minima = valor >= 6 ? "Passou": "Não passou";
// console.log(resultado);

//Estrutura de repetição

// for(let i=0;i<=10;i++){
//     console.log("o valor de I é", i)
// }

// //while

// let f =0;

// while(f<10){
//     console.log("O valor de f é",f)
//     f++;
// }

//do while

// let w=0;
// do{
//     console.log("do while",w)
//     w++
// }while(w<=20)

//Joguinho da adivinhação

let palpite;