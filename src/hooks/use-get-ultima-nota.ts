import { useQuery } from "@tanstack/react-query";

import { API_KEY } from "./use-get-notas";

// type ValueRange = BatchGetResponse["valueRanges"][number];

import {
  listaCategoriasCopaSabado,
  listaCategoriasCopaDomingo,
  listaCategoriasTrofeu,
  listaCategoriasTrofeuBlock,
} from "@/utils/categorias";
import type { UltimaNotaBlocks } from "@/types/blocks";

export interface UltimaNota {
  tipoTelao: "COPA";
  ginasta: string;
  clubeEscola: string;
  prova: string;
  categoria: string;
  tipo: string;
  notaA?: string;
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
        tipoTelao: "COPA"
      });
    }
  }
  return notas;
}

function extrairNotasBlocks(data: BatchGetResponse): UltimaNotaBlocks[] {
  const notas: UltimaNotaBlocks[] = [];
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
      const notaValidada = row[15] === "TRUE";
      const publicadaEm = row[16];
      if (!notaValidada || !publicadaEm) {
        continue;
      }
      notas.push({
        ginasta: row[1] ?? "",
        clubeEscola: row[2] ?? "",
        prova: row[3] ?? "",
        categoria: row[4] ?? "",
        tipo: row[5] ?? "",
        notaE: row[10] ?? "",
        notaD: row[11] ?? "",
        penalidade: row[12] ?? "",
        notaFinal: row[13] ?? "",
        classificacao: row[14] ?? "",
        publicadaEm,
        tipoTelao: "BLOCKS"
      });
    }
  }

  return notas;
}

export type UltimaNotaTelao = UltimaNota | UltimaNotaBlocks;

export function useGetUltimaNota() {
  return useQuery<UltimaNotaTelao>({
    queryKey: ["ultima-nota"],

    queryFn: async () => {
      const copaSabado = listaCategoriasCopaSabado;

      const copaDomingo = listaCategoriasCopaDomingo;

      const trofeu = listaCategoriasTrofeu;

      const blocks = listaCategoriasTrofeuBlock;

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

          [
            ...trofeu.map((c) => c.abaSheets),

            ...blocks.map((c) => c.abaSheets),
          ],
        ),
      ]);

      const notasCopa: UltimaNota[] = [
        ...extrairNotas(resultados[0]),

        ...extrairNotas(resultados[1]),
      ];

      const notasTrofeu: UltimaNota[] = [];

      const notasBlocks: UltimaNotaBlocks[] = [];

      for (const range of resultados[2].valueRanges) {
        if (range.range.includes("Blocks")) {
          notasBlocks.push(
            ...extrairNotasBlocks({
              valueRanges: [range],
            }),
          );
        } else {
          notasTrofeu.push(
            ...extrairNotas({
              valueRanges: [range],
            }),
          );
        }
      }

      const notasAcro = [...notasCopa, ...notasTrofeu];

      notasAcro.sort(
        (a, b) =>
          new Date(b.publicadaEm).getTime() - new Date(a.publicadaEm).getTime(),
      );

      notasBlocks.sort(
        (a, b) =>
          new Date(b.publicadaEm).getTime() - new Date(a.publicadaEm).getTime(),
      );

      const ultimaAcro = notasAcro[0];

      const ultimaBlock = notasBlocks[0];

      if (!ultimaAcro && !ultimaBlock) {
        throw new Error("Nenhuma nota encontrada");
      }

      if (!ultimaAcro) {
        return {
          ...ultimaBlock,

          tipoTelao: "BLOCKS",
        };
      }

      if (!ultimaBlock) {
        return {
          ...ultimaAcro,

          tipoTelao: "COPA",
        };
      }

      const dataAcro = new Date(ultimaAcro.publicadaEm).getTime();

      const dataBlock = new Date(ultimaBlock.publicadaEm).getTime();

      if (dataBlock > dataAcro) {
        return {
          ...ultimaBlock,

          tipoTelao: "BLOCKS",
        };
      }
console.log({
  notasCopa,
  notasTrofeu,
  notasBlocks,
  ultimaAcro,
  ultimaBlock,
});
      return {
        ...ultimaAcro,

        tipoTelao: "COPA",
      };
    },

    refetchInterval: 15000,

    retry: 2,
  });
}
