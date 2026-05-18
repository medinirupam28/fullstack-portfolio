import { motion } from "framer-motion";

function Projects() {

  const projects = [
    {
      title: "Portfolio Website",

      description:
        "Modern full stack portfolio website with responsive UI, backend integration, and email functionality.",

      github:
        "https://github.com/medinirupam28",

      tech:
        "React • Tailwind • Node.js • Express • MongoDB",
    },

    {
      title: "Task Manager App",

      description:
        "MERN stack task management application with CRUD operations and authentication.",

      github:
        "https://github.com/medinirupam28",

      tech:
        "MongoDB • Express • React • Node.js",
    },

    {
      title: "E Commerce Store",

      description:
        "Modern ecommerce platform with product pages, authentication, and backend APIs.",

      github:
        "https://github.com/medinirupam28",

      tech:
        "React • Tailwind • Node.js • MongoDB",
    },
  ];

  return (
    <section
      id="projects"
      className="py-28 bg-gray-950 text-white px-6"
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-black border border-gray-800 rounded-3xl p-8 shadow-xl hover:border-purple-500 transition"
            >

              <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl mb-6"></div>

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-8 mb-6">
                {project.description}
              </p>

              <p className="text-sm text-purple-400 mb-6">
                {project.tech}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition"
              >
                View Project
              </a>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;