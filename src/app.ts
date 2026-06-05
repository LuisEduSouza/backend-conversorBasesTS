import { server } from "./server";

// Usa a porta fornecida pelo Render ou 3333 localmente
const port: number = Number(process.env.PORT) || 3333;

console.clear();
console.log("Conexão com banco de dados realizada com sucesso!");

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});