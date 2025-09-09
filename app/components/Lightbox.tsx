"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  startIndex: number;
  onClose: () => void;
};

export function Lightbox({ images, startIndex, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Focus management
    closeRef.current?.focus();
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusables: HTMLElement[] = [];
      if (prevRef.current) focusables.push(prevRef.current);
      if (nextRef.current) focusables.push(nextRef.current);
      if (closeRef.current) focusables.push(closeRef.current);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement;
      if (e.shiftKey) {
        if (active === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (active === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };
    window.addEventListener('keydown', handleTab);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleTab);
    };
  }, []);

  if (!images.length) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      ref={overlayRef}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-5 right-6 text-white/80 hover:text-white text-2xl"
        ref={closeRef}
      >
        ×
      </button>
      {images.length > 1 && (
        <>
          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i - 1 + images.length) % images.length);
            }}
            className="absolute left-4 md:left-6 text-white/80 hover:text-white text-3xl"
            ref={prevRef}
          >
            ‹
          </button>
          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i + 1) % images.length);
            }}
            className="absolute right-4 md:right-6 text-white/80 hover:text-white text-3xl"
            ref={nextRef}
          >
            ›
          </button>
        </>
      )}
      <div className="relative w-[92vw] h-[72vh]" onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[index]}
          alt={`Image ${index + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}
