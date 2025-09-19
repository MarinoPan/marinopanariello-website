"use client";

const BLOBS = [
  {
    key: "warm",
    className:
      "blob blob-primary absolute top-[-22%] right-[-18%] h-[28rem] w-[28rem] md:h-[34rem] md:w-[34rem] lg:h-[38rem] lg:w-[38rem]",
  },
  {
    key: "cool",
    className:
      "blob blob-secondary absolute bottom-[-20%] left-[-14%] h-[26rem] w-[26rem] md:h-[32rem] md:w-[32rem] lg:h-[36rem] lg:w-[36rem]",
  },
];

export const Blob = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden mix-blend-screen" aria-hidden>
      {BLOBS.map((config) => (
        <div key={config.key} className={config.className} />
      ))}
    </div>
  );
};
