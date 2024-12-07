"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Resume",
    href: "/resume",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.href}
            key={index}
            className={`${
              link.href === pathname &&
              "text-accent-default border-b-2 border-accent-default"
            } capitalize font-medium hover:text-accent-default transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
