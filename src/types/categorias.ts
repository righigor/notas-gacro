export interface Resultado {
  ordem: string;
  ginasta: string;
  equipe: string;

  db: string;
  da: string;
  notaA: string;
  notaE: string;

  penalidade: string;

  notaFinal: string;

  classificacao: string;
  notaValidada: boolean;

  publicadaEm: string;
}

export interface NotaIndividual {
  nota: string;
  validada: boolean;
}

export interface ResultadoIndividualGeral {
  ginasta: string;
  equipe: string;
  aparelhoUm: NotaIndividual;
  aparelhoDois: NotaIndividual;
  notaTotal: string;
  classificacao: string;

  totalValidado: boolean;
}

export interface AparelhoResultado {
  nome: string;
  resultados: Resultado[];
}

export interface DadosCategoria {
  categoria: string;
  aparelhos: AparelhoResultado[];
  individualGeral?: ResultadoIndividualGeral[];
}

export interface ResultadoCopa {
  ordem: string;

  ginasta: string;

  clubeEscola: string;

  prova: string;

  categoria: string;

  tipo: "Estático" | "Dinâmico" | "Combinado";

  notaA: string;

  notaE: string;

  notaD: string;

  penalidade: string;

  notaFinal: string;

  classificacao: string;

  notaValidada: boolean;

  publicadaEm: string;
}

export interface DadosCategoriaCopa {
  categoria: string;
  resultados: ResultadoCopa[];
}
