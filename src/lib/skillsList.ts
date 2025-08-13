import { CgCPlusPlus } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiJavaFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import {
  TbBrandFirebase,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandPrisma,
  TbBrandPython,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";

const skills = [
  { name: "React", icon: FaReact, category: "Frontend", color: "text-sky-500" },
  {
    name: "Next.js",
    icon: TbBrandNextjs,
    category: "Frontend",
    color: "text-neutral-400",
  },
  {
    name: "TypeScript",
    icon: TbBrandTypescript,
    category: "Language",
    color: "text-blue-600",
  },
  {
    name: "JavaScript",
    icon: RiJavascriptFill,
    category: "Language",
    color: "text-yellow-400",
  },
  {
    name: "TailwindCSS",
    icon: TbBrandTailwind,
    category: "Styling",
    color: "text-cyan-400",
  },
  {
    name: "Node.js",
    icon: TbBrandNodejs,
    category: "Backend",
    color: "text-green-500",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "Database",
    color: "text-sky-700",
  },
  {
    name: "Firebase",
    icon: TbBrandFirebase,
    category: "Backend",
    color: "text-amber-500",
  },
  {
    name: "Prisma",
    icon: TbBrandPrisma,
    category: "Database",
    color: "text-teal-500",
  },
  {
    name: "Java",
    icon: RiJavaFill,
    category: "Language",
    color: "text-red-500",
  },
  {
    name: "Python",
    icon: TbBrandPython,
    category: "Language",
    color: "text-yellow-500",
  },
];

export default skills;
