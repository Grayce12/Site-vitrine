const ReviewItem = ({ quote, source }) => (
    <div 
    id="reviews"
    className="flex flex-col items-center">
        <div className="text-6xl text-gray-300 mb-4">"</div>
        <p className="text-gray-600 text-base leading-relaxed mb-6 h-32 flex items-center">
            {quote}
        </p>
        <p className="text-gray-700 font-semibold text-lg">{source}</p>
    </div>
);

const FeaturedSource = ({ name }) => (
    <p className="text-gray-600 font-semibold text-lg">{name}</p>
);

export default function Reviews() {
    const reviewsData = [
        {
            quote: "The Watch is the nicest smartwatch available, but it's more status symbol than wearable revolutionary. Most of the Watch's features are great.",
            source: "TECH COMPANY",
        },
        {
            quote: "Watch is the most ambitious, well constructed smartwatch ever seen, but first-gen shortfalls make it feel more like a fashionable toy than a necessary tool.",
            source: "SMART REVIEW",
        },
        {
            quote: "Watch is the best smartwatch we've used, and the first that feels friendly and has character. Watch OS 2.0 adds needed app and Siri abilities.",
            source: "TechLaunch",
        },
    ];

    const featuredSources = [
        "TechLaunch",
        "TECH COMPANY",
        "SMART REVIEW",
        "MOBWORLD",
        "FIRST POST",
        "STARTUP 100",
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-700 mb-6">REVIEWS</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Don't take our word for it. See what our experts says about the watch. We have got over 1000s of positive reviews.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                    {reviewsData.map((review, index) => (
                        <ReviewItem key={index} quote={review.quote} source={review.source} />
                    ))}
                </div>

                {/* Featured On Section */}
                <div className="text-center py-12 border-t border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-700 mb-12">AS FEATURED ON</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                        {featuredSources.map((source, index) => (
                            <FeaturedSource key={index} name={source} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
