"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "project",
    path: "/project",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-3xl text-accent-default" />
      </SheetTrigger>
      <SheetContent className="flex">
        <SheetTitle className="hidden" />
        <SheetDescription className="hidden" />
        {/* logo */}
        <div className="mt-32 mb-24 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Advaith<span className="text-accent-default">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col ml-20 items-baseline gap-6">
          {links.map((link, index) => {
            return (
              <SheetClose asChild key={index}>
                <Link
                  href={link.path}
                  className={`${
                    link.path === pathname
                      ? "text-accent-default border-b-2 border-accent-default inline"
                      : ""
                  } text-xl capitalize hover:text-accent-default transition-all`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
