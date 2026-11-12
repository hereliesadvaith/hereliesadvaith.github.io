"use client";

import { useEffect, useRef, useState } from "react";

// Scales a single line of text so it spans exactly the width of its parent.
const FitText = ({ children, className = "" }) => {
  const wrapRef = useRef(null);
  const textRef = useRef(null);
  const [size, setSize] = useState(null);

  useEffect(() => {
    const fit = () => {
      const wrap = wrapRef.current;
      const text = textRef.current;
      if (!wrap || !text) return;
      const prev = text.style.fontSize;
      text.style.fontSize = "100px";
      const ratio = wrap.clientWidth / text.scrollWidth;
      text.style.fontSize = prev;
      setSize(Math.floor(100 * ratio * 100) / 100);
    };
    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="w-full" style={{ overflowX: "clip" }}>
      <span
        ref={textRef}
        className={`block whitespace-nowrap w-max ${className}`}
        style={{ fontSize: size ? `${size}px` : "22vw" }}
      >
        {children}
      </span>
    </div>
  );
};

export default FitText;
