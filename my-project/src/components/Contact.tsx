import { useState } from 'react';
import { socialLinks, contactInfo } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-[#f4f7fc] text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-600 mb-8">Feel free to reach out for any inquiries, collaborations, or just to say hi!</p>
      <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-8">
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
          <div className="text-left">
            <label htmlFor="name" className="font-bold text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-md focus:border-[#42a5f5] focus:outline-none"
            />
          </div>
          <div className="text-left">
            <label htmlFor="email" className="font-bold text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:border-[#42a5f5] focus:outline-none"
            />
          </div>
          <div className="text-left">
            <label htmlFor="subject" className="font-bold text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              placeholder="Enter subject"
              className="w-full p-3 border border-gray-300 rounded-md focus:border-[#42a5f5] focus:outline-none"
            />
          </div>
          <div className="text-left">
            <label htmlFor="message" className="font-bold text-gray-700">Your Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              placeholder="Write your message"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-md focus:border-[#42a5f5] focus:outline-none resize-y"
            ></textarea>
          </div>
          <button type="submit" className="bg-[#192a3d] text-white py-3 px-6 rounded-md hover:bg-[#42a5f5] transition-colors">
            Send Message
          </button>
          {status && <p className="text-center text-gray-700">{status}</p>}
        </form>
        <div className="flex-1 bg-[#c1bfbf] border border-gray-300 rounded-lg p-6 shadow-md">
          <div className="flex items-center">
            <img src="https://atechitsolution.com/wp-content/uploads/2024/12/5ff.jpg" alt="Profile" className="w-20 h-20 rounded-full" />
            <div className="ml-4">
              <p className="font-bold text-[#0078d7]">Nadib Rana</p>
              <p className="text-gray-600">Web Developer | Problem Solver | CSE Graduate</p>
            </div>
          </div>
          <hr className="my-4 border-gray-400" />
          <div className="flex justify-between">
            <table className="text-sm">
              {contactInfo.map((info, index) => (
                <tr key={index}>
                  <td className="pr-2">
                    <a href={info.href} className="flex items-center text-gray-600 hover:text-[#0078d7]">
                      <img src={info.icon} alt={info.label} className="w-5 h-5 mr-2" />
                      <strong>{info.label}:</strong>
                    </a>
                  </td>
                  <td>{info.value}</td>
                </tr>
              ))}
            </table>
            <div className="flex flex-col gap-2">
              {socialLinks.slice(0, 5).map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                  <img src={link.icon} alt={link.name} className="w-6 h-6 rounded-full hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          <hr className="my-4 border border-gray-400" />
          <div className="flex gap-4 justify-center">
            {socialLinks.slice(5).map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                <img src={link.icon} alt={link.name} className="w-6 h-6 rounded-full hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">"Building innovative and user-friendly web solutions to meet modern needs."</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;