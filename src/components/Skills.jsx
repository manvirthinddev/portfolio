// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-20 px-[8vw] md:px-[6vw] lg:px-[12vw] bg-[#0b1120] text-[#e2e8f0] overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/3 w-[30vw] h-[30vw] rounded-full bg-[#3b82f6]/15 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[18vw] h-[18vw] rounded-full bg-[#60a5fa]/15 blur-3xl"></div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_22px] opacity-10"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#60a5fa] drop-shadow-[0_0_15px_rgba(96,165,250,0.4)]">
          Skills
        </h2>
        <p className="text-gray-400 mt-3 text-lg max-w-xl mx-auto">
          Crafting a versatile tech stack to build efficient, scalable and impactful digital experiences.
        </p>
      </div>

      {/* Skill Sections */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8">
        {SkillsInfo.map((category, index) => (
          <div
            key={index}
            className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-xl p-6 
            shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_25px_rgba(96,165,250,0.35)]
            transition-all duration-300"
          >
            {/* Category Title */}
            <h3 className="text-xl font-semibold text-[#93c5fd] mb-4 text-center tracking-wide">
              {category.title}
            </h3>

            {/* Skill Items */}
            <div className="flex flex-wrap gap-3 justify-center">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-2 px-5 py-2 rounded-full border border-[#1e3a8a] 
                  bg-[#1e3a8a]/10 hover:bg-[#3b82f6]/20 hover:border-[#3b82f6]
                  transition-all duration-300 cursor-pointer"
                >
                  {skill.logo && (
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6 object-contain opacity-90 group-hover:opacity-100 transition"
                    />
                  )}

                  <span className="text-sm text-gray-300 group-hover:text-white transition font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
