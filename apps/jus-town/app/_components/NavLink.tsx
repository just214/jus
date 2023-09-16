"use client";

import Link from "next/link";

type Props = {
  label: React.ReactNode;
  to: string;
  isActive?: boolean;
  onClick?: (path: string) => void;
};

export const NavLink = (props: Props) => {
  const baseClassNames =
    "font-medium mx-1 text-lg transition-colors duration-200 ease-in-out px-4 sm:px-3 xl:px-6 py-2 rounded-md";

  const selectedClassNames = props.isActive
    ? "surface-1"
    : "hover:surface-1 focus:surface-1 text-alt";
  return (
    <Link
      href={props.to}
      className={`${baseClassNames} ${selectedClassNames}`}
      onClick={() => props.onClick?.(props.to)}
    >
      {props.label}
    </Link>
  );
};
