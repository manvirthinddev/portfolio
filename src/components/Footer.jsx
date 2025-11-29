import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b1120] text-gray-300 py-10 px-[8vw] relative">

      {/* FOOTER GRID */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* LEFT */}
        <div className="text-center md:text-left space-y-3">

          {/* 🔵 Blinking Highlight Text */}
          <h2 className="text-lg font-semibold text-[#60a5fa] tracking-wide animate-pulse-slow">
            🚀 Available for Work
          </h2>

          <p className="text-gray-400 text-sm max-w-sm">
            Open to freelance, full-time & contract roles.  
            Let’s build meaningful digital experiences.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1yHjKwYcW1eJUUo6osc2gJIMTg36AouxU/view"
            className="inline-block px-6 py-2 rounded-full text-sm font-semibold 
            bg-[#3b82f6] text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]
            hover:bg-[#60a5fa] hover:scale-105 transition-all"
          >
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 pt-2">
            <a href="https://github.com/manvirthinddev/" className="hover:text-[#60a5fa] transition hover:scale-110">
              <FaGithub size={22} />
            </a>
            <a href="#" className="hover:text-[#60a5fa] transition hover:scale-110">
              <FaLinkedin size={22} />
            </a>
            <a href="mailto:manvirthinddev@gmail.com" className="hover:text-[#60a5fa] transition hover:scale-110">
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-center md:text-right space-y-2">
          <p className="text-gray-400 text-sm">
            Made with ❤️ by <span className="text-[#60a5fa] font-medium">Manvir Thind</span>
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} — All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-[#1f2937] border border-[#3b82f6]/40 
        text-white hover:bg-[#3b82f6] hover:border-[#60a5fa] 
        shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-110 transition-all"
      >
        <FaArrowUp size={18} />
      </button>

    </footer>
  );
};

export default Footer;
