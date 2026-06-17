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
import type { ResultadoTotal } from "@/types/categorias";
import type { TipoApresentacao } from "@/utils/categorias";

interface Props {
  data: ResultadoTotal[];
  tipos: TipoApresentacao[];
}

export default function TabelaTotal({ data, tipos }: Props) {
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
      <CardHeader className="p-4 bg-muted/30 border-b">
        <CardTitle className="text-sm font-bold flex items-center gap-2 uppercase">
          <Award className="size-4 text-primary" />
          Ranking Geral
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Classificação</TableHead>
              <TableHead>Ginastas / Clube</TableHead>
              <TableHead className="text-center">{tipos[0]}</TableHead>
              <TableHead className="text-center">{tipos[1]}</TableHead>
              <TableHead className="text-right font-bold text-sm pr-4">
                Total
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {resultadosOrdenados.map((row) => (
              <TableRow key={row.ginasta}>
                <TableCell className="text-center font-bold border-r">
                  {row.totalValidado ? row.classificacao : "-"}
                </TableCell>
                <TableCell>
                  <div className="font-semibold">{row.ginasta}</div>
                  <div className="text-xs text-muted-foreground">
                    {row.clubeEscola}
                  </div>
                </TableCell>
                <TableCell className="text-center text-xs border-r">
                  {row.totalValidado ? row.notaTipoUm : ""}
                </TableCell>
                <TableCell className="text-center text-xs border-r">
                  {row.totalValidado ? row.notaTipoDois : ""}
                </TableCell>
                <TableCell className="text-right font-black text-sm pr-4 text-primary">
                  {row.totalValidado ? row.notaTotal : ""}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
