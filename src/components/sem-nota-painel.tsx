import { Trophy, Radio } from "lucide-react";

export function SemNotaPainel() {
  return (
    <div className="relative flex h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]" />

      <div className="relative z-10 flex w-full flex-col items-center justify-center px-8 text-center">
        <div className="flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 backdrop-blur-md">
          <Radio className="size-4 text-red-400" />
          <span className="text-xs font-black uppercase tracking-[0.3em] text-red-300">
            Ao Vivo
          </span>
        </div>

        <img
          src="/fpg.png"
          alt="FPG"
          className="h-28 w-28 object-contain"
        />

        <p className="mt-2 text-sm font-black uppercase tracking-[0.45em] text-primary/80">
          Federação Paulista de Ginástica
        </p>

        <h1 className="mt-2 max-w-5xl text-2xl font-black uppercase leading-tight tracking-tight text-white">
          Troféu SP e Copa SP de Ginástica Acrobática 2026
        </h1>

        <div className="mt-4 flex max-w-2xl flex-col items-center rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex size-16 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
            <Trophy className="size-8 text-primary" />
          </div>

          <h2 className="mt-4 text-2xl font-black uppercase tracking-tight text-white">
            Aguardando primeira nota
          </h2>

          <p className=" max-w-xl leading-relaxed text-zinc-400">
            As notas aparecerão automaticamente assim que forem validadas pela
            arbitragem.
          </p>
        </div>

        {/* Rodapé */}
        <div className="absolute bottom-6 right-8 text-sm text-zinc-500">
          Sistema de Apuração FPG
        </div>
      </div>
    </div>
  );
}