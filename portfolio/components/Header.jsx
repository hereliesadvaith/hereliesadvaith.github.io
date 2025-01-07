import Link from "next/link";

// Components
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";

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
            <Button>Hire!</Button>
          </Link>
        </div>
        {/* Mobile Nav */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
