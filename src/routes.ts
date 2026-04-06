import { Router, type Request, type Response } from "express";
import { transformarDecimal } from "./services/conversor";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json({ mensagem: "Aplicação on-line" });
});

router.post("/converter", (req: Request, res: Response) => {
    const { entrada, base } = req.body;

    const resultado = transformarDecimal(entrada, base);

    res.json({ decimal: resultado });
});

export { router };