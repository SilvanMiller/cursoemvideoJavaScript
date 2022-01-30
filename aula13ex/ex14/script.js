function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('fotoImg');
    var data = new Date();
    var hora = data.getHours();
    //var hora = 13
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        //BOM DIA !!
        document.body.style.background = "#8383ff"
        img.src = 'manha.jpg'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!!
        document.body.style.background = "#b9846f"
        img.src = 'tarde.jpg'
    } else {
        //BOA NOITE!!
        document.body.style.background = "#515154"
        img.src = 'noite.jpg'
    }


}