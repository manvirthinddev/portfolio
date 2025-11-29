import React from "react";
import Tilt from "react-parallax-tilt";
import { projects } from "../constants";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

const Work = () => {
  return (
    <section
      id="work"
      className="relative py-24 px-[8vw] bg-[#0b1120] text-[#e2e8f0] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[20%] left-[18%] w-[30vw] h-[30vw] bg-[#3b82f6]/20 blur-3xl rounded-full"></div>
      <div className="absolute top-[70%] right-[10%] w-[20vw] h-[20vw] bg-[#60a5fa]/20 blur-3xl rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:18px_28px] opacity-10 pointer-events-none"></div>

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#60a5fa] drop-shadow-[0_0_15px_rgba(96,165,250,0.4)]">
          My Projects
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
          A showcase of my development journey — blending creativity, code, and clean UI.
        </p>
      </div>

      {/* Project Cards */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.03}
            transitionSpeed={1200}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_40px_rgba(96,165,250,0.35)] transition">

              {/* Project Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#93c5fd] mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-[#1e3a8a]/20 border border-[#1e3a8a] rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {/* Code Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    className="w-1/2 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#1e40af] hover:bg-[#3b82f6] text-white text-sm transition shadow-md hover:shadow-[#3b82f6] hover:shadow-lg"
                  >
                    <FaCode /> Code
                  </a>

                  {/* Live Button */}
                  <a
                    href={project.webapp}
                    target="_blank"
                    className="w-1/2 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#0ea5e9] hover:bg-[#38bdf8] text-white text-sm transition shadow-md hover:shadow-[#0ea5e9] hover:shadow-lg"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Work;
