"use client";
import { motion, useReducedMotion } from "framer-motion";

export const HeroOrnaments = () => {
    const reduce = useReducedMotion();

    return (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            {/* Soft gradient blob */}
            <motion.div
                aria-hidden
                initial={{ opacity: 0, scale: 0.9, x: 120, y: -60 }}
                animate={{
                    opacity: 0.25,
                    scale: reduce ? 1 : [1, 1.05, 1],
                    x: reduce ? 120 : [120, 110, 120],
                    y: reduce ? -60 : [-60, -40, -60],
                }}
                transition={{ duration: reduce ? 0.6 : 12, repeat: reduce ? 0 : Infinity, repeatType: "mirror" }}
                className="absolute right-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full blur-3xl"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(30,144,255,0.25) 0%, rgba(30,144,255,0.1) 40%, rgba(30,144,255,0) 70%)",
                }}
            />

            {/* Subtle floating dot */}
            <motion.div
                aria-hidden
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.4, y: reduce ? 0 : [0, -6, 0] }}
                transition={{ duration: reduce ? 0.4 : 4, repeat: reduce ? 0 : Infinity, repeatType: "mirror" }}
                className="absolute left-8 md:left-20 top-10 h-2 w-2 rounded-full bg-gray-dark/60"
            />

            {/* Accent square rotating slowly */}
            <motion.div
                aria-hidden
                initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
                animate={{ opacity: 0.15, rotate: reduce ? -6 : [-6, 6, -6], scale: 1 }}
                transition={{ duration: reduce ? 0.5 : 18, repeat: reduce ? 0 : Infinity, repeatType: "mirror" }}
                className="absolute bottom-8 right-16 h-6 w-6 border border-gray-light/70"
            />
        </div>
    );
};

