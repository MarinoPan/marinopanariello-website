"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = {
  "/": { name: "home" },
  "/works": { name: "works" },
  "/blog": { name: "blog" },
};

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 mb-8 tracking-tight">
      <nav
        className="py-4 flex flex-row items-center justify-between px-0"
        id="nav"
      >
        <div>
          <Link href="/" aria-label="Home">
            <Image
              src="/images/logo-marino.svg"
              alt="Marino Logo"
              width={36}
              height={36}
            />
          </Link>
        </div>
        <div className="flex flex-row space-x-0">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                aria-current={pathname === path ? "page" : undefined}
                className="transition-all text-primary hover:underline flex align-middle relative py-1 px-2"
              >
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
