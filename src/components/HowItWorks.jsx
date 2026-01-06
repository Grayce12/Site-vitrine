import { SlArrowRight } from "react-icons/sl";


export default function HowItWorks() {
    return (
        <section id="how-it-works" className="md:py-30 bg-gray-50">
            <div className="container mx-auto text-center">
                {/* Section Header */}
                <div className="section-header mb-20">
                    <h2 className="text-6xl text-gray-700 font-semibold mb-4">HOW IT WORKS</h2>
                    <p id="description" className="text-2xl text-gray-600 md:mb-25 mb-20">
                        Everybody loves tech gadgets, but ours is different. Here is how it works. <br /> It's should simple and easy to use.
                    </p>
                </div>

                {/* Work Processes */}
                <div className="flex items-start justify-center gap-3 md:gap-4">
                    {/* Process 1 */}
                    <div className="flex flex-col items-center text-center">
                        <img src="/images/desktop.png" alt="Connect Device" className="mx-auto mb-15" id="icon" />
                        <h3 className="text-3xl text-gray-700 font-semibold mb-1">Connect Device</h3>
                        <p className="text-lg text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur de <br />
                            elit, sed do tempor incididunt ut labore eta <br />
                            reprehenderit in voluptate velit.
                        </p>
                    </div>

                    {/* Arrow between images */}
                    <SlArrowRight className="text-gray-400 text-4xl mt-10" id="arrow-right" />

                    {/* Process 2 */}
                    <div className="flex flex-col items-center text-center">
                        <img src="/images/toggles.png" alt="Configure" className="mx-auto mb-15" id="icon" />
                        <h3 className="text-3xl text-gray-700 font-semibold mb-1">Configure it</h3>
                        <p className="text-lg text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur de <br />
                            elit, sed do tempor incididunt ut labore eta <br />
                            reprehenderit in voluptate velit.
                        </p>
                    </div>

                    {/* Arrow between images */}
                    <SlArrowRight className="text-gray-400 text-4xl mt-10" id="arrow-right" />

                    {/* Process 3 */}
                    <div className="flex flex-col items-center text-center">
                        <img src="/images/trophy.png" alt="Done" className="mx-auto mb-15" id="icon" />
                        <h3 className="text-3xl text-gray-700 font-semibold mb-1">Yay! Done.</h3>
                        <p className="text-lg text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur de <br />
                            elit, sed do tempor incididunt ut labore eta <br />
                            reprehenderit in voluptate velit.
                        </p>
                    </div>
                </div>


            </div>
        </section>
    );
}
