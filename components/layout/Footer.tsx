import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-18 border-t border-gray-200 bg-charcoal">
      <div className="container mx-auto px-12 sm:px-18 lg:px-22 xl:px-40 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-logo mb-4">GENEVA</h3>
            <p className="text-sm text-gray-600">
              A modern cloud gaming platform without subscriptions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-accent"
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  href="/library"
                  className="text-sm text-gray-600 hover:text-accent"
                >
                  Your Library
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-gray-600 hover:text-accent"
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
                <div
                  className="cursor-not-allowed text-sm text-gray-600 hover:text-accent"
                >
                  Documentation
                </div>
              </li>
              <li>
                <div
                  className="cursor-not-allowed text-sm text-gray-600 hover:text-accent"
                >
                  GitHub
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <div
                  className="cursor-not-allowed text-sm text-gray-600 hover:text-accent"
                >
                  Terms of Service
                </div>
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