import { Code, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function CurrentProject() {
  const handleGithubRepo = (url: string) => {
    window.open(url, "_blank");
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const techStack = [
    "Next.js",
    "React",
    "Node.js",
    "Socket.IO",
    "Tailwind CSS",
    "TypeScript",
  ];

  return (
    <motion.section
      id="current"
      className="bg-gray-900/50 px-4 py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2 className="mb-16 text-4xl font-bold" variants={itemVariants}>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Ongoing Project: CoWorkly
          </span>
        </motion.h2>

        <motion.div className="flex justify-center" variants={itemVariants}>
          <Card className="group w-full max-w-2xl overflow-hidden border-gray-700 bg-gray-800/50 transition-all duration-300 hover:border-fuchsia-500/50">
            <div className="relative overflow-hidden p-6">
              <img
                src="coworkly.png"
                alt="CoWorkly Logo"
                className="h-48 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>

            <CardHeader className="text-left">
              <CardTitle className="mb-2 text-3xl text-blue-400">
                CoWorkly
              </CardTitle>
              <CardDescription className="text-lg text-gray-300">
                <p className="mb-6 text-lg leading-relaxed text-gray-300">
                  A modern real-time collaboration platform designed for
                  developers, students, and remote teams. It combines live
                  video/voice chat, a shared code editor, whiteboard, and
                  collaborative notes - all in one unified workspace. Built with
                  performance and usability in mind, CoWorkly helps teams
                  brainstorm, build, and communicate without context-switching
                  across multiple tools.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-gray-400">
                  The project is currently in active development, with a strong
                  focus on seamless WebRTC communication, low-latency Socket.IO
                  updates, and an intuitive UI powered by Next.js and Tailwind
                  CSS.
                </p>
              </CardDescription>
            </CardHeader>

            <CardContent className="text-left">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-white">
                <Code className="h-5 w-5 text-purple-400" />
                Key Technologies:
              </h3>
              <div className="mb-6 flex flex-wrap gap-2">
                {techStack.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="cursor-default border-gray-600 text-gray-300 transition-colors duration-300 hover:scale-110 hover:border-fuchsia-400 hover:text-fuchsia-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
                <Button
                  onClick={() =>
                    handleGithubRepo("https://github.com/fredi1574/CoWorkly")
                  }
                  size="lg"
                  variant="outline"
                  className="border-gray-600 bg-transparent text-white hover:bg-gray-700"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub Repo
                </Button>
                <Button
                  onClick={() =>
                    alert("Stay tuned! CoWorkly is in development.")
                  }
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Progress
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
