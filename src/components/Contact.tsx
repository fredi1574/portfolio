import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../lib/constants";
import { openUrl } from "../lib/utils";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      id="contact"
      className="bg-gray-900/50 px-4 py-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 text-4xl font-bold"
        >
          <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
            Let's Work Together
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-xl text-gray-300"
        >
          I'm actively seeking a full-time Frontend or Full-Stack role. Let's
          connect!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col justify-center gap-6 sm:flex-row"
        >
          <Button
            onClick={() => openUrl(`mailto:${EMAIL}`)}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-800 transition-colors hover:from-blue-800 hover:to-blue-900"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Email
          </Button>
          <Button
            onClick={() => openUrl(LINKEDIN_URL)}
            size="lg"
            variant="outline"
            className="border-gray-600 bg-transparent hover:bg-blue-400 hover:text-blue-800"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
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
    </motion.section>
  );
}
