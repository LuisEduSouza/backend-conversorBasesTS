console.clear();

let numero: number;
let base: number;
let numerosArray: number[] = [];
const teclado = require("prompt-sync")();

numero = parseInt(teclado(`Digite o número:`));
base = parseInt(teclado(`Digite a base:`))

//Desestruturando número em um array
while (numero != 0) {
    let digito: number = numero % 10;
    numero = (numero - digito) / 10;
    console.log(`numero é igual ${numero}`);
    console.log(`digito é igual ${digito}`);
    numerosArray.push(digito);
}

console.log(numerosArray);

//Contador do tamanho do array
let tamanho: number = 0;
while (numerosArray[tamanho] !== undefined) {
    console.log(numerosArray[tamanho]);
    tamanho++;
}
console.log(`Tamanho do Array: ${tamanho}`);

let teste: number[] = [];
let soma: number = 0;

console.log(`Array inteiro invertido`, numerosArray);
for (let i = 0; i < tamanho; i++) {
    console.log(`Espaço ${i} do Array`, numerosArray[i]);
    let expoente: number;
    expoente = Math.pow(base, i);
    console.log(`O resultado do expoente é: ${expoente}`);
    teste[i] = numerosArray[i]! * expoente;
    soma += teste[i]!;
}

console.log(teste);
console.log(soma);