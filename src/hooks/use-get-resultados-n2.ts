import { useQuery } from "@tanstack/react-query";
import { API_KEY } from "./use-get-notas";

export interface ResultadoEquipeN2 {
  equipe: string;
  apresentacoes: string;
  total: string;
  classificacao: string;
}

interface Props {
  spreadsheetId: string;
  aba: string;
}

export function useGetResultadosEquipeN2({ spreadsheetId, aba }: Props) {
  return useQuery({
    queryKey: ["resultados-equipe-n2", spreadsheetId, aba],

    queryFn: async (): Promise<ResultadoEquipeN2[]> => {
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
        .slice(2) // linha 3 em diante
        .filter((row) => row[0])
        .map((row) => ({
          equipe: row[0] ?? "",
          apresentacoes: row[1] ?? "",
          total: row[2] ?? "",
          classificacao: row[3] ?? "",
        }));
    },

    refetchInterval: 15000,
    retry: 2,
  });
}
