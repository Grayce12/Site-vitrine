export default function Product() {
    return (
        <section id="product" className="py-80 bg-white">
            <div className="container mx-auto text-center">
                {/* Header Section */}
                <div className="section-header mb-10">
                    <h2 className="text-6xl text-gray-700 font-semibold mb-5">THE PRODUCT</h2>
                    <p className="text-2xl text-gray-400 mb-4">
                        Introduce the product here. A small description about what it is and <br />how it helps the user.
                        You can also add some photos below.
                    </p>
                </div>

                {/* Product Features */}
                <div className="relative text-center">
                    <img src="/images/apple-watch-2.png" alt="Product" className="mx-auto mb-6" />

                    {/* Feature Notes */}
                    <div className="absolute top-12 left-16 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="feature-note bg-white p-4 rounded-full shadow-lg">
                            <span className="text-xl font-bold text-gray-700">+</span>
                        </div>
                        <div className="feature-name text-sm mt-2 text-gray-700">Metallic Strap</div>
                    </div>

                    <div className="absolute top-12 right-16 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="feature-note bg-white p-4 rounded-full shadow-lg">
                            <span className="text-xl font-bold text-gray-700">+</span>
                        </div>
                        <div className="feature-name text-sm mt-2 text-gray-700">GPS Tracker</div>
                    </div>

                    <div className="absolute bottom-12 left-16 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="feature-note bg-white p-4 rounded-full shadow-lg">
                            <span className="text-xl font-bold text-gray-700">+</span>
                        </div>
                        <div className="feature-name text-sm mt-2 text-gray-700">Bluetooth 4.2</div>
                    </div>

                    <div className="absolute bottom-12 right-16 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="feature-note bg-white p-4 rounded-full shadow-lg">
                            <span className="text-xl font-bold text-gray-700">+</span>
                        </div>
                        <div className="feature-name text-sm mt-2 text-gray-700">Water Resistant</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
