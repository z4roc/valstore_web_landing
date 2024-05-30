"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Navbar() {
  return (
    <div className="flex xl:h-8 m-4 h-12 xl:p-10 p-0 w-full xl:w-11/12 rounded-xl absolute bg-primary opacity-80 border border-slate-600  shadow-slate-800 shadow-inner bg-gradient-to-tl from-background via-slate-900 to-background">
      <nav className="h-full rounded-lg flex justify-start items-center w-full xl:gap-6 gap-2 shadow-lg last:m-auto">
        <Link href={"/"}>
          <div className="flex items-center gap-4 hover:opacity-75 hover:bg-slate-500 transition ease-in-out hover:-translate-y-1 hover:scale-110 xl:p-2 p-0 m-1 rounded-xl hover:shadow-inner hover:shadow-slate-800">
            <Image
              src="/Valstore_Icon.png"
              alt="Valstore Logo"
              width={64}
              height={64}
              className="hidden xl:block"
            />
            <Image
              src="/Valstore_Icon.png"
              alt="Valstore Logo"
              width={42}
              height={42}
              className="xl:hidden block"
            />
            <h1 className="xl:text-3xl text-xl hidden xl:block">Valstore</h1>
          </div>
        </Link>
        <Link href={"/blog"}>
          <div className="flex items-center gap-4 hover:opacity-75 transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 xl:p-2 p-0 m-1 rounded-xl  hover:shadow-inner hover:shadow-slate-800">
            <h1 className="xl:text-3xl text-xl flex items-center gap-4 p-2 rounded-xl">
              Blog
            </h1>
          </div>
        </Link>
        <Link href={"/privacy"}>
          <div className="flex items-center gap-4 hover:opacity-75 transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 xl:p-2 p-0 m-1 rounded-xl  hover:shadow-inner hover:shadow-slate-800">
            <h1 className="xl:text-3xl text-xl flex items-center gap-4 p-2 rounded-xl">
              Privacy
            </h1>
          </div>
        </Link>
        <Link href={"/about"}>
          <div className="flex items-center gap-4 hover:opacity-75 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 xl:p-2 p-0 m-1 rounded-xl  hover:shadow-inner hover:shadow-slate-800">
            <h1 className="xl:text-3xl text-xl flex items-center gap-4  p-2 rounded-xl">
              About
            </h1>
          </div>
        </Link>
        <Link
          href={"https://github.com/z4roc/valstore-mobile"}
          className="ml-auto"
        >
          <div className="flex items-center gap-4 hover:opacity-75  transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 xl:p-2 p-0 m-1 rounded-xl  hover:shadow-inner hover:shadow-slate-800">
            <Image
              height={32}
              width={32}
              src={"/github.png"}
              alt="git"
              className="block xl:hidden m-2"
            />
            <Image
              height={42}
              width={42}
              src={"/github.png"}
              alt="git"
              className="hidden xl:block"
            />
          </div>
        </Link>
      </nav>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
