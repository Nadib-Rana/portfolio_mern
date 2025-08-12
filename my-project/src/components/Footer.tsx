import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/nadibrana",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/nadibrana",
    icon: <FaLinkedin />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/nadibrana",
    icon: <FaTwitter />,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/nadibrana",
    icon: <FaFacebook />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/nadibrana",
    icon: <FaInstagram />,
  },
];

const contactInfo = [
  { label: "Email", value: "nadib@example.com", href: "mailto:nadib@example.com" },
  { label: "Phone", value: "+880 1234 567 890", href: "tel:+8801234567890" },
  { label: "Location", value: "Dhaka, Bangladesh" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Brand Info */}
        <div className="max-w-md">
          <h3 className="text-3xl font-bold text-[#00d9ff] mb-3">Nadib Rana</h3>
          <p className="text-gray-300 leading-relaxed">
            Crafting innovative, clean, and user-friendly web solutions to help
            your business grow and shine in the digital age.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-[#00d9ff] mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-[#00d9ff] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold text-[#00d9ff] mb-4">Follow Me</h4>
          <div className="flex space-x-5 text-2xl text-gray-400">
            {socialLinks.map(({ href, icon, name }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="hover:text-[#00d9ff] transition-colors transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-[#00d9ff] mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            {contactInfo.map(({ label, value, href }) => (
              <li key={label}>
                <strong>{label}:</strong>{" "}
                {href ? (
                  <a
                    href={href}
                    className="text-[#00d9ff] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {value}
                  </a>
                ) : (
                  <span>{value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm select-none">
        &copy; {new Date().getFullYear()} Nadib Rana. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
