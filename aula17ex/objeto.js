//OBJETO...
let cliente = {
    nome: 'Slvan',
    sexo: 'M',
    peso: 79.84,
    engordar(p = 0) {
        console.log('Engordou');
        this.peso += p;
    }
}
cliente.engordar(2);
console.log(`${cliente.nome} pesa ${cliente.peso}`);