function contar() {
    let ini = document.getElementById('txtI');
    let fim = document.getElementById('txtF');
    let passo = document.getElementById('txtP');
    let resp = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] faltan dados, reveja sua digitação!!');
    } else {
        resp.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resp.innerHTML += `${c}, `;
            }
            resp.innerHTML += `\u{1F3C1}`
        } else {
            for (let c = i; c >= f; c -= p) {
                resp.innerHTML += `${c}, `;
            }
            resp.innerHTML += ` \u{1F3C1}`
        }

    }
}