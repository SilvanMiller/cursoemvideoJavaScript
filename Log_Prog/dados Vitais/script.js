//livro logica de prog(https://pdf.zlibcdn.com/dtoken/a91906904470e8a2279bf0fa97842194/L%C3%B3gica_de_Programa%C3%A7%C3%A3o_Crie_seus_primeiros_program_2730140_(z-lib.org).pdf);

let pulaLinha = function() {
    document.write("<br>");
}
let mostra = function(frase) {
    document.write(frase);
    pulaLinha();
};



var nome = prompt("Bom dia! qual é o seu nome?");
var idade = prompt(nome + " quantos anos você tem?");
var dias = idade * 365;
mostra(nome + ", você ja viveu " + dias + " dias de vida.");
var batimentos = dias * 24 * 60 * 80;
mostra(nome + ", seu coração já bateu " + batimentos + " vezes. Haja coração!");