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
   FaMobileAlt,
     FaGithub,   // Add this
  FaSyncAlt,  // Add this
   
  
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
 SiReact,
  SiExpo,
SiNextdotjs 

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
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
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
    category: "Cross Platform Development",
    icon: <FaMobileAlt />,
    skills: [
      { name: "Flutter", icon: <FaMobileAlt className="text-blue-500" /> },
      { name: "React", icon: <FaReact className="text-sky-500" /> },
      { name: "React Native", icon: <SiReact className="text-blue-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Expo", icon: <SiExpo className="text-white" /> },
    ],
  },
  {
    category: "Software Fundamentals",
    icon: <FaCogs />,
    skills: [
      
      { name: "Algorithms", icon: <FaSitemap className="text-gray-400" /> },
       { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "Data Structures", icon: <FaCodeBranch className="text-gray-400" /> },
      { name: "OOP", icon: <FaCodeBranch className="text-gray-400" /> },
      { name: "SQL", icon: <FaDatabase className="text-red-500" /> },
     
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
     
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Source Control", icon: <FaCodeBranch className="text-gray-400" /> },
      { name: "Agile", icon: <FaSyncAlt className="text-blue-400" /> },
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
    title: "Petut Care",
    image: "../images/petut.,.,..png",
    description:
      "A comprehensive pet care management system for tracking pet health, appointments, and wellness activities.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://project-petut.vercel.app/",
    githubLink: "https://github.com/esraa96/project-petut",
  },
  {
    title: "Petut Care APP",
    image: "../images/app.jpg",
    description:
      "A comprehensive pet care management system for tracking pet health, appointments, and wellness activities.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://drive.google.com/file/d/1hrMoP4HkhQCq76f4UKpKnnTqG9vNyUIL/view?usp=sharing",
    githubLink: "https://github.com/ziad7411/Petut",
  },
  {
    title: "Cinema Hub",
    image: "../images/filmmm.png",
    description:
      "A movie discovery platform built with React and Tailwind CSS that fetches movies from API and displays them with detailed information and ratings.",
    technologies: ["React", "Tailwind CSS", "Movie API", "JavaScript"],
    liveLink: "https://cinma-hub-r.vercel.app/",
    githubLink: "https://github.com/esraa96/CinmaHubR",
  },
  {
    title: "Fashion E-commerce",
    image: "../images/1122222222222234445678.png",
    description:
      "A modern e-commerce platform for clothing sales built with React and Tailwind CSS, featuring product catalog, shopping cart, and secure checkout.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Local Storage"],
    liveLink: "https://e-commerce-react-8aba.vercel.app/",
    githubLink: "https://github.com/esraa96/e-commerce-React",
  },
  {
    title: "Animated Portfolio",
    image: "../images/portfolio-23 .png",
    description:
      "A modern animated portfolio website showcasing skills, projects, and experience with smooth animations and responsive design.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    liveLink: "https://esraa-awad.vercel.app/",
    githubLink: "https://github.com/esraa96/EsraaAwad",
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
      "Intensive training on building modern, responsive web interfaces and cross-platform mobile applications using cutting-edge frameworks and tools.",
    achievements: [
      { icon: <Award />, text: "Subject: Front-End & Mobile Cross-Platform" },
    ],
    tags: [
      "HTML5&CSS",
     "javascript",
     "React.js",
      "Next.js",
      "Firebase",
      "MUI",
      "Git & GitHub",
       "Flutter",
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
