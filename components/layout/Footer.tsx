import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-dark-border-subtle bg-black dark:bg-dark-base">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">GENEVA</h3>
            <p className="text-sm text-gray-600">
              A modern cloud gaming platform with no subscriptions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-purple-600"
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  href="/library"
                  className="text-sm text-gray-600 hover:text-purple-600"
                >
                  Your Library
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-gray-600 hover:text-purple-600"
                >
                  Publisher Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-gray-600 hover:text-purple-600"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/mode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-purple-600"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-purple-600"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; GENEVA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}