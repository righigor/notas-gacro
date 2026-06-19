import type { UltimaNotaBlocks } from "@/types/blocks";

interface BlockPainelProps {
  ultimaNota: UltimaNotaBlocks
}

export default function BlockPainel({ ultimaNota }: BlockPainelProps) {
  const hora = new Date(ultimaNota.publicadaEm).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_35%)]" />

      <div className="relative z-10 flex min-h-dvh flex-col px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="mt-2 md:text-3xl font-black uppercase leading-tight tracking-tight text-white">
              Troféu SP e Copa SP de Ginástica Acrobática 2026
            </h1>
            <h2 className="mt-2 md:text-2xl font-bold uppercase tracking-tight text-zinc-200">
              {ultimaNota.categoria} - {ultimaNota.prova} - {ultimaNota.tipo}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <img
              src="/fpg.png"
              alt=""
              className="size-14 md:size-18 rounded-xl"
            />
            <div className="rounded-2xl border border-primary/30 bg-accent px-5 py-4 backdrop-blur-md text-primary">
              <div className="text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] opacity-70 text-white">
                  Classificação
                </p>

                <div className="mt-1 text-4xl text-white font-black leading-none ">
                  {ultimaNota.classificacao}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-8 flex flex-1 flex-col justify-center">
          <div className="flex h-full w-full max-w-[1800px] mx-auto flex-col rounded-[32px] border border-white/10 bg-white/5 px-8 md:p-8 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="md:flex-1">
                <div className="mt-10 flex items-start justify-between gap-8">
                  <div>
                    <h1 className="max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[1.05] tracking-tight text-white">
                      {ultimaNota.ginasta}
                    </h1>

                    <p className="mt-3 text-2xl font-semibold uppercase tracking-wide text-zinc-400">
                      {ultimaNota.clubeEscola}
                    </p>

                    <div className="mt-8 grid grid-cols-2 lg:grid-cols-5 gap-3">
                      {[
                        {
                          label: "E",
                          value: ultimaNota.notaE,
                        },
                        {
                          label: "D",
                          value: ultimaNota.notaD,
                        },
                        {
                          label: "PEN",
                          value:
                            ultimaNota.penalidade &&
                            ultimaNota.penalidade !== "0.000"
                              ? ultimaNota.penalidade
                              : "-",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md"
                        >
                          <p className="text-sm font-black uppercase tracking-[0.25em] text-zinc-400">
                            {item.label}
                          </p>

                          <div className="mt-2 text-3xl font-black tracking-tight text-white">
                            {item.value || "-"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center rounded-[28px] border border-primary/30 bg-primary/10 px-8 py-6 shadow-2xl shadow-primary/10 mb-4 md:mb-0">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-white/70">
                  Nota Final
                </p>

                <div className="mt-2 text-[4rem] sm:text-[5rem] lg:text-[6rem] font-black leading-none tracking-tight text-white">
                  {ultimaNota?.notaFinal || "-"}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-between text-zinc-500">
          <div className="text-xs md:text-sm uppercase tracking-[0.3em]">
            Federação Paulista de Ginástica
          </div>

          <div className="text-xs md:text-sm font-semibold tracking-[0.2em]">
            Publicado às {hora}
          </div>
        </div>
      </div>
    </div>
  );
}