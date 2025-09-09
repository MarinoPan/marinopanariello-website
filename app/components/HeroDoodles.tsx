"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Doodle = {
  type: "star-rough" | "star-sharp" | "puzzle";
  size: number; // px
  top: number; // %
  left: number; // %
  rotate: number; // deg
};

function StarRough({ size }: { size: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.svg width={size} height={size} viewBox="0 0 220 220" initial={{ opacity: 0, rotate: -6 }} animate={{ opacity: 1, rotate: reduce ? -6 : [-6, 6, -6] }} transition={{ duration: reduce ? 0.5 : 14, repeat: reduce ? 0 : Infinity, repeatType: "mirror" }}>
      <motion.path d="M110 18 L126 82 L201 78 L142 118 L166 188 L110 146 L56 190 L82 118 L19 80 L92 84 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduce ? 0.6 : 2.0, ease: "easeOut" }} />
    </motion.svg>
  );
}

function StarSharp({ size }: { size: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.svg width={size} height={size} viewBox="0 0 200 200" initial={{ opacity: 0, rotate: 0 }} animate={{ opacity: 1, rotate: reduce ? 0 : [0, 10, 0] }} transition={{ duration: reduce ? 0.5 : 16, repeat: reduce ? 0 : Infinity, repeatType: "mirror" }}>
      <motion.polygon points="100,10 120,70 190,70 135,110 155,180 100,140 45,180 65,110 10,70 80,70" fill="none" stroke="currentColor" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduce ? 0.6 : 2.0, ease: "easeOut" }} />
    </motion.svg>
  );
}

function Puzzle({ size }: { size: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.svg width={size} height={size} viewBox="0 0 200 200" initial={{ opacity: 0, rotate: -8 }} animate={{ opacity: 1, rotate: reduce ? -8 : [-8, 8, -8] }} transition={{ duration: reduce ? 0.5 : 18, repeat: reduce ? 0 : Infinity, repeatType: "mirror" }}>
      <motion.path d="M40 60 h70 c10 0 10 -20 20 -20 s10 20 20 20 h10 v70 h-10 c-10 0 -10 20 -20 20 s-10 -20 -20 -20 h-70 z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduce ? 0.6 : 2.0, ease: "easeOut" }} />
    </motion.svg>
  );
}

export const HeroDoodles = () => {
  const [doodles, setDoodles] = useState<Doodle[]>([]);
  const reduce = useReducedMotion();

  const shapes = useMemo(() => ["star-rough", "star-sharp", "puzzle"] as Doodle["type"][], []);

  useEffect(() => {
    // genera 2 doodles con posizioni pseudo‑random
    const count = 2;
    const arr: Doodle[] = Array.from({ length: count }).map((_, i) => {
      const type = shapes[(Math.floor(Math.random() * shapes.length) + i) % shapes.length];
      const size = 160 + Math.floor(Math.random() * 60); // 160–220
      const top = 8 + Math.floor(Math.random() * 40); // 8–48%
      const left = 55 + Math.floor(Math.random() * 30); // 55–85%
      const rotate = [-12, -8, -4, 0, 4, 8, 12][Math.floor(Math.random() * 7)];
      return { type, size, top, left, rotate };
    });
    setDoodles(arr);
  }, [shapes]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 text-primary/60">
      {doodles.map((d, idx) => (
        <div key={idx} style={{ position: "absolute", top: `${d.top}%`, left: `${d.left}%`, transform: `rotate(${d.rotate}deg)` }} aria-hidden>
          {d.type === "star-rough" && <StarRough size={d.size} />}
          {d.type === "star-sharp" && <StarSharp size={d.size} />}
          {d.type === "puzzle" && <Puzzle size={d.size} />}
        </div>
      ))}
    </div>
  );
};
