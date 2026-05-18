import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-28 bg-gray-950 text-white px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-10"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xl text-gray-300 leading-10"
        >
          I am a passionate Full Stack Developer focused on
          building modern, responsive, and scalable web
          applications. I enjoy creating beautiful user
          interfaces and powerful backend systems using
          React, Node.js, Express, and MongoDB.
        </motion.p>
      </div>
    </section>
  );
}

export default About;