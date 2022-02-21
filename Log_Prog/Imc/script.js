//livro logica de prog(https://pdf.zlibcdn.com/dtoken/a91906904470e8a2279bf0fa97842194/L%C3%B3gica_de_Programa%C3%A7%C3%A3o_Crie_seus_primeiros_program_2730140_(z-lib.org).pdf);


let mostra = function(frase) {
    document.write(frase);
};
let calculaIMC = function(altura, peso) {
    let imc = peso / (altura * altura);
    //mostra("IMC calculado é " + imc);
    return imc;
};

/*var peso = 75; //calcular o imc passando os parametros.
//var altura = 1.73;
//var imc = peso / (altura * altura);
//mostra("Meu IMC é: " + imc); 
var pesoDoPrimo = 83;
var alturaDoPrimo = 1.76;
var imcDoPrimo = calculaIMC(alturaDoPrimo, pesoDoPrimo);
mostra("O imc do meu primo é " + Math.round(imcDoPrimo));
mostra(" Ele ainda esta " + (Math.round(imcDoPrimo) - 18.5) + " pontos acima do limite de magreza");
var nome = prompt("Bom dia! qual é o seu nome?");
document.write("Bem vindo, " + nome);

var idade = prompt("Quantos anos você tem? " + nome);
document.write(" tem" + idade + " anos."); */
var nome = prompt("Bom dia! qual é o seu nome?");
var alturaUsuario = prompt(nome + " Olá! qual é a sua altura?");
var pesoUsuario = prompt("me diga seu peso, " + nome + " por favor!");
var imcUsuario = calculaIMC(alturaUsuario, pesoUsuario);
mostra(nome + ", seu imc é " + Math.round(imcUsuario));