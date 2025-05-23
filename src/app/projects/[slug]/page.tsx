// app/[slug]/page.tsx
import portfolioProjects from "@/data/ProjectsData";
import { Header } from "@/sections/Header";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";

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
          <div className="flex gap-4">
            <div className="w-[75%] bg-slate-800 p-4 rounded-lg">
              <h1 className="text-2xl font-bold mb-2">Project Overview</h1>
              <p className="text-md">{project.overview}</p>
            </div>
            <div className="w-[25%] bg-slate-800 p-4 rounded-lg">
              <h1 className="text-2xl font-bold mb-2">Project Type</h1>
              <p className="text-md">{project.projectType}</p>
            </div>
          </div>
          <div className="mb-12">
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
