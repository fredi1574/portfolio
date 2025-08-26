import { motion } from "motion/react";
import { NAV_LINKS } from "../lib/constants";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/30 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-2xl font-bold text-transparent">
            <a href="#top">Fredi</a>
          </div>
          <div className="hidden space-x-8 md:flex">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.href}
                whileHover={{ scale: 1.2, color: "#3b82f6" }}
                href={link.href}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
