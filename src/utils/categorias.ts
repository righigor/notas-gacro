import type { ColunasCopaCategoria, ColunasTrofeuBlockCategoria } from "@/types/colunas-categorias";
import { COLUNAS_COPA_SABADO, COLUNAS_TROFEU_BLOCK_DOMINGO } from "./colunas-categorias";

const SPREADSHEET_ID_COPA_SABADO = "10gVZRtkieGq3BigmFqiGZOYK9T_z1xXlGUty6zrqQ9A";
const SPREADSHEET_ID_COPA_DOMINGO = "1wgMWCajmF8eh3ZvRWGj9lZgYQz5lVAp9WJJ9jzGfxu4";
const SPREADSHEET_ID_TROFEU = "1vc5hcshhI-E6ltq_5u3rKzelh6HV-yS-dlmttkESQZ4";

export type TipoApresentacao =
  | "Combinado"
  | "Estático"
  | "Dinâmico"
  | "Solo A"
  | "Solo B"
  | "Combinado - Domingo"
  | "Combinado - Sábado"
  | "Bronze"
  | "Prata";

export interface CategoriaCopaConfig {
  id: string;
  nomeExibicao: string;
  spreadsheetId: string;
  abaSheets: string;
  tipo: TipoApresentacao[];
  colunas: ColunasCopaCategoria
}

export interface CategoriaTrofeuBlockConfig {
  id: string;
  nomeExibicao: string;
  spreadsheetId: string;
  abaSheets: string;
  tipo: TipoApresentacao[];
  colunas: ColunasTrofeuBlockCategoria;
}

export const DICIONARIO_CATEGORIAS_COPA: Record<string, CategoriaCopaConfig> = {
  "pre-inf-dm-sabado": {
    id: "pre-inf-dm-sabado",
    nomeExibicao: "Pré-Infantil - Dupla Masculina",
    spreadsheetId: SPREADSHEET_ID_COPA_SABADO,
    abaSheets: "N2 Pre Inf - DM",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "pre-inf-df-sabado": {
    id: "pre-inf-df-sabado",
    nomeExibicao: "Pré-Infantil - Dupla Feminina",
    spreadsheetId: SPREADSHEET_ID_COPA_SABADO,
    abaSheets: "N2 Pre Inf - DF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "pre-inf-dmx-sabado": {
    id: "pre-inf-dmx-sabado",
    nomeExibicao: "Pré-Infantil - Dupla Mista",
    spreadsheetId: SPREADSHEET_ID_COPA_SABADO,
    abaSheets: "N2 Pre Inf - DMx",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "pre-inf-gf-sabado": {
    id: "pre-inf-gf-sabado",
    nomeExibicao: "Pré-Infantil - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_SABADO,
    abaSheets: "N2 Pre Inf - GF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },  "inf-df-sabado": {
    id: "inf-df-sabado",
    nomeExibicao: "Infantil - Dupla Feminina",
    spreadsheetId: SPREADSHEET_ID_COPA_SABADO,
    abaSheets: "N2 Inf - DF",
    tipo: ["Estático", "Dinâmico"],
    colunas: COLUNAS_COPA_SABADO
  },
  "inf-gf-sabado": {
    id: "inf-gf-sabado",
    nomeExibicao: "Infantil - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_SABADO,
    abaSheets: "N2 Inf - GF",
    tipo: ["Dinâmico", "Estático"],
    colunas: COLUNAS_COPA_SABADO
  },
  "jr-df-sabado": {
    id: "jr-df-sabado",
    nomeExibicao: "Junior - Dupla Feminina",
    spreadsheetId: SPREADSHEET_ID_COPA_SABADO,
    abaSheets: "N2 Jr - DF",
    tipo: ["Estático", "Dinâmico"],
    colunas: COLUNAS_COPA_SABADO
  },
  "jr-gf-sabado": {
    id: "jr-gf-sabado",
    nomeExibicao: "Junior - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_SABADO,
    abaSheets: "N2 Jr - GF",
    tipo: ["Dinâmico", "Estático"],
    colunas: COLUNAS_COPA_SABADO
  },
  "juv-df-sabado": {
    id: "juv-df-sabado",
    nomeExibicao: "Juvenil - Dupla Feminina",
    spreadsheetId: SPREADSHEET_ID_COPA_SABADO,
    abaSheets: "N2 Juv - DF",
    tipo: ["Estático", "Dinâmico"],
    colunas: COLUNAS_COPA_SABADO
  },
  "juv-gf-sabado": {
    id: "juv-gf-sabado",
    nomeExibicao: "Juvenil - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_SABADO,
    abaSheets: "N2 Juv - GF",
    tipo: ["Dinâmico", "Estático"],
    colunas: COLUNAS_COPA_SABADO
  },
  "adu-df-sabado": {
    id: "adu-df-sabado",
    nomeExibicao: "Adulto - Dupla Femenina",
    spreadsheetId: SPREADSHEET_ID_COPA_SABADO,
    abaSheets: "N2 Adu - DF",
    tipo: ["Estático", "Dinâmico"],
    colunas: COLUNAS_COPA_SABADO
  },
  "adu-gf-sabado": {
    id: "adu-gf-sabado",
    nomeExibicao: "Adulto - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_SABADO,
    abaSheets: "N2 Adu - GF",
    tipo: ["Dinâmico", "Estático"],
    colunas: COLUNAS_COPA_SABADO
  },

    "pre-inf-dm-domingo": {
    id: "pre-inf-dm-domingo",
    nomeExibicao: "Pré-Infantil - Dupla Masculina",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Pre Inf - DM",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "pre-inf-df-domingo": {
    id: "pre-inf-df-domingo",
    nomeExibicao: "Pré-Infantil - Dupla Feminina",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Pre Inf - DF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "pre-inf-dmx-domingo": {
    id: "pre-inf-dmx-domingo",
    nomeExibicao: "Pré-Infantil - Dupla Mista",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Pre Inf - DMx",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "pre-inf-gf-domingo": {
    id: "pre-inf-gf-domingo",
    nomeExibicao: "Pré-Infantil - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Pre Inf - GF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "inf-df-domingo": {
    id: "inf-df-domingo",
    nomeExibicao: "Final - Infantil - Dupla Feminina",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Inf - DF",
    tipo: ["Dinâmico"],
    colunas: COLUNAS_COPA_SABADO
  },
  "inf-gf-domingo": {
    id: "inf-gf-domingo",
    nomeExibicao: "Final - Infantil - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Inf - GF",
    tipo: ["Estático"],
    colunas: COLUNAS_COPA_SABADO
  },
  "jr-df-domingo": {
    id: "jr-df-domingo",
    nomeExibicao: "Final - Junior - Dupla Feminina",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Jr - DF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "jr-gf-domingo": {
    id: "jr-gf-domingo",
    nomeExibicao: "Final - Junior - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Jr - GF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "juv-df-domingo": {
    id: "juv-df-domingo",
    nomeExibicao: "Final - Juvenil - Dupla Feminina",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Juv - DF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "juv-gf-domingo": {
    id: "juv-gf-domingo",
    nomeExibicao: "Final - Juvenil - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Juv - GF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "adu-df-domingo": {
    id: "adu-df-domingo",
    nomeExibicao: "Final - Adulto - Dupla Feminia",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Adu - DF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "adu-gf-domingo": {
    id: "adu-gf-domingo",
    nomeExibicao: "Final - Adulto - Grupo Femino",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Adu - GF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "na-pre-inf-df-domingo": {
    id: "na-pre-inf-df-domingo",
    nomeExibicao: "Nível Avançado - Pré-Infantil - Dupla Feminina",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "NA Pre Inf - DF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "na-pre-inf-gf-domingo": {
    id: "na-pre-inf-gf-domingo",
    nomeExibicao: "Nível Avançado - Pré-Infantil - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "NA Pre Inf - GF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "na-inf-pf-domingo":{
    id: "na-inf-pf-domingo",
    nomeExibicao: "Nível Avançado - Infantil - Par Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "NA Inf - PF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "na-inf-gf-domingo":{
    id: "na-inf-gf-domingo",
    nomeExibicao: "Nível Avançado - Infantil - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "NA Inf - GF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  }
}

export const DICIONARIO_CATEGORIAS_COPA_DOMINGO: Record<string, CategoriaCopaConfig> = {
  "pre-inf-dm-domingo": {
    id: "pre-inf-dm-domingo",
    nomeExibicao: "Pré-Infantil - Dupla Masculina",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Pre Inf - DM",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "pre-inf-df-domingo": {
    id: "pre-inf-df-domingo",
    nomeExibicao: "Pré-Infantil - Dupla Feminina",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Pre Inf - DF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "pre-inf-dmx-domingo": {
    id: "pre-inf-dmx-domingo",
    nomeExibicao: "Pré-Infantil - Dupla Mista",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Pre Inf - DMx",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "pre-inf-gf-domingo": {
    id: "pre-inf-gf-domingo",
    nomeExibicao: "Pré-Infantil - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Pre Inf - GF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "inf-df-domingo": {
    id: "inf-df-domingo",
    nomeExibicao: "Final - Infantil - Dupla Feminina",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Inf - DF",
    tipo: ["Dinâmico"],
    colunas: COLUNAS_COPA_SABADO
  },
  "inf-gf-domingo": {
    id: "inf-gf-domingo",
    nomeExibicao: "Final - Infantil - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Inf - GF",
    tipo: ["Estático"],
    colunas: COLUNAS_COPA_SABADO
  },
  "jr-df-domingo": {
    id: "jr-df-domingo",
    nomeExibicao: "Final - Junior - Dupla Feminina",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Jr - DF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "jr-gf-domingo": {
    id: "jr-gf-domingo",
    nomeExibicao: "Final - Junior - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Jr - GF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "juv-df-domingo": {
    id: "juv-df-domingo",
    nomeExibicao: "Final - Juvenil - Dupla Feminina",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Juv - DF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "juv-gf-domingo": {
    id: "juv-gf-domingo",
    nomeExibicao: "Final - Juvenil - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Juv - GF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "adu-gf-domingo": {
    id: "adu-gf-domingo",
    nomeExibicao: "Final - Adulto - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Adu - GF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "adu-df-domingo": {
    id: "adu-df-domingo",
    nomeExibicao: "Final - Adulto - Dupla Feminina",
    spreadsheetId: SPREADSHEET_ID_COPA_DOMINGO,
    abaSheets: "N2 Adu - DF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  }
}

export const DICIONARIO_CATEGORIAS_TROFEU: Record<string, CategoriaCopaConfig> = {
  "ni-pre-inf-gf": {
    id: "ni-pre-inf-gf",
    nomeExibicao: "Nível Intermediário - Pré-Infantil - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_TROFEU,
    abaSheets: "NI Pre Inf - GF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "ni-pre-inf-df": {
    id: "ni-pre-inf-df",
    nomeExibicao: "Nível Intermediário - Pré-Infantil - Dupla Feminina",
    spreadsheetId: SPREADSHEET_ID_TROFEU,
    abaSheets: "NI Pre Inf - DF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "pre-inf-pf-solo": {
    id: "pre-inf-pf-solo",
    nomeExibicao: "Pré-Infantil - Dupla Feminina - Solo",
    spreadsheetId: SPREADSHEET_ID_TROFEU,
    abaSheets: "Pre Inf - PF Solo",
    tipo: ["Solo A", "Solo B"],
    colunas: COLUNAS_COPA_SABADO
  },
  "pre-inf-gf-solo": {
    id: "pre-inf-gf-solo",
    nomeExibicao: "Pré-Infantil - Grupo Feminino - Solo",
    spreadsheetId: SPREADSHEET_ID_TROFEU,
    abaSheets: "Pre Inf - GF Solo",
    tipo: ["Solo A", "Solo B"],
    colunas: COLUNAS_COPA_SABADO
  },
  "inf-pf-solo": {
    id: "inf-pf-solo",
    nomeExibicao: "Infantil - Par Feminino - Solo",
    spreadsheetId: SPREADSHEET_ID_TROFEU,
    abaSheets: "Inf - PF Solo",
    tipo: ["Solo A", "Solo B"],
    colunas: COLUNAS_COPA_SABADO
  },
  "inf-gf-solo": {
    id: "inf-gf-solo",
    nomeExibicao: "Infantil - Grupo Feminino - Solo",
    spreadsheetId: SPREADSHEET_ID_TROFEU,
    abaSheets: "Inf - GF Solo",
    tipo: ["Solo A", "Solo B"],
    colunas: COLUNAS_COPA_SABADO
  },
  "ni-inf-df": {
    id: "ni-inf-df",
    nomeExibicao: "Nível Intermediário - Infantil - Dupla Feminina",
    spreadsheetId: SPREADSHEET_ID_TROFEU,
    abaSheets: "NI Inf - DF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
  "ni-inf-gf": {
    id: "ni-inf-gf",
    nomeExibicao: "Nível Intermediário - Infantil - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_TROFEU,
    abaSheets: "NI Inf - GF",
    tipo: ["Combinado"],
    colunas: COLUNAS_COPA_SABADO
  },
}

export const DICIONARIO_CATEGORIAS_TROFEU_DOMINGO: Record<string, CategoriaTrofeuBlockConfig> = {
  "blocks": {
    id: "blocks",
    nomeExibicao: "Competição de Blocks",
    spreadsheetId: SPREADSHEET_ID_TROFEU,
    abaSheets: "Blocks",
    tipo: ["Bronze", "Prata"],
    colunas: COLUNAS_TROFEU_BLOCK_DOMINGO
  }
}

export const listaCategoriasCopaSabado = Object.values(DICIONARIO_CATEGORIAS_COPA).filter(c => c.id.endsWith("-sabado"));
export const listaCategoriasCopaDomingo = Object.values(DICIONARIO_CATEGORIAS_COPA).filter(c => c.id.endsWith("-domingo"));
export const listaCategoriasTrofeu = Object.values(DICIONARIO_CATEGORIAS_TROFEU);
export const listaCategoriasTrofeuBlock = Object.values(DICIONARIO_CATEGORIAS_TROFEU_DOMINGO);

export const TODAS_CATEGORIAS = [
  ...listaCategoriasCopaSabado,
  ...listaCategoriasCopaDomingo,
  ...listaCategoriasTrofeu,
  ...listaCategoriasTrofeuBlock
];