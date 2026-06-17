import { useQuery } from "@tanstack/react-query";

import { API_KEY } from "./use-get-notas";

import {
  listaCategoriasCopaSabado,
  listaCategoriasCopaDomingo,
  listaCategoriasTrofeu,
} from "@/utils/categorias";

export interface UltimaNota {
  ginasta: string;
  clubeEscola: string;
  prova: string;
  categoria: string;
  tipo: string;
  notaA: string;
  notaE: string;
  notaD: string;
  penalidade: string;
  notaFinal: string;
  classificacao: string;
  publicadaEm: string;
}

interface BatchGetResponse {
  valueRanges: {
    range: string;
    values?: string[][];
  }[];
}

async function buscarPlanilha(spreadsheetId: string, abas: string[]) {
  const params = abas
    .map((aba) => `ranges=${encodeURIComponent(aba)}`)
    .join("&");

  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchGet?` +
    params +
    `&key=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao buscar planilha");
  }

  return response.json();
}

function extrairNotas(data: BatchGetResponse): UltimaNota[] {
  const notas: UltimaNota[] = [];

  for (const range of data.valueRanges) {
    const values = range.values ?? [];
    let lendoTabela = false;

    for (const row of values) {
      if (!row.length) continue;
      if (row.includes("Ginastas")) {
        lendoTabela = true;

        continue;
      }

      if (!lendoTabela) continue;

      if (!row[0]) continue;
      const notaValidada = row[20] === "TRUE";
      const publicadaEm = row[21];

      if (!notaValidada || !publicadaEm) {
        continue;
      }

      notas.push({
        ginasta: row[1] ?? "",
        clubeEscola: row[2] ?? "",
        prova: row[3] ?? "",
        categoria: row[4] ?? "",
        tipo: row[5] ?? "",
        notaA: row[10] ?? "",
        notaE: row[15] ?? "",
        notaD: row[16] ?? "",
        penalidade: row[17] ?? "",
        notaFinal: row[18] ?? "",
        classificacao: row[19] ?? "",
        publicadaEm,
      });
    }
  }
  return notas;
}

export function useGetUltimaNota() {
  return useQuery({
    queryKey: ["ultima-nota"],
    queryFn: async () => {
      const copaSabado = listaCategoriasCopaSabado;
      const copaDomingo = listaCategoriasCopaDomingo;
      const trofeu = listaCategoriasTrofeu;
      const resultados = await Promise.all([
        buscarPlanilha(
          copaSabado[0].spreadsheetId,
          copaSabado.map((c) => c.abaSheets),
        ),
        buscarPlanilha(
          copaDomingo[0].spreadsheetId,
          copaDomingo.map((c) => c.abaSheets),
        ),
        buscarPlanilha(
          trofeu[0].spreadsheetId,

          trofeu.map((c) => c.abaSheets),
        ),
      ]);
      const notas = resultados.flatMap(extrairNotas);
      notas.sort(
        (a, b) =>
          new Date(b.publicadaEm).getTime() - new Date(a.publicadaEm).getTime(),
      );

      return notas[0];
    },
    refetchInterval: 15000,
    retry: 2,
  });
}
