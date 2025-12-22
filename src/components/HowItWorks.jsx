export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-40 bg-gray-100">
            <div className="container mx-auto text-center">
                {/* Section Header */}
                <div className="section-header mb-20">
                    <h2 className="text-6xl text-gray-700 font-semibold mb-4">HOW IT WORKS</h2>
                    <p className="text-2xl text-gray-400 mb-8">
                        Everybody loves tech gadgets, but ours is different. Here is how it works. <br /> It's simple and easy to use.
                    </p>
                </div>

                {/* Work Processes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Process 1 */}
                    <div className="work-process text-center">
                        <img src="/images/desktop.png" alt="Connect Device" className="mx-auto mb-4" />
                        <h3 className="text-2xl text-gray-600 font-semibold">Connect Device</h3>
                        <p className="text-xl text-gray-400">Lorem ipsum dolor sit amet, consectetur elit, sed do tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    {/* Process 2 */}
                    <div className="work-process text-center">
                        <img src="/images/toggles.png" alt="Configure" className="mx-auto mb-4" />
                        <h3 className="text-2xl text-gray-600 font-semibold">Configure it</h3>
                        <p className="text-xl text-gray-400">Lorem ipsum dolor sit amet, consectetur elit, sed do tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    {/* Process 3 */}
                    <div className="work-process text-center">
                        <img src="/images/trophy.png" alt="Done" className="mx-auto mb-4" />
                        <h3 className="text-2xl text-gray-600 font-semibold">Yay! Done.</h3>
                        <p className="text-xl text-gray-400">Lorem ipsum dolor sit amet, consectetur elit, sed do tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
