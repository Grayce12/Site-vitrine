// Données de la collection (tu peux aussi les passer en prop)
const collectionItems = [
    {
        img: "images/collection-1.jpg",
        title: "Watch Limited Edition",
        category: "Stainless steel case",
        price: "$399",
    },
    {
        img: "images/collection-1.jpg",
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
        img: "images/collection-1.jpg",
        title: "Watch Sports Edition",
        category: "Water proof and Fitness tracking",
        price: "$399",
    },
];

const CollectionItem = ({ img, title, category, price }) => (
    <div className="bg-white rounded-lg overflow-hidden flex flex-col items-center text-center">
        <img src={img} alt={title} className="w-full h-64 object-cover mb-3" />
        <div className="p-4">
            <h4 className="text-lg font-semibold text-blue-500">{title}</h4>
            <h5 className="text-gray-300 text-sm mb-2">{category}</h5>
            <h4 className="text-orange-500 text-xl font-bold mb-6">{price}</h4>
            <a
                href="#product-choose"
                className="px-6 py-1 bg-white text-gray-300 text-sm border border-gray-300 rounded-full hover:bg-gray-600 transition"
            >
                CHOOSE
            </a>
        </div>
    </div>
);

const OurCollection = ({ items = collectionItems }) => {
    return (
        <section className="py-30 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-bold text-gray-700 mb-4">OUR COLLECTION</h2>
                    <p
                    id="description"
                     className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-30">
                        You are unique. You have unique style and you need a unique watch <br /> for you.
                        Choose from our collection of watches.
                    </p>
                </div>

                {/* Collection Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
                    {items.map((item, index) => (
                        <CollectionItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurCollection;
