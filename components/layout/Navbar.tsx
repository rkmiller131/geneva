import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 dark:border-dark-border-subtle bg-black dark:bg-dark-base">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-purple-600"
            >
              STORE
            </Link>
            <Link
              href="/library"
              className="text-sm font-medium hover:text-purple-600"
            >
              LIBRARY
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-purple-600"
            >
              DASHBOARD
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-4">
            <Link href="/sign-in">
              Sign in
            </Link>
            <Link href="/sign-up">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}