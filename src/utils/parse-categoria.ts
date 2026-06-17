import type { DadosCategoriaCopa, ResultadoCopa } from "@/types/categorias";
import type { CategoriaCopaConfig, TipoApresentacao } from "./categorias";

export function parseCategoriaCopaData(
  values: string[][],
  categoriaConfig: CategoriaCopaConfig,
): DadosCategoriaCopa {
  const c = categoriaConfig.colunas;

  const resultados: ResultadoCopa[] = [];

  let lendoTabela = false;

  for (const row of values) {
    if (!row.length) continue;

    if (row.includes("Ginastas")) {
      lendoTabela = true;
      continue;
    }

    if (lendoTabela && row.length > 10) {
      resultados.push({
        ordem: row[c.ordem] ?? "",

        ginasta: row[c.ginasta] ?? "",

        clubeEscola: row[c.clubeEscola] ?? "",

        prova: row[c.prova] ?? "",

        categoria: row[c.categoria] ?? "",

        tipo: (row[c.tipo] ?? "") as TipoApresentacao,

        notaA: row[c.notaA] ?? "",

        notaE: row[c.notaE] ?? "",

        notaD: row[c.notaD] ?? "",

        penalidade: row[c.penalidade] ?? "",

        notaFinal: row[c.notaFinal] ?? "",

        classificacao: row[c.classificacao] ?? "",

        notaValidada: row[c.notaValidada] === "TRUE",

        publicadaEm: row[c.publicadaEm] ?? "",
      });
    }
  }

  return {
    categoria: categoriaConfig.nomeExibicao,

    resultados: resultados,
  };
}
