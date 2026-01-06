export default function Hero() {
    return (
        <section
            id="header"
            className="min-h-[120vh] flex flex-col items-center text-center bg-gray-200 lg:pt-60 pt-30 px-4"
        >
            {/* TITRE */}
            <h2 id="hero" className="
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                text-gray-800 font-bold mb-6 opacity-90 
            ">
                The future of tech is here
            </h2>

            {/* TEXTE */}
            <p className="
                max-w-4xl
                text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
                text-gray-500 mb-10 
            ">
                Holistically incentivize revolutionary collaboration and idea
                <br className="hidden sm:block" />
                sharing before cost-effective users. Actual focused services
                <br className="hidden sm:block" />
                before highly efficient human capital.
            </p>

            {/* BOUTON VIDEO */}
            <a id="play-video"
                href="https://vimeo.com/142705963"
                className="
                    bg-blue-500 text-white mt-0
                    px-16 sm:px-16 lg:px-30
                    py-2 sm:py-4 lg:py-5
                    rounded-full
                    text-base sm:text-lg lg:text-2xl
                    inline-flex items-center gap-3
                    hover:bg-gray-600 transition duration-300
                    lg:mb-20 mb-4
                "
            >
                Play
                <img
                    id="play-icon"
                    src="/images/play-button_17752531.png"
                    alt="Play icon"
                    className="w-6 h-6 invert"
                />
                Video
            </a>

            {/* BOUTON PRE-ORDER */}
            <a
                id="product-choose2"
                href="#product-choose"
                className="
                    bg-orange-500 text-white
                    px-18 py-4
                    rounded-full
                    text-base sm:text-lg
                    font-bold
                    lg:hidden
                    hover:bg-gray-600 transition duration-300
                    mb-16
                "
            >
                PRE-ORDER NOW
            </a>

            {/* IMAGE APPLE WATCH */}
            <div className="relative">
                <img
                    id="apple-watch"
                    src="/images/apple-watch.png"
                    alt="Apple Watch"
                    className="
                    w-48 sm:w-64 md:w-72 lg:w-80
                    drop-shadow-2xl
                "
                />
                <img src="/images/table.png" alt="table" />
            </div>
        </section>
    );
}
