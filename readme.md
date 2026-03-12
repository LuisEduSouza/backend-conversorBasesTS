# Conversão de Número em Base para Decimal (TypeScript)

## 📌 Descrição

Este programa em **TypeScript** recebe um número digitado pelo usuário e a **base numérica** correspondente.
Ele separa os dígitos do número, armazena-os em um array e realiza o **cálculo para converter o valor para base decimal**.

O processo segue o princípio matemático da conversão de bases:

[
N = d_0 \cdot b^0 + d_1 \cdot b^1 + d_2 \cdot b^2 + ...
]

Onde:

* **N** → número em decimal
* **d** → dígitos do número
* **b** → base numérica

---

# ⚙️ Funcionamento do Código

## 1️⃣ Limpeza do console

```ts
console.clear();
```

Remove todas as informações anteriores do terminal para facilitar a leitura da execução.

---

## 2️⃣ Declaração de variáveis

```ts
let numero: number;
let base: number;
let numerosArray: number[] = [];
```

* **numero** → número que o usuário digitará.
* **base** → base numérica do número.
* **numerosArray** → array que armazenará cada dígito do número separadamente.

---

## 3️⃣ Entrada de dados

```ts
const teclado = require("prompt-sync")();

numero = parseInt(teclado(`Digite o número:`));
base = parseInt(teclado(`Digite a base:`))
```

Utiliza a biblioteca **prompt-sync** para permitir que o usuário digite valores no terminal.

Exemplo de entrada:

```
Digite o número: 1011
Digite a base: 2
```

---

# 🔢 Separação dos dígitos do número

```ts
while (numero != 0) {
    let digito: number = numero % 10;
    numero = (numero - digito) / 10;
    numerosArray.push(digito);
}
```

Este trecho faz duas coisas:

1. **Extrai o último dígito do número**

   ```
   digito = numero % 10
   ```

2. **Remove esse dígito do número**

   ```
   numero = (numero - digito) / 10
   ```

3. **Armazena o dígito no array**

Exemplo:

Número digitado:

```
1011
```

Array gerado:

```
[1,1,0,1]
```

Obs: o array fica **invertido**, pois o último dígito é extraído primeiro.

---

# 📏 Descobrindo o tamanho do array

```ts
let tamanho: number = 0;
while (numerosArray[tamanho] !== undefined) {
    tamanho++;
}
```

Aqui o programa conta manualmente quantas posições existem no array.

Resultado:

```
Tamanho do Array: 4
```

---

# 🔄 Conversão para decimal

```ts
for (let i = 0; i < tamanho; i++) {
    let expoente: number;
    expoente = Math.pow(base, i);
    teste[i] = numerosArray[i]! * expoente;
    soma += teste[i]!;
}
```

Para cada dígito:

1. Calcula **base^posição**
2. Multiplica pelo dígito
3. Soma no resultado final

Exemplo:

Número:

```
1011 (base 2)
```

Cálculo:

```
1 × 2⁰ = 1
1 × 2¹ = 2
0 × 2² = 0
1 × 2³ = 8
```

Soma final:

```
1 + 2 + 0 + 8 = 11
```

---

# 📊 Saídas exibidas

O programa mostra:

* Dígitos separados
* Array com os dígitos
* Tamanho do array
* Cálculo de cada potência
* Resultado final em decimal

Exemplo de saída:

```
Array inteiro invertido [1,1,0,1]

Espaço 0 do Array 1
O resultado do expoente é: 1

Espaço 1 do Array 1
O resultado do expoente é: 2

Espaço 2 do Array 0
O resultado do expoente é: 4

Espaço 3 do Array 1
O resultado do expoente é: 8

[1,2,0,8]

11
```

---

# 📦 Dependência necessária

Instale a biblioteca usada para entrada de dados:

```bash
npm install prompt-sync
```

---

# ▶️ Como executar

1. Compile o TypeScript

```bash
tsc arquivo.ts
```

2. Execute com Node.js

```bash
node arquivo.js
```

---

# 🧠 Resumo

O programa:

1. Recebe um número e sua base.
2. Separa os dígitos do número.
3. Armazena os dígitos em um array.
4. Calcula o valor de cada dígito multiplicado pela potência da base.
5. Soma todos os resultados para obter o **valor em decimal**.

---

# 👨‍💻 Autor

Projeto desenvolvido para estudo de **conversão de bases numéricas em TypeScript**.
