import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const categoriasManha: { title: string; href: string; description: string }[] =
  [
    {
      title: "Infantil N.1 - 12 Anos",
      href: "/categorias/inf-n1-12-anos",
      description: "Mãos Livres e Fita",
    },
    {
      title: "Pré-Infantil N.2",
      href: "/categorias/pre-n2",
      description: "Mãos Livres",
    },
    {
      title: "Pré-Infantil N.3",
      href: "/categorias/pre-n3",
      description: "Mãos Livres",
    },
    {
      title: "Infantil N.2 - 12 Anos",
      href: "/categorias/inf-n2-12-anos",
      description: "Mãos Livres",
    },
    {
      title: "Infantil N.3 - 12 Anos",
      href: "/categorias/inf-n3-12-anos",
      description: "Mãos Livres",
    },
  ];

const categoriasTarde: { title: string; href: string; description: string }[] =
  [
    {
      title: "Juvenil N.1",
      href: "/categorias/juvenil-n1",
      description: "Bola e Maças",
    },
    {
      title: "Adulto N.1",
      href: "/categorias/adulto-n1",
      description: "Arco e Fita",
    },
    {
      title: "Infantil N.2 - 13 Anos",
      href: "/categorias/inf-n2-13-anos",
      description: "Arco",
    },
    {
      title: "Infantil N.3 - 13 Anos",
      href: "/categorias/inf-n3-13-anos",
      description: "Arco",
    },
    {
      title: "Juvenil N.3",
      href: "/categorias/juvenil-n3",
      description: "Maças",
    },
    {
      title: "Juvenil N.2",
      href: "/categorias/juvenil-n2",
      description: "Maças",
    },
    {
      title: "Adulto N.2",
      href: "/categorias/adulto-n2",
      description: "Fita",
    },
    {
      title: "Adulto N.3",
      href: "/categorias/adulto-n3",
      description: "Fita",
    },
  ];

export default function Header() {
  return (
    <header className="flex justify-center md:grid md:grid-cols-3 p-4 items-center w-full max-w-7xl mx-auto">
      <div className="hidden md:flex justify-start">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/fpg.png"
            alt="Logo FPG"
            className="size-16 rounded-xl"
          />
        </Link>
      </div>

      <div className="flex justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Sábado</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 md:w-100 p-1">
                  {categoriasManha.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Domingo</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 md:w-100 p-1">
                  {categoriasTarde.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden md:flex justify-end text-right">
        <span className="font-bold text-sm text-muted-foreground">
          Notas FPG - Copa São Paulo GACRO 2026
        </span>
      </div>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
