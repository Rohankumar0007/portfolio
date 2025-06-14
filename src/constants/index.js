import {
  backend,
  carrent,
  creator,
  css,
  figma,
  git,
  html,
  javascript,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  web,
} from "../assets";

import css1 from "/css1.png";
import html1 from "/html1.png";
import st from "/st.png";
import Experience from "/Experiences.png";
import bootstrap from "/bootstrap.png";
import healthease from "/healthease.png";
import mysql from "/mysql.png";
import springboot2 from "/springboot2.png";
import strom from "/strom.png";
import weather from "/weather.png";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html1,
  },
  {
    name: "CSS 3",
    icon: css1,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "mySQL",
    icon: mysql,
  },
  {
    name: "Spring Boot",
    icon: springboot2,
  },
];

const experiences = [
  {
    title: "Frontend Developer (Self-Directed)",
    company_name: "Self-Directed",
    icon: Experience,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Built multiple responsive web applications using HTML, CSS, JavaScript.",
      "Integrated REST APIs and focused on enhancing user experience and performance.",
      "Collaborated with peers on open-source projects to improve coding practices.",
      "Currently learning Spring Boot to expand into full-stack development.",
    ],
  },
  {
    title: "HealthEase Portal",
    company_name: "Project Work",
    icon: st,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Oct 2024",
    points: [
      "Designed and developed a medical portal for patient registration and data management.",
      "Used Spring Boot for backend services and MySQL for storing patient records.",
      "Implemented O(log n) search algorithm for efficient record retrieval.",
      "Improved form completion rates through user-centric UI/UX design.",
    ],
  },
  {
    title: "Weather Dashboard",
    company_name: "Project Work",
    icon: strom,
    iconBg: "#383E56",
    date: "Nov 2024 - Dec 2024",
    points: [
      "Developed a weather app using React.js and OpenWeatherMap API.",
      "Displayed real-time weather updates with interactive UI elements.",
      "Implemented location-based weather forecasting and chart visualizations.",
      "Focused on responsive design and performance optimization.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rohan’s work on the HealthEase portal impressed me deeply. His focus on usability and performance made the application smooth and intuitive.",
    name: "Dr.CV Ramesh",
    designation: "Mentor",
    company: "Galgotias University",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    testimonial:
      "The weather dashboard Rohan built was clean, responsive, and functionally impressive. He clearly has a strong grasp of front-end development and APIs.",
    name: "Arjun Mehta",
    designation: "Project Reviewer",
    company: "Open Source Community",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    testimonial:
      "Rohan is a fast learner and a problem-solver. His dedication to improving and collaborating on full-stack projects stands out.",
    name: "Anjali Verma",
    designation: "Senior Developer",
    company: "Freelance Mentor",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const projects = [
  {
    name: "HealthEase Portal",
    description:
      "A responsive full-stack healthcare web portal for patient registration, record management, and medical data storage, using Spring Boot and MySQL.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: healthease,
    source_code_link: "https://github.com",
  },
  {
    name: "Weather Dashboard",
    description:
      "A React-based weather app that fetches real-time weather data, displays forecasts by location, and visualizes temperature and weather patterns using charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com",
  },
  {
    name: "Car Rental System",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "springboot",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com",
  },
];

export { experiences, projects, services, technologies, testimonials };
