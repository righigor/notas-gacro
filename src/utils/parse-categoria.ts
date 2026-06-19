import type {
  DadosCategoriaCopa,
  ResultadoCopa,
  ResultadoTotal,
} from "@/types/categorias";
import type { CategoriaCopaConfig, TipoApresentacao } from "./categorias";

const TIPOS = ["Estático", "Dinâmico", "Combinado", "Solo A", "Solo B", "Combinado - Domingo", "Combinado - Sábado", "Bronze", "Prata"] as const;

type TipoNome = (typeof TIPOS)[number];

export function parseCategoriaCopaData(
  values: string[][],
  categoriaConfig: CategoriaCopaConfig,
): DadosCategoriaCopa {
  const c = categoriaConfig.colunas;

  const resultados: ResultadoCopa[] = [];
  const total: ResultadoTotal[] = [];

  let lendoTabela = false;
  let lendoTotal = false;

  for (const row of values) {
    if (!row.length) continue;
    const primeiraColuna = row[0]?.trim();
    const segundaColuna = row[1]?.trim();

    if (TIPOS.includes(primeiraColuna as TipoNome)) {
      lendoTabela = false;
      lendoTotal = false;
      continue;
    }

    if (row.includes("Ginastas") && !lendoTotal) {
      lendoTabela = true;
      continue;
    }

    if (segundaColuna === "Total") {
      lendoTabela = false;
      lendoTotal = true;
      continue;
    }

    if (lendoTotal && row.includes("Ginastas")) {
      continue;
    }

    if (lendoTabela) {
      if (!row[c.ordem]) continue;
      resultados.push({
        ordem: row[c.ordem] ?? "",
        ginasta: row[c.ginasta] ?? "",
        clubeEscola: row[c.clubeEscola] ?? "",
        prova: row[c.prova] ?? "",
        categoria: row[c.categoria] ?? "",
        tipo: row[c.tipo] as TipoApresentacao,
        notaA: row[c.notaA] ?? "",
        notaE: row[c.notaE] ?? "",
        notaD: row[c.notaD] ?? "",
        penalidade: row[c.penalidade] ?? "",
        notaFinal: row[c.notaFinal] ?? "",
        classificacao: row[c.classificacao] ?? "",
        notaValidada: row[c.notaValidada] === "TRUE",
        publicadaEm: row[c.publicadaEm] ?? "",
      });
      continue;
    }

    if (lendoTotal) {
      if (!row[1]) continue;
      total.push({
        ginasta: row[1] ?? "",
        clubeEscola: row[2] ?? "",
        notaTipoUm: row[3] ?? "",
        notaTipoDois: row[4] ?? "",
        notaTotal: row[5] ?? "",
        classificacao: row[6] ?? "",
        totalValidado: row[5] !== "0,000",
      });

      continue;
    }
  }
  return {
    categoria: categoriaConfig.nomeExibicao,
    resultados,
    total,
  };
}
