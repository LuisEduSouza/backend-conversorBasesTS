export function transformarDecimal(entrada: string, baseOrigem: number): number {
    let numerosArray: number[] = [];
    let valorDecimal: number = 0;
    let numero: number;

    if (baseOrigem != 10) {
        if (baseOrigem <= 9) {
            numero = parseInt(entrada);
            while (numero != 0) {
                let digito: number = numero % 10;
                if (digito >= baseOrigem || isNaN(digito)) {
                    throw new Error(`Numero inválido para a base ${baseOrigem}`);
                }
                numero = (numero - digito) / 10;
                numerosArray.push(digito);
            }
        }

        else if (baseOrigem == 16) {
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
                        let digito: number = parseInt(hexaDecimal[i]);
                        if (isNaN(digito)) {
                            throw new Error("Numero hexadecimal inválido");
                        }
                        numerosArray.push(parseInt(hexaDecimal[i]!));
                }
            }
        }

        let valorPosicional: number[] = [];

        for (let i = 0; i < numerosArray.length; i++) {
            valorPosicional[i] = numerosArray[i]! * Math.pow(baseOrigem, i);
            valorDecimal += valorPosicional[i]!;
        }

        return valorDecimal;
    } else if (baseOrigem == 10) {
        valorDecimal = parseInt(entrada);
        return valorDecimal;
    } else {
        throw new Error("Base não suportada");
    }
}

export function transformarBaseFinal(valorDecimal: number, baseFinal: number): string {
    let numero: number[] = [];
    let hexadecimal: string[] = [];
    let resto: number;

    if (baseFinal <= 10) {
        let numeroFinal: number[] = [];

        do {
            resto = valorDecimal % baseFinal;
            numero.push(resto);
            valorDecimal = Math.floor(valorDecimal / baseFinal);
        } while (valorDecimal != 0);

        for (let i = numero.length - 1; i >= 0; i--) {
            numeroFinal.push(numero[i]!);
        }

        return numeroFinal.join("");
    }

    else if (baseFinal == 16) {
        let hexadecimalFinal: string[] = [];

        do {
            resto = valorDecimal % baseFinal;

            switch (resto) {
                case 10:
                    hexadecimal.push("A");
                    break;
                case 11:
                    hexadecimal.push("B");
                    break;
                case 12:
                    hexadecimal.push("C");
                    break;
                case 13:
                    hexadecimal.push("D");
                    break;
                case 14:
                    hexadecimal.push("E");
                    break;
                case 15:
                    hexadecimal.push("F");
                    break;
                default:
                    hexadecimal.push(`${resto}`);
            }

            valorDecimal = Math.floor(valorDecimal / baseFinal);

        } while (valorDecimal != 0);

        for (let i = hexadecimal.length - 1; i >= 0; i--) {
            hexadecimalFinal.push(hexadecimal[i]!);
        }

        return hexadecimalFinal.join("");
    }

    throw new Error("Base não suportada");
}