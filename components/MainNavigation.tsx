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
  Hourglass,
  PlusIcon,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { onClickOpen } from "@/redux/modalSlice";

export function MainNavigation() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.userId}/all-tasks`,
      label: "All Tasks",
      active: pathname === `/${params.userId}/all-tasks`,
      icon: <GalleryVerticalEnd size={20} />,
    },
    {
      href: `/${params.userId}/important`,
      label: "Important",
      active: pathname === `/${params.userId}/important`,
      icon: <ShieldAlert size={20} />,
    },
    {
      href: `/${params.userId}/completed`,
      label: "Completed",
      active: pathname === `/${params.userId}/completed`,
      icon: <CheckCheck size={20} />,
    },
    {
      href: `/${params.userId}/urgent`,
      label: "Do it Now",
      active: pathname === `/urgent`,
      icon: <Hourglass size={20} />,
    },
  ];

  if (pathname === "/") return null;

  return (
    <nav
      className={`w-full flex items-center justify-between gap-x-2 pt-6 pb-4 md:py-6 lg:py-8`}
    >
      <div className="w-full flex items-center gap-4 flex-wrap">
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
        <Button
          title="Add New Task"
          className="flex md:hidden items-center justify-center"
          onClick={() => dispatch(onClickOpen())}
          variant="ghost"
        >
          <PlusIcon size={18} />
          Add Task
        </Button>
      </div>

      <button
        type="button"
        title="Add New Task"
        className="w-fit hidden rounded-full border md:flex items-center justify-center p-3 hover:bg-slate-200/50 dark:hover:bg-slate-100/20"
        onClick={() => dispatch(onClickOpen())}
      >
        <PlusIcon size={18} />
      </button>
    </nav>
  );
}
