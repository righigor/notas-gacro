import { ErrorCompeticao } from "@/components/erro-competicao";
import { LoadingCompeticao } from "@/components/loading-equipes";
import { Top3Equipes } from "@/components/top-3";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { useGetResultadosEquipeN1 } from "@/hooks/use-get-resultados-equipe";
import { parseClassificacao } from "@/utils/parse-class";
import { useMemo } from "react";

export default function TrofeuEquipesPage() {
  const { data, isLoading, error } = useGetResultadosEquipeN1({
    spreadsheetId: "1N2CBtJNVLIqdn_UL2Zfywyldb_dpp9yHCijDcuAW4VE",
    aba: "Resultado Trofeu",
  });

  const sorted = useMemo(() => {
    if (!data) return [];

    return [...data].sort(
      (a, b) =>
        parseClassificacao(a.classificacao) -
        parseClassificacao(b.classificacao),
    );
  }, [data]);

  if (isLoading) {
    return <LoadingCompeticao />;
  }

  if (error) {
    return <ErrorCompeticao />;
  }

  if (!data) {
    return <ErrorCompeticao />;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl md:text-4xl font-black uppercase">
        Troféu São Paulo
      </h1>
      <p className="mt-2 text-muted-foreground">
        Classificação oficial por equipes • Ginástica Acrobática
      </p>

      <div>
        <h2 className="mt-10 text-xl font-bold uppercase tracking-wide">
          Pódio da Competição
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Resultados atualizados em tempo real conforme lançamento das notas
          oficiais.
        </p>
        <Top3Equipes data={data} />
      </div>

      <div className="mt-10 flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-4">
        <div className="h-px w-full bg-border md:flex-1" />

        <h2 className="text-sm text-center font-bold uppercase tracking-[0.3em] text-muted-foreground">
          Ranking Completo das equipes
        </h2>

        <div className="h-px w-full bg-border md:flex-1" />
      </div>

      <div className="mt-8 rounded-3xl border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Class</TableHead>
              <TableHead className="w-62.5 p-4">Equipe</TableHead>

              <TableHead className="min-w-60">Pré Infantil</TableHead>

              <TableHead className="min-w-60">Infantil</TableHead>

              <TableHead className="text-center">Total</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {sorted.map((item) => (
              <TableRow key={item.equipe}>
                <TableCell className="text-center font-bold text-primary align-center p-4 border-r">
                  {item.classificacao}
                </TableCell>
                <TableCell className="font-bold align-center p-4 border-r">
                  {item.equipe}
                </TableCell>

                <TableCell className="whitespace-pre-line align-center p-2 border-r">
                  {item.preInfantil}
                </TableCell>

                <TableCell className="whitespace-pre-line align-center p-2 border-r">
                  {item.infantil}
                </TableCell>

                <TableCell className="text-center font-bold align-center p-4">
                  {item.total}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
