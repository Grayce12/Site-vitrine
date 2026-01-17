import { useState } from 'react';
import { FaLock } from 'react-icons/fa';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section className="py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-24">
                    <h2 className="text-6xl font-bold text-gray-800 mb-8 tracking-wide">NEWSLETTER</h2>
                    <p id='description' className="text-gray-400 text-lg max-w-4xl mx-auto pb-8">
                        Subscribe to our product newsletter to get notified when we launch the <br /> product or when we completed a milestone
                    </p>
                </div>

                {/* Newsletter Form */}
                <div className="max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} className="flex gap-0">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Your Email Address"
                            required
                            className="flex-1 px-6 py-10 bg-gray-100 border border-gray-200 text-gray-700 placeholder-gray-300 focus:outline-none"
                            id='description'
                        />
                        <button
                            type="submit"
                            className="px-10 py-4 rounded-r bg-blue-600 hover:bg-blue-700 text-white font-semibold transition flex items-center justify-center"
                        >
                            <img src="/images/right-arrow_10513666.png" alt="Subscribe" className="w-15 h-12 brightness-0 invert" />
                        </button>
                    </form>

                    {submitted ? (
                        <div className="text-center mt-6">
                            <p className="text-gray-600 font-semibold">Almost finished. Please check your email and verify.</p>
                        </div>
                    ) : (
                        <p className="text-center text-gray-400 text-base mt-6 flex items-center justify-center gap-2">
                            <FaLock className="text-gray-400 text-sm" />
                            No Spam. We Promise. Unsubscribe anytime.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
