export default function Reviews() {
    return (
        <section id="reviews" className="py-20 bg-white">
            <div className="container mx-auto text-center">
                {/* Section Header */}
                <div className="section-header mb-10">
                    <h2 className="text-4xl font-semibold mb-4">Reviews</h2>
                    <p className="text-lg text-gray-600">
                        Don’t take our word for it. See what our experts say about the watch. We have got over 1000s of positive reviews.
                    </p>
                </div>

                {/* Review Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Review 1 */}
                    <div className="review text-center p-6 border border-gray-300 rounded-lg shadow-lg">
                        <img src="/images/quote.png" alt="Quote" className="mx-auto mb-4 w-12" />
                        <p className="text-gray-600">
                            "The Watch is the nicest smartwatch available, but it's more of a status symbol than a wearable revolutionary."
                        </p>
                        <img src="/images/reviewer1.png" alt="Reviewer 1" className="rounded-full w-16 h-16 mx-auto mt-4" />
                        <h5 className="text-lg font-semibold mt-2">John Doe</h5>
                        <p className="text-gray-500">Tech Reviewer</p>
                    </div>

                    {/* Review 2 */}
                    <div className="review text-center p-6 border border-gray-300 rounded-lg shadow-lg">
                        <img src="/images/quote.png" alt="Quote" className="mx-auto mb-4 w-12" />
                        <p className="text-gray-600">
                            "Watch is the most ambitious, well-constructed smartwatch ever seen, but first-gen shortfalls make it feel more like a fashionable toy."
                        </p>
                        <img src="/images/reviewer2.png" alt="Reviewer 2" className="rounded-full w-16 h-16 mx-auto mt-4" />
                        <h5 className="text-lg font-semibold mt-2">Jane Smith</h5>
                        <p className="text-gray-500">Wearable Tech Expert</p>
                    </div>

                    {/* Review 3 */}
                    <div className="review text-center p-6 border border-gray-300 rounded-lg shadow-lg">
                        <img src="/images/quote.png" alt="Quote" className="mx-auto mb-4 w-12" />
                        <p className="text-gray-600">
                            "Watch is the best smartwatch we’ve used, and the first that feels friendly and has character. Watch OS 2.0 adds needed app and Siri abilities."
                        </p>
                        <img src="/images/reviewer3.png" alt="Reviewer 3" className="rounded-full w-16 h-16 mx-auto mt-4" />
                        <h5 className="text-lg font-semibold mt-2">Emily Turner</h5>
                        <p className="text-gray-500">Tech Analyst</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
