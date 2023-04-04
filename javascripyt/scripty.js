/*console.log ("Aqui esta um texto");

    let nome = "Rafael", idade = "19";

    console.log('Seu nome é ${nome} e sua idade é ${idade} anos');

    let suaIdade = prompt("Sua idade:"); 
   

function pessoa (nome, idade){
    this.nome = nome;
    this.idade = idade;
    return console.log(`Olá ${nome}, sua idade é ${idade}. \n Seja bem-vindo!`);
}

let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite seu idade: ");

console.log(pessoa(nome, idade));
     X

let numero = 20;

function parImpar (numero){
    let numero = prompt("DIgite um nomero: ");

    if(numero % 2 == 0){
        console.log("É par!");
        console.log(numero);
    } else{
        console.log("É impar!");
    } 
}

parImpar();
console.log(numero);

*/

//Function Arrow X *Const*

const potencia = (numero) => {
    return numero * numero;
}

/* function potencia (numero){
    return numero * numero;
}
*/

console.log(potencia(6));
