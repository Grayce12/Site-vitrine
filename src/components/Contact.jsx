import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Contact = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitMessage, setSubmitMessage] = useState('');

    const mapContainerStyle = {
        width: '100%',
        height: '600px'
    };

    const center = {
        lat: 37.3818288,
        lng: -122.0636325
    };

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
        <section id="contact" className="relative w-full" style={{ height: '600px' }}>
            {/* Map Background */}
            <div className="absolute inset-0 w-full h-full">
                <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={15}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </div>

            {/* Content Overlay - Centered */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="max-w-lg w-full px-1">
                    {!showForm ? (
                        // Contact Box
                        <div className="bg-white shadow-lg p-10">
                            <h2 id="contact-title" className=" font-bold text-gray-700 mb-8">Get in Touch</h2>

                            <ul className="space-y-6 mb-8">
                                {/* Address */}
                                <li className="flex gap-4">
                                    <FaMapMarkerAlt className="text-gray-400 text-lg mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-500 font-semibold">523 Sylvan Ave, 5th Floor</p>
                                        <p className="text-gray-500">Mountain View, CA 94041 USA</p>
                                    </div>
                                </li>

                                {/* Phone */}
                                <li className="flex gap-4">
                                    <FaPhone className="text-gray-400 text-lg mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-500 font-semibold">+1 (234) 56789</p>
                                        <p className="text-gray-500">+1 987 654 3210</p>
                                    </div>
                                </li>

                                {/* Email */}
                                <li className="flex gap-4">
                                    <FaEnvelope className="text-gray-400 text-lg mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-500 font-semibold">support@watchland.com</p>
                                    </div>
                                </li>
                            </ul>

                            <button
                                onClick={() => setShowForm(true)}
                                className="w-full px-6 py-5 bg-blue-500 hover:bg-gray-600 text-white text-lg font-semibold transition"
                            >
                                CONTACT US
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
                                    className="w-full px-6 py-3 bg-blue-500 hover:bg-gray-600 text-white font-semibold rounded transition"
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
