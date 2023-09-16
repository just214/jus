"use client";

import { usePathname } from "next/navigation";

import { NavLink } from "./NavLink";

const navLinks = [
  ["music", "/music"],
  ["video", "/video"],
  ["code", "/code"],
];

type Props = {
  orientation: "row" | "col";
  onClick?: (path: string) => void;
};

export const NavigationMenu = ({ orientation, onClick }: Props) => {
  const pathname = usePathname();
  const isRow = orientation === "row";
  return (
    <nav className="">
      <ul
        className={`${
          isRow ? "flex-row gap-0" : "flex-col gap-8"
        } flex items-center display-text text-cs-pink`}
      >
        {navLinks.map(([label, to]) => (
          <li key={to}>
            <NavLink
              to={to}
              label={label}
              isActive={pathname === to}
              onClick={onClick}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
