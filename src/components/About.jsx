import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../assets/profile.jpg";
import BlurBlob from "./BlurBlob";

const About = () => {


  return (
    <section
      id="about"
      className="relative min-h-screen -mt-[20px] flex items-center px-[8vw] pt-4 pb-20 scroll-mt-28 bg-[#0b1120] text-[#e2e8f0] overflow-hidden"
    >

      {/* Glow Background Effects */}
      <BlurBlob 
        position={{ top: "40%", left: "22%" }}
        size={{ width: "30vw", height: "30vw" }}
      />

      <BlurBlob 
        position={{ top: "70%", left: "78%" }}
        size={{ width: "20vw", height: "20vw" }}
      />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:18px_28px] opacity-15 pointer-events-none"></div>

      
      {/* MAIN LAYOUT */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-14 md:gap-20 w-full">

        {/*──── LEFT TEXT SECTION ────*/}
        <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">

          <h1 className="text-4xl md:text-5xl font-bold opacity-90">Hello, I'm</h1>

          <h2 className="text-5xl md:text-6xl font-extrabold mt-2 text-[#3b82f6] drop-shadow-[0_0_12px_rgba(59,130,246,0.45)]">
            Manvir Thind
          </h2>

          <h3 className="mt-5 text-xl md:text-2xl font-medium opacity-90">
            I am a{" "}
            <span className="text-[#60a5fa]">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Fullstack Developer",
                    "Backend Developer",
                    "MERN Developer",
                    "Web Developer",
                    "Problem Solver",
                    "Tech Explorer",
                    "Coder",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>

          <p className="text-gray-400 mt-5 leading-relaxed text-lg max-w-lg mx-auto md:mx-0">
            I design and develop modern applications that are fast, visually flawless and scalable.  
            I turn ideas into functional, polished digital experiences through development and creativity.
          </p>

        <a 
        href="https://drive.google.com/file/d/1yHjKwYcW1eJUUo6osc2gJIMTg36AouxU/view?usp=drive_link" 
        target="_blank" 
        rel="noopener noreferrer"
        >
        <button className="mt-8 px-10 py-3 rounded-full text-lg font-semibold mx-auto md:mx-0 text-white bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] shadow-[0_0_25px_#3b82f6aa] hover:shadow-[0_0_45px_#60a5faee] hover:scale-110 transition-all duration-300">
        Download CV
        </button>
        </a>

        </div>

        {/*──── RIGHT PROFILE IMAGE ────*/}
        <div className="md:w-1/2 flex justify-center" data-aos="zoom-in">

          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.25}
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            transitionSpeed={1000}
            scale={1.05}
          >
            {/* Glass Morphism Container */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_50px_#3b82f630] rounded-full p-2">
              <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-[26rem] md:h-[26rem] rounded-full overflow-hidden border-2 border-[#3b82f6]/40 shadow-[0_0_60px_rgba(59,130,246,0.35)]">
                <img
                  src={profileImage}
                  alt="Manvir Thind"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
