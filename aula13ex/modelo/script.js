function tabuada() {
    var numero = document.getElementById('txtn');
    var tabuad = document.getElementById('seltabu');

    if (numero.value.length == 0) {
        alert('Por favor, Digite um número!');
    } else {
        var n = Number(numero.value);
        var c = 1;

        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            tabuad.appendChild(item);
            c++
        }

    }

}