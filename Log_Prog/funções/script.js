//livro logica de prog(https://pdf.zlibcdn.com/dtoken/a91906904470e8a2279bf0fa97842194/L%C3%B3gica_de_Programa%C3%A7%C3%A3o_Crie_seus_primeiros_program_2730140_(z-lib.org).pdf);

var primeira = function() {
    console.log("1 - antes");
    segunda();
    console.log("1 - depois");
};

var segunda = function() {
    console.log("2 - antes");
    terceira();
    console.log("2 - depois");
}
var terceira = function() {
    console.log("3")
};


primeira();