import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "../lib/constants";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full border-b border-transparent transition-all duration-300",
        scrolled ? "border-gray-800 bg-black/50 backdrop-blur-lg" : "bg-transparent"
      )}
    >
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

