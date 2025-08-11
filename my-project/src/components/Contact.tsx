import { useState } from "react";
import { socialLinks, contactInfo } from "../types";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    try {
      const response = await fetch("http://localhost:5000/api/contracts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 bg-black text-white max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-extrabold mb-4 text-center text-white">
        Contact Me
      </h2>
      <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
        Feel free to reach out for any inquiries, collaborations, or just to say
        hi!
      </p>
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-[#1a1a1a] rounded-xl shadow-lg p-8 max-w-lg mx-auto md:mx-0 border border-gray-700"
          noValidate
        >
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-semibold mb-2 text-gray-200"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-600 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-2 text-gray-200"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-600 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold mb-2 text-gray-200"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Enter subject"
              className="w-full p-3 border border-gray-600 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2 text-gray-200"
            >
              Your Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message"
              rows={5}
              className="w-full p-3 border border-gray-600 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white resize-y"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors"
          >
            Send Message
          </button>
          {status && (
            <p
              className={`mt-4 text-center ${
                status.includes("successfully") ? "text-green-400" : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>

        {/* Contact Info */}
        <aside className="flex-1 max-w-md bg-[#1a1a1a] rounded-xl shadow-lg p-8 border border-gray-700">
          <div className="flex items-center gap-5 mb-6">
            <img
              src="https://atechitsolution.com/wp-content/uploads/2024/12/5ff.jpg"
              alt="Nadib Rana"
              className="w-20 h-20 rounded-full object-cover border-2 border-white"
              loading="lazy"
            />
            <div>
              <p className="text-xl font-bold text-white">Nadib Rana</p>
              <p className="text-gray-400">
                Web Developer | Problem Solver | CSE Graduate
              </p>
            </div>
          </div>

          <hr className="my-6 border-gray-600" />

          <div className="flex flex-col gap-6 mb-6">
            <table className="w-full text-left text-gray-300">
              <tbody>
                {contactInfo.map(({ label, value, href }, i) => (
                  <tr key={i}>
                    <td className="pr-4 font-semibold text-white">{label}:</td>
                    <td>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        {value}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <hr className="mb-6 border-gray-600" />

          <div className="flex justify-center flex-wrap gap-4 mb-6">
            {socialLinks.map(({ href, icon, name }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-10 h-10 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-transform hover:scale-110 border border-gray-500"
              >
                <img
                  src={icon}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>

          <p className="text-center text-gray-400 italic text-sm">
            "Building innovative and user-friendly web solutions to meet modern
            needs."
          </p>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
