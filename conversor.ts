console.clear();

const teclado = require("prompt-sync")();

let entrada: string;
let base: number;

let baseFinal: number;

entrada = teclado(`Digite o número: `);
base = parseInt(teclado(`Digite a base: `));
baseFinal = parseInt(teclado(`Digite a base deseja para passar o seu número `));

function transformarDecimal(entrada: string, base: number): number {
    let numerosArray: number[] = [];
    let decimal: number = 0;
    let numero: number;

    if (base != 10) {
        if (base <= 9) {
            numero = parseInt(entrada);
            while (numero != 0) {
                let digito: number = numero % 10;
                numero = (numero - digito) / 10;
                numerosArray.push(digito);
            }
        }

        else if (base == 16) {
            let hexaDecimal: string = entrada.toUpperCase();
            for (let i = hexaDecimal.length - 1; i >= 0; i--) {
                switch (hexaDecimal[i]) {
                    case "A":
                        numerosArray.push(10);
                        break;
                    case "B":
                        numerosArray.push(11);
                        break;
                    case "C":
                        numerosArray.push(12);
                        break;
                    case "D":
                        numerosArray.push(13);
                        break;
                    case "E":
                        numerosArray.push(14);
                        break;
                    case "F":
                        numerosArray.push(15);
                        break;
                    default:
                        numerosArray.push(parseInt(hexaDecimal[i]!));
                }
            }
        }

        let valorPosicional: number[] = [];

        for (let i = 0; i < numerosArray.length; i++) {
            let expoente: number;
            expoente = Math.pow(base, i);
            valorPosicional[i] = numerosArray[i]! * expoente;
            decimal += valorPosicional[i]!;
        }

        return decimal;
    } else {
        decimal = parseInt(entrada);
        return decimal;
    }
}

let resultado = transformarDecimal(entrada, base);

console.log(resultado);


