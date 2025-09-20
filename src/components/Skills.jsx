import { Icon } from "@iconify/react";

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

const Skills = () => {
    return (
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
    );
};

export default Skills;
