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

      {/* Main Container */}
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-cyan-500/30 rounded-full blur-3xl animate-pulse opacity-40"></div>
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500/20 via-blue-500/30 to-purple-500/25 rounded-full blur-3xl animate-pulse delay-1000 opacity-50"></div>
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-orange-500/15 via-pink-500/25 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000 opacity-30"></div>
        </div>

        {/* Floating Project Type Badge - Top Right */}
        <div className="fixed top-8 right-8 z-30">
          <div className="bg-gradient-to-r from-violet-600/90 via-fuchsia-600/90 to-cyan-600/90 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20 shadow-2xl">
            <span className="text-white font-black text-sm tracking-[0.3em] uppercase">
              {project.projectType}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 pt-24 pb-12 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Hero Title Section */}
            <div className="text-center mb-16">
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-cyan-200 leading-[0.85] tracking-tight">
                  {project.title.split("–")[0].trim()}
                </h1>
                {project.title.includes("–") && (
                  <p className="text-2xl md:text-4xl text-gray-400/80 font-light mt-4 tracking-wide">
                    {project.title.split("–")[1].trim()}
                  </p>
                )}
              </div>

              <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
                <span className="text-xl font-bold text-white">
                  {project.company}
                </span>
                <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full"></div>
                <span className="text-xl text-gray-300">{project.year}</span>
              </div>
            </div>

            {/* Creative Image Grid */}
            <div className="mb-20">
              <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[600px] max-w-6xl mx-auto">
                {/* Large featured image - spans most of the grid */}
                <div className="col-span-8 row-span-4 group relative">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-violet-500/20 to-cyan-500/20 p-1">
                    <div className="w-full h-full rounded-[20px] overflow-hidden relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        placeholder="blur"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                        <div className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20">
                          <span className="text-white font-semibold">
                            Main View
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vertical images on the right */}
                <div className="col-span-4 row-span-2 group relative">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500/20 to-blue-500/20 p-1">
                    <div className="w-full h-full rounded-[12px] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-4 row-span-2 group relative">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500/20 to-orange-500/20 p-1">
                    <div className="w-full h-full rounded-[12px] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom row - smaller images */}
                <div className="col-span-3 row-span-2 group relative">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-1">
                    <div className="w-full h-full rounded-[12px] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-3 row-span-2 group relative">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-teal-500/20 p-1">
                    <div className="w-full h-full rounded-[12px] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-2 row-span-2 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center">
                    <span className="text-white text-2xl">+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Layout */}
            <div className="grid grid-cols-12 gap-8">
              {/* Left Column - Main Content */}
              <div className="col-span-12 lg:col-span-8 space-y-8">
                {/* Project Overview - Floating Card */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-violet-500/30 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h2 className="text-3xl font-black text-white">
                        Project Overview
                      </h2>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                      {project.overview}
                    </p>
                  </div>
                </div>

                {/* Responsibilities - Masonry Style */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <h2 className="text-3xl font-black text-white">
                        Key Responsibilities
                      </h2>
                    </div>
                    <div className="columns-1 md:columns-2 gap-4 space-y-4">
                      {project.responsibilities.map(
                        (responsibility: string, index: number) => (
                          <div
                            key={index}
                            className="break-inside-avoid bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-emerald-400/30 transition-all duration-300"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {responsibility}
                              </p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Impact Results - Creative Grid */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <h2 className="text-3xl font-black text-white">
                        Impact Results
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.results.map((result: any, index: number) => (
                        <div
                          key={index}
                          className="group relative bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-red-500/10 rounded-2xl p-5 border border-orange-500/20 hover:border-orange-400/40 hover:scale-105 transition-all duration-300"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-pink-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative">
                            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mb-3"></div>
                            <p className="text-white font-bold text-sm">
                              {result.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Compact Tech Stack */}
              <div className="col-span-12 lg:col-span-4">
                <div className="sticky top-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
                    <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-blue-500/30 transition-all duration-500">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                          <span className="text-xl">⚡</span>
                        </div>
                        <h2 className="text-2xl font-black text-white">
                          Tech Stack
                        </h2>
                      </div>

                      {/* Compact Tech Sections */}
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
                              frontend: {
                                bg: "from-blue-500/10 to-cyan-500/10",
                                border: "border-blue-500/30",
                                text: "from-blue-400 to-cyan-400",
                              },
                              backend: {
                                bg: "from-green-500/10 to-emerald-500/10",
                                border: "border-green-500/30",
                                text: "from-green-400 to-emerald-400",
                              },
                              middleware: {
                                bg: "from-yellow-500/10 to-orange-500/10",
                                border: "border-yellow-500/30",
                                text: "from-yellow-400 to-orange-400",
                              },
                              animations: {
                                bg: "from-pink-500/10 to-rose-500/10",
                                border: "border-pink-500/30",
                                text: "from-pink-400 to-rose-400",
                              },
                              deployment: {
                                bg: "from-indigo-500/10 to-purple-500/10",
                                border: "border-indigo-500/30",
                                text: "from-indigo-400 to-purple-400",
                              },
                              tools: {
                                bg: "from-gray-500/10 to-slate-500/10",
                                border: "border-gray-500/30",
                                text: "from-gray-400 to-slate-400",
                              },
                            };

                            const colors =
                              categoryColors[
                                category as keyof typeof categoryColors
                              ] || categoryColors.tools;

                            return (
                              <div
                                key={category}
                                className={`bg-gradient-to-r ${colors.bg} rounded-2xl p-4 border ${colors.border}`}
                              >
                                <h3
                                  className={`text-sm font-black text-transparent bg-clip-text bg-gradient-to-r ${colors.text} uppercase tracking-wider mb-3`}
                                >
                                  {category}
                                </h3>

                                <div className="flex flex-wrap gap-2">
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
                                          className="group relative"
                                        >
                                          <div className="w-8 h-8 p-1 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer">
                                            <Image
                                              src={iconUrl}
                                              alt={tech}
                                              width={24}
                                              height={24}
                                              className="w-full h-full object-contain"
                                              unoptimized
                                            />
                                          </div>

                                          {/* Minimal Tooltip */}
                                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 pointer-events-none">
                                            {tech}
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

            {/* Action Buttons - Floating */}
            <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 flex items-center justify-center shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-110"
              >
                <span className="text-2xl">🎬</span>
                <div className="absolute right-full mr-4 px-3 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Watch Demo
                </div>
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 flex items-center justify-center shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110"
              >
                <span className="text-2xl">💻</span>
                <div className="absolute right-full mr-4 px-3 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  View GitHub
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
