import { useQuery } from "@tanstack/react-query";

import { API_KEY } from "./use-get-notas";

export interface ResultadoEquipeN1 {
  equipe: string;
  preInfantil: string;
  infantil: string;
  total: string;
  classificacao: string;
}

interface Props {
  spreadsheetId: string;
  aba: string;
}

export function useGetResultadosEquipeN1({ spreadsheetId, aba }: Props) {
  return useQuery({
    queryKey: ["resultados-equipe-n1", spreadsheetId, aba],

    queryFn: async (): Promise<ResultadoEquipeN1[]> => {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(
          aba,
        )}?key=${API_KEY}`,
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar resultados");
      }

      const data: { values?: string[][] } = await response.json();

      return (data.values ?? [])
        .slice(2)
        .filter((row) => row[0])
        .map((row) => ({
          equipe: row[0] ?? "",
          preInfantil: row[1] ?? "",
          infantil: row[2] ?? "",
          total: row[3] ?? "",
          classificacao: row[4] ?? "",
        }));
    },

    refetchInterval: 15000,
    retry: 2,
  });
}
