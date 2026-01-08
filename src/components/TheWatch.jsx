import React from "react";

const watchFeatures = [
    "Compatible with all devices",
    "Android and iOS Support",
    "Activity & Health Tracker",
    "Read & reply to messages",
];

export default function TheWatch({
    title = "The Watch",
    description = "With an image in the side of this conetent, you can use this section to write about some cool thing about your product or its features.",
    image = "/images/the-watch.png",
    features = watchFeatures,
}) {
    return (
        <section className="py-26 bg-gray-50">
            <div className="max-w-7xl mx-auto px-1">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch justify-center">

                    {/* Content */}
                    <div className="flex flex-col justify-center h-full">
                        <div className="mb-8">
                            <h2 className="text-5xl font-semibold text-gray-700 mb-8">
                                {title}
                            </h2>
                            <p
                                id="description1"
                                className="text-gray-400 text-lg max-w-2xl mb-12">
                                {description}
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li
                                    id="description"
                                    key={index}
                                    className="flex items-start gap-3 text-gray-500 text-lg font-medium"
                                >
                                    <img src="/images/check.png" alt="check" className="w-6 h-6 mt-1 leading-loose" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image */}
                    <div className="flex items-center justify-center h-full">
                        <img
                            src={image}
                            alt={title}
                            className="h-full w-auto max-h-[50rem] md:max-h-[38rem] lg:max-h-[44rem] drop-shadow-2xl object-contain mb-15"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
