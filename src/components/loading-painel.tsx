export default function LoadingPainel() {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <img
          src="/fpg.png"
          alt="FPG"
          className="h-28 w-28 object-contain"
        />

        <p className="mt-8 text-sm font-black uppercase tracking-[0.45em] text-primary/80">
          Federação Paulista de Ginástica
        </p>

        <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white">
          Troféu SP e Copa SP de Ginástica Acrobática 2026
        </h1>

        <div className="mt-10 h-14 w-14 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />

        <p className="mt-8 text-lg font-semibold tracking-wide text-zinc-400">
          Conectando ao sistema de apuração...
        </p>
      </div>
    </div>
  );
}