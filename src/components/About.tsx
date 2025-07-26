import { Code, Database, Globe } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export default function About() {
  return (
    <section id="about" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              I'm a passionate Full-Stack Developer with a B.Sc. in Software
              Engineering from Braude College. I specialize in React, Next.js,
              and TypeScript, creating modern web applications that solve
              real-world problems.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              Currently seeking a full-time Frontend or Full-Stack role where I
              can contribute to innovative projects and continue growing as a
              developer.
            </p>

            <div className="flex flex-wrap gap-4">
              <Badge
                variant="secondary"
                className="border-blue-600/30 bg-blue-600/20 text-blue-300"
              >
                <Code className="mr-2 h-4 w-4" />
                Frontend Development
              </Badge>
              <Badge
                variant="secondary"
                className="border-purple-600/30 bg-purple-600/20 text-purple-300"
              >
                <Database className="mr-2 h-4 w-4" />
                Backend Development
              </Badge>
              <Badge
                variant="secondary"
                className="border-fuchsia-600/30 bg-fuchsia-600/20 text-fuchsia-300"
              >
                <Globe className="mr-2 h-4 w-4" />
                Full-Stack Solutions
              </Badge>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-xl" />
            <Card className="relative border-gray-700 bg-gray-800/50">
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-blue-400">
                  Quick Stats
                </h3>
                <div className="space-y-4 text-white">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Experience</span>
                    <span className="font-semibold">2+ Years (practical)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Projects Completed</span>
                    <span className="font-semibold">10+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Technologies</span>
                    <span className="font-semibold">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">GitHub Repos</span>
                    <span className="font-semibold">25+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
