let num = [5, 8, 2, 9, 3];

num.push(1);
num.sort();

console.log(num)
console.log(`Nosso vetor é o ${num}`);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);

}

let pos = num.indexOf(5);
if (pos == -1) {
    console.log(`O valor não foi encontrado no array`);
} else {
    console.log(`O valor esta na posição ${pos}`);
}