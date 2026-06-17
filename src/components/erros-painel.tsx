export default function ErrorPainel() {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.18),transparent_40%)]" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        <img
          src="/fpg.png"
          alt="FPG"
          className="h-28 w-28 object-contain opacity-90"
        />

        <p className="mt-8 text-sm font-black uppercase tracking-[0.45em] text-red-400/80">
          Sistema temporariamente indisponível
        </p>

        <h1 className="mt-5 text-5xl font-black uppercase tracking-tight text-white">
          Reconectando ao servidor
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          O sistema de apuração está tentando restabelecer conexão
          automaticamente.
        </p>

        <div className="mt-10 flex items-center gap-3 rounded-full border border-red-500/20 bg-red-500/10 px-6 py-3 text-sm font-semibold text-red-300 backdrop-blur-md">
          <div className="size-2 animate-pulse rounded-full bg-red-400" />
          Tentando reconectar...
        </div>
      </div>
    </div>
  );
}
