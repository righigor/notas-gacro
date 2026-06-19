import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import type { ResultadoBlocks } from "@/types/blocks";

interface TabelaAparelhoProps {
  data: ResultadoBlocks[];

  titulo?: string;
}

export default function TabelaAparelhoBlock({ data, titulo }: TabelaAparelhoProps) {
  const resultadosOrdenados = [...data].sort((a, b) => {
    const aValidada = a.notaValidada;
    const bValidada = b.notaValidada;

    if (aValidada && bValidada) {
      const classA = Number(a.classificacao.replace("º", ""));
      const classB = Number(b.classificacao.replace("º", ""));

      return classA - classB;
    }

    if (aValidada && !bValidada) {
      return -1;
    }

    if (!aValidada && bValidada) {
      return 1;
    }

    return Number(a.ordem) - Number(b.ordem);
  });
  
  return (
    <Card shadow-sm>
      <CardHeader className="p-4 bg-muted/30 border-b">
        <CardTitle className="text-sm font-bold flex items-center gap-2 uppercase">
          <Award className="size-4 text-primary" /> Ranking{" "}
          {titulo ? `- ${titulo}` : ""}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/10">
              <TableHead className="w-12.5 text-center font-bold">
                Classificação
              </TableHead>
              <TableHead className="min-w-56">Ginastas / Clube</TableHead>
              <TableHead className="text-center font-semibold text-xs">
                E
              </TableHead>
              <TableHead className="text-center font-semibold text-xs">
                D
              </TableHead>
              <TableHead className="text-center font-semibold text-xs text-red-500">
                Pen
              </TableHead>
              <TableHead className="text-right font-bold text-sm pr-4">
                Nota Final
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resultadosOrdenados.map((row) => (
              <TableRow
                key={`${row.ordem}-${row.ginasta}`}
                className="hover:bg-muted/5"
              >
                <TableCell className="text-center font-bold text-sm border-r">
                  {row.notaValidada ? row.classificacao : "-"}
                </TableCell>
                <TableCell>
                  <div className="font-semibold text-sm text-foreground">
                    {row.ginasta || "A definir"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {row.clubeEscola}
                  </div>
                </TableCell>
                <TableCell className="text-center text-xs border-r">
                  {row.notaValidada ? row.notaE : ""}
                </TableCell>
                <TableCell className="text-center text-xs border-r">
                  {row.notaValidada ? row.notaD : ""}
                </TableCell>
                <TableCell className="text-center text-xs text-red-500 border-r">
                  {row.notaValidada
                    ? Number(row.penalidade.replace(",", ".")) > 0
                      ? row.penalidade
                      : "-"
                    : ""}
                </TableCell>
                <TableCell className="text-right font-black text-sm pr-4 text-primary">
                  {row.notaValidada ? row.notaFinal : ""}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
