// app/[slug]/page.tsx
import portfolioProjects from "@/data/ProjectsData";
import { Header } from "@/sections/Header";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";

const techIcons: any = {
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

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: Props) {
  const { slug } = params;
  const project = portfolioProjects.find((p: any) => p.id.toString() === slug);
  const techObject = project?.techStack;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl font-bold">
        Project Not Found
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen text-white py-24 md:py-32 px-6 md:px-16 relative overflow-hidden">
        {/* Grain effect background layer (optional) */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>

        <div className="max-w-6xl mx-auto">
          {/* Title & Company */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-serif font-semibold text-purple-400 mb-4 tracking-wide">
              {project.title}
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              {project.company} &bull; {project.year}
            </p>
          </div>

          {/* Project Image */}
          <div className="rounded-2xl overflow-hidden mb-10 border border-gray-800 blur-xs shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px]">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              placeholder="blur"
            />
          </div>

          {/* Results */}
          <div className="flex gap-4 bg-red-200">
            <div className="w-[75%]">
              <div className=" bg-slate-800 p-4 rounded-lg">
                <h1 className="text-2xl font-bold mb-2">Project Overview</h1>
                <p className="text-md">{project.overview}</p>
              </div>
              <div className="mb-12 bg-slate-400">
                <h2 className="text-xl md:text-2xl text-white font-semibold mb-4 border-b border-gray-700 inline-block pb-1">
                  Impact Highlights 🚀
                </h2>
                <ul className="list-disc list-inside space-y-2 text-white/80 pl-4">
                  {project.results.map((result: any, index: number) => (
                    // <li key={index} className="text-base md:text-lg">
                    //   {result.title}
                    // </li>
                    <div>{result.title}</div>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-[25%] bg-slate-800 p-4 rounded-lg">
              <h1 className="text-2xl font-bold mb-2">Tech Stacks</h1>
            </div>
          </div>
          <div className="w-[25%] bg-slate-900 p-4 rounded-lg border border-gray-700">
            <h2 className="text-xl md:text-2xl text-white font-semibold mb-4 border-b border-gray-600 pb-1">
              Tech Stack 🛠️
            </h2>
            <ul className="space-y-3">
              {project.techStack.frontend.map((tech: string, index: number) => (
                <li key={index} className="flex items-center space-x-2">
                  {techIcons[tech] && (
                    <img src={techIcons[tech]} alt={tech} className="w-6 h-6" />
                  )}
                  <span className="text-white/90 text-sm">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold transition-all duration-300 shadow-md"
            >
              🎬 Watch Project Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
