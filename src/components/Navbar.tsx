export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
            <a href="#top">Fredi</a>
          </div>
          <div className="hidden space-x-8 md:flex">
            <a href="#top" className="transition-colors hover:text-blue-400">
              Go to top
            </a>
            <a href="#about" className="transition-colors hover:text-blue-400">
              About
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-blue-400"
            >
              Projects
            </a>
            <a href="#skills" className="transition-colors hover:text-blue-400">
              Skills
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-blue-400"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
