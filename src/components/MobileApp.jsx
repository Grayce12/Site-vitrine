const MobileApp = () => {
    return (
        <section
            className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url(/images/split-2.jpg)",
                backgroundAttachment: "fixed",
                minHeight: "850px",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* IMPORTANT: pas de py ici, sinon ça décolle du bas */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 min-h-[850px]">
                {/* Cette rangée occupe toute la hauteur et aligne en bas */}
                <div className="grid min-h-[850px] grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
                    {/* LEFT */}
                    <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-[850px]">
                        {/* Le conteneur prend la hauteur complète -> bottom-0 = bas du composant */}
                        <div className="absolute inset-x-0 bottom-0 flex justify-center lg:justify-start">
                            <img
                                src="/images/app-screen.png"
                                alt="Mobile App Screen"
                                className="
                  w-[340px] sm:w-[420px] lg:w-[520px]
                  h-auto object-contain
                "
                            />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-7 text-white lg:self-end pb-10 lg:pb-14">
                        {/* pb-xx sert à tomber au niveau du téléphone “derrière”
                -> ajuste légèrement si besoin (pb-12 / pb-16) */}
                        <h2 id="mobile-app-title" className="mb-6 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                            Mobile App for watch
                        </h2>

                        <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg lg:text-xl">
                            The smartwatch connects to your iPhone and other iOS <br />
                            devices using Bluetooth, alerting you to incoming calls, emails, <br />
                            messages and alerts. Customize your with over 1,000 <br />
                            watchapps found within the smartwatch app.
                        </p>

                        <div className="flex flex-wrap items-center gap-5">
                            <a href="#" className="inline-flex hover:opacity-80 transition">
                                <img
                                    src="/images/app-store.png"
                                    alt="App Store"
                                    className="h-12 w-auto sm:h-14 lg:h-16"
                                />
                            </a>

                            <a href="#" className="inline-flex hover:opacity-80 transition">
                                <img
                                    src="/images/google-play.png"
                                    alt="Google Play"
                                    className="h-12 w-auto sm:h-14 lg:h-16"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileApp;


