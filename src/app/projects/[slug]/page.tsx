// app/[slug]/page.tsx
import portfolioProjects from "@/data/ProjectsData";
import { Header } from "@/sections/Header";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";

// Import tech icons from ProjectData
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
  "Nuxt.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg",

  // Backend
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Express.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  Fastify: "https://www.vectorlogo.zone/logos/fastifyio/fastifyio-icon.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  RabbitMQ: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
  Solidity:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",

  // Tools
  Postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  "VS Code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  Remix:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/remix/remix-original.svg",
  "Web3.js":
    "https://seeklogo.com/images/W/web3js-logo-62DEE79B50-seeklogo.com.png",
  "Google PageSpeed":
    "https://www.gstatic.com/images/branding/product/2x/pagespeed_96dp.png",
  "SEO Tools": "https://cdn-icons-png.flaticon.com/512/888/888879.png",

  // Deployment
  Vercel: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
  Render:
    "https://global-uploads.webflow.com/6076f5ad1b86005f9f6b3b9d/64a67c36e447ad267fcdcc13_render-icon.png",
  "Localhost/Ganache":
    "https://seeklogo.com/images/G/ganache-logo-1EB72084A8-seeklogo.com.png",
  Ganache:
    "https://seeklogo.com/images/G/ganache-logo-1EB72084A8-seeklogo.com.png",
  Lighthouse:
    "https://www.gstatic.com/images/branding/product/2x/pagespeed_96dp.png",
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center space-y-4">
          <div className="text-6xl">🔍</div>
          <h1 className="text-3xl font-bold text-white">Project Not Found</h1>
          <p className="text-gray-400">
            The project you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />

      {/* Hero Section with Enhanced Gradients */}
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grain Texture */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url(${grainImage.src})`,
            backgroundSize: "400px 400px",
          }}
        ></div>

        <div className="relative z-10 pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Project Header */}
            <div className="text-center mb-16 space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold text-sm uppercase tracking-wider">
                  {project.projectType}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200 leading-tight animate-fade-in-up">
                {project.title.split("–")[0]}
                {project.title.includes("–") && (
                  <span className="block text-4xl md:text-5xl lg:text-6xl text-gray-400 font-light mt-4">
                    {project.title.split("–")[1]}
                  </span>
                )}
              </h1>

              <div className="flex items-center justify-center gap-4 text-gray-300">
                <span className="text-lg font-medium">{project.company}</span>
                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                <span className="text-lg">{project.year}</span>
              </div>
            </div>

            {/* Project Images Grid */}
            <div className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="md:col-span-2 group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/50 to-indigo-900/50 p-1 hover:scale-[1.02] transition-all duration-700">
                    <div className="relative overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                        placeholder="blur"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-900/50 to-purple-900/50 p-1 hover:scale-105 transition-all duration-500">
                      <div className="relative overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="w-full h-36 md:h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                          placeholder="blur"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900/50 to-cyan-900/50 p-1 hover:scale-105 transition-all duration-500">
                      <div className="relative overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="w-full h-36 md:h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                          placeholder="blur"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
              {/* Left Column - Project Details */}
              <div className="xl:col-span-2 space-y-12">
                {/* Project Overview */}
                <div className="group">
                  <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 to-indigo-900/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                          <span className="text-xl">📋</span>
                        </div>
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                          Project Overview
                        </h2>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                        {project.overview}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="group">
                  <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 to-purple-900/40 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                          <span className="text-xl">⚡</span>
                        </div>
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                          Key Responsibilities
                        </h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.responsibilities.map(
                          (responsibility: string, index: number) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-300">{responsibility}</p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact Highlights */}
                <div className="group">
                  <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 to-green-900/40 backdrop-blur-sm border border-green-500/20 hover:border-green-500/40 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center">
                          <span className="text-xl">🚀</span>
                        </div>
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                          Impact Highlights
                        </h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.results.map((result: any, index: number) => (
                          <div
                            key={index}
                            className="relative p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group/item"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10 flex items-center gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"></div>
                              <p className="text-gray-300 font-medium">
                                {result.title}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Tech Stack */}
              <div className="space-y-8">
                <div className="group">
                  <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 to-purple-900/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 sticky top-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                          <span className="text-xl">🛠️</span>
                        </div>
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                          Tech Stack
                        </h2>
                      </div>

                      {/* Tech Stack Sections */}
                      <div className="space-y-6">
                        {Object.entries(project.techStack).map(
                          ([category, technologies]) => {
                            if (
                              !technologies ||
                              !Array.isArray(technologies) ||
                              technologies.length === 0
                            )
                              return null;

                            const categoryColors = {
                              frontend: "from-blue-500 to-cyan-500",
                              backend: "from-green-500 to-emerald-500",
                              middleware: "from-yellow-500 to-orange-500",
                              animations: "from-pink-500 to-rose-500",
                              deployment: "from-indigo-500 to-purple-500",
                              tools: "from-gray-500 to-slate-500",
                            };

                            const categoryColor =
                              categoryColors[
                                category as keyof typeof categoryColors
                              ] || "from-purple-500 to-pink-500";

                            return (
                              <div key={category} className="space-y-4">
                                <div className="flex items-center gap-2">
                                  <div
                                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${categoryColor}`}
                                  ></div>
                                  <h3
                                    className={`text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${categoryColor} uppercase tracking-wider`}
                                  >
                                    {category}
                                  </h3>
                                </div>

                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                  {technologies.map(
                                    (tech: string, index: number) => {
                                      const iconUrl =
                                        techIcons[
                                          tech as keyof typeof techIcons
                                        ];

                                      if (!iconUrl) return null;

                                      return (
                                        <div
                                          key={index}
                                          className="group/tech relative"
                                        >
                                          <div className="relative p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-110">
                                            <div className="relative w-10 h-10 mx-auto">
                                              <Image
                                                src={iconUrl}
                                                alt={tech}
                                                width={40}
                                                height={40}
                                                className="object-contain transition-transform duration-300 group-hover/tech:scale-110"
                                                unoptimized
                                              />
                                            </div>

                                            {/* Tooltip */}
                                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20 pointer-events-none">
                                              {tech}
                                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <span className="text-xl">🎬</span>
                  <span>Watch Demo</span>
                </div>
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <span className="text-xl">💻</span>
                  <span>View GitHub</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
