import { server } from "./server";

//Define a porta que o servidor vai escutar as requisições
const port: number = 3333;

console.clear();
console.log("Conexão com banco de dados realizada com sucesso!");
// iniciando o servidor
server.listen(port, () => {
    console.log(`Servidor iniciado no endereço http://localhost:${port}/`);
});
