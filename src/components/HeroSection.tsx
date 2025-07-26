import { Mail, Github, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  const handleGithub = () => {
    window.open("https://github.com/fredi1574", "_blank");
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-[at_25%_25%] from-blue-300/30 to-purple-700/40" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="mb-8">
          <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-900">
              <span className="text-4xl font-bold">FB</span>
            </div>
          </div>
        </div>

        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
            Fredi Bulshtein
          </span>
        </h1>

        <p className="mb-4 text-xl text-gray-300 md:text-2xl">
          Full-Stack Developer
        </p>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
          B.Sc. in Software Engineering • Passionate about building clean,
          responsive, real-world web applications
        </p>

        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button
            onClick={handleGithub}
            size="lg"
            variant="outline"
            className="border-gray-600 bg-transparent hover:bg-gray-800"
          >
            <Github className="mr-2 h-5 w-5" />
            View GitHub
          </Button>
        </div>

        <a href="#about">
          <ChevronDown className="mx-auto h-8 w-8 animate-bounce text-gray-400" />
        </a>
      </div>
    </section>
  );
}
