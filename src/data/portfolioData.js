// Central place for all portfolio content.
// Update these values to personalize the site with your own information.

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaDatabase,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiFlutter,
  SiTypescript,
  SiPostman,
  SiVercel,
} from 'react-icons/si'
import profileImage from "../assets/jenin.jpeg";

export const personalInfo = {
  name: 'Jenin Cheriyan',
  title: 'Full-Stack Software Developer',
  tagline:
    "I design and build reliable, user-friendly web and mobile applications — from database to deployment.",
  location: 'Bengaluru, India',
  email: 'jenincheriyan@gmail.com',
  phone: '+91 8089311621',
  github: 'https://github.com/jenincheriyan',
  linkedin: 'https://linkedin.com/in/jenincheriyan',
  resumeUrl: '/resume.pdf',
  avatar: profileImage, // Replace with an imported image path, e.g. import avatar from '../assets/avatar.jpg'
}

export const socialLinks = [
  { name: 'GitHub', url: personalInfo.github, icon: FaGithub },
  { name: 'LinkedIn', url: personalInfo.linkedin, icon: FaLinkedin },
  { name: 'Email', url: `mailto:${personalInfo.email}`, icon: FaEnvelope },
]

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export const aboutData = {
  bio: [
    "I'm a full-stack developer with a passion for turning complex problems into clean, intuitive digital experiences. I enjoy working across the entire stack — from crafting responsive interfaces to designing efficient APIs and data models.",
    "Over the past few years, I've worked on web platforms, mobile apps, and backend services, always focusing on writing maintainable code and delivering real value to users.",
  ],
  goals:
    'My goal is to grow into a role where I can architect scalable systems, mentor other developers, and contribute to products that make a meaningful difference in people\'s lives.',
  currentlyLearning: ['TypeScript', 'GraphQL', 'AWS', 'System Design'],
  interests: ['Open Source', 'UI/UX Design', 'Chess', 'Photography', 'Hiking'],
}

export const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: FaPython },
      { name: 'JavaScript', icon: FaJs },
      { name: 'TypeScript', icon: SiTypescript },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'Firebase', icon: SiFirebase },
    ],
  },
  {
    category: 'Mobile Development',
    skills: [{ name: 'Flutter', icon: SiFlutter }],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Firebase DB', icon: FaDatabase },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Docker', icon: FaDocker },
      { name: 'Linux', icon: FaLinux },
      { name: 'Postman', icon: SiPostman },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
  {
    category: 'Version Control',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
    ],
  },
]

export const projects = [
  
  {
    id: 1,
    title: 'GameArea',
    description:
      'rea is a mobile application that serves as a hub for multiple casual mini games.',
    image: null,
    tech: ['flutter'],
    github: 'https://github.com/jenincheriyan/GameArea',
  }
  
]

export const education = [
  {
    id: 1,
    degree: 'MCA',
    institution: 'RIT, Kottayam',
    year: '2025 – 2027',
  },
  {
    id: 2,
    degree: 'BSc Computer Science',
    institution: 'UC College,Aluva',
    year: '2022 – 2025',
  },
]
