import { RiDoubleQuotesL } from "react-icons/ri";


const ReviewItem = ({ quote, image }) => (
    <div
        id="reviews"
        className="flex flex-col items-center">
        <div className="text-7xl text-gray-300 mb-1">
            <RiDoubleQuotesL />
        </div>
        <p className="text-gray-600 text-lg text-center leading-relaxed mb-8 h-40 flex items-center">
            {quote}
        </p>
        <img src={image} alt="source" className="h-12 object-contain grayscale opacity-60" />
    </div>
);

const FeaturedSource = ({ image }) => (
    <img src={image} alt="featured" className="object-contain grayscale opacity-60" />
);

export default function Reviews() {
    const reviewsData = [
        {
            quote: "The Watch is the nicest smartwatch available, but it's more status symbol than wearable revolutionary. Most of the Watch's features are great.",
            image: "/images/reviewer1.png",
        },
        {
            quote: "Watch is the most ambitious, well constructed smartwatch ever seen, but first-gen shortfalls make it feel more like a fashionable toy than a necessary tool.",
            image: "/images/reviewer2.png",
        },
        {
            quote: "Watch is the best smartwatch we've used, and the first that feels friendly and has character. Watch OS 2.0 adds needed app and Siri abilities.",
            image: "/images/reviewer3.png",
        },
    ];

    const featuredSources = [
        { image: "/images/reviewer3.png" },
        { image: "/images/reviewer1.png" },
        { image: "/images/reviewer2.png" },
        { image: "/images/featured4.png" },
        { image: "/images/featured5.png" },
        { image: "/images/featured6.png" },
    ];

    return (
        <section className="py-32 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold text-gray-700 mb-8">REVIEWS</h2>
                    <p id="description" className="text-gray-400 text-2xl max-w-4xl mx-auto leading-relaxed">
                        Don't take our word for it. See what our experts says about the watch. We <br />have got over 1000s of positive reviews.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-30">
                    {reviewsData.map((review, index) => (
                        <ReviewItem key={index} quote={review.quote} image={review.image} />
                    ))}
                </div>

                {/* Featured On Section */}
                <div className="text-center py-16 ">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-15">AS FEATURED ON</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-6">
                        {featuredSources.map((source, index) => (
                            <FeaturedSource key={index} image={source.image} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
