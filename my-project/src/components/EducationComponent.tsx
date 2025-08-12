import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaGraduationCap } from "react-icons/fa";

interface IEdu {
  _id: string;
  degree: string;
  institution: string;
  year: number;
  grade?: string;
}

const EducationComponent: React.FC = () => {
  const [education, setEducation] = useState<IEdu[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const res = await axios.get<IEdu[]>(
          "http://localhost:4002/api/edu"
        );
        setEducation(res.data);
      } catch (error) {
        console.error("Error fetching education:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  return (
    <section id="education" className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Education <span className="text-indigo-400">Journey</span>
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            My academic background that shaped my technical expertise.
          </p>
        </div>

        {/* Loading & Empty State */}
        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : education.length === 0 ? (
          <p className="text-center text-gray-400">No education records found.</p>
        ) : (
          <div className="relative border-l-4 border-indigo-500 pl-8">
            {education.map((edu, index) => (
              <div
                key={edu._id}
                className="mb-12 relative opacity-0 translate-y-6"
                style={{
                  animation: `fadeUp 0.6s ease forwards`,
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {/* Icon */}
                <div className="absolute -left-[37px] bg-indigo-500 rounded-full p-3 shadow-lg">
                  <FaGraduationCap className="text-white text-lg" />
                </div>

                {/* Card */}
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow border border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-400">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-300">{edu.institution}</p>
                      {edu.grade && (
                        <p className="text-gray-400 text-sm mt-1">
                          Grade: {edu.grade}
                        </p>
                      )}
                    </div>
                    <div className="text-indigo-300 font-medium mt-2 sm:mt-0">
                      {edu.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default EducationComponent;
