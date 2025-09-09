"use client";
import Image from "next/image";
import { Lightbox } from "./Lightbox";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SingleWorkProps {
  project: string;
  year: string;
  results: string;
  roles: string;
  about: string;
  images: readonly string[]; // 2–3 immagini da mostrare sfasate
}

export const SingleWork = ({ project, year, results, roles, about, images }: SingleWorkProps) => {
  const reduce = useReducedMotion();
  const safeImages = images.slice(0, 3);
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  return (
    <motion.div
      className="grid grid-cols-12 gap-6 mt-40"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduce ? 0.2 : 0.6, ease: "easeOut" }}
    >
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-10">
        <h3 className="m-0">{project}</h3>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-4 gap-4">
            <h4 className="col-span-1">Year</h4>
            <p className="col-span-3 self-center text-primary/80">{year}</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <h4 className="col-span-1">Results</h4>
            <p className="col-span-3 text-primary/80">{results}</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <h4 className="col-span-1">Roles</h4>
            <p className="col-span-3 text-primary/80">{roles}</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <h4 className="col-span-1">About</h4>
            <p className="col-span-3 text-primary/80">{about}</p>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {safeImages.map((src, i) => {
            const tilt = [
              "rotate-[-1.5deg] translate-y-1",
              "rotate-[1.2deg] -translate-y-2 translate-x-1",
              "rotate-[-0.8deg] translate-y-3 -translate-x-1",
            ];
            const transformClass = reduce ? "" : tilt[i % tilt.length];
            return (
              <motion.div
                key={`${src}-${i}`}
                className={`relative aspect-[16/10] overflow-hidden shadow-sm ${transformClass} transition-transform duration-500 ease-out hover:rotate-0 hover:translate-x-0 hover:translate-y-0 hover:shadow-md`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: reduce ? 0.2 : 0.5, ease: "easeOut", delay: reduce ? 0 : i * 0.06 }}
                onClick={() => { setStartIndex(i); setOpen(true); }}
                role="button"
                tabIndex={0}
                aria-label={`Open ${project} image ${i + 1}`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setStartIndex(i); setOpen(true); } }}
              >
                <Image src={src} alt={`${project} shot ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </motion.div>
            );
          })}
        </div>
      </div>
      {open && (
        <Lightbox images={safeImages} startIndex={startIndex} onClose={() => setOpen(false)} />)
      }
    </motion.div>
  );
};
