import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const timeline = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      year: "2022 - Present",
      school: "Government Mohindra College, Patiala",
      status: "Currently Pursuing – Final Year",
    },
    {
      title: "Advanced Diploma in Information Technology",
      year: "2021 - 2023",
      school: "ICIT Computer Center, Patiala",
      status: "",
    },
    {
      title: "Diploma in Website Development",
      year: "2020",
      school: "ICIT Computer Center, Patiala",
      status: "",
    },
    {
      title: "Senior Secondary (12th Grade)",
      year: "2019",
      school: "Modern Senior Secondary School, Patiala",
      status: "",
    },
    {
      title: "Secondary (10th Grade)",
      year: "2017",
      school: "Shivalik Public School, Patiala",
      status: "",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-24 px-[10vw] bg-[#0b1120] text-[#e2e8f0] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-[30%] left-[20%] w-[30vw] h-[30vw] bg-[#3b82f6]/20 blur-3xl rounded-full"></div>
      <div className="absolute top-[70%] left-[75%] w-[20vw] h-[20vw] bg-[#60a5fa]/20 blur-3xl rounded-full"></div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:18px_28px] opacity-10 pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#60a5fa] drop-shadow-[0_0_18px_rgba(96,165,250,0.4)]">
          Education
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">
          A journey of learning, growth, and continuous improvement shaping my skills and mindset.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative z-10 border-l-2 border-[#3b82f6]/40 ml-4 md:ml-10 flex flex-col gap-10">
        {timeline.map((item, i) => (
          <div
            key={i}
            className="relative pl-10 group hover:scale-[1.02] transition-all duration-300"
          >
            {/* Dot */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#3b82f6] shadow-[0_0_18px_#3b82f6] rounded-full border border-white/40 group-hover:scale-125 transition"></div>

            <h3 className="text-2xl font-semibold text-[#93c5fd] flex items-center gap-2">
              <FaGraduationCap className="text-[#60a5fa]" />
              {item.title}
            </h3>

            <p className="text-gray-400 mt-1 text-sm">{item.year}</p>

            <p className="mt-1 font-medium">{item.school}</p>

            <p className="text-[#3b82f6] text-sm italic mt-2">{item.status}</p>

            {/* Glow Hover */}
            <div className="absolute inset-0 rounded-lg blur-2xl opacity-0 group-hover:opacity-60 transition duration-300 bg-[#3b82f6]/10"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
