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
        lista.appendChild(item)
    } else {
        alert(`O Valor já foi adicionado ou é invalido.`);
    }
}