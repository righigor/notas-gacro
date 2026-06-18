export function parseClassificacao(valor: string) {
  return Number(valor.replace("º", ""));
}