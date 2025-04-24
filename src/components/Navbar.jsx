import { useEffect } from "react";

export const Navbar = ({ menuOpen, setmenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(15,15,25,0.75)] backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a href="#Home" className="text-2xl font-bold font-mono text-white tracking-wider hover:text-blue-500 transition">
            Alok<span className="text-blue-500">.Abhinandan</span>
          </a>

          {/* Hamburger Icon - Mobile */}
          <div
            className="md:hidden w-8 h-6 flex flex-col justify-between items-center cursor-pointer z-50"
            onClick={() => setmenuOpen(prev => !prev)}
          >
            <span
              className={`block w-full h-[3px] bg-white rounded-sm transition-all duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-[9px]" : ""
              }`}
            />
            <span
              className={`block w-full h-[3px] bg-white rounded-sm transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-full h-[3px] bg-white rounded-sm transition-all duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {["Home", "About", "Project", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-300 hover:text-blue-400 font-medium transition duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
