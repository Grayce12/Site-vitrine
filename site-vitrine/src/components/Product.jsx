import Reveal from "./Reveal";

export default function Product() {
    return (
        <section id="product" className="md:py-27 py-35 bg-white">
            <div className="container mx-auto text-center">
                {/* Header Section */}
                <div className="section-header mb-10">
                    <Reveal animation="fadeInUp" delay="0.05s">
                        <h2 className="text-6xl text-gray-700 font-semibold mb-6">
                            THE PRODUCT
                        </h2>
                    </Reveal>

                    <Reveal animation="fadeInUp" delay="0.18s">
                        <p
                            id="description"
                            className="text-2xl text-gray-400 md:mb-35 mb-25"
                        >
                            Introduce the product here. A small description about what it is and{" "}
                            <br />
                            how it helps the user. You can also add some photos below.
                        </p>
                    </Reveal>
                </div>

                {/* Product Features */}
                <div className="relative text-center">
                    <Reveal animation="zoomIn" delay="0.25s">
                        <img
                            id="apple-watch2"
                            src="/images/apple-watch-2.png"
                            alt="Product"
                            className="mx-auto mb-8"
                        />
                    </Reveal>

                    {/* Feature Notes */}
                    <Reveal animation="fadeIn" delay="0.35s">
                        <div className="absolute top-12 left-16 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="feature-note bg-white p-4 rounded-full shadow-lg">
                                <span className="text-xl font-bold text-gray-700">+</span>
                            </div>
                            <div className="feature-name text-sm mt-2 text-gray-700">
                                Metallic Strap
                            </div>
                        </div>
                    </Reveal>

                    <Reveal animation="fadeIn" delay="0.45s">
                        <div className="absolute top-12 right-16 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="feature-note bg-white p-4 rounded-full shadow-lg">
                                <span className="text-xl font-bold text-gray-700">+</span>
                            </div>
                            <div className="feature-name text-sm mt-2 text-gray-700">
                                GPS Tracker
                            </div>
                        </div>
                    </Reveal>

                    <Reveal animation="fadeIn" delay="0.55s">
                        <div className="absolute bottom-12 left-16 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="feature-note bg-white p-4 rounded-full shadow-lg">
                                <span className="text-xl font-bold text-gray-700">+</span>
                            </div>
                            <div className="feature-name text-sm mt-2 text-gray-700">
                                Bluetooth 4.2
                            </div>
                        </div>
                    </Reveal>

                    <Reveal animation="fadeIn" delay="0.65s">
                        <div className="absolute bottom-12 right-16 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="feature-note bg-white p-4 rounded-full shadow-lg">
                                <span className="text-xl font-bold text-gray-700">+</span>
                            </div>
                            <div className="feature-name text-sm mt-2 text-gray-700">
                                Water Resistant
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

