"use client";
import { motion } from "framer-motion";
import { HeroDoodles } from "./HeroDoodles";

export const Hero = () => {
    return (
        <section className="h-full relative">
            <HeroDoodles />
            <div className="text-primary w-full h-[calc(100vh-88px)] justify-center flex flex-col gap-4">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="super-title py-2">Marino Panariello</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-12"
                >
                    <h3 className="text-6xl py-4 col-span-9">
                        Hi, I'm a design engineer who merges code and design to
                        simplify digital life.
                    </h3>
                </motion.div>
            </div>
        </section>
    );
};
