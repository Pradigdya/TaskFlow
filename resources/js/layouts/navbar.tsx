import React, { useState } from "react";
import { Menu, FileCheck } from "lucide-react";
import { Link } from "@inertiajs/react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xs">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-12">
        {/* Logo - Scroll ke paling atas */}
        <a
          href="#hero"
          onClick={(e) => handleScroll(e, "#hero")}
          className="flex items-center gap-2"
        >
          <FileCheck className="h-9 w-9 fill-blue-600 text-white" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            TaskFlow
          </span>
        </a>

        {/* Menu Desktop */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={navigationMenuTriggerStyle()}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Tombol CTA Desktop (Tetap pakai Inertia Link jika pindah halaman auth) */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" render={<Link href="/register" />}>
            Sign Up
          </Button>
          <Button
            className="bg-blue-600 text-white hover:bg-blue-700"
            render={<Link href="/login" />}
          >
            Login
          </Button>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left">
                  <FileCheck className="h-6 w-6 fill-blue-600 text-white" />
                  <span>TaskFlow</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-base font-medium text-foreground transition-colors hover:text-blue-600"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-4 flex flex-col gap-2.5 border-t pt-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    render={<Link href="/register" />}
                  >
                    Sign Up
                  </Button>
                  <Button
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                    render={<Link href="/login" />}
                  >
                    Login
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
