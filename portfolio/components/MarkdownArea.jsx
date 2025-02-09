import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ScrollArea } from "@/components/ui/scroll-area";

const MarkdownArea = ({ link }) => {
  link =
    "https://raw.githubusercontent.com/hereliesadvaith/Blog/refs/heads/main/deploying-with-docker.md";
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const res = await fetch(link);
        const text = await res.text();
        setMarkdown(text);
      } catch (error) {
        console.error("Failed to fetch markdown:", error);
      }
    };
    fetchMarkdown();
  }, [link]);

  return (
    <div className="flex">
      <ScrollArea className="h-[570px] xl:h-[700px] w-full mt-6 rounded-xl bg-[#232329] mx-auto xl:mx-[240px]">
        <div className="markdown mt-7 mx-5 mb-5">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </ScrollArea>
    </div>
  );
};

export default MarkdownArea;
