import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function HeroSection() {
  const [emailCopied, setEmailCopied] = useState<boolean>(false);

  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/fredibulshtein/", "_blank");
  };

  const handleGithub = () => {
    window.open("https://github.com/fredi1574", "_blank");
  };

  const handleCopyEmail = async () => {
    try {
      navigator.clipboard.writeText("fredi1574@gmail");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };
  return (
    <motion.section
      id="top"
      className="relative flex min-h-screen items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-radial-[at_25%_25%] from-blue-300/30 to-purple-700/40" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
          className="mb-8"
        >
          <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-900">
              <span className="text-4xl font-bold">FB</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-6 text-5xl font-bold md:text-7xl"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
            Fredi Bulshtein
          </span>
        </motion.h1>

        <p className="mb-4 text-xl text-gray-300 md:text-2xl">
          Full-Stack Developer
        </p>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
          B.Sc. in Software Engineering • Love building clean, responsive,
          real-world web applications that solve real-world problems
        </p>

        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          <div
            onClick={handleCopyEmail}
            className={`flex cursor-pointer items-center justify-center rounded-md border border-gray-600 bg-transparent px-3 py-1 text-center hover:bg-red-300 hover:text-red-800 ${emailCopied ? "bg-green-400 hover:bg-green-500" : ""}`}
          >
            <Mail className="mr-2 h-5 w-5" />
            {emailCopied ? "Email Copied!" : "fredi1574@gmail.com"}
          </div>
          <Button
            onClick={handleLinkedin}
            size="lg"
            variant="outline"
            className="border-gray-600 bg-transparent hover:bg-blue-400 hover:text-blue-800"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn Profile
          </Button>
          <Button
            onClick={handleGithub}
            size="lg"
            variant="outline"
            className="border-gray-600 bg-transparent hover:bg-gray-800"
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub Profile
          </Button>
        </div>

        <a href="#about">
          <ChevronDown className="mx-auto h-8 w-8 animate-bounce text-gray-400" />
        </a>
      </div>
    </motion.section>
  );
}
