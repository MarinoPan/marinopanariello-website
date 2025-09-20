"use client";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

export const Hero = () => {
  const reduce = useReducedMotion();
  const controls = useAnimation();

  useEffect(() => {
    if (reduce) {
      controls.set("visible");
      return;
    }
    controls.set("hidden");
    controls.start("visible");
  }, [controls, reduce]);

  return (
    <section className="h-full relative">
      <div className="text-primary w-full pt-10 md:h-[calc(100vh-88px)] justify-center flex flex-col gap-4">
        <motion.div
          initial={false}
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="super-title py-2">Marino Panariello</h1>
        </motion.div>

        <motion.div
          initial={false}
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 150 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: reduce ? 0 : 0.32,
          }}
          className="grid grid-cols-12"
        >
          <h3 className="text-4xl md:text-6xl py-4 col-span-9">
            Hi, I&apos;m a design engineer who merges code and design to simplify
            digital life.
          </h3>
        </motion.div>
      </div>
    </section>
  );
};
