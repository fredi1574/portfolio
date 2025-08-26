import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { containerVariants, itemVariants } from "../lib/animations";
import projects from "../lib/projectList";
import { openUrl } from "../lib/utils";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900/50 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-4xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ border: "1px solid #3b82f6" }}
              className="group overflow-hidden rounded-lg border-gray-700 bg-gray-800/50 py-4 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
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
                    onClick={() => openUrl(project.github)}
                    size="sm"
                    variant="outline"
                    className="border-gray-600 bg-transparent text-white hover:bg-gray-700"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    onClick={() => openUrl(project.live)}
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
