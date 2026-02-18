"use client";

import { ReactNode, useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextGsapProps {
  children: ReactNode;
}

export default function SlideUpSplitTextGsap({ children }: SplitTextGsapProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // ✅ useMemo يحل تحذير ESLint
  const lines = useMemo<string[]>(() => {
    return typeof children === "string" ? children.split("\n") : [];
  }, [children]);

  useEffect(() => {
    if (!containerRef.current || !lines.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".slide-line",
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [lines]);

  if (!lines.length) return null;

  return (
    <span ref={containerRef} className="flex flex-col gap-4">
      {lines.map((line, i) => (
        <span key={i} className="slide-line leading-relaxed block">
          {line}
        </span>
      ))}
    </span>
  );
}
