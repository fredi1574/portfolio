import { ExternalLink, Github } from "lucide-react";
import projects from "../lib/projectList";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Projects() {
  const handleGithubRepo = (url: string) => {
    window.open(url, "_blank");
  };

  const handleLiveRepo = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="projects" className="bg-gray-900/50 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-4xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-gray-700 bg-gray-800/50 transition-all duration-300 hover:border-blue-500/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-48 w-full object-scale-down transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-blue-400">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-gray-600 text-gray-300 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => handleGithubRepo(project.github)}
                    size="sm"
                    variant="outline"
                    className="border-gray-600 bg-transparent text-white hover:bg-gray-700"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    onClick={() => handleLiveRepo(project.live)}
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
