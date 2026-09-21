
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ProjectsS } from "../../data";
import Imag from "../Imag";
import Links from "../Links";
import Prag from "../Prag";
import Title from "../Title";

const Projects = () => {
  const itemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ProjectsS.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentProjects = ProjectsS.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);

    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const goPrev = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  return (
    <section
      id="projects"
      className="scroll-mt-20 min-h-screen py-12 sm:py-16 flex flex-col items-center px-4 overflow-hidden"
    >
      {/* Section Title */}
      <Title className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-12 text-center">
        My Projects
      </Title>

      {/* Projects */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl w-full items-stretch mx-auto">
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="w-full aspect-video overflow-hidden">
                  <Imag
                    src={project.img}
                    alt={project.projectT}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <Title className="text-lg sm:text-xl text-center text-white font-semibold mb-3">
                    {project.projectT}
                  </Title>

                  <Prag className="text-gray-300 text-sm sm:text-base flex-grow text-center leading-relaxed">
                    {project.des}
                  </Prag>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 justify-center mt-5">
                    {project.Tool.map((tool, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.15 + index * 0.05,
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gray-700 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-[#3396D3] transition-colors"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    {(project.href ?? []).map((href, index) => (
                      <Links
                        key={index}
                        href={href}
                        target="_blank"
                        className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition text-xs sm:text-sm w-full sm:w-auto text-center"
                        text={project.Text?.[index] ?? ""}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 sm:mt-12 gap-2 flex-wrap">
        {/* Previous */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={goPrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition ${
            currentPage === 1
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-gray-700 text-white hover:bg-gray-600"
          }`}
        >
          Prev
        </motion.button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <motion.button
            key={page}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => goToPage(page)}
            className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            {page}
          </motion.button>
        ))}

        {/* Next */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={goNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition ${
            currentPage === totalPages
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-gray-700 text-white hover:bg-gray-600"
          }`}
        >
          Next
        </motion.button>
      </div>
    </section>
  );
};

export default Projects;
