import { useEffect, useState } from "react";

const filterCategories = [
    "All",
    "UI/UX",
    "Frontend",
    "Mini Projects",
    "Others",
];



const Projects = ({ activeFilter, setActiveFilter }) => {

    const [projects, setProjects] = useState([
        {
            title: "AirCalling Landing Page",
            category: "Frontend",
            image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=entropy&auto=format",
        },
        {
            title: "Hotel Landing Page",
            category: "Frontend",
            image:
                "https://plus.unsplash.com/premium_photo-1723491285855-f1035c4c703c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    ]);

    useEffect(() => {
        if (activeFilter === "All") {
            setProjects(projects);
        } else {
            setProjects([...projects].filter((project) => project.category === activeFilter));
        }
    }, [activeFilter,]);

    return (
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
    );
};

export default Projects;
