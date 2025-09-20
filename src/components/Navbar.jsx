const Navbar = ({ isMenuOpen, toggleMenu, closeMenu, downloadCV }) => {
    return (
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
    );
};

export default Navbar;
