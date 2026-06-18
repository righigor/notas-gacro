export function formatarTipo(tipo: string) {
  if (tipo === "Combinado - Sábado") return "Sábado";
  if (tipo === "Combinado - Domingo") return "Domingo";

  return tipo;
}