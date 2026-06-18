import Home from "@/App";
import AppLayout from "@/layout/app-layout";
import CategoriaPage from "@/pages/categoria-page";
import CategoriaTrofeuPage from "@/pages/categoria-trofeu-page";
import CopaSPPage from "@/pages/copa-sp-page";
import TrofeuSPPage from "@/pages/trofeu-sp-page";
import PainelPage from "@/pages/painel-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import EquipesHomePage from "@/pages/home-equipes-page";
import CopaN1EquipesPage from "@/pages/copa-n1-page.tsx";
import TrofeuEquipesPage from "@/pages/trofeu-resultados-page";
import CopaN2EquipesPage from "@/pages/copa-n2-page";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: "/", element: <Home /> },
      {path: "/copa-sp/categorias/:id", element: <CategoriaPage />},
      {path: "/copa-sp", element: <CopaSPPage />},
      {path: "/trofeu-sp", element: <TrofeuSPPage />},
      {path: "/trofeu-sp/categorias/:id", element: <CategoriaTrofeuPage />},
      {path: "/equipes", element: <EquipesHomePage />},
      {path: "/equipes/copa-n1", element: <CopaN1EquipesPage />},
      {path: "/equipes/copa-n2", element: <CopaN2EquipesPage />},
      {path: "/equipes/trofeu", element: <TrofeuEquipesPage />}
    ],
  },
  {
    path: "/painel",
    element: <PainelPage />,
  }
]);

export function AppRouter() {
  return (
    <div>
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}
