const skills = [
    { name: "Learning & Growth", percentage: 90 },
    { name: "Problem Solving", percentage: 85 },
    { name: "Code with Creativity", percentage: 95 },
    { name: "Teamwork & Communication", percentage: 80 },
];

const About = () => {
    return (
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
    );
};

export default About;
