import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const competicoes = [
  {
    titulo: "Copa São Paulo",
    subtitulo: "Nível 1",
    href: "/equipes/copa-n1",
  },
  {
    titulo: "Copa São Paulo",
    subtitulo: "Nível 2",
    href: "/equipes/copa-n2",
  },
  {
    titulo: "Troféu São Paulo",
    subtitulo: "Classificação Geral",
    href: "/equipes/trofeu",
  },
];

export default function EquipesHomePage() {
  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center text-center space-y-4">
          <Link to="/">
            <img
              src="/fpg.png"
              alt="Logo FPG"
              className="relative size-24 rounded-xl border-2 border-background shadow-lg"
            />
          </Link>

          <div className="space-y-1">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">
              Federação Paulista de Ginástica
            </p>

            <h1 className="mt-6 text-4xl font-black uppercase tracking-tight">
              Competição por Equipes
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Consulte a classificação oficial das equipes da Copa São Paulo e
              do Troféu São Paulo de Ginástica Acrobática.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {competicoes.map((competicao) => (
            <Link
              key={competicao.href}
              to={competicao.href}
              className="
                group
                rounded-3xl
                border
                border-border
                bg-card
                p-6
                shadow-sm
                transition-all
                hover:-translate-y-1
                hover:border-primary
                hover:shadow-xl
              "
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
                    Competição
                  </p>

                  <h2 className="mt-3 text-2xl font-black uppercase leading-tight">
                    {competicao.titulo}
                  </h2>

                  <p className="mt-2 text-xl font-semibold text-muted-foreground">
                    {competicao.subtitulo}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1 text-primary">
                  <span className="font-bold uppercase tracking-wide">
                    Ver resultados
                  </span>

                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
