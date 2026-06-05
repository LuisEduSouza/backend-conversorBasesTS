import { Router, type Request, type Response } from "express";
import { transformarDecimal, transformarBaseFinal } from "./services/conversor";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json({ mensagem: "Aplicação on-line" });
});

router.post("/converter", (req: Request, res: Response) => {
    try {
        const { entrada, baseOrigem, baseFinal } = req.body;

        const decimal: number = transformarDecimal(entrada, baseOrigem);

        if ((baseFinal >= 2 && baseFinal <= 10) || baseFinal === 16) {
            const resultado = transformarBaseFinal(decimal, baseFinal);
            return res.status(200).json(resultado);
        } else{
            return res.status(200).json({ mensagem: "Não há base disponível"});
        }

    } catch (error) {
        return res.status(400).json({ mensagem: "Não foi possível fazer a conversão" });
    }
});

export { router };