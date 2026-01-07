// Données de la collection (tu peux aussi les passer en prop)
const collectionItems = [
    {
        img: "images/collection-1.jpg",
        title: "Watch Limited Edition",
        category: "Stainless steel case",
        price: "$399",
    },
    {
        img: "images/collection-2.jpg",
        title: "Watch Bracelet",
        category: "White strap & Stainless steel",
        price: "$299",
    },
    {
        img: "images/collection-3.jpg",
        title: "Watch Original",
        category: "The First Watch ever released",
        price: "$249",
    },
    {
        img: "images/collection-4.jpg",
        title: "Watch Sports Edition",
        category: "Water proof and Fitness tracking",
        price: "$399",
    },
];

const CollectionItem = ({ img, title, category, price }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center">
        <img src={img} alt={title} className="w-full h-64 object-cover" />
        <div className="p-4">
            <h4 className="text-xl font-semibold text-gray-700 mb-1">{title}</h4>
            <h5 className="text-gray-400 mb-2">{category}</h5>
            <h4 className="text-blue-600 font-bold mb-4">{price}</h4>
            <a
                href="#product-choose"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                CHOOSE
            </a>
        </div>
    </div>
);

const OurCollection = ({ items = collectionItems }) => {
    return (
        <section className="py-45 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-bold text-gray-700 mb-4">OUR COLLECTION</h2>
                    <p
                    id="description"
                     className="text-gray-500 text-lg max-w-2xl mx-auto">
                        You are unique. You have unique style and you need a unique watch for you.
                        Choose from our collection of watches.
                    </p>
                </div>

                {/* Collection Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <CollectionItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurCollection;
