import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../lib/constants";
import { cn, openUrl } from "../lib/utils";
import { Button } from "./ui/button";

export default function HeroSection() {
  const [emailCopied, setEmailCopied] = useState<boolean>(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
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
      <div className="absolute inset-0 bg-radial-[at_25%_25%] from-cyan-400/40 via-blue-600/40 to-indigo-900/40" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
          className="mb-8"
        >
          <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-r from-blue-300 via-blue-600 to-blue-900 p-1">
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
          <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent">
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
          <motion.div
            onClick={handleCopyEmail}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "flex cursor-pointer items-center justify-center rounded-md border border-gray-600 bg-transparent px-3 py-1 text-center hover:bg-red-300 hover:text-red-800",
              emailCopied && "bg-green-400 hover:bg-green-500"
            )}
          >
            <Mail className="mr-2 h-5 w-5" />
            {emailCopied ? "Email Copied!" : EMAIL}
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => openUrl(LINKEDIN_URL)}
              size="lg"
              variant="outline"
              className="border-gray-600 bg-transparent hover:bg-blue-400 hover:text-blue-800"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn Profile
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => openUrl(GITHUB_URL)}
              size="lg"
              variant="outline"
              className="border-gray-600 bg-transparent hover:bg-gray-800"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub Profile
            </Button>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-8 rounded-3xl bg-gray-500/20 py-2 hover:bg-gray-500/40">
            <a href="#about">
              <ChevronDown className="mx-auto h-6 w-6 animate-bounce text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
