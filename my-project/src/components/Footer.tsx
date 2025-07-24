import { socialLinks, contactInfo } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="max-w-md">
          <h3 className="text-2xl font-bold text-[#00d9ff] mb-4">Nadib Rana</h3>
          <p className="text-sm">Building innovative and user-friendly web solutions to meet modern needs.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <h4 className="text-lg font-semibold text-[#00d9ff] mb-4">Quick Links</h4>
            <ul className="list-none">
              {['Home', 'About', 'Projects', 'Contact'].map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-[#00d9ff] text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#00d9ff] mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.slice(0, 5).map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                  <img src={link.icon} alt={link.name} className="w-8 h-8 rounded-full hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#00d9ff] mb-4">Contact</h4>
            {contactInfo.map((info, index) => (
              <p key={index} className="text-sm mb-2">
                <strong>{info.label}:</strong>{' '}
                {info.href ? (
                  <a href={info.href} className="text-[#00d9ff] hover:underline">{info.value}</a>
                ) : (
                  info.value
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-6 pt-4 text-center">
        <p className="text-sm text-gray-400">© 2024 Nadib Rana | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;