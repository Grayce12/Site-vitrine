const colorOptions = [
    { name: "Blue", className: "bg-sky-400", ring: "ring-sky-400" },
    { name: "Purple", className: "bg-violet-500", ring: "ring-violet-500" },
    { name: "Pink", className: "bg-pink-500", ring: "ring-pink-500" },
    { name: "Yellow", className: "bg-yellow-400", ring: "ring-yellow-400" },
    { name: "Green", className: "bg-emerald-400", ring: "ring-emerald-400" },
];

export default function PreOrderModal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <section
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6 py-10 backdrop-blur-sm"
            onClick={onClose}
        >
            <div className="mx-auto w-full max-w-6xl">
                <div
                    className="relative max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
                    onClick={(event) => event.stopPropagation()}
                >
                    <button
                        type="button"
                        aria-label="Close"
                        onClick={onClose}
                        className="absolute right-6 top-6 text-2xl text-gray-300 transition hover:text-gray-500"
                    >
                        ×
                    </button>
                    <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
                        <div className="flex flex-col items-center justify-center bg-white px-10 py-16">
                            <img
                                src="/images/apple-watch.png"
                                alt="Smart watch"
                                className="w-full max-w-sm drop-shadow-2xl"
                            />
                            <div className="mt-10 flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-gray-300" />
                                <span className="h-2 w-2 rounded-full bg-gray-300" />
                                <span className="h-2 w-2 rounded-full bg-blue-500" />
                            </div>
                        </div>

                        <div className="flex flex-col justify-between gap-8 border-l border-gray-100 px-10 py-14">
                            <div className="space-y-4">
                                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
                                    Smart Watch
                                </div>
                                <div className="text-3xl font-semibold text-gray-700">
                                    Sports Edition
                                </div>
                                <div className="text-sm uppercase tracking-[0.2em] text-gray-400">
                                    Model AS1500
                                </div>

                                <div className="flex flex-wrap items-center gap-4 pt-4">
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
                                        8mm Silver Aluminum Case with Blue Sport Band. Its
                                        perfect fit for tracking fitness. 100% waterproof.
                                        Buy this limited edition sports edition.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-8 border-t border-gray-100 pt-8">
                                <div className="grid gap-8 sm:grid-cols-[1.1fr_0.6fr_0.6fr]">
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
                                                    className={`h-7 w-7 rounded-full ${color.className} ${
                                                        index === 0
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
                                            M
                                            <span className="text-gray-400">▾</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-8">
                                <button
                                    type="button"
                                    className="w-full rounded-lg bg-blue-600 py-5 text-lg font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-200 transition hover:bg-blue-500"
                                >
                                    Pre-order now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
