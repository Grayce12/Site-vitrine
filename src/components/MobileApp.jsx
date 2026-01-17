const MobileApp = () => {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="lg:order-2">
                        <h2 id="mobile-app-title" className="text-5xl font-bold text-gray-800 mb-6">Mobile App for watch</h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            The smartwatch connects to your iPhone and other iOS devices using Bluetooth, alerting you to incoming calls, emails, messages and alerts. Customize your with over 1,000 watchapps found within the smartwatch app.
                        </p>

                        {/* Download Buttons */}
                        <div className="flex gap-4">
                            <a href="#" className="inline-block">
                                <img src="/images/app-store.png" alt="App Store" className="h-15 hover:opacity-80 transition" />
                            </a>
                            <a href="#" className="inline-block">
                                <img src="/images/google-play.png" alt="Google Play" className="h-15 hover:opacity-80 transition" />
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="lg:order-1">
                        <img
                            src="/images/app-screen.png"
                            alt="Mobile App Screen"
                            className="w-full max-w-md mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileApp;
