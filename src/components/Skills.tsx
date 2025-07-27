import { motion } from "motion/react";
import skills from "../lib/skillsList";
import { CardContent } from "./ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-6 md:grid-cols-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, border: "1px solid fuchsia" }}
              className="group rounded-lg border-gray-700 bg-gray-800/50 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-3 text-4xl transition-transform duration-300 group-hover:scale-130">
                  {skill.icon}
                </div>
                <h3 className="mb-1 font-semibold text-white">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.category}</p>
              </CardContent>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
