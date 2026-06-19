export interface ColunasCategoria {
  ordem: number
  ginasta: number
  equipe: number

  db: number
  da: number

  notaA: number
  notaE: number

  penalidade: number
  notaFinal: number

  classificacao: number
  notaValidada: number

  publicadaEm: number;
}

export interface ColunasCopaCategoria {
  ordem: number
  ginasta: number
  clubeEscola: number
  prova: number
  categoria: number
  tipo: number

  notaA: number
  notaE: number
  notaD: number

  penalidade: number
  notaFinal: number

  classificacao: number
  notaValidada: number

  publicadaEm: number;
}

export interface ColunasTrofeuBlockCategoria {
  ordem: number
  ginasta: number
  clubeEscola: number
  prova: number
  categoria: number
  tipo: number

  notaE: number
  notaD: number

  penalidade: number
  notaFinal: number

  classificacao: number
  notaValidada: number

  publicadaEm: number;
}