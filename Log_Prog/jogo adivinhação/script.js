//livro logica de prog(https://pdf.zlibcdn.com/dtoken/a91906904470e8a2279bf0fa97842194/L%C3%B3gica_de_Programa%C3%A7%C3%A3o_Crie_seus_primeiros_program_2730140_(z-lib.org).pdf);

let pulaLinha = function() {
    document.write("<br>");
}
let mostra = function(frase) {
    document.write(frase);
    pulaLinha();
};
//numeroPensado = Math.random() * 100; // variaveis temporarias
//numeroDecimal = Math.round(numeroPensado); // variaveis tempor.
numeroPensado = Math.round(Math.random() * 10);
chute = prompt("Ja pensei. Qual vc acha que é?");
if (chute == numeroPensado) {
    mostra("Uau! Você acertou, pois eu pensei no numero " + numeroPensado);
} else {
    mostra("Que pena você errou! mas não desiste não")
}