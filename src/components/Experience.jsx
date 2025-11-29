import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const experienceList = [
    {
      title: "MERN Stack Intern",
      company: "Solitare Infosys",
      duration: "2024 - Present",
      status: "Currently Doing",
      highlight: true,
      desc: "Working on real-world MERN stack projects, building scalable UI, backend APIs, authentication systems, and performing database operations using MongoDB.",
    },
    {
      title: "Website Designing Intern",
      company: "ICIT Computer Center, Patiala",
      duration: "3 Months",
      highlight: false,
      desc: "Designed responsive web pages using HTML, CSS, JavaScript & Bootstrap for training-based projects.",
    },
    {
      title: "Computer Teacher",
      company: "ICIT Computer Center, Patiala",
      duration: "5 Months",
      highlight: false,
      desc: "Taught programming basics, MS Office, web fundamentals & logical problem-solving to students.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 px-[10vw] bg-[#0b1120] text-[#e2e8f0] overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-[20%] left-[18%] w-[28vw] h-[28vw] bg-[#3b82f6]/20 blur-[120px]"></div>
      <div className="absolute bottom-[10%] right-[15%] w-[20vw] h-[20vw] bg-[#60a5fa]/20 blur-[130px]"></div>

      {/* Soft Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:18px_28px] opacity-10"></div>

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#60a5fa] drop-shadow-[0_0_16px_rgba(96,165,250,0.4)]">
          Experience
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Hands-on industry experience that shaped my technical & teaching journey.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {experienceList.map((exp, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 
                     shadow-[0_0_18px_rgba(59,130,246,0.2)]
                     hover:shadow-[0_0_25px_rgba(96,165,250,0.45)]
                     hover:-translate-y-2 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <FaBriefcase className="text-[#60a5fa] text-4xl drop-shadow-[0_0_10px_rgba(96,165,250,0.6)]" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-[#93c5fd] text-center">
              {exp.title}
            </h3>

            {/* Company */}
            <p className="text-gray-300 text-center mt-1 font-medium">
              {exp.company}
            </p>

            {/* Duration */}
            <p className="text-gray-400 text-sm text-center mt-1">
              {exp.duration}
            </p>

            {/* Highlight Badge */}
            {exp.highlight && (
              <p className="text-[#3b82f6] text-sm font-semibold text-center mt-2 animate-pulse">
                🔥 Currently Working
              </p>
            )}

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mt-4 text-center">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
