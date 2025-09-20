import { Icon } from "@iconify/react";
import { useState } from "react";

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("Frontend");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: ''
  });

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setFormData({ name: '', email: '', content: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const skills = [
    { name: "Learning & Growth", percentage: 90 },
    { name: "Problem Solving", percentage: 85 },
    { name: "Code with Creativity", percentage: 95 },
    { name: "Teamwork & Communication", percentage: 80 },
  ];

  const projects = [
    {
      title: "AirCalling Landing Page",
      category: "Frontend",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Business Landing Page Design",
      category: "Mini Projects",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Ecom Web Page Design",
      category: "UI/UX",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=entropy&auto=format",
    },
  ];

  const techSkills = [
    {
      name: "JavaScript",
      icon: "logos:javascript",
    },
    {
      name: "TypeScript",
      icon: "logos:typescript-icon",
    },
    {
      name: "React",
      icon: "logos:react",
    },
    {
      name: "Next.js",
      icon: "logos:nextjs-icon",
    },
    {
      name: "Node.js",
      icon: "logos:nodejs-icon",
    },
    {
      name: "Express.js",
      icon: "simple-icons:express",
    },
    {
      name: "NestJS",
      icon: "logos:nestjs",
    },
    {
      name: "Socket.io",
      icon: "logos:socket-io",
    },
    {
      name: "PostgreSQL",
      icon: "logos:postgresql",
    },
    {
      name: "MongoDB",
      icon: "logos:mongodb",
    },
    {
      name: "Sass/SCSS",
      icon: "logos:sass",
    },
    {
      name: "TailwindCSS",
      icon: "logos:tailwindcss-icon",
    },
    {
      name: "Figma",
      icon: "logos:figma",
    },
    {
      name: "Cypress",
      icon: "logos:cypress",
    },
    {
      name: "Storybook",
      icon: "logos:storybook-icon",
    },
    {
      name: "Git",
      icon: "logos:git-icon",
    },
  ];

  const filterCategories = [
    "All",
    "UI/UX",
    "Frontend",
    "Mini Projects",
    "Others",
  ];


  return (
    <div className={`bg-gray-900 text-white min-h-screen font-sans transition-colors duration-300`}>
      <nav className={`flex justify-between items-center max-w-6xl mx-auto py-6 px-4 sm:px-6 md:px-8 relative bg-gray-900 transition-colors duration-300`}>
        <div className="text-2xl font-bold">
          <span className="text-orange-500">Fawzi</span>
          <span className="text-white">U</span>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#home"
            className={`hover:text-orange-500 transition-colors font-medium text-gray-300`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`hover:text-orange-500 transition-colors font-medium text-gray-300`}
          >
            About Me
          </a>
          <a
            href="#projects"
            className={`hover:text-orange-500 transition-colors font-medium text-gray-300`}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`hover:text-orange-500 transition-colors font-medium text-gray-300`}
          >
            Contact
          </a>
          <button onClick={downloadCV} className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-md font-semibold transition-colors text-white">
            Download CV
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-2">

          <button
            onClick={toggleMenu}
            className={`text-white p-2 focus:outline-none`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 bg-gray-800 border-t border-gray-700 shadow-lg z-50 transition-colors duration-300`}>
            <div className="flex flex-col space-y-4 px-4 py-6">
              <a
                href="#home"
                onClick={closeMenu}
                className={`hover:text-orange-500 transition-colors font-medium text-gray-300 py-2`}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className={`hover:text-orange-500 transition-colors font-medium text-gray-300 py-2`}
              >
                About Me
              </a>
              <a
                href="#projects"
                onClick={closeMenu}
                className={`hover:text-orange-500 transition-colors font-medium text-gray-300 py-2`}
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className={`hover:text-orange-500 transition-colors font-medium text-gray-300 py-2`}
              >
                Contact
              </a>
              <button
                onClick={() => { closeMenu(); downloadCV(); }}
                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold transition-colors text-white w-full text-left"
              >
                Download CV
              </button>
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        className={`py-20 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 bg-gray-900 transition-colors duration-300`}
      >
        <div className="grid md:grid-cols-2 items-center gap-15">
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className={`text-gray-300 mb-2 font-medium`}>
              Hi I am
            </p>
            <p className="text-orange-500 text-2xl mb-4 font-bold">
              Fawzi Sayed
            </p>
            <h1 className={`text-5xl md:text-7xl font-black leading-tight mb-6 text-white`}>
              FRONTEND
              <br />
              DEVELOPER
            </h1>
            <p className={`text-gray-300 mb-8 max-w-md mx-auto md:mx-0 text-lg`}>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-md font-semibold transition-colors text-white text-lg">
              Hire Me
            </button>
          </div>

          <div className="flex flex-col items-center justify-center order-1 md:order-2">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-[500px] lg:w-[400px] lg:h-[500px] rounded-full overflow-hidden mb-6 md:mb-8">
              <img
                src="/images/avatar1.png"
                alt="Fawzi Sayed"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-700 hover:bg-orange-500 hover:text-white transition-colors text-gray-300"
              >
                <Icon
                  icon="mdi:facebook"
                  className="text-xl"
                />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-700 hover:bg-orange-500 hover:text-white transition-colors text-gray-300"
              >
                <Icon
                  icon="mdi:github"
                  className="text-xl"
                />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-700 hover:bg-orange-500 hover:text-white transition-colors text-gray-300"
              >
                <Icon
                  icon="mdi:instagram"
                  className="text-xl"
                />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-700 hover:bg-orange-500 hover:text-white transition-colors text-gray-300"
              >
                <Icon
                  icon="mdi:linkedin"
                  className="text-xl"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className={`px-4 sm:px-6 md:px-8 max-w-6xl mx-auto py-20 bg-gray-900 transition-colors duration-300`}
      >
        <div className="grid md:grid-cols-2 items-center gap-15">
          <div className="flex justify-center order-1 md:order-2">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-[500px] lg:w-[400px] lg:h-[500px] rounded-full overflow-hidden">
              <img
                src="/images/avatar2.png"
                alt="About Fawzi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className={`text-4xl font-bold mb-6 text-white`}>
              About Me
            </h2>
            <p className={`text-gray-300 mb-8 text-lg`}>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className={`font-semibold text-white`}>
                      {skill.name}
                    </span>
                    <span className="font-medium text-orange-500">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-orange-500 h-3 rounded-full relative"
                      style={{ width: `${skill.percentage}%` }}
                    >
                      <div className="absolute right-0 top-0 w-4 h-4 bg-white rounded-full -mt-0.5 -mr-2 border-2 border-orange-500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className={`px-4 sm:px-6 md:px-8 py-20 max-w-6xl mx-auto bg-gray-800 transition-colors duration-300`}
      >
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 text-white`}>My Projects</h2>
          <p className={`text-gray-300 max-w-2xl mx-auto mb-8 text-lg`}>
            Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
            mauris est risus lectus. Phasellus consequat urna tellus
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${activeFilter === category
                  ? "bg-orange-500 text-white"
                  : `bg-gray-800 text-gray-300 border border-gray-700 hover:border-orange-500`
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg`}
            >
              <div className="h-64 bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-orange-500 text-sm font-semibold bg-orange-100 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className={`text-xl font-bold mt-3 text-white`}>
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className={`px-4 sm:px-6 md:px-8 py-20 max-w-6xl mx-auto bg-gray-900 transition-colors duration-300`}
      >
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 text-white`}>Skills</h2>
          <p className={`text-gray-300 max-w-2xl mx-auto text-lg`}>
            The skills, tools and technologies I am really good at:
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {techSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Icon icon={skill.icon} className="w-12 h-12" />
              </div>
              <span className="text-gray-600 dark:text-gray-300 text-sm text-center group-hover:text-orange-500 transition-colors font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </section>

      <section
        id="languages-education"
        className={`px-4 sm:px-6 md:px-8 py-20 max-w-6xl mx-auto`}
      >
        <div className="grid md:grid-cols-2 gap-15">
          <div>
            <h2 className={`text-4xl font-bold mb-8 text-white text-center md:text-left`}>
              Languages
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className={`font-semibold text-white text-lg`}>
                    Tamil
                  </span>
                  <span className="font-medium text-orange-500 text-lg">
                    95%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-orange-500 h-3 rounded-full relative transition-all duration-1000 ease-out"
                    style={{ width: "95%" }}
                  >
                    <div className="absolute right-0 top-0 w-4 h-4 bg-white rounded-full -mt-0.5 -mr-2 border-2 border-orange-500"></div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className={`font-semibold text-white text-lg`}>
                    English
                  </span>
                  <span className="font-medium text-orange-500 text-lg">
                    85%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-orange-500 h-3 rounded-full relative transition-all duration-1000 ease-out"
                    style={{ width: "85%" }}
                  >
                    <div className="absolute right-0 top-0 w-4 h-4 bg-white rounded-full -mt-0.5 -mr-2 border-2 border-orange-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className={`text-4xl font-bold mb-8 text-white text-center md:text-left`}>
              Education
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Icon
                      icon="mdi:school"
                      className="text-white text-2xl"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold text-white mb-2`}>
                    ABC University
                  </h3>
                  <p className={`text-gray-300 font-medium mb-1`}>
                    Bachelor of Business Administration
                  </p>
                  <p className="text-orange-500 font-semibold">
                    2020 - 2024
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Icon
                      icon="mdi:book-open-page-variant"
                      className="text-white text-2xl"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold text-white mb-2`}>
                    XYZ College
                  </h3>
                  <p className={`text-gray-300 font-medium mb-1`}>
                    Higher Secondary
                  </p>
                  <p className="text-orange-500 font-semibold">
                    2018 - 2020
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className={`px-4 sm:px-6 md:px-8 py-20 max-w-6xl mx-auto bg-gray-800 transition-colors duration-300`}
      >
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 text-white`}>
            Let's Develop Together
          </h2>
          <p className={`text-gray-300 max-w-2xl mx-auto text-lg`}>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="px-6 py-4 bg-gray-800 rounded-md placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-700 text-white transition-colors duration-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="px-6 py-4 bg-gray-800 rounded-md placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-700 text-white transition-colors duration-300"
              required
            />
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Enter Your Message"
              rows="5"
              className="px-6 py-4 bg-gray-800 rounded-md placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-700 text-white transition-colors duration-300 resize-none"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-md font-semibold transition-colors text-white whitespace-nowrap"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className={`px-4 sm:px-6 md:px-8 py-12 border-t border-gray-700 max-w-6xl mx-auto bg-gray-900 transition-colors duration-300 `}>
        <div className="text-center">
          <div className="text-2xl font-bold mb-8">
            <span className="text-orange-500">Fawzi</span>
            <span className="text-white">U</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a
              href="#home"
              className={`hover:text-orange-500 transition-colors font-medium text-gray-300`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`hover:text-orange-500 transition-colors font-medium text-gray-300`}
            >
              About Me
            </a>
            <a
              href="#projects"
              className={`hover:text-orange-500 transition-colors font-medium text-gray-300`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`hover:text-orange-500 transition-colors font-medium text-gray-300`}
            >
              Contact
            </a>
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="#"
              className="w-12 h-12 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center hover:text-white transition-colors text-gray-300"
            >
              <Icon icon="mdi:facebook" className="text-xl" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center hover:text-white transition-colors text-gray-300"
            >
              <Icon icon="mdi:github" className="text-xl" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center hover:text-white transition-colors text-gray-300"
            >
              <Icon icon="mdi:instagram" className="text-xl" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center hover:text-white transition-colors text-gray-300"
            >
              <Icon icon="mdi:linkedin" className="text-xl" />
            </a>
          </div>

          <p className="text-gray-300">
            © 2025{" "}
            <span className="text-orange-500 font-semibold">Fawziuu</span> All
            Rights Reserved, Inc.
          </p>
        </div>
      </footer>
    </div>
  );
};
