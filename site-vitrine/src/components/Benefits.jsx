import { FaMapMarkerAlt, FaHeartbeat, FaLock, FaLightbulb, FaMoneyBillWave, FaFlask } from 'react-icons/fa'

export default function Benefits() {
    return (
        <section id="features" className="py-30 bg-white">
            <div className="container mx-auto text-center">
                {/* Section Header */}
                <div className="section-header mb-25">
                    <h2 className="text-6xl text-gray-700 font-semibold mb-5 ">THE BENEFITS</h2>
                    <p className="text-2xl text-gray-400 mb-4 leading-relaxed" id="description">
                        List out your product’s benefit here. A small description about what it is <br />
                        and how it helps the user. You can also add some icons.
                    </p>
                </div>

                {/* Benefit List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-16 justify-items-center text-center mb-5 text-lg
                ">
                    {/* Benefit 1 */}
                    <div className="benefit flex items-start text-left gap-4">
                        <div className="icon mt-1">
                            <FaMapMarkerAlt className="w-8 h-8 text-blue-600" aria-hidden="true" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-semibold text-gray-700 mb-1">GPS Tracking</h4>
                            <p className="text-gray-400 text-md">
                                Lorem ipsum dolor sit amet, consectetur <br />
                                adipisicing elit, sed do eiusmod tempor <br />
                                incididunt ut labore et dolore.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="benefit flex items-start text-left gap-4">
                        <div className="icon mt-1">
                            <FaHeartbeat className="w-8 h-8 text-red-700" aria-hidden="true" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-semibold text-gray-700 mb-1">Heart Rate Monitor</h4>
                            <p className="text-gray-400 text-md">
                                Lorem ipsum dolor sit amet, consectetur <br />
                                adipisicing elit, sed do eiusmod tempor <br />
                                incididunt ut labore et dolore.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 3 */}
                    <div className="benefit flex items-start text-left gap-4">
                        <div className="icon mt-1">
                            <FaLock className="w-8 h-8 text-green-600" aria-hidden="true" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-semibold text-gray-700 mb-1">Security First</h4>
                            <p className="text-gray-400 text-md">
                                Lorem ipsum dolor sit amet, consectetur <br />
                                adipisicing elit, sed do eiusmod tempor <br />
                                incididunt ut labore et dolore.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 4 */}
                    <div className="benefit flex items-start text-left gap-4">
                        <div className="icon mt-1">
                            <FaLightbulb className="w-8 h-8 text-yellow-600" aria-hidden="true" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-semibold text-gray-700 mb-1">Innovative Idea</h4>
                            <p className="text-gray-400 text-md">
                                Lorem ipsum dolor sit amet, consectetur <br />
                                adipisicing elit, sed do eiusmod tempor <br />
                                incididunt ut labore et dolore.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 5 */}
                    <div className="benefit flex items-start text-left gap-4">
                        <div className="icon mt-1">
                            <FaMoneyBillWave className="w-8 h-8 text-teal-600" aria-hidden="true" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-semibold text-gray-700 mb-1">Save Your Bills</h4>
                            <p className="text-gray-400 text-md">
                                Lorem ipsum dolor sit amet, consectetur <br />
                                adipisicing elit, sed do eiusmod tempor <br />
                                incididunt ut labore et dolore.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 6 */}
                    <div className="benefit flex items-start text-left gap-4">
                        <div className="icon mt-1">
                            <FaFlask className="w-8 h-8 text-purple-600" aria-hidden="true" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-semibold text-gray-700 mb-1 text-left">Proven Technology</h4>
                            <p className="text-gray-400 text-md">
                                Lorem ipsum dolor sit amet, consectetur <br />
                                adipisicing elit, sed do eiusmod tempor <br />
                                incididunt ut labore et dolore.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
