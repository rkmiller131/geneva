"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

//@TODO Mocking for now, but this will be for the protected dashboard page/auth logic in the future
const isAuthenticated = true;
const userRole = "publisher";

export default function Navbar() {
  const currentRoute = usePathname();

const navLinks = [
  { href: "/", label: "STORE" },
  { href: "/library", label: "LIBRARY" },
  ...(isAuthenticated && userRole === "publisher"
    ? [{ href: "/dashboard", label: "DASHBOARD" }]
    : []),
];

  return (
    <header className="shadow-md bg-[rgba(64,129,196,0.65)] rounded-full">
      <div className="container mx-auto flex h-16 items-center justify-between px-8">
        <div className="flex items-center gap-8">
          <nav className="flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-lg font-ember px-4 py-1 rounded-sm ${
                  currentRoute === href ? 'gradient-sky drop-shadow-[-2px_2px_2px_rgba(0,49,128,0.5)]' : 'hover:text-[var(--color-accent)]'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        {/* @TODO FAKE/MOCK LOGIN */}
        <Image
          src="/images/avatar.png"
          alt="mock avatar icon"
          width={186}
          height={55}
          className="w-[150px] h-auto cursor-not-allowed"
        />
      </div>
    </header>
  );
}
