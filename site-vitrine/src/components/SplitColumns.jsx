import React from "react";

// Données par défaut pour les colonnes
const splitColumnsData = [
    {
        title: "Every Apps you wanted",
        text: "You won’t just send and receive messages, calls, and mail more easily and efficiently. You’ll express yourself in unique, fun, and more personal ways. Communicating with Watch is discreet, sophisticated, and nuanced. A whole new way to connect with others.",
        image: "/images/split-1.jpg",
        imageLeft: true,
    },
    {
        title: "Health and Fitness",
        text: "Fitness isn’t just about running, biking, or hitting the gym. It’s also about being active throughout the day. Watch measures all the ways you move, such as walking the dog, taking the stairs, or playing with your kids. It even keeps track of when you stand up.",
        image: "/images/split-2.jpg",
        imageLeft: false,
    },
];

const SplitColumn = ({ title, text, image, imageLeft = true }) => (
    <div
        className={`flex flex-col md:flex-row lg:flex-row items-stretch gap-0 ${!imageLeft ? "md:flex-row-reverse lg:flex-row-reverse" : ""}`}
    >
        <div className="md:w-1/2 lg:w-1/2 h-full">
            <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2 lg:w-1/2 p-8 flex flex-col justify-center mt-40 h-full">
            <h2 id="spitcolums" className="text-4xl font-bold text-gray-700">{title}</h2>
            <p className="text-gray-500 text-xl leading-relaxed">{text}</p>
        </div>
    </div>
);

export default function SplitColumns({ columns = splitColumnsData }) {
    return (
        <section className="bg-white">
            <div className="max-w-full text-left">
                {columns.map((col, index) => (
                    <SplitColumn key={index} {...col} />
                ))}
            </div>
        </section>
    );
}
