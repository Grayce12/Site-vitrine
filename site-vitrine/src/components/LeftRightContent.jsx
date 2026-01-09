const featuresLeft = [
    {
        title: "Fast and secure",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        icon: "🔑",
    },
    {
        title: "Voice Assistant",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        icon: "📢",
    },
    {
        title: "Apps you love",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        icon: "💎",
    },
];

const featuresRight = [
    {
        title: "Stay in touch",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        icon: "👍",
    },
    {
        title: "Designed for you",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        icon: "👤",
    },
    {
        title: "Precise timepiece",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        icon: "⏱️",
    },
];

const FeatureItem = ({ title, text, icon, align = "left" }) => (
    <div className={`flex items-start gap-x-4 ${align === "right" ? "flex-row-reverse" : ""} text-left`}>
        <div className="text-blue-600 text-4xl">{icon}</div>
        <div className="max-w-md">
            <h4 className="text-gray-800 font-semibold text-xl mb-2">{title}</h4>
            <p className="text-gray-400 text-base leading-relaxed">{text}</p>
        </div>
    </div>
);

const LeftRightShowcase = () => {
    return (
        <section className="bg-gray-50 py-32"> {/* plus de padding vertical */}
            <div className="max-w-screen-2xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 gap-x-2 items-center">

                    {/* LEFT */}
                    <div className="flex flex-col gap-16 col-span-1">
                        {featuresLeft.map((item, index) => (
                            <FeatureItem key={index} {...item} />
                        ))}
                    </div>

                    {/* CENTER IMAGE */}
                    <div className="flex justify-center col-span-1">
                        <img
                            id="apple-watch3"
                            src="/images/apple-watch.png"
                            alt="Apple Watch"
                            className="w-full max-w-[300px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[500px] drop-shadow-2xl object-contain"
                        />
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-16 col-span-1">
                        {featuresRight.map((item, index) => (
                            <FeatureItem key={index} {...item} align="left" />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LeftRightShowcase;

