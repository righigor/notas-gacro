import Home from "@/App";
import AppLayout from "@/layout/app-layout";
import CategoriaPage from "@/pages/categoria-page";
import CopaSPPage from "@/pages/copa-sp-page";
import PainelPage from "@/pages/painel-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: "/", element: <Home /> },
      {path: "/categorias/:id", element: <CategoriaPage />},
      {path: "/copa-sp", element: <CopaSPPage />},
    ],
  },
  {
    path: "/painel",
    // element: <PainelPage />,
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
