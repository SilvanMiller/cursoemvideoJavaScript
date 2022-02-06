let num = document.querySelector('#fnum');
let lista = document.querySelector('#flista');
let res = document.querySelector('#resp');
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) //verificar se n é um número
    {
        return true;
    } else {
        return false;
    }
}

function isLista(n, list) {
    if (list.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && !isLista(num.value, valores)) {
        //alert(`Vamos continuar ta tudo ok`)
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `O valor ${num.value} foi adicionado.`;
        lista.appendChild(item);
        res.innerHTML = ''
    } else {
        alert(`O Valor já foi adicionado ou é invalido.`);
    }

    num.value = '';
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert(`Adicione os números para finalizar!`);
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for (let maior_menor in valores) {
            soma += valores[maior_menor];
            if (valores[maior_menor] > maior)
                maior = valores[maior_menor];
            if (valores[maior_menor] < menor)
                menor = valores[maior_menor];
        }
        media = soma / tot;

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, Temos ${tot} número cadastrado.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p> soma de todos os números é ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;

    }


}