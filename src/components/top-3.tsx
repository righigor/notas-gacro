import { parseNota } from "@/utils/parse-nota";

interface Props {
  data: {
    equipe: string;
    total: string;
    classificacao: string;
  }[];
}

export function Top3Equipes({ data }: Props) {
  const top3 = [...(data ?? [])]
  .sort((a, b) => parseNota(b.total) - parseNota(a.total))
  .slice(0, 3);

    console.log(top3)

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-6">
      {top3.map((item, index) => {
        const medal =
          index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉";

        return (
          <div
            key={item.equipe}
            className="rounded-3xl border bg-muted/30 p-6 text-center"
          >
            <div className="text-3xl">{medal}</div>

            <h2 className="mt-3 text-lg font-black uppercase">
              {item.equipe}
            </h2>

            <p className="mt-2 text-3xl font-black text-primary">
              {item.total}
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              {item.classificacao}
            </p>
          </div>
        );
      })}
    </div>
  );
}