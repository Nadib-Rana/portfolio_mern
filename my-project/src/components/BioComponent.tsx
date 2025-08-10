import React, { useEffect, useState } from "react";
import axios from "axios";

interface IBio {
  name: string;
  title: string;
  position?: string;
  description: string;
  profilePhoto: string;
  socialMediaIcone: string;
  socialMediaLink: string;
}

const BioSection: React.FC = () => {
  const [bio, setBio] = useState<IBio | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBio = async () => {
      try {
        const response = await axios.get<IBio>("http://localhost:4002/api/bio");
        setBio(response.data);
      } catch (error) {
        setError("Failed to load bio data.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBio();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-400 mt-28 text-lg animate-pulse">
        Loading bio...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-28 text-lg">{error}</p>
    );
  }

  if (!bio) {
    return (
      <p className="text-center text-gray-400 mt-28 text-lg">No bio data found.</p>
    );
  }

  return (
    <section
      className="max-w-5xl mx-auto my-20 p-10 bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-xl text-white"
      aria-label="Bio section"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="relative w-44 h-44 rounded-full overflow-hidden border-8 border-indigo-600 shadow-xl ring-4 ring-indigo-500/50">
          <img
            src={bio.profilePhoto}
            alt={`${bio.name} profile`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 rounded-full bg-indigo-500/25 blur-3xl pointer-events-none"></div>
        </div>

        {/* Info */}
        <div className="flex-1 max-w-3xl">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
            {bio.name}
          </h1>
          <h2 className="text-indigo-400 text-2xl font-semibold mt-1">{bio.title}</h2>
          {bio.position && (
            <p className="text-indigo-300 italic mt-2 text-lg">{bio.position}</p>
          )}

          <p className="mt-6 text-gray-300 text-lg leading-relaxed border-l-4 border-indigo-500 pl-6 italic relative before:absolute before:-left-3 before:top-0 before:text-indigo-500 before:text-7xl before:content-['“'] after:absolute after:-bottom-6 after:right-0 after:text-indigo-500 after:text-7xl after:content-['”']">
            {bio.description}
          </p>

          <a
            href={bio.socialMediaLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social Media Profile"
            className="mt-10 inline-flex items-center space-x-4 bg-indigo-600 hover:bg-indigo-700 rounded-full px-8 py-3 shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105"
          >
            <i className={`${bio.socialMediaIcone} text-4xl`} aria-hidden="true" />
            <span className="text-white font-semibold text-xl select-none">
              Connect with me
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
