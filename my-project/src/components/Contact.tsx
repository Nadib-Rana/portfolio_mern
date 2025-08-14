import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContractForm: React.FC = () => {
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    // 1️⃣ মেসেজ তোমার ইমেইলে পাঠানো
    emailjs
      .send(
        "service_jgdxz7p", // তোমার Service ID
        "template_tvews17", //  Template ID for admin
        formData,
        "qjJlcNGAAKQb-g9YR" //  Public Key
      )
      .then(() => {
        // 2️⃣ স্বয়ংক্রিয় রিপ্লাই মেসেজ ক্লায়েন্টকে
        return emailjs.send(
          "service_jgdxz7p",
          "template_x7oqj62", // Template ID for client reply
          formData,
          "qjJlcNGAAKQb-g9YR"
        );
      })
      .then(() => {
        setStatus("✅ Message sent successfully and client notified!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <section className="w-full min-h-screen py-20 bg-gray-900">
      <div id="contact" className="max-w-3xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white drop-shadow-md">
            Contract Form
          </h2>
          <p className="text-gray-300 mt-2">
            Fill in the form below to send us your contract request.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-gray-800 shadow-xl p-10 rounded-3xl max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold bg-indigo-400 rounded-lg shadow-lg hover:bg-gray-300 text-white hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>

          {/* Status Message */}
          {status && <p className="mt-4 text-center text-yellow-400">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default ContractForm;
