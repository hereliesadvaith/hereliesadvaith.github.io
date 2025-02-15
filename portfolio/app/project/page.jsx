"use client";
import MarkdownArea from "@/components/MarkdownArea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ListView from "@/components/ListView";
import Image from "next/image";

const Project = () => {
  const link =
    "https://raw.githubusercontent.com/hereliesadvaith/Project/refs/heads/main/projects.json";
  const [hash, setHash] = useState("");
  const [blogs, setBlogs] = useState([]);

  const updateHash = () => {
    setHash(window.location.hash.slice(1));
  };

  const fetchBlogs = async () => {
    try {
      const res = await fetch(link);
      const json = await res.json();
      setBlogs(json);
    } catch (error) {
      console.error("Failed to fetch json:", error);
    }
  };

  const onOpen = (id) => {
    window.location.hash = id;
    setHash(id);
  };

  const onBack = () => {
    window.location.hash = "";
    setHash("");
  };

  useEffect(() => {
    updateHash();
    fetchBlogs();
    window.addEventListener("hashchange", updateHash);
    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  if (!hash) {
    return (
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between p-5">
          <div className="">
            <h1 className="h1 text-accent-default">Projects</h1>
          </div>
          <div className="mix-blend-lighten w-[400px] h-[400px] relative hidden xl:flex">
            <Image
              src="/assets/project/laptop.png"
              quality={100}
              fill
              alt=""
              className="object-contain"
            />
          </div>
        </div>
        <ListView records={blogs} handleOpen={onOpen} />
      </div>
    );
  } else {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.8, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <Button
            onClick={() => {
              onBack();
            }}
            className="border border-accent-default cursor-pointer"
          >
            Back
          </Button>
          <MarkdownArea
            link={hash}
            domain={
              "https://raw.githubusercontent.com/hereliesadvaith/Project/refs/heads/main/"
            }
          />
        </div>
      </motion.div>
    );
  }
};

export default Project;
