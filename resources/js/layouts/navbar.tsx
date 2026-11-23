import React, { useState } from "react";
import { Zap, Menu } from "lucide-react";
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
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Zap className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-semibold text-foreground">
            <Link href="/">Taskflow</Link>
          </span>
        </Link>

        {/* Menu Desktop */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  render={<Link href={item.href} />}
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Tombol CTA Desktop */}

        <div className="flex flex-wrap gap-6">
            <div className="hidden md:block">
          <Button
            className=""
            variant="outline"
            onClick={() => console.log("clicked")}
          >
            Sign Up
          </Button>
        </div>
        <div className="hidden md:block">
          <Button
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => console.log("clicked")}
          >
            Login
          </Button>
        </div>
        </div>
        

        {/* Menu Mobile (Hamburger + Sheet) */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" aria-label="Open menu" />}>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[260px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <span>In Inertia</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-foreground transition-colors hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  className="mt-2 w-full bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => {
                    console.log("clicked");
                    setOpen(false);
                  }}
                >
                  Login
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
