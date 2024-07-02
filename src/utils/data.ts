import Theme1 from "../assets/purple.png"
import Theme2 from "../assets/red.png"
import Theme3 from "../assets/blueviolet.png"
import Theme4 from "../assets/blue.png"
import Theme5 from "../assets/goldenrod.png"
import Theme6 from "../assets/magenta.png"
import Theme7 from "../assets/yellowgreen.png"
import Theme8 from "../assets/orange.png"
import Theme9 from "../assets/green.png"
import Theme10 from "../assets/yellow.png"

import Kate from "../assets/kate.png"
import Ecommerce from "../assets/ecommerce.png"
import Gym from "../assets/gym.png"
import Wingle from "../assets/wingle.png"
import Nova from "../assets/nova.png"
import Portfolio from "../assets/portfolio.png"

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
]

export const skillsData = [
  {
    label: "HTML",
    img: "/html.png",
  },
  {
    label: "CSS",
    img: "/css-icon.png",
  },
  {
    label: "JavaScript",
    img: "/js-icon.png",
  },
  {
    label: "TypeScript",
    img: "/ts-icon.png",
  },
  {
    label: "React",
    img: "/react-icon.png",
  },
  {
    label: "Tailwind CSS",
    img: "/tailwind-icon.png",
  },
  {
    label: "Redux Toolkit",
    img: "/redux-icon.png",
  },
  {
    label: "Next JS",
    img: "/nextjs-icon.png",
  },
  {
    label: "MySQL",
    img: "/sql-icon.png",
  },
  {
    label: "Python",
    img: "/python.png",
  },
  {
    label: "Sanity io",
    img: "/sanity-icon.png",
  },
  {
    label: "C",
    img: "/c-icon.png",
  },
  {
    label: "C++",
    img: "/cpp-icon.png",
  },
]

export const EducationalData = [
  {
    label: "Matriculation",
    year: "2019",
    desc: "I completed my matriculation in 2019 from Dar e Arqam Schools, Lahore and scored 90%",
  },
  {
    label: "Intermediate",
    year: "2021",
    desc: "I completed my Intermediate in 2021 from Punjab Group of Colleges, Lahore.",
  },
  {
    label: "Graduation",
    year: "2021 - continued",
    desc: "I am currently a student of Bachelor of Science Computer Science (BSCS), at University of Central Punjab",
  },
]

export const ProjectsData = [
  {
    title: "Computer Accessories Store",
    img: Nova,
    desc: "A fully responsive e-commerce store for computer accessories, featuring secure authentication and a sleek design.",
    techs: ["Next JS", "Tailwind CSS", "MongoDB", "Sanity io", "Next Auth"],
    url: "https://project-supernova.vercel.app/",
  },
  {
    title: "Social media app",
    img: Wingle,
    desc: "A social media platform that allows users to connect, share posts, and interact with others seamlessly.",
    techs: ["Next JS", "Tailwind CSS", "MongoDB", "Clerk Auth"],
    url: "https://tweeter-clone-ten.vercel.app/",
  },
  {
    title: "Gym app",
    img: Gym,
    desc: "A user-friendly gym application with dynamic animations, helping users track their workouts and progress.",
    techs: ["React JS", "Tailwind CSS", "Framer motion"],
    url: "https://gym-app-beryl.vercel.app/",
  },
  {
    title: "Clothing Ecommerce Store",
    img: Ecommerce,
    desc: "An online store for clothing, offering a smooth shopping experience with powerful state management and content delivery.",
    techs: ["React JS", "Redux Toolkit", "Tailwind CSS", "Sanity io"],
    url: "https://ecommerce-app-mu-five.vercel.app/",
  },
  {
    title: "Sanity based Social media app",
    img: Kate,
    desc: "A social media application built on Sanity, providing a robust platform for content creation and sharing.",
    techs: ["React JS", "Tailwind CSS", "Sanity io"],
    url: "https://kate-app.vercel.app/",
  },
  {
    title: "My Portfolio",
    img: Portfolio,
    desc: "A personal portfolio showcasing my projects and skills, with smooth animations and a modern design.",
    techs: ["React JS", "Tailwind CSS", "Framer motion"],
    url: "https://hashir-portfolio-sepia.vercel.app/",
  },
]
