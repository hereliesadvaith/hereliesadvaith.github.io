"use client";
import { animate, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="overflow-hidden rounded-full w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/home/photo.png"
            priority
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=""
            className="object-contain"
          />
        </motion.div>
        {/* Circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-300px xl:h-[506px] "
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#F2F2F2"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
