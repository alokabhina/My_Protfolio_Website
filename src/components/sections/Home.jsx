import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Alok Abhinandan
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            A passionate Full-Stack Developer focused on building high-performing, user-friendly web applications.
            I specialize in blending clean design with robust backend logic to deliver seamless digital experiences.
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="#Project"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-blue-500/30 hover:-translate-y-1"
            >
              Explore Projects
            </a>

            <a
              href="#Contact"
              className="border border-blue-500 text-blue-500 py-3 px-8 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
