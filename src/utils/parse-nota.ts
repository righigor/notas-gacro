export function parseNota(valor: string) {
  return Number(valor.replace(",", "."));
}