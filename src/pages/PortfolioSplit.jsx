import { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LanguagesAndEducation from "../components/LanguagesAndEducation";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export const PortfolioSplit = () => {
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

    return (
        <div className={`bg-gray-900 text-white min-h-screen font-sans transition-colors duration-300`}>
            <Navbar
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                closeMenu={closeMenu}
                downloadCV={downloadCV}
            />
            <Hero />
            <About />
            <Projects
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />
            <Skills />
            <LanguagesAndEducation />
            <Contact
                formData={formData}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
            <Footer />
        </div>
    );
};
