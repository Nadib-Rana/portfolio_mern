import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

interface IBio {
  name: string;
  description: string;
  title: string;
  socialMediaLinks: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
  profilePhoto: string;
  position?: string;
  quote?: string;
}

const Bio: React.FC = () => {
  const [bioData, setBio] = useState<IBio | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBio = async () => {
      try {
        const res = await axios.get<IBio>("http://localhost:4002/api/bio");
        setBio(res.data);
      } catch (error) {
        console.error("Error fetching bio:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBio();
  }, []);

  if (loading) {
    return (
      <section id="bio" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center">
              <div className="w-72 h-72 rounded-full bg-gray-900 animate-pulse"></div>
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4 space-y-5">
              <div className="h-10 w-3/4 bg-gray-900 animate-pulse rounded"></div>
              <div className="h-7 w-1/2 bg-gray-900 animate-pulse rounded"></div>
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-5 w-full bg-gray-900 animate-pulse rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!bioData) return null;

  return (
    <section id="bio" className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <motion.div
            className="w-full md:w-2/3 lg:w-3/4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {bioData.name}
              <motion.span
                className="text-blue-500"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                .
              </motion.span>
            </motion.h1>

            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-blue-500">
                {bioData.title}
              </h2>
              {bioData.position && (
                <motion.span
                  className="px-3 py-1 bg-gray-800 text-blue-400 text-sm rounded-full border border-blue-500/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {bioData.position}
                </motion.span>
              )}
            </motion.div>

            <motion.p
              className="text-lg text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {bioData.description}
            </motion.p>

            {bioData.quote && (
              <motion.blockquote
                className="text-blue-400 italic mb-8 border-l-4 border-blue-500 pl-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                "{bioData.quote}"
              </motion.blockquote>
            )}

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {bioData.socialMediaLinks.linkedin && (
                <motion.a
                  href={bioData.socialMediaLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                  aria-label="LinkedIn"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin className="text-2xl" />
                </motion.a>
              )}
              {bioData.socialMediaLinks.facebook && (
                <motion.a
                  href={bioData.socialMediaLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                  aria-label="Facebook"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaFacebook className="text-2xl" />
                </motion.a>
              )}
              {bioData.socialMediaLinks.instagram && (
                <motion.a
                  href={bioData.socialMediaLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                  aria-label="Instagram"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram className="text-2xl" />
                </motion.a>
              )}
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            className="w-full md:w-1/3 lg:w-1/4 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-[30px] overflow-hidden border-4 border-blue-500 shadow-xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {bioData.profilePhoto ? (
                <motion.img
                  src={bioData.profilePhoto}
                  alt={bioData.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                />
              ) : (
                <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                  <span className="text-gray-500 text-2xl">Photo</span>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
