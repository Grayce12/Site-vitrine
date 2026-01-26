import { useState, useEffect } from "react";


export default function Navbar({ onPreOrder }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted] = useState(true);

    const handlePreOrder = () => {
        setIsMenuOpen(false);
        if (onPreOrder) {
            onPreOrder();
        }
    };
   

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`
        w-full fixed top-0 left-0 z-60 py-2 md:py-3 transition-all duration-300
        ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
      `}
            style={{ willChange: "transform, opacity" }}
        >
            <nav className="container mx-auto flex items-center justify-between py-2 px-4 md:px-2">

                {/* Logo + Hamburger */}
                <div className="flex items-center justify-between w-full md:w-auto">
                    {/* Logo */}
                    <a href="#header">
                        <img src="/images/logo.png" alt="Logo" className="h-12" />
                    </a>
                </div>

                {/* Menu Desktop */}
                <ul className="hidden md:flex space-x-8 text-gray-400 text-lg items-center">
                    <li><a href="#product" className="hover:text-blue-500">PRODUCT</a></li>
                    <li><a href="#features" className="hover:text-blue-500">FEATURES</a></li>
                    <li><a href="#reviews" className="hover:text-blue-500">REVIEWS</a></li>

                    {/* Dropdown "PAGES" */}
                    <li className="relative">
                        <a href="#" className="hover:text-blue-500">PAGES</a>
                        <ul className={`absolute top-full left-0 mt-2 bg-white text-gray-700 shadow-lg rounded-md w-48 ${isMenuOpen ? 'block' : 'hidden'}`}>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/index.html#" className="block px-4 py-2 hover:bg-gray-100">Pre-order (Email)</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/index_email.html" className="block px-4 py-2 hover:bg-gray-100">Email Signup (Mailchimp)</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/index_buy_paypal.html" className="block px-4 py-2 hover:bg-gray-100">Buy Now (PayPal)</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html" className="block px-4 py-2 hover:bg-gray-100">Kickstarter Campaign</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/index_indegogo.html" className="block px-4 py-2 hover:bg-gray-100">Indegogo Campaign</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/index_boxed.html" className="block px-4 py-2 hover:bg-gray-100">Boxed Version</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/index_rtl.html" className="block px-4 py-2 hover:bg-gray-100">RTL Version</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/index_video.html" className="block px-4 py-2 hover:bg-gray-100">Video Background</a></li>
                            <li className="border-t border-gray-300"></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/blog.html" className="block px-4 py-2 hover:bg-gray-100">Blog</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/blog-single.html" className="block px-4 py-2 hover:bg-gray-100">Blog Single</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/about.html" className="block px-4 py-2 hover:bg-gray-100">About Us</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/faq.html" className="block px-4 py-2 hover:bg-gray-100">FAQ</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/shortcodes.html" className="block px-4 py-2 hover:bg-gray-100">Shortcodes</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact" className="hover:text-blue-500">CONTACT</a></li>
                </ul>

                {/* Call to Action */}
                <button
                    id="product-choose"
                    type="button"
                    onClick={handlePreOrder}
                    className="hidden md:block bg-orange-500 text-white text-lg px-8 py-3 rounded-full hover:bg-gray-600 transition duration-300 ml-4"
                >
                    PRE-ORDER NOW
                </button>

                {/* Burger menu mobile */}
                <button className="md:hidden ml-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <img id="menu-icon" src="/images/menu-icon.png" alt="Menu Icon" className="mt-0" />
                </button>
            </nav>

            {/* Menu mobile */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md w-full absolute top-full left-0 z-40">
                    <ul className="flex flex-col space-y-2 p-4 text-gray-700">
                        <li><a href="#product" className="block px-2 py-2 hover:bg-gray-100 rounded">PRODUCT</a></li>
                        <li><a href="#features" className="block px-2 py-2 hover:bg-gray-100 rounded">FEATURES</a></li>
                        <li><a href="#reviews" className="block px-2 py-2 hover:bg-gray-100 rounded">REVIEWS</a></li>
                        <li>
                            <a href="#" className="block px-2 py-2 hover:bg-gray-100 rounded">PAGES</a>
                            <ul className="pl-4 mt-1 space-y-1">
                                <li><a href="https://demo.web3canvas.com/themeforest/proland/index.html#" className="block px-2 py-1 hover:bg-gray-100 rounded">Pre-order (Email)</a></li>
                                <li><a href="https://demo.web3canvas.com/themeforest/proland/index_email.html" className="block px-2 py-1 hover:bg-gray-100 rounded">Email Signup (Mailchimp)</a></li>
                                <li><a href="https://demo.web3canvas.com/themeforest/proland/index_buy_paypal.html" className="block px-2 py-1 hover:bg-gray-100 rounded">Buy Now (PayPal)</a></li>
                                <li><a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html" className="block px-2 py-1 hover:bg-gray-100 rounded">Kickstarter Campaign</a></li>
                                <li><a href="https://demo.web3canvas.com/themeforest/proland/index_indegogo.html" className="block px-2 py-1 hover:bg-gray-100 rounded">Indegogo Campaign</a></li>
                                <li><a href="https://demo.web3canvas.com/themeforest/proland/index_boxed.html" className="block px-2 py-1 hover:bg-gray-100 rounded">Boxed Version</a></li>
                                <li><a href="https://demo.web3canvas.com/themeforest/proland/index_rtl.html" className="block px-2 py-1 hover:bg-gray-100 rounded">RTL Version</a></li>
                                <li><a href="https://demo.web3canvas.com/themeforest/proland/index_video.html" className="block px-2 py-1 hover:bg-gray-100 rounded">Video Background</a></li>
                            </ul>
                        </li>
                        <li><a href="#contact" className="block px-2 py-2 hover:bg-gray-100 rounded">CONTACT</a></li>
                        <li>
                            <button
                                type="button"
                                onClick={handlePreOrder}
                                className="w-full block bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300 text-center"
                            >
                                PRE-ORDER NOW
                            </button>
                        </li>
                    </ul>
                </div>
            )}

            
        </header>
    );
}
