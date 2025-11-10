import Link from "next/link";
import { Sun, Palmtree } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Sun className="h-5 w-5 text-orange-500" />
              <Palmtree className="h-5 w-5 text-green-600" />
              <span className="font-bold">Aruba Relocation</span>
            </div>
            <p className="text-sm text-gray-600">
              Your complete guide to relocating to One Happy Island
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/guide"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Relocation Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/chat"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link
                  href="/files"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Documents
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.aruba.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Official Aruba Tourism
                </a>
              </li>
              <li>
                <a
                  href="https://www.government.aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Aruba Government
                </a>
              </li>
              <li>
                <a
                  href="https://www.dimasaruba.aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  DIMAS (Immigration)
                </a>
              </li>
              <li>
                <a
                  href="https://www.arubachamber.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Chamber of Commerce
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Get personalized help through our AI Assistant</li>
              <li>All information is for guidance only</li>
              <li>Verify details with official sources</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-600">
          <p>© {currentYear} Aruba Relocation. All rights reserved.</p>
          <p className="mt-2">
            This is an informational resource. Always verify requirements with
            official Aruba government agencies.
          </p>
        </div>
      </div>
    </footer>
  );
}
