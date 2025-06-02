import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

const techIcons = {
  // Frontend
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Tailwind CSS":
    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "Vue.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  Angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",

  // Backend
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  Express: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  Ruby: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg",
  Go: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",

  // Databases
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  Redis:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",

  // Animations
  "Framer Motion": "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
  GSAP: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjODhDRTAyIi8+Cjwvc3ZnPgo=",
  "Locomotive Scroll":
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjRkY2NjAwIi8+Cjwvc3ZnPgo=",

  // Deployment
  Vercel: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
  Netlify: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  Heroku: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",

  // Tools
  Figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  Photoshop:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
  Lighthouse:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjRkY1NzIyIi8+Cjwvc3ZnPgo=",
  Postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  Whimsical:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjNDMzNUZGIi8+Cjwvc3ZnPgo=",
};

const portfolioProjects = [
  {
    id: 1,
    company: "Acme Corp",
    year: "2022",
    title: "Dark SaaS Landing Page",
    overview: `
      A sleek, futuristic dark-themed landing page for a SaaS platform. 
      The design emphasizes contrast, fluid animations, and mobile-first responsiveness.
      I collaborated with the marketing team to align the design with brand goals and optimized performance for Lighthouse benchmarks.
    `,
    projectType: "Freelance Project",
    responsibilities: [
      "Created pixel-perfect, responsive design",
      "Implemented dark mode system-wide",
      "Integrated animations for hero and CTA sections",
      "SEO optimization and accessibility improvements",
    ],
    techIcons,
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      animations: ["Framer Motion"],
      deployment: ["Vercel"],
      tools: ["Figma", "GitHub", "Lighthouse"],
    },
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    id: 2,
    company: "Innovative Co",
    year: "2021",
    title: "Light SaaS Landing Page",
    overview: `
      A minimalist and performance-focused landing page for a B2B SaaS product. 
      The project focused on clean layouts, intuitive navigation, and subtle micro-interactions. 
      This was a solo project built from scratch to deployment, targeting early-stage businesses.
    `,
    projectType: "Personal Project",
    responsibilities: [
      "Developed responsive layout using utility-first CSS",
      "Built reusable components for rapid prototyping",
      "Integrated hero section animation and smooth scroll effects",
      "Optimized image loading with Next.js image component",
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      animations: ["GSAP"],
      deployment: ["Netlify"],
      tools: ["Figma", "Photoshop", "Git"],
    },
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    id: 3,
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    overview: `
      A modern landing page built for a deep tech AI startup with a sci-fi inspired interface. 
      This project focused on crafting a visionary aesthetic using soft glowing UI, asymmetric layouts, and engaging scroll animations.
      It highlighted key product features and case studies using data-driven storytelling.
    `,
    projectType: "Collaborative Hackathon Project",
    responsibilities: [
      "Designed a futuristic interface with tech-themed aesthetics",
      "Implemented animated sections triggered by scroll",
      "Built modular components with Tailwind for reusability",
      "Integrated YouTube and Calendly APIs for demos and scheduling",
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      animations: ["Framer Motion", "Locomotive Scroll"],
      deployment: ["Vercel"],
      tools: ["Whimsical", "Figma", "Postman"],
    },
    results: [
      { title: "Enhanced user engagement with interactive UI" },
      { title: "Reduced bounce rate by 60%" },
      { title: "Won 2nd place in Startup Hack 2023" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export default portfolioProjects;
