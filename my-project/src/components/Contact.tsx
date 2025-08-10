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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      className="py-16 px-6 bg-[#f4f7fc] text-gray-800 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-extrabold mb-4 text-center text-gray-900">
        Contact Me
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Feel free to reach out for any inquiries, collaborations, or just to say
        hi!
      </p>
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white rounded-xl shadow-md p-8 max-w-lg mx-auto md:mx-0"
          noValidate
        >
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-semibold mb-2 text-gray-700"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#42a5f5]"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-2 text-gray-700"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#42a5f5]"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold mb-2 text-gray-700"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#42a5f5]"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2 text-gray-700"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#42a5f5] resize-y"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#192a3d] text-white py-3 rounded-md font-semibold hover:bg-[#42a5f5] transition-colors"
          >
            Send Message
          </button>
          {status && (
            <p
              className={`mt-4 text-center ${
                status.includes("successfully") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>

        {/* Contact Info */}
        <aside className="flex-1 max-w-md bg-white rounded-xl shadow-md p-8">
          <div className="flex items-center gap-5 mb-6">
            <img
              src="https://atechitsolution.com/wp-content/uploads/2024/12/5ff.jpg"
              alt="Nadib Rana"
              className="w-20 h-20 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <p className="text-xl font-bold text-[#0078d7]">Nadib Rana</p>
              <p className="text-gray-600">Web Developer | Problem Solver | CSE Graduate</p>
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          <div className="flex flex-col gap-6 mb-6">
            <table className="w-full text-left text-gray-700">
              <tbody>
                {contactInfo.map(({ label, value, href }, i) => (
                  <tr key={i}>
                    <td className="pr-4 font-semibold">{label}:</td>
                    <td>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0078d7] hover:underline"
                      >
                        {value}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <hr className="mb-6 border-gray-300" />

          <div className="flex justify-center flex-wrap gap-4 mb-6">
            {socialLinks.map(({ href, icon, name }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-10 h-10 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow transform hover:scale-110"
              >
                <img src={icon} alt={name} className="w-full h-full object-cover" />
              </a>
            ))}
          </div>

          <p className="text-center text-gray-600 italic text-sm">
            &quot;Building innovative and user-friendly web solutions to meet modern needs.&quot;
          </p>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
