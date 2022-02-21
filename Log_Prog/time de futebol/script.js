//livro logica de prog(https://pdf.zlibcdn.com/dtoken/a91906904470e8a2279bf0fa97842194/L%C3%B3gica_de_Programa%C3%A7%C3%A3o_Crie_seus_primeiros_program_2730140_(z-lib.org).pdf);

let pulaLinha = function() {
    document.write("<br>");
}
let mostra = function(frase) {
    document.write(frase);
    pulaLinha();
};

var vitorias = prompt("Quantos jogos o CM Futebol Clube Venceu?");
var empates = prompt("Quantas jogos o CM Futebol Clube empatou?");
var pontos = vitorias * 3 + parseInt(empates);
if (pontos > 28) {
    mostra("Nosso time esta indo <strong>melhor</strong> que os outros time");
}
if (pontos < 28) {
    mostra("Nosso time esta indo <strong>pior</strong> que os outros time");
}
if (pontos == 28) {
    mostra("Nosso time esta <strong>empatado</strong> com os outros time");
}

mostra("Nosso time tem " + pontos + " pontos!");