import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBriefcase } from "react-icons/fa";

interface IExpertise {
  _id: string;
  role: string;
  institution: string;
  year: string;
}

const ExpertiseComponent: React.FC = () => {
  const [expertise, setExpertise] = useState<IExpertise[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpertise = async () => {
      try {
        const res = await axios.get<IExpertise[]>(
          "http://localhost:4002/api/expertise"
        );
        setExpertise(res.data);
      } catch (error) {
        console.error("Error fetching expertise:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpertise();
  }, []);

  return (
    <section id="expertise" className="py-16 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Professional <span className="text-indigo-400">Expertise</span>
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            My roles, positions, and work experience over the years.
          </p>
        </div>

        {/* Loading & Empty */}
        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : expertise.length === 0 ? (
          <p className="text-center text-gray-400">No expertise records found.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((exp, index) => (
              <div
                key={exp._id}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-700 opacity-0 translate-y-6"
                style={{
                  animation: `fadeUp 0.6s ease forwards`,
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {/* Icon */}
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-500 rounded-full p-3 shadow-lg mr-4">
                    <FaBriefcase className="text-white text-lg" />
                  </div>
                  <h3 className="text-xl font-semibold text-indigo-400">
                    {exp.role}
                  </h3>
                </div>
                {/* Institution & Year */}
                <p className="text-gray-300">{exp.institution}</p>
                <p className="text-indigo-300 text-sm mt-2">{exp.year}</p>
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

export default ExpertiseComponent;
