import { Top3Equipes } from "@/components/top-3";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useMemo } from "react";
import { parseClassificacao } from "@/utils/parse-class";
import { useGetResultadosEquipeN2 } from "@/hooks/use-get-resultados-n2";
import { LoadingCompeticao } from "@/components/loading-equipes";
import { ErrorCompeticao } from "@/components/erro-competicao";

export default function CopaN2EquipesPage() {
  const { data, isLoading, error } = useGetResultadosEquipeN2({
    spreadsheetId: "1N2CBtJNVLIqdn_UL2Zfywyldb_dpp9yHCijDcuAW4VE",
    aba: "Resultado N2",
  });

  const sorted = useMemo(() => {
    if (!data) return [];

    return [...data].sort(
      (a, b) =>
        parseClassificacao(a.classificacao) -
        parseClassificacao(b.classificacao),
    );
  }, [data]);

  if (isLoading) return <LoadingCompeticao />;
  if (error) return <ErrorCompeticao />;
  if (!data) return <ErrorCompeticao />;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl md:text-4xl font-black uppercase">
        Copa São Paulo - Nível 2
      </h1>

      <p className="mt-2 text-muted-foreground">
        Classificação oficial por equipes • Ginástica Acrobática
      </p>

      {/* TOP 3 */}
      <div>
        <h2 className="mt-10 text-xl font-bold uppercase tracking-wide">
          Pódio da Competição
        </h2>

        <p className="text-xs text-muted-foreground">
          Atualização automática conforme lançamento das notas.
        </p>

        <Top3Equipes data={sorted} />
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
              <TableHead className="w-72">Equipe</TableHead>
              <TableHead className="text-lef">
                Apresentações Selecionadas
              </TableHead>
              <TableHead className="text-center">Total</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {sorted.map((item) => (
              <TableRow key={item.equipe}>
                <TableCell className="text-center font-bold text-primary p-4 border-r">
                  {item.classificacao}
                </TableCell>

                <TableCell className="font-bold p-4 border-r">
                  {item.equipe}
                </TableCell>

                <TableCell className="whitespace-pre-line p-4 border-r">
                  {item.apresentacoes}
                </TableCell>

                <TableCell className="text-center font-bold p-4">
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
