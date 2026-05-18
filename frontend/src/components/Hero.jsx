import { motion } from "framer-motion";
import { FaGithub, FaDownload } from "react-icons/fa";
import profileImage from "../assets/profile.jpg.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-6 relative overflow-hidden"
    >

      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 top-10 left-10"></div>

      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >

        <img
          src={profileImage}
          alt="profile"
          className="w-44 h-44 rounded-full mx-auto mb-8 border-4 border-white shadow-2xl object-cover"
        />

        <h2 className="text-xl text-gray-300 mb-2">
          Hello, My Name Is
        </h2>

        <h1 className="text-6xl md:text-7xl font-extrabold mb-4">
          Nirupam
        </h1>

        <h3 className="text-2xl md:text-3xl text-purple-400 mb-6 font-semibold">
          Full Stack Developer
        </h3>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-8 mb-8">
          I build modern full stack web applications using
          React, Node.js, Express, and MongoDB.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <a
            href="#projects"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl text-lg font-semibold transition"
          >
            View Projects
          </a>

          <a
            href="https://github.com/medinirupam28"
            target="_blank"
            rel="noreferrer"
            className="border border-white px-8 py-3 rounded-xl text-lg font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="/resume.pdf"
            download
            className="bg-white text-black px-8 py-3 rounded-xl text-lg font-semibold flex items-center gap-2 hover:scale-105 transition"
          >
            <FaDownload />
            Resume
          </a>

        </div>

      </motion.div>
    </section>
  );
}

export default Hero;