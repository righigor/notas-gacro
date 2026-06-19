import { useQuery } from "@tanstack/react-query";
import { API_KEY } from "./use-get-notas";
import type { CategoriaTrofeuBlockConfig } from "@/utils/categorias";
import { parseCategoriaBlocksData } from "@/utils/parse-block";


interface UseNotasBlocksParams {
  categoriaConfig?: CategoriaTrofeuBlockConfig;
}

export function useNotasBlocks({
  categoriaConfig,
}: UseNotasBlocksParams) {
  return useQuery({
    queryKey: ["notas-blocks", categoriaConfig?.id],

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

      return parseCategoriaBlocksData(
        rawData.values,
        categoriaConfig
      );
    },

    refetchInterval: 15000,

    retry: 2,

    enabled: Boolean(categoriaConfig),
  });
}