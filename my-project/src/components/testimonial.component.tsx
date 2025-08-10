import React, { useEffect, useState } from "react";
import axios from "axios";

interface ITestimonial {
  _id: string;
  name: string;
  message: string;
  avatar?: string;
  designation?: string;
}

const TestimonialComponent: React.FC = () => {
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
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

  return (
    <section className="max-w-5xl mx-auto my-20 px-6 py-12 bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-xl text-white">
      <h2 className="text-4xl font-extrabold text-center mb-10">Testimonials</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {testimonials.map(({ _id, name, message, avatar, designation }) => (
          <div
            key={_id}
            className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col md:flex-row gap-6 items-center"
          >
            <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-indigo-600 shadow-md">
              {avatar ? (
                <img
                  src={avatar}
                  alt={`${name} avatar`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-indigo-600 flex items-center justify-center text-2xl font-bold text-white">
                  {name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              {designation && (
                <p className="text-indigo-400 italic mb-2">{designation}</p>
              )}
              <p className="text-gray-300 leading-relaxed">&ldquo;{message}&rdquo;</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialComponent;
