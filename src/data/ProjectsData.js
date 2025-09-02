// ProjectData.js

import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import bc1 from "@/assets/images/blockchain/blockchain1.jpg";
import bc2 from "@/assets/images/blockchain/blockchain2.jpg";
import bc3 from "@/assets/images/blockchain/blockchain3.jpg";
import bc4 from "@/assets/images/blockchain/blockchain4.jpg";
import bk1 from "@/assets/images/bakery/bakery1.jpg";
import bk2 from "@/assets/images/bakery/bakery2.jpg";
import bk3 from "@/assets/images/bakery/bakery3.jpg";
import bk4 from "@/assets/images/bakery/bakery4.jpg";
import emc1 from "@/assets/images/optics/optics1.jpg";
import emc2 from "@/assets/images/optics/optics2.jpg";
import emc3 from "@/assets/images/optics/optics3.jpg";
import emc4 from "@/assets/images/optics/optics4.jpg";
import emc5 from "@/assets/images/optics/optics5.png";
import nc1 from "@/assets/images/nuxtChat/nuxtChat1.jpg";
import nc2 from "@/assets/images/nuxtChat/nuxtChat3.jpg";
import nc3 from "@/assets/images/nuxtChat/nuxtChat2.jpg";

// const techIcons = {
//   // Frontend
//   "Next.js":
//     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
//   React:
//     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
//   TypeScript:
//     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
//   JavaScript:
//     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
//   "Tailwind CSS":
//     "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
//   CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
//   HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
//   "Vue.js":
//     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
//   "Nuxt.js":
//     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg",

//   // Backend
//   "Node.js":
//     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
//   "Express.js":
//     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
//   Fastify: "https://www.vectorlogo.zone/logos/fastifyio/fastifyio-icon.svg",
//   MongoDB:
//     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
//   RabbitMQ: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
//   Solidity:
//     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",

//   // Tools
//   Postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
//   "VS Code":
//     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
//   Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
//   Remix:
//     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/remix/remix-original.svg",
//   "Web3.js":
//     "https://seeklogo.com/images/W/web3js-logo-62DEE79B50-seeklogo.com.png",
//   "Google PageSpeed":
//     "https://www.gstatic.com/images/branding/product/2x/pagespeed_96dp.png",
//   "SEO Tools": "https://cdn-icons-png.flaticon.com/512/888/888879.png",

//   // Deployment
//   Vercel: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
//   Render:
//     "https://global-uploads.webflow.com/6076f5ad1b86005f9f6b3b9d/64a67c36e447ad267fcdcc13_render-icon.png",
// };

const portfolioProjects = [
  {
    id: 1,
    company: "BellaCiao Bakers",
    year: "2024",
    title: "BellaCiao – Bakery Website",
    overview: `
      A full-stack bakery platform engineered with a Vue.js frontend, Fastify APIs, and MongoDB backend. 
      Implemented a dynamic dashboard system and real-time order tracking, enabling efficient bakery operations 
      and seamless user experience.
    `,
    projectType: "Client Project",
    responsibilities: [
      "Developed frontend with Vue.js and Tailwind CSS",
      "Designed REST APIs with Fastify and Express",
      "Built MongoDB schemas and integrated RabbitMQ for real-time order handling",
      "Created a dashboard for store operations",
    ],
    techStack: {
      frontend: ["Vue.js", "Tailwind CSS"],
      backend: ["Fastify", "Express.js", "Node.js", "MongoDB", "RabbitMQ"],
      animations: [],
      deployment: ["Render"],
      tools: ["Postman", "VS Code", "Git"],
    },
    results: [
      { title: "Reduced order processing time by 45%" },
      { title: "Improved store operation speed by 60%" },
      { title: "Enabled real-time updates for orders and inventory" },
    ],
    link: "https://github.com/yourusername/bellaciao",
    images: [bk1, bk2, bk3, bk4],
  },
  {
    id: 2,
    company: "PropertyVault",
    year: "2024",
    title: "Blockchain Credential Storage",
    overview: `
      Developed a blockchain-based credential storage system. 
      Designed and deployed smart contracts using Solidity and Ganache, then integrated blockchain features into a React frontend 
      using Web3.js to provide decentralized certificate validation.
    `,
    projectType: "Personal Project",
    responsibilities: [
      "Wrote Solidity smart contracts for credential verification",
      "Tested blockchain transactions on Ganache",
      "Integrated Web3.js into React frontend",
      "Handled MetaMask wallet interactions",
    ],
    techStack: {
      frontend: ["React"],
      backend: [],
      animations: [],
      deployment: ["Localhost/Ganache"],
      tools: ["Ganache", "Solidity", "Remix", "Web3.js"],
    },
    results: [
      { title: "Created tamper-proof credential validation system" },
      { title: "Improved trust using blockchain technology" },
      { title: "Learned secure smart contract deployment" },
    ],
    link: "https://github.com/yourusername/blockchain-credentials",
    images: [bc1, bc2, bc3, bc4],
  },
  {
    id: 3,
    company: "Eye & My Care",
    year: "2023",
    title: "SEO-Optimized Optometry Website",
    overview: `
      Delivered a professional React website for an optometry clinic focused on SEO performance. 
      Integrated structured data, keyword targeting, and Lighthouse optimizations for fast loading and visibility.
    `,
    projectType: "Freelance Project",
    responsibilities: [
      "Developed mobile-first responsive layout in React",
      "Integrated structured data and meta tags",
      "Optimized loading time and accessibility",
      "Performed keyword research and speed tests",
    ],
    techStack: {
      frontend: ["React", "CSS"],
      backend: [],
      animations: [],
      deployment: ["Vercel"],
      tools: ["Google PageSpeed", "Lighthouse", "SEO Tools"],
    },
    results: [
      { title: "Increased search engine visibility by 50%" },
      { title: "Boosted page speed score to 95+" },
      { title: "Improved SEO ranking for targeted keywords" },
    ],
    link: "https://github.com/yourusername/eye-my-care",
    images: [emc1, emc2, emc3, emc4, emc5],
  },
  {
    id: 4,
    company: "NuxtChat Team",
    year: "2023",
    title: "NuxtChat – WhatsApp Clone",
    overview: `
      A clean, performant WhatsApp clone built with Nuxt.js and Tailwind CSS. 
      Focused on modular design, responsiveness, and performance-first architecture.
    `,
    projectType: "Personal Project",
    responsibilities: [
      "Built WhatsApp-like chat UI with Nuxt.js",
      "Designed reusable and modular components",
      "Ensured responsiveness across devices",
      "Maintained optimized layout and performance",
    ],
    techStack: {
      frontend: ["Nuxt.js", "Tailwind CSS"],
      backend: [],
      animations: [],
      deployment: ["Vercel"],
      tools: ["VS Code", "Git"],
    },
    results: [
      { title: "Achieved 100% responsive layout" },
      { title: "Reduced bundle size with Nuxt.js optimization" },
      { title: "Improved UI consistency with modular design" },
    ],
    link: "https://nuxt-chat-topaz.vercel.app/",
    images: [nc1, nc2, nc3],
  },
];

export default portfolioProjects;
