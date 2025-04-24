import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setmenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex flex-col items-center justify-center
        bg-gradient-to-br from-[#0f172a]/90 to-[#1e293b]/90 backdrop-blur-md
        transition-all duration-500 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
      `}
    >
      {/* Close Button */}
      <button
        onClick={() => setmenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl hover:scale-110 transition-transform duration-200"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu Links */}
      {["Home", "About", "Project", "Contact"].map((section, i) => (
        <a
          key={section}
          href={`#${section}`}
          onClick={() => setmenuOpen(false)}
          className={`text-3xl font-semibold text-white my-4 tracking-wide 
          transition-all duration-500 ease-in-out transform
          ${
            menuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-5 scale-95"
          }
          hover:text-cyan-400 hover:scale-105`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          {section}
        </a>
      ))}
    </div>
  );
};
