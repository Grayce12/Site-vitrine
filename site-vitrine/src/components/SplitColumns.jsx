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
        <div className={`md:w-1/2 lg:w-1/2 p-12 flex flex-col justify-center h-full ${imageLeft ? 'text-left px-20 mt-40' : 'text-center px-30 mt-40'}`}>
            <h2 id="splitcolumns" className={`${imageLeft ? 'text-5xl text-left pl-5' : 'text-4xl text-left pl-35'} font-bold text-gray-700 mb-6`}>{title}</h2>
            <p className={`${imageLeft ? 'text-gray-300 text-xl max-w-xl px-5' : 'text-gray-300 text-xl max-w-xl mx-auto text-left px-5'} leading-loose`}>{text}</p>
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
