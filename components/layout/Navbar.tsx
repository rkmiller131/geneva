"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavigationArrows from "../ui/NavigationArrows";

// @TODO Mocking for now, but this will be for the protected dashboard page/auth logic in the future
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

  const isActiveRoute = (href: string) => {
    if (href === "/" && currentRoute === "/") return true;
    if (href === "/library" && currentRoute.startsWith("/library")) return true;
    if (href === "/dashboard" && currentRoute.startsWith("/dashboard")) return true;
  }

  return (
    <header className="shadow-md bg-[rgba(64,129,196,0.65)] rounded-full">
      <div className="container mx-auto flex h-16 items-center justify-between px-8">
        {/* Left side of Navbar */}
        <div className="flex items-center gap-4">
          <NavigationArrows />
          <nav className="flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-lg font-ember px-4 py-1 rounded-sm ${
                  isActiveRoute(href) ? 'gradient-sky drop-shadow-[-2px_2px_2px_rgba(0,49,128,0.5)]' : 'hover:text-[var(--color-accent)]'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        {/* Right Side of Navbar */}
        {/* @TODO FAKE/MOCK LOGIN */}
        <Image
          src="/images/cdpr-avatar.png"
          alt="mock avatar icon"
          width={186}
          height={55}
          className="w-[150px] h-auto cursor-not-allowed"
        />
      </div>
    </header>
  );
}
