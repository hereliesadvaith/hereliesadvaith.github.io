"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Components
import Stairs from "@/components/Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 z-40 flex pointer-events-none">
          <Stairs />
        </div>
        <motion.div
          className="h-screen w-screen fixed top-0 bg-primary pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
        />
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
