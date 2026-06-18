import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-center md:grid md:grid-cols-3 p-4 items-center w-full max-w-7xl mx-auto">
      <div className="hidden md:flex justify-start">
        <Link to="/" className="flex items-center gap-2">
          <img src="/fpg.png" alt="Logo FPG" className="size-16 rounded-xl" />
        </Link>
      </div>

      <div className="flex justify-center gap-4">
        <Link
          to="/copa-sp"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors hover:underline"
        >
          <span>Copa SP</span>
        </Link>
        <span className="text-muted-foreground">-</span>
        <Link
          to="/trofeu-sp"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors hover:underline"
        >
          <span>Troféu SP</span>
        </Link>
        <span className="text-muted-foreground">-</span>
        <Link
          to="/equipes"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors hover:underline"
        >
          <span>Equipes</span>
        </Link>
      </div>

      <div className="hidden md:flex justify-end text-right">
        <span className="font-bold text-sm text-muted-foreground">
          Notas FPG - Copa São Paulo GACRO 2026
        </span>
      </div>
    </header>
  );
}
