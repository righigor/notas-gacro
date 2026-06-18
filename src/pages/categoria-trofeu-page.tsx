import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabelaAparelho from "@/components/tabela-aparelho";
import { DICIONARIO_CATEGORIAS_TROFEU } from "@/utils/categorias";
import { useNotasCategoria } from "@/hooks/use-get-notas";
import LoadingTabela from "@/components/loading-tabela";
import TabelaTotal from "@/components/tabela-total";
import { cn } from "@/lib/utils";

export default function CategoriaTrofeuPage() {
  const { id } = useParams<{ id: string }>();
  const categoriaConfig = id ? DICIONARIO_CATEGORIAS_TROFEU[id] : undefined;

  const { data, isLoading } = useNotasCategoria({ categoriaConfig });

  if (!categoriaConfig) {
    return <div>Categoria não encontrada</div>;
  }

  if (isLoading) {
    return <LoadingTabela />;
  }

  if (!data) {
    return <div>Sem dados</div>;
  }

  console.log("Dados da categoria:", data);

  const tipos = [...new Set(data.resultados.map((r) => r.tipo))];

  const tiposValidos = tipos.filter((t) => ["Combinado", "Estático", "Dinâmico", "Solo A", "Solo B", "Cominado - Domingo"].includes(t));

  const resultadosTipo1 = data.resultados.filter((r) => r.tipo === tiposValidos[0]);
  const resultadosTipo2 = data.resultados.filter((r) => r.tipo === tiposValidos[1]);

  const temDoisTipos = tiposValidos.length === 2;
  const temTotal = data.total && data.total.length > 0;

  console.log("Tipos encontrados:", tipos);
  console.log("Tipos válidos:", tiposValidos);
  console.log("Resultados Tipo 1:", resultadosTipo1);
  console.log("Resultados Tipo 2:", resultadosTipo2);
  console.log("Tem dois tipos?", temDoisTipos);
  console.log("Tem total?", temTotal);

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <Link
        to="/trofeu-sp"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
      >
        <ChevronLeft className="size-4" />
        Voltar para o início
      </Link>
      <div className="space-y-1 mb-6">
        <div className="text-xs font-bold text-primary uppercase tracking-wider">
          Troféu SP
        </div>
        <h1 className="text-2xl font-black text-foreground uppercase tracking-tight">
          {data?.categoria}
        </h1>
        <p className="text-xs text-muted-foreground">
          Tipos de Prova da categoria: {categoriaConfig.tipo.join(" e ")}
        </p>
      </div>

      {temDoisTipos ? (
        <Tabs defaultValue="tipo1" className="w-full space-y-4">
          <TabsList className={cn("grid w-full grid-cols-3", !temTotal && "grid-cols-2")}>
            <TabsTrigger value="tipo1" className="capitalize">
              {tiposValidos[0].toLowerCase()}
            </TabsTrigger>
            <TabsTrigger value="tipo2" className="capitalize">
              {tiposValidos[1].toLowerCase()}
            </TabsTrigger>
            {temTotal && (
              <TabsTrigger value="total" className="capitalize">
                Total
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="tipo1">
            <TabelaAparelho data={resultadosTipo1} titulo={tiposValidos[0]} />
          </TabsContent>

          <TabsContent value="tipo2">
            <TabelaAparelho data={resultadosTipo2} titulo={tiposValidos[1]} />
          </TabsContent>

          {temTotal && (
            <TabsContent value="total">
              <TabelaTotal data={data.total!} tipos={tiposValidos} />
            </TabsContent>
          )}
        </Tabs>
      ) : (
        <TabelaAparelho data={data.resultados} titulo={tiposValidos[0]} />
      )}
    </div>
  );
}
