"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Work = () => {
  const works = [
    {
      id: 1,
      title: "Odoo",
      description:
        "This repository contains a collection of custom applications developed for Odoo, an open-source enterprise resource planning (ERP) system.",
    },
    {
      id: 2,
      title: "Quick Budget",
      description:
        "This is a budget management app built using Owl.JS for the frontend and Django for the backend. The app allows users to create, read, update, and delete expenses of their day to day life. The app is built with a responsive and intuitive user interface using Owl.JS and a robust backend using Django and Django Rest Framework.",
    },
    {
      id: 3,
      title: "Keeper",
      description:
        "This is a project management app built using React for the frontend and Django for the backend. The app allows users to create, read, update, and delete notes related to their projects. The app is built with a responsive and intuitive user interface using React and a robust backend using Django and Django Rest Framework.",
    },
  ];

  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      console.log("update hash called");
      setHash(window.location.hash.slice(1));
    };
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  const onOpen = (id) => {
    window.location.hash = id;
    setHash(id);
  };

  const onBack = () => {
    window.location.hash = "";
    setHash("");
  };

  if (!hash) {
    return (
      <div>
        {works.map((item, index) => {
          return (
            <div key={index} className="mb-10 ml-10">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <Button
                onClick={() => {
                  onOpen(item.id);
                }}
                className="border border-accent-default cursor-pointer"
              >
                Open
              </Button>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <Button
          onClick={() => {
            onBack();
          }}
          className="border border-accent-default cursor-pointer"
        >
          Back
        </Button>
        <h1>Blog: {hash}</h1>
      </div>
    );
  }
};

export default Work;
