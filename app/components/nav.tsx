import Link from "next/link";
import Image from "next/image";

const navItems = {
    "/": {
        name: "home",
    },
    "/blog": {
        name: "blog",
    },
    "https://vercel.com/templates/next.js/portfolio-starter-kit": {
        name: "github",
    },
};

export function Navbar() {
    return (
        <aside className=" mb-8 tracking-tight">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="pt-6 flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative justify-between"
                    id="nav"
                >
                    <div>
                        <Link href="/">
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
                                    className="transition-all text-primary hover:underline flex align-middle relative py-1 px-2 "
                                >
                                    {name}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </aside>
    );
}
