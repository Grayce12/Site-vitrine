const SpecItem = ({ title, items }) => (
    <div>
        <p id="description" className="text-gray-700 font-extrabold text-lg mb-4">{title}</p>
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li key={index} className="text-gray-500 text-base">{item}</li>
            ))}
        </ul>
    </div>
);

const TechSpecs = () => {
    const specsData = [
        {
            title: "Compatibility",
            items: [
                "iPhone iOS 7 & up",
                "Android 4.3 & up",
                "Bluetooth 4.0",
                "Notification for calls / texts"
            ]
        },
        {
            title: "App",
            items: [
                "Set daily goals",
                "Analyze history",
                "Sync to phone & cloud",
                "Connect to Apple health kit",
                "Connect to Google fit",
                "Watch firmware upgrade"
            ]
        },
        {
            title: "Vibration silent alarms",
            items: [
                "Phone notifications",
                "Daily goal reached",
                "Daily wake-up alarm",
                "Location assistance",
                "Accessibility features"
            ]
        },
        {
            title: "Watch",
            items: [
                "12.6mm thickness",
                "3.16L stainless steel case",
                "40mm diameter",
                "5 ATM water resistant",
                "Sapphire glass crystal"
            ]
        },
        {
            title: "Straps",
            items: [
                "Italian leather with natural lining",
                "Comfort sport fabric",
                "Quick-release pins"
            ]
        },
        {
            title: "Activity tracking",
            items: [
                "Step counting",
                "Distance",
                "Calories burned",
                "Swimming (strokes)"
            ]
        },
        {
            title: "Timekeeping",
            items: [
                "Swiss ETA movement",
                "Accurate, reliable"
            ]
        },
        {
            title: "Battery power",
            items: [
                "Standard CR2025 6+ months",
                "Standard 364 for timekeeping 5+ years",
                "Solar Power available as upgrade"
            ]
        },
        {
            title: "Sensors",
            items: [
                "MEMS 3-axis accelerometer",
                "Highly accurate",
                "Low power consumption"
            ]
        }
    ];

    return (
        <section className="py-29 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-24">
                    <h2 className="text-6xl font-bold text-gray-700 mb-8">Tech Specs</h2>
                    <p id="description" className="text-gray-400 text-xl max-w-3xl mx-auto">
                        Need more info? Please have a look at the tech specs of the watch. We've used Latest technology & quality materials
                    </p>
                </div>

                {/* Tech Specs Grid */}
                <div>
                    {/* First Row */}
                    <div className="border-t border-gray-200 pt-8 grid grid-cols-1 md:grid-cols-3 gap-16">
                        {specsData.slice(0, 3).map((spec, index) => (
                            <SpecItem key={index} title={spec.title} items={spec.items} />
                        ))}
                    </div>

                    {/* Second Row */}
                    <div className="border-t border-gray-200 pt-8 mt-8 grid grid-cols-1 md:grid-cols-3 gap-16">
                        {specsData.slice(3, 6).map((spec, index) => (
                            <SpecItem key={index + 3} title={spec.title} items={spec.items} />
                        ))}
                    </div>

                    {/* Third Row */}
                    <div className="border-t border-gray-200 pt-8 mt-8 grid grid-cols-1 md:grid-cols-3 gap-16">
                        {specsData.slice(6, 9).map((spec, index) => (
                            <SpecItem key={index + 6} title={spec.title} items={spec.items} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechSpecs;
