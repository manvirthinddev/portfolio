import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 px-[10vw] bg-[#0b1120] text-[#e2e8f0] overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-[#3b82f6]/15 blur-3xl"></div>
      <div className="absolute bottom-[10%] right-[15%] w-[18vw] h-[18vw] rounded-full bg-[#60a5fa]/15 blur-3xl"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:18px_26px] opacity-10 pointer-events-none"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-[#60a5fa] drop-shadow-[0_0_15px_rgba(96,165,250,0.4)]">
          Contact Me
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          Let’s build something great together — feel free to reach out!
        </p>
      </div>

      {/* Contact Form Container */}
      <div className="relative z-10 max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-[0_0_25px_rgba(59,130,246,0.2)]">
        
        <form className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-[#0d1528] text-white rounded-lg border border-gray-600 
              focus:border-[#3b82f6] outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-[#0d1528] text-white rounded-lg border border-gray-600 
              focus:border-[#3b82f6] outline-none transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 bg-[#0d1528] text-white rounded-lg border border-gray-600 
              focus:border-[#3b82f6] outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Send Button */}
          <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] 
          text-white font-semibold text-lg tracking-wide 
          hover:shadow-[0_0_30px_#3b82f6aa] hover:scale-[1.02] transition">
            Send Message
          </button>
        </form>

        {/* Social Row */}
        <div className="flex justify-center gap-6 mt-10">
          <FaGithub size={26} className="text-gray-300 hover:text-[#3b82f6] cursor-pointer transition" />
          <FaLinkedin size={26} className="text-gray-300 hover:text-[#3b82f6] cursor-pointer transition" />
          <FaEnvelope size={26} className="text-gray-300 hover:text-[#3b82f6] cursor-pointer transition" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
