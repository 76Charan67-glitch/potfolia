import { Icon } from "@iconify/react";

const Footer = () => {
    return (
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
    );
};

export default Footer;
