"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useNavigation } from '@/contexts/NavigationContext';

// @TODO Mocking for now, but this will be for the protected dashboard page/auth logic in the future
const isAuthenticated = true;
const userRole = "publisher";

export default function Navbar() {
  const currentRoute = usePathname();
  const { canGoBack, canGoForward, goBack, goForward } = useNavigation();

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
        {/* Left side of Navbar */}
        <div className="flex items-center gap-8">
          {/* Back/Forward Navigation Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={goBack}
              disabled={!canGoBack}
              className="cursor-pointer"
              aria-label="Go back"
            >
              {"<-"}
            </button>
            <button
              onClick={goForward}
              disabled={!canGoForward}
              className="cursor-pointer"
              aria-label="Go forward"
            >
              {"->"}
            </button>
          </div>
          {/* Navigation List Items */}
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
        {/* Right Side of Navbar */}
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
