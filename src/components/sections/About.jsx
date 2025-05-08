import { RevealOnScroll } from "../RevealOnScroll";

const SkillSection = ({ title, skills, color }) => (
  <div className="rounded-xl p-6 bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 group">
    <div className="flex items-center mb-6">
      <div className={`w-3 h-8 rounded-full mr-3 ${color === 'blue' ? 'bg-blue-500' : 'bg-cyan-500'} group-hover:h-10 transition-all duration-300`} />
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {skills.map((tech, i) => (
        <span
          key={i}
          className={`${color === 'blue' ? 
            'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300' : 
            'bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300'} 
            py-2 px-4 rounded-full text-sm font-medium hover:scale-105 transition-all duration-200 cursor-default`}
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const TimelineItem = ({ title, details }) => (
  <li className="flex">
    <div className="flex-shrink-0 mt-1">
      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
    </div>
    <div>
      <strong className="text-white font-semibold">{title}</strong>
      <p className="text-sm text-gray-400 mt-1">{details}</p>
    </div>
  </li>
);

export const About = () => {
  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "React.js",
    "Next.js",
    "Redux"
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "RESTful APIs",
    "JWT Authentication"
  ];

  const educationItems = [
    {
      title: "B.Sc in Computer Science & Physics",
      details: "Digvijay Nath P.G. College, Gorakhpur"
    },
    {
      title: "Relevant Coursework",
      details: "DCA, Full Stack Development, Web Technologies, Data Structures & Algorithms"
    }
  ];

  const workItems = [
    {
      title: "MERN Stack Intern (3 Months) - NIELIT",
      details:
        "Developed full-stack web applications using MERN (MongoDB, Express.js, React, Node.js) and collaborated on building RESTful APIs with optimized front-end components."
    }
  ];

  return (
    <section
      id="About"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-900/50 to-gray-900"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
          </div>

          <div className="rounded-2xl p-8 border border-white/10 bg-gray-900/50 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
            <p className="text-gray-300/90 mb-10 text-lg leading-relaxed">
              Passionate full-stack developer with expertise in building scalable web applications and innovative solutions. I blend technical skills with creative problem-solving to deliver exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <SkillSection title="Frontend" skills={frontendSkills} color="blue" />
              <SkillSection title="Backend" skills={backendSkills} color="cyan" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl border border-white/10 bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Education
                </h3>
                <ul className="space-y-4 text-gray-300/90">
                  {educationItems.map((item, idx) => (
                    <TimelineItem key={idx} title={item.title} details={item.details} />
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Work Experience
                </h3>
                <ul className="space-y-6 text-gray-300/90">
                  {workItems.map((item, idx) => (
                    <TimelineItem key={idx} title={item.title} details={item.details} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};