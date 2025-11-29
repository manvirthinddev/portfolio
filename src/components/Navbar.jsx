import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  // Detect scroll and change navbar style
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Detect which section is visible (fix active highlight when scrolling)
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Section must be 50% visible to activate
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleMenuClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-[6vw] py-4 transition-all duration-300 
      bg-[#0b1120] border-b border-[#1e293b]
      ${isScrolled ? "shadow-[0_4px_15px_rgba(59,130,246,0.15)]" : ""}`}
    >
      <div className="flex justify-between items-center text-[#e2e8f0]">

        {/* Logo */}
        <h1 className="font-bold text-xl tracking-wide cursor-pointer hover:scale-105 transition">
          <span className="text-[#3b82f6]">&lt;</span>Manvir
          <span className="text-[#3b82f6]">/</span>Thind
          <span className="text-[#3b82f6]">&gt;</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 text-sm">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`cursor-pointer transition ${
                activeSection === item.id
                  ? "text-[#60a5fa] font-semibold border-b-2 border-[#60a5fa]"
                  : "hover:text-[#60a5fa]"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex gap-5 items-center">
          <a href="https://github.com/manvirthinddev/" className="hover:text-[#60a5fa] transition hover:scale-110">
            <FaGithub size={20} />
          </a>
          <a href="#" className="hover:text-[#60a5fa] transition hover:scale-110">
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:manvirthind10@gmail.com"
            className="hover:text-[#60a5fa] transition hover:scale-110"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX size={30} onClick={() => setIsOpen(false)} className="text-[#60a5fa] cursor-pointer" />
          ) : (
            <FiMenu size={30} onClick={() => setIsOpen(true)} className="text-[#60a5fa] cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 bg-[#111829] border border-[#1e293b] rounded-lg py-4">
          <ul className="flex flex-col space-y-4 text-center text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`cursor-pointer ${
                  activeSection === item.id ? "text-[#60a5fa]" : "hover:text-[#60a5fa]"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-6 mt-4 text-gray-300">
            <FaGithub size={22} className="hover:text-[#60a5fa] cursor-pointer" />
            <FaLinkedin size={22} className="hover:text-[#60a5fa] cursor-pointer" />
            <FaEnvelope
              size={22}
              className="hover:text-[#60a5fa] cursor-pointer"
              onClick={() => (window.location.href = "mailto:manvirthinddeveloper@gmail.com")}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
