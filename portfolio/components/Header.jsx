import Link from "next/link";

// Components
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-4xl font-semibold">
          Advaith<span className="text-accent-default">.</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden xl:flex itemes-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-2 border-accent-default cursor-pointer hover:bg-accent-default hover:text-primary hover:transition-all duration-500"
            >
              Hire Me!
            </Button>
          </Link>
        </div>
        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
