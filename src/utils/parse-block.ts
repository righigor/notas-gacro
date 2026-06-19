import type { DadosCategoriaBlocks, ResultadoBlocks } from "@/types/blocks";
import type { CategoriaTrofeuBlockConfig } from "./categorias";

const TIPOS = ["Bronze", "Prata"] as const;

type TipoNome = (typeof TIPOS)[number];

export function parseCategoriaBlocksData(
  values: string[][],
  categoriaConfig: CategoriaTrofeuBlockConfig,
): DadosCategoriaBlocks {
  const c = categoriaConfig.colunas;

  const resultados: ResultadoBlocks[] = [];

  let lendoTabela = false;

  for (const row of values) {
    if (!row.length) continue;

    const primeiraColuna = row[0]?.trim();

    if (TIPOS.includes(primeiraColuna as TipoNome)) {
      lendoTabela = false;

      continue;
    }

    if (row.includes("Ginastas")) {
      lendoTabela = true;

      continue;
    }

    if (!lendoTabela) continue;

    if (!row[c.ordem]) continue;

    resultados.push({
      ordem: row[c.ordem] ?? "",

      ginasta: row[c.ginasta] ?? "",

      clubeEscola: row[c.clubeEscola] ?? "",

      prova: row[c.prova] ?? "",

      categoria: row[c.categoria] ?? "",

      tipo: row[c.tipo] ?? "",

      notaE: row[c.notaE] ?? "",

      notaD: row[c.notaD] ?? "",

      penalidade: row[c.penalidade] ?? "",

      notaFinal: row[c.notaFinal] ?? "",

      classificacao: row[c.classificacao] ?? "",

      notaValidada: row[c.notaValidada] === "TRUE",

      publicadaEm: row[c.publicadaEm] ?? "",
    });
  }

  return {
    categoria: categoriaConfig.nomeExibicao,

    resultados,
  };
}
