import { AlertTriangle } from "lucide-react";

export function ErrorCompeticao() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-4 px-6 text-center">
      <AlertTriangle className="h-8 w-8 text-red-500" />

      <p className="text-lg font-bold">
        Não foi possível carregar os resultados
      </p>

      <p className="text-sm text-muted-foreground max-w-md">
        Houve um problema ao buscar os dados da planilha oficial.
        Tente atualizar a página.
      </p>

      <button
        onClick={() => window.location.reload()}
        className="mt-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white"
      >
        Atualizar
      </button>
    </div>
  );
}