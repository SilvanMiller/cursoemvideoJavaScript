function tabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
    if (num.value.length == 0) {
        alert('Por favor, Digite um número!');
    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = '';
        while (c <= 10) {
            let items = document.createElement('option');
            items.text = `${n} x ${c} = ${n*c}`;
            c++;
            tab.appendChild(items);

        }

    }

}