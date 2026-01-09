const FaqItem = ({ question, answer }) => (
    <div>
        <h3 className="text-gray-700 font-semibold text-lg mb-3">{question}</h3>
        <p className="text-gray-500 text-base leading-relaxed">{answer}</p>
    </div>
);

const Faqs = () => {
    const faqsData = [
        {
            question: "What is Watch? How it works?",
            answer:
                "Watch took center stage at this year's Product Show with a preview of watch OS 2. The next generation of Watch software is packed with features that just might turn the device from a nice-to-have into a must-have. If you already own an Apple Watch, you'll have to live with the old software until fall. You'll love it at the first use.",
        },
        {
            question: "How the watch is made?",
            answer:
                "Watch has an anodized aluminum case (which is lighter than stainless steel) in silver or space gray, and the face is Ion-X glass, which also designed to be hard and rugged (as well as a little bit lighter) than the sapphire. It's definitely the lightest of the three Apple Watch editions, making it an ideal exercise companion.",
        },
        {
            question: "Can I swap out the watch band?",
            answer:
                "Absolutely. Watch comes with six bands that are easy to mix and match any band with any watch. You can swap them out as your heart desires without the aid of any tools—as long as the band and watch are the same size. (The Leather Loop band, for example, only fits 42mm watches, not the smaller 38mm size.)",
        },
        {
            question: "So it's a watch and a fitness tracker?",
            answer:
                "The accelerometer lets the watch count your steps, and it extrapolate distance on its own, or rely on the GPS in the paired Phone to trace your exact route. That step data comes in handy for two of the apps included on the watch: Activity and Workout. Both of the watch's fitness apps sync data back to the Health and Fitness apps on your Phone.",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-700 mb-6">FAQ</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Got questions? We've got answers. If you have some other questions, feel free to send us an email to{" "}
                        <a href="mailto:hello@product.com" className="text-blue-500 hover:underline">
                            hello@product.com
                        </a>
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {faqsData.map((faq, index) => (
                        <FaqItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faqs;

