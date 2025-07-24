import { experience, education } from '../types';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white rounded-lg shadow-md max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-around flex-wrap">
        <div className="flex-1 md:flex-[2] mb-8 md:mb-0">
          <img src="/5ff.jpg" alt="Nadib Rana" className="w-64 rounded-2xl shadow-lg mx-auto animate-[floatImage_4s_infinite_ease-in-out]" />
        </div>
        <div className="flex-[3] md:pr-4">
          <h1 className="text-3xl font-bold underline mb-4">About</h1>
          <p className="text-gray-600">
            I’m a 4th-year Computer Science and Engineering (CSE) student with a passion for building innovative solutions. As a computer and software engineer, I specialize in full-stack web development and mobile application design. I thrive on creating seamless user experiences, whether through intuitive web interfaces or impactful mobile apps.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:-translate-y-2 transition-transform">
          <h2 className="text-xl font-semibold text-center uppercase mb-4">Experience</h2>
          <ul className="list-none">
            {experience.map((exp, index) => (
              <li key={index} className="flex justify-between py-2 border-b border-gray-200 hover:bg-gray-100">
                <span className="font-bold text-gray-700">{exp.detail}</span>
                <span className="text-gray-500">{exp.year}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:-translate-y-2 transition-transform">
          <h2 className="text-xl font-semibold text-center uppercase mb-4">Education</h2>
          <ul className="list-none">
            {education.map((edu, index) => (
              <li key={index} className="flex justify-between py-2 border-b border-gray-200 hover:bg-gray-100">
                <span className="font-bold text-gray-700">{edu.detail}</span>
                <span className="text-gray-500">{edu.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;