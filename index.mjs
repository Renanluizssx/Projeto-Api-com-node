import express from "express";
import {
  servicoValidaAno,
  servicoBuscarFatoPorAno,
} from "./camada de serviço.mjs";

const app = express();

app.get("/", (req, res) => {
  const anoFato = req.query.anoFato;
  if (servicoValidaAno(anoFato)) {
    const FatoProcessado = servicoBuscarFatoPorAno(anoFato);

    const ano = { anoFato: FatoProcessado.Fato };
    res.json(ano);
  } else {
    res.status(400).json({ Erro: "revise o que você enviou" });
  }
});

app.listen(8081, () => {
  let data = new Date();
  console.log(`Porta Aberta ${data}`);
});
