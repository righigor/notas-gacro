import { Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import type { ResultadoIndividualGeral } from "@/types/categorias";

interface TabelaIndividualGeralProps {
  data: ResultadoIndividualGeral[];
  nomeAparelhoUm: string;
  nomeAparelhoDois: string;
}

export default function TabelaIndividualGeral({
  data,
  nomeAparelhoDois,
  nomeAparelhoUm,
}: TabelaIndividualGeralProps) {
  const resultadosOrdenados = [...data].sort((a, b) => {
    if (a.totalValidado && b.totalValidado) {
      const classA = Number(a.classificacao.replace("º", ""));
      const classB = Number(b.classificacao.replace("º", ""));
      return classA - classB;
    }

    if (a.totalValidado && !b.totalValidado) {
      return -1;
    }

    if (!a.totalValidado && b.totalValidado) {
      return 1;
    }
    return 0;
  });
  return (
    <Card shadow-sm>
      <CardHeader className="p-4 bg-amber-500/5 border-b border-amber-500/20">
        <CardTitle className="text-sm font-bold flex items-center gap-2 uppercase text-amber-600 dark:text-amber-400">
          <Sparkles className="size-4" /> Resultado Individual Geral
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/10">
              <TableHead className="w-12.5 text-center font-bold">
                Classificação
              </TableHead>
              <TableHead className="min-w-37.5">Atleta / Clube</TableHead>
              <TableHead className="text-center font-semibold text-xs">
                {nomeAparelhoUm}
              </TableHead>
              <TableHead className="text-center font-semibold text-xs">
                {nomeAparelhoDois}
              </TableHead>
              <TableHead className="text-right font-bold text-sm pr-4">
                Total
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resultadosOrdenados.map((row) => (
              <TableRow key={row.ginasta} className="hover:bg-muted/5">
                <TableCell className="text-center font-bold border-r">
                  {row.totalValidado ? row.classificacao : "-"}
                </TableCell>

                <TableCell>
                  <div className="font-semibold text-sm">{row.ginasta}</div>

                  <div className="text-xs text-muted-foreground">
                    {row.equipe}
                  </div>
                </TableCell>

                <TableCell className="text-center border-r">
                  {row.aparelhoUm.validada ? row.aparelhoUm.nota : "-"}
                </TableCell>

                <TableCell className="text-center border-r">
                  {row.aparelhoDois.validada ? row.aparelhoDois.nota : "-"}
                </TableCell>

                <TableCell className="text-right font-black text-primary pr-4">
                  {row.totalValidado ? row.notaTotal : "-"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
