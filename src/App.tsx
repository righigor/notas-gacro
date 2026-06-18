import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Medal, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl min-h-screen flex flex-col justify-center gap-10">
      <div className="text-center space-y-4">
        <img src="/fpg.png" alt="Logo FPG" className="mx-auto size-24" />

        <div>
          <p className="text-xs font-bold tracking-widest text-primary uppercase">
            Federação Paulista de Ginástica
          </p>

          <h1 className="text-3xl sm:text-5xl font-black uppercase">
            Portal de Resultados
          </h1>

          <p className="text-muted-foreground mt-2">
            Ginástica Acrobática 2026
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        <Link
          to="/copa-sp"
          className="
            group
            p-6
            rounded-2xl
            border
            bg-card
            hover:border-primary
            hover:shadow-lg
            transition-all
          "
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="size-5 text-primary" />

                <span className="text-xs font-bold uppercase text-primary">
                  Campeonato
                </span>
              </div>

              <h2 className="text-2xl font-black uppercase">Copa São Paulo</h2>

              <p className="text-muted-foreground">Nível 1 e 2</p>

              <div className="flex items-center gap-2 mt-4 text-sm">
                <Calendar className="size-4" />
                20 e 21 de Junho de 2026
              </div>
            </div>

            <ArrowRight
              className="
              size-5
              text-muted-foreground
              group-hover:text-primary
              group-hover:translate-x-1
              transition-all
            "
            />
          </div>
        </Link>

        <Link
          to="/trofeu-sp"
          className="
            group
            p-6
            rounded-2xl
            border
            bg-card
            hover:border-primary
            hover:shadow-lg
            transition-all
          "
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Medal className="size-5 text-primary" />

                <span className="text-xs font-bold uppercase text-primary">
                  Campeonato
                </span>
              </div>

              <h2 className="text-2xl font-black uppercase">
                Troféu São Paulo
              </h2>

              <p className="text-muted-foreground">Ginástica Acrobática</p>

              <div className="flex items-center gap-2 mt-4 text-sm">
                <Calendar className="size-4" />
                20 de Junho de 2026
              </div>
            </div>

            <ArrowRight
              className="
              size-5
              text-muted-foreground
              group-hover:text-primary
              group-hover:translate-x-1
              transition-all
            "
            />
          </div>
        </Link>

        <Link
          to="/equipes"
          className="group rounded-3xl border bg-card p-6 hover:border-primary transition-all"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-bold">
                Resultados
              </p>

              <h2 className="mt-1 text-2xl font-black uppercase">
                Competição por Equipes
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Copa São Paulo e Troféu São Paulo
              </p>
            </div>

            <ArrowRight className="size-6 opacity-50 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>
      </div>

      <div className="text-center">
        <Link
          to="/painel"
          className="
            text-sm
            font-semibold
            text-muted-foreground
            hover:text-primary
            inline-flex
            items-center
            gap-2
          "
        >
          Painel do Telão
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
