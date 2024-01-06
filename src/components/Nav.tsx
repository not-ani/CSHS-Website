import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className="w-full border bg-white sticky top-0 z-50 h-14 flex items-center px-4 md:px-6">
      <a className="flex items-center justify-center" href="/">
        <img src="/LOGO-NB.png" alt="CSHS-LOGO" height="50" width="50" />
        <span className="sr-only">Computer Science Honor Society</span>
      </a>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem asChild>
            <NavigationMenuTrigger asChild>
              <a
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/#what"
              >
                What do we do?
              </a>
            </NavigationMenuTrigger>
            <NavigationMenuTrigger asChild>
              <a
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/#membership"
              >
                Membership
              </a>
            </NavigationMenuTrigger>
            <NavigationMenuTrigger asChild>
              <a
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/#initiatives"
              >
                Initiatives
              </a>
            </NavigationMenuTrigger>
            <NavigationMenuTrigger asChild>
              <a
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/contact"
              >
                Contact
              </a>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
