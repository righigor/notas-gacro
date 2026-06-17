import { useQueries } from "@tanstack/react-query";
import { DICIONARIO_CATEGORIAS } from "@/utils/categorias";
import { parseCopaCategoriaData } from "@/utils/parse-categoria";
import { API_KEY } from "./use-get-notas";

export function useGetUltimaNota() {
  const categorias = Object.values(DICIONARIO_CATEGORIAS);
}
