import type { ColunasCategoria, ColunasCopaCategoria } from "@/types/colunas-categorias"

export const COLUNAS_MANHA: ColunasCategoria = {
  ordem: 1,
  ginasta: 2,
  equipe: 3,

  db: 4,
  da: 5,

  notaA: 9,
  notaE: 13,

  penalidade: 14,
  notaFinal: 15,

  classificacao: 16,
  notaValidada: 17,
  publicadaEm: 18,
}

export const COLUNAS_TARDE: ColunasCategoria = {
  ordem: 1,
  ginasta: 2,
  equipe: 3,

  db: 4,
  da: 5,

  notaA: 8,
  notaE: 11,

  penalidade: 12,
  notaFinal: 13,

  classificacao: 14,
  notaValidada: 15,
  publicadaEm: 16,
}

export const COLUNAS_COPA_SABADO: ColunasCopaCategoria = {
  ordem: 0,
  ginasta: 1,
  clubeEscola: 2,
  prova: 3,
  categoria: 4,
  tipo: 5,

  notaA: 10,
  notaE: 15,
  notaD: 16,

  penalidade: 17,
  notaFinal: 18,

  classificacao: 19,
  notaValidada: 20,
  publicadaEm: 21,
}