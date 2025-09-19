"use client";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  variant?: "underline" | "none";
};

export function SectionHeader({ kicker, title, subtitle, align = "left", variant = "underline" }: Props) {
  const reduce = useReducedMotion();

  const alignment = align === "center" ? "items-center text-center" : align === "right" ? "items-end text-right" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} gap-2`}>
      {kicker && (
        <span className="text-xs uppercase tracking-[0.18em] text-primary/60">{kicker}</span>
      )}
      <div className="w-full">
        <div className="flex flex-wrap items-baseline gap-3">
          <h2 className="m-0">{title}</h2>
          {subtitle && (
            <p className="m-0 ml-auto text-right text-primary/60 text-base">{subtitle}</p>
          )}
        </div>
        {variant === "underline" && (
          <motion.div
            aria-hidden
            initial={{ scaleX: 0, opacity: 0.4 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: reduce ? 0.2 : 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
            className="origin-left h-[2px] bg-primary/15 mt-2"
          />
        )}
      </div>
    </div>
  );
}
