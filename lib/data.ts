import losttracker from "@/public/images/losttracker.png";
import decubeProject from "@/public/images/decube.png";
import issueTrackerProject from "@/public/images/issuetracker.jpg";
import abundent from "@/public/logo/abundent-logo.svg";
import decube from "@/public/logo/Decube-logo.svg";
import unitednations from "@/public/logo/un-logo.png";

import { FiArrowUpRight } from "react-icons/fi";
import React from "react";

export const navLinks = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Work",
    href: "/work",
  },
] as const;

export const CONTACT = [
  {
    label: "linkedin",
    icon: React.createElement(FiArrowUpRight),
    href: "https://www.linkedin.com/in/azracrawf",
  },
  {
    label: "hello@aznim.xyz",
    icon: React.createElement(FiArrowUpRight),
    href: "/",
  },
] as const;

// HOME PAGE //
export const STYLECLASSES = [
  { style: "goo_1" },
  { style: "goo_2" },
  { style: "goo_3" },
  { style: "goo_4" },
  { style: "interactive" },
] as const;

export const INTRO =
  "professional front-end developer with three years experience, committed to solving complex software development challenges. With a keen eye for UI design and visual aesthetics, I strive to deliver elegant and responsive designs while focused on writing maintainable and reusable code.";

export const TESTIMONIALS = [
  {
    quote:
      "Aznim is an example of what it means to be a lifelong learner - I've witnessed her transform from a curious newcomer to a promising front-end engineer, leveraging her non-traditional background to bring some new ideas to the team; her fearlessness in the face of new challenges and her infectious enthusiasm has inspired us all to strive for excellence. She always mentioned to me that age is just a number for someone to achieve great things, I guess it's the same for you too. Goodluck Aznim!",
    author: "Hisyam Syazani",
    title: "Senior Software Engineer",
    logo: decube,
  },
  {
    quote:
      "Aznim has shown great tenacity and capacity to learn new skills on short notice. I was quite impressed by her progress in the short time I've been mentoring her. She also has a great sense for visual design, which is a must-have for a front end developer. I wholeheartedly support her application at your organization.",
    author: "Hajime Yamasaki Vukelic",
    title: "Lead Front-end Engineer",
    logo: unitednations,
  },
  {
    quote:
      "Aznim is an exceptional content writer, copywriter, and researcher. I was very satisfied with the quality of work she produced and how quickly she onboarded into the role. I have nothing but high praise for her general domain expertise and alacrity to acquire new knowledge within front-end web development and other areas of IT. I highly recommend her to any employer looking for a dedicated and pleasant knowledge worker.",
    author: "Tarun Sukhani",
    title: "Founder & CTO",
    logo: abundent,
  },
] as const;

// ABOUT PAGE //
export const ABOUT_MAIN = `A results-oriented developer from Kuala Lumpur, Malaysia, 
now living in London, who embarked on a coding journey driven by a deep
passion for continuous learning rather than raw ambition. My abundant energy fuels my
relentless pursuit of cultivating skills in the complex discipline of web development.
Constantly pushing my boundaries and stepping out of my comfort zone has made me a
powerhouse multitasker who strives for nothing short of excellence in any challenge
I may be presented with.`;

export const ABOUT_SUBTEXT = `I have practical experience focusing in React, Next.js, and TypeScript,
leveraging best practices to develop responsive and high-performance
user interfaces that enhance customer experiences. My competence extends to backend
integration, API testing, and frontend automation testing using Cypress and React Testing Library.`;

export const DOTS = [
  { color: "orange" },
  { color: "yellow" },
  { color: "green" },
] as const;

export const EXPERIENCES = [
  {
    company: "Decube",
    role: "Front-end Engineer",
    date: "September 2022 - February 2024",
    description: `My efforts resulted in the creation of cross-browser compatible,
                  responsive user interfaces that enhanced user experience by using
                  current techologies such as NextJs, Tailwind, custom UI components
                  and Postman for API. I collaborated efficiently in agile,
                  cross-functional teams, driving the rapid and successful iteration
                  of product features. My proactive approach to identifying and
                  resolving production issues ensured the platform's reliability
                  and performance.`,
  },
  {
    company: "Abundent",
    role: "Front-end Developer Intern",
    date: "August 2021 - September 2022",
    description: `During my internship, I transformed mock-ups into high-quality components
    using React and JavaScript, ensuring robust solutions.
    I engaged in API testing with Postman and emphasized best development practices, enhancing my technical
    skills and fostering a collaborative, innovative environment focused on user satisfaction.`,
  },
] as const;

export const CURRENT_BOOKS = [
  {
    title: "The computer science of human decisions",
    author: "Brian christian & Tom griffits",
  },
  { title: "How to win friends and influence people", author: "Dale carnegie" },
] as const;

export const FAV_BOOKS = [
  { title: "The book of phi", author: "Jain 108" },
  {
    title: "The Kybalion",
    author: "Three initiates",
  },
  { title: "Killing Sacred Cows", author: "Garret Gunderson" },
  { title: "One hundred years of solitude", author: "Gabriel García Márquez" },
] as const;

// WORK PAGE //
// PROJECTS //
export const PROJECTS = [
  {
    title: "LostTracker Missing Persons",
    href: "https://react-losttracker.vercel.app",
    description:
      "This app helps users search for and view profiles of missing persons with infinite scrolling and location-based features using Leaflet. Users can also bookmark profiles and post new missing person profiles.",
    tags: ["Typescript", "Vite", "React", "Leaflet", "Tailwind", "Appwrite"],
    imageUrl: losttracker,
  },

  {
    title: "Decube",
    href: "https://app.decube.io",
    description:
      "I worked as a front-end engineer on this startup project for almost 2 years. The application is designed to ensure consistent data quality and reliability with engineer-centric solutions.",
    tags: ["TypeScript", "Next.js", "Tailwind", "API", "React"],
    imageUrl: decubeProject,
  },
  {
    title: "Issue Tracker",
    href: "https://github.com/joujou144/next-issue-tracker",
    description:
      "This application is designed to facilitate efficient project management for teams which allows users to create, edit, and track issues. Features include filtering, sorting and pagination.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Prisma", "Zod", "MySQL"],
    imageUrl: issueTrackerProject,
  },
];

// SKILLS //
export const SKILLS = `JavaScript, React, NextJs, Typescript, CSS, Tailwind, Framer Motion, 
  Canvas, Cypress, React Testing Library, Git, REST, ES6, Axios, 
  Leaflet, MySQL, Zod, Prisma, Datagrip, Frontend Development,
  Postman, UI/UX`;

// FOOTER //
export const FOOTER_LINKS = [
  { label: "Linkedin", href: "https://www.linkedin.com/in/azracrawf" },
  { label: "github", href: "https://github.com/joujou144" },
] as const;

export const COPYRIGHT = "© 2024 ARC" as const;
