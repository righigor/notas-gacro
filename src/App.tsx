import { Link } from "react-router-dom";
import { Sun, Moon, ArrowRight, Award, Calendar } from "lucide-react";
import { listaCategoriasCopaSabado, listaCategoriasManha } from "./utils/categorias";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl min-h-[calc(100vh-80px)] flex flex-col justify-center gap-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <img
          src="/fmg-logo.jpg"
          alt="Logo FMG"
          className="relative size-24 rounded-xl object-cover border-2 border-background shadow-lg"
        />

        <div className="space-y-1">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">
            Federação Mineira de Ginástica
          </p>
          <h1 className="text-2xl font-black tracking-tight sm:text-4xl text-foreground uppercase">
            Torneio Início <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/80">
              de Ginástica Rítmica 2026
            </span>
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 text-xs font-bold text-primary">
            <Calendar className="size-3.5" />
            30 de Maio de 2026
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 bg-secondary rounded-full border border-border/60 text-xs font-semibold text-muted-foreground">
            <Award className="size-3.5 text-primary" />
            Placar ao Vivo
          </div>

           <div className="flex justify-center">
          <Link
            to="/painel"
            className="
      flex items-center gap-2
      text-xs font-semibold
      text-muted-foreground
      hover:text-primary
      transition-colors
    "
          >
            Painel do Telão
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-muted">
            <Sun className="size-4 text-amber-500 animate-pulse" />
            <h2 className="font-bold text-xs tracking-wider text-foreground uppercase">
              Período da Manhã
            </h2>
          </div>

          <div className="grid gap-2.5">
            {listaCategoriasManha.map((cat) => (
              <Link
                key={cat.id}
                to={`/categorias/${cat.id}`}
                className="group flex items-center justify-between p-3.5 bg-card border rounded-xl hover:border-primary hover:bg-primary/1 active:scale-[0.99] transition-all shadow-sm"
              >
                <div className="space-y-0.5">
                  <div className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                    {cat.nomeExibicao}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {cat.aparelhos.join(" / ")}
                  </div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-muted">
            <Moon className="size-4 text-indigo-400" />
            <h2 className="font-bold text-xs tracking-wider text-foreground uppercase">
              Período da Tarde
            </h2>
          </div>

          <div className="grid gap-2.5">
            {listaCategoriasCopaSabado.map((cat) => (
              <Link
                key={cat.id}
                to={`/categorias/${cat.id}`}
                className="group flex items-center justify-between p-3.5 bg-card border rounded-xl hover:border-primary hover:bg-primary/1 active:scale-[0.99] transition-all shadow-sm"
              >
                <div className="space-y-0.5">
                  <div className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                    {cat.nomeExibicao}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {cat.tipo.join(" / ")}
                  </div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
