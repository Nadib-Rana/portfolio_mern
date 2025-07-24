import { socialLinks } from '../types';

const Home: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-[#192a3d] to-[#29425c] text-white pt-24 pb-16 px-4 text-center">
      <h1 className="text-5xl font-bold font-['Monoton'] mb-8">Welcome to My Portfolio</h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-6xl mx-auto">
        <div className="text-left">
          <p className="text-xl">
            I'm <span className="text-3xl font-medium bg-gradient-to-r from-[#ff7eb3] via-[#ff758c] to-[#7b9eff] bg-[length:300%] animate-[magicalColors_3s_infinite_linear] bg-clip-text text-transparent">Nadib Rana</span>,<br />
            <span className="text-2xl">A professional web developer dedicated to delivering high-quality digital solutions.</span>
          </p>
          <p className="italic text-lg text-[#ffc107] mt-4">"Code with passion, create with purpose." - Nadib Rana</p>
          <div className="flex gap-4 mt-6">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                <img src={link.icon} alt={link.name} className="w-8 h-8 rounded-full hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <img src="/5ff.jpg" alt="Nadib Rana" className="w-64 rounded-2xl shadow-lg animate-[floatImage_4s_infinite_ease-in-out]" />
        </div>
      </div>
    </section>
  );
};

export default Home;