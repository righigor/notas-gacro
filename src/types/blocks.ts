export interface UltimaNotaBlocks {
  ginasta: string;
  clubeEscola: string;
  prova: string;
  categoria: string;
  tipo: string;
  notaE: string;
  notaD: string;
  penalidade: string;
  notaFinal: string;
  classificacao: string;
  publicadaEm: string;
  tipoTelao: "BLOCKS";
}

export interface ResultadoBlocks {
  ordem: string;

  ginasta: string;

  clubeEscola: string;

  prova: string;

  categoria: string;

  tipo: string;

  notaE: string;

  notaD: string;

  penalidade: string;

  notaFinal: string;

  classificacao: string;

  notaValidada: boolean;

  publicadaEm: string;
}

export interface DadosCategoriaBlocks {
  categoria: string;

  resultados: ResultadoBlocks[];
}