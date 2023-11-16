"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  AlertCircle,
  AlignJustify,
  CheckCheck,
  GalleryVerticalEnd,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function MainNavigation() {
  const pathname = usePathname();

  const routes = [
    {
      href: `/all-tasks`,
      label: "All Tasks",
      active: pathname === `/all-tasks`,
      icon: <GalleryVerticalEnd size={20} />,
    },
    {
      href: `/important`,
      label: "Important",
      active: pathname === `/important`,
      icon: <ShieldAlert size={20} />,
    },
    {
      href: `/completed`,
      label: "Completed",
      active: pathname === `/completed`,
      icon: <CheckCheck size={20} />,
    },
    {
      href: `/urgent`,
      label: "Do it Now",
      active: pathname === `/urgent`,
      icon: <AlertCircle size={20} />,
    },
  ];

  return (
    <nav className="w-full flex items-center gap-4 flex-wrap">
      {routes.map((route, index) => (
        <Link
          key={index}
          href={route.href}
          className={cn("", route.active ? "" : "")}
        >
          <Button
            variant="outline"
            size="lg"
            className={cn(
              "flex items-center gap-x-3",
              route.active &&
                "dark:bg-slate-100/20 bg-slate-200/50 border-black border-2 dark:border-0"
            )}
          >
            {route.icon}
            {route.label}
          </Button>
        </Link>
      ))}
    </nav>
  );
}
