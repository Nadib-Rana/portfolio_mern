import { coreCompetencies, technicalStack, academicFocus, uiuxDesign, sqa } from '../types';

const Skills: React.FC = () => {
  return (
    <section id="expertise" className="py-16 px-4 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-12 relative after:content-[''] after:absolute after:bottom-[-20px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#14b8a6] after:rounded">
          My Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Core Competencies */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:-translate-y-2 transition-transform">
            <div className="bg-[#192a3d] text-white text-center py-6 relative after:content-[''] after:absolute after:bottom-[-25px] after:left-0 after:w-full after:h-12 after:bg-[#192a3d] after:clip-path-polygon-[0_0,100%_0,100%_30%,50%_100%,0_30%]">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-microchip text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold">Core Competencies</h3>
            </div>
            <div className="mt-10">
              {coreCompetencies.map((skill, index) => (
                <div key={index} className="mb-6">
                  <span className="block text-[#1e293b] font-medium">{skill.name}</span>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#192a3d] to-[#14b8a6] rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Technical Stack */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:-translate-y-2 transition-transform">
            <div className="bg-[#192a3d] text-white text-center py-6 relative after:content-[''] after:absolute after:bottom-[-25px] after:left-0 after:w-full after:h-12 after:bg-[#192a3d] after:clip-path-polygon-[0_0,100%_0,100%_30%,50%_100%,0_30%]">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-laptop-code text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold">Technical Stack</h3>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {technicalStack.map((tech, index) => (
                <span key={index} className="bg-gray-200 text-[#1e293b] py-2 px-4 rounded-full text-sm font-medium hover:bg-[#192a3d] hover:text-white hover:-translate-y-1 transition-all">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {/* Academic Focus */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:-translate-y-2 transition-transform">
            <div className="bg-[#192a3d] text-white text-center py-6 relative after:content-[''] after:absolute after:bottom-[-25px] after:left-0 after:w-full after:h-12 after:bg-[#192a3d] after:clip-path-polygon-[0_0,100%_0,100%_30%,50%_100%,0_30%]">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-graduation-cap text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold">Academic Focus</h3>
            </div>
            <ul className="mt-10 list-none">
              {academicFocus.map((focus, index) => (
                <li key={index} className="py-4 flex items-center border-b border-gray-100 text-[#1e293b] font-medium">
                  <i className={`fas ${focus.icon} text-[#14b8a6] mr-3 text-lg`}></i>
                  {focus.name}
                </li>
              ))}
            </ul>
          </div>
          {/* UI/UX Design */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:-translate-y-2 transition-transform">
            <div className="bg-[#192a3d] text-white text-center py-6 relative after:content-[''] after:absolute after:bottom-[-25px] after:left-0 after:w-full after:h-12 after:bg-[#192a3d] after:clip-path-polygon-[0_0,100%_0,100%_30%,50%_100%,0_30%]">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-palette text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold">UI/UX Design</h3>
            </div>
            <ul className="mt-10 list-none">
              {uiuxDesign.map((tool, index) => (
                <li key={index} className="py-4 flex items-center border-b border-gray-100 text-[#1e293b] font-medium">
                  <i className={`fab ${tool.icon} text-[#14b8a6] mr-3 text-lg`}></i>
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>
          {/* SQA */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:-translate-y-2 transition-transform">
            <div className="bg-[#192a3d] text-white text-center py-6 relative after:content-[''] after:absolute after:bottom-[-25px] after:left-0 after:w-full after:h-12 after:bg-[#192a3d] after:clip-path-polygon-[0_0,100%_0,100%_30%,50%_100%,0_30%]">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check-double text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold">SQA</h3>
            </div>
            <ul className="mt-10 list-none">
              {sqa.map((tool, index) => (
                <li key={index} className="py-4 flex items-center border-b border-gray-100 text-[#1e293b] font-medium">
                  <i className={`fas ${tool.icon} text-[#14b8a6] mr-3 text-lg`}></i>
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;