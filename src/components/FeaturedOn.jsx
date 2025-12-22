export default function FeaturedOn() {
    return (
        <section id="featured-on" className="py-20 bg-white">
            <div className="container mx-auto text-center">
                {/* Section Header */}
                <div className="section-header mb-10">
                    <h2 className="text-4xl font-semibold mb-4">As Featured On</h2>
                </div>

                {/* Featured Logos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                    <div className="featured-logo">
                        <img src="/images/featured1.png" alt="Featured 1" className="w-full h-auto" />
                    </div>
                    <div className="featured-logo">
                        <img src="/images/featured2.png" alt="Featured 2" className="w-full h-auto" />
                    </div>
                    <div className="featured-logo">
                        <img src="/images/featured3.png" alt="Featured 3" className="w-full h-auto" />
                    </div>
                    <div className="featured-logo">
                        <img src="/images/featured4.png" alt="Featured 4" className="w-full h-auto" />
                    </div>
                    <div className="featured-logo">
                        <img src="/images/featured5.png" alt="Featured 5" className="w-full h-auto" />
                    </div>
                    <div className="featured-logo">
                        <img src="/images/featured6.png" alt="Featured 6" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
}
