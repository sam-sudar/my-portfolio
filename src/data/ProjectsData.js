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
import at1 from "@/assets/images/atlas/atlas1.jpg";
import at2 from "@/assets/images/atlas/atlas2.jpg";
import at3 from "@/assets/images/atlas/atlas3.jpg";
import at4 from "@/assets/images/atlas/atlas4.jpg";
import at5 from "@/assets/images/atlas/atlas5.jpg";
import rt1 from "@/assets/images/rent/rent1.jpg";
import rt2 from "@/assets/images/rent/rent2.jpg";
import rt3 from "@/assets/images/rent/rent3.jpg";
import rt4 from "@/assets/images/rent/rent4.jpg";
import cw1 from "@/assets/images/classy/classy1.jpg";
import cw2 from "@/assets/images/classy/classy2.jpg";
import cw3 from "@/assets/images/classy/classy3.jpg";

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
    links: {
      github: "https://github.com/yourusername/bellaciao",
      demo: "https://bellaciao-bakery.render.com",
    },
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
    links: {
      github: "https://github.com/yourusername/blockchain-credentials",
      demo: null, // Not deployed - runs locally with Ganache
    },
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
    links: {
      github: "https://github.com/yourusername/eye-my-care",
      demo: "https://eye-my-care.vercel.app",
    },
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
    links: {
      github: "https://github.com/yourusername/nuxtchat",
      demo: "https://nuxt-chat-topaz.vercel.app/",
    },
    images: [nc1, nc2, nc3],
  },
  {
    id: 5,
    company: "Atlas Adventures",
    year: "2023",
    title: "Atlas Adventures – Interactive Travel Journal",
    overview: `
    A dynamic, map-driven travel journal built with React, Tailwind CSS, and Redux. 
    Designed for explorers to log, visualize, and relive their journeys with an interactive, 
    location-based interface and seamless state management.
  `,
    projectType: "Personal Project",
    responsibilities: [
      "Implemented an interactive map with location selection and real-time geolocation",
      "Developed a dynamic sidebar to display and edit place details and travel notes",
      "Integrated Redux for persistent state management across sessions",
      "Created a clean and responsive UI with Tailwind CSS",
      "Designed country-level and global map views with travel markers",
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS", "Redux"],
      backend: [],
      animations: [],
      deployment: ["Vercel"],
      tools: ["VS Code", "Git"],
    },
    results: [
      {
        title:
          "Built an intuitive travel logging platform with interactive maps",
      },
      {
        title: "Enabled smooth state persistence for saved locations and notes",
      },
      { title: "Delivered a visually engaging and mobile-friendly interface" },
    ],
    links: {
      github: "https://github.com/yourusername/atlas-adventures",
      demo: "https://atlas-adventures.vercel.app/",
    },
    images: [at1, at2, at3, at4, at5],
  },
  {
    id: 6,
    company: "RealEstate Insights",
    year: "2024",
    title: "Real Estate Price & Rent Prediction System",
    overview: `
    A machine learning-based system for predicting house rent prices across Indian cities 
    and property purchase prices in Bangalore. Built with structured datasets and regression 
    models, the system enables users to input property details and receive accurate, 
    data-driven price estimates. Designed with a simple Flask-based interface for 
    intuitive user interaction and reliable decision-making support in real estate.
  `,
    projectType: "Machine Learning Application",
    responsibilities: [
      "Designed and implemented Ridge Regression and other ML models for rental and purchase price prediction",
      "Built a data pipeline for cleaning, preprocessing, and feature engineering of real estate datasets",
      "Integrated Flask backend with trained ML models to serve predictions through REST APIs",
      "Developed responsive UI forms for user input and real-time prediction display",
      "Performed testing with cross-validation, MAE, and RMSE to ensure accuracy",
      "Deployed the system on a cloud platform with CI/CD pipeline for updates",
    ],
    techStack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Flask", "Python", "REST API"],
      machineLearning: ["Ridge Regression", "Random Forest"],
      dataProcessing: ["Pandas", "NumPy"],
      development: ["Jupyter Notebook", "VS Code", "Git"],
      deployment: ["Vercel"],
    },
    results: [
      {
        title:
          "Achieved accurate predictions for house rents across Indian cities using structured datasets",
      },
      {
        title:
          "Developed a Bangalore-specific property price prediction model with strong accuracy",
      },
      {
        title:
          "Validated models using cross-validation, achieving reliable MAE and RMSE scores",
      },
      {
        title:
          "Built a user-friendly Flask interface allowing instant property price/rent predictions",
      },
      {
        title:
          "Deployed scalable cloud-based solution with continuous integration for updates",
      },
    ],
    features: [
      "Rent prediction across multiple Indian cities",
      "Purchase price prediction focused on Bangalore properties",
      "Input fields for property details like BHK, size, location, and furnishing status",
      "Real-time predictions with REST API integration",
      "Validation and error handling for user inputs",
      "Responsive layout for web access on desktop and mobile",
      "Prediction reports with MAE and RMSE validation",
      "Scalable modular architecture for future expansion",
    ],
    designHighlights: [
      "Simple, intuitive UI with form-based property input",
      "Responsive layout supporting multiple devices",
      "Clear, accessible data visualization of prediction results",
      "REST API architecture for modularity",
      "MVC design pattern separating model, logic, and UI",
    ],
    links: {
      github: "https://github.com/yourusername/real-estate-prediction",
      demo: "https://realestate-prediction-demo.com",
    },
    images: [rt1, rt2, rt3, rt4],
    technologies: {
      stateManagement: "Handled via Flask controllers and REST APIs",
      styling: "HTML5/CSS3 responsive design",
      apiIntegration: "Flask REST API serving ML model predictions",
      userExperience:
        "Form validation, instant prediction display, clean layout",
      responsiveDesign:
        "Flexible front-end supporting desktop and mobile devices",
    },
  },
  {
    id: 7,
    company: "Classy Weather",
    year: "2025",
    title: "Classy Weather – 4-Day Forecast App",
    overview: `
    A lightweight React app that provides a 4-5 day weather forecast based on user input. 
    Users can type in any location and get a clear, card-based weather display with icons 
    for temperature, conditions, and other relevant metrics.
  `,
    projectType: "Personal Project",
    responsibilities: [
      "Built frontend entirely in React with reusable card components",
      "Implemented user input handling and API fetch for weather data",
      "Displayed weather forecasts for multiple days in a visually clear card layout",
      "Managed state with React hooks for dynamic updates",
    ],
    techStack: {
      frontend: ["React", "CSS"],
      backend: [],
      animations: [],
      deployment: ["Vercel"], // You can change this if deployed elsewhere
      tools: ["VS Code", "Git"],
    },
    results: [
      { title: "Simple, intuitive interface for checking weather forecasts" },
      { title: "Accurately fetches weather data for multiple days" },
      { title: "Dynamic display with responsive weather cards" },
    ],
    links: {
      github: "https://github.com/yourusername/classy-weather",
      demo: "https://classy-weather.vercel.app",
    },
    images: [cw1, cw2, cw3],
    features: [
      "User input for location search",
      "4-5 day weather forecast displayed in cards",
      "Weather icons representing conditions",
      "Temperature, humidity, and condition metrics",
      "Responsive layout for desktop and mobile",
    ],
    designHighlights: [
      "Clean card-based UI for easy readability",
      "Responsive design supporting multiple devices",
      "Dynamic weather updates without page reload",
      "Minimalist React architecture for simplicity",
    ],
  },
];

export default portfolioProjects;
