"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", name: "home", external: false },
  { href: "/works", name: "works", external: false },
  { href: "/about", name: "about", external: false },
  { href: "https://github.com/MarinoPan", name: "github", external: true },
];

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
          {navItems.map(({ href, name, external }) => {
            const isActive = !external && pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className="transition-all text-primary hover:underline flex align-middle relative py-1 px-2"
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
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
