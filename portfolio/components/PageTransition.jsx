"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  return (
    <AnimatePresence>
      <div key={usePathname()}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.5, duration: 0.3, ease: "easeInOut" },
          }}
          className="fixed h-screen w-screen bg-primary top-0 left-0 z-50 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
