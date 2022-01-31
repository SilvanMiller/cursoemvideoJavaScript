function verifica() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        //res.innerHTML = `Idade calculada: ${idade}`//testando o codigo
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            gênero = 'Homem';
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'crianca.jpg');
                img.style.borderRadius = '120px';
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'adulto.jpg');
                img.style.borderRadius = '120px';
            } else if (idade < 50) {

                img.style.borderRadius = '120px';
            } else {
                //idoso
                img.style.borderRadius = '120px';
            }


        } else if (fsex[1].checked) {
            gênero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criancaF.jpg');
                img.style.borderRadius = '120px';
            } else if (idade < 21) {
                //jovem
                img.style.borderRadius = '120px';
            } else if (idade < 50) {

                img.style.borderRadius = '120px';
            } else {
                //idoso
                img.style.borderRadius = '120px';
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade}\n`; //testando o codigo
        res.appendChild(img);
    }


}