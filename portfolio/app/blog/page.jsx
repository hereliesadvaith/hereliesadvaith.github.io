"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/hereliesadvaith/Blog/main/blogs.json"
        );
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {blogs.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-default transition-all duration-500">
                  {item.title}
                </h2>
                <p className="text-white/60">{item.description}</p>
                <div className="flex flex-row justify-end">
                  <Link
                    href={item.link}
                    className="w-[50px] h-[50px] mr-5 rounded-full bg-white group-hover:bg-accent-default transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <div className="border border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
