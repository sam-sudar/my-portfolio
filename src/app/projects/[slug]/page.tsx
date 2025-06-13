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
      <div className="min-h-screen mt-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 px-6 md:px-20 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-30 opacity-10"
          style={{
            backgroundImage: `url(${grainImage.src})`,
            backgroundSize: "cover",
          }}
        ></div>

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 xl:grid-cols-5 gap-10 animate-fade-in">
          <div className="xl:col-span-3 space-y-12">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-space tracking-wide font-extrabold text-lavender-300 drop-shadow-xl animate-slide-up">
                {project.title}
              </h1>
              <p className="text-gray-300 font-urbanist text-base md:text-lg animate-fade-in-delay">
                {project.company} &bull; {project.year}
              </p>
              <p className="mt-2 inline-block px-4 py-1 font-barlow rounded-full border border-lavender-600 bg-gradient-to-r from-indigo-900 to-indigo-700 text-xs uppercase tracking-wider font-semibold text-lavender-200 animate-slide-in">
                {project.projectType}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in-delay">
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden border border-indigo-800 shadow-xl hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-indigo-800 shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-indigo-800 shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                />
              </div>
            </div>

            <section className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content=[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6">
              <h2 className="text-3xl font-bold font-barlow md:mt-2 md:text-4xl text-lavender-300 ">
                Project Overview
              </h2>
              <p className="text-white/90  text-base font-urbanist leading-relaxed whitespace-pre-line">
                {project.overview}
              </p>
            </section>

            <section className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content=[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6 space-y-4 animate-fade-in-delay">
              <h2 className="text-3xl font-bold font-barlow md:mt-2 md:text-4xl text-lavender-300 pb-2">
                Impact Highlights 🚀
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                {project.results.map((result: any, index: number) => (
                  <li className="font-urbanist" key={index}>{result.title}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className=" bg-gray-800 relative z-0 overflow-hidden after:z-10 after:content=[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-8 rounded-3xl shadow-2xl space-y-8 animate-fade-in">
            <h2 className="text-3xl font-extrabold font-barlow md:mt-2 md:text-4xl text-lavender-300">
              Tech Stack 🛠️
            </h2>
            <div className="flex flex-row gap-2 sm:flex-col lg:flex-row">
              {["frontend", "middleware", "backend", "animations", "tools"].map(
                (section) => {
                  const tools =
                    project.techStack[
                      section as keyof typeof project.techStack
                    ];
                  if (!tools || !Array.isArray(tools) || tools.length === 0)
                    return null;

                  return (
                    <div
                      key={section}
                      className="bg-gray-800 relative z-0 overflow-hidden after:z-10 after:content=[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-5 rounded-xl  shadow-md"
                    >
                      <h3 className="text-white/80 text-base uppercase tracking-wider font-semibold mb-3 font-barlow">
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </h3>
                      <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                        {tools.map(
                          (tech: string, index: number) =>
                            techIcons[tech] && (
                              <div
                                key={index}
                                className="relative group w-full h-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                              >
                                <img
                                  src={techIcons[tech]}
                                  alt={tech}
                                  className="w-12 h-12 drop-shadow-lg md:w-20 md:h-20 sm:w-20"
                                />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center px-3 py-1 text-xs bg-indigo-800 text-white rounded shadow-lg z-20 whitespace-nowrap">
                                  {tech}
                                </div>
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className=" flex gap-4 mt-8 animate-fade-in-delay">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-purple-700 hover:bg-purple-800 rounded-xl text-white font-manrope font-semibold shadow-lg transition-all duration-300 text-center"
            >
              🎬 Watch Project Demo
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-700 hover:bg-green-800 font-manrope rounded-xl text-white font-semibold shadow-lg transition-all duration-300 text-center"
            >
              💻 View GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
