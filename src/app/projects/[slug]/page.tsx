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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-slate-900">
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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/15 to-cyan-500/20 rounded-full blur-3xl animate-pulse opacity-40"></div>
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500/15 via-blue-500/20 to-purple-500/18 rounded-full blur-3xl animate-pulse delay-1000 opacity-50"></div>
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-orange-500/12 via-pink-500/18 to-indigo-500/15 rounded-full blur-3xl animate-pulse delay-2000 opacity-30"></div>
        </div>

        {/* Floating Project Type Badge - Top Right */}
        <div className="fixed top-8 right-8 z-30">
          <div className="bg-gradient-to-r from-violet-600/90 via-fuchsia-600/90 to-cyan-600/90 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20 shadow-2xl">
            <span className="text-white font-fredoka font-black text-sm tracking-[0.3em] uppercase">
              {project.projectType}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 pt-24 pb-12 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Hero Title Section - Smaller Heights */}
            <div className="text-center mb-12">
              <div className="mb-6">
                <h1 className="text-5xl font-righteous tracking-wide md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-cyan-200 leading-[0.9] tracking-tight">
                  {project.title.split("–")[0].trim()}
                </h1>
                {project.title.includes("–") && (
                  <p className="text-lg font-outfit md:text-2xl text-gray-400/80 font-light mt-3 tracking-wide">
                    {project.title.split("–")[1].trim()}
                  </p>
                )}
              </div>

              <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
                <span className="text-lg font-manrope font-bold text-white">
                  {project.company}
                </span>
                <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full"></div>
                <span className="text-md font-manrope font-bold text-gray-300">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Dynamic Image Grid - Renders all images from array */}
            <div className="mb-16">
              <div className="max-w-7xl mx-auto">
                {project.images && project.images.length > 0 && (
                  <div className="grid auto-rows-[200px] grid-cols-12 gap-4">
                    {project.images.map((img: any, index: number) => {
                      // Define different sizes for visual interest
                      const gridSizes = [
                        "col-span-8 row-span-2", // Large featured
                        "col-span-4 row-span-1", // Medium
                        "col-span-4 row-span-1", // Medium
                        "col-span-6 row-span-1", // Wide
                        "col-span-6 row-span-1", // Wide
                        "col-span-4 row-span-1", // Medium
                        "col-span-4 row-span-1", // Medium
                        "col-span-4 row-span-1", // Medium
                      ];

                      const gradients = [
                        "from-violet-500/20 to-cyan-500/20",
                        "from-emerald-500/20 to-blue-500/20",
                        "from-pink-500/20 to-orange-500/20",
                        "from-indigo-500/20 to-purple-500/20",
                        "from-cyan-500/20 to-teal-500/20",
                        "from-orange-500/15 via-pink-500/25 to-indigo-500/20",
                        "from-green-500/15 to-emerald-500/20",
                        "from-blue-500/15 to-indigo-500/20",
                      ];

                      const sizeClass = gridSizes[index % gridSizes.length];
                      const gradientClass = gradients[index % gradients.length];

                      return (
                        <div
                          key={index}
                          className={`${sizeClass} group relative`}
                        >
                          <div
                            className={`w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br ${gradientClass} p-1`}
                          >
                            <div className="w-full h-full rounded-[12px] overflow-hidden relative">
                              <Image
                                src={img}
                                alt={`${project.title} - Image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                placeholder="blur"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                              {index === 0 && (
                                <div className="absolute bottom-4 left-4"></div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
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
                      <h2 className="text-3xl tracking-wide font-outfit font-black text-white">
                        Project Overview
                      </h2>
                    </div>
                    <p className="text-gray-300 font-manrope text-md leading-relaxed whitespace-pre-line">
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
                      <h2 className="text-3xl tracking-wide font-outfit font-black text-white">
                        Key Responsibilities
                      </h2>
                    </div>
                    <div className="columns-1 md:columns-2 font-manrope gap-4 space-y-4">
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
                      <h2 className="text-3xl tracking-wide font-outfit font-black text-white">
                        Impact Results
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-manrope">
                      {project.results.map((result: any, index: number) => (
                        <div
                          key={index}
                          className="group relative bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-red-500/10 rounded-2xl p-5 border border-orange-500/20 hover:border-orange-400/40 hover:scale-105 transition-all duration-300"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-pink-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative">
                            <p className="text-white text-sm">{result.title}</p>
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
                        <h2 className="text-3xl font-outfit font-black text-white">
                          Tech Stack
                        </h2>
                      </div>

                      {/* Compact Tech Sections */}
                      <div className="space-y-6 font-urbanist">
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

            {/* Action Buttons - Floating with Professional Handling */}
            <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
              {/* GitHub Button - Always Available */}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-16 h-16 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 flex items-center justify-center shadow-2xl hover:shadow-gray-500/50 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <div className="absolute right-full font-urbanist mr-4 px-3 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    View Code
                  </div>
                </a>
              )}

              {/* Demo Button - Conditional Rendering */}
              {project.links.demo ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-16 h-16 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 flex items-center justify-center shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  <div className="absolute font-urbanist right-full mr-4 px-3 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Live Demo
                  </div>
                </a>
              ) : (
                <div className="group relative w-16 h-16 rounded-full bg-gradient-to-r from-gray-600/50 to-gray-700/50 border-2 border-dashed border-gray-500/50 flex items-center justify-center cursor-not-allowed">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <div className="absolute font-urbanist right-full mr-4 px-3 py-2 bg-black/90 text-gray-300 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-600/50">
                    <div className="flex items-center gap-2">
                      <span>⚠️</span>
                      <span>Demo Unavailable</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {project.techStack.deployment.includes("Localhost") ||
                      project.techStack.deployment.includes("Ganache")
                        ? "Local Development Only"
                        : "Private/Internal Project"}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
