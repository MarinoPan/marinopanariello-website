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
  link?: string;
  linkLabel?: string;
}

export const SingleWork = ({
  project,
  year,
  results,
  roles,
  about,
  images,
  link,
  linkLabel,
}: SingleWorkProps) => {
  const reduce = useReducedMotion();
  const safeImages = images.slice(0, 3);
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const mobileBaseHeight = 280;
  const mobileStackOffset = 60;
  const mobileHeight = mobileBaseHeight + Math.max(0, safeImages.length - 1) * mobileStackOffset;

  type LayoutSlot = {
    top: string;
    left: string;
    width: string;
    z: number;
    shadow: string;
  };

  const layoutTemplates: Record<number, LayoutSlot[][]> = {
    1: [
      [{ top: "6%", left: "14%", width: "60%", z: 30, shadow: "shadow-xl" }],
      [{ top: "12%", left: "20%", width: "56%", z: 30, shadow: "shadow-lg" }],
    ],
    2: [
      [
        { top: "0%", left: "6%", width: "44%", z: 30, shadow: "shadow-xl" },
        { top: "40%", left: "50%", width: "40%", z: 20, shadow: "shadow-md" },
      ],
      [
        { top: "8%", left: "12%", width: "42%", z: 30, shadow: "shadow-md" },
        { top: "50%", left: "28%", width: "50%", z: 20, shadow: "shadow-xl" },
      ],
    ],
    3: [
      [
        { top: "0%", left: "10%", width: "36%", z: 30, shadow: "shadow-xl" },
        { top: "30%", left: "54%", width: "34%", z: 20, shadow: "shadow-lg" },
        { top: "60%", left: "20%", width: "40%", z: 10, shadow: "shadow-md" },
      ],
      [
        { top: "6%", left: "20%", width: "38%", z: 30, shadow: "shadow-lg" },
        { top: "46%", left: "4%", width: "36%", z: 10, shadow: "shadow-md" },
        { top: "38%", left: "54%", width: "38%", z: 20, shadow: "shadow-xl" },
      ],
      [
        { top: "10%", left: "10%", width: "34%", z: 20, shadow: "shadow-md" },
        { top: "0%", left: "50%", width: "40%", z: 30, shadow: "shadow-xl" },
        { top: "56%", left: "30%", width: "42%", z: 10, shadow: "shadow-lg" },
      ],
    ],
  };

  const hashString = (value: string) => {
    let hash = 0;
    for (let i = 0; i < value.length; i += 1) {
      hash = (hash << 5) - hash + value.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
  };

  const templateForImages = (count: number) => {
    const templates = layoutTemplates[count] ?? layoutTemplates[3];
    if (!templates || templates.length === 0) {
      return [] as LayoutSlot[];
    }
    const index = hashString(`${project}-${count}`) % templates.length;
    return templates[index] ?? templates[0];
  };

  const positions = templateForImages(safeImages.length);

  return (
    <motion.div
      className="grid grid-cols-12 gap-6 mt-24 md:mt-32 lg:mt-40"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduce ? 0.2 : 0.6, ease: "easeOut" }}
    >
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-10">
        <h3 className="m-0 !text-3xl sm:!text-4xl lg:!text-5xl">{project}</h3>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-4 gap-4">
            <h5 className="col-span-1">Year</h5>
            <p className="col-span-3 self-center text-primary/80">{year}</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <h5 className="col-span-1">Results</h5>
            <p className="col-span-3 text-primary/80">{results}</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <h5 className="col-span-1">Roles</h5>
            <p className="col-span-3 text-primary/80">{roles}</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <h5 className="col-span-1">About</h5>
            <p className="col-span-3 text-primary/80">{about}</p>
          </div>
          {link && (
            <div className="grid grid-cols-4 gap-4">
              <h5 className="col-span-1">Link</h5>
              <div className="col-span-3">
                <a
                  href={link}
                  target={link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4"
                >
                  {linkLabel ?? "Visit"}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-12 lg:col-span-8">
        <div
          className="relative md:hidden"
          style={{ height: `${mobileHeight}px` }}
        >
          {safeImages.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              className="group absolute inset-x-4 aspect-[4/3] overflow-hidden border border-highlight bg-white shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              style={{
                top: `${i * 32}px`,
                left: `${i * 6}px`,
                right: `${i * 6}px`,
                zIndex: safeImages.length - i,
              }}
              onClick={() => {
                setStartIndex(i);
                setOpen(true);
              }}
            >
              <Image
                src={src}
                alt={`${project} shot ${i + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 90vw"
                priority={i === 0}
              />
            </button>
          ))}
        </div>
        <div className="relative hidden h-[360px] w-full md:block lg:h-[420px] xl:h-[460px]">
          {safeImages.map((src, i) => {
            const slot = positions[i] ?? {
              top: `${12 + i * 20}%`,
              left: `${10 + i * 16}%`,
              width: "38%",
              z: 10 - i,
              shadow: "shadow-md",
            };
            return (
              <motion.button
                key={`${src}-${i}`}
                type="button"
                className={`group absolute aspect-[16/11] overflow-hidden border border-highlight bg-white/75 ${slot.shadow} transition duration-500 hover:-translate-y-2 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60`}
                style={{
                  top: slot.top,
                  left: slot.left,
                  width: slot.width,
                  zIndex: slot.z,
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: reduce ? 0.2 : 0.5,
                  ease: "easeOut",
                  delay: reduce ? 0 : i * 0.08,
                }}
                onClick={() => {
                  setStartIndex(i);
                  setOpen(true);
                }}
              >
                <Image
                  src={src}
                  alt={`${project} shot ${i + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1200px) 40vw, 28vw"
                  priority={i === 0}
                />
              </motion.button>
            );
          })}
        </div>
      </div>
      {open && (
        <Lightbox
          images={safeImages}
          startIndex={startIndex}
          onClose={() => setOpen(false)}
        />
      )}
    </motion.div>
  );
};
