import type { CategoriaCopaConfig } from "@/utils/categorias";
import { parseCategoriaCopaData } from "@/utils/parse-categoria";
import { useQuery } from "@tanstack/react-query";

interface UseNotasParams {
  categoriaConfig?: CategoriaCopaConfig;
}

export const API_KEY = "AIzaSyBoLiIZQTTrGefBBAM8b4oj4LjyCWgj49s";

export function useNotasCategoria({ categoriaConfig }: UseNotasParams) {
  return useQuery({
    queryKey: ["notas", categoriaConfig?.id],

    queryFn: async () => {
      if (!categoriaConfig) {
        throw new Error("Categoria inválida");
      }

      const url = `https://sheets.googleapis.com/v4/spreadsheets/${
        categoriaConfig.spreadsheetId
      }/values/${encodeURIComponent(
        categoriaConfig.abaSheets
      )}?key=${API_KEY}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erro ${response.status}`);
      }

      const rawData = await response.json();

      return parseCategoriaCopaData(
        rawData.values,
        categoriaConfig
      );
    },

    refetchInterval: 15000,

    retry: 2,

    enabled: Boolean(categoriaConfig),
  });
}