import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const Header = () => {
  return (
    <header className="relative z-10">
      <div className="px-4 xl:px-10 py-5 xl:py-8 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-[17px] xl:text-[20px] font-medium tracking-[-0.03em]"
        >
          advaith
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 bg-ink text-paper text-[15px] xl:text-[17px] font-medium tracking-[-0.02em] px-2.5 py-1.5 rounded-[3px] hover:opacity-85 transition-opacity"
        >
          Get in touch
          <FiArrowUpRight className="text-[1.1em]" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
