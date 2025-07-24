import { useEffect } from 'react';
import { NavLink } from '../types';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#expertise' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMenuOpen]);

  return (
    <header className="fixed top-0 w-full bg-[#192a3d] text-white z-50">
      <nav className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          <span className="text-lg font-bold">Nadib Rana</span>
        </div>
        <ul className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:static top-12 right-4 bg-[#2d78a6] md:bg-transparent rounded-md md:rounded-none w-48 md:w-auto`}>
          {navLinks.map((link) => (
            <li key={link.name} className="md:mx-4 my-2 md:my-0 text-center">
              <a href={link.href} className="text-white hover:text-[#ffc107]" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden flex flex-col cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bg-white h-0.5 w-6 my-1"></span>
          <span className="bg-white h-0.5 w-6 my-1"></span>
          <span className="bg-white h-0.5 w-6 my-1"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;