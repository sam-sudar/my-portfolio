// app/projects/page.tsx
"use client";

import { useState, useMemo } from "react";
import portfolioProjects from "@/data/ProjectsData";
import { Header } from "@/sections/Header";
import Image from "next/image";
import Link from "next/link";

// Import tech icons (same as individual project page)
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
  Flask:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "REST API":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg", // Swagger as a representation

  // Machine Learning
  "Scikit-learn":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg",
  "Random Forest":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", // Placeholder, as there's no specific icon for Random Forest

  // Data Processing
  Pandas:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  NumPy:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",

  // Development
  "Jupyter Notebook":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",

  // Deployment
  "Cloud Hosting":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", // AWS as a representative
  "CI/CD Pipeline":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
};

export default function ProjectsPage() {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Extract all unique technologies from all projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    portfolioProjects.forEach((project) => {
      if (project.techStack) {
        Object.values(project.techStack).forEach((techs) => {
          if (Array.isArray(techs)) {
            techs.forEach((tech) => techSet.add(tech));
          }
        });
      }
    });
    return Array.from(techSet).sort();
  }, []);

  // Extract all unique project types
  const projectTypes = useMemo(() => {
    const types = new Set(portfolioProjects.map((p) => p.projectType));
    return ["all", ...Array.from(types)];
  }, []);

  // Filter projects based on selected criteria
  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter((project) => {
      // Search query filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(searchLower);
        const matchesCompany = project.company
          .toLowerCase()
          .includes(searchLower);
        const matchesOverview = project.overview
          .toLowerCase()
          .includes(searchLower);

        if (!matchesTitle && !matchesCompany && !matchesOverview) {
          return false;
        }
      }

      // Project type filter
      if (selectedType !== "all" && project.projectType !== selectedType) {
        return false;
      }

      // Technology filter
      if (selectedTechs.length > 0) {
        const projectTechs = Object.values(project.techStack || {}).flat();
        const hasAllSelectedTechs = selectedTechs.every((tech) =>
          projectTechs.includes(tech)
        );
        if (!hasAllSelectedTechs) {
          return false;
        }
      }

      return true;
    });
  }, [selectedTechs, selectedType, searchQuery]);

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const clearAllFilters = () => {
    setSelectedTechs([]);
    setSelectedType("all");
    setSearchQuery("");
  };

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

        {/* Main Content */}
        <div className="relative z-10 pt-24 pb-12 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-righteous tracking-wide md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-cyan-200 leading-[0.9] tracking-tight mb-6">
                Projects Portfolio
              </h1>
              <p className="text-xl font-outfit text-gray-400/80 font-light tracking-wide max-w-2xl mx-auto">
                Explore my journey through innovative web development,
                blockchain solutions, and creative digital experiences
              </p>

              {/* Stats */}
              <div className="flex justify-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-fredoka font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                    {portfolioProjects.length}
                  </div>
                  <div className="text-sm font-manrope text-gray-400 uppercase tracking-wider">
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-fredoka font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    {allTechnologies.length}
                  </div>
                  <div className="text-sm font-manrope text-gray-400 uppercase tracking-wider">
                    Technologies
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-fredoka font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                    {projectTypes.length - 1}
                  </div>
                  <div className="text-sm font-manrope text-gray-400 uppercase tracking-wider">
                    Categories
                  </div>
                </div>
              </div>
            </div>

            {/* Filters Section */}
            <div className="mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                  {/* Search Bar */}
                  <div className="mb-8">
                    <div className="relative max-w-md mx-auto">
                      <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500/50 transition-all duration-300 font-manrope"
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Project Type Filter */}
                  <div className="mb-8">
                    <h3 className="text-lg font-outfit font-bold text-white mb-4 flex items-center gap-2">
                      <span className="text-xl">🎯</span>
                      Project Types
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`px-4 py-2 rounded-xl font-manrope font-medium transition-all duration-300 ${
                            selectedType === type
                              ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25"
                              : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                          }`}
                        >
                          {type === "all" ? "All Projects" : type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Technology Filter */}
                  <div className="mb-6">
                    <h3 className="text-lg font-outfit font-bold text-white mb-4 flex items-center gap-2">
                      <span className="text-xl">⚡</span>
                      Technologies
                      {selectedTechs.length > 0 && (
                        <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-fredoka">
                          {selectedTechs.length} selected
                        </span>
                      )}
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
                      {allTechnologies.map((tech) => {
                        const iconUrl =
                          techIcons[tech as keyof typeof techIcons];
                        const isSelected = selectedTechs.includes(tech);

                        return (
                          <button
                            key={tech}
                            onClick={() => toggleTech(tech)}
                            className={`group relative p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                              isSelected
                                ? "bg-gradient-to-r from-emerald-600/30 to-cyan-600/30 border-2 border-emerald-500/50 shadow-lg shadow-emerald-500/25"
                                : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
                            }`}
                          >
                            {iconUrl && (
                              <div className="w-8 h-8 mx-auto mb-2">
                                <Image
                                  src={iconUrl}
                                  alt={tech}
                                  width={32}
                                  height={32}
                                  className="w-full h-full object-contain"
                                  unoptimized
                                />
                              </div>
                            )}
                            <div className="text-xs font-urbanist text-gray-300 text-center leading-tight">
                              {tech}
                            </div>

                            {/* Selection indicator */}
                            {isSelected && (
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                                <svg
                                  className="w-2 h-2 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Clear Filters */}
                  {(selectedTechs.length > 0 ||
                    selectedType !== "all" ||
                    searchQuery) && (
                    <div className="flex justify-center">
                      <button
                        onClick={clearAllFilters}
                        className="px-6 py-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 hover:from-red-600/30 hover:to-orange-600/30 border border-red-500/30 hover:border-red-500/50 text-red-300 hover:text-red-200 rounded-xl font-manrope font-medium transition-all duration-300 flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Clear All Filters
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-8 text-center">
              <p className="font-manrope text-gray-400">
                Showing{" "}
                <span className="text-white font-bold">
                  {filteredProjects.length}
                </span>{" "}
                of{" "}
                <span className="text-white font-bold">
                  {portfolioProjects.length}
                </span>{" "}
                projects
              </p>
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => {
                  const gradients = [
                    "from-violet-500/20 to-fuchsia-500/20",
                    "from-emerald-500/20 to-cyan-500/20",
                    "from-orange-500/20 to-pink-500/20",
                    "from-blue-500/20 to-indigo-500/20",
                    "from-yellow-500/20 to-red-500/20",
                    "from-green-500/20 to-teal-500/20",
                  ];
                  const gradientClass = gradients[index % gradients.length];

                  return (
                    <Link
                      key={project.id}
                      href={`/projects/${project.id}`}
                      className="group block"
                    >
                      <div className="relative h-full">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${gradientClass} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
                        ></div>
                        <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-500 group-hover:scale-[1.02] h-full flex flex-col">
                          {/* Project Image */}
                          {project.images && project.images[0] && (
                            <div className="mb-6 rounded-2xl overflow-hidden">
                              <Image
                                src={project.images[0]}
                                alt={project.title}
                                width={400}
                                height={240}
                                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                                placeholder="blur"
                              />
                            </div>
                          )}

                          {/* Project Type Badge */}
                          <div className="absolute top-4 right-4">
                            <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                              <span className="text-xs font-fredoka font-bold text-white uppercase tracking-wider">
                                {project.projectType}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 flex flex-col">
                            {/* Title */}
                            <h3 className="text-xl font-righteous text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:to-cyan-300 transition-all duration-300">
                              {project.title.split("–")[0].trim()}
                            </h3>

                            {/* Company & Year */}
                            <div className="flex items-center gap-4 mb-4">
                              <span className="font-manrope font-semibold text-gray-300">
                                {project.company}
                              </span>
                              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                              <span className="font-manrope text-sm text-gray-400">
                                {project.year}
                              </span>
                            </div>

                            {/* Overview */}
                            <p className="font-manrope text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                              {project.overview.substring(0, 120)}...
                            </p>

                            {/* Tech Stack Preview */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {Object.values(project.techStack || {})
                                .flat()
                                .slice(0, 6)
                                .map((tech, techIndex) => {
                                  const iconUrl =
                                    techIcons[tech as keyof typeof techIcons];
                                  return (
                                    iconUrl && (
                                      <div
                                        key={techIndex}
                                        className="w-6 h-6 p-1 bg-white/10 rounded-md"
                                      >
                                        <Image
                                          src={iconUrl}
                                          alt={tech}
                                          width={16}
                                          height={16}
                                          className="w-full h-full object-contain"
                                          unoptimized
                                        />
                                      </div>
                                    )
                                  );
                                })}
                              {Object.values(project.techStack || {}).flat()
                                .length > 6 && (
                                <div className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center">
                                  <span className="text-xs font-bold text-gray-400">
                                    +
                                    {Object.values(
                                      project.techStack || {}
                                    ).flat().length - 6}
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Action Links */}
                            <div className="flex gap-3">
                              <div className="flex-1 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-lg px-4 py-2 text-center">
                                <span className="text-sm font-manrope font-medium text-white">
                                  View Details
                                </span>
                              </div>
                              {project.links.demo && (
                                <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-lg px-4 py-2">
                                  <svg
                                    className="w-4 h-4 text-emerald-400"
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
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              // No Results State
              <div className="text-center py-16">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-slate-600/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-12 max-w-md mx-auto">
                    <div className="text-6xl mb-6">🔍</div>
                    <h3 className="text-2xl font-righteous text-white mb-4">
                      No Projects Found
                    </h3>
                    <p className="font-manrope text-gray-400 mb-6">
                      Try adjusting your filters or search terms to find what
                      you are looking for.
                    </p>
                    <button
                      onClick={clearAllFilters}
                      className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-6 py-3 rounded-xl font-manrope font-medium transition-all duration-300"
                    >
                      Clear All Filters
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
