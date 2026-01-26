import { useEffect, useState } from "react";

const watchSlides = [
    { src: "/images/the-watch.png", alt: "Blue smart watch" },
    { src: "/images/the-watch-2.png", alt: "Pink smart watch" },
    { src: "/images/the-watch-3.png", alt: "Green smart watch" },
];

const colorOptions = [
    { name: "Blue", className: "bg-sky-400", ring: "ring-sky-400" },
    { name: "Purple", className: "bg-violet-500", ring: "ring-violet-500" },
    { name: "Pink", className: "bg-pink-500", ring: "ring-pink-500" },
    { name: "Yellow", className: "bg-yellow-400", ring: "ring-yellow-400" },
    { name: "Green", className: "bg-emerald-400", ring: "ring-emerald-400" },
];

export default function PreOrderModal({ isOpen, onClose }) {
    const [isCheckout, setIsCheckout] = useState(false);
    const [activeSlide, setActiveSlide] = useState(2);
    const checkoutSlideIndex = 1;

    useEffect(() => {
        if (!isOpen || isCheckout) return undefined;

        const interval = setInterval(() => {
            setActiveSlide((current) => (current + 1) % watchSlides.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [isOpen, isCheckout]);

    const handleClose = () => {
        setIsCheckout(false);
        setActiveSlide(2);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <section
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6 py-8 backdrop-blur-sm"
            onClick={handleClose}
        >
            <div className="mx-auto w-full max-w-5xl">
                <div
                    className="relative max-h-[92vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
                    onClick={(event) => event.stopPropagation()}
                >
                    <button
                        type="button"
                        aria-label="Close"
                        onClick={handleClose}
                        className="absolute right-6 top-6 text-2xl text-gray-300 transition hover:text-gray-500"
                    >
                        ×
                    </button>

                    <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
                        <div className="flex flex-col items-center justify-center bg-gray-50 px-8 py-12">
                            <img
                                src={
                                    isCheckout
                                        ? watchSlides[checkoutSlideIndex].src
                                        : watchSlides[activeSlide].src
                                }
                                alt={
                                    isCheckout
                                        ? watchSlides[checkoutSlideIndex].alt
                                        : watchSlides[activeSlide].alt
                                }
                                className="w-full max-w-[18rem] drop-shadow-2xl sm:max-w-xs"
                            />

                            <div className="mt-8 flex items-center gap-3">
                                {watchSlides.map((slide, index) => (
                                    <button
                                        key={slide.alt}
                                        type="button"
                                        aria-label={`Show ${slide.alt}`}
                                        onClick={() => {
                                            if (!isCheckout) setActiveSlide(index);
                                        }}
                                        className={`h-2 w-2 rounded-full transition ${(isCheckout ? checkoutSlideIndex : activeSlide) === index
                                                ? "bg-blue-500"
                                                : "bg-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col justify-between gap-7 border-l border-gray-100 px-8 py-12">
                            {isCheckout ? (
                                <>
                                    <div className="flex items-center justify-end">
                                        <button
                                            type="button"
                                            onClick={() => setIsCheckout(false)}
                                            className="rounded-full border border-gray-200 px-8 py-2 text-xs font-semibold uppercase tracking-wide text-gray-400 transition hover:text-gray-600"
                                        >
                                            Go Back
                                        </button>
                                    </div>

                                    <div className="space-y-5">
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-gray-500 outline-none placeholder:text-gray-300 focus:border-blue-400"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-gray-500 outline-none placeholder:text-gray-300 focus:border-blue-400"
                                            />
                                        </div>

                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-gray-500 outline-none placeholder:text-gray-300 focus:border-blue-400"
                                        />

                                        <input
                                            type="text"
                                            placeholder="Address Line 1"
                                            className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-gray-500 outline-none placeholder:text-gray-300 focus:border-blue-400"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Address Line 2"
                                            className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-gray-500 outline-none placeholder:text-gray-300 focus:border-blue-400"
                                        />

                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <input
                                                type="text"
                                                placeholder="State"
                                                className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-gray-500 outline-none placeholder:text-gray-300 focus:border-blue-400"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Zip Code"
                                                className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-gray-500 outline-none placeholder:text-gray-300 focus:border-blue-400"
                                            />
                                        </div>

                                        <select
                                            className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-gray-500 outline-none focus:border-blue-400"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>
                                                Choose a country
                                            </option>
                                            <option>France</option>
                                            <option>Belgium</option>
                                            <option>Switzerland</option>
                                        </select>
                                    </div>

                                    <div className="border-t border-gray-100 pt-6">
                                        <button
                                            type="button"
                                            className="w-full rounded-lg bg-blue-600 py-5 text-lg font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-200 transition hover:bg-blue-500"
                                        >
                                            Finish purchase
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="space-y-4">
                                        <div className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
                                            Smart Watch
                                        </div>
                                        <div className="text-3xl font-semibold text-gray-700">
                                            Sports Edition
                                        </div>
                                        <div className="text-sm uppercase tracking-[0.2em] text-gray-400">
                                            Model AS1500
                                        </div>

                                        <div className="flex flex-wrap items-center gap-4 pt-3">
                                            <span className="text-2xl text-gray-400 line-through">
                                                $349
                                            </span>
                                            <span className="text-4xl font-semibold text-blue-600">
                                                $299
                                            </span>
                                            <span className="rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                                                Early Bird Offer
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-6 border-t border-gray-100 pt-6 text-base text-gray-400">
                                        <div className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500" />
                                            <p>
                                                8mm Silver Aluminum Case with Blue Sport Band. Its perfect
                                                fit for tracking fitness. 100% waterproof. Buy this limited
                                                edition sports edition.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-8 border-t border-gray-100 pt-7">
                                        <div className="grid gap-6 sm:grid-cols-[1.1fr_0.7fr_0.7fr]">
                                            <div>
                                                <div className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                                                    Choose a color
                                                </div>
                                                <div className="mt-4 flex items-center gap-3">
                                                    {colorOptions.map((color, index) => (
                                                        <button
                                                            key={color.name}
                                                            type="button"
                                                            aria-label={color.name}
                                                            className={`h-7 w-7 rounded-full ${color.className} ${index === 0
                                                                    ? `ring-4 ring-offset-2 ${color.ring}`
                                                                    : "ring-0"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <div className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                                                    Qty
                                                </div>
                                                <div className="mt-4 flex items-center overflow-hidden rounded-md border border-gray-200 text-gray-600">
                                                    <span className="flex h-10 w-12 items-center justify-center text-sm">
                                                        1
                                                    </span>
                                                    <div className="flex flex-col border-l border-gray-200">
                                                        <button
                                                            type="button"
                                                            className="h-5 w-8 text-lg leading-none text-gray-400 hover:text-gray-600"
                                                        >
                                                            +
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="h-5 w-8 text-lg leading-none text-gray-400 hover:text-gray-600"
                                                        >
                                                            −
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                                                    Size
                                                </div>
                                                <button
                                                    type="button"
                                                    className="mt-4 flex h-10 w-full items-center justify-between rounded-md border border-gray-200 px-4 text-sm font-semibold text-gray-600"
                                                >
                                                    M <span className="text-gray-400">▾</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-100 pt-7">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setIsCheckout(true);
                                                setActiveSlide(checkoutSlideIndex);
                                            }}
                                            className="w-full rounded-lg bg-blue-600 py-5 text-lg font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-200 transition hover:bg-blue-500"
                                        >
                                            Pre-order now
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
