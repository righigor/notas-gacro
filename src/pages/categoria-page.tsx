import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabelaAparelho from "@/components/tabela-aparelho";
import { DICIONARIO_CATEGORIAS_COPA } from "@/utils/categorias";
import { useNotasCategoria } from "@/hooks/use-get-notas";
import LoadingTabela from "@/components/loading-tabela";
import TabelaTotal from "@/components/tabela-total";
import { formatarTipo } from "@/utils/formatar-tipo";

export default function CategoriaPage() {
  const { id } = useParams<{ id: string }>();
  const categoriaConfig = id ? DICIONARIO_CATEGORIAS_COPA[id] : undefined;

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

  const resultadosTipo1 = data.resultados.filter((r) => r.tipo === tipos[0]);
  const resultadosTipo2 = data.resultados.filter((r) => r.tipo === tipos[1]);

  const temDoisTipos = tipos.length === 2;

  return (
    <div className="container mx-auto px-4 py-6 max-w-5xl">
      <Link
        to="/copa-sp"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
      >
        <ChevronLeft className="size-4" />
        Voltar para o início
      </Link>
      <div className="space-y-1 mb-6">
        <div className="text-xs font-bold text-primary uppercase tracking-wider">
          {categoriaConfig.id.endsWith("sabado") ? "Copa SP - Sábado" : "Copa SP - Domingo"}
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
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tipo1" className="capitalize">
              {formatarTipo(tipos[0])}
            </TabsTrigger>
            <TabsTrigger value="tipo2" className="capitalize">
              {formatarTipo(tipos[1])}
            </TabsTrigger>
            <TabsTrigger value="total" className="capitalize">
              Total
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tipo1">
            <TabelaAparelho data={resultadosTipo1} titulo={tipos[0]} />
          </TabsContent>

          <TabsContent value="tipo2">
            <TabelaAparelho data={resultadosTipo2} titulo={tipos[1]} />
          </TabsContent>

          <TabsContent value="total">
            <TabelaTotal data={data.total!} tipos={tipos} />
          </TabsContent>
        </Tabs>
      ) : (
        <TabelaAparelho data={data.resultados} titulo={tipos[0]} />
      )}
    </div>
  );
}
