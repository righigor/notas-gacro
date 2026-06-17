import type { ColunasCategoria, ColunasCopaCategoria } from "@/types/colunas-categorias";
import { COLUNAS_COPA_SABADO, COLUNAS_MANHA, COLUNAS_TARDE } from "./colunas-categorias";

const SPREADSHEET_ID_MANHA = "1KjAu5uYirmXc8wMk5cDdJH8orrIkH_nHYk4AZpdY3zo";
const SPREADSHEET_ID_TARDE = "126UxmMKBwqnLpyKe2-cbdXI8yuFR197jjXuLPgVr4II";
const SPREADSHEET_ID_COPA_SABADO = "10gVZRtkieGq3BigmFqiGZOYK9T_z1xXlGUty6zrqQ9A";
const SPREADSHEET_ID_COPA_DOMINGO = "1wgMWCajmF8eh3ZvRWGj9lZgYQz5lVAp9WJJ9jzGfxu4";

export interface CategoriaConfig {
  id: string;
  nomeExibicao: string;
  spreadsheetId: string;
  abaSheets: string;
  aparelhos: string[];
  periodo: "Manhã" | "Tarde";
  colunas: ColunasCategoria
}

export type TipoApresentacao =
  | "Combinado"
  | "Estático"
  | "Dinâmico";

export interface CategoriaCopaConfig {
  id: string;
  nomeExibicao: string;
  spreadsheetId: string;
  abaSheets: string;
  tipo: TipoApresentacao[];
  colunas: ColunasCopaCategoria
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
  "adu-gf-sabado": {
    id: "adu-gf-sabado",
    nomeExibicao: "Adulto - Grupo Feminino",
    spreadsheetId: SPREADSHEET_ID_COPA_SABADO,
    abaSheets: "N2 Adu - GF",
    tipo: ["Estático", "Dinâmico"],
    colunas: COLUNAS_COPA_SABADO
  },
  "adu-df-sabado": {
    id: "adu-df-sabado",
    nomeExibicao: "Adulto - Dupla Feminina",
    spreadsheetId: SPREADSHEET_ID_COPA_SABADO,
    abaSheets: "N2 Adu - DF",
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


export const DICIONARIO_CATEGORIAS: Record<string, CategoriaConfig> = {
  "inf-n1-12-anos": {
    id: "inf-n1-12-anos",
    nomeExibicao: "Infantil N.1 - 12 Anos",
    spreadsheetId: SPREADSHEET_ID_MANHA,
    abaSheets: "INF N1 - 12 ANOS",
    aparelhos: ["Mãos Livres", "Fita"],
    periodo: "Manhã",
    colunas: COLUNAS_MANHA
  },
  "pre-n2": {
    id: "pre-n2",
    nomeExibicao: "Pré-Infantil N.2",
    spreadsheetId: SPREADSHEET_ID_MANHA,
    abaSheets: "PRE N2",
    aparelhos: ["Mãos Livres"],
    periodo: "Manhã",
    colunas: COLUNAS_MANHA
  },
  "pre-n3": {
    id: "pre-n3",
    nomeExibicao: "Pré-Infantil N.3",
    spreadsheetId: SPREADSHEET_ID_MANHA,
    abaSheets: "PRE N3",
    aparelhos: ["Mãos Livres"],
    periodo: "Manhã",
    colunas: COLUNAS_MANHA
  },
  "inf-n2-12-anos": {
    id: "inf-n2-12-anos",
    nomeExibicao: "Infantil N.2 - 12 Anos",
    spreadsheetId: SPREADSHEET_ID_MANHA,
    abaSheets: "INF N2 - 12 ANOS",
    aparelhos: ["Mãos Livres"],
    periodo: "Manhã",
    colunas: COLUNAS_MANHA
  },
  "inf-n3-12-anos": {
    id: "inf-n3-12-anos",
    nomeExibicao: "Infantil N.3 - 12 Anos",
    spreadsheetId: SPREADSHEET_ID_MANHA,
    abaSheets: "INF N3 - 12 ANOS",
    aparelhos: ["Mãos Livres"],
    periodo: "Manhã",
    colunas: COLUNAS_MANHA
  },

  // ==========================================
  // PERÍODO DA TARDE
  // ==========================================
  "juvenil-n1": {
    id: "juvenil-n1",
    nomeExibicao: "Juvenil N.1",
    spreadsheetId: SPREADSHEET_ID_TARDE,
    abaSheets: "JUV N1",
    aparelhos: ["Bola", "Maças"],
    periodo: "Tarde",
    colunas: COLUNAS_TARDE
  },
  "adulto-n1": {
    id: "adulto-n1",
    nomeExibicao: "Adulto N.1",
    spreadsheetId: SPREADSHEET_ID_TARDE,
    abaSheets: "ADU N1",
    aparelhos: ["Arco", "Fita"],
    periodo: "Tarde",
    colunas: COLUNAS_TARDE
  },
  "inf-n2-13-anos": {
    id: "inf-n2-13-anos",
    nomeExibicao: "Infantil N.2 - 13 Anos",
    spreadsheetId: SPREADSHEET_ID_TARDE,
    abaSheets: "INF N2 - 13 ANOS",
    aparelhos: ["Arco"],
    periodo: "Tarde",
    colunas: COLUNAS_TARDE
  },
  "inf-n3-13-anos": {
    id: "inf-n3-13-anos",
    nomeExibicao: "Infantil N.3 - 13 Anos",
    spreadsheetId: SPREADSHEET_ID_TARDE,
    abaSheets: "INF N3 - 13 ANOS",
    aparelhos: ["Arco"],
    periodo: "Tarde",
    colunas: COLUNAS_TARDE
  },
  "juvenil-n3": {
    id: "juvenil-n3",
    nomeExibicao: "Juvenil N.3",
    spreadsheetId: SPREADSHEET_ID_TARDE,
    abaSheets: "JUV N3",
    aparelhos: ["Maças"],
    periodo: "Tarde",
    colunas: COLUNAS_TARDE
  },
  "juvenil-n2": {
    id: "juvenil-n2",
    nomeExibicao: "Juvenil N.2",
    spreadsheetId: SPREADSHEET_ID_TARDE,
    abaSheets: "JUV N2",
    aparelhos: ["Maças"],
    periodo: "Tarde",
    colunas: COLUNAS_TARDE
  },
  "adulto-n2": {
    id: "adulto-n2",
    nomeExibicao: "Adulto N.2",
    spreadsheetId: SPREADSHEET_ID_TARDE,
    abaSheets: "ADU N2",
    aparelhos: ["Fita"],
    periodo: "Tarde",
    colunas: COLUNAS_TARDE
  },
  "adulto-n3": {
    id: "adulto-n3",
    nomeExibicao: "Adulto N.3",
    spreadsheetId: SPREADSHEET_ID_TARDE,
    abaSheets: "ADU N3",
    aparelhos: ["Fita"],
    periodo: "Tarde",
    colunas: COLUNAS_TARDE
  },
};

export const listaCategoriasManha = Object.values(DICIONARIO_CATEGORIAS).filter(c => c.periodo === "Manhã");
export const listaCategoriasTarde = Object.values(DICIONARIO_CATEGORIAS).filter(c => c.periodo === "Tarde");

export const listaCategoriasCopaSabado = Object.values(DICIONARIO_CATEGORIAS_COPA).filter(c => c.id.endsWith("-sabado"));
export const listaCategoriasCopaDomingo = Object.values(DICIONARIO_CATEGORIAS_COPA).filter(c => c.id.endsWith("-domingo"));