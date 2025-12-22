export default function Benefits() {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto text-center">
                {/* Section Header */}
                <div className="section-header mb-10">
                    <h2 className="text-6xl text-gray-700 font-semibold mb-4">THE BENEFITS</h2>
                    <p className="text-2xl text-gray-400 mb-4">
                        List out your product’s benefits here. A small description about what it is <br />and how it helps the user.
                    </p>
                </div>

                {/* Benefit List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Benefit 1 */}
                    <div className="benefit text-center">
                        <div className="icon mb-4">
                            <i className="fa fa-location-arrow text-4xl text-blue-600"></i>
                        </div>
                        <h4 className="text-xl font-semibold">GPS Tracking</h4>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                    </div>

                    {/* Benefit 2 */}
                    <div className="benefit text-center">
                        <div className="icon mb-4">
                            <i className="fa fa-heartbeat text-4xl text-red-600"></i>
                        </div>
                        <h4 className="text-xl font-semibold">Heartbeat Analysis</h4>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                    </div>

                    {/* Benefit 3 */}
                    <div className="benefit text-center">
                        <div className="icon mb-4">
                            <i className="fa fa-lock text-4xl text-green-600"></i>
                        </div>
                        <h4 className="text-xl font-semibold">Security First</h4>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                    </div>

                    {/* Benefit 4 */}
                    <div className="benefit text-center">
                        <div className="icon mb-4">
                            <i className="fa fa-lightbulb-o text-4xl text-yellow-600"></i>
                        </div>
                        <h4 className="text-xl font-semibold">Innovative Idea</h4>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                    </div>

                    {/* Benefit 5 */}
                    <div className="benefit text-center">
                        <div className="icon mb-4">
                            <i className="fa fa-money text-4xl text-teal-600"></i>
                        </div>
                        <h4 className="text-xl font-semibold">Save Your Bills</h4>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                    </div>

                    {/* Benefit 6 */}
                    <div className="benefit text-center">
                        <div className="icon mb-4">
                            <i className="fa fa-flask text-4xl text-purple-600"></i>
                        </div>
                        <h4 className="text-xl font-semibold">Proven Technology</h4>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
