import { projects } from '../types';

const Projects: React.FC = () => {
  return (
    <section  id="project" className="py-16 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-2 transition-transform relative group">
            <div className="relative">
              <img src={project.image} alt={project.title} className="w-24 h-24 rounded-2xl border-4 border-double border-green-600 mx-auto mt-4 object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold animate-[fadeIn_0.8s_forwards]">{project.title}</h3>
              <p className="text-gray-600 mt-2 animate-[fadeIn_0.8s_forwards_0.2s]">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#192a3d] text-white py-2 px-4 rounded-md mt-4 hover:bg-[#0077c2] animate-[fadeIn_0.8s_forwards_0.4s]">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;