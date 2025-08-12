import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaExternalLinkAlt } from "react-icons/fa";

interface IProject {
  _id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tools: string[];
}

const ProjectsComponent: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get<IProject[]>("http://localhost:4002/api/project");
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">
            My <span className="text-indigo-400">Projects</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
            A curated selection of projects that demonstrate my skills and creativity.
          </p>
        </div>

        {/* Loading / Empty States */}
        {loading ? (
          <p className="text-center text-gray-400 text-lg">Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">No projects found.</p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <div
                key={project._id}
                className="relative rounded-xl bg-gray-900 border border-gray-700 shadow-lg overflow-hidden transform transition duration-500 hover:scale-[1.03] hover:shadow-2xl cursor-pointer opacity-0 translate-y-8"
                style={{
                  animation: "fadeSlideUp 0.6s forwards",
                  animationDelay: `${idx * 0.15}s`,
                }}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6 text-center">
                  <h3 className="text-2xl font-bold text-indigo-400 mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-5 line-clamp-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-3 rounded-full text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:animate-bounce"
                  >
                    View Project <FaExternalLinkAlt className="ml-3" />
                  </a>
                </div>

                {/* Tools */}
                <div className="bg-gray-800 border-t border-gray-700 p-4 flex flex-wrap gap-3">
                  {project.tools.map((tool, i) => (
                    <div
                      key={i}
                      className="relative group"
                      aria-label={tool}
                      tabIndex={0}
                    >
                      <span className="bg-indigo-700 text-indigo-200 text-xs font-semibold px-3 py-1 rounded-full shadow-sm cursor-default select-none">
                        {tool}
                      </span>
                      <span className="absolute bottom-full mb-2 w-max max-w-xs rounded bg-gray-800 text-gray-200 text-xs font-mono px-2 py-1 opacity-0 group-focus:opacity-100 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        {tool}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeSlideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* For line clamp */
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ProjectsComponent;
