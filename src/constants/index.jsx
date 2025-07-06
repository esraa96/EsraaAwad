import {
  FaLaptopCode,
  FaServer,
  FaPaintBrush,
  FaCloud,
  FaTools,
  FaLightbulb,
  FaAngular,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaAws,
  FaDatabase,
  FaCogs,
  FaSitemap,
  FaCodeBranch,
  FaBootstrap,
  
  
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiDotnet,
  SiGraphql,
  SiFigma,
  SiAdobexd,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiKubernetes,
  SiJenkins,



} from "react-icons/si";
import { TbBrandCSharp, TbApi } from "react-icons/tb";

import { BookOpen, Calendar, Trophy, Award, HardHat } from "lucide-react";
export const SKILLS_DATA = [
  {
    category: "Frontend Development",
    icon: <FaLaptopCode />,
    skills: [
    
      { name: "React", icon: <FaReact className="text-sky-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-500" />,
      },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
    ],
  },
  {
    category: "Software Fundamentals",
    icon: <FaCogs />,
    skills: [
      { name: "Algorithms", icon: <FaSitemap className="text-gray-400" /> },
      { name: "Data Structures", icon: <FaCodeBranch className="text-gray-400" /> },
      { name: "OOP", icon: <FaCodeBranch className="text-gray-400" /> },
      { name: "SQL", icon: <FaDatabase className="text-red-500" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    ],
  },
  {
    category: "UI/UX Design",
    icon: <FaPaintBrush />,
    skills: [
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      { name: "Responsive Design", icon: <FaReact className="text-sky-500" /> },
      { name: "Prototyping", icon: <SiFigma className="text-green-500" /> },
    ],
  },

  {
    category: "Tools & Technologies",
    icon: <FaTools />,
    skills: [
     
      { name: "Jest", icon: <SiJest className="text-red-600" /> },
      { name: "Webpack", icon: <SiWebpack className="text-sky-600" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
    ],
  },
  {
    category: "Creative Skills",
    icon: <FaLightbulb />,
    skills: [
      {
        name: "Problem Solving",
        icon: <FaLightbulb className="text-yellow-400" />,
      },
      {
        name: "Front-End Architecture",
        icon: <FaReact className="text-sky-500" />,
      },
      {
        name: "Responsive Web Design",
        icon: <FaLaptopCode className="text-white" />,
      },
      { name: "Ideation", icon: <FaPaintBrush className="text-pink-400" /> },
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-commerce Website",
    image: "/projects/p1.jpg",
    description:
      "A fully functional e-commerce platform with features like product catalog, shopping cart, and user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management App",
    image: "/projects/p2.jpg",
    description:
      "An application for managing tasks and projects, allowing users to create, update, and track their to-do lists.",
    technologies: ["React", "Firebase", "Framer Motion"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio Website",
    image: "/projects/p3.jpg",
    description:
      "A personal portfolio website to showcase skills, projects, and experience, built with modern web technologies.",
    technologies: ["React", "Three.js", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
];
export const EDUCATION_DATA = [
  {
    icon: <HardHat />,
    title: "Software Engineering Fundamentals",
    institution: "ITI",
    date: "2024",
    description:
      "Received intensive training in core computer science concepts such as data structures, algorithms, and object-oriented programming.",
    achievements: [{ icon: <Award />, text: "Subject: Core Computer Science" }],
    tags: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "SQL",
      "Git",
      "Problem Solving",
    ],
  },
  {
    icon: <Trophy />,
    title: "Front-End & Cross-Platform Development",
    institution: "ITI",
    date: "2025",
    description:
      "Intensive training on building modern, responsive web interfaces and native mobile applications for both iOS and Android from a single codebase.",
    achievements: [
      { icon: <Award />, text: "Subject: Front-End & Mobile Cross-Platform" },
    ],
    tags: [
      "React",
      "React Native",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Git",
    ],
  },
  {
    icon: <BookOpen />,
    title: "Bachelor's Degree in Engineering",
    institution: "Nile Academy For Engineering ",
    date: "2021 - 2024",
    description:
      "Specialized in the Communications and Electronics department, focusing on circuits, signal processing, and communication systems.",
    achievements: [
      { icon: <Award />, text: "Major: Electronics & Communications" },
    ],
    tags: [
      "Electronics",
      "Telecommunications",
      "Signal Processing",
      "Control Systems",
    ],
  },
];
