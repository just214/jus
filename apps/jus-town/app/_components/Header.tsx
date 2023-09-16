import Image from "next/image";

import { MobileNavigation } from "./MobileNavigation";
import { NavigationMenu } from "./NavigationMenu";
import { ThemeSwitch } from "./ThemeSwitch";

import { NavLink } from "./NavLink";

export const Header = () => {
  return (
    <header className="px-4 py-2 flex items-center justify-between surface-2">
      <section className="flex flex-1 items-center justify-between">
        <NavLink to="/" label={<img src="/icon.svg" className="h-12 w-12" />} />

        <section className="hidden lg:flex items-center">
          <NavigationMenu orientation="row" />
          <ThemeSwitch />
        </section>

        <MobileNavigation />
      </section>
    </header>
  );
};
