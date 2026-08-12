"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  className?: string;
  stagger?: number;
  baseDelay?: number;
};

export default function AnimatedYear({
  value,
  className = "",
  stagger = 90,
  baseDelay = 60,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={`inline-flex ${className}`}>
      {value.split("").map((d, i) => (
        <span
          key={i}
          className={`fade-init ${visible ? "fade-in-active" : ""} inline-block`}
          style={{ transitionDelay: `${baseDelay + i * stagger}ms` }}
        >
          {d}
        </span>
      ))}
    </span>
  );
}
