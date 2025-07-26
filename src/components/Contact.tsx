import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/fredibulshtein/", "_blank");
  };

  const handleGithub = () => {
    window.open("https://github.com/fredi1574", "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:fredi1574@gmail.com", "_blank");
  };

  return (
    <section id="contact" className="bg-gray-900/50 px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-8 text-4xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </span>
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-300">
          I'm actively seeking a full-time Frontend or Full-Stack role. Let's
          connect!
        </p>

        <div className="flex flex-col justify-center gap-6 sm:flex-row">
          <Button
            onClick={handleEmail}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Email
          </Button>
          <Button
            onClick={handleLinkedin}
            size="lg"
            variant="outline"
            className="border-gray-600 bg-transparent hover:bg-gray-800"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
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
      </div>
    </section>
  );
}
