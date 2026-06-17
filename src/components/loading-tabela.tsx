import { Card, CardContent, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function LoadingTabela() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <div className="space-y-1 mb-6">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-8 w-80" />
        <Skeleton className="h-4 w-56" />
      </div>

      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-48" />
        </CardHeader>

        <CardContent className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
