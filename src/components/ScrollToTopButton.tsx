import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "focus:ring-opacity-50 fixed right-8 bottom-8 z-50 cursor-pointer rounded-full bg-blue-600 p-3 text-white shadow-lg transition-opacity duration-300 hover:bg-blue-700 focus:outline-none",
        isVisible ? "opacity-100" : "opacity-0",
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
}
