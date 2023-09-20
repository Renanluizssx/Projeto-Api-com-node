import fatosHistoricos from "./coleção de dados.mjs";
function servicoBuscarFatoPorAno(anoapi) {
  return fatosHistoricos.find((anohistorico) => anohistorico.Ano === anoapi);
}

function servicoValidaAno(anoapi) {

  if (!isNaN(anoapi)) {
    return true;
  }
  if (anoapi >= 1920 && anoapi <= 2020) {
    return true;
  }
  return false;
}
export { servicoBuscarFatoPorAno, servicoValidaAno };
