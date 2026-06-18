import { Loader2 } from "lucide-react";

export function LoadingCompeticao() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-3">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />

        <p className="text-sm font-medium text-muted-foreground">
          Carregando resultados...
        </p>
      </div>

      <p className="text-xs text-muted-foreground">
        Atualizando dados da planilha oficial
      </p>
    </div>
  );
}