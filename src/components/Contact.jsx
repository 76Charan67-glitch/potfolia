import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';

 

const initialState = { name: '', email: '', title: '', message: '', time: '' };

const Contact = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState(initialState);
    const [status, setStatus] = useState('idle'); 
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const resetForm = () => setFormData({ ...initialState, time: new Date().toISOString() });

    // set initial timestamp on mount
    useEffect(() => {
        setFormData((prev) => ({ ...prev, time: new Date().toISOString() }));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status === 'sending') return;
        setStatus('sending');
        setErrorMsg('');
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('Missing EmailJS env variables');
            }

            await emailjs.sendForm(serviceId, templateId, formRef.current, {
                publicKey,
            });
            setStatus('success');
            resetForm();
        } catch (err) {
            console.error(err);
            setErrorMsg(err.message || 'Failed to send message');
            setStatus('error');
        } finally {
            if (status !== 'error') {
                setTimeout(() => {
                    setStatus((prev) => (prev === 'success' ? 'idle' : prev));
                }, 4000);
            }
        }
    };

    return (
        <section
            id="contact"
            className={`px-4 sm:px-6 md:px-8 py-20 max-w-6xl mx-auto bg-gray-800 transition-colors duration-300`}
        >
            <div className="text-center mb-16">
                <h2 className={`text-4xl font-bold mb-4 text-white`}>
                    Let's Develop Together
                </h2>
                <p className={`text-gray-300 max-w-2xl mx-auto text-lg`}>
                    I'd love to hear about your project or idea. Drop a message and I'll respond soon.
                </p>
            </div>
            <div className="max-w-lg mx-auto">
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        aria-label="Your name"
                        className="px-6 py-4 bg-gray-800 rounded-md placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-700 text-white transition-colors duration-300"
                        required
                        minLength={2}
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Your Email"
                        aria-label="Your email"
                        className="px-6 py-4 bg-gray-800 rounded-md placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-700 text-white transition-colors duration-300"
                        required
                    />
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Subject / Title"
                        aria-label="Message title"
                        className="px-6 py-4 bg-gray-800 rounded-md placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-700 text-white transition-colors duration-300"
                        required
                        minLength={3}
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter Your Message"
                        aria-label="Message content"
                        rows="5"
                        className="px-6 py-4 bg-gray-800 rounded-md placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-700 text-white transition-colors duration-300 resize-none"
                        required
                        minLength={10}
                    />
                    <input type="hidden" name="time" value={formData.time} readOnly />
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed px-8 py-4 rounded-md font-semibold transition-colors text-white whitespace-nowrap flex items-center justify-center gap-2"
                    >
                        {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent ✅' : 'Send Message'}
                    </button>
                    {status === 'error' && (
                        <p className="text-red-400 text-sm" role="alert">
                            {errorMsg}
                        </p>
                    )}
                    {status === 'success' && (
                        <p className="text-green-400 text-sm" role="status">
                            Message sent successfully!
                        </p>
                    )}
                </form>
                <p className="text-xs text-gray-500 mt-4 text-center">
                    This form uses EmailJS. Your message is sent securely via their infrastructure.
                </p>
            </div>
        </section>
    );
};

export default Contact;
