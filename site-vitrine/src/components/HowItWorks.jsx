import { SlArrowRight, SlArrowDown } from "react-icons/sl";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-gray-50 py-20 md:py-27">
            <div className="container mx-auto text-center px-4">

                {/* Section Header */}
                <div className="mb-33">
                    <h2 className="text-4xl md:text-6xl text-gray-700 font-semibold mb-5">
                        HOW IT WORKS
                    </h2>
                    <p
                        id="description"
                        className="text-md md:text-2xl text-gray-600  mx-auto">
                        Everybody loves tech gadgets, But <br className=" md:hidden
                        sm: block" />
                        our’s is different.
                        Here is how it works. <br className=" block" />
                        Its should be simple. Add how easy is <br className=" md:hidden
                        sm:block" />
                        to install your product
                    </p>
                </div>

                {/* Work Processes */}
                <div className="flex items-start justify-center gap-4 md:gap-4 lg:gap-2 flex-col md:flex-row mb-10">
                    {/* Process 1 */}
                    <div className="flex flex-col items-center text-center">
                        <img src="/images/desktop.png" alt="Connect Device" className="mx-auto mb-17 h-28 w-28" />
                        <h3 className="text-3xl text-gray-700 font-semibold mb-2">Connect Device</h3>
                        <p className="text-lg text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur de <br />
                            elit, sed do tempor incididunt ut labore eta <br />
                            reprehenderit in voluptate velit.
                        </p>
                    </div>

                    {/* Arrow between images */}
                    <SlArrowRight className="text-gray-500 text-2xl mt-10" id="arrow-right" />

                    {/* Process 2 */}
                    <div className="flex flex-col items-center text-center">
                        <img src="/images/toggles.png" alt="Configure" className="mx-auto mb-17 h-28 w-28" />
                        <h3 className="text-3xl text-gray-700 font-semibold mb-2">Configure it</h3>
                        <p className="text-lg text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur de <br />
                            elit, sed do tempor incididunt ut labore eta <br />
                            reprehenderit in voluptate velit.
                        </p>
                    </div>

                    {/* Arrow between images */}
                    <SlArrowRight className="text-gray-500 text-2xl mt-10" id="arrow-right" />

                    {/* Process 3 */}
                    <div className="flex flex-col items-center text-center">
                        <img src="/images/trophy.png" alt="Done" className="mx-auto mb-17 h-28 w-28" />
                        <h3 className="text-3xl text-gray-700 font-semibold mb-2">Yay! Done.</h3>
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

