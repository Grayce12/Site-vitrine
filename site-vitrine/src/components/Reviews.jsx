import { RiDoubleQuotesL } from "react-icons/ri";


const SOURCE_STYLES = {
    "TECH COMPANY": {
        className: "font-montserrat font-extrabold uppercase tracking-widest text-gray-500",
        style: { fontFamily: "Montserrat", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.1em" }
    },
    "SMART REVIEW": {
        className: "font-playfair font-semibold tracking-wide text-gray-400",
        style: { fontFamily: "Playfair Display", fontWeight: "600", letterSpacing: "0.05em" }
    },
    "TechLaunch": {
        className: "font-playfair font-semibold tracking-wide text-gray-400",
    },
    "MOBWORLD": {
        className: "font-montserrat font-bold uppercase tracking-wider text-gray-500",
    },
    "FIRST POST": {
        className: "font-montserrat font-semibold uppercase tracking-wide text-gray-500",
    },
    "STARTUP 100": {
        className: "font-montserrat font-extrabold uppercase tracking-widest text-gray-500",
    },
};


const ReviewItem = ({ quote, source }) => {
    const sourceStyle = SOURCE_STYLES[source];

    return (
        <div className="flex flex-col items-center">
            <RiDoubleQuotesL className="text-6xl text-gray-300 mb-4" />

            <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center max-w-xs">
                {quote}
            </p>

            <p className={`text-lg ${sourceStyle?.className}`}>
                {source}
            </p>
        </div>
    );
};


const FeaturedSource = ({ name }) => {
    if (name === 'TECH COMPANY') {
        return (
            <div className="flex items-center gap-3">
                <span className="bg-gray-700 text-white font-bold px-3 py-1 text-sm">TECH</span>
                <span className="text-gray-500 font-semibold tracking-wide">COMPANY</span>
            </div>
        );
    }

    if (name === 'SMART REVIEW') {
        return (
            <div className="text-gray-300 font-serif text-xl tracking-widest">SMART REVIEW</div>
        );
    }

    // Default style (e.g., TechLaunch, MOBWORLD...)
    return (
        <div className="text-gray-500 font-semibold text-lg">{name}</div>
    );
};


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
        <section 
        id="reviews"
        className="py-35 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-27">
                    <h2 className="text-5xl font-bold text-gray-700 mb-6">REVIEWS</h2>
                    <p id="description1" className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Don't take our word. See what our experts says about the watch. We <br /> have got over 1000s of positive reviews.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-6 gap-x-8 mb-20">
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
