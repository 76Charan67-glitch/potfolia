import { Icon } from "@iconify/react";

const Hero = () => {
    return (
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
    );
};

export default Hero;
