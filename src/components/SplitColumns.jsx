export default function SplitColumns() {
    return (
        <section id="split-columns" className="py-20 bg-gray-200">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Left Column */}
                <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
                    <h2 className="text-4xl font-semibold mb-4">Every App You Wanted</h2>
                    <p className="text-lg text-gray-600">
                        You won’t just send and receive messages, calls, and mail more easily and efficiently. You’ll express yourself in unique, fun, and more personal ways. Communicating with Watch is discreet, sophisticated, and nuanced. A whole new way to connect with others.
                    </p>
                </div>

                {/* Right Column */}
                <div className="md:w-1/2 text-center">
                    <img src="/images/split-1.jpg" alt="App Screenshot" className="w-full rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
    );
}
