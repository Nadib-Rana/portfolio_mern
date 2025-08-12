import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

interface ITestimonial {
  _id: string;
  name: string;
  message: string;
  avatar?: string;
  designation?: string;
}

const TestimonialComponent: React.FC = () => {
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get<ITestimonial[]>(
          "http://localhost:4002/api/testimonial"
        );
        setTestimonials(res.data);
      } catch (err) {
        setError("Failed to load testimonials.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000); // 5 seconds for better readability
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  if (loading) {
    return (
      <p className="text-center text-gray-500 mt-20 text-lg animate-pulse">
        Loading testimonials...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-20 text-lg">{error}</p>
    );
  }

  if (testimonials.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-20 text-lg">
        No testimonials available.
      </p>
    );
  }

  const current = testimonials[currentIndex];

  return (
    <div id="testimonials" className="bg-gradient-to-br from-gray-900 to-black py-20 px-4">
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-400 mb-10">
          Testimonials
        </h2>

        <div className="relative flex justify-center items-center h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-lg flex flex-col items-center gap-6 border border-gray-100"
            >
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md">
                {current.avatar ? (
                  <img
                    src={current.avatar}
                    alt={`${current.name} avatar`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-indigo-500 flex items-center justify-center text-3xl font-bold text-white">
                    {current.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>

              {/* Name & Designation */}
              <div>
                <h3 className="text-2xl font-semibold text-indigo-400">
                  {current.name}
                </h3>
                {current.designation && (
                  <p className="text-indigo-400 font-medium italic mt-1">
                    {current.designation}
                  </p>
                )}
              </div>

              {/* Message */}
              <p className="text-white opacity-70 leading-relaxed text-lg text-center">
                &ldquo;{current.message}&rdquo;
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default TestimonialComponent;
