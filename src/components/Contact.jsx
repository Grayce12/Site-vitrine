import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitMessage, setSubmitMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle contact form submission
        setSubmitMessage('Form submitted successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setShowForm(false), 2000);
    };

    return (
        <section className="py-32 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-md mx-auto">
                    {!showForm ? (
                        // Contact Box
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h2>

                            <ul className="space-y-6 mb-8">
                                {/* Address */}
                                <li className="flex gap-4">
                                    <FaMapMarkerAlt className="text-blue-500 text-xl mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-700 font-semibold">523 Sylvan Ave, 5th Floor</p>
                                        <p className="text-gray-600">Mountain View, CA 94041 USA</p>
                                    </div>
                                </li>

                                {/* Phone */}
                                <li className="flex gap-4">
                                    <FaPhone className="text-blue-500 text-xl mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-700 font-semibold">+1 (234) 56789</p>
                                        <p className="text-gray-600">+1 987 654 3210</p>
                                    </div>
                                </li>

                                {/* Email */}
                                <li className="flex gap-4">
                                    <FaEnvelope className="text-blue-500 text-xl mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-700 font-semibold">support@watchland.com</p>
                                    </div>
                                </li>
                            </ul>

                            <button
                                onClick={() => setShowForm(true)}
                                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition"
                            >
                                Contact Us
                            </button>
                        </div>
                    ) : (
                        // Contact Form
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <button
                                onClick={() => setShowForm(false)}
                                className="float-right text-2xl text-gray-400 hover:text-gray-600 cursor-pointer"
                            >
                                ×
                            </button>

                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Name"
                                        required
                                        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email Address"
                                        required
                                        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    />
                                </div>

                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="Subject"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                />

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Message"
                                    rows="5"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-none"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition"
                                >
                                    Send Message
                                </button>

                                {submitMessage && (
                                    <p className="text-center text-green-600 font-semibold">{submitMessage}</p>
                                )}
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
